---
title: "Technical Architecture"
description: "Myth of Dreams - Technical Architecture"
date: "2026-06-03"
category: "technical"
order: 60
tags: ["technical","architecture"]
---

**Version:** 1.1
**Document Type:** Technical Architecture Document  
**Project:** Myth of Dreams 
**Owner:** Dev nội bộ / Backend / Unity / DevOps 

---

## 1. Overall Architecture

```text
Unity Client
  ↓ REST API
Spring Boot Backend
  ↓
PostgreSQL
  ↓
Redis
  ↓
Object Storage/CDN
  ↓
Analytics / Logs / Monitoring
```

Post-MVP có thể thêm:

```text
Queue Worker
NFT Service
Blockchain Indexer
Marketplace Service
Admin/CMS nâng cao
```

---

## 2. Tech decisions

| Category | Stack |
|---|---|
| Client | Unity |
| Backend | Java + Spring Boot |
| Architecture | Modular Monolith |
| API | REST API |
| Database | PostgreSQL |
| Cache | Redis |
| Storage | S3-compatible Object Storage |
| Auth MVP | Guest Login + optional email binding |
| Realtime | Chưa cần trong MVP |
| NFT | Chỉ chuẩn bị metadata, chưa mint thật |
| Marketplace | Không thuộc MVP |
| PvP | Không thuộc MVP |

---

## 3. Why Modular Monolith?

MVP chưa nên tách microservices.

Dùng **Modular Monolith** nghĩa là backend vẫn là một app Spring Boot, nhưng chia module rõ ràng bên trong codebase.

Ví dụ:

```text
com.mythofdreams
  ├ auth
  ├ user
  ├ dream
  ├ dreamrun
  ├ combat
  ├ inventory
  ├ reward
  ├ crafting
  ├ beast
  ├ relic
  ├ building
  ├ dreamland
  ├ metadata
  ├ nft
  ├ analytics
  └ admin
```

## 4. Server-authoritative principle

Client chỉ chịu trách nhiệm hiển thị và điều khiển trải nghiệm.

Server là nguồn sự thật cho:

- User account.
- Dream run state.
- Inventory.
- Reward.
- Crafting.
- Beast/Relic/Building ownership.
- Dream completion.
- Ending result.
- Economy transaction.
- Metadata.
- NFT eligibility.

Client **không được tự quyết định**:

- Số fragment nhận được.
- Item craft thành công hay không.
- Ending cuối cùng.
- Hidden node đã unlock chưa.
- Beast/Relic/Building ownership.
- NFT status.

---

## 5. Backend Modules MVP

### 5.1. Auth Module

Phụ trách:

- Guest login.
- Session token.
- Refresh token nếu cần.
- Optional email binding sau này.

API chính:

```text
POST /v1/auth/guest
POST /v1/auth/refresh
POST /v1/auth/logout
```

Output MVP:

- Người chơi có userId.
- Client có token để gọi API.
- Dữ liệu user persist được.

---

### 5.2. User Module

Phụ trách:

- Player profile.
- Display name.
- Account status.
- Basic settings.

API chính:

```text
GET  /v1/me
PATCH /v1/me
```

---

### 5.3. Daily Dream Module

Phụ trách:

- Lấy Daily Dream hiện tại.
- Quản lý Dream Seed.
- Kiểm tra user đã hoàn thành Dream hôm nay chưa.

API chính:

```text
GET /v1/daily-dream
```

Data chính:

```text
dream_seeds
```

---

### 5.4. Dream Run Module

Phụ trách:

- Start Dream.
- Resume Dream.
- Cập nhật node state.
- Lưu choice/flag.
- Resolve ending.
- Complete/abandon run.

API chính:

```text
POST /v1/dream/start
GET  /v1/dream/runs/{runId}
POST /v1/dream/runs/{runId}/node-action
POST /v1/dream/runs/{runId}/complete
POST /v1/dream/runs/{runId}/abandon
```

Data chính:

```text
dream_runs
dream_history
exploration_actions
```

---

### 5.5. Combat Module

Phụ trách:

- Start battle.
- Tạo battle snapshot.
- Nhận battle result từ client.
- Validate kết quả cơ bản.
- Trả kết quả về Dream Run.

API chính:

```text
POST /v1/battle/start
POST /v1/battle/result
```

MVP validation:

- Battle tồn tại.
- User sở hữu run.
- Enemy đúng config.
- Damage không quá vô lý.
- Turn count hợp lý.
- Duration hợp lý.
- Không submit result nhiều lần.

---

### 5.6. Inventory Module

Phụ trách:

- Material balance.
- Owned Beast/Relic/Building.
- Item query.
- Inventory summary.

API chính:

```text
GET /v1/inventory/materials
GET /v1/inventory/items
GET /v1/inventory/summary
```

Data chính:

```text
inventory_materials
user_beasts
user_relics
user_buildings
```

---

### 5.7. Reward Module

Phụ trách:

- Tính reward theo Dream, ending, rarity, route.
- Roll drop table trên server.
- Áp dụng cap.
- Gọi Inventory để grant reward.
- Ghi economy transaction.

Luồng chính:

```text
Dream completed
  ↓
RewardService tính reward
  ↓
InventoryService cộng item/material
  ↓
EconomyTransactionService ghi log
  ↓
MetadataService attach origin
  ↓
Trả reward summary cho client
```

---

### 5.8. Crafting Module

Phụ trách:

- Xem recipe.
- Kiểm tra material.
- Consume material.
- Tạo Beast/Relic/Building.
- Ghi transaction.
- Attach metadata.

API chính:

```text
GET  /v1/crafting/recipes
POST /v1/crafting/craft
GET  /v1/crafting/preview/{recipeId}
```

Crafting phải dùng database transaction.

---

### 5.9. Beast Module

Phụ trách:

- Beast template.
- Owned Beast.
- Stat/level/EXP.
- Skill.
- Combat snapshot.
- Metadata origin.

API chính:

```text
GET /v1/beasts
GET /v1/beasts/{beastId}
POST /v1/beasts/{beastId}/rename
```

---

### 5.10. Relic Module

Phụ trách:

- Relic template.
- Owned Relic.
- Equip/unequip.
- Effect modifier.
- Hidden route tags.

API chính:

```text
GET  /v1/relics
GET  /v1/relics/{relicId}
POST /v1/relics/{relicId}/equip
POST /v1/relics/{relicId}/unequip
```

---

### 5.11. Building & Dreamland Module

Phụ trách:

- Building inventory.
- Place/move/store Building.
- Dreamland layout.
- Building bonus.
- Beast roaming data.

API chính:

```text
GET  /v1/dreamland
GET  /v1/dreamland/layout
POST /v1/buildings/{buildingId}/place
POST /v1/buildings/{buildingId}/move
POST /v1/buildings/{buildingId}/store
GET  /v1/dreamland/bonuses
```

---

### 5.12. Metadata / NFT Module

MVP chỉ cần metadata-ready, chưa cần blockchain.

Phụ trách:

- Origin metadata.
- Mint status placeholder.
- Metadata preview.
- NFT eligibility placeholder.

API chính:

```text
GET /v1/items/{itemId}/metadata
GET /v1/items/{itemId}/mint-eligibility
```

Post-MVP mới thêm:

```text
POST /v1/wallet/link
POST /v1/items/{itemId}/mint
GET  /v1/nft/sync
```

---

### 5.13. Analytics Module

Phụ trách:

- Nhận event từ client/backend.
- Gửi sang PostHog/Segment/custom event sink.
- Ghi event quan trọng nếu cần debug.

API:

```text
POST /v1/analytics/events
```

Event MVP:

```text
tutorial_started
tutorial_completed
dream_started
dream_completed
node_choice_selected
battle_started
battle_completed
reward_claimed
item_crafted
building_placed
hidden_node_revealed
ending_resolved
```

---

## 6. Data Model MVP

### 6.1. Main tables

| Table | Purpose |
|---|---|
| users | Account người chơi |
| user_profiles | Profile hiển thị |
| dream_seeds | Daily Dream data |
| dream_runs | Run hiện tại của user |
| dream_history | Dream đã hoàn thành |
| exploration_actions | Action/choice trong Dream |
| inventory_materials | Fragment/material balance |
| user_beasts | Beast người chơi sở hữu |
| user_relics | Relic người chơi sở hữu |
| user_buildings | Building người chơi sở hữu |
| dreamlands | Dreamland state/layout |
| economy_transactions | Log thay đổi economy |
| crafting_recipes | Recipe craft |
| drop_tables | Reward/drop config |
| metadata_snapshots | Metadata item |
| nft_items | NFT mapping, post-MVP/placeholder |

---

### 6.2. Template vs Instance

Dùng mô hình:

```text
Template = data gốc
Instance = item người chơi sở hữu
```

Ví dụ:

```text
beast_templates
  ↓
user_beasts
```

```text
relic_templates
  ↓
user_relics
```

```text
building_templates
  ↓
user_buildings
```

Template thường đến từ config hoặc bảng master data.  
Instance là dữ liệu riêng của user.

---

### 6.3. JSONB dùng ở đâu?

PostgreSQL JSONB nên dùng cho dữ liệu linh hoạt:

- Dream run flags.
- Node states.
- Choices made.
- Origin metadata.
- Visual traits.
- Skill levels.
- Building layout.
- Drop table config.

Không nên lạm dụng JSONB cho field cần query nhiều.

Các field nên tách cột riêng:

- user_id.
- item_id.
- template_id.
- rarity.
- status.
- created_at.
- dream_seed_id.
- run_id.
- owner_id.
- mint_status.

---

## 7. API style

MVP dùng REST API là đủ.

Quy ước:

- Base path: `/v1`
- JSON request/response.
- Bearer token.
- Error format thống nhất.
- Critical POST dùng idempotency key.

Ví dụ error:

```json
{
  "error": {
    "code": "INSUFFICIENT_MATERIALS",
    "message": "Không đủ Abyss Serpent Fragment.",
    "details": {
      "required": 40,
      "owned": 18
    }
  },
  "requestId": "REQ-123"
}
```

---

## 8. Luồng chính cần implement

### 8.1. Login flow

```text
Client gọi POST /auth/guest
  ↓
Server tạo user nếu chưa có
  ↓
Server trả access token
  ↓
Client vào Dreamland
```

---

### 8.2. Daily Dream flow

```text
Client GET /daily-dream
  ↓
Server trả Dream Seed hiện tại
  ↓
Client hiển thị Dream card
  ↓
Player chọn Beast/Relic
  ↓
Client POST /dream/start
  ↓
Server tạo dream_run
```

---

### 8.3. Exploration flow

```text
Client chọn node
  ↓
POST /dream/runs/{runId}/node-action
  ↓
Server validate node hợp lệ
  ↓
Server update flags/node state
  ↓
Server trả node mới được unlock
  ↓
Client update map
```

---

### 8.4. Combat flow

```text
Client vào combat node
  ↓
POST /battle/start
  ↓
Server tạo battle snapshot
  ↓
Client chạy battle
  ↓
POST /battle/result
  ↓
Server validate result
  ↓
Server update dream_run
```

---

### 8.5. Dream complete + reward flow

```text
Client complete Dream
  ↓
POST /dream/runs/{runId}/complete
  ↓
Server resolve ending
  ↓
RewardService tính reward
  ↓
InventoryService grant reward
  ↓
Economy transaction được ghi
  ↓
Metadata origin được attach
  ↓
Client hiển thị reward screen
```

---

### 8.6. Crafting flow

```text
Client chọn recipe
  ↓
POST /crafting/craft
  ↓
Server validate material
  ↓
Server trừ material
  ↓
Server tạo item
  ↓
Server attach metadata
  ↓
Server ghi transaction
  ↓
Client hiển thị item mới
```

---

## 9. Content pipeline MVP

MVP nên dùng config data trước, chưa cần CMS lớn.

Nguồn content:

```text
JSON/YAML/CSV trong repo
  ↓
Validation script
  ↓
Import vào database
  ↓
Backend dùng config version
```

Content cần config:

- Dream template.
- Map nodes.
- Dialogue.
- Enemy template.
- Boss template.
- Beast template.
- Relic template.
- Building template.
- Drop table.
- Crafting recipe.
- Ending rule.

Cần có validation script để kiểm tra:

- Node ID có tồn tại không.
- Enemy/Boss ID đúng không.
- Reward table đúng không.
- Recipe output đúng không.
- Localization key thiếu không.
- Ending có reachable không.

---

## 10. Bảo mật và anti-cheat MVP

### 10.1. Không tin client

Client có thể bị sửa.

Không tin client về:

- Reward.
- Fragment amount.
- Craft result.
- Dream ending.
- Hidden unlock.
- Damage quá bất thường.
- Item ownership.
- NFT status.

---

### 10.2. Check bắt buộc

MVP cần check:

- Auth token.
- User sở hữu run.
- User sở hữu Beast/Relic/Building.
- Node action hợp lệ.
- Battle result hợp lý.
- Reward chưa claim trước đó.
- Craft có đủ material.
- Idempotency key cho request quan trọng.
- Transaction log cho mọi thay đổi economy.

---

### 10.3. Chống duplicate reward/craft

Dùng:

- Database transaction.
- Row lock khi update material.
- Unique constraint cho reward claim.
- Idempotency key.
- Economy transaction log.

Ví dụ khi craft:

```text
Lock material row
  ↓
Check quantity
  ↓
Subtract material
  ↓
Create item
  ↓
Commit transaction
```

---

## 11. Logging, monitoring, analytics

### 11.1. Logging

Log các event quan trọng:

- Login.
- Dream start.
- Dream complete.
- Reward granted.
- Craft success/fail.
- Inventory changed.
- Battle result rejected.
- Hidden ending resolved.

Log nên có:

```text
requestId
userId
runId
operation
status
timestamp
```

---

### 11.2. Error tracking

Dùng Sentry hoặc tool tương tự cho:

- Backend exception.
- Unity crash.
- API error.
- Reward/craft failure.

---

### 11.3. Metrics cần theo dõi

- API error rate.
- API latency.
- Dream completion rate.
- Reward claim success.
- Craft success/fail.
- Fragment source/sink.
- Crash-free sessions.
- Hidden Ending rate.
- Corrupt route usage.

---

## 12. Deployment MVP

### 12.1. Environment

Cần 4 môi trường:

| Environment | Dùng để |
|---|---|
| Local | Dev cá nhân |
| Dev | Test tích hợp |
| Staging | Test gần production |
| Production | Live user |

---

### 12.2. Docker setup MVP

Các service cơ bản:

```text
spring-boot-api
postgres
redis
object-storage hoặc external S3
```

---

### 12.3. CI/CD tối thiểu

```text
Push code
  ↓
Run test
  ↓
Build app
  ↓
Build Docker image
  ↓
Run migration
  ↓
Deploy dev/staging
```

Production deploy nên có manual approval.

---

### 12.4. Database migration

Dùng:

```text
Flyway hoặc Liquibase
```

MVP nên chọn **Flyway** vì đơn giản.

---

## 13. Backup và data integrity

Dữ liệu quan trọng nhất:

- User.
- Inventory.
- Beast/Relic/Building.
- Dream runs.
- Dream history.
- Economy transactions.
- Metadata.

Cần:

- Backup PostgreSQL hằng ngày.
- Backup trước migration lớn.
- Không sửa inventory trực tiếp nếu không có transaction log.
- Có script kiểm tra balance bất thường.

---

## 14. Testing MVP

### 14.1. Unit test

Test:

- Damage formula.
- Reward calculation.
- Drop table roll.
- Crafting validation.
- Ending resolution.
- Building placement.
- Metadata generation.

---

### 14.2. Integration test

Test API flow:

- Guest login.
- Start Dream.
- Node action.
- Battle result.
- Complete Dream.
- Claim reward.
- Craft item.
- Place Building.

---

### 14.3. Simulation test

Dùng script test:

- 1000 reward rolls.
- Fragment source/sink.
- Time to first craft.
- Hidden Ending reachability.
- Corrupt route reward impact.

---

## 15. Admin tool MVP

MVP chưa cần admin tool quá lớn.

Cần tối thiểu:

- Xem user.
- Xem inventory.
- Xem dream run.
- Xem economy transaction.
- Xem Daily Dream hiện tại.
- Import content config.
- Bật/tắt feature flag đơn giản.
- Grant test item trong dev/staging.

Có thể bắt đầu bằng internal script trước, rồi làm dashboard sau.

---

## 16. Task kỹ thuật MVP

## Sprint 1 — Project Foundation

| Task | Output |
|---|---|
| Setup Unity project | Unity repo/build |
| Setup Spring Boot project | Backend repo |
| Setup PostgreSQL + Redis | Docker compose |
| Guest login API | Auth endpoint |
| Basic logging | Structured log |
| DB migration setup | Flyway/Liquibase |

---

## Sprint 2 — Daily Dream Foundation

| Task | Output |
|---|---|
| Dream seed table | Migration |
| Daily Dream API | GET /daily-dream |
| Dream start API | POST /dream/start |
| Dream run state | dream_runs table |
| Unity Daily Dream screen | Playable UI |

---

## Sprint 3 — Exploration Foundation

| Task | Output |
|---|---|
| Node map config | JSON/config |
| Node action API | POST node-action |
| Choice flag system | Flags saved |
| Hidden node reveal basic | Hidden node demo |
| Ending rule basic | Ending resolved |

---

## Sprint 4 — Combat Foundation

| Task | Output |
|---|---|
| Battle scene | Unity battle scene |
| Battle start API | POST /battle/start |
| Battle result API | POST /battle/result |
| Enemy scaling | Formula/config |
| Basic validation | Reject impossible result |

---

## Sprint 5 — Inventory & Reward

| Task | Output |
|---|---|
| Material inventory | DB/API |
| Drop table roll | Server roll |
| Reward grant | RewardService |
| Economy transaction log | economy_transactions |
| Reward UI | Unity screen |

---

## Sprint 6 — Beast / Relic / Building

| Task | Output |
|---|---|
| Beast template + instance | DB/config |
| Beast inventory UI | Unity screen |
| Relic equip | API/UI |
| Building placement | API/UI |
| Dreamland bonus | Bonus calculation |

---

## Sprint 7 — Crafting

| Task | Output |
|---|---|
| Crafting recipe config | JSON/DB |
| Craft API | POST /crafting/craft |
| Craft Beast | Working flow |
| Craft Relic | Working flow |
| Craft Building | Working flow |
| Metadata origin attach | Item metadata |

---

## Sprint 8 — Content Pipeline

| Task | Output |
|---|---|
| Config import script | Import tool |
| Config validation script | Validation report |
| Dream template import | Working data |
| Enemy/Boss config import | Working data |
| Drop/recipe import | Working data |

---

## Sprint 9 — Analytics & QA

| Task | Output |
|---|---|
| Analytics event schema | Event doc |
| Client event tracking | Unity events |
| Backend event tracking | Server events |
| QA test plan | QA checklist |
| Balance simulation | Simulation report |

---

## Sprint 10 — Polish & MVP Readiness

| Task | Output |
|---|---|
| Performance pass | Perf report |
| Crash/error tracking | Sentry dashboard |
| Economy review | Source/sink report |
| Security review | Basic checklist |
| Staging build | MVP staging build |

---

## 17. Kết luận kỹ thuật nội bộ

Điều quan trọng nhất trong MVP:

- Đừng over-engineer.
- Đừng build blockchain sớm.
- Đừng tin client về reward/economy.
- Làm core loop chạy mượt trước.
- Giữ code chia module rõ để sau này dễ tách service.\n