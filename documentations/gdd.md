---
title: "Game Design Document (GDD)"
description: "Myth of Dreams - Game Design Document (GDD)"
date: "2026-06-03"
category: "overview"
order: 2
tags: ["overview","gdd"]
---

**Version:** 1.0  
**Document Type:** Game Design Document  
**Project:** Myth of Dreams  
**Genre:** 2D Isometric RPG • Light Exploration • Turn-based Battle • Creature Collection • NFT-enabled  
**Target Platforms:** PC, Android, iOS  
**Engine:** Unity  
**Backend:** Spring Boot  
**Web:** Next.js  
**Blockchain Layer:** Optional after MVP  

---

## 0. Mục đích tài liệu

Tài liệu này mô tả thiết kế gameplay tổng thể của **Myth of Dreams** ở cấp độ đủ chi tiết để team sản xuất có thể dùng làm căn cứ triển khai prototype, MVP và các phase tiếp theo.

GDD này tập trung vào:

- Core gameplay loop.
- Daily Dream System.
- Exploration.
- Turn-based Combat.
- Beast System.
- Building, Relic, Fragment và Crafting.
- Dreamland hub.
- Reward, economy và NFT-readiness.
- UI/UX flow.
- Technical gameplay requirements.
- MVP scope và production priorities.

Các tài liệu chuyên sâu khác như **Lore & Story Bible**, **Combat System Design**, **Beast System Design**, **Technical Architecture**, **NFT Metadata Design** sẽ tách riêng để tránh GDD bị quá tải.

---

## 1. Tổng quan dự án

### 1.1. Tên game

**Myth of Dreams**

### 1.2. Thể loại

- 2D Isometric RPG.
- Light Exploration.
- Turn-based Combat.
- Creature Collection.
- Daily Adventure.
- NFT-enabled sau MVP.

### 1.3. Nền tảng

Mục tiêu dài hạn:

- PC: Windows, macOS.
- Mobile: Android, iOS.

Ưu tiên MVP:

- PC build nội bộ để test nhanh.
- Android build cho kiểm thử mobile loop.
- iOS sau khi gameplay ổn định.

### 1.4. Engine và công nghệ

- **Client:** Unity 2D Isometric.
- **Backend:** Spring Boot REST API.
- **Web:** Next.js cho landing page, profile, gallery, marketplace sau MVP.
- **Database:** PostgreSQL.
- **Blockchain:** ERC-721 cho Beast/Building/Relic; ERC-1155 cho fragment nếu cần ở phase sau.

### 1.5. High concept

**Myth of Dreams** là một game nhập vai phiêu lưu, nơi mỗi ngày người chơi bước vào một giấc mơ duy nhất được tạo từ ký ức, cảm xúc và ước mơ của nhân loại. Trong giấc mơ đó, người chơi khám phá bản đồ isometric nhỏ, gặp NPC, chiến đấu với quái vật theo lượt, đưa ra lựa chọn và nhận phần thưởng dựa trên ending đã đạt được.

Phần thưởng chính là **Dream Fragments**, dùng để tạo ra:

- Beast.
- Building.
- Relic.
- Cosmetic hoặc lore item.

Mỗi item quan trọng đều có thể lưu lại dấu vết nguồn gốc: ngày sinh ra, Dream Seed, Realm, Ending và lựa chọn của người chơi.

---

## 2. Product Vision

### 2.1. Vision Statement

**Myth of Dreams** mang đến trải nghiệm “mỗi ngày một giấc mơ” — ngắn gọn, giàu cảm xúc, có tính sưu tầm và có giá trị cá nhân hóa. Người chơi không chỉ farm tài nguyên, mà đang bước vào những mảnh ký ức độc nhất và biến chúng thành sinh vật, công trình, di vật sống trong Dreamland riêng của họ.

### 2.2. Core fantasy

Người chơi là một **Dreamwalker**, có khả năng đi vào Dreamverse — thế giới được tạo từ ký ức, cảm xúc, nỗi sợ và ước mơ của con người.

Mỗi ngày, một giấc mơ xuất hiện. Nếu người chơi không bước vào, giấc mơ ấy sẽ biến mất mãi mãi.

### 2.3. Unique Selling Points

1. **One Dream Per Day**  
   Mỗi ngày có một Daily Dream riêng, tạo cảm giác sự kiện sống động và không lặp lại hoàn toàn.

2. **Choice-based Ending**  
   Lựa chọn trong dream dẫn đến Purify, Corrupt hoặc Hidden Ending.

3. **Beast with Origin Story**  
   Beast không chỉ là pet chiến đấu, mà có nguồn gốc từ dream cụ thể mà người chơi đã trải qua.

4. **Dreamland Personalization**  
   Beast có thể đi lại, tương tác và sống trong vùng đất riêng của người chơi.

5. **NFT-ready, not NFT-first**  
   Gameplay vẫn phải vui ngay cả khi chưa bật blockchain. NFT là lớp sở hữu và metadata sau này.

---

## 3. Target Audience

### 3.1. Primary audience

- Người chơi mobile/PC thích game ngắn mỗi ngày.
- Người thích sưu tầm sinh vật/pet.
- Người thích turn-based battle dễ hiểu nhưng có chiều sâu.
- Người thích thế giới fantasy, surreal, dream-like.
- Người quan tâm NFT ownership nhưng vẫn ưu tiên gameplay.

### 3.2. Secondary audience

- Người chơi casual thích decor, collection.
- Người chơi mid-core thích build Beast, PvP, rarity.
- Người thích game có lore nhẹ nhưng cảm xúc.

### 3.3. Player motivation

| Nhóm động lực | Biểu hiện trong game |
|---|---|
| Collection | Sưu tầm Beast, Relic, Building |
| Progression | Nâng Beast, mở Realm, tăng Dreamland |
| Discovery | Tìm Hidden Ending, lore, secret node |
| Expression | Trang trí Dreamland, chọn Beast trưng bày |
| Competition | PvP Beast Duel, leaderboard sau MVP |
| Ownership | NFT metadata, trading sau MVP |

---

## 4. Design Pillars

### 4.1. Daily Wonder

Mỗi ngày người chơi phải có cảm giác: “Hôm nay dream là gì?”

Daily Dream cần có:

- Chủ đề khác nhau.
- Rarity khác nhau.
- Reward khác nhau.
- Ít nhất một biến thể gameplay hoặc narrative nhỏ.

### 4.2. Meaningful Choice

Lựa chọn không chỉ đổi text. Lựa chọn cần ảnh hưởng đến:

- Ending.
- Reward type.
- Corruption meter.
- NPC reaction.
- Hidden path.
- Metadata của item.

### 4.3. Lightweight but Deep

Session chính nên ngắn, nhưng hệ thống phía sau đủ sâu:

- Beast stats.
- Affinity.
- Skill cooldown.
- Relic build.
- Building bonus.
- Dreamland customization.

### 4.4. Emotional Collection

Mỗi Beast nên gợi cảm xúc và có nguồn gốc.

Ví dụ:  
Một Beast sinh ra từ Ocean of Memories với Hidden Ending không chỉ là “Abyss Serpent Epic”, mà là sinh vật được tạo ra khi người chơi cứu ngọn đèn dưới đáy hồ.

### 4.5. Fair NFT Integration

NFT không được phá game balance.

Nguyên tắc:

- Người không dùng NFT vẫn chơi được.
- NFT không phải pay-to-win trực tiếp.
- NFT ưu tiên ownership, rarity, cosmetic, provenance.
- Các item mạnh phải có giới hạn balance trong gameplay.

---

## 5. Core Gameplay Loop

### 5.1. Daily gameplay loop

```text
Login
  ↓
View Dream of the Day
  ↓
Select Beast / Prepare Relic
  ↓
Enter Daily Dream
  ↓
Explore isometric map
  ↓
Interact with nodes: enemy, NPC, item, puzzle, choice
  ↓
Turn-based combat
  ↓
Reach ending
  ↓
Receive fragments/rewards
  ↓
Craft / upgrade / decorate Dreamland
  ↓
Return next day
```

### 5.2. Session loop inside Dream

```text
Spawn at Dream Entrance
  ↓
Move through 5–10 areas
  ↓
Make choices / fight enemies / collect fragments
  ↓
Unlock route or hidden condition
  ↓
Defeat boss or resolve dream event
  ↓
Choose or trigger ending
  ↓
Reward summary
```

### 5.3. Meta progression loop

```text
Complete Daily Dreams
  ↓
Earn fragments
  ↓
Craft Beast / Building / Relic
  ↓
Improve team and Dreamland
  ↓
Unlock harder dreams and hidden paths
  ↓
Earn rarer fragments and unique metadata
```

---

## 6. Game Modes

### 6.1. Daily Dream

Main mode của game.

Đặc điểm:

- Một dream chính mỗi ngày.
- Dream Seed được tạo bởi backend.
- Mỗi người chơi có một lượt clear chính.
- Reward chính chỉ nhận được một lần.
- Có nhiều ending.

### 6.2. Dreamland

Hub cá nhân của người chơi.

Chức năng:

- Trưng bày Beast.
- Đặt Building.
- Lắp Relic Pedestal.
- Xem Dream History.
- Nhận passive bonus từ Building.
- Chuẩn bị trước khi vào Dream.

### 6.3. Inventory & Crafting

Nơi quản lý:

- Beast.
- Fragment.
- Building.
- Relic.
- Crafting.
- Upgrade.
- NFT mint status sau MVP.

### 6.4. Beast Duel PvP

Không thuộc MVP core. Đề xuất đưa vào phase sau.

Phiên bản đầu:

- 1v1 auto battle.
- Player chọn Beast.
- Thiết lập skill priority.
- Matchmaking theo Beast Rating.
- Reward cosmetic/seasonal, hạn chế power creep.

### 6.5. Event Dream

Phase sau MVP.

- Dream đặc biệt theo season.
- Rarity cao hơn.
- Limited cosmetic.
- Lore chapter riêng.
- Có thể dùng cho live ops.

---

## 7. Daily Dream System

### 7.1. Khái niệm

Daily Dream là nội dung chính mỗi ngày. Mỗi Daily Dream được tạo từ **Dream Seed**.

Dream Seed quyết định:

- Realm.
- Rarity.
- Map layout.
- Node distribution.
- Enemy pool.
- Boss.
- NPC.
- Puzzle.
- Ending conditions.
- Loot table.
- Hidden path.
- Metadata.

### 7.2. Dream Seed data structure

```json
{
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "date": "2026-05-24",
  "rarity": "Epic",
  "realmId": "ocean_of_memories",
  "mapTemplateId": "ocean_epic_03",
  "enemyPoolId": "ocean_memory_pool_b",
  "bossId": "abyss_lantern_keeper",
  "npcId": "echo_child_lantern",
  "choiceTableId": "lantern_under_lake_choices",
  "lootTableId": "epic_memory_loot_01",
  "hiddenConditionId": "listen_to_song_with_memory_beast",
  "metadataTags": ["memory", "ocean", "lantern", "hidden_path"]
}
```

### 7.3. Rarity

| Rarity | Tỷ lệ đề xuất | Map | Gameplay | Reward |
|---|---:|---|---|---|
| Common | 60% | Nhỏ | 1 route, ít choice | Normal Fragment |
| Rare | 25% | Vừa | Có NPC hoặc puzzle | Rare Fragment |
| Epic | 10% | Vừa/lớn | 2–3 ending rõ | Epic Fragment, Relic chance |
| Legendary | 4% | Lớn | Boss đặc biệt | Legendary Beast Fragment |
| Mythic | 1% | Unique | Story đặc biệt, hidden lore | Unique NFT/Dreamborn item |

### 7.4. Daily entry rule

MVP rule:

- Mỗi người chơi có 1 lượt hoàn thành chính mỗi ngày.
- Nếu disconnect, cho phép resume nếu run chưa kết thúc.
- Nếu thua combat, run kết thúc.
- Nếu quit thủ công, run được lưu ở trạng thái failed hoặc abandoned.
- Không nhận reward chính nếu failed/abandoned.

Đề xuất chống quá phạt casual:

- Có thể nhận consolation reward rất nhỏ khi failed.
- Sau MVP có thể thêm **Dream Echo Replay**: chơi lại bản cũ nhưng reward thấp, không có rare drop.

### 7.5. Ending types

#### Purify Ending

Người chơi chữa lành hoặc giải phóng dream.

Reward:

- Stable Fragment.
- Dream Archivist reputation.
- Ít rủi ro.
- Phù hợp progression ổn định.

#### Corrupt Ending

Người chơi khai thác Nightmare energy.

Reward:

- Nightmare Shard.
- Fragment có power cao hơn.
- Có thể tăng Corruption Meter.
- Có risk hoặc debuff nhẹ.

#### Hidden Ending

Người chơi hiểu được bản chất thật của dream.

Reward:

- Rare Beast Fragment.
- Unique Relic.
- Lore entry.
- Metadata đặc biệt.

Yêu cầu:

- Chọn đúng path.
- Có Beast đúng Affinity.
- Có Relic mở khóa.
- Đã từng hoàn thành một dream liên quan.
- Tìm puzzle/secret node.

---

## 8. Exploration System

### 8.1. Camera và perspective

- 2D isometric.
- Camera cố định hoặc follow player nhẹ.
- Không xoay camera trong MVP.
- Tầm nhìn khoảng 10–12 tile.
- Environment có parallax/lighting nhẹ nếu phù hợp.

### 8.2. Movement

PC:

- WASD hoặc Arrow keys.
- E để tương tác.
- Mouse/touch UI.

Mobile:

- Virtual joystick hoặc tap-to-move.
- Tap object để tương tác.
- Skill và UI tối ưu touch.

MVP recommendation:

- Dùng gridless movement trên isometric map để cảm giác mượt.
- Node interaction dùng trigger collider.

### 8.3. Map size

| Rarity | Khu vực | Node | Thời lượng |
|---|---:|---:|---:|
| Common | 5–6 | 8–12 | 5–7 phút |
| Rare | 6–8 | 12–16 | 7–10 phút |
| Epic | 8–10 | 16–22 | 10–15 phút |
| Legendary | 10–12 | 22–30 | 15–20 phút |
| Mythic | Custom | Custom | 15–25 phút |

### 8.4. Node types

| Node Type | Mục đích | Ví dụ |
|---|---|---|
| Enemy Node | Combat | Whisper Moth, Hollow Treant |
| NPC Node | Dialogue/choice | Echo Child, Dream Archivist |
| Item Node | Reward nhỏ | Memory Fragment |
| Puzzle Node | Unlock route | Xếp ký ức, bật đèn |
| Choice Node | Ending branch | Purify/Corrupt decision |
| Shrine Node | Buff/debuff | Lucid Shrine, Nightmare Shrine |
| Hidden Node | Secret | Chỉ hiện nếu đủ điều kiện |
| Portal Node | Kết thúc dream | Ending portal |

### 8.5. Interaction design

Mỗi interactable cần có:

- Visual highlight.
- Prompt rõ ràng.
- Interaction range.
- Sound feedback.
- Optional short text.

Ví dụ:

```text
[ E ] Listen to the Lantern
```

### 8.6. Puzzle philosophy

Puzzle trong MVP nên nhẹ, không cản flow.

Loại puzzle phù hợp:

- Chọn đúng thứ tự ký ức.
- Bật/tắt đèn.
- Tìm object thiếu.
- Chọn câu trả lời dựa trên clue.
- Dẫn NPC đến vị trí.

Không nên dùng puzzle quá phức tạp ở Daily Dream ngắn.

---

## 9. Turn-based Combat System

### 9.1. Combat overview

Combat là 1 Beast của người chơi chống lại 1–3 enemy trong Dream.

MVP:

- 1 Beast player.
- 1–3 enemies.
- Turn order theo SPD.
- 2 active skills + 1 passive.
- Cooldown.
- Status effects.
- Win: nhận reward nhỏ và tiếp tục dream.
- Lose: dream run kết thúc.

### 9.2. Turn order

Mỗi unit có SPD. Unit SPD cao được đi trước.

Công thức MVP đơn giản:

```text
Sort units by SPD descending at start of round
```

Sau MVP có thể dùng action gauge:

```text
ActionGauge += SPD
If ActionGauge >= 100 → unit acts
```

### 9.3. Player actions

Trong lượt Beast, người chơi có thể:

- Dùng Skill 1.
- Dùng Skill 2.
- Dùng Basic Attack.
- Dùng Relic Action nếu có.
- Defend nếu cần.
- Flee chỉ trong một số node, nhưng mất reward.

### 9.4. Skills

Mỗi skill có:

```json
{
  "skillId": "radiant_breath",
  "name": "Radiant Breath",
  "damageType": "Magic",
  "affinity": "Light",
  "power": 1.6,
  "cooldown": 3,
  "targetType": "SingleEnemy",
  "statusEffect": "Blind",
  "statusChance": 0.2
}
```

### 9.5. Damage types

#### Physical Damage

- Dựa trên ATK.
- Bị giảm bởi DEF.
- Phù hợp Dragon, Beast, Avian.

#### Magic Damage

- Dựa trên MATK.
- Bị giảm bởi MDEF.
- Phù hợp Spirit, Memory, Light, Time.

### 9.6. Damage formula

Physical:

```text
Damage = SkillPower × ATK × (100 / (100 + TargetDEF))
```

Magic:

```text
Damage = SkillPower × MATK × (100 / (100 + TargetMDEF))
```

Minimum damage:

```text
FinalDamage = max(1, Damage)
```

### 9.7. Critical hit

```text
CritChance = BaseCrit + LUCKModifier + RelicBonus
CritDamage = 150% by default
```

LUCK không nên tăng crit quá mạnh, vì LUCK còn liên quan drop.

### 9.8. Affinity system

| Affinity | Identity |
|---|---|
| Light | Heal, shield, purify, blind |
| Shadow | Poison, curse, burst damage |
| Memory | Debuff, copy, steal, echo |
| Emotion | Buff, morale, synergy |
| Time | Delay, speed manipulation, cooldown reset |

### 9.9. Affinity interaction

MVP nên dùng bonus đơn giản:

- Strong hit: +20% damage.
- Weak hit: -15% damage.
- Neutral: 100%.

Đề xuất quan hệ:

| Attacker | Advantage |
|---|---|
| Light | Shadow |
| Shadow | Emotion |
| Emotion | Memory |
| Memory | Time |
| Time | Light |

Lưu ý: bản note ban đầu có ý tưởng Time mạnh hơn tất cả, nhưng để balance lâu dài, Time nên có identity về lượt thay vì damage counter toàn hệ.

### 9.10. Status effects

| Status | Effect | Duration |
|---|---|---:|
| Sleep | Bỏ lượt, tỉnh khi nhận damage | 1–2 turn |
| Dream Burn | Mất HP mỗi turn | 2–3 turn |
| Lucid Shock | Giảm SPD hoặc delay turn | 1–2 turn |
| Memory Drain | Giảm ATK/MATK | 2 turn |
| Blind | Giảm accuracy | 2 turn |
| Curse | Giảm healing nhận vào | 2–3 turn |
| Shield | Chặn một lượng damage | 1–2 turn |
| Echo | Lặp lại một phần hiệu ứng skill trước | 1 trigger |

### 9.11. Battle rewards

Sau mỗi trận:

- EXP cho Beast.
- Fragment nhỏ theo enemy.
- Chance nhận temporary buff.
- Progress đến ending.

Không nên drop quá nhiều NFT-related fragment từ mỗi enemy. Reward lớn nên nằm ở completion/ending.

### 9.12. Defeat rule

Khi Beast bị hạ:

- Dream run kết thúc.
- Player nhận run summary.
- Không nhận reward ending.
- Có thể nhận consolation fragment nhỏ nếu thiết kế cần giảm frustration.

Optional item sau MVP:

- **Lucid Token:** revive một lần, giới hạn hiếm, không nên bán trực tiếp thành pay-to-win.

---

## 10. Beast System

### 10.1. Beast role

Beast có ba vai trò:

1. Chiến đấu trong Dream.
2. Đi lại/trang trí trong Dreamland.
3. Là collectible có nguồn gốc và metadata riêng.

### 10.2. Beast attributes

Mỗi Beast có:

- Species Type.
- Affinity.
- Damage Type.
- Rarity.
- Core Stats.
- Passive Skill.
- 2 Active Skills.
- Decor Behavior.
- Origin Metadata.
- Optional Gene Data.

### 10.3. Species Type

| Species | Stat Identity | Decor Behavior |
|---|---|---|
| Dragon | HP, ATK/MATK cao | Bay vòng, đậu lên Building |
| Avian | SPD, LUCK cao | Bay ngắn, đậu cây |
| Beast | Balanced | Chạy, ngủ, phản ứng khi chạm |
| Aquatic | HP, DEF/MDEF cao | Bơi nếu có hồ |
| Spirit | MATK, SPD, LUCK cao | Lơ lửng, fade in/out |
| Construct | DEF/MDEF cao | Canh cổng, phát sáng |

### 10.4. Beast stats

| Stat | Mô tả |
|---|---|
| HP | Máu |
| ATK | Sát thương vật lý |
| MATK | Sát thương phép |
| DEF | Phòng thủ vật lý |
| MDEF | Phòng thủ phép |
| SPD | Tốc độ lượt |
| LUCK | Crit/drop/bonus chance |

### 10.5. Rarity

| Rarity | Design role |
|---|---|
| Common | Dễ có, tutorial, early game |
| Rare | Skill tốt, identity rõ |
| Epic | Synergy mạnh, visual đẹp |
| Legendary | Gắn boss/dream hiếm |
| Dreamborn | Mythic, lore/metadata đặc biệt |

### 10.6. Leveling

Beast nhận EXP qua:

- Combat.
- Dream completion.
- Building bonus.
- Consumable sau MVP.

Level up tăng stat theo growth curve.

MVP cap đề xuất:

- Level 20.

Soft Launch cap:

- Level 40.

Long-term:

- Level 60 hoặc seasonal cap.

### 10.7. Beast example

#### Aurora Wyrm

- Species: Dragon.
- Affinity: Light.
- Damage Type: Magic.
- Rarity: Epic.

Stats mẫu:

| Stat | Value |
|---|---:|
| HP | 1600 |
| ATK | 80 |
| MATK | 210 |
| DEF | 90 |
| MDEF | 140 |
| SPD | 95 |
| LUCK | 60 |

Skills:

- **Radiant Breath:** Magic damage 160% MATK, 20% chance Blind.
- **Aurora Wave:** Magic damage nhỏ + tăng SPD trong 2 turn.
- **Passive — Sky Guardian:** Khi HP dưới 40%, hồi 8% HP một lần mỗi trận.

Decor:

- Bay quanh Dreamland.
- Đậu lên Light Tower.
- Tạo vệt sáng khi di chuyển.

---

## 11. Enemy & Boss System

### 11.1. Enemy roles

| Role | Mục đích |
|---|---|
| Minion | Combat ngắn |
| Elite | Thử thách vừa |
| Guardian | Mini-boss theo Realm |
| Boss | Kết thúc dream |
| Nightmare Variant | Phiên bản corrupt mạnh hơn |

### 11.2. Enemy data

```json
{
  "enemyId": "whisper_moth",
  "realm": "forest_of_lost_voices",
  "affinity": "Memory",
  "damageType": "Magic",
  "role": "Minion",
  "stats": {
    "hp": 500,
    "matk": 90,
    "def": 30,
    "mdef": 50,
    "spd": 110
  },
  "skills": ["whisper_dust", "memory_drain"],
  "dropTable": "forest_common_enemy_drop"
}
```

### 11.3. Boss design

Boss nên có:

- 2 phase đơn giản.
- 1 signature skill.
- 1 mechanic liên quan realm.
- 1 reward theme rõ.

Ví dụ:

**Abyss Lantern Keeper**

- Realm: Ocean of Memories.
- Phase 1: Magic attacks + Memory Drain.
- Phase 2: Summon Drowned Echo.
- Signature: Lantern Pulse — AoE magic + Blind.
- Hidden counter: dùng Light hoặc Memory Beast để giảm shield.

---

## 12. Fragment, Item & Crafting System

### 12.1. Fragment types

| Fragment | Công dụng |
|---|---|
| Beast Fragment | Craft Beast |
| Building Fragment | Craft Building |
| Relic Fragment | Craft Relic |
| Memory Fragment | Universal material |
| Nightmare Shard | Corrupt craft/upgrade |
| Realm Fragment | Dùng cho item theo Realm |
| Event Fragment | Limited event |

### 12.2. Fragment rarity

- Common Fragment.
- Rare Fragment.
- Epic Fragment.
- Legendary Fragment.
- Mythic Fragment.

### 12.3. Crafting

Crafting dùng fragment để tạo item.

MVP craft:

| Output | Cost đề xuất |
|---|---:|
| Common Beast | 10 Beast Fragments |
| Rare Beast | 20 Beast Fragments |
| Epic Beast | 40 Beast Fragments + 5 Realm Fragments |
| Common Building | 15 Building Fragments |
| Rare Building | 30 Building Fragments |
| Relic | 10–30 Relic Fragments |

### 12.4. Crafting outcome

Khi craft Beast, hệ thống xác định:

- Species.
- Affinity.
- Rarity.
- Base stats.
- Skill kit.
- Visual variant.
- Origin metadata.

Nếu fragment đến từ cùng Realm hoặc cùng Affinity, tăng khả năng ra Beast tương ứng.

### 12.5. Crafting time

MVP đề xuất:

- Instant craft hoặc animation 5–10 giây.
- Không nên dùng timer dài ở giai đoạn đầu.

Long-term có thể thêm:

- Crafting queue.
- Building giảm crafting cost/time.
- Special ritual craft cho Legendary.

---

## 13. Relic System

### 13.1. Relic role

Relic là item hỗ trợ build.

Có thể:

- Tăng stat.
- Thêm hiệu ứng skill.
- Tăng status resistance.
- Mở hidden path.
- Tạo trade-off mạnh/yếu.

### 13.2. Relic equip

MVP:

- Mỗi Beast lắp 1 Relic.

Sau MVP:

- 1 Core Relic.
- 2 Minor Relic.
- Dreamland Relic đặt lên pedestal.

### 13.3. Relic examples

#### Lantern of Forgotten Shores

- Origin: Ocean of Memories.
- Effect: +10% Memory damage.
- Hidden: Mở node “Listen to the Drowned Song”.
- Lore: Một ngọn đèn không tắt dù bị chôn dưới đáy hồ.

#### Clockglass Loop

- Origin: Clocktower of Time.
- Effect: 15% chance reset cooldown Skill 1.
- Drawback: -5% max HP.
- Lore: Cát trong đồng hồ này chảy ngược khi không ai nhìn.

#### Nightmare Thorn

- Origin: Nightmare Citadel.
- Effect: +18% damage khi HP dưới 50%.
- Drawback: Healing nhận vào giảm 20%.
- Lore: Một gai đen mọc ra từ giấc mơ không chịu kết thúc.

---

## 14. Building & Dreamland System

### 14.1. Dreamland overview

Dreamland là vùng đất riêng của người chơi.

Chức năng:

- Hub chính.
- Nơi đặt Building.
- Nơi Beast đi lại.
- Nơi thể hiện tiến trình cá nhân.
- Nơi nhận passive bonus.

### 14.2. Dreamland progression

Dreamland bắt đầu trống.

Người chơi mở rộng bằng:

- Hoàn thành Daily Dream.
- Craft Building.
- Hoàn thành Realm milestone.
- Đạt Hidden Ending.

### 14.3. Building types

| Building | Bonus |
|---|---|
| Memory Library | Tăng EXP Beast |
| Light Tower | Tăng Light Fragment drop |
| Ocean Core | Cho Aquatic Beast bơi, tăng Memory reward |
| Clock Shrine | Giảm cooldown/cost crafting |
| Nightmare Gate | Tăng Nightmare Shard, tăng Corruption risk |
| Echo Garden | Tăng LUCK nhẹ |
| Relic Pedestal | Cho phép trưng bày/active Relic |

### 14.4. Placement

MVP:

- Grid placement đơn giản.
- Building có footprint.
- Không overlap.
- Có rotate nếu asset hỗ trợ.

### 14.5. Beast decor behavior

Beast trong Dreamland có hành vi theo Species:

- Dragon: bay, đậu tháp.
- Avian: bay ngắn, đậu cây.
- Beast: chạy, ngủ, lại gần player.
- Aquatic: bơi trong hồ hoặc vortex.
- Spirit: lơ lửng, fade.
- Construct: canh cổng, xoay nhẹ.

### 14.6. Interaction

Người chơi có thể tap/click Beast để:

- Xem profile.
- Kích hoạt animation phản hồi.
- Cho vào team.
- Gắn Relic.
- Xem origin dream.

---

## 15. Reward & Economy Design

### 15.1. Reward categories

| Category | Ví dụ |
|---|---|
| Progression | EXP, level, unlock Realm |
| Material | Fragment, shard |
| Collection | Beast, Relic, Building |
| Cosmetic | Skin, pattern, aura |
| Narrative | Lore entry, memory record |
| Social/Economic | NFT, marketplace listing |

### 15.2. Reward source

- Combat win.
- Item node.
- Puzzle clear.
- NPC choice.
- Dream ending.
- Hidden ending.
- Dreamland passive.
- Event.
- PvP season sau MVP.

### 15.3. Reward philosophy

Reward lớn phải đến từ:

- Completion.
- Good choices.
- Hidden discovery.
- Harder rarity.

Không nên để player farm vô hạn trong cùng một Daily Dream.

### 15.4. Economy risks

Rủi ro:

- Fragment inflation.
- NFT oversupply.
- Legendary mất giá.
- Pay-to-win nếu marketplace ảnh hưởng power quá mạnh.

Giải pháp:

- Off-chain fragment ở MVP.
- Mint có chọn lọc.
- Giới hạn Mythic theo season.
- Cosmetic NFT nhiều hơn power NFT.
- Power trong PvP cần normalize hoặc có league riêng.

---

## 16. Corruption System

### 16.1. Purpose

Corruption tạo trọng lượng cho Corrupt Ending.

Nó giúp người chơi phải cân nhắc:

- Nhận reward mạnh ngay.
- Hay giữ Dreamland trong trạng thái ổn định.

### 16.2. Corruption sources

- Chọn Corrupt Ending.
- Dùng Nightmare Shard để craft.
- Trang bị Nightmare Relic.
- Dùng Nightmare Gate.

### 16.3. Corruption effects

| Level | Effect |
|---|---|
| 0–20 | Không ảnh hưởng rõ |
| 21–50 | Tăng Nightmare drop nhẹ, enemy có thể mạnh hơn |
| 51–80 | NPC phản ứng khác, dream có thêm corrupt node |
| 81–100 | Nightmare invasion event trong Dreamland |

### 16.4. Purification

Giảm corruption bằng:

- Purify Ending.
- Light Relic.
- Dream Archivist quest.
- Building: Cleansing Fountain.

---

## 17. Progression System

### 17.1. Player progression

Player có:

- Account level.
- Dreamwalker rank.
- Realm unlock.
- Dreamland size.
- Archive completion.
- Corruption level.

### 17.2. Beast progression

Beast có:

- Level.
- EXP.
- Skill upgrade.
- Relic equip.
- Cosmetic unlock.
- Origin metadata.

### 17.3. Realm progression

Realm unlock đề xuất:

| Realm | Unlock condition |
|---|---|
| Forest of Lost Voices | Default |
| Ocean of Memories | Complete 3 Daily Dreams |
| Childhood Playground | Craft first Beast |
| Clocktower of Time | Complete 1 Hidden Ending |
| Nightmare Citadel | Reach Dreamwalker Rank 10 hoặc story milestone |

### 17.4. Daily/weekly retention

Daily:

- Dream of the Day.
- Login reward nhẹ.
- Daily craft/upgrade.
- Dreamland interaction.

Weekly:

- 5 Dream completion bonus.
- Realm challenge.
- Event dream.
- PvP attempt sau MVP.

---

## 18. UI/UX Design

### 18.1. Main navigation

Primary tabs:

- Dreamland.
- Daily Dream.
- Beast.
- Inventory.
- Craft.
- Archive.
- Shop/Marketplace sau MVP.

### 18.2. Lobby / Dreamland screen

Elements:

- Player avatar/name.
- Dreamland view.
- Beast roaming.
- Building slots.
- Daily Dream card.
- Start Dream button.
- Inventory shortcut.
- Corruption indicator.
- Notification icons.

### 18.3. Daily Dream card

Hiển thị:

- Dream name.
- Realm.
- Rarity.
- Mood/theme.
- Recommended Beast affinity.
- Possible reward category.
- Time left until reset.
- Start button.

Ví dụ:

```text
The Lantern Under the Lake
Realm: Ocean of Memories
Rarity: Epic
Theme: Memory / Loss / Light
Recommended: Light or Memory Beast
Time left: 13h 24m
```

### 18.4. Exploration HUD

Elements:

- HP bar.
- Current objective.
- Mini path indicator hoặc node counter.
- Interact button.
- Inventory quick view nếu cần.
- Pause/settings.

### 18.5. Battle HUD

Elements:

- Player Beast card.
- Enemy cards.
- HP bars.
- Status icons.
- Turn order.
- Skill buttons.
- Cooldown indicators.
- Combat log ngắn.

### 18.6. Reward screen

Hiển thị:

- Ending achieved.
- Fragment earned.
- EXP gained.
- Rare drop.
- Corruption change.
- New lore unlocked.
- Metadata preview nếu craft/mint item.

### 18.7. Beast profile screen

Hiển thị:

- Name.
- Species.
- Affinity.
- Damage Type.
- Rarity.
- Level.
- Stats.
- Skills.
- Relic.
- Origin Dream.
- Origin Ending.
- Mint status sau MVP.

---

## 19. Art & Audio Direction Summary

Chi tiết nằm trong Art Bible. GDD chỉ ghi định hướng chính.

### 19.1. Visual style

- 2D isometric.
- Surreal fantasy.
- Dream-like lighting.
- Màu chính: tím, xanh lam, hồng mơ, vàng neon.
- Mỗi Realm có palette riêng.

### 19.2. Animation

MVP animation tối thiểu:

Player:

- Idle.
- Walk 4 hướng.
- Interact.

Beast combat:

- Idle.
- Basic attack.
- Skill 1.
- Skill 2.
- Hit.
- Defeat.
- Victory.

Beast Dreamland:

- Idle.
- Move.
- Interaction reaction.

Enemy:

- Idle.
- Attack.
- Hit.
- Defeat.

### 19.3. Audio

Cần có:

- Realm ambience.
- Exploration music.
- Battle music.
- Boss music.
- UI sounds.
- Skill SFX.
- Reward SFX.
- Dream start/end stinger.

---

## 20. Technical Gameplay Requirements

### 20.1. Client requirements

Unity client cần hỗ trợ:

- Load Daily Dream từ backend.
- Generate hoặc load map theo seed/template.
- Movement isometric.
- Node interaction.
- Combat simulation.
- UI state management.
- Inventory display.
- Reward summary.
- Dreamland placement.
- API communication.
- Local caching.

### 20.2. Backend requirements

Backend cần xử lý:

- Auth.
- Daily Dream generation.
- User dream run state.
- Node validation.
- Combat result validation.
- Reward calculation.
- Inventory update.
- Crafting.
- Beast/Building/Relic data.
- Dreamland layout save.
- NFT metadata endpoint sau MVP.

### 20.3. Server authority

Các logic sau nên do server quyết định:

- Daily Dream Seed.
- Loot table.
- Reward.
- Craft result.
- NFT mint eligibility.
- Run completion status.
- Anti-cheat validation.

Client có thể simulate combat để hiển thị, nhưng server cần xác thực kết quả hoặc tái tính toán.

### 20.4. API overview

```text
GET  /daily-dream
POST /dream/start
GET  /dream/run/{runId}
POST /dream/node-action
POST /battle/start
POST /battle/action
POST /dream/complete
GET  /inventory
GET  /beasts
POST /craft
GET  /dreamland
POST /dreamland/place
GET  /archive/dream-history
GET  /nft/metadata/{itemId}
```

---

## 21. NFT Integration Design

### 21.1. NFT principle

NFT là lớp ownership và provenance, không phải core gameplay bắt buộc.

MVP có thể hoàn toàn off-chain.

### 21.2. NFT item types

Có thể mint:

- Beast.
- Building.
- Relic.
- Limited cosmetic.

Không nên mint mọi fragment ở MVP.

### 21.3. Metadata

NFT metadata nên lưu:

- Item name.
- Type.
- Rarity.
- Species/Affinity nếu là Beast.
- Origin Dream Seed.
- Origin Realm.
- Origin Ending.
- Birth date.
- Visual traits.
- Optional lore text.

### 21.4. Mint flow sau MVP

```text
Player owns eligible item
  ↓
Player clicks Mint
  ↓
Backend checks eligibility
  ↓
Metadata generated
  ↓
Smart contract mint
  ↓
NFT mapping saved
  ↓
Item status updated
```

---

## 22. MVP Scope

### 22.1. MVP goal

Chứng minh rằng daily loop đủ vui:

- Người chơi muốn quay lại mỗi ngày.
- Combat đủ rõ và có chiến thuật.
- Fragment/crafting tạo cảm giác tiến triển.
- Beast có cá tính.
- Dreamland tạo cảm giác sở hữu.

### 22.2. MVP included

MVP nên có:

- 3 Dream Realms.
- 10–15 Daily Dream templates.
- Backend Daily Seed.
- 12–18 Beast.
- 20–30 enemy.
- 3–5 boss.
- 10 Relic.
- 8–10 Building.
- Fragment/crafting.
- Dreamland basic placement.
- Inventory.
- Beast profile.
- Reward summary.
- Basic lore archive.
- No real NFT required.

### 22.3. MVP excluded

Không nên làm trong MVP:

- Full marketplace.
- Real money economy.
- Complex PvP.
- Breeding/Gene inheritance đầy đủ.
- Large open world.
- Multiplayer realtime.
- On-chain fragment.
- Advanced animation system.
- Too many Realm.

### 22.4. MVP success criteria

MVP thành công nếu:

- Một Daily Dream có thể hoàn thành trong 5–15 phút.
- Người chơi hiểu loop trong 5 phút đầu.
- Combat không cần tutorial dài vẫn chơi được.
- Người chơi muốn craft Beast mới.
- Người chơi thấy Beast có giá trị cá nhân.
- Backend lưu được dream run và reward ổn định.
- Có thể thêm dream mới bằng content template mà không cần code lại nhiều.

---

## 23. Soft Launch Scope

Sau MVP:

- Đủ 5 Dream Realms.
- 30–50 Beast.
- 50+ Daily Dream templates.
- Relic build sâu hơn.
- Building bonus đa dạng.
- Event Dream.
- Analytics.
- Player retention tuning.
- Optional mint testnet/mainnet.
- Basic marketplace viewer.

---

## 24. Live Ops Direction

### 24.1. Daily content

Daily Dream là live ops tự nhiên. Team có thể:

- Thêm dream template mới.
- Tăng tỷ lệ realm theo event.
- Mở limited hidden ending.
- Thêm seasonal fragment.

### 24.2. Weekly events

Ví dụ:

- Week of Lost Voices.
- Ocean Memory Festival.
- Nightmare Surge.
- Lucid Warden Trial.

### 24.3. Seasonal content

Mỗi season nên có:

- 1 mini story arc.
- 3–5 new Beast.
- 1 limited Building.
- 1 event Relic.
- 1 leaderboard hoặc collection challenge.

---

## 25. Analytics Requirements

Cần tracking các event:

```text
login
view_daily_dream
start_dream
complete_dream
fail_dream
abandon_dream
choose_ending
enter_battle
win_battle
lose_battle
collect_fragment
craft_item
equip_relic
place_building
interact_beast
unlock_hidden_ending
```

### 25.1. Metrics quan trọng

- D1 retention.
- D7 retention.
- Daily Dream start rate.
- Daily Dream completion rate.
- Average session length.
- Combat fail rate.
- Craft conversion rate.
- Most used Beast.
- Ending distribution.
- Corruption distribution.
- Fragment inflation rate.

---

## 26. Risks & Design Mitigations

### 26.1. Risk: Daily FOMO quá mạnh

Mitigation:

- Reward missed không quay lại, nhưng không khóa progression cứng.
- Có Dream Echo Replay cho lore/reduced reward.
- Weekly catch-up bonus.

### 26.2. Risk: NFT làm mất cân bằng

Mitigation:

- Tách ownership khỏi power.
- Normalize PvP.
- Giới hạn marketplace ảnh hưởng competitive.
- Cosmetic và provenance là trọng tâm.

### 26.3. Risk: Content production quá nặng

Mitigation:

- Dùng template-based Daily Dream.
- Tái sử dụng map/node/enemy pool.
- Realm modular asset.
- Tách story text khỏi code.

### 26.4. Risk: Combat quá đơn giản

Mitigation:

- Skill cooldown.
- Affinity.
- Relic.
- Status effect.
- Boss mechanic nhẹ.
- Hidden path yêu cầu build khác nhau.

### 26.5. Risk: Mobile session quá dài

Mitigation:

- Common/Rare dream dưới 10 phút.
- Resume run.
- Fast battle animation.
- Auto text skip.
- Clear objective.

---

## 27. Open Questions

Các câu hỏi cần team quyết định:

1. Daily Dream là cùng một seed cho toàn server hay personalized seed theo user?
2. Nếu người chơi thua, có cho retry không?
3. Fragment có trade được không, hay chỉ item craft mới trade?
4. NFT có ảnh hưởng stat không, hay chỉ ownership/metadata?
5. PvP có normalize level/stat không?
6. Có stamina/energy không? Đề xuất MVP: không.
7. Có gacha không? Đề xuất: không dùng gacha trả tiền trong MVP.
8. Có cho người chơi đặt tên Beast không?
9. Corruption có reset theo season không?
10. Hidden Ending nên được gợi ý hay hoàn toàn bí mật?

---

## 28. Production Priority

### Priority 1 — Core playable

- Movement.
- Map template.
- Node interaction.
- Combat.
- Reward.
- Inventory.
- 3 Beast.
- 5 enemy.
- 1 Daily Dream.

### Priority 2 — Daily system

- Backend seed.
- Run state.
- Ending.
- Fragment.
- Crafting.
- Beast profile.

### Priority 3 — Content expansion

- 3 Realms.
- More Beast.
- More enemy.
- Boss.
- Relic.
- Building.

### Priority 4 — Dreamland

- Placement.
- Beast roaming.
- Building bonus.
- Interaction.

### Priority 5 — Web/NFT readiness

- Profile.
- Gallery.
- Metadata endpoint.
- Optional mint.

---

## 29. Glossary

| Term | Meaning |
|---|---|
| Dreamverse | Thế giới giấc mơ tập thể |
| Dreamwalker | Người chơi, có khả năng bước vào Dreamverse |
| Daily Dream | Giấc mơ chính mỗi ngày |
| Dream Seed | Dữ liệu hạt giống tạo dream |
| Dream Fragment | Mảnh vật chất hóa của dream |
| Beast | Sinh vật được sinh ra từ dream |
| Building | Công trình đặt trong Dreamland |
| Relic | Di vật hỗ trợ build |
| Dreamland | Hub cá nhân của người chơi |
| Purify Ending | Ending thanh tẩy/chữa lành |
| Corrupt Ending | Ending khai thác Nightmare |
| Hidden Ending | Ending bí mật |
| Nightmare Shard | Tài nguyên corrupt |
| Affinity | Hệ nguyên tố/cảm xúc của unit |
| Species | Chủng loài Beast |
| Origin Metadata | Dữ liệu nguồn gốc item |

---

## 30. Final Design Statement

**Myth of Dreams** nên được thiết kế xoay quanh cảm giác: mỗi ngày người chơi bước vào một mảnh ký ức không thể lặp lại, đưa ra lựa chọn, rồi mang một phần của giấc mơ ấy trở về Dreamland.

Tất cả hệ thống — combat, Beast, fragment, crafting, Building, Relic, NFT metadata — cần phục vụ cùng một mục tiêu:

> Biến mỗi phần thưởng thành một dấu ấn cá nhân của hành trình trong Dreamverse, không chỉ là một con số trong inventory.\n