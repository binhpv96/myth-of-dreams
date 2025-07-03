---
title: "Hướng dẫn Markdown cơ bản"
description: "Tìm hiểu cách sử dụng Markdown để viết nội dung blog"
date: "2024-01-16"
tags: ["markdown", "hướng dẫn", "viết lách"]
---

# Hướng dẫn Markdown cơ bản

Markdown là ngôn ngữ đánh dấu nhẹ giúp bạn định dạng văn bản một cách đơn giản.

## Tiêu đề

\`\`\`markdown
# Tiêu đề cấp 1
## Tiêu đề cấp 2
### Tiêu đề cấp 3
\`\`\`

## Định dạng văn bản

- **In đậm**: `**văn bản**` hoặc `__văn bản__`
- *In nghiêng*: `*văn bản*` hoặc `_văn bản_`
- ~~Gạch ngang~~: `~~văn bản~~`
- `Code inline`: `` `code` ``

## Danh sách

### Danh sách không thứ tự
\`\`\`markdown
- Mục 1
- Mục 2
  - Mục con 2.1
  - Mục con 2.2
\`\`\`

### Danh sách có thứ tự
\`\`\`markdown
1. Bước 1
2. Bước 2
3. Bước 3
\`\`\`

## Liên kết và hình ảnh

- Liên kết: `[Văn bản](URL)`
- Hình ảnh: `![Alt text](URL)`

## Trích dẫn

> Đây là một trích dẫn.
> Có thể viết nhiều dòng.

## Code blocks

```python
def hello_world():
    print("Hello, World!")
    
hello_world()
