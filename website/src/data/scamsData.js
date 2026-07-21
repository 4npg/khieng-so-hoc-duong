export const scamsData = [
  {
    id: "scam-1",
    title: "Tuyển Dụng Mẹ Mìn / Việc Làm Trực Tuyến Học Sinh",
    badge: "Phổ biến nhất",
    severity: "Cao",
    icon: "Briefcase",
    description: "Kẻ gian đăng tải các thông tin tuyển dụng làm bài đánh giá, nhập liệu, dịch thuật hoặc tương tác bài viết social với mức lương 300k - 500k/ngày. Yêu cầu học sinh nộp 'tiền cọc' hoặc nạp tiền làm nhiệm vụ.",
    tactics: [
      "Hứa hẹn việc nhẹ lương cao, thời gian linh hoạt",
      "Yêu cầu tham gia nhóm Telegram/Zalo bảo mật",
      "Cho ăn quả ngọt ban đầu (thưởng 50k-100k) để lấy niềm tin",
      "Yêu cầu chuyển số tiền lớn hơn để 'rút cả vốn lẫn lãi' rồi chặn liên lạc"
    ],
    legalRef: "Điều 174 Bộ luật Hình sự 2015 (Tội lừa đảo chiếm đoạt tài sản)",
    protectionTip: "Không bao giờ nộp tiền cọc để nhận công việc trực tuyến."
  },
  {
    id: "scam-2",
    title: "Nạp Game Giá Rẻ & Nhận Giftcode Tri Ơn Fake",
    badge: "Mục tiêu Gen Z",
    severity: "Nguy hiểm",
    icon: "Gamepad2",
    description: "Tạo các trang web/fanpage giả mạo nhà phát hành game (Garena, Mihoyo, Roblox) quảng cáo nạp trang phục, nạp quân huy/robux giảm giá 80% hoặc nhận Code free.",
    tactics: [
      "Giao diện thiết kế giống hệt trang chính thức của game",
      "Yêu cầu đăng nhập tài khoản Facebook/Google để 'xác minh'",
      "Đánh cắp Token/Session và thông tin đăng nhập ngay lập tức",
      "Chiếm quyền tài khoản và nhắn tin lừa tiền bạn bè trong danh sách"
    ],
    legalRef: "Điều 290 Bộ luật Hình sự 2015 (Tội sử dụng mạng máy tính, viễn thông để thực hiện hành vi chiếm đoạt tài sản)",
    protectionTip: "Chỉ nạp game tại các cổng thanh toán chính thức (.vn / ứng dụng chính chủ)."
  },
  {
    id: "scam-3",
    title: "Giả Mạo Người Thân / Deepfake Video Call Tống Tiền",
    badge: "Công nghệ AI",
    severity: "Rất cao",
    icon: "Video",
    description: "Sử dụng AI Deepfake tái tạo khuôn mặt và giọng nói của bạn bè, cha mẹ hoặc thầy cô qua video call ngắn 5-10 giây để báo sự cố khẩn cấp (tai nạn, cấp cứu, nộp tiền học).",
    tactics: [
      "Cuộc gọi video tín hiệu kém, chập chờn để che giấu lỗi AI",
      "Tác động tâm lý hoảng loạn, yêu cầu chuyển khoản ngay lập tức",
      "Sử dụng tài khoản ngân hàng mạo danh cùng tên người thân"
    ],
    legalRef: "Nghị định 13/2023/NĐ-CP & Luật An ninh mạng 2018 (Bảo vệ hình ảnh & dữ liệu cá nhân)",
    protectionTip: "Tắt máy và gọi lại trực tiếp qua số điện thoại di động thông thường để xác minh."
  },
  {
    id: "scam-4",
    title: "Mạo Danh Ban Giám Hiệu & Thông Báo Học Phí khẩn",
    badge: "Mục tiêu Phụ huynh & Học sinh",
    severity: "Nghiêm trọng",
    icon: "GraduationCap",
    description: "Gửi SMS mạo danh thương hiệu (Brandname) hoặc nhắn Zalo xưng là giáo viên chủ nhiệm, báo tin học sinh vi phạm/tai nạn hoặc yêu cầu đóng quỹ thi, nộp tiền ngoại khóa gấp.",
    tactics: [
      "Thu thập thông tin tên lớp, tên giáo viên trên MXH học đường",
      "Tạo áp lực thời gian (phải nộp trước 12h nếu không bị hủy thi)",
      "Cung cấp số tài khoản cá nhân thay vì tài khoản nhà trường"
    ],
    legalRef: "Quyết định 874/QĐ-BTTTT (Bộ quy tắc ứng xử trên mạng xã hội)",
    protectionTip: "Luôn liên hệ trực tiếp thầy cô chủ nhiệm trước khi thực hiện giao dịch tài chính."
  },
  {
    id: "scam-5",
    title: "Phishing Link Tra Cứu Điểm Thi / Lộ Đề Thi",
    badge: "Mùa thi cử",
    severity: "Trung bình",
    icon: "Link2",
    description: "Phát tán các đường link độc hại tiêu đề 'Xem trước đề thi THPT Quốc gia', 'Tra cứu xếp hạng học lực toàn quốc' nhằm thu thập SĐT, Căn cước công dân và mật khẩu MXH.",
    tactics: [
      "Độ cơ sở dữ liệu giả lập kết quả thi hấp dẫn",
      "Yêu cầu nhập OTP ngân hàng hoặc liên kết ví điện tử để mở khóa",
      "Cài đặt mã độc mã hóa dữ liệu thiết bị (Ransomware)"
    ],
    legalRef: "Điều 8 Luật An ninh mạng 2018 (Các hành vi bị cấm trên không gian mạng)",
    protectionTip: "Không nhấp vào link lạ không có chứng chỉ an toàn SSL (https://)."
  }
];
