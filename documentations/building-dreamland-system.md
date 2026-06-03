---
title: "Building Dreamland"
description: "Myth of Dreams - Building Dreamland"
date: "2026-06-03"
category: "game-design"
order: 17
tags: ["game-design","building"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, dream_system.md, beast_system.md, relic_system.md, economy_reward_system.md, NFT_metadata.md  
**Owner:** Game Design / Economy / Art / Unity / Backend  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Building & Dreamland System** cho **Myth of Dreams**.

Dreamland là vùng đất cá nhân của người chơi trong Dreamverse. Đây là nơi người chơi trở về sau mỗi Daily Dream, đặt Building, trưng bày Beast, sử dụng Relic, xem lại Dream History và cảm nhận tiến trình cá nhân của mình.

Building là các công trình ký ức được tạo ra từ Dream Fragments. Chúng không chỉ là decor, mà còn cung cấp bonus, mở khóa hệ thống, tăng hiệu quả progression và thể hiện hành trình của người chơi.

Nếu Daily Dream là “cuộc phiêu lưu mỗi ngày”, thì Dreamland là “ngôi nhà của những giấc mơ đã được mang về”.

---

## 1. System Vision

### 1.1. Dreamland fantasy

Dreamland là vùng đất riêng của mỗi Dreamwalker.

Ban đầu, nó gần như trống rỗng, bị phủ bởi **Blank Mist**. Mỗi lần người chơi hoàn thành một Dream, mang về Fragment, tạo Beast, dựng Building hoặc đặt Relic, Dreamland dần sống lại.

Dreamland phải tạo cảm giác:

- Đây là nơi thuộc về người chơi.
- Mỗi Beast có cuộc sống ngoài combat.
- Mỗi Building là dấu tích của một Dream.
- Mỗi Relic là một ký ức được đặt vào không gian.
- Mỗi lựa chọn Purify/Corrupt/Hidden dần ảnh hưởng đến bầu không khí.

### 1.2. Building fantasy

Building trong Myth of Dreams không phải công trình bình thường. Chúng là **Memory Structures** — kiến trúc được kết tinh từ ký ức, cảm xúc và Dream Fragments.

Ví dụ:

- Một **Memory Library** được tạo từ những câu chuyện chưa kể.
- Một **Light Tower** dẫn đường cho Dream bị lạc.
- Một **Ocean Core** chứa nước từ Ocean of Memories.
- Một **Clock Shrine** giữ những khoảnh khắc không muốn trôi đi.
- Một **Nightmare Gate** mở ra phần tối của Dreamland.

### 1.3. Design statement

Building & Dreamland System phải:

> Biến phần thưởng từ Daily Dream thành một không gian sống, nơi người chơi nhìn thấy tiến trình, cá tính và lịch sử giấc mơ của mình.

### 1.4. System pillars

#### 1. Personal Progress Made Visible

Người chơi phải thấy Dreamland thay đổi theo thời gian.

Progress không chỉ là số trong inventory, mà là:

- Sương tan dần.
- Building xuất hiện.
- Beast đi lại.
- Relic phát sáng.
- Realm influence hiện trên cảnh quan.
- Corruption hoặc Purity thay đổi mood.

#### 2. Light Customization, Meaningful Bonus

Dreamland không nên quá nặng như city-builder full-scale.  
Nó cần đủ nhẹ để mobile-friendly, nhưng đủ sâu để người chơi muốn quay lại.

#### 3. Beast Habitat

Dreamland là nơi Beast sống. Building nên tương tác với Species:

- Dragon đậu lên Tower.
- Aquatic bơi trong Ocean Core.
- Avian đậu cây.
- Construct canh Gate.
- Spirit lơ lửng quanh Relic.
- Beast chạy/ngủ quanh khu đất.

#### 4. NFT-ready Buildings

Building có thể là NFT sau MVP, nhưng trước hết phải là gameplay/meta progression item có ý nghĩa.

#### 5. Choice Reflection

Dreamland nên phản ánh phong cách chơi:

- Nhiều Purify → sáng, ổn định, Archivist influence.
- Nhiều Corrupt → bóng tối, Nightmare Gate, reward mạnh nhưng rủi ro.
- Nhiều Hidden → kỳ bí, nhiều lore, secret interaction.

---

## 2. System Scope

### 2.1. MVP scope

MVP Building & Dreamland System nên bao gồm:

- Dreamland hub cơ bản.
- 1 vùng đất cá nhân.
- Grid placement đơn giản.
- 8–10 Building.
- 3–5 Beast roaming visible.
- Building bonus thụ động.
- Building crafting từ fragments.
- Building profile/info.
- Building origin metadata.
- Dream History access.
- Relic display placeholder hoặc basic pedestal.
- Dreamland progression nhẹ.
- No real NFT mint required.
- No social visiting in MVP.

### 2.2. Post-MVP scope

Sau MVP có thể mở rộng:

- Dreamland expansion.
- More zones/biomes.
- Social visits.
- Dreamland rating/showcase.
- Multiple Relic Pedestals.
- Building upgrade.
- Building skins.
- Building NFT mint.
- Marketplace.
- Dreamland events.
- Nightmare invasion.
- Beast-Beast interactions.
- Production/crafting queue.
- Guild/shared Dreamland nếu cần.

### 2.3. Not in MVP

Không đưa vào MVP:

- Full city builder.
- Resource production chain phức tạp.
- PvP base raid.
- Real-time multiplayer hub.
- Building destruction.
- Stamina farm building.
- Dozens of placement layers.
- On-chain Building bắt buộc.
- Trading Buildings before economy stable.

---

## 3. Dreamland Overview

### 3.1. What is Dreamland?

Dreamland là hub cá nhân của người chơi trong Dreamverse.

Chức năng:

- Main lobby.
- Chuẩn bị vào Daily Dream.
- Hiển thị Beast.
- Đặt Building.
- Đặt Relic hoặc Pedestal, post-MVP.
- Xem Inventory.
- Xem Dream History.
- Nhận bonus thụ động.
- Thể hiện Purity/Corruption/Hidden progress.
- Kết nối NFT Gallery/Web Profile sau MVP.

### 3.2. Dreamland narrative state

Dreamland bắt đầu với:

- Blank Mist.
- Một khoảng đất nhỏ.
- Cổng Daily Dream.
- Mira hoặc Archive fragment.
- Starter Beast Luma.
- Ít màu sắc.

Sau progression:

- Sương tan.
- Khu đất mở rộng.
- Building xuất hiện.
- Beast roaming.
- Realm objects xuất hiện.
- Light/Shadow/Memory/Emotion/Time influence.

### 3.3. Dreamland gameplay role

Dreamland hỗ trợ:

- Retention.
- Collection.
- Meta progression.
- Crafting.
- Decoration.
- Emotional attachment.
- NFT/provenance viewing.
- Pre-Dream preparation.

### 3.4. Dreamland screen priority

Dreamland phải trả lời nhanh:

1. Hôm nay Daily Dream là gì?
2. Beast nào đang active?
3. Có reward/craft/upgrade gì mới?
4. Dreamland của tôi đã thay đổi thế nào?
5. Tôi muốn đặt Building/Beast/Relic nào?

---

## 4. Dreamland Lifecycle

### 4.1. High-level lifecycle

```text
Player starts game
  ↓
Wakes in Empty Dreamland
  ↓
Completes first Daily Dream
  ↓
Receives fragments
  ↓
Crafts first Building
  ↓
Places Building in Dreamland
  ↓
Building grants bonus
  ↓
Beast interacts with Building
  ↓
Dreamland expands and reflects player history
```

### 4.2. Progression phases

| Phase | Description |
|---|---|
| Empty Dreamland | Tutorial, mostly blank |
| First Restoration | First Building, starter Beast |
| Realm Influence | Buildings from different Realms |
| Personalized Hub | Multiple Beast, several Buildings |
| Living Dreamland | Beast interactions, Relic pedestal |
| Advanced Dreamland | Expansions, events, NFT gallery |
| Corrupted/Purified Branch | Visual state changes by choices |

### 4.3. Player daily interaction loop

```text
Open Dreamland
  ↓
Check Daily Dream Card
  ↓
Collect/claim pending rewards if any
  ↓
Interact with Beast
  ↓
Craft/place/upgrade Building
  ↓
Equip Relic/choose Beast
  ↓
Start Daily Dream
  ↓
Return with rewards
```

### 4.4. MVP dreamland loop

MVP loop should be simple:

```text
Complete Daily Dream
  ↓
Get Building Fragment
  ↓
Craft Building
  ↓
Place Building
  ↓
Receive passive bonus
  ↓
See Beast interact with it
```

---

## 5. Building System Overview

### 5.1. What are Buildings?

Buildings are craftable placeable structures in Dreamland.

They provide:

- Passive bonuses.
- Visual customization.
- Beast habitat interactions.
- System unlocks.
- Lore/provenance.
- NFT-ready ownership.

### 5.2. Building roles

| Role | Description |
|---|---|
| Resource Bonus | Increase fragment/EXP/drop |
| Beast Habitat | Enables Beast behavior |
| System Unlock | Opens feature |
| Crafting Support | Reduces cost/time |
| Realm Influence | Adds Realm visuals |
| Corruption/Purity | Alters Dreamland mood |
| Display | Shows Relic/Beast/history |
| Event Building | Seasonal |

### 5.3. MVP Building categories

| Category | Examples |
|---|---|
| Core Utility | Memory Library, Crafting Shrine |
| Affinity Bonus | Light Tower, Shadow Gate |
| Species Habitat | Ocean Core, Sky Perch |
| Progression | Archive Pavilion |
| Risk/Reward | Nightmare Gate |
| Decoration | Echo Garden |

### 5.4. Building rarity

Buildings use same rarity language:

- Common.
- Rare.
- Epic.
- Legendary.
- Mythic.

Rarity affects:

- Bonus strength.
- Visual complexity.
- Size.
- Beast interactions.
- Origin value.
- NFT eligibility.

---

## 6. Building Data Structure

### 6.1. Building template

```json
{
  "buildingTemplateId": "memory_library",
  "name": "Memory Library",
  "category": "CoreUtility",
  "rarity": "Rare",
  "originRealm": "Forest of Lost Voices",
  "affinity": "Memory",
  "size": {
    "width": 3,
    "height": 2
  },
  "placementType": "Ground",
  "bonusSetId": "memory_library_bonus_01",
  "interactionTags": ["archive", "memory", "spirit_favorite"],
  "compatibleSpecies": ["Spirit", "Construct"],
  "visualAssetId": "building_memory_library",
  "iconAssetId": "icon_memory_library",
  "loreText": "Một thư viện tự viết lại mỗi khi một giấc mơ được nhớ đúng tên.",
  "mintable": true
}
```

### 6.2. Owned Building instance

```json
{
  "buildingId": "BUILDING-000123",
  "ownerId": "USER-001",
  "templateId": "memory_library",
  "level": 1,
  "rarity": "Rare",
  "isPlaced": true,
  "position": {
    "x": 6,
    "y": 4
  },
  "rotation": 0,
  "origin": {
    "seedId": "DREAM-2026-05-20-FOREST-RARE-001",
    "dreamTitle": "The Apology Tree",
    "realm": "Forest of Lost Voices",
    "ending": "Purify",
    "keyChoice": "spoke_the_lost_name",
    "birthDate": "2026-05-20"
  },
  "bonusState": {
    "active": true,
    "lastCalculatedAt": "2026-05-24T00:00:00Z"
  },
  "visualVariant": {
    "roof": "blue_ink",
    "windows": "glowing_pages",
    "aura": "soft_memory"
  },
  "mintStatus": "NotMinted",
  "nftContract": null,
  "tokenId": null,
  "createdAt": "2026-05-20T13:22:00Z"
}
```

### 6.3. Required fields

Every Building must have:

- Building ID.
- Owner ID.
- Template ID.
- Category.
- Rarity.
- Size.
- Placement data.
- Bonus set.
- Origin metadata.
- Visual asset.
- Mint status.

---

## 7. Dreamland Data Structure

### 7.1. Dreamland instance

```json
{
  "dreamlandId": "DREAMLAND-USER-001",
  "ownerId": "USER-001",
  "level": 3,
  "name": "Moonlit Archive",
  "themeState": {
    "purity": 42,
    "corruption": 18,
    "hiddenKnowledge": 7
  },
  "unlockedZones": ["center", "north_forest"],
  "gridSize": {
    "width": 16,
    "height": 16
  },
  "placedBuildings": ["BUILDING-000123", "BUILDING-000124"],
  "roamingBeasts": ["BEAST-000456", "BEAST-000789"],
  "placedRelics": [],
  "activeBonuses": ["memory_exp_bonus_01", "light_fragment_bonus_01"],
  "lastUpdatedAt": "2026-05-24T12:00:00Z"
}
```

### 7.2. Dreamland layout data

```json
{
  "layoutVersion": 1,
  "objects": [
    {
      "objectType": "Building",
      "objectId": "BUILDING-000123",
      "templateId": "memory_library",
      "position": { "x": 6, "y": 4 },
      "size": { "width": 3, "height": 2 },
      "rotation": 0
    },
    {
      "objectType": "BeastAnchor",
      "objectId": "BEAST-000456",
      "position": { "x": 3, "y": 5 }
    }
  ]
}
```

### 7.3. Theme state

Dreamland theme state can track:

| Value | Meaning |
|---|---|
| Purity | From Purify Endings, Light/Pure Buildings |
| Corruption | From Corrupt Endings, Nightmare Relics/Buildings |
| HiddenKnowledge | From Hidden Endings, Archive progress |
| RealmInfluence | Distribution of Forest/Ocean/Playground/etc |
| Activity | Recent interaction, optional |

MVP can store these but only use simple visuals.

---

## 8. Placement System

### 8.1. Placement goals

Placement should be:

- Simple.
- Mobile-friendly.
- Readable in isometric view.
- Not too restrictive.
- Easy to save/load.
- Expandable for future decoration.

### 8.2. Grid system

MVP recommendation:

- Use isometric grid.
- Buildings occupy rectangular footprint.
- Grid size starts at 12x12 or 16x16.
- Expansion increases grid.

### 8.3. Placement rules

A Building can be placed if:

- Player owns Building.
- Building is not already placed elsewhere.
- Target cells are empty.
- Target cells are unlocked.
- Placement type matches terrain.
- Not colliding with reserved objects.
- Within bounds.

### 8.4. Placement types

| Type | Use |
|---|---|
| Ground | Most Buildings |
| Water | Ocean Core, aquatic structures |
| Tall | Towers/perches |
| Gate | Edge/portal Buildings |
| Pedestal | Relic display |
| Path | Decorative roads, post-MVP |
| Floating | Spirit/Time structures, post-MVP |

### 8.5. Rotation

MVP:

- Optional.
- If art supports only one direction, skip rotation.

Post-MVP:

- 2 directions or 4 directions.
- Rotation affects footprint if needed.

### 8.6. Placement flow

```text
Open Build Mode
  ↓
Select Building
  ↓
Show ghost preview
  ↓
Move over grid
  ↓
Green = valid / Red = invalid
  ↓
Confirm placement
  ↓
Backend validates and saves
  ↓
Building appears
```

### 8.7. Move/remove

Players should be able to:

- Move Building.
- Store Building.
- Rotate if supported.
- View info.
- Upgrade if available.

MVP:

- Free move.
- No penalty.

### 8.8. Design warning

Do not punish experimentation with placement costs early. Dreamland should feel creative, not stressful.

---

## 9. Building Bonus System

### 9.1. Bonus purpose

Building bonuses support meta progression.

Bonus examples:

- Increase EXP.
- Increase fragment drop rate.
- Improve crafting.
- Unlock Dream features.
- Increase Beast behavior.
- Modify Daily Dream reward slightly.
- Reduce Corruption.
- Increase Nightmare reward with risk.

### 9.2. Bonus categories

| Category | Examples |
|---|---|
| EXP Bonus | +Beast EXP |
| Fragment Bonus | +Light/Memory/Realm fragment chance |
| Crafting Bonus | Reduced cost/time |
| Dream Bonus | Better hidden clue, shrine chance |
| Beast Bonus | Species habitat/mood |
| Relic Bonus | Pedestal/Relic effect |
| Corruption Bonus | Nightmare reward + risk |
| Archive Bonus | Lore/history unlock |

### 9.3. Bonus design rules

- Bonuses should be small but noticeable.
- Bonuses should not stack infinitely.
- Same bonus category should have cap.
- Building should not create pay-to-win.
- NFT Building should not break economy.

### 9.4. Bonus values

MVP recommended:

| Bonus Type | Common | Rare | Epic |
|---|---:|---:|---:|
| EXP bonus | +3% | +5% | +8% |
| Fragment chance | +2% | +4% | +6% |
| Craft cost reduction | 2% | 4% | 6% |
| Hidden clue chance | Small | Medium | Strong |
| Corruption reduction | -1 per dream | -2 | -3 |

Hard caps:

```text
Total EXP bonus cap: +25%
Total fragment drop bonus cap: +20%
Total crafting reduction cap: +20%
Nightmare shard bonus cap: +25% with corruption risk
```

### 9.5. Bonus data model

```json
{
  "bonusSetId": "memory_library_bonus_01",
  "bonuses": [
    {
      "type": "BEAST_EXP_BONUS",
      "value": 0.05,
      "scope": "AllBeasts"
    },
    {
      "type": "ARCHIVE_UNLOCK_HINT_BONUS",
      "value": 1,
      "scope": "MemoryDreams"
    }
  ],
  "stackingGroup": "memory_library_exp",
  "capGroup": "beast_exp_bonus"
}
```

### 9.6. Active bonus calculation

Bonuses are active if:

- Building is placed.
- Building is not disabled/corrupted, if system exists.
- Dreamland has enough space/unlocked status.
- Building level valid.
- Bonus cap not exceeded.

### 9.7. Bonus recalculation

Recalculate when:

- Building placed.
- Building removed.
- Building upgraded.
- Dreamland theme state changes.
- Daily reset.
- Login.

---

## 10. Building Types & Examples

## 10.1. Memory Library

### Basic info

| Field | Value |
|---|---|
| Category | Core Utility |
| Realm | Forest / Memory |
| Affinity | Memory |
| Rarity | Rare |
| Size | 3x2 |
| Role | EXP / Archive |

### Lore

Một thư viện tự viết lại mỗi khi một giấc mơ được nhớ đúng tên. Những cuốn sách trong đó không kể sự thật tuyệt đối, mà kể cách trái tim đã nhớ về sự thật.

### Bonus

```text
+5% Beast EXP.
Memory-related Lore Entries show stronger hints.
Spirit Beast may idle near the shelves.
```

### Beast interaction

- Spirit floats near books.
- Construct stands guard.
- Luma may sleep beside archive table.

### Origin metadata

Usually from Forest of Lost Voices or Hidden Memory Dream.

---

## 10.2. Light Tower

### Basic info

| Field | Value |
|---|---|
| Category | Affinity Bonus |
| Realm | Forest/Ocean/Light |
| Affinity | Light |
| Rarity | Rare/Epic |
| Size | 2x2 |
| Role | Light fragment / Purity |

### Lore

Ánh sáng của tòa tháp này không chiếu vào mắt, mà chiếu vào phần ký ức vẫn muốn trở về.

### Bonus

```text
+4% Light Fragment chance.
Purify Ending grants +1 Purity point.
Dragon and Avian Beast can perch here.
```

### Beast interaction

- Dragon perches.
- Avian lands on top.
- Light Beast glow brighter nearby.

---

## 10.3. Ocean Core

### Basic info

| Field | Value |
|---|---|
| Category | Species Habitat |
| Realm | Ocean of Memories |
| Affinity | Memory |
| Rarity | Rare |
| Size | 3x3 |
| Role | Aquatic habitat / Memory reward |

### Lore

Một hồ nước nhỏ chứa dòng chảy từ Ocean of Memories. Đôi khi, mặt nước phản chiếu một nơi mà người chơi chưa từng đến nhưng vẫn thấy nhớ.

### Bonus

```text
Aquatic Beast can swim naturally.
+4% Memory Fragment chance in Ocean Dreams.
Small chance to reveal Ocean hidden clue.
```

### Beast interaction

- Aquatic Beast swims.
- Spirit hovers above water.
- Lantern Relic glows near it.

---

## 10.4. Clock Shrine

### Basic info

| Field | Value |
|---|---|
| Category | Crafting Support |
| Realm | Clocktower of Time |
| Affinity | Time |
| Rarity | Epic |
| Size | 2x2 |
| Role | Crafting / cooldown |

### Lore

Một điện thờ nhỏ nơi kim đồng hồ không chỉ giờ, mà chỉ vào khoảnh khắc người ta muốn giữ lại.

### Bonus

```text
Crafting cost -5%.
Time Relic effects show enhanced hints in Clocktower Dreams.
Construct and Time Beast interact with it.
```

### Design warning

Crafting reduction must be capped.

---

## 10.5. Nightmare Gate

### Basic info

| Field | Value |
|---|---|
| Category | Risk/Reward |
| Realm | Nightmare Citadel |
| Affinity | Shadow |
| Rarity | Epic |
| Size | 3x3 |
| Role | Nightmare Shard / Corruption |

### Lore

Không ai xây chiếc cổng này. Nó xuất hiện khi Dreamland bắt đầu học cách giữ lại những điều đáng lẽ nên rời đi.

### Bonus

```text
+8% Nightmare Shard chance.
Corrupt Ending grants +1 extra Nightmare Shard chance.
Completing Dream adds +2 Corruption if gate is active.
Shadow Beast may gather near it.
```

### Beast interaction

- Shadow Beast patrols.
- Construct guards.
- Mira may comment with concern.
- Nox may appear more often.

### Design warning

Nightmare Gate must have clear risk indicator.

---

## 10.6. Echo Garden

### Basic info

| Field | Value |
|---|---|
| Category | Decoration / LUCK |
| Realm | Childhood Playground |
| Affinity | Emotion |
| Rarity | Common/Rare |
| Size | 2x2 |
| Role | LUCK / Beast interaction |

### Lore

Một khu vườn nơi tiếng cười cũ mọc thành những bông hoa nhỏ. Nếu đứng yên đủ lâu, người ta có thể nghe thấy trò chơi đã kết thúc từ lâu.

### Bonus

```text
+3% LUCK effect cap contribution.
Emotion Beast gain special idle nearby.
Echo Child related Dreams show subtle hints.
```

### Beast interaction

- Beast plays nearby.
- Avian hops around.
- Paper Dragon circles above.

---

## 10.7. Relic Pedestal

### Basic info

| Field | Value |
|---|---|
| Category | System Unlock |
| Realm | Neutral/Archive |
| Affinity | Neutral |
| Rarity | Rare |
| Size | 1x1 |
| Role | Relic display / passive |

### Lore

Một bệ đá nhỏ có thể giữ ký ức mà không làm nó nặng thêm.

### Bonus

MVP:

```text
Display one Relic visually.
```

Post-MVP:

```text
Placed Relic grants small global effect.
```

### Design note

Can be introduced after Relic System is stable.

---

## 10.8. Archive Pavilion

### Basic info

| Field | Value |
|---|---|
| Category | Archive / History |
| Realm | Neutral/Memory |
| Affinity | Memory |
| Rarity | Rare |
| Size | 3x2 |
| Role | Dream History / Lore |

### Lore

Nơi Mira lưu lại những giấc mơ đã được gọi đúng tên. Một số trang giấy chỉ hiện chữ vào ban đêm.

### Bonus

```text
Unlocks expanded Dream History.
Hidden Ending lore entries easier to track.
```

### UI function

- Opens Archive.
- Shows Dream History.
- Shows unlocked Lore Entries.

---

## 10.9. Sky Perch

### Basic info

| Field | Value |
|---|---|
| Category | Species Habitat |
| Realm | Neutral/Light |
| Affinity | Light/Emotion |
| Rarity | Common/Rare |
| Size | 2x2 |
| Role | Dragon/Avian habitat |

### Bonus

```text
Avian and Dragon Beast gain special idle.
+2% SPD-related training bonus, post-MVP.
```

### Design note

Good early decorative Building.

---

## 10.10. Dreamwell

### Basic info

| Field | Value |
|---|---|
| Category | Resource / Utility |
| Realm | Neutral |
| Affinity | Memory |
| Rarity | Common |
| Size | 2x2 |
| Role | Starter utility |

### Lore

Một cái giếng không chứa nước, mà chứa những giấc mơ nhỏ rơi ra khỏi túi người ngủ.

### Bonus

```text
Daily first Dream completion grants +1 common fragment.
```

### Design warning

Keep reward low to avoid economy inflation.

---

## 11. Building Crafting System

### 11.1. Core concept

Buildings are created by assembling Building Fragments. In lore, this is called **Dream Construction** or **Memory Architecture**.

### 11.2. Inputs

- Building Fragment.
- Realm Fragment.
- Memory Fragment.
- Nightmare Shard, for corrupt Buildings.
- Special blueprint.
- Event material.

### 11.3. Crafting cost

| Building Rarity | Cost |
|---|---:|
| Common | 10–15 Building Fragments |
| Rare | 25–40 Building Fragments |
| Epic | 50–80 Building Fragments + Realm material |
| Legendary | Boss/Guardian fragments |
| Mythic | Unique/story/event condition |

### 11.4. Fixed recipe vs random craft

Recommendation:

- Use fixed recipe.
- No random Building outcome in MVP.

Reason:

- Dreamland planning requires clarity.
- Avoid gacha feeling.
- Easier economy balance.

### 11.5. Blueprint system

Some Buildings require blueprint unlock.

Blueprint sources:

- Main story.
- Realm milestone.
- Hidden Ending.
- Boss drop.
- Event.

Example:

```text
Ocean Core blueprint unlocks after first Ocean of Memories clear.
Nightmare Gate blueprint unlocks after first Corrupt Ending.
```

### 11.6. Crafting flow

```text
Open Building Craft
  ↓
Select Recipe
  ↓
Preview size/bonus/lore
  ↓
Confirm
  ↓
Backend consumes fragments
  ↓
Backend creates Building instance
  ↓
Player enters placement mode
  ↓
Place or store Building
```

### 11.7. Origin metadata

If crafted from fragments from multiple Dreams, origin should be:

1. Highest rarity source.
2. Dominant Realm source.
3. Final blueprint source.
4. Craft date if generic.

Example:

```text
Memory Library crafted mostly from The Apology Tree fragments:
Origin Dream = The Apology Tree.
```

### 11.8. Nightmare Building crafting

Nightmare Buildings require Nightmare Shards.

Rules:

- Stronger reward bonus.
- Adds Corruption.
- Visual effect on Dreamland.
- Nox/Mira dialogue changes.

---

## 12. Building Upgrade System

### 12.1. MVP recommendation

Do not make Building upgrades too deep in MVP.

MVP can support:

- Level 1 only.
- Or Level 1–3 for 3 core Buildings.

### 12.2. Post-MVP upgrade

Building upgrade can improve:

- Bonus value.
- Visual complexity.
- Beast interaction.
- Dreamland expansion points.
- NFT metadata level, if dynamic backend.

### 12.3. Upgrade cost

| Level | Cost |
|---:|---|
| 2 | Building Fragments + Realm Fragment |
| 3 | More fragments + Relic Fragment |
| 4 | Rare material |
| 5 | Blueprint/core item |

### 12.4. Upgrade example

Memory Library:

| Level | Bonus |
|---:|---|
| 1 | +5% Beast EXP |
| 2 | +7% Beast EXP |
| 3 | +8% Beast EXP + Archive hint |
| 4 | +10% Beast EXP |
| 5 | Unlock Dream History visual gallery |

### 12.5. Upgrade visual

Building upgrade should visibly change:

- More lights.
- More details.
- Larger aura.
- Extra animation.
- Additional Beast interaction.

### 12.6. Design warning

Upgrade bonuses must be capped.

Avoid creating mandatory max-level buildings before economy is stable.

---

## 13. Dreamland Expansion

### 13.1. Purpose

Expansion gives long-term progression.

### 13.2. MVP approach

MVP can start with enough space and no expansion, or simple expansion milestones.

Recommendation:

- Start 12x12 or 16x16.
- Unlock 1 extra zone after early progression.

### 13.3. Expansion sources

- Dreamwalker Rank.
- Complete number of Daily Dreams.
- Craft Building count.
- Complete Hidden Ending.
- Purify Corruption milestone.
- Realm Guardian defeat.

### 13.4. Expansion zones

| Zone | Unlock |
|---|---|
| Center | Default |
| North Forest Edge | Forest milestone |
| East Shore | Ocean milestone |
| Sunset Playground | Playground milestone |
| Clock Ruins | Clocktower milestone |
| Nightmare Edge | Corruption/Nightmare milestone |

### 13.5. Expansion narrative

Expansion can be shown as Blank Mist receding.

Text example:

```text
The Blank Mist pulls away. Something in your Dreamland remembers the shape of a shore.
```

### 13.6. Expansion gameplay

New zones can allow:

- More Building slots.
- Special terrain.
- Water placement.
- Tall Building placement.
- Nightmare placement.
- Species habitat.

---

## 14. Beast Roaming System

### 14.1. Purpose

Beast roaming makes Dreamland feel alive.

### 14.2. MVP visible Beast limit

Recommended:

```text
Visible roaming Beast: 3–5
```

Players can choose which Beast roam.

### 14.3. Roaming data

```json
{
  "beastId": "BEAST-000456",
  "roaming": true,
  "anchorPosition": { "x": 3, "y": 5 },
  "behaviorSet": "aquatic_memory_swim",
  "favoriteBuildingId": "BUILDING-000123"
}
```

### 14.4. Behavior by Species

| Species | Dreamland Behavior |
|---|---|
| Dragon | Fly, perch on Tower |
| Avian | Perch, short flight |
| Beast | Run, sleep, play |
| Aquatic | Swim in Ocean Core/water |
| Spirit | Float, fade, hover near Relic |
| Construct | Guard, patrol slowly |

### 14.5. Building interactions

Examples:

- Dragon → Light Tower, Sky Perch.
- Avian → Sky Perch, Echo Garden.
- Aquatic → Ocean Core.
- Spirit → Memory Library, Relic Pedestal.
- Construct → Nightmare Gate, Archive Pavilion.
- Beast → Echo Garden, Dreamwell.

### 14.6. Tap interaction

When player taps Beast:

- Beast reacts.
- Shows name.
- Opens Beast profile if tapped again or button pressed.
- Plays SFX.
- Optional affection sparkle.

No reward required in MVP to avoid click-farm behavior.

### 14.7. Beast mood and Dreamland state

Post-MVP:

- High Corruption affects Light Beast mood.
- Ocean Core improves Aquatic mood.
- Echo Garden improves Emotion Beast mood.
- Nightmare Gate attracts Shadow Beast.

MVP can reflect only via simple animation triggers.

---

## 15. Relic & Dreamland Integration

### 15.1. MVP

MVP integration:

- Relics shown in Beast profile.
- Relic Pedestal can be placeholder Building.
- Some Relics can trigger Dreamland visual glow if equipped.

### 15.2. Post-MVP Relic Pedestal

Relic Pedestal allows placing a Relic for global effect.

Rules:

- One active pedestal initially.
- Placed Relic cannot be equipped.
- Effect is small.
- Some Relics have special visuals.

### 15.3. Pedestal effect examples

| Relic | Pedestal Effect |
|---|---|
| Lantern of Forgotten Shores | Ocean hidden hints stronger |
| Broken Toy Crown | Echo Child dreams more likely to reveal clue |
| Clockglass Loop | Crafting reduction |
| Nightmare Thorn | Nightmare Shard chance +, Corruption + |
| Apology Thread | Reduces Corruption gain slightly |

### 15.4. Design warning

Do not let Dreamland Relic effects create too many stacking bonuses.

---

## 16. Dream History & Archive Integration

### 16.1. Dream History in Dreamland

Dreamland should provide access to Dream History through:

- Archive Pavilion.
- Mira’s Archive Book.
- Memory Library.
- UI shortcut.

### 16.2. Dream History card

Display:

- Dream name.
- Date.
- Realm.
- Rarity.
- Ending.
- Key reward.
- Key choice.
- Origin items born from it.

Example:

```text
The Lantern Under the Lake
Ocean of Memories • Epic • Hidden Ending
Reward: Lantern of Forgotten Shores, Abyss Serpent Fragment
Key Choice: Listened to the song beneath the water
```

### 16.3. Archive progression

Archive can track:

- Lore entries.
- Realm completion.
- Hidden endings.
- Boss records.
- Beast origins.
- Relic origins.
- Building origins.

### 16.4. Dreamland visual memory

Post-MVP:

- Important Dream can create a small memory object in Dreamland.
- Example: a tiny underwater lantern near Ocean Core.
- Not necessarily gameplay bonus.

---

## 17. Purity, Corruption & Dreamland Mood

### 17.1. Purpose

Dreamland should reflect player choices.

### 17.2. Inputs

Purity increases from:

- Purify Ending.
- Light Tower.
- Cleansing Building.
- Pure Relics.
- Dream Archivist quests.

Corruption increases from:

- Corrupt Ending.
- Nightmare Relic.
- Nightmare Gate.
- Nightmare Shard crafting.
- Corrupt Buildings.

HiddenKnowledge increases from:

- Hidden Ending.
- Archive entries.
- Key Relics.
- Lore discoveries.

### 17.3. Mood effects

| State | Visual |
|---|---|
| High Purity | Brighter light, clearer sky, more soft particles |
| High Corruption | Dark cracks, purple fog, Nightmare Gate glow |
| High HiddenKnowledge | Subtle runes, stars, Archive pages floating |
| Balanced | Mixed natural dream tone |

### 17.4. Gameplay effects

MVP:

- Minimal gameplay effect.
- Mostly visual/UI.

Post-MVP:

- Purity: reduce Corruption gain.
- Corruption: increase Nightmare rewards/risk.
- HiddenKnowledge: improve hidden clue frequency.

### 17.5. Thresholds

| Value | Tier |
|---:|---|
| 0–20 | Low |
| 21–50 | Moderate |
| 51–80 | High |
| 81–100 | Extreme |

### 17.6. Design warning

Do not punish Corruption so hard that players avoid it entirely.

Corruption should be a path, not just a penalty.

---

## 18. Building NFT Readiness

### 18.1. NFT principle

Building NFT should represent ownership, provenance and visual identity.

Building gameplay must work off-chain first.

### 18.2. Mint eligibility

A Building can be mintable if:

- Player owns it.
- It is not temporary.
- It has origin metadata.
- It is not in active trade/listing.
- It is not a starter/tutorial-only object unless allowed.
- It meets rarity or level requirement if needed.

### 18.3. Mint status

| Status | Meaning |
|---|---|
| NotMinted | Off-chain |
| MintEligible | Can be minted |
| MintPending | Transaction pending |
| Minted | On-chain NFT |
| Listed | Marketplace listing |
| Transferred | Owner changed |
| Burned | Burned, if supported |

### 18.4. Building NFT metadata

```json
{
  "name": "Memory Library",
  "type": "Building",
  "category": "CoreUtility",
  "rarity": "Rare",
  "originRealm": "Forest of Lost Voices",
  "originDream": "The Apology Tree",
  "originSeed": "DREAM-2026-05-20-FOREST-RARE-001",
  "originEnding": "Purify",
  "birthDate": "2026-05-20",
  "bonusSummary": "+5% Beast EXP",
  "visualVariant": {
    "roof": "blue_ink",
    "windows": "glowing_pages"
  },
  "loreQuote": "A library that writes only what the heart refuses to forget."
}
```

### 18.5. NFT image

Building NFT image can be:

- Isometric building card.
- Rarity frame.
- Realm background.
- Origin stamp.
- Animated version for Epic+ later.

### 18.6. Trading restrictions

- Cannot trade Building if placed in active Dreamland without removing first.
- Cannot trade locked/favorite Building.
- Cannot trade story-critical/account-bound Building.
- If transferred, backend must remove from old Dreamland layout.

### 18.7. Pay-to-win mitigation

If Building bonuses affect rewards:

- Cap total bonuses.
- PvP unaffected.
- Marketplace Building bonuses should be modest.
- Cosmetic/provenance/visual value emphasized.

---

## 19. Dreamland Social Features

**Post-MVP.**

### 19.1. Visit Dreamland

Players can visit other Dreamlands.

Features:

- View layout.
- View roaming Beast.
- View featured Relics/Buildings.
- Like/favorite.
- Share profile.

### 19.2. Social restrictions

Visitors cannot:

- Move objects.
- Collect resources.
- Trigger private rewards.
- Interact with marketplace listing unless through UI.

### 19.3. Showcase mode

Player can choose:

- Featured Beast.
- Featured Building.
- Featured Relic.
- Dreamland title.
- Favorite Dream History card.

### 19.4. Social rewards

Avoid exploitable rewards.

Possible:

- Cosmetic badge.
- Profile likes.
- Seasonal decoration.
- No direct fragment farming from visits.

---

## 20. Dreamland Events

**Post-MVP.**

### 20.1. Event types

| Event | Description |
|---|---|
| Nightmare Invasion | High Corruption event |
| Memory Bloom | Archive/HiddenKnowledge event |
| Lantern Festival | Ocean/Light event |
| Echo Playday | Childhood/Emotion event |
| Time Freeze | Clocktower event |

### 20.2. Nightmare Invasion

Triggered by:

- High Corruption.
- Nightmare Gate.
- Seasonal event.

Effects:

- Nightmare enemy appears in Dreamland.
- Optional battle.
- Nightmare reward.
- Risk of temporary Building debuff.

Design warning:

- Should be optional/fun, not punishing base attack.

### 20.3. Memory Bloom

Triggered by:

- Hidden Ending streak.
- Archive Pavilion.
- Memory Library.

Effects:

- Lore clue.
- Cosmetic flowers/pages.
- Small hidden hint bonus.

### 20.4. Event rewards

- Cosmetic decoration.
- Temporary aura.
- Event fragment.
- Lore entry.
- Profile title.

---

## 21. UI/UX Requirements

### 21.1. Dreamland main screen

Must show:

- Dreamland view.
- Player name/level.
- Daily Dream card.
- Start Dream button.
- Beast roaming.
- Building interactions.
- Inventory shortcut.
- Build mode button.
- Archive/Dream History.
- Corruption/Purity indicator, optional MVP.
- Notifications.

### 21.2. Build mode UI

Build mode includes:

- Building inventory.
- Category filter.
- Placement grid.
- Ghost preview.
- Confirm/cancel.
- Rotate, if supported.
- Store/move button.
- Info button.

### 21.3. Building profile UI

Show:

- Building name.
- Rarity.
- Category.
- Realm.
- Bonus.
- Level.
- Origin Dream.
- Lore text.
- NFT/mint status later.
- Move/store/upgrade buttons.

### 21.4. Bonus overview UI

Player should see active Dreamland bonuses.

Example:

```text
Active Dreamland Bonuses
- Beast EXP +5%
- Memory Fragment chance +4%
- Light Fragment chance +4%
- Nightmare Shard chance +8% / Corruption +2
```

### 21.5. Dreamland mood UI

Optional MVP:

- Purity.
- Corruption.
- Hidden Knowledge.

Show as simple icons/bars.

Avoid overwhelming early players.

### 21.6. Mobile UX

- Large buttons.
- Tap-to-select object.
- Drag placement.
- Pinch zoom optional.
- Snap to grid.
- Avoid tiny hitboxes.
- Build mode must be clear and reversible.

---

## 22. Art Direction

### 22.1. Dreamland base style

- 2D isometric.
- Surreal fantasy.
- Soft dream lighting.
- Purple/blue/pink/gold palette.
- Blank Mist edges.
- Gentle animation.

### 22.2. Building visual rules

Each Building should show:

- Realm origin.
- Rarity.
- Function category.
- Interactable state if relevant.
- Space for Beast interaction.

### 22.3. Realm visual influence

| Realm | Building visual language |
|---|---|
| Forest | Wood, leaves, whispers, paper strips |
| Ocean | Water, shells, glass, lanterns |
| Playground | Toys, chalk, sunset colors |
| Clocktower | Brass, gears, hourglass |
| Citadel | Black stone, thorns, broken crowns |
| Archive | Books, pages, ink, glowing script |

### 22.4. Building rarity visuals

| Rarity | Visual |
|---|---|
| Common | Simple model |
| Rare | Extra details/light |
| Epic | Animation/particles |
| Legendary | Unique silhouette |
| Mythic | Unique VFX/idle scene |

### 22.5. Dreamland mood visuals

Purity:

- Clear light.
- White/gold particles.
- Soft bloom.
- Clean water.

Corruption:

- Purple fog.
- Black cracks.
- Red glow.
- Thorn growth.

HiddenKnowledge:

- Floating pages.
- Soft runes.
- Star-like motes.
- Whispering glyphs.

### 22.6. Performance art constraints

MVP:

- Limit active particle count.
- Limit visible Beast.
- Use sprite atlases.
- Avoid too many animated Buildings at once.
- Provide low-end mobile mode.

---

## 23. Animation Requirements

### 23.1. Building animation levels

Common:

- Idle static or subtle glow.

Rare:

- Small loop animation.

Epic:

- Particle or moving element.

Legendary:

- Unique animation.

Mythic:

- Special scene-like animation.

### 23.2. Required Building animations

MVP minimum:

- Idle.
- Placement appear.
- Tap/select highlight.
- Active bonus glow, optional.
- Upgrade animation, if upgrades exist.

### 23.3. Specific Building animations

Memory Library:

- Pages flutter.
- Window glow.

Light Tower:

- Beacon pulse.
- Dragon/Avian perch point.

Ocean Core:

- Water ripple.
- Aquatic swim path.

Nightmare Gate:

- Slow dark pulse.
- Crack glow.

Echo Garden:

- Flower sway.
- Toy sparkle.

### 23.4. Beast interaction animations

Post-MVP but should reserve anchors:

- Perch point.
- Swim path.
- Guard point.
- Sleep point.
- Hover point.

---

## 24. Audio Requirements

### 24.1. Dreamland ambience

Dreamland should have:

- Soft ambient bed.
- Light wind.
- Magical chimes.
- Realm-influenced layers.
- Mood layers for Corruption/Purity.

### 24.2. Building SFX

Each Building category can share SFX:

| Category | SFX |
|---|---|
| Library | Page turn, ink shimmer |
| Tower | Soft beacon chime |
| Ocean | Water ripple |
| Clock | Tick, soft bell |
| Nightmare | Low hum, crackle |
| Garden | Toy chime, leaf sway |

### 24.3. Interaction SFX

- Place Building.
- Move Building.
- Store Building.
- Upgrade Building.
- Tap Beast.
- Open Archive.
- Daily Dream portal.

### 24.4. Dynamic audio

Post-MVP:

- High Corruption adds low hum.
- High Purity adds chime.
- Ocean Core adds water layer.
- Clock Shrine adds faint ticking.

---

## 25. Backend Requirements

### 25.1. Tables

#### building_templates

```sql
building_template_id
name
category
rarity
origin_realm
affinity
width
height
placement_type
bonus_set_id
interaction_tags_json
compatible_species_json
visual_asset_id
icon_asset_id
lore_text
mintable
status
created_at
updated_at
```

#### user_buildings

```sql
building_id
owner_id
template_id
level
rarity
is_placed
position_x
position_y
rotation
origin_json
bonus_state_json
visual_variant_json
mint_status
nft_contract
token_id
is_locked
is_favorite
created_at
updated_at
```

#### dreamlands

```sql
dreamland_id
owner_id
name
level
grid_width
grid_height
theme_state_json
unlocked_zones_json
active_bonuses_json
created_at
updated_at
```

#### dreamland_layouts

```sql
layout_id
dreamland_id
layout_version
objects_json
updated_at
```

#### building_fragments

```sql
fragment_id
owner_id
fragment_type
building_template_id
realm_id
affinity
rarity
source_seed_id
quantity
created_at
updated_at
```

#### building_crafting_logs

```sql
craft_id
owner_id
recipe_id
input_fragments_json
output_building_id
origin_seed_id
result_json
created_at
```

#### building_bonus_sets

```sql
bonus_set_id
bonuses_json
cap_group_json
version
status
created_at
updated_at
```

### 25.2. Services

| Service | Responsibility |
|---|---|
| DreamlandService | Load/save Dreamland |
| BuildingTemplateService | Load Building templates |
| UserBuildingService | Manage owned Buildings |
| BuildingPlacementService | Validate placement |
| BuildingCraftingService | Craft Buildings |
| BuildingBonusService | Calculate active bonuses |
| DreamlandThemeService | Purity/Corruption/Hidden state |
| BeastRoamingService | Manage visible Beast |
| BuildingMetadataService | Origin metadata |
| BuildingMintService | NFT readiness |

### 25.3. API endpoints

```text
GET  /dreamland
POST /dreamland/rename
GET  /dreamland/layout
POST /dreamland/layout/save

GET  /buildings
GET  /buildings/{buildingId}
GET  /building-fragments
GET  /building-recipes
POST /buildings/craft
POST /buildings/{buildingId}/place
POST /buildings/{buildingId}/move
POST /buildings/{buildingId}/store
POST /buildings/{buildingId}/upgrade
POST /buildings/{buildingId}/lock
POST /buildings/{buildingId}/favorite

GET  /dreamland/bonuses
POST /dreamland/roaming-beasts
GET  /buildings/{buildingId}/metadata
POST /buildings/{buildingId}/mint
```

### 25.4. Place Building API example

Request:

```json
{
  "buildingId": "BUILDING-000123",
  "position": {
    "x": 6,
    "y": 4
  },
  "rotation": 0
}
```

Response:

```json
{
  "success": true,
  "building": {
    "buildingId": "BUILDING-000123",
    "name": "Memory Library",
    "position": {
      "x": 6,
      "y": 4
    },
    "activeBonus": "+5% Beast EXP"
  },
  "activeBonuses": [
    {
      "type": "BEAST_EXP_BONUS",
      "value": 0.05
    }
  ]
}
```

### 25.5. Server authority

Backend must validate:

- Ownership.
- Placement bounds.
- Collision.
- Zone unlock.
- Terrain type.
- Building state.
- Bonus caps.
- Crafting cost.
- Mint eligibility.

Client can preview placement, but server confirms.

---

## 26. Client Requirements

### 26.1. Unity modules

- DreamlandSceneController.
- DreamlandGridManager.
- BuildingInventoryUI.
- BuildModeController.
- BuildingPlacementController.
- BuildingView.
- BuildingBonusDisplay.
- BeastRoamingController.
- DreamlandThemeController.
- DreamHistoryEntryPoint.
- DreamlandSaveSync.
- DreamlandPerformanceManager.

### 26.2. Load flow

```text
Enter Dreamland Scene
  ↓
GET /dreamland
  ↓
GET /dreamland/layout
  ↓
Load terrain/zones
  ↓
Spawn placed Buildings
  ↓
Spawn selected roaming Beast
  ↓
Apply theme state
  ↓
Show UI
```

### 26.3. Build mode flow

```text
Player taps Build
  ↓
Open Building Inventory
  ↓
Select Building
  ↓
Show ghost preview
  ↓
Client checks local validity
  ↓
Player confirms
  ↓
POST place/move
  ↓
Server validates
  ↓
Commit layout
```

### 26.4. Performance requirements

MVP target:

- Mobile-friendly.
- 3–5 Beast roaming.
- 8–15 placed Buildings.
- Limited particles.
- Object pooling.
- Sprite atlasing.
- Avoid heavy dynamic lights.

### 26.5. Offline handling

Dreamland can be viewed with cached layout, but changes require server.

If offline:

- Allow viewing.
- Disable placement/crafting.
- Show reconnect message.

---

## 27. Economy Requirements

### 27.1. Building economy role

Buildings are long-term fragment sinks and meta progression.

They create demand for:

- Building Fragment.
- Realm Fragment.
- Nightmare Shard.
- Blueprint.
- Upgrade material.

### 27.2. Reward sources

Building Fragments come from:

- Daily Dream ending.
- Puzzle nodes.
- Hidden Ending.
- Boss.
- Realm milestone.
- Event.
- Dreamland activity, post-MVP.

### 27.3. Bonus economy risks

Risks:

- Fragment drop bonus inflation.
- EXP scaling too fast.
- NFT Building pay-to-win.
- Corrupt Building too efficient.
- Too many passive rewards.

Mitigation:

- Bonus caps.
- Small values.
- No offline idle farming in MVP.
- Corrupt buildings have risk.
- PvP unaffected.
- Marketplace limitations.

### 27.4. Building duplicates

Player may own duplicates.

Uses:

- Place multiple if bonus cap allows.
- Different visual variants.
- Trade/mint later.
- Convert to Dream Essence, post-MVP.

MVP:

- Allow duplicates.
- Cap bonuses by group.

### 27.5. Account-bound Buildings

Account-bound:

- Starter Dreamwell.
- Main story Archive Pavilion.
- Tutorial Building.
- Critical system unlock Buildings.

Tradable later:

- Optional bonus Buildings.
- Decorative Buildings.
- Event Buildings.
- Duplicates.

---

## 28. Content Pipeline

### 28.1. Building creation workflow

```text
Narrative defines building concept/lore
  ↓
Game Design defines category/bonus/role
  ↓
Economy balances crafting cost and bonus
  ↓
Art creates isometric asset/icon
  ↓
Animation/VFX creates idle loops
  ↓
Backend adds template and bonus data
  ↓
Unity implements placement and visuals
  ↓
QA tests placement/bonus/performance
```

### 28.2. Building checklist

- [ ] Name.
- [ ] Category.
- [ ] Rarity.
- [ ] Origin Realm.
- [ ] Affinity.
- [ ] Size.
- [ ] Placement type.
- [ ] Bonus.
- [ ] Bonus cap group.
- [ ] Crafting recipe.
- [ ] Blueprint source.
- [ ] Lore text.
- [ ] Visual asset.
- [ ] Icon.
- [ ] Idle animation.
- [ ] Beast interaction anchors.
- [ ] NFT metadata fields.
- [ ] QA test cases.

### 28.3. Dreamland zone checklist

- [ ] Zone name.
- [ ] Unlock condition.
- [ ] Terrain type.
- [ ] Placement rules.
- [ ] Visual theme.
- [ ] Audio layer.
- [ ] Beast behavior support.
- [ ] Story text.

---

## 29. QA Test Plan

### 29.1. Dreamland load tests

- Dreamland loads correctly.
- Empty Dreamland state works.
- Buildings spawn at saved positions.
- Beast roaming appears.
- Theme state applies.
- Layout version compatible.

### 29.2. Placement tests

- Valid placement succeeds.
- Invalid collision rejected.
- Out-of-bounds rejected.
- Locked zone rejected.
- Wrong terrain rejected.
- Move Building works.
- Store Building works.
- Server validation matches client preview.

### 29.3. Building crafting tests

- Recipe shown.
- Fragment cost correct.
- Insufficient fragments rejected.
- Craft creates Building.
- Origin metadata correct.
- Duplicate craft request rejected.
- Blueprint requirement works.

### 29.4. Bonus tests

- Bonus activates when placed.
- Bonus deactivates when stored.
- Bonus cap works.
- Duplicate Building cap works.
- Corrupt Building risk applies.
- Bonus affects Dream reward correctly.
- Bonus does not affect PvP if not intended.

### 29.5. Beast interaction tests

- Dragon perches on Tower.
- Aquatic swims in Ocean Core.
- Beast tap reaction works.
- Visible Beast limit respected.
- No pathfinding stuck.
- Performance remains stable.

### 29.6. Theme state tests

- Purity changes visual state.
- Corruption changes visual state.
- Nightmare Gate adds corruption.
- HiddenKnowledge unlocks visual hints.
- Values save/load correctly.

### 29.7. Security tests

- Cannot place Building not owned.
- Cannot duplicate Building via layout save.
- Cannot exceed grid bounds.
- Cannot bypass blueprint.
- Cannot mint unowned Building.
- Cannot trade placed Building without removal if rule applies.

---

## 30. Analytics Events

### 30.1. Required events

```text
dreamland_opened
dreamland_renamed
building_fragment_acquired
building_crafted
building_placed
building_moved
building_stored
building_upgraded
building_bonus_activated
building_bonus_capped
beast_roaming_set
beast_dreamland_interacted
dreamland_zone_unlocked
dreamland_theme_changed
archive_opened_from_dreamland
building_mint_eligible
building_minted
```

### 30.2. Event properties

```json
{
  "userId": "USER-001",
  "dreamlandLevel": 3,
  "buildingId": "BUILDING-000123",
  "templateId": "memory_library",
  "rarity": "Rare",
  "category": "CoreUtility",
  "originRealm": "Forest of Lost Voices",
  "position": {
    "x": 6,
    "y": 4
  },
  "activeBonusType": "BEAST_EXP_BONUS",
  "activeBonusValue": 0.05
}
```

### 30.3. Key metrics

- Dreamland open rate.
- Building craft rate.
- Building placement rate.
- Most placed Building.
- Most stored Building.
- Bonus usage distribution.
- Dreamland interaction time.
- Beast tap interaction rate.
- Corruption/Purity distribution.
- Building fragment sink rate.
- NFT mint eligibility rate later.

---

## 31. Balance Guidelines

### 31.1. Bonus balance

Building bonuses should be:

- Helpful.
- Small.
- Capped.
- Easy to understand.
- Not required for core progression.

### 31.2. Avoid idle-game drift

Dreamland should not become an idle resource factory in MVP.

Avoid:

- Hourly resource collection.
- Mandatory check-ins.
- Long timers.
- Too many production chains.

Focus on:

- Placement.
- Bonus.
- Beast life.
- Progress visibility.

### 31.3. Corrupt Building balance

Corrupt Buildings must be tempting but risky.

Example:

```text
Nightmare Gate:
+8% Nightmare Shard chance
+2 Corruption per completed Dream while active
```

### 31.4. NFT Building balance

If Buildings are tradable:

- Cap bonuses.
- Avoid exclusive overpowered Buildings.
- Cosmetic and provenance value should dominate.
- PvP unaffected.

### 31.5. Space balance

If space is too limited, placement feels frustrating.  
If space is too large, Dreamland feels empty.

MVP recommendation:

- Start with medium space.
- Use Blank Mist edges.
- Unlock expansions gradually.

---

## 32. MVP Implementation Plan

### Sprint 1 — Dreamland Scene Foundation

Deliver:

- Dreamland scene.
- Empty land.
- Camera.
- Basic UI.
- Daily Dream entry button.

### Sprint 2 — Building Data & Inventory

Deliver:

- Building template schema.
- User Building schema.
- Building inventory UI.
- 3 Building templates.

### Sprint 3 — Placement System

Deliver:

- Isometric grid.
- Place/move/store Building.
- Server validation.
- Save/load layout.

### Sprint 4 — Building Crafting

Deliver:

- Building fragments.
- Craft recipe.
- Building creation.
- Origin metadata.

### Sprint 5 — Bonus System

Deliver:

- Active bonus calculation.
- EXP bonus.
- Fragment bonus.
- Bonus cap.
- Bonus overview UI.

### Sprint 6 — Beast Roaming

Deliver:

- Select roaming Beast.
- 3 Species behavior sets.
- Tap interaction.
- Building interaction anchors.

### Sprint 7 — Dreamland Mood & Archive

Deliver:

- Purity/Corruption values.
- Basic visual theme change.
- Dream History/Archive entry point.

### Sprint 8 — Content & Polish

Deliver:

- 8–10 Buildings.
- Icons/art.
- Animation loops.
- Audio.
- QA/performance pass.

### Sprint 9 — NFT Readiness

Deliver:

- Mint status.
- Metadata endpoint.
- Building card preview.
- No real mint required.

---

## 33. Open Design Questions

1. Should Building bonuses work only when placed? Recommended: yes.
2. Should duplicate Buildings stack? Recommended: yes, but capped by bonus group.
3. Should Dreamland have resource collection timers? Recommended: no in MVP.
4. Should Building upgrades exist in MVP? Recommended: only if simple, otherwise post-MVP.
5. Should Dreamland be visitable by friends in MVP? Recommended: no.
6. Should Nightmare Gate be available in MVP? Recommended: yes if Corruption system exists, otherwise later.
7. Should Buildings require terrain type? Recommended: only water/tall/gate basics.
8. Should Story Buildings be tradable? Recommended: no, account-bound.
9. Should Building NFT metadata include placement? Recommended: no, placement is player-layout data, not intrinsic NFT.
10. Should Dreamland mood affect combat? Recommended: lightly or not in MVP.

---

## 34. Glossary

| Term | Meaning |
|---|---|
| Dreamland | Player’s personal hub in Dreamverse |
| Building | Placeable Memory Structure |
| Memory Structure | Lore term for Building |
| Placement Grid | Isometric grid for placing objects |
| Building Fragment | Material used to craft Building |
| Blueprint | Unlock requirement for crafting |
| Bonus Set | Building passive effects |
| Bonus Cap | Maximum total effect from category |
| Realm Influence | Visual/system influence from Realm |
| Purity | Dreamland value from Purify choices |
| Corruption | Dreamland value from Corrupt choices |
| HiddenKnowledge | Dreamland value from Hidden discoveries |
| Blank Mist | Fog of forgotten Dreamland |
| Relic Pedestal | Building used to display/activate Relic |
| Beast Roaming | Beast movement in Dreamland |
| Mint Status | NFT readiness/on-chain state |

---

## 35. Final Building & Dreamland Statement

Building & Dreamland System là lớp biến hành trình trong Daily Dream thành không gian cá nhân lâu dài.

Một Daily Dream cho người chơi fragment.  
Một Beast cho người chơi companion.  
Một Relic cho người chơi ký ức.  
Một Building cho người chơi nơi để ký ức ấy ở lại.

Dreamland thành công khi người chơi mở game không chỉ để “nhận nhiệm vụ hôm nay”, mà còn để nhìn thấy vùng đất của mình thay đổi, Beast của mình sống động hơn, và những giấc mơ đã qua vẫn còn dấu vết.

> Dreamland là bằng chứng rằng những giấc mơ người chơi cứu, khai thác hoặc thấu hiểu không biến mất. Chúng trở thành một nơi để trở về.\n