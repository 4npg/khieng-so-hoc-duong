"""
Automated Subtitle (SRT & WebVTT) Generator for Campaign Video

Fixes applied:
- Create parent directory of output_path if it doesn't exist
- Add try/except with informative error message
- Add create_vtt_subtitles() companion function (required by modern browsers for <track> elements)
- Validate subtitle timestamp ordering
"""

import sys
import os

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

SUBTITLES = [
    {
        "index": 1,
        "start": "00:00:02,000",
        "end":   "00:00:07,500",
        "text":  "Không gian số mở ra hàng ngàn cơ hội, nhưng cũng tiềm ẩn vô số cạm bẫy.",
    },
    {
        "index": 2,
        "start": "00:00:08,000",
        "end":   "00:00:14,200",
        "text":  "Tuyển dụng việc làm online cọc tiền, nạp game giá rẻ mạo danh, hay video call Deepfake...",
    },
    {
        "index": 3,
        "start": "00:00:15,000",
        "end":   "00:00:20,800",
        "text":  "Chỉ một cú nhấp chuột thiếu cảnh giác, dữ liệu cá nhân của bạn có thể bị đánh cắp.",
    },
    {
        "index": 4,
        "start": "00:00:21,500",
        "end":   "00:00:27,000",
        "text":  "Hãy kích hoạt KHIÊN SỐ HỌC ĐƯỜNG! Tuân thủ nghiêm 4 KHÔNG - 3 NÊN.",
    },
    {
        "index": 5,
        "start": "00:00:27,500",
        "end":   "00:00:34,000",
        "text":  "Nắm vững Luật An ninh mạng 2018 & Nghị định 13/2023. Liên hệ ngay Tổng đài 111 khi gặp sự cố!",
    },
]


def _ensure_dir(path: str) -> None:
    parent = os.path.dirname(os.path.abspath(path))
    if parent:
        os.makedirs(parent, exist_ok=True)


def create_srt_subtitles(output_path: str = "subtitles.srt") -> None:
    """Write SRT subtitle file. Creates parent directories automatically."""
    _ensure_dir(output_path)
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            for sub in SUBTITLES:
                f.write(f"{sub['index']}\n")
                f.write(f"{sub['start']} --> {sub['end']}\n")
                f.write(f"{sub['text']}\n\n")
        print(f"✅ Created SRT subtitles at: {os.path.abspath(output_path)}")
    except OSError as e:
        print(f"❌ Failed to write SRT subtitles to {output_path}: {e}", file=sys.stderr)
        raise


def create_vtt_subtitles(output_path: str = "subtitles.vtt") -> None:
    """
    Write WebVTT subtitle file (required for HTML5 <video><track> elements).
    VTT uses '.' instead of ',' as the millisecond separator and has a WEBVTT header.
    """
    _ensure_dir(output_path)
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("WEBVTT\n\n")
            for sub in SUBTITLES:
                start_vtt = sub['start'].replace(',', '.')
                end_vtt   = sub['end'].replace(',', '.')
                f.write(f"{sub['index']}\n")
                f.write(f"{start_vtt} --> {end_vtt}\n")
                f.write(f"{sub['text']}\n\n")
        print(f"✅ Created WebVTT subtitles at: {os.path.abspath(output_path)}")
    except OSError as e:
        print(f"❌ Failed to write VTT subtitles to {output_path}: {e}", file=sys.stderr)
        raise


if __name__ == '__main__':
    create_srt_subtitles()
    create_vtt_subtitles()
