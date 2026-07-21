# 🛡️ KHIÊN SỐ HỌC ĐƯỜNG (DIGITAL SHIELD FOR HIGH SCHOOLERS)

> **Complete AI-Powered Legal Communication Campaign & Web Application**  
> *Theme: Preventing Online Scams and Protecting Personal Data for Vietnamese High School Students (Ages 15–18), Teachers, and Parents.*

---

## 🌟 Executive Summary

**Khiên Số Học Đường** is an end-to-end, AI-powered legal awareness campaign designed for high school students in Vietnam. It bridges legal frameworks—such as the **Law on Cybersecurity 2018 (Luật An ninh mạng)** and **Decree 13/2023/ND-CP (Bảo vệ dữ liệu cá nhân)**—with modern Gen Z media formats, production-ready AI generative prompts (Flux, Veo 3, Kling AI, ElevenLabs), automated video stitching pipelines, and an interactive React + Tailwind CSS web application.

---

## 📂 Repository Structure

```text
khieng-so-hoc-duong/
├── README.md                           # Master Project Overview & Setup Guide
├── docs/                               # Comprehensive Documentation Suite
│   ├── 01_RESEARCH_LEGAL_FOUNDATIONS.md # Scam tactics research, legal articles & helplines
│   ├── 02_CREATIVE_CONCEPTS.md          # 3 Creative concepts & selection matrix
│   ├── 03_POSTER_DESIGN_SPECS.md       # Color tokens, A3 layout & Flux/GPT Image prompts
│   ├── 04_VIDEO_STORYBOARD_PROMPTS.md  # 3-5 min video storyboard & Veo 3/Kling prompts
│   ├── 05_ELEVENLABS_VOICE_SCRIPT.md   # Voice settings & SSML script in Vietnamese
│   ├── 06_SOCIAL_ASSET_SPECS.md        # Specs for Banner, FB Cover, IG Post, Infographic
│   └── 07_AUTOMATION_PIPELINE.md       # Automation pipeline architecture & execution guide
├── pipeline/                           # Automation Pipeline Codebase
│   ├── generate_campaign.py            # Master end-to-end automation orchestrator
│   ├── prompt_engine.py                # AI prompt generation engine
│   ├── media_processor.py              # FFmpeg media assembly & subtitle burner
│   ├── generate_subtitles.py           # Automated SRT subtitle generator
│   ├── deploy_site.py                  # Static web app build & deploy script
│   └── requirements.txt                # Python dependencies
└── website/                            # Modern React + Tailwind Web Application
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── index.html
    ├── src/
    │   ├── App.jsx                     # Assembly of all web sections
    │   ├── main.jsx
    │   ├── index.css                   # Custom glassmorphism & neon utilities
    │   ├── components/                 # React UI components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── VideoShowcase.jsx
    │   │   ├── ScamAlertsInfographic.jsx
    │   │   ├── LegalTipsSection.jsx
    │   │   ├── PosterGallery.jsx
    │   │   ├── InteractiveQuiz.jsx
    │   │   ├── FAQSection.jsx
    │   │   └── Footer.jsx
    │   └── data/                       # Data models for scams, laws, quiz & FAQ
    └── public/
        └── assets/                     # Generated visual posters & campaign banners
```

---

## 🚀 Quick Start Guide

### 1. Web Application (React + Tailwind)
```bash
# Navigate to website folder
cd website

# Install dependencies (already performed)
npm install

# Run local development server
npm run dev
# -> Local server opens at http://localhost:3000

# Build production bundle
npm run build
```

### 2. Automation Pipeline (Python)
```bash
# Navigate to pipeline folder
cd pipeline

# Install python requirements
pip install -r requirements.txt

# Run full campaign automation pipeline
python generate_campaign.py
```

---

## 📜 Key Campaign Highlights

1. **Target Audience:** Vietnamese High School Students (Ages 15–18), Teachers, Parents.
2. **Core Theme:** "Bật Chế Độ An Toàn - Làm Chủ Không Gian Số" (Toggle Safe Mode - Master Cyberspace).
3. **Safety Rules:** **"4 KHÔNG - 3 NÊN"** (4 Don'ts: No Deposits, No Clicking Strange Links, No Sharing OTP, No Panic; 3 Dos: Enable 2FA, Call Directly to Verify, Report to National Helplines).
4. **Helplines Featured:**
   * **Child Protection Helpline:** `111`
   * **Authority of Information Security Helpline:** `156` / `5656`
   * **Cyber Security Police (A05):** `069.234.8544`
