# Agent Notes — Khởi đầu cho AI Agent

**Mục tiêu dự án hiện tại:**
Web portal cho game indie "Myth of Dreams", tập trung **duy nhất** vào hệ thống **Docs Portal**. Dùng làm nơi chia sẻ, lưu trữ tài liệu nội bộ cho team phát triển.

**Phạm vi (Scope):**
- **Trọng tâm số 1:** Docs portal (`/docs`).
- **Không ưu tiên/Không sửa:** Marketplace, kết nối ví (Wallet), tính năng Web3/NFT, Landing page marketing. Các phần này hiện tại chỉ là mock/giao diện tạm, đừng tốn thời gian hoàn thiện chúng trừ khi được yêu cầu rõ ràng.

**Tech Stack:**
- **Core:** Next.js 15 (App Router), React 19, TypeScript.
- **Style/UI:** Tailwind CSS v4, shadcn/ui.
- **Docs/Markdown:** `gray-matter` (parse frontmatter), `react-markdown` (render HTML).

**Cấu trúc thư mục quan trọng:**
- `app/docs/`: Route chính của Docs portal.
- `app/docs/[slug]/`: Route render chi tiết bài viết (đọc slug từ URL).
- `documentations/`: Nơi chứa toàn bộ file markdown (`.md`) tài liệu game.
- `lib/markdown.ts`: Logic đọc file markdown, parse frontmatter và trả về dữ liệu cho các route.
- `docs/internal/`: Tài liệu nội bộ hướng dẫn dự án (nơi chứa file này).

**Luồng hoạt động của Docs:**
- File `.md` được tạo trong `documentations/`.
- `lib/markdown.ts` dùng `fs` để đọc file, `gray-matter` bóc tách dữ liệu meta (frontmatter).
- `app/docs/page.tsx` gọi hàm lấy list categories và render danh sách.
- `app/docs/[slug]/page.tsx` nhận `slug`, gọi `getDocBySlug` và hiển thị nội dung thông qua `react-markdown`.

**Agent nên đọc gì trước?**
Hãy đọc hai file sau trước khi bắt đầu code/debug hệ thống docs:
1. `docs/internal/PROJECT_CONTEXT.md`
2. `docs/internal/DOCS_PORTAL_GUIDE.md`

**Quy tắc CẤM KỴ đối với Agent:**
- **KHÔNG** refactor architecture hoặc các thành phần core.
- **KHÔNG** đổi UI styling (trừ khi có task fix CSS cụ thể).
- **KHÔNG** cài đặt thêm package mới.
- **KHÔNG** sửa đổi mã nguồn liên quan đến Marketplace hay Wallet.
- **KHÔNG** sửa đổi nội dung thành landing page marketing.

**Quy trình làm task an toàn:**
1. Đọc file yêu cầu và kiểm tra route bị ảnh hưởng.
2. Với nội dung bài viết, chỉ tác động vào folder `documentations/`.
3. Kiểm tra kết quả bằng lệnh `npm run lint` và `npm run build` sau khi code.

**Branch/Commit convention:**
- Branch: `username/feature` hoặc `agent/feature-name` (VD: `agent/update-docs-layout`).
- Commit messages: Rõ ràng, mô tả mục đích (VD: `docs: update lore markdown files`). Tránh dùng `fix`, `update` chung chung.
