# 05. ElevenLabs Voiceover Script & SSML Configuration

## 1. ElevenLabs Voice Settings
* **Model:** `Eleven Multilingual v2`
* **Voice Profile:** Northern Vietnamese Male - Authoritative, Inspiring, Warm (`Adam` / Custom Voice Trained on Cyber Security Presenter)
* **Stability:** `50%` (Balanced natural inflection)
* **Clarity / Similarity Boost:** `85%` (Crisp Vietnamese pronunciation)
* **Style Exaggeration:** `20%`

---

## 2. SSML Voice Script with Timing & Emotion Tags

```xml
<speak>
  <p>
    <voice name="vi-VN-Standard-Male">
      <s>Không gian số mở ra hàng ngàn cơ hội kết nối và học tập, <break time="300ms"/> nhưng cũng tiềm ẩn vô số bẫy ngầm tinh vi.</s>
      <break time="600ms"/>
      <s>Từ chiêu trò tuyển dụng "việc nhẹ lương cao" yêu cầu nộp tiền cọc, <break time="200ms"/> nạp game giá rẻ mạo danh, <break time="200ms"/> cho đến các cuộc gọi Deepfake biến dạng khuôn mặt người thân báo tin cấp cứu...</s>
    </voice>
  </p>

  <p>
    <voice name="vi-VN-Standard-Male">
      <break time="800ms"/>
      <prosody rate="medium" pitch="+2st">
        <emphasis level="strong">Chỉ một phút lơ đễnh, tài sản và dữ liệu cá nhân của bạn có thể bị xâm phạm!</emphasis>
      </prosody>
    </voice>
  </p>

  <p>
    <voice name="vi-VN-Standard-Male">
      <break time="1s"/>
      <s>Đừng hoảng loạn. Hãy làm chủ không gian số bằng cách <emphasis level="strong">BẬT CHẾ ĐỘ AN TOÀN!</emphasis></s>
      <break time="400ms"/>
      <s>Ghi nhớ kỹ quy tắc vàng <emphasis level="moderate">4 KHÔNG – 3 NÊN</emphasis>:</s>
      <break time="300ms"/>
      <s>Không chuyển cọc – Không click link lạ – Không đưa OTP – Không hoảng loạn.</s>
      <break time="400ms"/>
      <s>Nên bật 2FA – Nên gọi xác minh qua số điện thoại – Nên tố giác ngay cho cơ quan chức năng.</s>
    </voice>
  </p>

  <p>
    <voice name="vi-VN-Standard-Male">
      <break time="1s"/>
      <prosody pitch="+1st" rate="fast">
        <s>Luật An ninh mạng 2018 và Nghị định 13/2023 luôn là lá chắn vững chắc bảo vệ bạn.</s>
      </prosody>
      <break time="500ms"/>
      <s>Khi gặp sự cố lừa đảo, hãy gọi ngay Đường dây nóng Quốc gia <emphasis level="strong">111</emphasis> hoặc Cục An toàn thông tin <emphasis level="strong">156</emphasis>!</s>
      <break time="600ms"/>
      <emphasis level="strong">Khiên Số Học Đường – An toàn số, tự tin bước tới tương lai!</emphasis>
    </voice>
  </p>
</speak>
```
