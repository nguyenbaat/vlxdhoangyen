# NHẬT KÝ PHÁT TRIỂN & CẬP NHẬT HỆ THỐNG — VLXD HOÀNG YẾN

---

## 🚀 [Bản phát hành Release 17/09/2026] — Triển khai Production thành công

### 1. Cấu hình & Hạ tầng Máy chủ (Hostinger / cPanel / Node.js)
- **Đa điểm vào ứng dụng (Universal Entrypoints):** Cung cấp sẵn các file `server.js`, `app.js`, `index.js` trỏ trực tiếp đến `dist/server/entry.mjs`, tương thích 100% với cPanel Setup Node.js App / Phusion Passenger / PM2.
- **Tự động hóa Postbuild:** Thêm script `postbuild` đảm bảo toàn bộ entrypoints được sao chép và định vị chuẩn xác bên trong thư mục `dist/` sau mỗi lần build.
- **Tương thích Reverse Proxy & Port:** Cấu hình Astro Node Adapter chế độ `standalone`, tự động lắng nghe trên `0.0.0.0` và nhận diện các biến môi trường cổng (`PORT`, `HOSTINGER_NODE_PORT`).

### 2. Cơ sở Dữ liệu & Lưu trữ Đa phương tiện
- **MySQL Auto Schema Initialization:** Cơ chế tự động kiểm tra và khởi tạo bảng dữ liệu MySQL (`categories`, `products`, `orders`, `articles`, `settings`, `media`,...) khi ứng dụng khởi động lần đầu.
- **Cloudflare R2 Storage:** Tích hợp script upload và migrate dữ liệu ảnh, hỗ trợ phân phối media tốc độ cao qua CDN.

### 3. Giao diện Người dùng & Tối ưu SEO
- **Tối ưu Callout Box & Độ tương phản:** Căn chỉnh màu sắc tiêu đề và liên kết trong các khối cảnh báo/thông báo nền tối, đảm bảo chuẩn tương phản WCAG và trải nghiệm đọc.
- **Audit Bảo mật:** Đã quét và nâng cấp các thư viện phụ thuộc an toàn.

---
