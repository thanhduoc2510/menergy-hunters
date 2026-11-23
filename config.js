// Cấu hình bảng xếp hạng trực tiếp của MENergy Hunters.
// db:   URL Realtime Database của Firebase, ví dụ
//       "https://menergy-hunters-default-rtdb.asia-southeast1.firebasedatabase.app"
//       Để trống thì game chỉ lưu điểm trên từng máy (Bảng vàng).
// room: tên phòng mặc định. Đổi tạm bằng ?room=ten-phong trên link game và link bảng.
// gameUrl: link game hiện trong mã QR. Để trống thì tự lấy theo link của board.html.
window.MENERGY_CONFIG = {
  db: "https://menergy-hunters-default-rtdb.asia-southeast1.firebasedatabase.app",
  room: "chungket",
  gameUrl: ""
};
