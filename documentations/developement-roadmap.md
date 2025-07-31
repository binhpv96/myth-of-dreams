---
title: "Game Development Roadmap"
description: "Lộ trình phát triển toàn bộ hệ thống game Myth of Dreams từ giai đoạn lập kế hoạch đến ra mắt bản Alpha."
date: 2025-08-01
category: "project"
order: 1
tags: ["roadmap", "development-phases", "milestones", "team"]
---

# 🗺️ Lộ trình phát triển hệ thống

## Phase 0 – Set up

### 0.1. Xác định ý tưởng, lối chơi 

<strong>Output:</strong> <a href="../docs/game-overview" target="_blank" rel="noopener noreferrer"><code>Game Overview</code></a>
- Mô tả ngắn về game 
- Điểm độc đáo  
- Luồng chơi cơ bản, thể loại

### 0.2. Phân tích tính năng & xác định MVP  

<strong>Output:</strong> <a href="../docs/planned-features" target="_blank" rel="noopener noreferrer"><code>Features List</code></a>
- Danh sách tính năng  
- Gắn nhãn ưu tiên (Must / Should / Nice)  
- Tab riêng lọc tính năng MVP

### 0.3. Training month
- Cài đặt tool, IDE, . . . 
- Làm quen hệ thống công nghệ cần thiết cho hệ thống 
- Phân chia vai trò, setup group làm việc

---

## Phase 1 – Thiết kế hệ thống

### 1.1. Thiết kế gameplay chi tiết

<strong>Output:</strong> <a href="../docs/gameplay" target="_blank" rel="noopener noreferrer"><code>Gameplay</code></a>
- Luồng hành động  
- Logic cơ chế 

### 1.2. Viết tài liệu GDD

**Output**: `GDD_mythofdreams.md`  
- Liệt kê & mô tả danh sách item, nhà, thú, blueprint, gen ( ID, loại, công dụng, độ hiếm, hệ, ... )
- Vẽ các Concept art đầu tiên
- Lên Wireframe UI/UX	
- Thống nhất metadata

### 1.3. Thiết kế hệ thống backend & blockchain  

<strong>Output:</strong> <a href="../docs/system-design" target="_blank" rel="noopener noreferrer"><code>System Design</code></a>
- Vẽ ERD 
- Thiết kế contract NFT thú, token $DREAM, marketplace (mua bán qua smart contract hay backend relay) 
- Phân loại dữ liệu: On-chain & Off-chain

### 1.4. Tokenomics và Play-to-Earn
<strong>Output:</strong> <a href="../docs/tokenomics" target="_blank" rel="noopener noreferrer"><code>Tokenomics</code></a>
- Phác thảo dòng tiền, loại token
- Cơ chế earn/spend  
- Bảng phân phối token

---

## Phase 2 – Thiết kế kỹ thuật

### 2.1. Chuẩn bị tài liệu kỹ thuật
- Thiết kế API (Swagger/Postman)
- Build 1 giấc mơ cụ thể: Mô tả cách người chơi bước vào giấc mơ, hành động, logic nhận phần thưởng, rủi ro, . . .

### 2.2. Chuẩn bị dữ liệu & tài sản 
- Danh sách tài sản (Excel – Designer)
- Database Schema (SQL file – Backend)
- Chuẩn hóa quy ước đặt tên file (Unity Dev)

### 2.3. Marketplace & Demo 
- Web mockup Marketplace  
- Chuẩn hóa UX/UI tài liệu

### 2.4. Xây dựng prototype
- Tích hợp bản đồ nguyên mẫu: Có bản đồ đơn giản
- Triển khai di chuyển nhân vật: player di chuyển được bằng chuột/bàn phím
- Giao tiếp cơ bản với object: xây nhà, thu thập tài nguyên, . . . ( click/tap vào, hiện popup, animation )
- Tạo UI có thể mở/tắt, trigger actions đơn giản
- Test kết nối API đơn giản
---

## Phase 3 – MVP

### 3.1. Backend
- API login/signup  
- DB lưu `user_progress`

### 3.2. Designer
- UI/UX cơ bản: các bảng popup, cửa sổ xây dựng, túi đồ ( Figma + xuất asset )
- Thiết kế item, công trình bản MVP: PNG/SVG với nhiều kích cỡ, asset chia layer ( optional )
- Thiết kế NPC: Các dạng biểu cảm, động tác cơ bản
- Asset chia layer, đa kích cỡ

### 3.3. Unity Developer
- Quản lý tài nguyên: Tạo hệ thống thu thập & quản lý tài nguyên lưu được về server
- Hệ thống xây dựng: Giao diện đặt nhà trên bản đồ, xây dựng trong thời gian, hiện animation tiến độ
- Fetch API kết nối Unity ↔ Backend bản MVP  
- Hiển thị NFT: Hiển thị đúng thông tin NFT ( fetch API )

### 3.4. Web Developer
- Web mock Marketplace  

---

## Phase 4 – Tích hợp Web3

### 4.1. Blockchain Dev
- Deploy NFT contract (ERC721/1155)  
- Tích hợp IPFS (metadata)  
- Mint & Claim NFT từ gameplay  
- Giao dịch NFT (buy/sell)  

### 4.2. Designer
- Thiết kế hình đại diện NFT: viền, khung, độ hiếm

### 4.3. Web + Unity
- Tích hợp ví (Metamask button)  
- Đọc/hiển thị NFT từ ví  
- Thiết kế UI marketplace & ví  
- Tạo cơ chế đấu giữa 2 thú, xem lượt đánh, tính damage
- Thêm animation cho nhân vật, thú, công trình
- Thêm hiệu ứng khi mở pack NFT, . . .
- Tối ưu performance

<strong>Output:</strong> <a href="../marketplace" target="_blank" rel="noopener noreferrer"><code>Marketplace</code></a>

---

## Phase 5 – Polish & Testing

### 5.1. Asset & UI
- Vẽ & gắn animation: idle, thu hoạch,...  
- Âm thanh, hiệu ứng UI  , click effect
- Tổng vệ sinh asset: Gộp, rename, nén asset nhẹ hơn

### 5.2. Testing & Fixing
- User testing 
- Fix bug, tối ưu hiệu năng  
- CI/CD WebGL: auto deploy  

---

## Phase 6 – Ra mắt Alpha

- Build WebGL Unity (`index.html`, assets)  
- Hoàn thiện Landing Page (changelog, tải game)  
- Hệ thống feedback
- Xây dựng cộng đồng:<a href="https://discord.gg/9SKbtEhg" target="_blank" rel="noopener noreferrer"><code>Discord</code></a>

---
