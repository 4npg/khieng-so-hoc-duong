# 07. End-to-End Automation Pipeline Documentation

## 1. Pipeline Architecture Diagram

```mermaid
flowchart TD
    A[Step 1: Campaign Topic & Legal Ingestion] --> B[Step 2: Prompt Engine Python Script]
    B --> C1[Flux / GPT Image: Generate Posters]
    B --> C2[Veo 3 / Kling AI: Generate Video Scenes]
    B --> C3[ElevenLabs API: Generate Voiceover MP3]
    
    C1 & C2 & C3 --> D[Step 3: Subtitle Generator]
    D --> E[Step 4: FFmpeg Video & Audio Sync & Subtitle Burning]
    E --> F[Step 5: React + Tailwind Web App Build]
    F --> G[Step 6: Deploy to Vercel / Netlify Host]
```

---

## 2. Step-by-Step Execution Guide

### Prerequisites
* Python 3.10+
* Node.js v18+ & npm
* FFmpeg installed in system PATH

### Commands

1. **Execute Master Python Automation Script:**
   ```bash
   cd pipeline
   python generate_campaign.py
   ```

2. **Generate Subtitles Standalone:**
   ```bash
   python generate_subtitles.py
   ```

3. **FFmpeg Video Stitching Command:**
   ```bash
   ffmpeg -y -f concat -safe 0 -i file_list.txt -i voiceover.mp3 -vf "subtitles=subtitles.srt" -c:v libx264 -crf 18 -c:a aac output_campaign.mp4
   ```

4. **Build & Deploy Web Application:**
   ```bash
   cd website
   npm run build
   python ../pipeline/deploy_site.py
   ```
