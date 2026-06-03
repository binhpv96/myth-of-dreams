# Hướng dẫn Vận hành Docs Portal

Tài liệu này hướng dẫn cách vận hành, biên soạn và kiểm tra hệ thống tài liệu nội bộ cho dự án Myth of Dreams.

## 1. Cấu trúc thư mục Docs
- **Toàn bộ nội dung** được lưu tại: `documentations/` (Thư mục gốc của project).
- **Logic đọc file** được lưu tại: `lib/markdown.ts`.
- **Giao diện hiển thị** được lưu tại: `app/docs/` và các component trong `components/` (như `docs-toc.tsx`, v.v.).

## 2. Cách chạy và kiểm tra dự án (Local)
1. Cài đặt dependencies (nếu chưa có):
   ```bash
   npm install
   ```
2. Khởi chạy server development:
   ```bash
   npm run dev
   ```
3. Mở trình duyệt tại `http://localhost:3000/docs`.

**Cách build/check project trước khi commit:**
Kiểm tra code style và build tĩnh để đảm bảo không có lỗi:
```bash
npm run lint
npm run build
```

## 3. Quy ước viết Markdown
### 3.1. Đặt tên file
- Sử dụng Kebab-case, định dạng `.md` (VD: `game-overview.md`, `combat-system.md`).
- Tên file sẽ trực tiếp trở thành **slug** trên URL (VD: `/docs/game-overview`).

### 3.2. Cấu trúc Frontmatter (Bắt buộc)
Mỗi file markdown cần bắt đầu bằng khối YAML frontmatter:
```yaml
---
title: "Tên bài viết"
description: "Mô tả ngắn (tùy chọn)"
date: "2024-01-01"
category: "general"
order: 1
tags: ["lore", "design"]
---
```

### 3.3. Quy ước phân nhóm (Category)
Hệ thống hiện tại hỗ trợ các category sau (cấu hình trong `lib/markdown.ts`):
- `overview`: Tổng quan dự án, tầm nhìn và lộ trình phát triển.
- `game-design`: Tài liệu thiết kế hệ thống, cơ chế gameplay.
- `worldbuilding`: Cốt truyện, tiểu sử và xây dựng thế giới.
- `technical`: Kiến trúc hệ thống, API, cơ sở dữ liệu.
- `visual`: Định hướng nghệ thuật, phong cách UI/UX.
- `production`: Quy trình, biểu mẫu và kế hoạch sản xuất.

### 3.4. Quy ước nội dung (Headings)
- **H1 (`#`)**: KHÔNG DÙNG trong nội dung bài viết. Hệ thống đã tự động lấy `title` từ frontmatter làm H1.
- **H2 (`##`)**: Dùng cho các mục chính của bài. Component Table of Contents sẽ tự động bắt các heading này.
- **H3 (`###`)**: Dùng cho các mục con.

## 4. Quy trình thêm tài liệu mới
1. Tạo file `.md` trong `documentations/`.
2. Điền đầy đủ khối Frontmatter như trên.
3. Soạn thảo nội dung theo chuẩn Markdown (hỗ trợ bảng, code block, blockquote).
4. Khởi chạy `npm run dev` để kiểm tra trực quan bài viết có bị vỡ layout hoặc thiếu icon không.

## 5. Quy trình Review & Commit
1. Chỉ commit những file markdown bạn vừa thêm/sửa.
2. Kiểm tra lại Frontmatter xem có khai báo sai category không.
3. Khuyến nghị chạy `npm run build` local để chắc chắn Next.js không bị lỗi khi parse markdown.
4. Tạo Pull Request với branch convention: `username/feature` (VD: `binhpv/add-combat-docs`).

## 6. Lỗi thường gặp
- **Bài viết không hiện trên trang `/docs`:** Quên thêm thuộc tính `category` vào frontmatter, hoặc viết sai định dạng YAML (thiếu dấu trích dẫn).
- **Lỗi crash khi xem chi tiết:** Sử dụng các thẻ HTML không hợp lệ bên trong Markdown khiến thư viện `react-markdown` không thể parse. Cố gắng sử dụng cú pháp markdown thuần túy.
