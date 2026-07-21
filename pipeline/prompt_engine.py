"""
Prompt Engine Module for Campaign Asset Generation
Supports Flux, Midjourney, DALL-E 3, Veo 3, Kling AI, and ElevenLabs.
"""

import sys
import json

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

class CampaignPromptEngine:
    def __init__(self, campaign_theme="Preventing Online Scams & Data Protection for High Schoolers"):
        self.theme = campaign_theme

    def generate_poster_prompt(self, visual_concept="digital_shield"):
        if visual_concept == "digital_shield":
            return {
                "positive": (
                    "A striking, ultra-modern cyber safety awareness poster for Vietnamese high school students "
                    "titled 'KHIÊN SỐ HỌC ĐƯỜNG'. In the center, a confident Vietnamese high school student boy and girl "
                    "stand inside a glowing holographic digital shield emitting electric cyan and emerald green light. "
                    "Surrounding them are floating neon icons representing protected personal data, locked smartphones, "
                    "encrypted chat bubbles, and warning badges over dark blue cyberspace grid. Top bold Vietnamese typography "
                    "reading 'BẬT CHẾ ĐỘ AN TOÀN - LÀM CHỦ KHÔNG GIAN SỐ'. Cyberpunk futuristic minimalist vector and 3D graphic hybrid style, "
                    "vibrant colors, cinematic lighting, 8k resolution."
                ),
                "negative": "blurry, low quality, distorted text, bad anatomy, missing fingers, oversaturated, amateurish",
                "aspect_ratio": "3:4",
                "target_model": "Flux 1.1 Pro / GPT Image"
            }
        return {}

    def generate_video_prompts(self):
        """Generates scene-by-scene prompts optimized for Veo 3 or Kling AI."""
        return [
            {
                "scene_id": 1,
                "duration_sec": 30,
                "veo3_prompt": (
                    "Photorealistic cinematic shot: A Vietnamese male high school student (17 years old) in crisp uniform "
                    "sitting in a dim bedroom at night, staring intensely at a glowing smartphone screen. Electric blue screen glow "
                    "reflects in his wide eyes. Floating holographic chat notifications pop up showing fake job offers. "
                    "Camera slow zoom in on screen, 60fps, 4k resolution, suspenseful atmosphere."
                ),
                "camera_motion": "Slow Zoom-In",
                "audio_cue": "Tense electronic synth pad with fast message ping sounds"
            },
            {
                "scene_id": 2,
                "duration_sec": 45,
                "veo3_prompt": (
                    "Close-up over-the-shoulder shot: Smartphone screen displaying a glitchy Deepfake video call of a Vietnamese "
                    "mother crying for emergency hospital funds. Digital artifact distortions flicker over her face. "
                    "The student's hands tremble slightly holding the phone. Film noir cinematic color grading, high drama."
                ),
                "camera_motion": "Handheld Tracking Shot",
                "audio_cue": "Static interference sound, distorted voice AI dialogue"
            },
            {
                "scene_id": 3,
                "duration_sec": 75,
                "veo3_prompt": (
                    "Wide dynamic action shot: The high school student taps the 'Activate Safe Mode' button on his phone screen. "
                    "Instantly, a magnificent 3D cyan and emerald holographic shield expands outward in 360 degrees, dissolving "
                    "scam phishing wires and lock icons. Bright heroic lighting, particle effects, hyper-detailed render."
                ),
                "camera_motion": "360-degree Orbiting Shot",
                "audio_cue": "Triumphant orchestral swell with electronic shield activation SFX"
            },
            {
                "scene_id": 4,
                "duration_sec": 60,
                "veo3_prompt": (
                    "Medium shot: Sunny, modern high school classroom in Vietnam. A friendly female police officer in uniform "
                    "and a high school teacher stand beside a digital interactive whiteboard displaying 'Cyber Security Law 2018' "
                    "and 'Hotline 111'. Students smile confidently as they hold up digital shield badges. Warm ambient daylight."
                ),
                "camera_motion": "Smooth Pan Right",
                "audio_cue": "Warm acoustic guitar background music with inspiring narration"
            }
        ]

    def generate_elevenlabs_script(self):
        """Generates SSML-marked voiceover script for ElevenLabs."""
        return {
            "voice_model": "ElevenLabs Multilingual v2",
            "voice_id": "Vietnamese_Male_Authoritative_Warm",
            "stability": 0.5,
            "similarity_boost": 0.85,
            "style_exaggeration": 0.2,
            "ssml_script": (
                "<speak>\n"
                "  <p>\n"
                "    <s>Không gian số là nơi kết nối tri thức, nhưng cũng tiềm ẩn vô số cạm bẫy tinh vi.</s>\n"
                "    <break time=\"500ms\"/>\n"
                "    <s>Từ chiêu trò tuyển dụng việc nhẹ lương cao, nạp game giá rẻ, đến các cuộc gọi Deepfake mạo danh người thân...</s>\n"
                "  </p>\n"
                "  <p>\n"
                "    <break time=\"700ms\"/>\n"
                "    <s>Chỉ một phút lơ đễnh, thông tin cá nhân và tài sản của bạn có thể bị chiếm đoạt.</s>\n"
                "  </p>\n"
                "  <p>\n"
                "    <break time=\"1s\"/>\n"
                "    <emphasis level=\"strong\">Hãy chủ động BẬT CHẾ ĐỘ AN TOÀN!</emphasis>\n"
                "    <break time=\"300ms\"/>\n"
                "    <s>Nhớ kỹ quy tắc <emphasis level=\"moderate\">4 KHÔNG – 3 NÊN</emphasis> và làm chủ Luật An ninh mạng 2018.</s>\n"
                "  </p>\n"
                "</speak>"
            )
        }

if __name__ == "__main__":
    engine = CampaignPromptEngine()
    print("Poster Prompt Spec:\n", json.dumps(engine.generate_poster_prompt(), indent=2, ensure_ascii=False))
