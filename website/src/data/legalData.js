export const legalFramework = {
  laws: [
    {
      code: "Luật An ninh mạng 2018",
      number: "Luật số 24/2018/QH14",
      scope: "Quy định về hoạt động bảo vệ an ninh mạng, trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan.",
      keyArticles: [
        {
          article: "Điều 8",
          title: "Các hành vi bị cấm trên không gian mạng",
          summary: "Cấm sử dụng không gian mạng để chiếm đoạt tài sản, phát tán thông tin giả mạo, xâm phạm quyền và lợi ích hợp pháp của tổ chức, cá nhân."
        },
        {
          article: "Điều 16",
          title: "Phòng ngừa, xử lý thông tin gian lận",
          summary: "Quy định cơ chế gỡ bỏ thông tin lừa đảo, phong tỏa tài khoản vi phạm trên các nền tảng số."
        }
      ]
    },
    {
      code: "Nghị định 13/2023/NĐ-CP",
      number: "Nghị định về Bảo vệ dữ liệu cá nhân",
      scope: "Bảo vệ dữ liệu cá nhân, quyền của chủ thể dữ liệu và trách nhiệm bảo mật thông tin của các đơn vị.",
      keyArticles: [
        {
          article: "Điều 9",
          title: "Quyền của chủ thể dữ liệu",
          summary: "Người dân (bao gồm học sinh) có quyền được biết, đồng ý, truy cập, chỉnh sửa hoặc yêu cầu xóa bỏ dữ liệu cá nhân của mình."
        },
        {
          article: "Điều 13",
          title: "Bảo vệ dữ liệu cá nhân trẻ em",
          summary: "Yêu cầu sự đồng ý của cha mẹ/người giám hộ đối với việc xử lý dữ liệu cá nhân của người dưới 16 tuổi."
        }
      ]
    },
    {
      code: "Bộ luật Hình sự 2015 (Sửa đổi 2017)",
      number: "Luật số 100/2015/QH13",
      scope: "Xử lý trách nhiệm hình sự đối với các tội phạm mạng.",
      keyArticles: [
        {
          article: "Điều 174",
          title: "Tội lừa đảo chiếm đoạt tài sản",
          summary: "Phạt tù từ 06 tháng đến 20 năm hoặc chung thân tùy thuộc vào số tiền và tính chất chiếm đoạt."
        },
        {
          article: "Điều 290",
          title: "Sử dụng mạng máy tính chiếm đoạt tài sản",
          summary: "Khung hình phạt cao nhất lên tới 20 năm tù đối với hành vi sử dụng công nghệ cao để chiếm đoạt tiền."
        }
      ]
    }
  ],
  rules4No3Yes: {
    fourNo: [
      { id: "no-1", title: "KHÔNG Chuyển Tiền Cọc", desc: "Không bao giờ nộp tiền để nhận việc làm, nạp game giá rẻ hay đăng ký nhận quà." },
      { id: "no-2", title: "KHÔNG Click Link Lạ", desc: "Không truy cập các đường link rút gọn, link nhận thưởng không rõ nguồn gốc." },
      { id: "no-3", title: "KHÔNG Cung Cấp OTP/Mật Khẩu", desc: "Mã OTP và mật khẩu cá nhân là tuyệt mật, không chia sẻ cho bất kỳ ai." },
      { id: "no-4", title: "KHÔNG Hoảng Loạn", desc: "Khi nhận tin nhắn/cuộc gọi đe dọa hoặc cấp cứu, luôn giữ bình tĩnh kiểm chứng." }
    ],
    threeYes: [
      { id: "yes-1", title: "NÊN Bật Xác Thực 2 Lớp (2FA)", desc: "Kích hoạt bảo mật 2 lớp cho tất cả tài khoản Facebook, Zalo, Gmail và Game." },
      { id: "yes-2", title: "NÊN Kiểm Tra Lại Qua Số Điện Thoại", desc: "Gọi trực tiếp cho người thân qua cuộc gọi viễn thông thông thường khi có yêu cầu tài chính." },
      { id: "yes-3", title: "NÊN Tố Giác Ngay Cho Cơ Quan Chức Năng", desc: "Báo cáo cho Thầy cô, BGH, Cha mẹ và Đường dây nóng An ninh mạng khi phát hiện lừa đảo." }
    ]
  },
  emergencyContacts: [
    { name: "Tổng đài Quốc gia Bảo vệ Trẻ em", phone: "111", desc: "Hỗ trợ 24/7 cho học sinh & trẻ em" },
    { name: "Đường dây nóng Cục An toàn thông tin", phone: "156 / 5656", desc: "Phản ánh tin nhắn, cuộc gọi lừa đảo" },
    { name: "Phòng Cảnh sát Hình sự / An ninh mạng (A05)", phone: "069.234.8544", desc: "Cơ quan điều tra tội phạm công nghệ cao" }
  ]
};
