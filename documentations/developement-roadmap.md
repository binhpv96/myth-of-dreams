---
title: "Game Development Roadmap"
description: "Lộ trình phát triển toàn bộ hệ thống game Myth of Dreams từ giai đoạn lập kế hoạch đến ra mắt bản Alpha."
date: 2025-07-03
category: "project"
order: 1
tags: ["roadmap", "development-phases", "milestones", "team"]
---

Lộ trình phát triển hệ thống được chia làm 2 phần:

- **Tóm tắt từng giai đoạn phát triển**
- **Chi tiết các đầu việc và tài liệu tương ứng**

---

## I. Tóm tắt các giai đoạn phát triển

###  Phase 0: Lập kế hoạch ban đầu
| Công việc | Vai trò phụ trách |
|----------|-------------------|
| Xác định ý tưởng, lối chơi (gameplay) | PM |
| Phân tích tính năng, phạm vi MVP | PM |
| Xác định mô hình P2E, tokenomics | Blockchain Dev, PM |
| Phân chia team (ai làm gì) | PM |
| Lập kế hoạch học tập ban đầu (1 tháng) | All |

---

### Phase 1: Thiết kế game & hệ thống

| Công việc | Vai trò phụ trách |
|----------|-------------------|
| Thiết kế gameplay chi tiết | Game Designer, PM |
| Lên wireframe UI/UX | UI/UX Designer |
| Thiết kế hệ thống vật phẩm, nhà cửa... | Game Designer |
| Viết tài liệu GDD | Game Designer, PM |
| Thiết kế database cho game + blockchain data | Backend, Blockchain Dev |
| Thiết kế tokenomics (token, ví, in-game item) | Blockchain Dev, PM |

🎯 **Mục tiêu**: Có bản thiết kế GDD hoàn chỉnh, tokenomics rõ ràng, sơ đồ database và UI sơ khai.

---

### Phase 2: Xây dựng MVP – Bản demo game

| Công việc | Vai trò phụ trách |
|----------|-------------------|
| Phát triển core gameplay | Unity Dev |
| Thiết lập backend API | Backend Dev |
| Thiết kế và deploy smart contract NFT | Blockchain Dev |
| Tích hợp smart contract với backend | Blockchain Dev + Backend Dev |
| UI/UX cơ bản cho bản PC demo | Unity Dev + UI/UX Designer |
| Thiết lập testnet, ví demo | Blockchain Dev |

🎯 **Mục tiêu**: Game PC có thể chơi offline/online + kết nối blockchain testnet đơn giản.

---

### Phase 3: Kiểm tra, sửa lỗi, tối ưu MVP

| Công việc | Vai trò phụ trách |
|----------|-------------------|
| Test game | Users |
| Ghi nhận feedback, cải tiến sản phẩm | All |

---

### Phase 4: Chuẩn bị ra mắt bản Alpha

| Công việc | Vai trò phụ trách |
|----------|-------------------|
| Landing page, đăng ký tài khoản | Frontend & Backend Dev |
| Viết whitepaper v1 | PM, Blockchain Dev |
| Trailer, giới thiệu ý tưởng | Designer, PM |
| Pitch deck | PM |
| Giao diện quản lý user, asset | Backend + UI/UX |

---

## II. Chi tiết từng giai đoạn & tài liệu liên quan

### Phase 0 – Lập kế hoạch ban đầu

#### 1. Xác định ý tưởng, lối chơi

<strong>Output:</strong> <a href="../docs/game-overview" target="_blank" rel="noopener noreferrer"><code>Game Overview</code></a>

- Mô tả ngắn về game 
- Điểm độc đáo  
- Luồng chơi cơ bản, thể loại

#### 2. Phân tích tính năng & xác định MVP

<strong>Output:</strong> <a href="../docs/planned-features" target="_blank" rel="noopener noreferrer"><code>Features List</code></a>
- Danh sách tính năng  
- Gắn nhãn ưu tiên (Must / Should / Nice)  
- Tab riêng lọc tính năng MVP

#### 3. Phác thảo Tokenomics & P2E

<strong>Output:</strong> <a href="../docs/tokenomics" target="_blank" rel="noopener noreferrer"><code>Tokenomics</code></a>
- Dòng tiền, loại token, cơ chế earn/spend  
- Bảng phân phối

#### 4. Training month
---

### Phase 1 – Thiết kế game & hệ thống

#### 1. Thiết kế gameplay chi tiết

<strong>Output:</strong> <a href="../docs/gameplay" target="_blank" rel="noopener noreferrer"><code>Gameplay</code></a>
- Luồng hành động  
- Logic cơ chế 

#### 2. Viết tài liệu GDD

**Output**: `07_GDD_DreamArchitect.md`  
- Thông tin game  
- Cơ chế gameplay  
- Tài nguyên/NFT/UI phác thảo

#### 3. Thiết kế hệ thống backend & blockchain

<strong>Output:</strong> <a href="../docs/system-design" target="_blank" rel="noopener noreferrer"><code>System Design</code></a>
- Bảng dữ liệu backend  
- API REST  
- Contract NFT/token/market  
- On-chain vs off-chain

#### 4. Tokenomics chi tiết

**Output**: `09_Tokenomics_v1.xlsx`  
- Phân phối token  
- Biểu đồ, ước tính chi tiết  
- Cơ chế chống lạm phát

---

### Phase 2 – Thiết kế kỹ thuật

| Task | Output | Phụ trách |
|------|--------|-----------|
| Xây dựng ERD | Sơ đồ Draw.io | Backend Dev + PM |
| Thiết kế API | Swagger/Postman | Backend Dev |
| Thiết kế Smart Contract Structure | Sơ đồ file | Blockchain Dev |
| Game Architecture | Hệ thống client-server | PM + All |
| Danh sách tài sản | Excel / Notion | PM + Designer |
| Database schema SQL | SQL file | Backend Dev |
| Quản lý phiên bản NFT | Metadata JSON | Blockchain Dev |

---

### Phase 3 – Phát triển MVP

| Task | Output | Phụ trách |
|------|--------|-----------|
| Đăng nhập backend | API login/signup | Backend |
| Xây dựng gameplay MVP | Build Unity | Unity Dev |
| UI/UX sơ bộ | Figma | Designer |
| Kết nối Unity ↔ Backend | Fetch API | Unity + Backend |
| Tạo NFT ảo mock | JSON metadata | Blockchain Dev |
| Lưu progress người chơi | DB `user_progress` | Backend |
| Marketplace mock | Web demo | Web Dev |

---

### Phase 4 – Tích hợp Web3

| Task | Output | Phụ trách |
|------|--------|-----------|
| Deploy smart contract NFT | ERC721/1155 | Blockchain Dev |
| Tích hợp ví | Button Metamask | Web + Unity |
| Mint NFT từ game | Giao diện + TX | Unity + Blockchain |
| Đọc NFT từ ví | Hiển thị metadata | Web/Unity |
| Kết nối IPFS | Upload metadata | Blockchain Dev |
| Giao dịch NFT | Buy/sell | <a href="../marketplace" target="_blank" rel="noopener noreferrer"><code>Marketplace</code></a> |
| Claim NFT từ gameplay | Game + backend logic | Unity + Backend |

---

### Phase 5 – Polish & Test

| Task | Output | Phụ trách |
|------|--------|-----------|
| UI hoàn chỉnh | Figma → Sản phẩm | Designer + Dev |
| Sound/UI feedback | UX tốt hơn | Unity Dev |
| User testing | Google Form | PM |
| Fix bug/perf | Bản build mới | Toàn team |
| CI/CD WebGL | Auto deploy | Web + PM |

---

### Phase 6 – Ra mắt Alpha

| Task | Output |
|------|--------|
| Build WebGL Unity | index.html, assets |
| Setup landing page | Changelog, tải game |
| Hệ thống feedback | Google Form / Feedback tool |
| Tổng hợp tài liệu | GDD, Tokenomics, Storyline |
| Xây dựng community | <a href="https://discord.gg/9SKbtEhg" target="_blank" rel="noopener noreferrer"><code>Discord</code></a> |

---
