---
title: "Dream System"
description: "Myth of Dreams - Dream System"
date: "2026-06-03"
category: "game-design"
order: 10
tags: ["game-design","dream"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, combat_system.md, economy_reward_system.md, technical_architecture.md  
**Owner:** Game Design / Backend / Narrative  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Dream System** — hệ thống cốt lõi của **Myth of Dreams**.

Dream System chịu trách nhiệm tạo, quản lý và xác thực trải nghiệm **Daily Dream** mỗi ngày, bao gồm:

- Dream Seed.
- Dream rarity.
- Realm selection.
- Map template.
- Node generation.
- Enemy pool.
- NPC/choice/puzzle.
- Ending rules.
- Hidden path.
- Reward table.
- Dream run state.
- Metadata gắn với Beast, Building, Relic, NFT.
- Backend validation.

Nếu GDD trả lời “người chơi làm gì mỗi ngày”, thì Dream System trả lời:

> “Làm thế nào để một giấc mơ mỗi ngày được tạo ra, chơi được, lưu lại, thưởng đúng và có ý nghĩa lâu dài?”

---

## 1. System Overview

### 1.1. Core concept

Mỗi ngày, hệ thống tạo ra một hoặc nhiều **Daily Dream** dựa trên **Dream Seed**.

Một Daily Dream là một run ngắn, gồm:

1. Realm.
2. Rarity.
3. Map layout.
4. Node list.
5. Enemy encounters.
6. NPC/choice/puzzle.
7. Ending condition.
8. Reward table.
9. Metadata.

Người chơi vào Daily Dream, hoàn thành các node, đánh quái, đưa ra lựa chọn và đạt một trong các ending:

- Purify Ending.
- Corrupt Ending.
- Hidden Ending.
- Failed/Abandoned outcome.

Sau khi run kết thúc, backend xác thực kết quả và cấp reward.

### 1.2. Design goals

Dream System cần đạt các mục tiêu:

1. **Daily freshness**  
   Mỗi ngày có cảm giác mới, dù dùng lại asset/template.

2. **Content scalability**  
   Team có thể thêm Daily Dream template mới mà không phải sửa code nhiều.

3. **Narrative consistency**  
   Dream phải khớp Realm, tone, enemy, reward và lore.

4. **Reward integrity**  
   Reward phải được tính server-side để chống cheat.

5. **Metadata permanence**  
   Item sinh ra từ dream phải lưu được nguồn gốc: seed, realm, ending, date, key choice.

6. **MVP simplicity**  
   Hệ thống đủ sâu nhưng không quá phức tạp để triển khai giai đoạn đầu.

### 1.3. MVP target

Trong MVP, Dream System nên hỗ trợ:

- 1 Daily Dream chính/ngày.
- 3 Realm đầu tiên.
- 3 rarity chính: Common, Rare, Epic.
- Legendary/Mythic có thể giả lập hoặc để sau.
- 10–15 Dream Templates.
- 5–10 Map Templates.
- 3 loại ending: Purify, Corrupt, Hidden.
- Backend lưu run state.
- Reward fragment/crafting material.
- Hidden condition đơn giản.
- Resume khi disconnect.

---

## 2. Key Terminology

| Term | Meaning |
|---|---|
| Daily Dream | Giấc mơ chính xuất hiện trong ngày |
| Dream Seed | Dữ liệu gốc dùng để tạo Daily Dream |
| Dream Template | Mẫu nội dung narrative/gameplay của dream |
| Map Template | Mẫu layout bản đồ |
| Node | Điểm tương tác trong map |
| Dream Run | Một lượt chơi Daily Dream của user |
| Run State | Trạng thái hiện tại của run |
| Ending | Kết quả cuối dream |
| Hidden Condition | Điều kiện mở Hidden Ending/path |
| Loot Table | Bảng reward |
| Realm | Vùng mơ chính |
| Dream Metadata | Dữ liệu nguồn gốc lưu vào item/NFT |
| Dream Echo | Replay bản yếu hơn của dream cũ, phase sau MVP |

---

## 3. Dream System Pillars

### 3.1. Oneiric Uniqueness

Mỗi dream cần có một “chất mơ” riêng.

Ngay cả khi template lặp lại, hệ thống cần tạo biến thể qua:

- Realm.
- Rarity.
- Node order.
- Enemy variation.
- Reward type.
- NPC line variation.
- Hidden condition.
- Weather/visual modifier.
- Dream title variant.

### 3.2. Choice-Based Consequence

Dream không chỉ là đường thẳng tới boss.

Lựa chọn trong dream ảnh hưởng:

- Ending.
- Reward.
- Corruption.
- Faction reaction.
- Lore entry.
- Item metadata.
- Dreamland state sau này.

### 3.3. Short Session, Long Memory

Một dream có thể chỉ kéo dài 5–15 phút, nhưng dấu vết của nó tồn tại lâu dài qua:

- Beast origin.
- Building origin.
- Relic origin.
- Dream History.
- Archive Entry.
- NFT metadata.

### 3.4. Server-Trusted Reward

Client không được tự quyết reward cuối.

Server cần xác thực:

- User có quyền vào dream không.
- Run có hợp lệ không.
- Node đã đi qua.
- Ending có đủ điều kiện không.
- Reward có khớp loot table không.
- Hidden reward có được mở không.

---

## 4. Daily Dream Lifecycle

### 4.1. Lifecycle overview

```text
Daily Schedule Trigger
  ↓
Generate Dream Seed
  ↓
Publish Daily Dream
  ↓
Player Views Dream Card
  ↓
Player Starts Dream Run
  ↓
Backend Creates Run State
  ↓
Client Loads Map/Nodes
  ↓
Player Interacts, Battles, Chooses
  ↓
Run State Updates
  ↓
Ending Triggered
  ↓
Backend Validates Run
  ↓
Reward Granted
  ↓
Dream History + Metadata Saved
```

### 4.2. Server day boundary

Daily Dream reset cần dựa trên server time.

MVP đề xuất:

- Reset theo UTC hoặc timezone sản phẩm.
- Nếu target global: UTC reset.
- Nếu target Việt Nam/SEA ban đầu: có thể dùng UTC+7 trong soft launch nội bộ.

Thông tin hiển thị cho player:

- Time left until reset.
- Dream date.
- Dream rarity.
- Completion status.

### 4.3. Dream availability state

| State | Meaning |
|---|---|
| Scheduled | Seed đã tạo nhưng chưa mở |
| Active | Dream đang mở trong ngày |
| Expired | Dream đã hết hạn |
| Archived | Dream được lưu cho history |
| EchoAvailable | Có thể replay reduced reward, sau MVP |

### 4.4. Player run state

| State | Meaning |
|---|---|
| NotStarted | User chưa vào dream |
| InProgress | Run đang diễn ra |
| Completed | Run đã hoàn thành |
| Failed | Thua combat hoặc fail objective |
| Abandoned | Người chơi quit/timeout |
| ExpiredInProgress | Dream hết hạn khi run chưa hoàn thành |
| RewardClaimed | Reward đã được cấp |

### 4.5. Re-entry and resume

MVP recommendation:

- Nếu disconnect/crash, người chơi có thể resume run.
- Run state được lưu sau mỗi node quan trọng.
- Nếu người chơi cố tình quit từ menu, đánh dấu Abandoned.
- Nếu app crash, không phạt ngay; cho resume trong cùng ngày.
- Nếu qua reset mà run chưa hoàn thành, xử lý theo policy.

Policy đề xuất:

```text
If run started before reset and player is still in run:
- Allow finish within grace period 30 minutes.
- Reward still belongs to original dream date.
```

Grace period giúp tránh cảm giác bất công khi người chơi đang chơi gần giờ reset.

---

## 5. Dream Seed Design

### 5.1. What is a Dream Seed?

Dream Seed là record server-side chứa toàn bộ thông tin cần để tạo Daily Dream.

Dream Seed không nhất thiết là procedural seed thuần random. Nó nên là tổ hợp:

- Random seed.
- Template references.
- Design-authored content.
- Loot table.
- Rule set.
- Metadata.

### 5.2. Dream Seed data model

```json
{
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "date": "2026-05-24",
  "serverResetGroup": "UTC",
  "rarity": "Epic",
  "realmId": "ocean_of_memories",
  "dreamTemplateId": "lantern_under_lake",
  "mapTemplateId": "ocean_epic_03",
  "nodeLayoutSeed": 839201,
  "enemyPoolId": "ocean_memory_pool_b",
  "bossId": "abyss_lantern_keeper",
  "npcSetId": "shell_child_lantern",
  "choiceTableId": "lantern_choice_table",
  "puzzleSetId": "ocean_lantern_puzzle",
  "endingRuleSetId": "lantern_ending_rules",
  "lootTableId": "epic_memory_loot_01",
  "hiddenConditionId": "listen_song_memory_or_light",
  "visualModifier": "moonlit_deepwater",
  "audioThemeId": "ocean_melancholy_02",
  "metadataTags": [
    "ocean",
    "memory",
    "lantern",
    "loss",
    "hidden_path"
  ],
  "isGlobal": true,
  "createdAt": "2026-05-24T00:00:00Z",
  "expiresAt": "2026-05-25T00:00:00Z"
}
```

### 5.3. Seed ID convention

Format đề xuất:

```text
DREAM-[YYYY-MM-DD]-[REALM_CODE]-[RARITY]-[INDEX]
```

Ví dụ:

```text
DREAM-2026-05-24-OCEAN-EPIC-001
DREAM-2026-05-25-FOREST-RARE-001
DREAM-2026-05-26-PLAYGROUND-COMMON-001
```

### 5.4. Global vs personalized seed

Có hai hướng:

#### Option A — Global Daily Dream

Toàn server có cùng một Daily Dream mỗi ngày.

Ưu điểm:

- Dễ truyền thông.
- Người chơi có cùng chủ đề để thảo luận.
- Dễ làm event.
- Dễ tạo “hôm nay dream gì?” feeling.

Nhược điểm:

- Nếu player quá mạnh/yếu, balance khó hơn.
- Ít cá nhân hóa.

#### Option B — Personalized Daily Dream

Mỗi player có dream riêng dựa trên progression.

Ưu điểm:

- Cá nhân hóa tốt.
- Dễ scale difficulty.
- Dễ gợi ý reward cần thiết.

Nhược điểm:

- Mất cảm giác cộng đồng.
- Khó marketing daily event.
- Debug khó hơn.

#### Recommendation for MVP

Dùng **Global Daily Dream với difficulty scaling theo player**.

Nghĩa là:

- Seed chính giống nhau.
- Realm, theme, boss, reward category giống nhau.
- Enemy stat/difficulty có thể scale theo user.
- Hidden condition có thể phụ thuộc inventory của user.

---

## 6. Dream Rarity System

### 6.1. Rarity purpose

Dream rarity ảnh hưởng:

- Map size.
- Node count.
- Complexity.
- Enemy difficulty.
- Number of endings.
- Hidden path chance.
- Reward quality.
- Lore importance.

### 6.2. Rarity table

| Rarity | Rate | Session | Map | Ending | Reward |
|---|---:|---:|---|---|---|
| Common | 60% | 5–7 phút | Nhỏ | 1–2 | Normal Fragment |
| Rare | 25% | 7–10 phút | Vừa | 2 | Rare Fragment, small Relic chance |
| Epic | 10% | 10–15 phút | Vừa/lớn | 2–3 | Epic Fragment, Relic |
| Legendary | 4% | 15–20 phút | Lớn | 3 | Legendary Beast Fragment |
| Mythic | 1% | 15–25 phút | Custom | 3+ | Unique/Dreamborn item |

### 6.3. MVP rarity support

MVP nên implement:

- Common.
- Rare.
- Epic.

Legendary/Mythic có thể để trong data structure nhưng chưa cần live.

### 6.4. Rarity modifiers

Rarity có thể ảnh hưởng các parameter:

```json
{
  "Common": {
    "minNodes": 8,
    "maxNodes": 12,
    "enemyEncounters": 2,
    "choiceNodes": 1,
    "puzzleNodes": 0,
    "hiddenChance": 0.05
  },
  "Rare": {
    "minNodes": 12,
    "maxNodes": 16,
    "enemyEncounters": 3,
    "choiceNodes": 2,
    "puzzleNodes": 1,
    "hiddenChance": 0.15
  },
  "Epic": {
    "minNodes": 16,
    "maxNodes": 22,
    "enemyEncounters": 4,
    "choiceNodes": 2,
    "puzzleNodes": 1,
    "hiddenChance": 0.30
  }
}
```

### 6.5. Bad luck protection

Nếu muốn tránh người chơi quá lâu không gặp dream hiếm:

- Theo dõi số ngày từ lần Epic/Legendary gần nhất.
- Tăng nhẹ chance sau nhiều ngày.
- Không cần hiển thị rõ trong MVP.

Ví dụ:

```text
If no Epic+ dream for 10 days:
+2% Epic chance per day until Epic appears
```

Cần cẩn thận để không làm mất giá trị rare event.

---

## 7. Realm Selection

### 7.1. Realm list

MVP Realms:

1. Forest of Lost Voices.
2. Ocean of Memories.
3. Childhood Playground.

Post-MVP:

4. Clocktower of Time.
5. Nightmare Citadel.

### 7.2. Realm selection rules

Daily Dream realm có thể chọn theo:

- Random weighted.
- Event schedule.
- Player progression.
- Content availability.
- Narrative arc.

MVP recommendation:

- Tuần đầu dùng fixed onboarding schedule.
- Sau onboarding dùng weighted random.

### 7.3. Onboarding schedule example

| Day | Realm | Rarity | Purpose |
|---:|---|---|---|
| 1 | Forest | Common | Teach exploration |
| 2 | Ocean | Common | Teach item/puzzle |
| 3 | Forest | Rare | Teach choice |
| 4 | Playground | Rare | Teach NPC |
| 5 | Ocean | Epic | Teach Hidden Ending |
| 6+ | Weighted | Random | Normal daily |

### 7.4. Realm weight example

```json
{
  "forest_of_lost_voices": 0.35,
  "ocean_of_memories": 0.35,
  "childhood_playground": 0.30
}
```

Sau khi đủ 5 Realm:

```json
{
  "forest_of_lost_voices": 0.22,
  "ocean_of_memories": 0.22,
  "childhood_playground": 0.20,
  "clocktower_of_time": 0.18,
  "nightmare_citadel": 0.18
}
```

### 7.5. Realm-content compatibility

Dream Template phải khớp Realm.

Ví dụ:

- Lantern, water, memory → Ocean.
- Apology, whispers, voices → Forest.
- Toy, carousel, children → Playground.
- Regret, clock, second chance → Clocktower.
- Lock, nightmare, crown → Citadel.

Backend/content validation nên kiểm tra template realm.

---

## 8. Dream Template System

### 8.1. Dream Template definition

Dream Template là nội dung được author trước, chứa:

- Narrative premise.
- NPC.
- Choice definitions.
- Ending text.
- Boss reference.
- Reward theme.
- Allowed map templates.
- Allowed enemy pools.
- Hidden condition options.

### 8.2. Dream Template data model

```json
{
  "dreamTemplateId": "lantern_under_lake",
  "title": "The Lantern Under the Lake",
  "realmId": "ocean_of_memories",
  "allowedRarities": ["Rare", "Epic"],
  "moodTags": ["melancholic", "mysterious", "hopeful"],
  "openingText": "Mặt hồ phẳng như gương...",
  "mainNpcId": "shell_child",
  "allowedMapTemplates": ["ocean_rare_02", "ocean_epic_03"],
  "allowedEnemyPools": ["ocean_memory_pool_a", "ocean_memory_pool_b"],
  "bossOptions": ["abyss_lantern_keeper"],
  "choiceTableId": "lantern_choices",
  "endingRuleSetId": "lantern_endings",
  "rewardTheme": ["memory", "aquatic", "lantern"],
  "requiredFeatureFlags": ["choice_nodes", "hidden_ending"],
  "metadataTags": ["ocean", "memory", "lantern"]
}
```

### 8.3. Template categories

| Category | Use |
|---|---|
| Tutorial Template | Dạy hệ thống |
| Standard Template | Daily content thường |
| Rare Story Template | Có narrative đặc biệt |
| Event Template | Seasonal/event |
| Mythic Template | Unique, high rarity |
| Echo Template | Replay variant, sau MVP |

### 8.4. Template reusability

Một template có thể tái sử dụng với biến thể:

- Different enemy pool.
- Different visual modifier.
- Different reward table.
- Different NPC line.
- Different hidden condition.
- Different map layout.

Ví dụ:

**The Lantern Under the Lake** có thể có:

- Rare version: không có boss lớn, reward nhỏ.
- Epic version: có Abyss Lantern Keeper và Hidden Ending.
- Event version: thêm seasonal lantern cosmetic.

---

## 9. Map Template & Node Layout

### 9.1. Map Template definition

Map Template là layout logic của dream.

Nó có thể là:

- Hand-authored map.
- Semi-procedural node graph.
- Hybrid: fixed landmarks + randomized node content.

MVP recommendation:

- Dùng **node graph semi-procedural**.
- Visual map có thể được dựng từ prefab/area chunks.
- Node order và content được seed.

### 9.2. Node graph example

```text
Start
  ↓
Node A: Item
  ↓
Node B: Enemy
  ↙        ↘
Node C: NPC   Node D: Puzzle
  ↓          ↓
Node E: Choice
  ↓
Node F: Boss
  ↓
Ending Portal
```

### 9.3. Node data model

```json
{
  "nodeId": "node_04",
  "nodeType": "Choice",
  "position": { "x": 12, "y": 4 },
  "requiredState": ["enemy_02_defeated"],
  "contentId": "lantern_choice_01",
  "isOptional": false,
  "isHidden": false,
  "nextNodes": ["node_05a", "node_05b"]
}
```

### 9.4. Node types

| Node Type | Function |
|---|---|
| Start | Spawn point |
| Enemy | Combat encounter |
| EliteEnemy | Harder combat |
| Boss | Main combat/end gate |
| NPC | Dialogue/quest |
| Choice | Branching decision |
| Item | Small reward |
| Puzzle | Interaction challenge |
| Shrine | Buff/debuff |
| Hidden | Secret node |
| Portal | Ending trigger |
| Lore | Archive unlock |
| Rest | Heal/save, optional |

### 9.5. Node count by rarity

| Rarity | Required Nodes | Optional Nodes | Hidden Nodes |
|---|---:|---:|---:|
| Common | 6–8 | 1–2 | 0–1 |
| Rare | 8–12 | 2–4 | 0–1 |
| Epic | 12–16 | 3–6 | 1–2 |
| Legendary | 16–22 | 5–8 | 1–3 |
| Mythic | Custom | Custom | Custom |

### 9.6. Critical path

Mỗi dream phải có critical path rõ:

```text
Start → Core Interaction → Combat/Puzzle → Choice → Boss/Resolution → Ending
```

Không nên để người chơi lạc quá lâu trong MVP.

### 9.7. Hidden path

Hidden path chỉ hiện khi đủ điều kiện.

Điều kiện có thể là:

- Có Beast Affinity phù hợp.
- Có Relic phù hợp.
- Chọn đúng dialogue trước đó.
- Không đánh một enemy cụ thể.
- Tương tác với object optional.
- Corruption level trong khoảng nhất định.
- Đã unlock lore entry liên quan.

MVP nên bắt đầu với điều kiện đơn giản:

```text
If player selected Option C at Choice 1 and has Memory or Light Beast → reveal Hidden Node
```

---

## 10. Node System

### 10.1. Node resolution

Mỗi node có trạng thái:

| State | Meaning |
|---|---|
| Locked | Chưa thể vào |
| Available | Có thể tương tác |
| Completed | Đã xử lý |
| Failed | Xử lý thất bại |
| Hidden | Chưa hiện |
| Revealed | Hidden đã mở |

### 10.2. Node interaction flow

```text
Player enters interaction range
  ↓
Client shows prompt
  ↓
Player interacts
  ↓
Client sends node action request
  ↓
Server validates node availability
  ↓
Server returns node content/result
  ↓
Client plays dialogue/combat/reward
  ↓
Server updates run state
```

### 10.3. Server validation

Server cần kiểm tra:

- Run thuộc về user.
- Run vẫn Active.
- Node thuộc run.
- Node chưa Completed.
- Required state đã đủ.
- Player chưa skip bất hợp lệ.
- Reward chưa claim.

### 10.4. Node action types

```json
{
  "actionType": "INTERACT",
  "nodeId": "node_04",
  "choiceOption": "listen_to_song",
  "clientTimestamp": "2026-05-24T12:02:12Z"
}
```

### 10.5. Node result types

```json
{
  "resultType": "CHOICE_RESOLVED",
  "stateUpdates": ["heard_lantern_song"],
  "revealedNodes": ["hidden_node_01"],
  "corruptionDelta": 0,
  "temporaryBuffs": [],
  "dialogueId": "lantern_choice_listen_result"
}
```

---

## 11. Choice System

### 11.1. Choice purpose

Choice là hệ thống quan trọng nhất để kết nối gameplay với narrative.

Choice phải ảnh hưởng ít nhất một yếu tố:

- Ending route.
- Reward type.
- Hidden path.
- Corruption.
- NPC relationship.
- Lore entry.
- Combat modifier.

### 11.2. Choice data model

```json
{
  "choiceId": "lantern_choice_01",
  "prompt": "Ngọn đèn lay động dưới mặt hồ. Bạn làm gì?",
  "options": [
    {
      "optionId": "raise_lantern",
      "text": "Kéo ngọn đèn lên",
      "stateAdd": ["path_purify"],
      "corruptionDelta": -1
    },
    {
      "optionId": "extinguish_lantern",
      "text": "Dập tắt ngọn đèn",
      "stateAdd": ["path_corrupt"],
      "corruptionDelta": 5
    },
    {
      "optionId": "listen_to_song",
      "text": "Áp vỏ sò vào tai và lắng nghe",
      "stateAdd": ["heard_lantern_song"],
      "requires": ["has_shell_child_clue"],
      "canRevealHidden": true
    }
  ]
}
```

### 11.3. Choice types

| Choice Type | Description |
|---|---|
| Moral Choice | Purify vs Corrupt |
| Observation Choice | Chọn dựa trên clue |
| Resource Choice | Dùng fragment/relic để mở đường |
| Combat Choice | Chọn buff/debuff trước combat |
| Trust Choice | Tin NPC nào |
| Hidden Choice | Chỉ hiện khi đủ điều kiện |

### 11.4. Choice clarity

Không nên đánh lừa người chơi quá mức.

Good:

- Player hiểu option có tone gì.
- Hidden option có thể bí ẩn nhưng có clue.
- Corrupt option hấp dẫn nhưng đáng ngờ.

Bad:

- Option text một kiểu, kết quả ngược hoàn toàn.
- Hidden ending phụ thuộc random không có clue.
- Purify luôn đúng, Corrupt luôn sai.

### 11.5. Choice memory

Run state cần lưu key choices:

```json
{
  "choicesMade": [
    {
      "choiceId": "lantern_choice_01",
      "optionId": "listen_to_song",
      "nodeId": "node_04",
      "timestamp": "2026-05-24T12:02:12Z"
    }
  ]
}
```

Key choice có thể được đưa vào metadata item.

---

## 12. Ending System

### 12.1. Ending types

| Ending | Meaning | Reward Identity |
|---|---|---|
| Purify | Chữa lành/kết thúc đúng cách | Stable fragment, archive, reputation |
| Corrupt | Khai thác Nightmare energy | Strong shard, risk, corruption |
| Hidden | Thấu hiểu bản chất dream | Rare item, lore, unique metadata |
| Failed | Thua hoặc fail objective | Little/no reward |
| Abandoned | Quit/timeout | No main reward |

### 12.2. Ending rule data model

```json
{
  "endingRuleSetId": "lantern_endings",
  "rules": [
    {
      "endingType": "Purify",
      "priority": 10,
      "requiresAny": ["path_purify"],
      "requiresAll": ["boss_defeated"],
      "excludes": ["heard_lantern_song", "path_corrupt"],
      "endingTextId": "lantern_purify_ending",
      "lootTableId": "lantern_purify_loot"
    },
    {
      "endingType": "Corrupt",
      "priority": 10,
      "requiresAny": ["path_corrupt"],
      "requiresAll": ["boss_defeated"],
      "endingTextId": "lantern_corrupt_ending",
      "lootTableId": "lantern_corrupt_loot",
      "corruptionDelta": 8
    },
    {
      "endingType": "Hidden",
      "priority": 100,
      "requiresAll": [
        "heard_lantern_song",
        "boss_spared",
        "has_memory_or_light_beast"
      ],
      "endingTextId": "lantern_hidden_ending",
      "lootTableId": "lantern_hidden_loot",
      "unlockLoreEntryId": "song_beneath_lake"
    }
  ]
}
```

### 12.3. Ending priority

Hidden Ending nên có priority cao nhất.

Nếu player đủ điều kiện Hidden, hệ thống có thể:

- Tự trigger Hidden Ending.
- Hoặc cho người chơi chọn tại final portal.

Recommendation:

- Với MVP, tự trigger nếu đủ điều kiện để tránh UX phức tạp.
- Với later phase, cho choice cinematic ở portal.

### 12.4. Failed outcome

Run failed khi:

- Beast chết.
- Người chơi chọn fail condition.
- Time limit nếu dream có rule đặc biệt.
- Boss không bị đánh bại.
- Required node bị fail.

Failed reward:

- Không có ending reward.
- Có thể giữ một phần minor combat reward nếu đã cấp trước.
- Có thể có consolation reward nhỏ.

### 12.5. Abandoned outcome

Run abandoned khi:

- User chọn quit.
- Run timeout quá lâu.
- Suspicious state/cheat detected.

MVP:

- Không cấp main reward.
- Ghi log analytics.
- Cho xem summary ngắn.

---

## 13. Hidden Condition System

### 13.1. Purpose

Hidden Condition tạo cảm giác khám phá.

Hidden không nên random. Nó phải dựa trên:

- Clue.
- Build.
- Choice.
- Previous progress.
- Observation.

### 13.2. Hidden condition types

| Type | Example |
|---|---|
| Affinity | Có Light Beast để thấy vết sáng |
| Species | Aquatic Beast mở đường nước |
| Relic | Lantern Relic mở hidden node |
| Choice | Chọn “listen” thay vì “take” |
| Lore | Đã unlock Archive entry |
| Corruption | Corruption cao/thấp mở option |
| Non-combat | Không giết enemy nhất định |
| Time | Vào node trước/sau một event |

### 13.3. Hidden condition data

```json
{
  "hiddenConditionId": "listen_song_memory_or_light",
  "conditions": [
    {
      "type": "RUN_STATE",
      "key": "heard_lantern_song",
      "value": true
    },
    {
      "type": "BEAST_AFFINITY_ANY",
      "values": ["Memory", "Light"]
    }
  ],
  "revealNodeIds": ["hidden_lantern_depths"],
  "failureHintTextId": "you_hear_a_song_but_cannot_follow_it"
}
```

### 13.4. Hint system

Hidden condition nên có hint nếu gần đạt.

Ví dụ:

```text
Bạn nghe thấy tiếng hát dưới nước, nhưng Beast của bạn không phản ứng.
```

Nếu có Memory Beast:

```text
Beast của bạn ngẩng đầu. Tiếng hát đang gọi từ sâu hơn dưới hồ.
```

### 13.5. Hidden reward control

Hidden reward phải được kiểm soát tránh farm quá nhiều.

- Hidden reward claim chỉ một lần/ngày.
- Hidden rare fragment có drop chance.
- Unique Relic có thể account-bound trong MVP.
- NFT mint eligibility có thể giới hạn theo rarity/season.

---

## 14. Difficulty Scaling

### 14.1. Difficulty goals

Daily Dream phải:

- Dễ tiếp cận.
- Không quá phạt casual.
- Vẫn có thử thách cho người chơi mạnh.
- Cho phép rarity cao khó hơn.

### 14.2. Scaling inputs

Difficulty có thể dựa trên:

- Player level.
- Highest Beast level.
- Selected Beast level.
- Dream rarity.
- Realm.
- Corruption level.
- Building bonus.
- New player protection.

### 14.3. MVP scaling recommendation

MVP dùng selected Beast level:

```text
EnemyLevel = SelectedBeastLevel + RarityModifier + RealmModifier
```

RarityModifier:

| Rarity | Modifier |
|---|---:|
| Common | -1 |
| Rare | 0 |
| Epic | +1 |
| Legendary | +2 |
| Mythic | +3 |

Clamp:

```text
EnemyLevel = clamp(EnemyLevel, MinLevelForRealm, MaxLevelForRealm)
```

### 14.4. Enemy stat scaling

```text
EnemyHP = BaseHP × LevelMultiplier × RarityMultiplier
EnemyATK = BaseATK × LevelMultiplier × RarityMultiplier
EnemyDEF = BaseDEF × LevelMultiplier
```

Example multipliers:

```json
{
  "Common": 0.9,
  "Rare": 1.0,
  "Epic": 1.15,
  "Legendary": 1.35,
  "Mythic": 1.6
}
```

### 14.5. New player protection

Trong 3 ngày đầu:

- Không spawn Epic+ nếu chưa hoàn tutorial.
- Enemy damage giảm nhẹ.
- Hidden condition đơn giản hơn.
- Boss có telegraph rõ hơn.
- Failed run có consolation reward.

---

## 15. Reward Integration

### 15.1. Reward timing

Reward có 3 cấp:

#### Micro reward

Nhận trong run:

- Small fragment.
- Temporary buff.
- Healing.
- Lore hint.

#### Combat reward

Sau battle:

- EXP.
- Minor fragment chance.
- Node state progress.

#### Ending reward

Sau completion:

- Main fragment.
- Relic chance.
- Beast/Building fragment.
- Corruption delta.
- Archive entry.
- Metadata item.

### 15.2. Reward must match ending

| Ending | Reward type |
|---|---|
| Purify | Stable Fragment, Light/Memory, Archive reputation |
| Corrupt | Nightmare Shard, stronger material, corruption |
| Hidden | Rare fragment, unique Relic, lore metadata |
| Failed | Minor consolation |
| Abandoned | None/minimal |

### 15.3. Loot table data model

```json
{
  "lootTableId": "lantern_hidden_loot",
  "guaranteed": [
    {
      "itemType": "Fragment",
      "itemId": "memory_fragment_epic",
      "amount": 5
    },
    {
      "itemType": "LoreEntry",
      "itemId": "song_beneath_lake",
      "amount": 1
    }
  ],
  "weighted": [
    {
      "itemType": "Relic",
      "itemId": "lantern_of_forgotten_shores",
      "weight": 10
    },
    {
      "itemType": "Fragment",
      "itemId": "abyss_serpent_fragment",
      "weight": 40,
      "amount": 2
    },
    {
      "itemType": "Fragment",
      "itemId": "memory_fragment_rare",
      "weight": 50,
      "amount": 3
    }
  ]
}
```

### 15.4. Reward validation

Backend phải:

- Load run state.
- Determine ending.
- Load ending loot table.
- Apply player modifiers.
- Roll reward server-side.
- Save inventory transaction.
- Save dream history.
- Return reward summary.

### 15.5. Reward summary

Reward summary nên hiển thị:

- Dream name.
- Ending.
- Fragments.
- EXP.
- Rare drops.
- Lore entry.
- Corruption change.
- Origin metadata preview.

---

## 16. Dream Metadata

### 16.1. Purpose

Dream Metadata là dữ liệu lịch sử của item sinh ra từ Dream.

Nó giúp:

- Beast có origin.
- Building có ý nghĩa.
- Relic có câu chuyện.
- NFT có provenance.
- Player có Dream History.

### 16.2. Metadata fields

```json
{
  "originSeedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "originDreamTitle": "The Lantern Under the Lake",
  "originDate": "2026-05-24",
  "originRealm": "Ocean of Memories",
  "originRarity": "Epic",
  "originEnding": "Hidden",
  "keyChoice": "listen_to_song",
  "playerRunId": "RUN-123456",
  "metadataTags": ["ocean", "memory", "lantern", "hidden"],
  "loreQuote": "It swims through memories too deep for daylight."
}
```

### 16.3. Metadata usage

Metadata hiển thị trong:

- Beast profile.
- Relic description.
- Building info.
- Dream History.
- Web profile.
- NFT metadata.
- Marketplace listing.

### 16.4. Metadata narrative examples

Beast:

```text
Sinh ra từ “The Lantern Under the Lake”, khi Dreamwalker lắng nghe tiếng hát dưới nước và để ngọn đèn tự tắt.
```

Relic:

```text
Tìm thấy trong Hidden Ending của Ocean of Memories. Ngọn đèn này không soi đường đi, mà soi điều vẫn còn chờ được nhớ.
```

Building:

```text
Được dựng từ fragment của một giấc mơ đã được thanh tẩy trong Forest of Lost Voices.
```

---

## 17. Dream History

### 17.1. Purpose

Dream History cho phép người chơi xem lại hành trình.

Nó lưu:

- Dream đã chơi.
- Ending đã đạt.
- Reward chính.
- Beast/Relic sinh ra.
- Lore entry mở khóa.
- Key choice.

### 17.2. Dream History data

```json
{
  "userId": "USER-001",
  "runId": "RUN-123456",
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "dreamTitle": "The Lantern Under the Lake",
  "realm": "Ocean of Memories",
  "rarity": "Epic",
  "ending": "Hidden",
  "completedAt": "2026-05-24T12:15:00Z",
  "selectedBeastId": "BEAST-009",
  "keyChoices": ["listen_to_song"],
  "rewards": ["memory_fragment_epic", "lantern_relic"],
  "corruptionDelta": 0
}
```

### 17.3. UI display

Dream History card:

```text
The Lantern Under the Lake
Ocean of Memories • Epic • Hidden Ending
Completed: May 24, 2026
Key Choice: Listened to the song beneath the water
Reward: Lantern of Forgotten Shores
```

### 17.4. Archive integration

Dream History là personal record.  
Archive là lore collection.

Một dream có thể tạo cả hai:

- Personal: “Bạn đã làm gì?”
- Lore: “Dreamverse đã tiết lộ điều gì?”

---

## 18. Corruption Integration

### 18.1. Corruption sources in Dream

- Chọn Corrupt option.
- Dùng Nightmare Shrine.
- Trang bị Nightmare Relic.
- Mở Nightmare Gate route.
- Đánh bại boss bằng Corrupt action.
- Craft từ Nightmare Shard sau run.

### 18.2. Corruption effects in Dream

Corruption level có thể ảnh hưởng:

- Extra corrupt node.
- Nox dialogue.
- Enemy variant.
- Hidden corrupt path.
- Reward modifier.
- NPC fear/trust.

### 18.3. Corruption data in run

```json
{
  "startingCorruption": 24,
  "runCorruptionDelta": 8,
  "endingCorruptionDelta": 5,
  "finalCorruption": 37,
  "corruptionSources": [
    "extinguish_lantern",
    "nightmare_shrine_used"
  ]
}
```

### 18.4. Design warning

Corruption không nên chỉ là punishment.

Nó cần:

- Reward riêng.
- Content riêng.
- Nox route.
- Nightmare Relic.
- Risk rõ ràng.

Nếu không, người chơi sẽ luôn chọn Purify.

---

## 19. Dream Echo System

**Post-MVP feature.**

### 19.1. Purpose

Dream Echo cho phép người chơi replay dream cũ ở dạng yếu hơn.

Mục tiêu:

- Giảm FOMO.
- Cho player xem lại story.
- Cho farm material nhỏ.
- Không phá daily reward.

### 19.2. Rules

- Dream Echo mở sau khi dream expired.
- Chỉ available nếu player từng start hoặc unlock archive.
- Reward giảm mạnh.
- Không drop unique hidden reward.
- Không tạo NFT-origin item hiếm.
- Có thể dùng để hoàn lore missing.

### 19.3. Reward

| Reward | Daily Dream | Dream Echo |
|---|---:|---:|
| Main Fragment | Full | 20–30% |
| Rare Drop | Yes | Very low/no |
| Hidden Unique | Yes | No or account-bound only |
| Lore Entry | Yes | Yes |
| EXP | Full | Reduced |

### 19.4. Narrative framing

Dream Echo không phải dream thật. Nó là dư âm.

Text:

```text
Đây chỉ là tiếng vọng của giấc mơ đã qua. Những phần thưởng quý nhất đã chìm cùng ngày hôm đó, nhưng ký ức vẫn có thể được lắng nghe.
```

---

## 20. Backend Architecture Requirements

### 20.1. Services

Dream System backend nên chia service:

| Service | Responsibility |
|---|---|
| DreamSeedService | Tạo và publish seed |
| DreamRunService | Start/resume/complete run |
| NodeService | Validate node actions |
| EndingService | Determine ending |
| RewardService | Roll and grant reward |
| DreamHistoryService | Save completed records |
| MetadataService | Attach origin metadata |
| AntiCheatService | Validate suspicious run |

### 20.2. Database tables

#### dream_seeds

```sql
dream_seed_id
date
rarity
realm_id
dream_template_id
map_template_id
enemy_pool_id
boss_id
choice_table_id
ending_rule_set_id
loot_table_id
hidden_condition_id
visual_modifier
metadata_tags
is_global
status
created_at
expires_at
```

#### dream_runs

```sql
run_id
user_id
dream_seed_id
status
selected_beast_id
current_node_id
run_state_json
choices_json
started_at
completed_at
failed_at
reward_claimed
client_version
```

#### dream_run_nodes

```sql
run_node_id
run_id
node_id
node_type
state
completed_at
result_json
```

#### dream_history

```sql
history_id
user_id
run_id
dream_seed_id
dream_title
realm_id
rarity
ending_type
key_choices_json
reward_summary_json
corruption_delta
completed_at
```

#### dream_templates

```sql
dream_template_id
title
realm_id
allowed_rarities
content_json
status
created_at
updated_at
```

### 20.3. Run state JSON example

```json
{
  "visitedNodes": ["start", "node_01", "node_02"],
  "completedNodes": ["node_01"],
  "activeFlags": ["met_shell_child", "heard_lantern_song"],
  "defeatedEnemies": ["enemy_01"],
  "bossState": "not_started",
  "temporaryBuffs": [],
  "revealedHiddenNodes": ["hidden_lantern_depths"],
  "choicePath": "hidden_candidate",
  "corruptionDelta": 0
}
```

### 20.4. API endpoints

```text
GET  /daily-dream
POST /dream/start
GET  /dream/run/{runId}
POST /dream/node-action
POST /dream/battle-result
POST /dream/complete
POST /dream/abandon
GET  /dream/history
GET  /dream/history/{runId}
```

### 20.5. API examples

#### GET /daily-dream

Response:

```json
{
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "title": "The Lantern Under the Lake",
  "realm": "Ocean of Memories",
  "rarity": "Epic",
  "moodTags": ["melancholic", "mysterious"],
  "recommendedAffinity": ["Light", "Memory"],
  "timeLeftSeconds": 43122,
  "statusForUser": "NotStarted",
  "possibleRewards": ["Memory Fragment", "Lantern Relic", "Aquatic Beast Fragment"]
}
```

#### POST /dream/start

Request:

```json
{
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "selectedBeastId": "BEAST-009"
}
```

Response:

```json
{
  "runId": "RUN-123456",
  "mapTemplateId": "ocean_epic_03",
  "nodes": [],
  "initialState": {},
  "playerBeastSnapshot": {},
  "serverTimestamp": "2026-05-24T12:00:00Z"
}
```

---

## 21. Client Implementation Requirements

### 21.1. Unity modules

Client cần các module:

- DailyDreamScreen.
- DreamRunController.
- IsometricMapLoader.
- NodeInteractionController.
- DialogueController.
- ChoiceUI.
- BattleBridge.
- RewardSummaryUI.
- DreamStateCache.
- DreamHistoryUI.

### 21.2. Loading flow

```text
Open Daily Dream Screen
  ↓
GET /daily-dream
  ↓
Show Dream Card
  ↓
Player selects Beast
  ↓
POST /dream/start
  ↓
Load map template
  ↓
Instantiate nodes
  ↓
Enter Dream scene
```

### 21.3. Offline handling

Game should require network for:

- Start dream.
- Node reward.
- Completion reward.
- Crafting/mint.

If connection lost during dream:

- Pause and show reconnect.
- Save local temporary state.
- Re-sync with server.
- If mismatch, server state wins.

### 21.4. Anti-cheat client notes

Client should not:

- Decide final reward.
- Modify inventory locally as authority.
- Mark ending complete without server.
- Generate hidden reward locally.

Client may:

- Preview expected reward.
- Simulate battle visuals.
- Cache map data.
- Display dialogue.

---

## 22. Content Authoring Pipeline

### 22.1. Authoring roles

| Role | Responsibility |
|---|---|
| Narrative Designer | Dream premise, dialogue, ending text |
| Game Designer | Node flow, choice effect, reward logic |
| Level Designer | Map template/node layout |
| Combat Designer | Enemy/boss setup |
| Economy Designer | Loot table |
| Backend Dev | Data schema/API |
| Unity Dev | Runtime implementation |
| QA | Test dream paths |

### 22.2. Dream content package

Mỗi Dream Template cần package:

```text
/dreams/lantern_under_lake
  dream_template.json
  choice_table.json
  ending_rules.json
  loot_tables.json
  dialogue.json
  node_graph.json
  enemy_refs.json
  localization.csv
```

### 22.3. Content validation checklist

- Template has title.
- Realm exists.
- Rarity allowed.
- Map template exists.
- Enemy pool exists.
- Boss exists if required.
- All choice IDs valid.
- Ending rules reachable.
- Hidden condition has clue.
- Loot table valid.
- Localization keys complete.
- No reward table grants deprecated item.
- Metadata tags present.

### 22.4. Dream simulation tool

Long-term nên có internal tool:

- Select Dream Template.
- Select Rarity.
- Generate seed.
- Simulate node graph.
- Check ending reachability.
- Check reward output.
- Export seed.
- Preview Dream Card.

---

## 23. QA Test Plan

### 23.1. Functional tests

- Daily Dream appears.
- Countdown correct.
- Start dream works.
- Cannot start twice if completed.
- Resume works after disconnect.
- Node state saves correctly.
- Choice updates run flags.
- Hidden node reveals correctly.
- Combat win updates state.
- Combat loss fails run.
- Ending resolves correctly.
- Reward granted once.
- Dream History saved.

### 23.2. Edge cases

- App closes during combat.
- App closes after boss before reward.
- Reset happens during run.
- Player changes device mid-run.
- Player has deleted/invalid selected Beast.
- Hidden condition item removed mid-run.
- Network timeout after node reward.
- Double-click reward claim.
- Client sends invalid node action.
- Client sends impossible ending.

### 23.3. Balance tests

- Common dream average time.
- Rare dream average time.
- Epic dream average time.
- Enemy difficulty by Beast level.
- Hidden Ending discovery rate.
- Corrupt vs Purify choice distribution.
- Reward inflation.

### 23.4. Narrative tests

- Dialogue matches Realm.
- Ending text matches route.
- Reward matches story.
- Hidden clue understandable.
- No contradiction with Lore Bible.
- Metadata origin text correct.

---

## 24. Analytics Events

### 24.1. Required events

```text
daily_dream_viewed
daily_dream_started
dream_node_entered
dream_node_completed
dream_choice_selected
dream_hidden_node_revealed
dream_battle_started
dream_battle_won
dream_battle_lost
dream_boss_defeated
dream_ending_triggered
dream_completed
dream_failed
dream_abandoned
dream_reward_claimed
dream_history_viewed
```

### 24.2. Event properties

Common properties:

```json
{
  "userId": "USER-001",
  "runId": "RUN-123456",
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "realm": "ocean_of_memories",
  "rarity": "Epic",
  "playerLevel": 8,
  "selectedBeastId": "BEAST-009",
  "selectedBeastLevel": 7
}
```

Choice event:

```json
{
  "choiceId": "lantern_choice_01",
  "optionId": "listen_to_song",
  "corruptionDelta": 0,
  "revealedHidden": true
}
```

Completion event:

```json
{
  "ending": "Hidden",
  "durationSeconds": 742,
  "nodesCompleted": 17,
  "battlesWon": 4,
  "rewardValueTier": "Epic",
  "corruptionDelta": 0
}
```

### 24.3. Key metrics

- Daily Dream view rate.
- Start rate.
- Completion rate.
- Fail rate.
- Abandon rate.
- Average session length.
- Ending distribution.
- Hidden reveal rate.
- Hidden completion rate.
- Reward claim rate.
- Repeat daily participation.
- Corruption path adoption.
- Rarity excitement/retention correlation.

---

## 25. Balancing Guidelines

### 25.1. Session length targets

| Rarity | Target |
|---|---:|
| Common | 5–7 minutes |
| Rare | 7–10 minutes |
| Epic | 10–15 minutes |
| Legendary | 15–20 minutes |
| Mythic | 15–25 minutes |

### 25.2. Combat count

| Rarity | Combat Encounters |
|---|---:|
| Common | 1–2 |
| Rare | 2–3 |
| Epic | 3–4 |
| Legendary | 4–5 |
| Mythic | Custom |

### 25.3. Choice count

| Rarity | Meaningful Choices |
|---|---:|
| Common | 1 |
| Rare | 1–2 |
| Epic | 2–3 |
| Legendary | 3 |
| Mythic | Custom |

### 25.4. Reward pacing

- Common should always feel useful.
- Rare should feel slightly special.
- Epic should create anticipation.
- Legendary should be memorable.
- Mythic should feel like server event.

### 25.5. Hidden Ending rate

Target initial:

- Hidden node reveal: 15–30% of eligible players.
- Hidden ending completion: 5–15% of players.

Too high:

- Hidden no longer feels hidden.

Too low:

- Players feel system is unfair or invisible.

---

## 26. MVP Implementation Plan

### 26.1. Sprint 1 — Static Dream Prototype

Deliver:

- 1 hardcoded dream.
- 1 map template.
- 5 nodes.
- 1 enemy.
- 1 choice.
- 1 ending.
- Fake reward.

Goal:

- Validate movement → interaction → combat → reward flow.

### 26.2. Sprint 2 — Dream Seed Backend

Deliver:

- dream_seeds table.
- GET /daily-dream.
- POST /dream/start.
- Run state creation.
- Static seed loaded from backend.

Goal:

- Client loads dream from server data.

### 26.3. Sprint 3 — Node & Choice System

Deliver:

- Node state.
- Choice action.
- Run flags.
- Hidden node reveal.

Goal:

- Branching path works.

### 26.4. Sprint 4 — Ending & Reward

Deliver:

- Ending rule set.
- Reward table.
- Server reward grant.
- Reward summary.
- Dream History.

Goal:

- Full valid daily run.

### 26.5. Sprint 5 — Content Expansion

Deliver:

- 3 Dream Templates.
- 3 Realm variants.
- 3 enemy pools.
- 3 bosses/minibosses.
- 3 ending types.

Goal:

- Prove content pipeline.

### 26.6. Sprint 6 — Polish & QA

Deliver:

- Resume.
- Reset handling.
- Analytics.
- Balance pass.
- UI polish.
- Bug fixing.

Goal:

- MVP-ready Dream System.

---

## 27. Risks & Mitigations

### 27.1. Risk: System too procedural, dreams feel generic

Mitigation:

- Use authored Dream Templates.
- Procedural only for layout/variation.
- Strong narrative objects.
- Realm-specific content.

### 27.2. Risk: Too much content required

Mitigation:

- Build reusable node types.
- Reuse enemy pools.
- Use template variants.
- Start with 10–15 templates.
- Add live content gradually.

### 27.3. Risk: Hidden Ending too obscure

Mitigation:

- Add environmental clues.
- Beast reaction hint.
- Archive hint.
- Track discovery analytics.

### 27.4. Risk: Reward exploitation

Mitigation:

- Server-side rewards.
- Reward claim once.
- Run state validation.
- Suspicious action logging.
- No offline reward authority.

### 27.5. Risk: Daily FOMO frustrates players

Mitigation:

- Dream Echo after MVP.
- Consolation reward.
- No hard progression lock behind a single day.
- Weekly catch-up.

### 27.6. Risk: Reset timezone confusion

Mitigation:

- Clear countdown.
- Server-based reset.
- Grace period.
- UI shows local time equivalent.

---

## 28. Open Design Questions

1. Daily Dream reset should be UTC or regional?
2. Should all players share same Dream Seed globally?
3. Should player be allowed to retry after losing?
4. Should Hidden Ending be possible on Common dreams?
5. Should Corrupt Ending always increase Corruption?
6. Should Dream Echo exist in MVP or post-MVP?
7. Should combat rewards be granted immediately or only after completion?
8. Should player see possible endings before entering?
9. Should dream rarity be revealed fully or partially?
10. Should Building bonuses affect Daily Dream reward directly?

Recommended MVP answers:

1. Use UTC or UTC+7 depending launch region, but show countdown.
2. Yes, global seed with difficulty scaling.
3. No full retry for main reward; allow resume after crash.
4. Rare+ only for meaningful Hidden Ending.
5. Usually yes, but amount varies.
6. Post-MVP.
7. Minor rewards after combat, main reward after completion.
8. No, show only hints.
9. Reveal rarity on Dream Card.
10. Yes, but cap bonuses.

---

## 29. Glossary

| Term | Definition |
|---|---|
| Dream Seed | Server-side record defining a Daily Dream |
| Dream Template | Authored content package for a dream |
| Map Template | Layout/node graph used by a dream |
| Node | Interactive point in dream map |
| Run State | Data representing player progress in current dream |
| Ending Rule | Logic determining final outcome |
| Hidden Condition | Requirement for hidden path/ending |
| Loot Table | Reward definition |
| Metadata | Origin data attached to reward/item |
| Dream History | Personal record of completed dreams |
| Dream Echo | Replay version of expired dream |

---

## 30. Final System Statement

Dream System là trái tim của **Myth of Dreams**.

Nó không chỉ tạo nội dung mỗi ngày. Nó tạo cảm giác rằng mỗi ngày có một ký ức đang chờ được lắng nghe, một lựa chọn đang chờ được đưa ra, và một phần thưởng mang dấu ấn cá nhân đang chờ được sinh ra.

Một Daily Dream tốt phải đạt ba điều:

1. **Chơi được nhanh.**
2. **Nhớ được lâu.**
3. **Để lại dấu vết trong Dreamland của người chơi.**

Tất cả logic kỹ thuật — seed, node, ending, reward, metadata — cần phục vụ cùng một fantasy:

> Mỗi giấc mơ chỉ xuất hiện một lần, nhưng điều người chơi mang về từ nó có thể ở lại mãi mãi.\n