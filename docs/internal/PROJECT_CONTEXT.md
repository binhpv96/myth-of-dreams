# Project Context — Bối cảnh dự án Myth of Dreams

## 1. Giới thiệu ngắn gọn về Myth of Dreams
Myth of Dreams là một dự án game indie mang phong cách khám phá, phiêu lưu trong "Vùng mộng ảo" (Dreamland). Game kết hợp yếu tố nhập vai, thu thập linh thú (Beasts), tìm kiếm cổ vật (Relics) và xây dựng thánh địa cá nhân. Dù có định hướng tích hợp Play-to-Earn/NFT, game tập trung mạnh vào trải nghiệm cốt truyện, lore bí ẩn và phong cách nghệ thuật mơ mộng (soft hand-painted).

## 2. Vì sao cần Web Docs Portal?
Để phục vụ team phát triển nội bộ (Game Designers, Artists, UI/UX, Unity Devs). Game có hệ thống lore, cơ chế combat, thiết kế UI rất dày đặc và phức tạp. Việc lưu trữ trên web portal giúp:
- Dễ dàng tra cứu thông tin từ bất kỳ thiết bị nào.
- Giữ được định dạng đẹp, trực quan hơn so với xem file thô.
- Có tính năng phân loại (Category) và mục lục (Table of Contents).

## 3. Đối tượng sử dụng hiện tại
**Đội ngũ phát triển nội bộ.** Không nhằm mục đích phục vụ cộng đồng bên ngoài hay user cuối ở giai đoạn này.

## 4. Các phần CHƯA ƯU TIÊN (Out of Scope)
- **Marketplace & Wallet (Web3/NFT):** Hiện tại chỉ là giao diện mock, không có logic thật, không ưu tiên sửa hay cải thiện.
- **Marketing Landing Page:** Trang chủ mang tính chất giữ chỗ (placeholder) và cập nhật copy cho hợp ngữ cảnh, chưa phải là công cụ chạy quảng cáo.
- **Không tập trung tối ưu SEO hay Conversion Rate** ở thời điểm hiện tại.

## 5. Luồng hoạt động của Docs Portal
1. **Dữ liệu nguồn:** Các file Markdown nằm trong thư mục gốc `documentations/`.
2. **Xử lý dữ liệu:** File `lib/markdown.ts` đóng vai trò như một mini-CMS. Nó đọc các file `.md`, dùng thư viện `gray-matter` để phân tích phần Frontmatter (tiêu đề, danh mục, v.v.) và tính toán thời gian đọc (read time).
3. **Hiển thị danh sách:** `app/docs/page.tsx` sẽ nhóm các bài viết theo Category (như *overview*, *game-design*, *worldbuilding*, *technical*, *visual*, *production*) và hiển thị thành dạng lưới.
4. **Hiển thị chi tiết:** Khi truy cập `/docs/[slug]`, route sẽ đọc file tương ứng, dùng `react-markdown` kết hợp với `remark-gfm` và custom components để render HTML tuyệt đẹp với Table of Contents.

## 6. Cách quản lý tài liệu
- **Thêm tài liệu mới:** Chỉ cần tạo file `tieu-de-file.md` trong thư mục `documentations/`, thêm Frontmatter bắt buộc (xem hướng dẫn ở `DOCS_PORTAL_GUIDE.md`) và viết nội dung. Next.js sẽ tự động nhận diện và cập nhật danh sách.
- **Cập nhật tài liệu cũ:** Sửa trực tiếp file `.md` trong thư mục `documentations/`.
- **Kiểm tra sau khi sửa:** Chạy `npm run dev` và truy cập `http://localhost:3000/docs/<slug>` để xem hiển thị thực tế.

## 7. Các rủi ro hiện tại
- **Phụ thuộc vào File System:** Không có Database. Nếu số lượng file markdown quá lớn, hàm đọc file đồng loạt trong `lib/markdown.ts` có thể bị chậm trong môi trường dev. (Khi build production, Next.js sẽ tự pre-render tĩnh nên không đáng lo ngại).
- **Lỗi format Frontmatter:** Nếu file markdown bị thiếu frontmatter quan trọng hoặc sai cú pháp YAML, app có thể render sai mục lục hoặc gây lỗi khi build.
