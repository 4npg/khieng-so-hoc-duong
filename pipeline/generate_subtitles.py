"""
Automated Subtitle (SRT & VTT) Generator for Campaign Video
"""

import os

def create_srt_subtitles(output_path="subtitles.srt"):
    subtitles = [
        {
            "index": 1,
            "start": "00:00:02,000",
            "end": "00:00:07,500",
            "text": "Không gian số mở ra hàng ngàn cơ hội, nhưng cũng tiềm ẩn vô số cạm bẫy."
        },
        {
            "index": 2,
            "start": "00:00:08,000",
            "end": "00:00:14,200",
            "text": "Tuyển dụng việc làm online cọc tiền, nạp game giá rẻ mạo danh, hay video call Deepfake..."
        },
        {
            "index": 3,
            "start": "00:00:15,000",
            "end": "00:00:20,800",
            "text": "Chỉ một cú nhấp chuột thiếu cảnh giác, dữ liệu cá nhân của bạn có thể bị đánh cắp."
        },
        {
            "index": 4,
            "start": "00:00:21,500",
            "end": "00:00:27,000",
            "text": "Hãy kích hoạt KHIÊN SỐ HỌC ĐƯỜNG! Tuân thủ nghiêm 4 KHÔNG - 3 NÊN."
        },
        {
            "index": 5,
            "start": "00:00:27,500",
            "end": "00:00:34,000",
            "text": "Nắm vững Luật An ninh mạng 2018 & Nghị định 13/2023. Liên hệ ngay Tổng đài 111 khi gặp sự cố!"
        }
    ]

    with open(output_path, "w", encoding="utf-8") as f:
        for sub in subtitles:
            f.write(f"{sub['index']}\n")
            f.write(f"{sub['start']} --> {sub['end']}\n")
            f.write(f"{sub['text']}\n\n")

    print(f"✅ Created SRT subtitles at {output_path}")

if __name__ == "__main__":
    create_srt_subtitles()
