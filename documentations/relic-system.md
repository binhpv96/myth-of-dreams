---
title: "Relic System"
description: "Myth of Dreams - Relic System"
date: "2026-06-03"
category: "game-design"
order: 16
tags: ["game-design","relic"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, dream_system.md, combat_system.md, beast_system.md, economy_reward_system.md, NFT_Metadata.md  
**Owner:** Game Design / Combat Design / Narrative / Economy / Backend  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Relic System** cho **Myth of Dreams**.

Relic là di vật được kết tinh từ những giấc mơ đã kết thúc, bị bóp méo hoặc được ghi nhớ. Trong gameplay, Relic đóng vai trò như hệ thống equipment nhẹ cho Beast và Dreamland, giúp người chơi tùy biến build mà không làm combat trở nên quá phức tạp.

Relic có ba vai trò chính:

1. **Combat customization** — tăng chỉ số, thêm hiệu ứng, thay đổi cách Beast vận hành.
2. **Narrative artifact** — mỗi Relic là một mảnh câu chuyện từ Dreamverse.
3. **Dream interaction key** — một số Relic mở hidden path, dialogue hoặc ending đặc biệt.

Relic không nên chỉ là “+10% ATK”. Relic tốt phải vừa có tác dụng gameplay, vừa khiến người chơi cảm thấy họ đang giữ một vật có lịch sử.

---

## 1. Relic Design Vision

### 1.1. Relic fantasy

Relic là những vật còn sót lại sau khi một giấc mơ được thanh tẩy, bị tha hóa hoặc được thấu hiểu.

Một Relic có thể là:

- Chiếc đèn lồng từng cháy dưới đáy hồ.
- Một chiếc vương miện đồ chơi bị nứt.
- Một đồng hồ cát không chịu rơi.
- Một chiếc chìa khóa không có cửa.
- Một chiếc gai mọc ra từ dream bị khóa.
- Một vỏ sò vẫn phát ra tiếng hát.
- Một mảnh gương phản chiếu ký ức cũ.

Relic không phải vật phẩm ngẫu nhiên. Nó là bằng chứng rằng một dream từng tồn tại.

### 1.2. Design statement

Relic trong Myth of Dreams phải:

> Nhỏ gọn về gameplay, mạnh về bản sắc, và đủ ý nghĩa để người chơi nhớ nó đến từ giấc mơ nào.

### 1.3. Relic pillars

#### 1. Build Modifier, Not Build Replacement

Relic bổ sung cho Beast, không thay thế Beast identity.

Một Relic tốt:

- Tăng sức mạnh theo hướng rõ.
- Có synergy với Species/Affinity/Role.
- Không biến mọi Beast thành cùng một kiểu build.

#### 2. Story in One Object

Mỗi Relic nên có mô tả ngắn nhưng gợi được câu chuyện.

Ví dụ:

```text
Chiếc vương miện nhựa bị nứt. Trong một buổi chiều rất xa, nó từng đủ để biến một đứa trẻ thành vua của cả thế giới.
```

#### 3. Risk and Reward

Nightmare/Corrupt Relic nên mạnh nhưng có drawback.

Ví dụ:

- Tăng damage khi HP thấp.
- Giảm healing nhận vào.
- Tăng Nightmare Shard drop.
- Tăng Corruption.
- Mở path nguy hiểm.

#### 4. Hidden Interaction

Một số Relic nên dùng như chìa khóa để mở:

- Hidden node.
- Special dialogue.
- Alternate boss resolution.
- Lore entry.
- Secret crafting recipe.

#### 5. NFT-ready, Not NFT-dependent

Relic có thể NFT hóa sau MVP, nhưng gameplay phải hoạt động tốt ở off-chain phase.

---

## 2. Relic System Scope

### 2.1. MVP scope

MVP Relic System nên bao gồm:

- Relic inventory.
- 1 Relic slot cho mỗi Beast.
- 10–15 Relic.
- Relic rarity.
- Relic source/origin metadata.
- Relic effects:
  - Stat bonus.
  - Status bonus.
  - Triggered passive.
  - Affinity bonus.
  - Drawback.
  - Hidden path unlock.
- Relic crafting từ fragments.
- Relic equip/unequip.
- Basic Relic profile UI.
- Backend validation.
- No full NFT mint required.

### 2.2. Post-MVP scope

Sau MVP có thể mở rộng:

- Multiple Relic slots.
- Relic leveling.
- Relic refinement.
- Relic fusion.
- Dreamland Relic Pedestal.
- Active Relic ability.
- Relic sets.
- Relic NFT mint.
- Marketplace.
- Seasonal Relic.
- PvP-specific tuning.

### 2.3. Not in MVP

Không đưa vào MVP:

- 5–6 equipment slots như RPG truyền thống.
- Relic random stat phức tạp.
- Full set bonus nhiều món.
- Relic durability.
- Relic gacha trả tiền.
- Relic reroll economy nặng.
- Active Relic quá nhiều.
- On-chain Relic bắt buộc.

---

## 3. Relic Lifecycle

### 3.1. High-level lifecycle

```text
Player completes Daily Dream
  ↓
Earns Relic Fragments or Relic drop
  ↓
Crafts / obtains Relic
  ↓
Relic receives Origin Metadata
  ↓
Relic enters Inventory
  ↓
Player equips Relic to Beast
  ↓
Relic modifies combat / dream interaction
  ↓
Optional: Relic placed in Dreamland Pedestal
  ↓
Optional future: upgrade, mint, trade, fuse
```

### 3.2. Relic acquisition sources

| Source | Description |
|---|---|
| Daily Dream Ending | Main source |
| Hidden Ending | Rare/unique Relic |
| Boss Drop | Special Relic |
| Fragment Crafting | Common/Rare Relic |
| Corrupt Ending | Nightmare Relic |
| Dreamland Building | Passive generation, post-MVP |
| Event Dream | Limited seasonal Relic |
| PvP Season | Cosmetic/stat-light Relic, post-MVP |
| Marketplace | NFT phase |

### 3.3. Relic states

| State | Meaning |
|---|---|
| FragmentOnly | Player has fragments |
| Owned | Relic exists in inventory |
| Equipped | Relic is equipped to Beast |
| Placed | Relic is placed in Dreamland |
| Locked | Cannot trade/fuse/delete |
| MintEligible | Can be minted as NFT |
| Minted | Has on-chain token |
| Listed | Listed on marketplace |
| Consumed | Used in crafting/fusion |

### 3.4. Relic flow in MVP

MVP flow:

```text
Get Relic Fragment
  ↓
Craft Relic
  ↓
Equip to Beast
  ↓
Relic modifies combat
  ↓
Some Relic unlock hidden path
```

Keep simple. Relic must not become a second full gear system too early.

---

## 4. Relic Taxonomy

Relic được phân loại theo nhiều trục:

```text
Relic Type
  ↓
Origin Realm
  ↓
Affinity
  ↓
Rarity
  ↓
Effect Category
  ↓
Purity / Corruption
```

### 4.1. Relic Type

| Type | Description |
|---|---|
| Charm | Small passive bonus |
| Core | Stronger Beast equipment |
| Memory Object | Lore-heavy item |
| Nightmare Relic | Strong but risky |
| Key Relic | Unlocks hidden path |
| Dreamland Relic | Placed in Dreamland, post-MVP |
| Seasonal Relic | Event-specific |
| Mythic Relic | Unique, story-significant |

### 4.2. Origin Realm

Relic should usually belong to a Realm:

- Forest of Lost Voices.
- Ocean of Memories.
- Childhood Playground.
- Clocktower of Time.
- Nightmare Citadel.
- Event Realm.
- Deep Dream.

### 4.3. Affinity

Relic can have one or more Affinities:

- Light.
- Shadow.
- Memory.
- Emotion.
- Time.
- Neutral.

### 4.4. Rarity

| Rarity | Design Meaning |
|---|---|
| Common | Simple stat/effect |
| Rare | Clear synergy |
| Epic | Conditional or hidden interaction |
| Legendary | Boss/story origin |
| Dreamborn/Mythic | Unique or near-unique |

### 4.5. Purity state

| State | Meaning |
|---|---|
| Pure | From Purify Ending, stable |
| Corrupt | From Corrupt Ending, risk/reward |
| Echoed | From Dream Echo/replay, weaker |
| Hidden | From Hidden Ending, special interaction |
| Event | From seasonal dream |

---

## 5. Relic Data Structure

### 5.1. Relic master definition

```json
{
  "relicTemplateId": "lantern_of_forgotten_shores",
  "name": "Lantern of Forgotten Shores",
  "type": "KeyRelic",
  "rarity": "Epic",
  "originRealm": "Ocean of Memories",
  "affinity": "Memory",
  "purityState": "Hidden",
  "slotType": "BeastRelic",
  "effectSetId": "lantern_forgotten_effects",
  "compatibleSpecies": ["Aquatic", "Spirit", "Dragon"],
  "compatibleAffinity": ["Memory", "Light"],
  "hiddenUnlockTags": ["ocean_lantern_hidden", "listen_song"],
  "loreText": "Ngọn đèn này từng được treo trước một căn nhà bên biển...",
  "visualAssetId": "relic_lantern_forgotten",
  "iconAssetId": "icon_relic_lantern_forgotten",
  "mintable": true
}
```

### 5.2. Owned Relic instance

```json
{
  "relicId": "RELIC-000123",
  "ownerId": "USER-001",
  "templateId": "lantern_of_forgotten_shores",
  "level": 1,
  "rarity": "Epic",
  "isEquipped": true,
  "equippedToBeastId": "BEAST-000456",
  "isLocked": false,
  "origin": {
    "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
    "dreamTitle": "The Lantern Under the Lake",
    "realm": "Ocean of Memories",
    "ending": "Hidden",
    "keyChoice": "listen_to_song",
    "birthDate": "2026-05-24"
  },
  "rolledStats": {
    "memoryDamageBonus": 0.10,
    "statusResistance": 0.05
  },
  "effectState": {
    "usedOncePerBattle": false
  },
  "mintStatus": "NotMinted",
  "nftContract": null,
  "tokenId": null,
  "createdAt": "2026-05-24T12:15:00Z"
}
```

### 5.3. Required fields

Every Relic must have:

- Relic ID.
- Owner ID.
- Template ID.
- Name.
- Type.
- Rarity.
- Origin Realm.
- Effect set.
- Origin metadata.
- Equip status.
- Mint status.

---

## 6. Relic Slot System

### 6.1. MVP slot rule

MVP rule:

```text
Each Beast can equip 1 Relic.
```

Reasons:

- Easier balance.
- Easier UI.
- Easier onboarding.
- Makes each Relic choice meaningful.

### 6.2. Post-MVP slots

Possible expansion:

| Slot | Use |
|---|---|
| Core Relic | Main effect |
| Minor Relic 1 | Small stat |
| Minor Relic 2 | Small utility |
| Dreamland Relic | Global/placement effect |

### 6.3. Slot restrictions

Some Relic may have restrictions:

- Beast Species.
- Beast Affinity.
- Minimum level.
- Corruption level.
- Realm unlock.
- Rarity requirement.

MVP recommendation:

- Avoid too many restrictions.
- Use “bonus if compatible” instead of “cannot equip”.

Example:

```text
Can equip on any Beast.
Additional +5% bonus if equipped by Aquatic or Memory Beast.
```

### 6.4. Equip rules

- One Relic equipped to one Beast at a time.
- Equipping Relic removes it from previous Beast.
- Relic cannot be traded while equipped.
- Relic cannot be consumed while equipped.
- Relic effect applies only when Beast is used in combat or relevant Dream interaction.

### 6.5. Equip/unequip cost

MVP:

- Free equip/unequip.

Post-MVP:

- Still recommend free or very cheap.
- Avoid punishing experimentation.

---

## 7. Relic Effect System

### 7.1. Effect categories

| Category | Description |
|---|---|
| Stat Bonus | Increases core/secondary stat |
| Damage Bonus | Increases specific damage |
| Defense Bonus | Reduces incoming damage |
| Status Bonus | Improves applying/resisting status |
| Triggered Passive | Activates under condition |
| Combat Utility | Cooldown, shield, heal |
| Risk/Reward | Strong bonus with drawback |
| Hidden Unlock | Unlocks dream content |
| Dreamland Bonus | Passive hub effect |
| Crafting Bonus | Affects crafting/awakening |

### 7.2. Stat bonus

Examples:

- +10% HP.
- +8% MATK.
- +12% MDEF.
- +5% LUCK.
- +10% Status Resistance.

Design rule:

- Common Relic: 3–8%.
- Rare Relic: 6–12%.
- Epic Relic: 10–18%.
- Legendary: 15–25%, usually conditional.
- Mythic: unique effect, not just bigger number.

### 7.3. Damage bonus

Examples:

- +10% Light damage.
- +12% damage against debuffed enemies.
- +15% damage when HP below 50%.
- +8% boss damage.

### 7.4. Defense bonus

Examples:

- Gain shield at battle start.
- Reduce Shadow damage.
- Increase healing received.
- Reduce DoT damage.

### 7.5. Status bonus

Examples:

- +15% chance to apply Dream Burn.
- +10% Memory Drain duration chance, if supported.
- +20% resistance to Sleep.
- Convert Blind into reduced damage, if advanced.

### 7.6. Triggered passive

Examples:

```text
When HP falls below 40%, gain Shield equal to 10% max HP. Once per battle.
```

```text
After applying Memory Drain, heal 3% max HP.
```

```text
First time using a Light skill, remove 1 debuff.
```

### 7.7. Risk/reward effects

Examples:

```text
+18% damage when HP below 50%, but healing received -20%.
```

```text
+15% Shadow damage, but +3 Corruption after Dream completion.
```

```text
Start battle with +20% ATK for 2 turns, but lose 10% max HP.
```

### 7.8. Hidden unlock effects

A Relic can unlock:

- Hidden node.
- Hidden dialogue.
- Hidden Ending condition.
- Secret boss behavior.
- Special crafting recipe.
- Lore entry.

Example:

```text
Lantern of Forgotten Shores unlocks “Listen Beneath the Water” node in certain Ocean Dreams.
```

### 7.9. Effect stacking rules

MVP stacking:

- Same effect type: strongest applies.
- Different effect categories: stack additively or multiplicatively depending type.
- Relic effects stack with Beast passive but respect caps.
- Relic hidden unlocks stack as boolean flags.

Caps:

| Effect | Cap |
|---|---:|
| Damage Bonus | +50% total |
| Damage Reduction | 50% reduction |
| Healing Bonus | +50% |
| Status Chance Bonus | +50% relative |
| Status Resistance | 60% |
| Crit Rate | 50% |
| Cooldown Reduction | 20% or avoid MVP |

### 7.10. Effect data model

```json
{
  "effectSetId": "nightmare_thorn_effects",
  "effects": [
    {
      "type": "DAMAGE_BONUS_CONDITIONAL",
      "condition": {
        "stat": "hp_percent",
        "operator": "<=",
        "value": 0.5
      },
      "value": 0.18
    },
    {
      "type": "HEALING_RECEIVED_MODIFIER",
      "value": -0.20
    }
  ]
}
```

---

## 8. Relic Rarity System

### 8.1. Rarity overview

| Rarity | Relic Design |
|---|---|
| Common | Simple stat |
| Rare | Stat + small condition |
| Epic | Strong condition/hidden unlock |
| Legendary | Boss/story Relic |
| Mythic/Dreamborn | Unique story artifact |

### 8.2. Rarity by source

| Source | Common | Rare | Epic | Legendary | Mythic |
|---|---:|---:|---:|---:|---:|
| Common Dream | High | Low | Very Low | No | No |
| Rare Dream | Medium | Medium | Low | Very Low | No |
| Epic Dream | Low | Medium | Medium | Low | Very Low |
| Legendary Dream | Low | Medium | Medium | Medium | Low |
| Mythic Dream | Low | Medium | Medium | High | Medium |
| Hidden Ending | Low | Medium | High | Medium | Low |
| Corrupt Ending | Medium | Medium | High | Medium | Low |

### 8.3. Rarity visual treatment

| Rarity | Visual |
|---|---|
| Common | Simple icon |
| Rare | Accent glow |
| Epic | Animated shine/icon particle |
| Legendary | Unique frame |
| Mythic | Unique card/animation |

### 8.4. Rarity naming

Relic rarity should use same global rarity language:

- Common.
- Rare.
- Epic.
- Legendary.
- Dreamborn/Mythic.

If using “Dreamborn” for Beast only, Relic can use “Mythic”.

Recommendation:

- Beast: Dreamborn.
- Relic: Mythic.

---

## 9. Relic Type Details

## 9.1. Charm

### Description

Small Relic with straightforward effect.

### Use

- Early game.
- Common/Rare.
- Easy to understand.

### Examples

- Whisper Charm: +5% MATK.
- Tiny Moon Bell: +5% healing.
- Shell Bead: +5% MDEF.

### Design

Charm should be simple and replaceable.

---

## 9.2. Core Relic

### Description

Main equip Relic with meaningful build effect.

### Use

- Rare/Epic.
- MVP main Relic category.

### Examples

- Lantern of Forgotten Shores.
- Broken Toy Crown.
- Clockglass Loop.

### Design

Core Relic should change player decision slightly.

---

## 9.3. Memory Object

### Description

Lore-heavy Relic from emotional dream.

### Use

- Archive unlock.
- Hidden path.
- Narrative collection.

### Examples

- Key Without a Door.
- Shell of the Last Song.
- Feather of the Unsent Letter.

### Design

Can have modest combat effect but strong story use.

---

## 9.4. Nightmare Relic

### Description

Corrupt Relic with strong bonus and drawback.

### Use

- Corrupt Ending reward.
- Nightmare builds.
- Risk/reward economy.

### Examples

- Nightmare Thorn.
- Crown of Regret.
- Locked Dream Shard.

### Design

Must always have cost:

- Healing penalty.
- HP loss.
- Corruption increase.
- Status vulnerability.
- Dreamland visual corruption.

---

## 9.5. Key Relic

### Description

Relic used to unlock hidden content.

### Use

- Hidden node.
- Secret ending.
- Special NPC dialogue.
- Crafting recipe.

### Examples

- Lantern of Forgotten Shores.
- Rusted Minute Key.
- Chalk Star.
- Mirror Shell.

### Design

Key Relic can also have combat effect, but its main value is interaction.

---

## 9.6. Dreamland Relic

**Post-MVP.**

### Description

Placed in Dreamland Pedestal, grants passive hub effect.

### Use

- Dreamland progression.
- Decoration.
- Passive bonus.

### Examples

- Echo Fountain Core.
- Archive Lens.
- Nightmare Bloom Seed.

### Design

Should be visible and interactable in Dreamland.

---

## 10. Origin Realm Design

### 10.1. Forest of Lost Voices Relics

Theme:

- Voice.
- Silence.
- Apology.
- Names.
- Whisper.
- Letters.

Common effects:

- Memory damage.
- Debuff resistance.
- Silence/Memory Drain interaction.
- Hidden dialogue.

Example Relics:

- Whispering Leaf.
- Name-Etched Bark.
- Apology Thread.
- Hush Mother’s Needle.

### 10.2. Ocean of Memories Relics

Theme:

- Water.
- Lantern.
- Shell.
- Reflection.
- Sunken memory.

Common effects:

- Memory/Light synergy.
- Shield.
- Sustain.
- Hidden water path.
- Aquatic Beast synergy.

Example Relics:

- Lantern of Forgotten Shores.
- Mirror Shell.
- Drowned Pearl.
- Tideglass Tear.

### 10.3. Childhood Playground Relics

Theme:

- Toy.
- Chalk.
- Crown.
- Ticket.
- Music box.

Common effects:

- Emotion buff.
- LUCK.
- Inspire.
- Echo Child dialogue.
- Toy Beast synergy.

Example Relics:

- Broken Toy Crown.
- Carousel Ticket.
- Chalk Star.
- Music Box Heart.

### 10.4. Clocktower of Time Relics

Theme:

- Clock.
- Sand.
- Key.
- Gear.
- Frozen minute.

Common effects:

- SPD.
- Cooldown.
- Delay resistance.
- Time hidden path.
- Turn manipulation.

Example Relics:

- Clockglass Loop.
- Rusted Minute Key.
- Second Hand Pin.
- Gear of the Unchosen Hour.

### 10.5. Nightmare Citadel Relics

Theme:

- Lock.
- Thorn.
- Crown.
- Mask.
- Dark mirror.

Common effects:

- Damage bonus.
- Curse.
- Corruption.
- High risk.
- Nightmare path.

Example Relics:

- Nightmare Thorn.
- Crown of Regret.
- Mask of the Locked Dream.
- Black Mirror Splinter.

---

## 11. Relic Crafting System

### 11.1. Core concept

Relic can be obtained directly or crafted from Relic Fragments.

Crafting Relic is called **Restoration** in lore.

Player gathers broken fragments of a dream object and restores it into a usable Relic.

### 11.2. Crafting inputs

- Relic Fragment.
- Realm Fragment.
- Affinity Fragment.
- Memory Fragment.
- Nightmare Shard.
- Special Key Fragment.

### 11.3. Crafting cost

| Relic Rarity | Cost |
|---|---:|
| Common | 5–10 Relic Fragments |
| Rare | 15–25 Relic Fragments |
| Epic | 30–50 Relic Fragments + Realm Fragment |
| Legendary | Special boss fragments |
| Mythic | Unique condition, no normal craft |

### 11.4. Fixed recipe vs weighted restoration

Recommendation:

- Use fixed recipes for Relic.
- Allow small stat roll or visual trait variation only if needed.

Relic should not feel like gambling.

### 11.5. Crafting flow

```text
Open Relic Crafting
  ↓
Select Recipe
  ↓
Preview Relic effect
  ↓
Confirm
  ↓
Backend consumes fragments
  ↓
Backend creates Relic instance
  ↓
Origin metadata attached
  ↓
Relic enters inventory
```

### 11.6. Origin determination

If crafted from fragments from multiple dreams:

Priority:

1. Specific boss/hidden fragment source.
2. Highest rarity fragment source.
3. Majority source.
4. Craft date/dream if tied.

### 11.7. Nightmare crafting

Nightmare Relics require Nightmare Shard.

Example:

```text
20 Relic Fragments + 5 Nightmare Shards + 1 Shadow Fragment = Nightmare Thorn
```

Nightmare Relic must include drawback.

---

## 12. Relic Upgrade System

**Optional for MVP, recommended post-MVP.**

### 12.1. Upgrade purpose

Relic upgrade gives long-term material sink.

### 12.2. Upgrade level

MVP can keep all Relics level 1.

Post-MVP:

- Relic Level 1–5.
- Increase effect slightly.
- Unlock secondary effect at level 3 or 5.

### 12.3. Upgrade example

Lantern of Forgotten Shores:

| Level | Effect |
|---:|---|
| 1 | +10% Memory damage |
| 2 | +11% Memory damage |
| 3 | +12% Memory damage, +5% MDEF |
| 4 | +14% Memory damage |
| 5 | +15% Memory damage, unlock stronger hidden clue |

### 12.4. Upgrade cost

| Level | Cost |
|---:|---|
| 2 | 5 matching fragments |
| 3 | 10 matching fragments + 1 Realm Fragment |
| 4 | 20 matching fragments |
| 5 | 30 matching fragments + rare material |

### 12.5. Design warning

Upgrade should not turn Relics into mandatory grind.

Keep upgrades modest.

---

## 13. Relic Fusion System

**Post-MVP.**

### 13.1. Purpose

Fusion handles duplicate Relics and creates progression sink.

### 13.2. Fusion options

#### Option A — Duplicate upgrade

Consume duplicate to upgrade same Relic.

#### Option B — Essence conversion

Convert Relic into Dream Essence.

#### Option C — Relic mutation

Combine Relics for variant effect.

Recommendation:

- Start with Essence conversion.
- Avoid random mutation early.

### 13.3. Fusion risk

Relic fusion can become gambling-adjacent if randomized heavily. Keep transparent.

---

## 14. Relic Combat Integration

### 14.1. When effects apply

Relic effects can apply:

- At battle start.
- On skill use.
- On hit.
- On crit.
- On status applied.
- On HP threshold.
- On turn start.
- On battle end.
- During Dream node interaction.

### 14.2. Battle start effects

Examples:

- Gain Shield.
- Increase DEF for 2 turns.
- Apply Haste.
- Gain Affinity Bonus.

### 14.3. On-skill effects

Examples:

- Light skill removes 1 debuff.
- Shadow skill applies Dream Burn chance.
- Memory skill heals small amount.
- Time skill has chance to reduce cooldown.

### 14.4. HP threshold effects

Examples:

- When HP below 40%, gain Shield once.
- When HP below 50%, damage bonus activates.
- When HP below 30%, cleanse Curse once.

### 14.5. Drawback effects

Examples:

- Reduced healing.
- Start battle with minor HP loss.
- Increased status vulnerability.
- Increased Corruption on Dream completion.

### 14.6. Relic effect timing

Timing priority:

1. Battle start passives.
2. Turn start status ticks.
3. Turn start Relic triggers.
4. Player action.
5. Skill effect.
6. On-hit triggers.
7. Damage resolution.
8. Death check.
9. End-turn triggers.
10. Cooldown/duration updates.

### 14.7. Relic and passive conflict

If Beast passive and Relic trigger at same condition:

- Both may trigger if not same effect category.
- If both give shield, values can stack up to shield cap.
- If both heal, apply in order: Relic then Beast passive, unless specified.

---

## 15. Relic Hidden Interaction

### 15.1. Purpose

Relic hidden interactions support exploration and replay.

### 15.2. Interaction types

| Type | Example |
|---|---|
| Reveal Node | Lantern reveals underwater path |
| Unlock Dialogue | Toy Crown changes Echo Child dialogue |
| Alter Boss | Clockglass changes Time boss pattern |
| Open Ending | Nightmare Thorn unlocks Corrupt Ending option |
| Unlock Craft | Key Relic unlocks special recipe |
| Archive Entry | Memory Object unlocks lore |

### 15.3. Hidden unlock data model

```json
{
  "unlockId": "ocean_lantern_hidden_path",
  "requiredRelicTags": ["lantern", "ocean", "memory"],
  "requiredDreamTags": ["ocean", "song"],
  "effect": {
    "type": "REVEAL_NODE",
    "nodeId": "hidden_underwater_song"
  },
  "hintText": "Ngọn đèn trong túi bạn khẽ sáng lên khi tiếng hát vang dưới nước."
}
```

### 15.4. Hint rules

If player has relevant Relic, show subtle hint.

Example:

```text
Chiếc vương miện đồ chơi rung nhẹ khi Echo Child nhắc đến “người cuối cùng còn chơi”.
```

If player lacks Relic:

```text
Có thứ gì đó còn thiếu trên chiếc ghế trống.
```

### 15.5. Design rule

Hidden Relic interactions must not block main progression.

They should unlock:

- Better reward.
- Alternate story.
- Hidden ending.
- Lore.
- Cosmetic.
- Special Beast fragment.

---

## 16. Relic and Corruption

### 16.1. Corrupt Relic identity

Corrupt Relics are powerful because they preserve pain instead of resolving it.

They should feel tempting.

### 16.2. Corruption sources from Relic

Relic can increase Corruption by:

- Equipping it during Dream.
- Triggering its effect.
- Completing Dream with it.
- Using it in crafting.

### 16.3. Corrupt Relic effects

Examples:

```text
+15% Shadow damage.
Dream completion with Corrupt Ending grants +1 extra Nightmare Shard.
+5 Corruption after Dream.
```

```text
When HP below 50%, +20% damage.
Healing received -25%.
```

### 16.4. Purified Relic

Pure Relics can reduce or resist Corruption.

Examples:

- Reduce Corruption gain by 20%.
- Cleanse one debuff.
- Increase Light shield.
- Unlock Purify dialogue.

### 16.5. Neutral Relic

Neutral Relic has no corruption interaction.

### 16.6. Corruption balance

Corrupt Relics must not be strictly better.

Every Corrupt Relic needs at least one:

- Combat drawback.
- Corruption gain.
- Dreamland visual effect.
- Reduced healing.
- Increased risk.

---

## 17. Relic and Dreamland

### 17.1. MVP

In MVP, Relic primarily equips to Beast.

Dreamland support:

- Relic visible in Beast profile.
- Some Relics may appear as small cosmetic if equipped to roaming Beast.
- Relic hidden unlock may be explained via Dreamland Archive.

### 17.2. Post-MVP Dreamland Pedestal

Add **Relic Pedestal** Building.

Player can place Relic to grant passive Dreamland effect.

Examples:

| Relic | Dreamland Effect |
|---|---|
| Lantern of Forgotten Shores | Ocean dreams show stronger hidden hints |
| Broken Toy Crown | Emotion Beast decor interaction + |
| Clockglass Loop | Crafting time/cost reduction |
| Nightmare Thorn | Nightmare Shard chance +, Corruption risk + |
| Memory Library Lens | Archive unlock chance + |

### 17.3. Placement rules

- Only one global Relic active at first.
- Later, multiple pedestal slots.
- Relic cannot be both equipped to Beast and placed, unless special.
- Dreamland Relic effects should be small.

### 17.4. Visual representation

Relic on pedestal should have:

- Small 2D isometric object.
- Idle glow.
- Interaction tooltip.
- Lore popup.

---

## 18. Relic Inventory & UX

### 18.1. Relic inventory screen

Must show:

- Relic icon.
- Name.
- Rarity.
- Type.
- Affinity.
- Equipped status.
- Origin Realm.
- Lock/favorite.
- Mint status later.

### 18.2. Filters

MVP filters:

- Rarity.
- Affinity.
- Type.
- Equipped/unequipped.
- Origin Realm.

Post-MVP:

- Purity state.
- Hidden unlock tags.
- Mint status.
- Upgrade level.
- PvP allowed.

### 18.3. Sorting

Sort by:

- Recently acquired.
- Rarity.
- Type.
- Affinity.
- Origin Realm.
- Equipped status.

### 18.4. Relic profile

Relic profile must show:

1. Icon/art.
2. Name.
3. Rarity.
4. Type.
5. Affinity.
6. Effect.
7. Drawback if any.
8. Compatible bonus.
9. Origin.
10. Lore text.
11. Equipped Beast.
12. Mint status.

### 18.5. Equip UX

From Beast profile:

- Tap Relic slot.
- Show compatible Relics first.
- Show effect comparison.
- Confirm equip.

From Relic profile:

- Tap Equip.
- Select Beast.
- Confirm.

### 18.6. Effect clarity

Relic descriptions must be clear.

Good:

```text
+10% Memory damage. If equipped by an Aquatic Beast, also gain +5% MDEF.
```

Bad:

```text
Improves forgotten resonance under certain circumstances.
```

Lore can be poetic, but effect text must be precise.

---

## 19. Relic NFT Readiness

### 19.1. NFT principle

Relic NFT should represent provenance and collectibility, not mandatory power.

### 19.2. Mint eligibility

Relic can be mintable if:

- It is owned by player.
- It has origin metadata.
- It is not currently equipped/listed.
- It is not temporary.
- It is not consumed/locked.
- It meets rarity rule if required.

MVP can store mintStatus only.

### 19.3. NFT metadata

```json
{
  "name": "Lantern of Forgotten Shores",
  "type": "Relic",
  "relicType": "KeyRelic",
  "rarity": "Epic",
  "affinity": "Memory",
  "originRealm": "Ocean of Memories",
  "originDream": "The Lantern Under the Lake",
  "originSeed": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "originEnding": "Hidden",
  "keyChoice": "listen_to_song",
  "birthDate": "2026-05-24",
  "effectSummary": "+10% Memory damage; unlocks Ocean hidden paths",
  "loreQuote": "It does not light the way forward. It lights what still waits below."
}
```

### 19.4. NFT image

Relic NFT image can be:

- Relic icon.
- Card frame by rarity.
- Background by Realm.
- Small metadata stamps: Realm, Ending, Seed.
- Animated version for Epic+ later.

### 19.5. Trading restrictions

- Cannot trade equipped Relic.
- Cannot trade locked/favorite Relic.
- Cannot trade Relic used in active Dream Run.
- If Relic has PvP loadout lock, cannot trade until removed.
- Backend must update owner after blockchain confirmation.

### 19.6. Power concerns

If Relic is tradable, PvP must avoid pay-to-win:

- Normalize Relic effects in PvP.
- Ban certain Relics in ranked.
- Use PvP-specific effect values.
- Cosmetic provenance is the main value.

---

## 20. Example Relic Catalog

### 20.1. MVP Relic target

MVP should include 10–15 Relics.

Distribution:

- 3 Common.
- 4 Rare.
- 3 Epic.
- 1–2 Corrupt.
- 1–2 Hidden/Key Relic.

### 20.2. Suggested MVP Relics

| Relic | Rarity | Realm | Affinity | Type | Role |
|---|---|---|---|---|---|
| Tiny Moon Bell | Common | Forest | Light | Charm | Healing |
| Whispering Leaf | Common | Forest | Memory | Charm | MATK |
| Shell Bead | Common | Ocean | Memory | Charm | MDEF |
| Chalk Star | Common | Playground | Emotion | Charm/Key | LUCK |
| Apology Thread | Rare | Forest | Memory | Memory Object | Debuff resist |
| Drowned Pearl | Rare | Ocean | Memory | Core | Sustain |
| Carousel Ticket | Rare | Playground | Emotion | Key | Hidden dialogue |
| Glass Feather | Rare | Forest/Ocean | Light | Core | SPD/Blind resist |
| Lantern of Forgotten Shores | Epic | Ocean | Memory | KeyRelic | Hidden path/damage |
| Broken Toy Crown | Epic | Playground | Emotion | Core | Buff synergy |
| Clockglass Loop | Epic | Clocktower | Time | Core | Cooldown utility |
| Nightmare Thorn | Epic | Citadel | Shadow | Nightmare | Risk damage |
| Crown of Regret | Legendary | Clock/Citadel | Shadow/Time | Nightmare | Boss Relic |
| Key Without a Door | Legendary | Deep Dream | Memory | KeyRelic | Story unlock |
| First Light Shard | Mythic | Deep Dream | Light | Mythic | Unique |

MVP can implement first 10 and reserve later ones.

---

## 21. Detailed Example Relics

## 21.1. Lantern of Forgotten Shores

### Basic info

| Field | Value |
|---|---|
| Type | KeyRelic / Core |
| Rarity | Epic |
| Realm | Ocean of Memories |
| Affinity | Memory |
| Purity | Hidden |
| Slot | Beast Relic |

### Lore

Ngọn đèn này từng được treo trước một căn nhà bên biển. Người giữ nó đã quên mình đang chờ ai, nhưng chưa từng quên phải thắp sáng.

### Effect

```text
+10% Memory damage.
If equipped by Aquatic or Memory Beast, gain +5% MDEF.
Unlocks certain Ocean hidden nodes related to songs, lanterns, or submerged memories.
```

### Hidden interaction

- Reveals underwater song node.
- Improves Hidden Ending chance in “Lantern” dreams.
- Special dialogue with Shell Child.

### Drawback

None.

### Metadata quote

```text
It does not light the way forward. It lights what still waits below.
```

---

## 21.2. Broken Toy Crown

### Basic info

| Field | Value |
|---|---|
| Type | Core Relic |
| Rarity | Epic |
| Realm | Childhood Playground |
| Affinity | Emotion |
| Purity | Hidden/Pure |
| Slot | Beast Relic |

### Lore

Một chiếc vương miện nhựa bị nứt. Trong một buổi chiều rất xa, nó từng đủ để biến một đứa trẻ thành vua của cả thế giới.

### Effect

```text
Emotion buffs are 10% stronger.
When Beast gains Inspire, also gain +5% LUCK for 2 turns.
Echo Children react differently in some Playground Dreams.
```

### Compatible bonus

```text
If equipped by Emotion Beast: +5% Status Resistance.
```

### Hidden interaction

- Unlocks dialogue with Hollow Child.
- Reveals “last ticket” clue in carousel dreams.

### Metadata quote

```text
It was broken only after the child stopped believing it was gold.
```

---

## 21.3. Clockglass Loop

### Basic info

| Field | Value |
|---|---|
| Type | Core Relic |
| Rarity | Epic |
| Realm | Clocktower of Time |
| Affinity | Time |
| Purity | Neutral/Hidden |
| Slot | Beast Relic |

### Lore

Cát trong chiếc đồng hồ này không rơi xuống. Nó quay lại điểm bắt đầu, mệt mỏi nhưng không bao giờ được nghỉ.

### Effect

```text
15% chance after using Skill 1 to reduce its cooldown by 1.
-5% max HP.
```

### Compatible bonus

```text
If equipped by Time Beast: chance becomes 20%.
```

### Hidden interaction

- Unlocks special line with Timekeeper Echo.
- Can open a “frozen minute” node.

### Metadata quote

```text
Every second inside it has already happened, but none have been allowed to end.
```

### Balance warning

Cooldown effects are dangerous. Keep chance low and cap interactions.

---

## 21.4. Nightmare Thorn

### Basic info

| Field | Value |
|---|---|
| Type | Nightmare Relic |
| Rarity | Epic |
| Realm | Nightmare Citadel |
| Affinity | Shadow |
| Purity | Corrupt |
| Slot | Beast Relic |

### Lore

Một chiếc gai mọc ra từ cánh cửa bị khóa quá lâu. Nó vẫn tin rằng giữ lại là một dạng yêu thương.

### Effect

```text
When HP is below 50%, deal +18% damage.
Healing received -20%.
Completing a Dream with Corrupt Ending grants +1 Nightmare Shard.
Completing any Dream with this equipped adds +2 Corruption.
```

### Hidden interaction

- Opens certain Nightmare dialogue.
- Nox reacts positively.
- Mira reacts with concern.

### Metadata quote

```text
It blooms only where something has been held too tightly.
```

---

## 21.5. Apology Thread

### Basic info

| Field | Value |
|---|---|
| Type | Memory Object |
| Rarity | Rare |
| Realm | Forest of Lost Voices |
| Affinity | Memory |
| Purity | Pure |
| Slot | Beast Relic |

### Lore

Sợi chỉ từng khâu miệng một cái cây biết nói. Sau khi lời xin lỗi được nói ra, nó không còn cần giữ điều gì lại nữa.

### Effect

```text
+10% resistance to Memory Drain.
When receiving a debuff, 10% chance to reduce its duration by 1.
```

### Hidden interaction

- Reveals extra dialogue in apology/voice dreams.

### Metadata quote

```text
It once held silence together. Now it unravels it.
```

---

## 21.6. Drowned Pearl

### Basic info

| Field | Value |
|---|---|
| Type | Core Relic |
| Rarity | Rare |
| Realm | Ocean of Memories |
| Affinity | Memory |
| Purity | Pure |
| Slot | Beast Relic |

### Effect

```text
+8% MDEF.
After battle, recover additional 5% max HP.
```

### Compatible bonus

```text
If equipped by Aquatic Beast: +5% healing received.
```

### Lore

Một viên ngọc trai hình thành quanh một ký ức nhỏ đến mức không ai nghĩ nó có thể đau.

### Metadata quote

```text
The sea kept it because no one else did.
```

---

## 21.7. Carousel Ticket

### Basic info

| Field | Value |
|---|---|
| Type | KeyRelic |
| Rarity | Rare |
| Realm | Childhood Playground |
| Affinity | Emotion |
| Purity | Hidden |
| Slot | Beast Relic |

### Effect

```text
+5% LUCK.
In Playground Dreams, may reveal Echo Child hidden dialogue.
```

### Hidden interaction

- Required for some Carousel Hidden Ending.
- Can calm Toy enemy before combat.

### Lore

Tấm vé cuối cùng cho một vòng quay đã chạy quá lâu. Mặt sau có chữ viết trẻ con: “Đừng đi trước khi mình quay lại.”

### Metadata quote

```text
It is only valid for a ride that should have ended years ago.
```

---

## 21.8. Tiny Moon Bell

### Basic info

| Field | Value |
|---|---|
| Type | Charm |
| Rarity | Common |
| Realm | Forest |
| Affinity | Light |
| Purity | Pure |
| Slot | Beast Relic |

### Effect

```text
Healing done +5%.
```

### Lore

Một chiếc chuông nhỏ vang lên khi có ai đó tìm thấy đường ra khỏi giấc mơ xấu.

### Metadata quote

```text
It rings softly for those who are almost home.
```

---

## 22. Relic Balance Guidelines

### 22.1. Power budget

Relic power budget should depend on rarity.

| Rarity | Expected Impact |
|---|---:|
| Common | 3–6% |
| Rare | 6–12% |
| Epic | 10–18% |
| Legendary | 15–25%, conditional |
| Mythic | Unique, heavily controlled |

### 22.2. Conditional effect

Conditional effects can be stronger.

Example:

- Always +10% damage.
- Conditional +18% damage when HP < 50%.

### 22.3. Drawback budget

If a Relic has drawback, bonus can be higher.

Example:

```text
+18% damage below 50% HP
-20% healing received
```

### 22.4. Hidden unlock value

Hidden unlock is value, even if not direct combat power.

A Relic with hidden unlock should have slightly lower combat stat than pure combat Relic.

### 22.5. Avoid mandatory Relics

No Relic should be required for too many core features.

Key Relics can unlock optional content, not main progression.

### 22.6. PvP balance

For PvP:

- Disable hidden unlock effects.
- Normalize some stat bonuses.
- Reduce high variance triggers.
- Limit cooldown Relics.
- Ban or adjust Nightmare Relics if needed.

### 22.7. Cooldown effects caution

Cooldown manipulation is powerful.

Rules:

- Low chance.
- Once per turn or once per battle.
- No chain reset.
- Boss/PvP modifiers if needed.

### 22.8. LUCK effects caution

LUCK affects crit/drop/status. Relic LUCK bonus should be modest.

MVP cap:

```text
Total Relic LUCK bonus <= 15%
```

---

## 23. Relic Economy

### 23.1. Economy role

Relic provides:

- Fragment sink.
- Build diversity.
- Hidden content motivation.
- Event reward.
- Marketplace item later.

### 23.2. Supply control

Risks:

- Too many Epic Relics.
- Nightmare Relics dominate.
- Common Relics become useless.
- Hidden Relics block content.
- Marketplace creates pay-to-win.

Mitigation:

- Relic rarity drop control.
- Crafting costs.
- Bound key story Relics if needed.
- PvP normalization.
- Cosmetic/provenance value.

### 23.3. Duplicate Relics

Duplicate uses:

- Equip to multiple Beast.
- Future upgrade.
- Convert to Dream Essence.
- Trade/mint.
- Collection variants.

MVP can allow duplicates.

### 23.4. Account-bound Relics

Some Relics should be account-bound:

- Starter/tutorial Relic.
- Main story key Relic.
- Critical progression Relic.
- Event participation badge if needed.

Tradable:

- Optional combat Relic.
- Cosmetic Relic.
- Duplicate non-story Relic.
- Crafted Relic.

### 23.5. Fragment inflation

Relic fragments should not flood.

Reward sources:

- Daily Dream ending.
- Puzzle node.
- Hidden Ending.
- Boss.
- Event.

Avoid:

- Infinite farming.
- Unlimited repeatable low-risk Relic farming.

---

## 24. Relic Content Pipeline

### 24.1. Relic creation workflow

```text
Narrative defines object and origin
  ↓
Game Design defines effect category
  ↓
Combat Design balances values
  ↓
Economy Design defines source/cost
  ↓
Art creates icon/object
  ↓
Backend adds template/effect data
  ↓
Unity implements UI/equip/visual
  ↓
QA tests effect and hidden interaction
```

### 24.2. Relic template checklist

- [ ] Name.
- [ ] Type.
- [ ] Rarity.
- [ ] Origin Realm.
- [ ] Affinity.
- [ ] Purity state.
- [ ] Effect text.
- [ ] Machine-readable effect data.
- [ ] Drawback if any.
- [ ] Compatible Species/Affinity bonus.
- [ ] Hidden unlock tags if any.
- [ ] Crafting recipe/source.
- [ ] Lore text.
- [ ] Metadata quote.
- [ ] Icon asset.
- [ ] VFX if needed.
- [ ] Audio if needed.
- [ ] Balance reviewed.
- [ ] QA test cases.

### 24.3. Relic effect authoring rule

Every Relic needs two descriptions:

#### Player-facing effect text

Clear and precise.

```text
+10% Memory damage. If equipped by an Aquatic Beast, also gain +5% MDEF.
```

#### Lore text

Poetic and atmospheric.

```text
Ngọn đèn này không soi đường đi, mà soi điều vẫn còn chờ được nhớ.
```

Do not mix them into one unclear paragraph.

---

## 25. Backend Requirements

### 25.1. Tables

#### relic_templates

```sql
relic_template_id
name
type
rarity
origin_realm
affinity
purity_state
slot_type
effect_set_id
compatible_species_json
compatible_affinity_json
hidden_unlock_tags_json
lore_text
metadata_quote
icon_asset_id
visual_asset_id
mintable
status
created_at
updated_at
```

#### user_relics

```sql
relic_id
owner_id
template_id
level
rarity
is_equipped
equipped_to_beast_id
is_placed
placed_location_json
is_locked
is_favorite
origin_json
rolled_stats_json
effect_state_json
mint_status
nft_contract
token_id
created_at
updated_at
```

#### relic_fragments

```sql
fragment_id
owner_id
fragment_type
relic_template_id
affinity
realm_id
rarity
source_seed_id
quantity
created_at
updated_at
```

#### relic_crafting_logs

```sql
craft_id
owner_id
recipe_id
input_fragments_json
output_relic_id
origin_seed_id
result_json
created_at
```

#### relic_effect_sets

```sql
effect_set_id
effects_json
pvp_effects_json
version
status
created_at
updated_at
```

### 25.2. Services

| Service | Responsibility |
|---|---|
| RelicTemplateService | Load Relic templates |
| UserRelicService | Manage owned Relics |
| RelicEquipService | Equip/unequip validation |
| RelicCraftingService | Craft/restore Relics |
| RelicEffectService | Parse/apply effects |
| RelicHiddenUnlockService | Dream hidden interactions |
| RelicMetadataService | Origin metadata |
| RelicMintService | NFT readiness/mint mapping |

### 25.3. API endpoints

```text
GET  /relics
GET  /relics/{relicId}
GET  /relic-fragments
GET  /relic-recipes
POST /relics/craft
POST /relics/{relicId}/equip
POST /relics/{relicId}/unequip
POST /relics/{relicId}/lock
POST /relics/{relicId}/favorite
POST /dreamland/place-relic
POST /dreamland/remove-relic
GET  /relics/{relicId}/metadata
POST /relics/{relicId}/mint
```

### 25.4. Equip API example

Request:

```json
{
  "relicId": "RELIC-000123",
  "beastId": "BEAST-000456"
}
```

Response:

```json
{
  "success": true,
  "equippedRelic": {
    "relicId": "RELIC-000123",
    "name": "Lantern of Forgotten Shores",
    "effectSummary": "+10% Memory damage"
  },
  "beast": {
    "beastId": "BEAST-000456",
    "name": "Abyss Serpent"
  }
}
```

### 25.5. Server authority

Backend must validate:

- Relic ownership.
- Beast ownership.
- Relic not listed/traded.
- Relic not consumed.
- Relic equip slot availability.
- Restrictions.
- Effect values.
- Hidden unlock eligibility.
- Crafting cost.
- Mint eligibility.

Client must not decide final effect.

---

## 26. Client Requirements

### 26.1. Unity modules

- RelicInventoryController.
- RelicProfileUI.
- RelicEquipUI.
- RelicCraftingUI.
- RelicEffectPreview.
- RelicTooltip.
- RelicHiddenHintController.
- RelicDreamlandPlacementController, post-MVP.
- RelicMetadataDisplay.

### 26.2. UI requirements

Relic UI must support:

- Inventory grid/list.
- Rarity frame.
- Affinity icon.
- Equipped marker.
- Filter/sort.
- Profile page.
- Effect text.
- Lore text.
- Origin metadata.
- Equip comparison.
- Lock/favorite.
- Crafting preview.

### 26.3. Battle integration

Before battle:

- Client loads Beast + equipped Relic.
- Shows Relic icon in battle HUD.
- Applies visual state if passive triggers.

During battle:

- Show Relic trigger text.

Example:

```text
Nightmare Thorn activates!
```

After battle:

- Include Relic-triggered effects in battle log.

### 26.4. Dream interaction integration

If Relic unlocks hidden node:

- Show subtle hint.
- Do not overexplain.
- Send node action to server.
- Server confirms unlock.

### 26.5. Local cache

Relic data can be cached, but must refresh when:

- Craft.
- Equip.
- Unequip.
- Upgrade.
- Trade/mint.
- Dream start.
- Login.

---

## 27. QA Test Plan

### 27.1. Inventory tests

- Relic appears after acquisition.
- Relic profile correct.
- Filters work.
- Sorting works.
- Lock/favorite works.
- Origin metadata displayed.

### 27.2. Crafting tests

- Correct fragments consumed.
- Insufficient fragments rejected.
- Relic created.
- Origin determined correctly.
- Duplicate craft request rejected.
- Nightmare recipe requires Nightmare Shard.
- Crafting log saved.

### 27.3. Equip tests

- Equip to owned Beast works.
- Equip to non-owned Beast rejected.
- Equip non-owned Relic rejected.
- Equipping Relic removes from previous Beast.
- Equipped Relic cannot be consumed/traded.
- Restricted Relic behavior correct.
- Compatible bonus applies.

### 27.4. Combat effect tests

- Stat bonus applies.
- Damage bonus applies.
- Triggered passive triggers once.
- Drawback applies.
- Healing reduction works.
- Status chance bonus works.
- Shield effect works.
- Cooldown effect respects cap.
- PvP values separate if applicable.

### 27.5. Hidden interaction tests

- Relic reveals correct node.
- Relic hint appears.
- Hidden node not shown without Relic.
- Server validates unlock.
- Hidden ending condition works.
- Relic does not unlock wrong dream.

### 27.6. Corruption tests

- Corrupt Relic adds Corruption.
- Purified Relic reduces effect if designed.
- Nightmare reward bonus applies.
- Mira/Nox dialogue conditions triggered.

### 27.7. Security tests

- Client cannot fake Relic effect.
- Client cannot equip listed Relic.
- Client cannot duplicate Relic.
- Client cannot mint without ownership.
- Client cannot bypass restrictions.

---

## 28. Analytics Events

### 28.1. Required events

```text
relic_acquired
relic_fragment_acquired
relic_crafted
relic_equipped
relic_unequipped
relic_triggered
relic_hidden_unlock_triggered
relic_upgraded
relic_locked
relic_favorited
relic_placed_dreamland
relic_mint_eligible
relic_minted
relic_listed_marketplace
```

### 28.2. Event properties

```json
{
  "relicId": "RELIC-000123",
  "templateId": "lantern_of_forgotten_shores",
  "rarity": "Epic",
  "type": "KeyRelic",
  "affinity": "Memory",
  "originRealm": "Ocean of Memories",
  "originEnding": "Hidden",
  "equippedToBeastId": "BEAST-000456"
}
```

### 28.3. Key metrics

- Most equipped Relic.
- Least used Relic.
- Relic win-rate correlation.
- Relic hidden unlock rate.
- Relic craft rate.
- Nightmare Relic adoption.
- Purify vs Corrupt Relic usage.
- Relic effect trigger frequency.
- Relic upgrade rate, post-MVP.
- Relic mint conversion, NFT phase.

---

## 29. MVP Implementation Plan

### Sprint 1 — Relic Data Foundation

Deliver:

- Relic template schema.
- User Relic schema.
- Relic inventory API.
- 3 simple Relics.

### Sprint 2 — Equip System

Deliver:

- Equip/unequip API.
- Beast profile Relic slot.
- Relic effect applied to combat snapshot.

### Sprint 3 — Basic Effects

Deliver:

- Stat bonus.
- Damage bonus.
- Healing bonus.
- Status resistance.
- Drawback.

### Sprint 4 — Relic Crafting

Deliver:

- Relic fragments.
- Craft recipe.
- Relic creation.
- Origin metadata.

### Sprint 5 — Hidden Unlock

Deliver:

- Relic tags.
- Hidden node condition.
- Hint text.
- Server validation.

### Sprint 6 — Content Expansion

Deliver:

- 10 MVP Relics.
- Icons.
- Lore text.
- Balance pass.
- QA test cases.

### Sprint 7 — NFT Readiness

Deliver:

- Mint status.
- Metadata endpoint.
- Relic card preview.
- No real mint required.

---

## 30. Open Design Questions

1. Should Relics have levels in MVP?
2. Should Relics be tradable before NFT phase?
3. Should story/key Relics be account-bound?
4. Should Nightmare Relics always add Corruption?
5. Should one Relic be usable by multiple Beast? Recommended: no.
6. Should Relic effects work in PvP unchanged? Recommended: no, use PvP tuning.
7. Should Relic hidden unlocks be visible in UI? Recommended: hint only.
8. Should Relic crafting allow random stat rolls? Recommended: no in MVP.
9. Should Relic be placed in Dreamland in MVP? Recommended: only profile/equip; pedestal post-MVP.
10. Should Relic origin always be a single Dream? Recommended: yes, based on dominant rarest source.

Recommended MVP answers:

1. No Relic leveling in MVP.
2. No trading before NFT/economy rules are stable.
3. Yes, key story Relics account-bound.
4. Usually yes, but value varies.
5. No, one Relic per Beast at a time.
6. No, PvP needs separate tuning.
7. Show subtle hints, not full checklist.
8. No random stat rolls in MVP.
9. Dreamland pedestal post-MVP.
10. Yes.

---

## 31. Glossary

| Term | Meaning |
|---|---|
| Relic | Dream artifact used as equipment/interaction item |
| Charm | Simple Relic with small bonus |
| Core Relic | Main equip Relic |
| Key Relic | Relic that unlocks hidden content |
| Nightmare Relic | Corrupt Relic with risk/reward |
| Dreamland Relic | Relic placed in Dreamland, post-MVP |
| Relic Fragment | Material used to craft Relic |
| Restoration | Crafting process for Relic |
| Origin Metadata | Dream source data attached to Relic |
| Purity State | Pure, Corrupt, Hidden, Echoed, Event |
| Effect Set | Machine-readable Relic effects |
| Hidden Unlock Tag | Tag used to match Relic with secret content |
| Mint Status | NFT readiness/on-chain status |

---

## 32. Final Relic System Statement

Relic System là lớp tùy biến nhẹ nhưng giàu ý nghĩa của Myth of Dreams.

Một Relic tốt không chỉ làm Beast mạnh hơn. Nó phải khiến người chơi tự hỏi:

- Vật này đến từ dream nào?
- Ai từng giữ nó?
- Nó đã mất điều gì?
- Tại sao nó vẫn còn lại?
- Nếu mình mang nó vào dream khác, điều gì sẽ xảy ra?

Relic nên là cầu nối giữa combat, exploration, lore, economy và NFT provenance.

> Beast là sinh vật đi cùng người chơi. Relic là ký ức mà cả hai cùng mang theo.\n