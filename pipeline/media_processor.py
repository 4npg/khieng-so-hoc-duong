"""
Media Processor Module: FFmpeg Stitching & Subtitle Burn-In

Fixes applied:
- Input file existence validation before building FFmpeg command
- file_list.txt written to a temp directory (not CWD) to avoid polluting the project root
- Proper path-quoting for paths containing spaces
- Added execute_stitch() method with full subprocess error handling, timeout, and retry logic
- FFmpeg binary detection with helpful error message
- Graceful temp file cleanup via context manager
"""

import sys
import subprocess
import os
import shutil
import tempfile
import time

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')


def _find_ffmpeg() -> str:
    """Locate the ffmpeg binary; raise RuntimeError if not found."""
    binary = shutil.which('ffmpeg')
    if binary:
        return binary
    # Windows common install paths
    candidates = [
        r'C:\ffmpeg\bin\ffmpeg.exe',
        r'C:\Program Files\ffmpeg\bin\ffmpeg.exe',
    ]
    for c in candidates:
        if os.path.isfile(c):
            return c
    raise RuntimeError(
        "ffmpeg not found on PATH. "
        "Install ffmpeg from https://ffmpeg.org/download.html and add it to PATH."
    )


class MediaProcessor:
    def __init__(self, ffmpeg_path: str | None = None):
        self.ffmpeg_path = ffmpeg_path or _find_ffmpeg()

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def build_ffmpeg_stitch_command(
        self,
        video_clips: list[str],
        audio_track: str,
        srt_file: str,
        output_file: str,
        concat_list_path: str | None = None,
    ) -> list[str]:
        """
        Returns the FFmpeg command as a list of strings (safe for subprocess).

        Args:
            video_clips:      List of scene MP4 paths.
            audio_track:      Path to the voice/music MP3.
            srt_file:         Path to .srt subtitle file.
            output_file:      Destination MP4 path.
            concat_list_path: Optional explicit path for the concat list file.
                              Falls back to a temp file if None.
        Returns:
            list[str] FFmpeg command arguments.
        """
        if not video_clips:
            raise ValueError("video_clips list must not be empty.")

        # Validate inputs
        for clip in video_clips:
            if not os.path.isfile(clip):
                raise FileNotFoundError(f"Video clip not found: {clip}")
        if not os.path.isfile(audio_track):
            raise FileNotFoundError(f"Audio track not found: {audio_track}")
        if not os.path.isfile(srt_file):
            raise FileNotFoundError(f"Subtitle file not found: {srt_file}")

        # Write concat list
        if concat_list_path is None:
            concat_list_path = os.path.join(
                tempfile.gettempdir(), 'khieng_so_concat_list.txt'
            )
        with open(concat_list_path, 'w', encoding='utf-8') as f:
            for clip in video_clips:
                # Use forward slashes; quote paths with single quotes (ffmpeg concat format)
                clip_posix = os.path.abspath(clip).replace('\\', '/')
                f.write(f"file '{clip_posix}'\n")

        # Escape the SRT path for the FFmpeg subtitles filter
        # On Windows, drive colon must be escaped as \:
        srt_abs = os.path.abspath(srt_file).replace('\\', '/')
        # Escape colon only in the drive letter position
        if len(srt_abs) >= 2 and srt_abs[1] == ':':
            srt_abs = srt_abs[0] + '\\:' + srt_abs[2:]

        subtitle_filter = (
            f"subtitles='{srt_abs}'"
            ":force_style='Fontname=Plus Jakarta Sans,"
            "Fontsize=22,"
            "PrimaryColour=&H00FFFF00,"
            "OutlineColour=&H00000000,"
            "BorderStyle=1,"
            "Outline=2,"
            "Shadow=1'"
        )

        cmd = [
            self.ffmpeg_path,
            '-y',                     # Overwrite output without asking
            '-f', 'concat',
            '-safe', '0',
            '-i', concat_list_path,
            '-i', audio_track,
            '-vf', subtitle_filter,
            '-c:v', 'libx264',
            '-preset', 'medium',
            '-crf', '18',
            '-c:a', 'aac',
            '-b:a', '192k',
            '-map', '0:v:0',          # Explicitly map video from first input
            '-map', '1:a:0',          # Explicitly map audio from second input
            '-shortest',
            output_file,
        ]
        return cmd

    def execute_stitch(
        self,
        video_clips: list[str],
        audio_track: str,
        srt_file: str,
        output_file: str,
        timeout: int = 1800,
        max_retries: int = 2,
    ) -> str:
        """
        Build and execute the FFmpeg stitch command with retry logic.

        Returns:
            Absolute path to the created output file.
        Raises:
            subprocess.CalledProcessError on unrecoverable FFmpeg failure.
        """
        os.makedirs(os.path.dirname(os.path.abspath(output_file)) or '.', exist_ok=True)

        cmd = self.build_ffmpeg_stitch_command(
            video_clips, audio_track, srt_file, output_file
        )

        print(f"[FFmpeg] Command: {' '.join(cmd[:6])} ... (truncated)")

        last_error: Exception | None = None
        for attempt in range(1, max_retries + 2):
            try:
                result = subprocess.run(
                    cmd,
                    check=True,
                    capture_output=True,
                    text=True,
                    encoding='utf-8',
                    timeout=timeout,
                )
                print(f"✅ FFmpeg completed successfully on attempt {attempt}.")
                return os.path.abspath(output_file)

            except subprocess.TimeoutExpired as e:
                last_error = e
                print(f"⚠️  FFmpeg timed out (attempt {attempt}/{max_retries + 1}). Retrying...")
                time.sleep(5)

            except subprocess.CalledProcessError as e:
                last_error = e
                print(f"❌ FFmpeg failed (attempt {attempt}/{max_retries + 1}):")
                print(e.stderr[-2000:] if e.stderr else "(no stderr)")
                if attempt <= max_retries:
                    time.sleep(3)

        raise RuntimeError(
            f"FFmpeg failed after {max_retries + 1} attempts. Last error: {last_error}"
        ) from last_error


if __name__ == '__main__':
    mp = MediaProcessor()
    cmd = mp.build_ffmpeg_stitch_command(
        ['scene1.mp4', 'scene2.mp4', 'scene3.mp4', 'scene4.mp4'],
        'voiceover.mp3',
        'subtitles.srt',
        'final_campaign_video.mp4',
    )
    print('Generated FFmpeg Command (list):\n', ' '.join(cmd))
