# Bật bảng xếp hạng trực tiếp (khoảng 10 phút)

## 1. Tạo Realtime Database
1. Vào https://console.firebase.google.com, đăng nhập Google, bấm tạo dự án mới (ví dụ `menergy-hunters`). Có thể tắt Google Analytics.
2. Trong menu Build (hoặc Databases), chọn **Realtime Database**, bấm **Create Database**.
3. Chọn vị trí **Singapore (asia-southeast1)**, chọn **Start in locked mode**.

## 2. Dán luật bảo mật
1. Mở tab **Rules** của Realtime Database.
2. Xoá nội dung cũ, dán toàn bộ nội dung file `firebase-rules.json`, bấm **Publish**.

Luật này chỉ cho phép: đọc điểm, và thêm điểm mới đúng định dạng (tên tối đa 16 ký tự, điểm 0 đến 40.000). Không ai sửa hay xoá được điểm đã gửi.

## 3. Điền URL vào game
1. Ở tab **Data**, sao chép URL phía trên cùng, dạng
   `https://menergy-hunters-default-rtdb.asia-southeast1.firebasedatabase.app`
2. Trên GitHub, mở file `config.js`, bấm biểu tượng bút chì, dán URL vào `db: ""`, bấm **Commit changes**.
3. Đợi 1 đến 2 phút để GitHub Pages cập nhật.

## 4. Dùng trên sân khấu
- Máy chiếu mở `board.html`, bấm **F** để toàn màn hình. Khán giả quét QR là vào game.
- Tổng duyệt dùng phòng riêng để không lẫn điểm với chung kết:
  `board.html?room=tongduyet` (mã QR tự trỏ tới đúng phòng).
- Chung kết mở `board.html` (phòng mặc định `chungket`).
- Có tên không phù hợp: bấm vào dòng đó trên bảng để ẩn. Bấm **U** để hiện lại tất cả.

## Phím trình diễn trong game (máy tính)
F toàn màn hình · M tắt tiếng · − và + chỉnh nhạc nền · dấu phẩy và dấu chấm chỉnh hiệu ứng · B phóng to chữ cho máy chiếu.
Thêm `?show=1` vào link game để bật chữ lớn ngay từ đầu.

## Nếu mất mạng
Game vẫn chơi được và lưu điểm trên máy. Bảng chiếu tự kết nối lại khi có mạng.
Phương án cuối: thêm `?offline=1` vào link game và link bảng trên cùng một máy trình diễn để dùng Bảng vàng không cần mạng.
