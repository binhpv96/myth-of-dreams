---
title: "MVP Scope"
description: "Myth of Dreams - MVP Scope"
date: "2026-06-03"
category: "overview"
order: 3
tags: ["overview","mvp"]
---

**Version:** 1.0  
**Document Type:** MVP Scope / Product Planning Document  
**Project:** Myth of Dreams  
**Related Docs:** product_vision.md, GDD.md, technical_architecture.md, daily_dream_template.md, exploration_system.md, combat_system.md, beast_system.md, relic_system.md, building_dreamland_system.md, economy_reward_system.md, NFT_metadata.md  
**Owner:** Founder / Product / Game Design / Engineering  
**Status:** MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này xác định rõ phạm vi **Minimum Viable Product — MVP** cho **Myth of Dreams**.

Mục tiêu của MVP không phải là làm đầy đủ tất cả hệ thống trong tầm nhìn dài hạn.  
Mục tiêu của MVP là chứng minh rằng core loop của game đủ hấp dẫn:

```text
Dreamland → Daily Dream → Exploration → Combat → Ending → Reward → Craft/Equip/Place → Dreamland Progression
```

MVP phải trả lời được các câu hỏi sản phẩm quan trọng:

- Người chơi có muốn quay lại mỗi ngày để đi Daily Dream không?
- Daily Dream có tạo cảm giác “mỗi ngày là một câu chuyện nhỏ” không?
- Beast có tạo được cảm giác companion/collection không?
- Lựa chọn Purify/Corrupt/Hidden có đủ ý nghĩa không?
- Reward có cảm giác đến từ Dream vừa hoàn thành không?
- Dreamland có đủ động lực để người chơi quay lại không?
- Economy fragment/crafting có dễ hiểu và có mục tiêu rõ không?
- Hệ thống metadata/NFT-ready có thể tồn tại mà không cần blockchain trong MVP không?

---

## 1. MVP Vision

### 1.1. MVP statement

MVP của Myth of Dreams là một bản game playable nhỏ nhưng hoàn chỉnh, nơi người chơi có thể:

> Thức dậy trong Dreamland, bước vào một Daily Dream, khám phá các node, đưa ra lựa chọn, chiến đấu cùng Beast, nhận ending, mang reward trở về và dùng reward đó để phát triển Beast/Dreamland.

### 1.2. MVP product promise

Trong MVP, người chơi phải cảm thấy:

```text
Mình đã đi qua một giấc mơ, lựa chọn của mình có ảnh hưởng, và phần thưởng mình nhận được có nguồn gốc từ giấc mơ đó.
```

### 1.3. MVP design rule

Mọi feature trong MVP phải phục vụ ít nhất một trong các mục tiêu:

- Làm rõ Daily Dream loop.
- Tạo attachment với Beast.
- Tạo consequence từ choice.
- Tạo reward/progression.
- Làm Dreamland có ý nghĩa.
- Bảo vệ economy/server authority.
- Chuẩn bị metadata/provenance cho item.

Nếu không phục vụ các mục tiêu trên, đưa vào post-MVP.

---

## 2. MVP Success Criteria

### 2.1. Product success criteria

MVP được xem là đạt nếu:

- Người chơi hoàn thành tutorial và hiểu core loop.
- Người chơi có thể hoàn thành ít nhất 1 Daily Dream/ngày.
- Người chơi nhận reward, hiểu reward dùng để làm gì.
- Người chơi có thể craft hoặc progress toward crafting.
- Người chơi có thể dùng Beast trong combat.
- Người chơi có thể đặt ít nhất 1 Building trong Dreamland.
- Người chơi thấy Dream History/origin metadata của reward.
- Người chơi có thể trải nghiệm ít nhất 1 Hidden Ending.
- Người chơi hiểu Corrupt route là risk/reward.
- Team có thể thêm Daily Dream mới bằng template/config mà không hardcode quá nhiều.

### 2.2. Technical success criteria

MVP được xem là đạt về mặt kỹ thuật nếu:

- Backend lưu được user, run state, inventory, reward, item ownership.
- Reward/crafting/inventory được server-authoritative.
- Daily Dream có thể start, resume, complete.
- Combat result có validation tối thiểu.
- Economy transaction có log.
- Metadata origin được attach vào Beast/Relic/Building.
- Analytics event cơ bản hoạt động.
- Không có bug duplicate reward/craft nghiêm trọng.
- Build Unity ổn định trên target device MVP.

### 2.3. Narrative/content success criteria

MVP được xem là đạt về content nếu:

- 3 Realm đầu có identity rõ.
- Daily Dream có emotional hook.
- NPC/choice/ending không bị generic.
- Hidden route có clue hợp lý.
- Boss gắn với emotional conflict.
- Reward item có lore/metadata.
- Player có thể nhớ ít nhất 1 Dream theo câu chuyện, không chỉ theo reward.

---

## 3. MVP Core Loop

### 3.1. Full loop

```text
Open Game
  ↓
Dreamland Hub
  ↓
Select Daily Dream
  ↓
Choose Beast / Relic
  ↓
Explore Dream Nodes
  ↓
Make Choices / Solve Puzzle / Talk to NPC
  ↓
Enter Combat
  ↓
Fight Boss
  ↓
Resolve Ending
  ↓
Claim Reward
  ↓
Craft / Equip / Place
  ↓
Return to Dreamland
```

### 3.2. MVP loop requirement

MVP cần có ít nhất một complete loop từ đầu đến cuối:

```text
Login → Dreamland → Daily Dream → Combat → Ending → Reward → Craft/Place → Dreamland updated
```

### 3.3. Loop quality bar

Loop không cần có nhiều content, nhưng phải:

- Không bị đứt.
- Có tutorial đủ rõ.
- Có reward thật.
- Có consequence thật.
- Có cảm giác tiến triển.
- Có state lưu lại sau khi thoát app.

---

## 4. MVP Feature Scope Summary

| System | MVP Scope | Priority |
|---|---|---|
| Account/Auth | Guest login, basic profile | P0 |
| Dreamland | Main hub, basic layout, 1–3 Buildings | P0 |
| Daily Dream | Active dream, start/resume/complete | P0 |
| Exploration | Node map, choices, NPC, puzzle, hidden | P0 |
| Combat | Turn-based Beast vs enemy/boss | P0 |
| Beast | Starter + craft/own/equip/use | P0 |
| Enemy/Boss | 20–30 enemies, 3–5 bosses | P0/P1 |
| Relic | Basic inventory/equip/effect | P0/P1 |
| Building | Craft/place/basic bonus | P0/P1 |
| Economy | Fragment inventory, reward, crafting | P0 |
| Metadata | Origin metadata, NFT-ready preview | P1 |
| Analytics | Core event tracking | P0 |
| Admin/Content | Basic JSON/config workflow | P1 |
| NFT mint | Not in MVP | P3 |
| Marketplace | Not in MVP | P3 |
| PvP | Not in MVP | P3 |
| Social Dreamland | Not in MVP | P3 |

---

## 5. MVP Content Scope

### 5.1. Realms

MVP Realms:

1. **Forest of Lost Voices**
2. **Ocean of Memories**
3. **Childhood Playground**

Post-MVP Realms:

- Clocktower of Time.
- Nightmare Citadel.
- Deep Dream.

### 5.2. Daily Dreams

MVP target:

| Content Type | Count |
|---|---:|
| Tutorial Dream | 1 |
| Common Daily Dream | 4–5 |
| Rare Daily Dream | 4–5 |
| Epic Daily Dream | 2–3 |
| Legendary prototype | 1 optional |
| Hidden Ending examples | 3 |
| Corrupt route examples | 3 |

Total recommended MVP Daily Dream templates:

```text
10–15 Daily Dreams
```

### 5.3. Beast

MVP Beast target:

| Type | Count |
|---|---:|
| Starter Beast | 1 |
| Common Beast | 4–6 |
| Rare Beast | 5–7 |
| Epic Beast | 2–4 |
| Special/Hidden Beast | 1–2 |

Total:

```text
12–20 Beast
```

### 5.4. Enemy and Boss

MVP enemy target:

| Type | Count |
|---|---:|
| Normal Enemy | 15–20 |
| Elite Enemy | 5–8 |
| Boss | 3–5 |
| Nightmare Variant | 3–5 variants |

### 5.5. Relic

MVP Relic target:

| Type | Count |
|---|---:|
| Common/Rare Relic | 6–8 |
| Epic Relic | 3–5 |
| Key/Hidden Relic | 2–3 |
| Nightmare Relic | 1–2 |

Total:

```text
10–15 Relics
```

### 5.6. Building

MVP Building target:

| Building | MVP? |
|---|---|
| Dreamwell | Yes |
| Memory Library | Yes |
| Light Tower | Yes |
| Ocean Core | Yes |
| Echo Garden | Yes |
| Archive Pavilion | Yes |
| Relic Pedestal | Basic/placeholder |
| Nightmare Gate | Optional if Corruption ready |
| Sky Perch | Optional |
| Clock Shrine | Post-MVP |

Total:

```text
8–10 Buildings
```

### 5.7. NPC

MVP NPC target:

Core:

- Mira.
- Nox.
- Luma.

Realm/Dream NPC:

- Shell Child.
- Echo Child.
- Apology Tree.
- Lost Voice.
- Toy Judge.
- Drowned Singer.
- Silent Stag, optional.
- Abyss Lantern Keeper as boss NPC.
- Hollow Child as boss NPC.
- Hollow Treant as boss NPC.

Total:

```text
8–12 NPC/Boss dialogue entities
```

---

## 6. System-by-System MVP Scope

## 6.1. Account & Profile

### Included

- Guest login.
- Basic user profile.
- Player display name.
- Session token.
- Local device binding.
- Optional account bind placeholder.

### Not included

- Full social login matrix.
- Wallet login.
- Account marketplace identity.
- Public profile page.

### Output

- Player can enter game with guest account.
- Player data persists.

---

## 6.2. Dreamland Hub

### Included

- Dreamland main screen.
- Daily Dream entry.
- Building placement basic.
- Beast roaming basic.
- Dream History/Archive entry.
- Inventory/Crafting entry.
- Basic Dreamland name.
- 1 base zone.

### Not included

- Social visit.
- Large expansion.
- Advanced decoration.
- Building upgrade depth.
- Realtime multiplayer hub.

### Output

- Player returns to a visible home after each Dream.
- At least one Building can be placed.
- At least one Beast appears in Dreamland.

---

## 6.3. Daily Dream System

### Included

- Active Daily Dream.
- Dream Seed.
- Dream start.
- Dream resume.
- Dream complete.
- Ending result.
- Dream History record.
- Reward table by ending.

### Not included

- Fully procedural dream generation.
- Multiple Daily Dreams per day.
- Dream Echo replay.
- Community dream creation.

### Output

- Player can play one Daily Dream loop end-to-end.

---

## 6.4. Exploration System

### Included

- Node-based map.
- Node visibility state.
- Start/Story/Choice/Combat/Puzzle/NPC/Boss/Ending nodes.
- Hidden node.
- Choice flags.
- Corruption/Purity/HiddenKnowledge delta.
- Basic puzzle.
- NPC clue.

### Not included

- Open-world movement.
- Complex multi-layer maps.
- Heavy puzzle chains.
- Multiplayer exploration.

### Output

- Daily Dream feels like a short journey with at least one meaningful choice.

---

## 6.5. Combat System

### Included

- Turn-based combat.
- One active Beast.
- Enemy team up to 3.
- Basic attack.
- Skills.
- Status effects.
- Boss phase.
- Battle result validation.
- Combat rewards staged.

### Not included

- PvP.
- Realtime action.
- Complex positioning.
- Multi-Beast party swap.
- Full deterministic server replay, unless time allows.

### Output

- Player can fight enemies and boss using Beast.

---

## 6.6. Beast System

### Included

- Beast templates.
- Owned Beast.
- Starter Beast.
- Beast stats.
- Level/EXP.
- Skill list.
- Rarity.
- Species.
- Affinity.
- Beast profile.
- Beast origin metadata.
- Beast used in combat.
- Beast visible in Dreamland.

### Not included

- Breeding.
- Evolution tree.
- Advanced bond system.
- Multiple equipment slots.
- PvP balancing.

### Output

- Player has at least one Beast they can use, grow and remember by origin.

---

## 6.7. Relic System

### Included

- Relic inventory.
- Relic equip on Beast.
- Basic stat/effect modifiers.
- Relic rarity/type.
- Relic origin metadata.
- At least 1 Relic that helps hidden route.

### Not included

- Deep Relic upgrade.
- Relic fusion.
- Marketplace transfer.
- Complex set bonus.

### Output

- Player can equip Relic and see gameplay/story effect.

---

## 6.8. Building & Dreamland System

### Included

- Building inventory.
- Craft Building.
- Place/store Building.
- Basic placement validation.
- Building bonus.
- Building origin metadata.
- Dreamland visual update.

### Not included

- Deep city-builder.
- Building production timers.
- Social Dreamland.
- Advanced layout sharing.

### Output

- Player can convert Dream reward into visible Dreamland progress.

---

## 6.9. Economy & Reward System

### Included

- Fragment inventory.
- Dream completion reward.
- Ending-based reward.
- Combat minor reward.
- Crafting Beast/Relic/Building.
- Economy transactions.
- Drop tables.
- Reward caps.
- Basic LUCK/drop modifier if implemented.

### Not included

- Token economy.
- Marketplace.
- Fragment trading.
- Paid gacha.
- Complex event shop.

### Output

- Player receives, spends and understands fragments.

---

## 6.10. Metadata & NFT Readiness

### Included

- Origin metadata for Beast/Relic/Building.
- Metadata preview UI/basic profile.
- Mint status field.
- Mint eligibility placeholder.
- NFT card concept/preview, optional.

### Not included

- Real mint.
- Wallet linking.
- Marketplace.
- Blockchain indexer.
- Smart contract deployment.

### Output

- Items are “NFT-ready” from a data perspective without requiring blockchain.

---

## 6.11. Analytics

### Included

Track:

- Tutorial start/complete.
- Dream start/complete.
- Node choice.
- Combat start/result.
- Reward claim.
- Craft.
- Building placed.
- Beast viewed.
- Hidden node revealed.
- Ending type.

### Not included

- Full BI dashboard.
- Advanced cohort analysis.
- Marketplace analytics.

### Output

- Team can evaluate MVP loop and economy health.

---

## 6.12. Admin / Content Pipeline

### Included

- JSON/config based content.
- Basic validation scripts.
- Ability to define Dream templates.
- Drop table config.
- Crafting recipe config.
- Enemy/Beast/Relic/Building template config.

### Not included

- Full CMS.
- Live editing production content without deploy.
- Role-based admin UI, unless time allows.

### Output

- Team can add/update MVP content without changing core code too much.

---

## 7. MVP Out of Scope

Các feature sau **không thuộc MVP**:

## 7.1. Blockchain/NFT

- Real NFT mint.
- Wallet linking.
- Marketplace.
- Smart contract.
- On-chain fragment.
- NFT transfer.
- Marketplace listing.

## 7.2. PvP/Social

- PvP combat.
- Ranking.
- Guild.
- Friend list.
- Dreamland visiting.
- Social gifting.

## 7.3. Advanced Gameplay

- Beast breeding.
- Beast evolution.
- Multi-Beast party system.
- Advanced Relic fusion.
- Advanced Building upgrades.
- Procedural dream generator.
- Large open-world maps.

## 7.4. Monetization

- Paid gacha.
- Premium currency.
- Battle pass.
- NFT mint fee.
- Marketplace fee.
- Energy refill monetization.

## 7.5. LiveOps

- Seasonal event system.
- Rotating shop.
- Community puzzle.
- Limited-time raid/boss.
- Push notification campaign.

---

## 8. MVP Priorities

### 8.1. P0 — Must Have

- Guest login.
- Dreamland scene.
- Daily Dream start/complete.
- Exploration map.
- Choice system.
- Combat system.
- Starter Beast.
- Enemy/Boss.
- Reward claim.
- Inventory materials.
- Crafting basic.
- Dream History.
- Server-authoritative economy.

### 8.2. P1 — Should Have

- Hidden Ending.
- Corrupt route.
- Relic equip.
- Building placement.
- Beast roaming.
- Metadata origin preview.
- Basic analytics.
- Content validation.

### 8.3. P2 — Nice to Have

- Dreamland mood visual.
- Relic pedestal.
- More puzzle types.
- NFT card preview.
- Admin dashboard.
- Expanded audio.
- Additional optional Dream templates.

### 8.4. P3 — Later

- NFT mint.
- Marketplace.
- PvP.
- Social Dreamland.
- Event shop.
- Advanced Dream Echo.
- Full CMS.

---

## 9. MVP User Journey

### 9.1. First-time user journey

```text
Install/Open
  ↓
Guest Login
  ↓
Wake in Dreamland
  ↓
Meet Mira and Luma
  ↓
Enter Tutorial Dream
  ↓
Make first choice
  ↓
Win first combat
  ↓
Reach Purify Ending
  ↓
Claim first reward
  ↓
Place Dreamwell or unlock first Relic
  ↓
Return to Dreamland
```

### 9.2. Returning daily user journey

```text
Open Game
  ↓
View Dreamland changes
  ↓
Check Daily Dream
  ↓
Select Beast/Relic
  ↓
Explore Dream
  ↓
Fight Boss
  ↓
Reach Ending
  ↓
Claim Reward
  ↓
Craft/Progress
  ↓
Exit or inspect collection
```

### 9.3. Hidden discovery journey

```text
Notice NPC clue
  ↓
Choose non-obvious action
  ↓
Relic/Beast reacts
  ↓
Hidden node appears
  ↓
Complete hidden node
  ↓
Trigger boss hidden hook
  ↓
Hidden Ending
  ↓
Rare reward + metadata
```

---

## 10. MVP Metrics

### 10.1. Core metrics

| Metric | Target Direction |
|---|---|
| Tutorial completion | High |
| First Dream completion | High |
| Daily Dream completion rate | High |
| Reward claim rate | Near 100% after completion |
| Crafting action by Day 3 | Medium/High |
| Dreamland revisit rate | Medium/High |
| D1 retention | Healthy |
| D7 retention | Early signal |
| Crash-free sessions | Very high |

### 10.2. Suggested early targets

| Metric | Suggested Target |
|---|---:|
| Tutorial completion | 70%+ |
| First Daily Dream completion | 60%+ |
| D1 retention | 35%+ |
| D7 retention | 12–18%+ |
| First craft by Day 3 | 40%+ |
| Dreamland revisit after reward | 50%+ |
| Hidden Ending discovery | 5–15% |
| Crash-free sessions | 98%+ |

### 10.3. Product learning goals

MVP should answer:

- Which Realm players like most?
- Which choices are selected most?
- Do players understand crafting?
- Do players care about origin metadata?
- Does Dreamland motivate return?
- Is combat too easy/hard?
- Are Hidden Endings discoverable?
- Is Corrupt route attractive or avoided?

---

## 11. MVP Release Criteria

### 11.1. Feature complete criteria

MVP is feature-complete when:

- Full first-time journey works.
- At least 10 Daily Dreams exist.
- At least 3 Realms exist.
- Combat and reward loop works.
- Crafting loop works.
- Dreamland placement works.
- Backend validates reward/crafting.
- Analytics events implemented.
- Basic QA pass completed.

### 11.2. Content complete criteria

Content is MVP-ready when:

- Tutorial Dream polished.
- 3 Realm identities clear.
- 3 Hidden Ending examples implemented.
- 3 Corrupt route examples implemented.
- 3–5 bosses implemented.
- Beast/Relic/Building minimum count reached.
- Reward tables balanced enough for test.

### 11.3. Technical complete criteria

Technical MVP-ready when:

- No critical save/load bugs.
- No known reward duplication exploit.
- No known craft duplication exploit.
- Run resume works.
- Inventory persists.
- Reward transaction log exists.
- Basic monitoring/error logging exists.
- Build install/update flow works.

### 11.4. Soft launch ready criteria

Soft launch can begin when:

- MVP feature complete.
- D1 retention in internal/external test acceptable.
- Crash-free sessions 98%+.
- Economy does not inflate severely.
- Tutorial comprehension acceptable.
- Core loop feedback positive.

---

## 12. MVP Risk Register

| Risk | Impact | Mitigation |
|---|---|---|
| Too much scope | Delays MVP | Cut P2/P3 aggressively |
| Content production slow | Not enough Daily Dreams | Use templates/reusable Realm motifs |
| Combat shallow | Collection loses meaning | Add roles, boss phase, Relic synergy |
| Economy confusing | Players churn | Keep fragment types limited |
| Dreamland weak | No return motivation | Add visible placement and Beast roaming |
| Hidden too obscure | Players miss depth | Add fair clues and reactions |
| Corrupt too punishing | Players avoid route | Give unique reward |
| NFT perception bad | Trust issue | Keep NFT optional and hidden from core MVP |
| Backend exploit | Economy damage | Server authority + transaction logs |
| Art overload | Production bottleneck | Reuse backgrounds/icons, polish key assets |

---

## 13. MVP Cut Rules

If timeline is at risk, cut in this order:

1. NFT card preview.
2. Dreamland mood visuals.
3. Extra optional Daily Dreams.
4. Extra Relic types.
5. Extra Building types.
6. Advanced puzzle types.
7. Additional Beast variants.
8. Nightmare Gate.
9. Legendary prototype Dream.
10. Admin dashboard UI.

Do **not** cut:

- Daily Dream loop.
- Combat.
- Reward.
- Crafting.
- Dreamland hub.
- Starter Beast.
- At least one meaningful choice.
- Server-authoritative inventory/reward.

---

## 14. Final MVP Scope Statement

MVP của Myth of Dreams không cần chứng minh mọi tham vọng dài hạn.

MVP chỉ cần chứng minh một điều:

> Người chơi muốn quay lại Dreamland mỗi ngày vì họ tò mò giấc mơ tiếp theo là gì, và họ muốn xem những gì mình mang về từ giấc mơ đó sẽ trở thành gì.

Nếu MVP làm được điều đó, mọi hệ thống lớn hơn như NFT, marketplace, PvP, social Dreamland, Deep Dream và LiveOps đều có nền tảng để phát triển tiếp.\n