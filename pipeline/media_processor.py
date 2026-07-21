"""
Media Processor Module: FFmpeg Stitching & Subtitle Burn-In
"""

import subprocess
import os

class MediaProcessor:
    def __init__(self, ffmpeg_path="ffmpeg"):
        self.ffmpeg_path = ffmpeg_path

    def build_ffmpeg_stitch_command(self, video_clips, audio_track, srt_file, output_file):
        """
        Generates production FFmpeg CLI command to concatenate scenes, add voice audio,
        and burn in hard subtitles.
        """
        # Create a file list for ffmpeg concat
        concat_list = "file_list.txt"
        with open(concat_list, "w", encoding="utf-8") as f:
            for clip in video_clips:
                f.write(f"file '{clip}'\n")

        cmd = [
            self.ffmpeg_path,
            "-y",
            "-f", "concat",
            "-safe", "0",
            "-i", concat_list,
            "-i", audio_track,
            "-vf", f"subtitles={srt_file}:force_style='Fontname=Plus Jakarta Sans,Fontsize=22,PrimaryColour=&H00FFFF,OutlineColour=&H000000,BorderStyle=1,Outline=2'",
            "-c:v", "libx264",
            "-preset", "medium",
            "-crf", "18",
            "-c:a", "aac",
            "-b:a", "192k",
            "-shortest",
            output_file
        ]
        return " ".join(cmd)

if __name__ == "__main__":
    mp = MediaProcessor()
    cmd_str = mp.build_ffmpeg_stitch_command(
        ["scene1.mp4", "scene2.mp4", "scene3.mp4", "scene4.mp4"],
        "voiceover.mp3",
        "subtitles.srt",
        "final_campaign_video.mp4"
    )
    print("Generated FFmpeg Command:\n", cmd_str)
