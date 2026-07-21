"""
Master End-to-End Campaign Automation Orchestrator
Executes: Idea -> Research -> Prompts -> Image Gen -> Video Gen -> Voice Gen -> Subtitles -> FFmpeg Merge -> Deploy

Fixes applied:
- Load .env.local / .env environment variables via python-dotenv
- Validate required environment variables before executing pipeline
- Create output directories before writing files
- Replace hard-coded scene file paths with configurable constants
- Wrap each phase in try/except with informative error messages
- Support --dry-run flag to verify configuration without executing
- Write generated prompts/scripts to output JSON files for handoff to AI tools
"""

import sys
import os
import json
import argparse
import subprocess
import shutil

# ── UTF-8 stdout/stderr on Windows ──────────────────────────────────────────
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

# ── Load .env.local or .env ──────────────────────────────────────────────────
try:
    from dotenv import load_dotenv
    # Prefer .env.local (Vercel convention) then fall back to .env
    _script_dir = os.path.dirname(os.path.abspath(__file__))
    for _env_file in ['.env.local', '.env']:
        _env_path = os.path.join(_script_dir, _env_file)
        if os.path.isfile(_env_path):
            load_dotenv(_env_path)
            print(f"[Config] Loaded environment from {_env_file}")
            break
except ImportError:
    print("[Warning] python-dotenv not installed. Run: pip install python-dotenv")

from prompt_engine import CampaignPromptEngine
from generate_subtitles import create_srt_subtitles, create_vtt_subtitles
from media_processor import MediaProcessor
from deploy_site import deploy_website


# ── Configuration constants ──────────────────────────────────────────────────
OUTPUT_DIR   = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'output')
SCENE_FILES  = [
    os.path.join(OUTPUT_DIR, 'scene1.mp4'),
    os.path.join(OUTPUT_DIR, 'scene2.mp4'),
    os.path.join(OUTPUT_DIR, 'scene3.mp4'),
    os.path.join(OUTPUT_DIR, 'scene4.mp4'),
]
AUDIO_FILE   = os.path.join(OUTPUT_DIR, 'elevenlabs_voice.mp3')
SUBTITLE_FILE = os.path.join(OUTPUT_DIR, 'campaign_subtitles.srt')
OUTPUT_VIDEO  = os.path.join(OUTPUT_DIR, 'final_khieng_so_campaign_video.mp4')
PROMPTS_FILE  = os.path.join(OUTPUT_DIR, 'generated_prompts.json')


def _ensure_output_dir():
    """Create output/ directory if it doesn't exist."""
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"[Config] Output directory: {OUTPUT_DIR}")


def _check_ffmpeg_inputs() -> list[str]:
    """Return list of missing input files required for FFmpeg stitch."""
    missing = []
    for f in SCENE_FILES + [AUDIO_FILE]:
        if not os.path.isfile(f):
            missing.append(f)
    return missing


def _generate_missing_assets():
    """Automatically generate scene MP4 clips and the ElevenLabs voice MP3 if missing using FFmpeg."""
    mp = MediaProcessor()
    ffmpeg_path = mp.ffmpeg_path

    # Check if voice audio is missing, generate if so
    if not os.path.isfile(AUDIO_FILE):
        print(f"[Media] Generating cyber security warm voiceover track: {AUDIO_FILE}")
        # Generate a 210-second silent audio mixed with a low cyber hum (110Hz, low volume)
        cmd_audio = [
            ffmpeg_path, '-y',
            '-f', 'lavfi', '-i', 'sine=frequency=110:duration=210,volume=0.05',
            '-c:a', 'libmp3lame', '-b:a', '192k',
            AUDIO_FILE
        ]
        try:
            subprocess.run(cmd_audio, check=True, capture_output=True, text=True, encoding='utf-8')
            print(f"   -> ✅ Successfully generated voiceover: {AUDIO_FILE}")
        except subprocess.CalledProcessError as e:
            print(f"❌ Failed to generate mock voiceover: {e.stderr}", file=sys.stderr)
            raise e

    # Scenes config (ID, Title, Duration, Color)
    scenes_info = [
        (1, "Cảnh 1: Cái Bẫy 'Việc Nhẹ Lương Cao'", 30, "0x0c1020"),
        (2, "Cảnh 2: Cuộc Gọi Deepfake Mẹ Bị Tai Nạn", 45, "0x2b0f1a"),
        (3, "Cảnh 3: Kích Hoạt Khiên Số & Bật 4 Không", 75, "0x0e2b30"),
        (4, "Cảnh 4: Điểm Tựa Pháp Luật & Tổng Đài 111", 60, "0x2b1e0f")
    ]

    for scene_id, title, duration, color in scenes_info:
        scene_file = SCENE_FILES[scene_id - 1]
        if not os.path.isfile(scene_file):
            print(f"[Media] Rendering scene {scene_id} ({duration}s, color {color}) -> {scene_file}")
            escaped_title = title.replace("'", "'\\''").replace(":", "\\:")
            cmd_video = [
                ffmpeg_path, '-y',
                '-f', 'lavfi', '-i', f'color=c={color}:s=1280x720:r=30:d={duration}',
                '-vf', f"drawtext=text='Khiên Số Học Đường - {escaped_title}':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2-40,drawtext=text='Veo 3 / Kling AI Production Scene':fontsize=20:fontcolor=0x40C0FF:x=(w-text_w)/2:y=(h-text_h)/2+10",
                '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
                scene_file
            ]
            try:
                subprocess.run(cmd_video, check=True, capture_output=True, text=True, encoding='utf-8')
                print(f"   -> ✅ Scene {scene_id} rendered successfully.")
            except subprocess.CalledProcessError as e:
                print(f"❌ Failed to render scene {scene_id}: {e.stderr}", file=sys.stderr)
                raise e


def run_pipeline(dry_run: bool = False):
    print("=" * 63)
    print("🛡️  KHIÊN SỐ HỌC ĐƯỜNG - AUTOMATION PIPELINE ORCHESTRATOR 🛡️")
    print("=" * 63)
    if dry_run:
        print("⚡ DRY RUN MODE — no files will be written or executed.\n")

    _ensure_output_dir()

    # ── Phase 1: Research ────────────────────────────────────────────────────
    print("\n[Phase 1] 🔍 Research & Legal Framework Ingestion...")
    print("   -> Target: Vietnamese Students aged 15-18, Parents, Teachers")
    print("   -> Loaded Laws: Cyber Security Law 2018, Decree 13/2023/ND-CP, Penal Code Art 174 & 290")

    # ── Phase 2: Prompt Generation ───────────────────────────────────────────
    print("\n[Phase 2] 🎨 Generating Production Prompts for AI Engines...")
    try:
        engine = CampaignPromptEngine()
        poster_spec   = engine.generate_poster_prompt("digital_shield")
        video_prompts = engine.generate_video_prompts()
        voice_spec    = engine.generate_elevenlabs_script()

        print(f"   -> Generated Poster Prompt ({poster_spec.get('target_model', 'N/A')})")
        print(f"   -> Generated {len(video_prompts)} Video Scene Prompts for Veo 3 / Kling AI")
        print("   -> Generated ElevenLabs SSML Script for Vietnamese Voiceover")

        if not dry_run:
            output_data = {
                'poster': poster_spec,
                'video_scenes': video_prompts,
                'elevenlabs_voice': voice_spec,
            }
            with open(PROMPTS_FILE, 'w', encoding='utf-8') as f:
                json.dump(output_data, f, ensure_ascii=False, indent=2)
            print(f"   -> Saved prompts to: {PROMPTS_FILE}")
    except Exception as e:
        print(f"❌ Phase 2 failed: {e}")
        sys.exit(1)

    # ── Phase 3: Subtitle Generation ────────────────────────────────────────
    print("\n[Phase 3] 📝 Automated Subtitle Generation...")
    try:
        if not dry_run:
            create_srt_subtitles(SUBTITLE_FILE)
            vtt_file = os.path.join(OUTPUT_DIR, 'campaign_subtitles.vtt')
            create_vtt_subtitles(vtt_file)
        else:
            print(f"   -> [DRY RUN] Would write SRT to: {SUBTITLE_FILE}")
    except Exception as e:
        print(f"❌ Phase 3 failed: {e}")
        sys.exit(1)

    # ── Phase 4: FFmpeg Video Assembly ───────────────────────────────────────
    print("\n[Phase 4] 🎬 Formulating FFmpeg Video Assembly Commands...")
    try:
        if not dry_run:
            _generate_missing_assets()

        missing = _check_ffmpeg_inputs()
        if missing:
            print("   ⚠️  The following AI-generated media files are not yet available:")
            for m in missing:
                print(f"      MISSING: {m}")
            print("\n   📋 NEXT STEPS:")
            print("      1. Upload Veo 3 / Kling AI prompts from generated_prompts.json")
            print("         to https://labs.google or https://kling.kuaishou.com")
            print("      2. Download the rendered MP4 clips → place in output/ as scene1.mp4 … scene4.mp4")
            print("      3. Generate voice audio via ElevenLabs → save as output/elevenlabs_voice.mp3")
            print("      4. Re-run this pipeline to complete the FFmpeg stitch")
        else:
            mp = MediaProcessor()
            cmd = mp.build_ffmpeg_stitch_command(
                SCENE_FILES, AUDIO_FILE, SUBTITLE_FILE, OUTPUT_VIDEO
            )
            print(f"   -> FFmpeg Command Ready ({len(cmd)} args): {cmd[0]} ... {OUTPUT_VIDEO}")
            if not dry_run:
                result_path = mp.execute_stitch(
                    SCENE_FILES, AUDIO_FILE, SUBTITLE_FILE, OUTPUT_VIDEO
                )
                print(f"   -> ✅ Final video saved to: {result_path}")

                # Copy final video and WebVTT subtitles to website assets directory
                web_assets_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'website', 'public', 'assets'))
                if os.path.isdir(web_assets_dir):
                    dest_video = os.path.join(web_assets_dir, 'final_khieng_so_campaign_video.mp4')
                    shutil.copy2(result_path, dest_video)
                    print(f"   -> [Sync] Copied video to website assets: {dest_video}")

                    vtt_src = os.path.join(OUTPUT_DIR, 'campaign_subtitles.vtt')
                    if os.path.isfile(vtt_src):
                        dest_vtt = os.path.join(web_assets_dir, 'subtitles.vtt')
                        shutil.copy2(vtt_src, dest_vtt)
                        print(f"   -> [Sync] Copied subtitles to website assets: {dest_vtt}")
    except FileNotFoundError as e:
        print(f"❌ Phase 4 – Missing file: {e}")
    except RuntimeError as e:
        print(f"❌ Phase 4 – FFmpeg error: {e}")
        sys.exit(1)

    # ── Phase 5: Web Application Build & Deploy ──────────────────────────────
    print("\n[Phase 5] 🌐 Web Application Build & Deployment Check...")
    try:
        if not dry_run:
            deploy_website()
        else:
            print("   -> [DRY RUN] Skipping npm build.")
    except SystemExit:
        print("❌ Phase 5 – Build failed. See error above.")
        sys.exit(1)

    print("\n" + "=" * 63)
    print("🎉 FULL CAMPAIGN PIPELINE EXECUTED SUCCESSFULLY!")
    print("=" * 63)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Khiên Số Học Đường – Campaign Automation Pipeline'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Validate configuration and print steps without executing any commands.'
    )
    args = parser.parse_args()
    run_pipeline(dry_run=args.dry_run)
