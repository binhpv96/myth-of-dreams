---
title: "Roadmap"
description: "Myth of Dreams - Roadmap"
date: "2026-06-03"
category: "overview"
order: 4
tags: ["overview","roadmap"]
---

**Version:** 1.1  
**Status:** Working Roadmap  
**Dùng cho:** Team nội bộ  
**Ghi chú:** Mỗi task có cột **Output / Link** để gắn link tới doc, build, Figma, asset, PR, config, video demo hoặc QA report đã hoàn thành.

---

## Tổng quan phase

| Phase | Tên phase | Mục tiêu chính |
|---|---|---|
| Phase 0 | Foundation | Chốt tài liệu nền tảng, scope, kiến trúc và content template |
| Phase 1 | Playable Prototype | Có bản chơi được từ Dreamland → Dream → Combat → Reward |
| Phase 2 | MVP Production | Build đầy đủ MVP scope |
| Phase 3 | Internal Alpha | Test nội bộ, QA, balance, polish |
| Phase 4 | Soft Launch | Test retention/economy với user thật quy mô nhỏ |
| Phase 5 | Live Launch | Chuẩn bị launch public |
| Phase 6 | Ownership Expansion | Thêm NFT/ownership khi core game đã ổn |
| Phase 7 | Dreamverse Expansion | Mở rộng Realm, LiveOps, social/PvP sau launch |

---


## Mục tiêu

Chốt bộ tài liệu nền tảng để team có thể bắt đầu prototype mà không bị lệch hướng.

## Hoàn thành khi

- Product Vision, MVP Scope, Roadmap đã có bản dùng được.
- Core system docs đã đủ để dev/design/art hiểu phạm vi.
- Các template content chính đã sẵn sàng.
- Biết rõ prototype cần build những gì.

## Task

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P0-001 | Product Vision |  | Done | Tầm nhìn sản phẩm |
| P0-002 | MVP Scope |  | In Progress | Phạm vi MVP |
| P0-003 | Roadmap nội bộ |  | In Progress | Bản rút gọn cho team |
| P0-004 | GDD |  | Done/Existing | Game design tổng quan |
| P0-005 | Lore & Story Bible |  | Done/Existing | Lore chính |
| P0-006 | Daily Dream Template |  | Done/Existing | Template viết Daily Dream |
| P0-007 | Realm Lore |  | Done/Existing | Lore từng Realm |
| P0-008 | NPC Bible |  | Done/Existing | NPC, voice, dialogue direction |
| P0-009 | Exploration System |  | Done/Existing | Node map, choice, hidden path |
| P0-010 | Combat System |  | Done/Existing | Turn-based combat |
| P0-011 | Beast System |  | Done/Existing | Beast, stats, role, growth |
| P0-012 | Relic System |  | Done/Existing | Relic, equip, effect |
| P0-013 | Building & Dreamland System |  | Done/Existing | Dreamland, Building, placement |
| P0-014 | Economy & Reward System |  | Done/Existing | Fragment, drop, crafting |
| P0-015 | NFT Metadata |  | Done/Existing | Metadata, mint-ready |
| P0-016 | Technical Architecture |  | Done/Existing | Backend, client, DB, API |
| P0-017 | Database ERD |  | Not Started | Cần diagram |
| P0-018 | System Flow Diagrams |  | Not Started | Dream, reward, crafting, NFT flow |
| P0-019 | UI/UX Flow |  | Not Started | Screen flow và wireframe |
| P0-020 | Art Direction Board |  | Not Started | Moodboard 3 Realm MVP |

---


## Mục tiêu

Tạo một prototype nhỏ có thể chơi từ đầu đến cuối:

```text
Dreamland → Tutorial Dream → Exploration → Combat → Reward → Return
```

## Hoàn thành khi

- Có Unity build playable.
- Có backend/mock backend đủ để lưu trạng thái cơ bản.
- Có 1 Beast, 1 Dream, 1 enemy, 1 boss, 1 reward.
- Người chơi hoàn thành loop trong khoảng 10–15 phút.

## Task

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P1-001 | Setup Unity project |  | Not Started | Repo/build link |
| P1-002 | Setup backend project |  | Not Started | Repo/API base |
| P1-003 | Guest login prototype |  | Not Started | API + Unity screen |
| P1-004 | Dreamland prototype scene |  | Not Started | Scene/video demo |
| P1-005 | Starter Beast prototype: Luma |  | Not Started | Asset + prefab |
| P1-006 | Tutorial Daily Dream content |  | Not Started | Dream config/doc |
| P1-007 | Exploration node prototype |  | Not Started | Node map playable |
| P1-008 | Choice flag prototype |  | Not Started | Choice set flag được |
| P1-009 | Combat prototype |  | Not Started | Battle scene |
| P1-010 | Enemy prototype |  | Not Started | Enemy config/asset |
| P1-011 | Boss prototype |  | Not Started | Boss config/asset |
| P1-012 | Reward screen prototype |  | Not Started | UI screen |
| P1-013 | Fragment inventory prototype |  | Not Started | API/UI |
| P1-014 | Craft/place first Building |  | Not Started | Dreamwell hoặc Memory Library |
| P1-015 | Basic analytics events |  | Not Started | Event log |
| P1-016 | Prototype QA pass |  | Not Started | QA report |
| P1-017 | Prototype feedback review |  | Not Started | Review notes |

---


## Mục tiêu

Build đầy đủ MVP scope với 3 Realm đầu, 10–15 Daily Dreams, reward/crafting/Dreamland/Beast ổn định.

## Hoàn thành khi

- MVP feature complete.
- Có đủ content mục tiêu.
- Backend server-authoritative cho economy.
- Analytics cơ bản hoạt động.
- QA pass core loop.
- Có staging build.

---

## Phase 2A — Backend & Data Foundation

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P2A-001 | Implement database schema |  | Not Started | ERD + migration |
| P2A-002 | User/profile tables |  | Not Started | Migration/PR |
| P2A-003 | Dream seed tables |  | Not Started | Migration/PR |
| P2A-004 | Dream run state tables |  | Not Started | Migration/PR |
| P2A-005 | Inventory material tables |  | Not Started | Migration/PR |
| P2A-006 | Beast/Relic/Building instance tables |  | Not Started | Migration/PR |
| P2A-007 | Economy transaction log |  | Not Started | Transaction audit |
| P2A-008 | Drop table config loader |  | Not Started | Config/import |
| P2A-009 | Crafting recipe config loader |  | Not Started | Config/import |
| P2A-010 | Metadata/origin fields |  | Not Started | Migration/API |

---

## Phase 2B — Daily Dream & Exploration

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P2B-001 | Daily Dream API |  | Not Started | GET /daily-dream |
| P2B-002 | Dream start/resume/complete APIs |  | Not Started | API docs |
| P2B-003 | Node map UI |  | Not Started | Figma/build |
| P2B-004 | Node state sync |  | Not Started | API + client |
| P2B-005 | Choice system |  | Not Started | Choice flags |
| P2B-006 | NPC dialogue node |  | Not Started | Dialogue UI/config |
| P2B-007 | Puzzle node basic |  | Not Started | Sequence/object puzzle |
| P2B-008 | Hidden node reveal |  | Not Started | Hidden route |
| P2B-009 | Ending resolution |  | Not Started | Ending rule set |
| P2B-010 | Dream History record |  | Not Started | History screen/data |

---

## Phase 2C — Combat, Enemy & Boss

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P2C-001 | Battle scene MVP |  | Not Started | Playable combat |
| P2C-002 | Turn order system |  | Not Started | Combat module |
| P2C-003 | Skill system |  | Not Started | Skill configs |
| P2C-004 | Status effect system |  | Not Started | Buff/debuff |
| P2C-005 | Enemy scaling |  | Not Started | Formula implementation |
| P2C-006 | Battle start/result APIs |  | Not Started | API docs |
| P2C-007 | Battle plausibility validation |  | Not Started | Anti-cheat basic |
| P2C-008 | Boss phase system |  | Not Started | Boss phase demo |
| P2C-009 | Hidden combat hook |  | Not Started | Spare/hidden route |
| P2C-010 | 3 MVP bosses implemented |  | Not Started | Boss assets/config |

---

## Phase 2D — Beast, Relic, Building

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P2D-001 | Beast inventory UI |  | Not Started | Screen/build |
| P2D-002 | Beast profile UI |  | Not Started | Screen/build |
| P2D-003 | Beast EXP/level |  | Not Started | API/UI |
| P2D-004 | Beast combat snapshot |  | Not Started | Snapshot |
| P2D-005 | Relic inventory UI |  | Not Started | Screen |
| P2D-006 | Relic equip/effect |  | Not Started | Equip API |
| P2D-007 | Building inventory UI |  | Not Started | Screen |
| P2D-008 | Building placement |  | Not Started | Grid placement |
| P2D-009 | Dreamland bonus calculation |  | Not Started | Bonus API |
| P2D-010 | Beast roaming basic |  | Not Started | Dreamland animation |

---

## Phase 2E — Economy, Reward & Crafting

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P2E-001 | RewardService |  | Not Started | Reward calculation |
| P2E-002 | Drop table roll |  | Not Started | Server roll |
| P2E-003 | Ending-based rewards |  | Not Started | Purify/Corrupt/Hidden |
| P2E-004 | Reward screen final |  | Not Started | Reward UI |
| P2E-005 | Fragment inventory final |  | Not Started | API/UI |
| P2E-006 | CraftingService |  | Not Started | Craft API |
| P2E-007 | Craft Beast |  | Not Started | Craft flow |
| P2E-008 | Craft Relic |  | Not Started | Craft flow |
| P2E-009 | Craft Building |  | Not Started | Craft flow |
| P2E-010 | Economy transaction audit |  | Not Started | Transaction logs |

---

## Phase 2F — Content Production

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P2F-001 | Forest content pack |  | Not Started | Dreams/enemies/boss |
| P2F-002 | Ocean content pack |  | Not Started | Dreams/enemies/boss |
| P2F-003 | Playground content pack |  | Not Started | Dreams/enemies/boss |
| P2F-004 | 10–15 Daily Dreams |  | Not Started | Config/docs |
| P2F-005 | 12–20 Beast |  | Not Started | Assets/config |
| P2F-006 | 20–30 enemies |  | Not Started | Assets/config |
| P2F-007 | 10–15 Relics |  | Not Started | Icons/config |
| P2F-008 | 8–10 Buildings |  | Not Started | Assets/config |
| P2F-009 | NPC dialogue pass |  | Not Started | Dialogue trees |
| P2F-010 | Localization key pass |  | Not Started | Key table |

---

## Phase 2G — Metadata, Analytics & Admin

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P2G-001 | Origin metadata attach |  | Not Started | Item metadata |
| P2G-002 | Metadata preview UI |  | Not Started | Item profile |
| P2G-003 | Mint status placeholder |  | Not Started | Fields/API |
| P2G-004 | Analytics event schema |  | Not Started | Event doc |
| P2G-005 | Analytics integration |  | Not Started | Events sent |
| P2G-006 | Basic economy dashboard |  | Not Started | Dashboard link |
| P2G-007 | Config validation script |  | Not Started | Script link |
| P2G-008 | Basic admin tools |  | Not Started | Admin page/script |

---


## Mục tiêu

Test nội bộ MVP build trong nhiều ngày để sửa bug, kiểm tra balance và hoàn thiện core loop.

## Hoàn thành khi

- Internal testers chơi được nhiều ngày.
- Không còn blocker nghiêm trọng.
- Không có duplicate reward/craft nghiêm trọng.
- Tutorial dễ hiểu hơn.
- Content MVP đủ ổn để external test nhỏ.

## Task

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P3-001 | Internal alpha build |  | Not Started | Build link |
| P3-002 | QA test plan execution |  | Not Started | QA report |
| P3-003 | Tutorial UX review |  | Not Started | Review doc |
| P3-004 | Combat balance pass |  | Not Started | Balance sheet |
| P3-005 | Reward economy pass |  | Not Started | Economy sheet |
| P3-006 | Daily Dream content QA |  | Not Started | Content QA |
| P3-007 | Device performance pass |  | Not Started | Perf report |
| P3-008 | Analytics validation |  | Not Started | Event QA |
| P3-009 | Bug triage board |  | Not Started | Board link |
| P3-010 | Alpha learnings report |  | Not Started | Report link |

---


## Mục tiêu

Test retention, economy và content với nhóm người chơi thật quy mô nhỏ.

## Hoàn thành khi

- Có tín hiệu D1/D7 retention.
- Crash-free sessions ổn.
- Economy không vỡ.
- Tutorial đủ dễ hiểu.
- Người chơi có follow-up action sau reward.
- Biết rõ cần polish/cut/build gì tiếp theo.

## Task

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P4-001 | Soft launch build |  | Not Started | Store/internal link |
| P4-002 | Soft launch cohort setup |  | Not Started | Cohort plan |
| P4-003 | Live analytics dashboard |  | Not Started | Dashboard |
| P4-004 | Retention report D1/D3/D7 |  | Not Started | Report |
| P4-005 | Economy source/sink report |  | Not Started | Report |
| P4-006 | Player feedback survey |  | Not Started | Survey link |
| P4-007 | Tutorial improvement pass |  | Not Started | Updated flow |
| P4-008 | Content cadence test |  | Not Started | New dreams |
| P4-009 | Cosmetic monetization test design |  | Not Started | Design doc |
| P4-010 | Soft launch decision report |  | Not Started | Go/no-go doc |

---


## Mục tiêu

Chuẩn bị bản public launch có core loop ổn định, content đủ, economy safe và onboarding tốt.

## Hoàn thành khi

- Build store-ready.
- Marketing assets ready.
- Crash-free target đạt.
- Economy đã review.
- LiveOps plan sẵn sàng.
- Support/admin flow sẵn sàng.

## Task

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P5-001 | Launch candidate build |  | Not Started | Build/store link |
| P5-002 | Store assets |  | Not Started | Store listing |
| P5-003 | Launch trailer/screenshots |  | Not Started | Asset link |
| P5-004 | Final onboarding polish |  | Not Started | Build/Figma |
| P5-005 | LiveOps calendar |  | Not Started | Calendar |
| P5-006 | Support/admin readiness |  | Not Started | SOP/admin |
| P5-007 | Launch economy lock |  | Not Started | Balance report |
| P5-008 | Launch QA regression |  | Not Started | QA report |
| P5-009 | Privacy/TOS review |  | Not Started | Legal docs |
| P5-010 | Launch postmortem template |  | Not Started | Template link |

---


## Mục tiêu

Thêm NFT/ownership sau khi core game đã ổn, theo hướng optional và không pay-to-win.

## Hoàn thành khi

- Wallet link secure.
- Mint optional.
- Metadata snapshot ổn định.
- NFT không ảnh hưởng core gameplay.
- Marketplace nếu có không tạo pay-to-win.

## Task

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P6-001 | Wallet linking design |  | Not Started | Design/API |
| P6-002 | Metadata snapshot service |  | Not Started | Service/API |
| P6-003 | NFT card generation |  | Not Started | Image output |
| P6-004 | Testnet contract |  | Not Started | Contract link |
| P6-005 | Mint preview UI |  | Not Started | UI screen |
| P6-006 | Optional mint flow |  | Not Started | Testnet demo |
| P6-007 | Transfer sync design |  | Not Started | Design/API |
| P6-008 | Cosmetic NFT pilot |  | Not Started | Pilot assets |
| P6-009 | Marketplace readiness doc |  | Not Started | Doc |
| P6-010 | NFT fairness audit |  | Not Started | Audit report |

---


## Mục tiêu

Mở rộng game sau launch bằng Realm mới, LiveOps, social/PvP optional và long-term progression.

## Hoàn thành khi

- New Realm content pipeline ổn định.
- LiveOps cadence bền vững.
- Social/PvP không làm hại core loop.
- Người chơi có long-term goals ngoài MVP collection.

## Task

| ID | Task | Output / Link | Status | Notes |
|---|---|---|---|---|
| P7-001 | Clocktower of Time expansion |  | Not Started | Realm pack |
| P7-002 | Nightmare Citadel expansion |  | Not Started | Realm pack |
| P7-003 | Deep Dream story arc |  | Not Started | Story doc |
| P7-004 | Dream Echo replay system |  | Not Started | Feature build |
| P7-005 | Social Dreamland |  | Not Started | Visit flow |
| P7-006 | Async PvP prototype |  | Not Started | Prototype |
| P7-007 | Seasonal event system |  | Not Started | Event tools |
| P7-008 | Advanced Building upgrades |  | Not Started | Feature |
| P7-009 | Beast evolution/bond system |  | Not Started | Design/prototype |
| P7-010 | Full CMS/Admin expansion |  | Not Started | Admin tool |

---


| Deliverable | Phase | Output / Link | Status |
|---|---|---|---|
| Product Vision | Phase 0 |  | Done |
| MVP Scope | Phase 0 |  | In Progress |
| Roadmap nội bộ | Phase 0 |  | In Progress |
| GDD | Phase 0 |  | Done/Existing |
| Technical Architecture | Phase 0 |  | Done/Existing |
| Database ERD | Phase 0/2 |  | Not Started |
| UI/UX Flow | Phase 0/2 |  | Not Started |
| Playable Prototype Build | Phase 1 |  | Not Started |
| MVP Staging Build | Phase 2/3 |  | Not Started |
| Internal Alpha Report | Phase 3 |  | Not Started |
| Soft Launch Report | Phase 4 |  | Not Started |
| Launch Candidate Build | Phase 5 |  | Not Started |
| NFT Testnet Demo | Phase 6 |  | Not Started |
| First Expansion Pack | Phase 7 |  | Not Started |\n