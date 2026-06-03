---
title: "Economy & Reward"
description: "Myth of Dreams - Economy & Reward"
date: "2026-06-03"
category: "game-design"
order: 18
tags: ["game-design","economy"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, dream_system.md, combat_system.md, beast_system.md, relic_system.md, building_dreamland_system.md, NFT_Metadata.md  
**Owner:** Game Design / Economy Design / Backend / Product  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Economy & Reward System** cho **Myth of Dreams**.

Economy & Reward System chịu trách nhiệm thiết kế, cân bằng và kiểm soát toàn bộ dòng chảy phần thưởng trong game:

- Người chơi nhận gì sau mỗi Daily Dream?
- Fragment được sinh ra thế nào?
- Craft Beast, Building, Relic tốn gì?
- Reward khác nhau ra sao giữa Purify, Corrupt và Hidden Ending?
- Làm sao tránh inflation?
- Làm sao chuẩn bị cho NFT/Marketplace mà không phá gameplay?
- Làm sao giữ game fair, không pay-to-win?

Trong Myth of Dreams, economy không chỉ là tài nguyên. Economy là cách game biến hành trình trong Dreamverse thành progression, collection và ownership.

---

## 1. Economy Vision

### 1.1. Economy fantasy

Người chơi không “farm coin” theo nghĩa thông thường. Người chơi bước vào giấc mơ, đưa ra lựa chọn, rồi mang về những mảnh vỡ của giấc mơ đó.

Những mảnh vỡ ấy có thể trở thành:

- Beast.
- Building.
- Relic.
- Lore entry.
- Cosmetic.
- Dreamland upgrade.
- NFT metadata sau MVP.

Một reward tốt phải khiến người chơi cảm thấy:

> “Thứ này đến từ giấc mơ mình vừa trải qua.”

### 1.2. Economy design statement

Economy của Myth of Dreams phải:

> Thưởng cho việc quay lại hằng ngày, lựa chọn có ý nghĩa và khám phá hidden content, nhưng không biến game thành grind vô hồn hay pay-to-win marketplace.

### 1.3. Economy pillars

#### Daily Meaningful Reward

Mỗi Daily Dream phải cho người chơi cảm giác có tiến triển, kể cả khi không rơi item hiếm.

#### Choice-Based Reward Identity

Purify, Corrupt và Hidden phải cho reward khác nhau, không chỉ khác số lượng.

#### Collection Without Inflation

Game cần nhiều collectible, nhưng phải kiểm soát nguồn cung, đặc biệt khi NFT được bật.

#### Off-chain First

MVP nên vận hành economy off-chain để dễ balance. Blockchain/NFT chỉ thêm sau khi gameplay ổn định.

#### Fair Progression

Người chơi free/casual vẫn phải tiến triển được. NFT/marketplace không được trở thành yêu cầu bắt buộc.

---

## 2. Economy Scope

### 2.1. MVP scope

MVP Economy System nên bao gồm:

- Fragment inventory.
- Beast Fragment.
- Building Fragment.
- Relic Fragment.
- Memory Fragment.
- Nightmare Shard.
- Realm Fragment.
- Dream completion reward.
- Combat minor reward.
- Hidden Ending reward.
- Crafting Beast/Building/Relic.
- Basic drop tables.
- Reward staging server-side.
- Basic anti-inflation caps.
- No token economy.
- No marketplace trading.
- No on-chain mint requirement.

### 2.2. Soft launch scope

Sau MVP:

- More fragment types.
- Event fragments.
- Seasonal rewards.
- Building bonus economy.
- Relic upgrade costs.
- Limited cosmetic.
- Analytics-based drop tuning.
- Optional NFT mint testing.
- Marketplace viewer.

### 2.3. Post-MVP / NFT scope

Sau khi gameplay/economy ổn định:

- Optional Beast/Building/Relic mint.
- Marketplace listing.
- NFT metadata.
- Trading rules.
- Marketplace fees.
- Supply control.
- PvP normalization.
- Cosmetic NFT.
- Limited seasonal NFT.

### 2.4. Not in MVP

Không đưa vào MVP:

- Fungible game token.
- Real-money marketplace.
- On-chain fragment economy.
- Paid gacha.
- Lootbox trả tiền.
- Complex auction house.
- Player-to-player direct trading.
- Breeding economy.
- Staking/yield mechanics.
- Play-to-earn token emission.

---

## 3. Economy Loops

### 3.1. Primary economy loop

```text
Complete Daily Dream
  ↓
Earn Fragments / EXP / Lore
  ↓
Craft Beast / Building / Relic
  ↓
Use item to improve Dream runs
  ↓
Unlock harder dreams / hidden paths
  ↓
Earn rarer rewards
```

### 3.2. Daily reward loop

```text
Login
  ↓
View Dream of the Day
  ↓
Play Dream
  ↓
Reach Ending
  ↓
Receive reward
  ↓
Update inventory
  ↓
Craft/upgrade/place
  ↓
Return tomorrow
```

### 3.3. Collection loop

```text
Gather fragments
  ↓
Craft collectible
  ↓
View origin metadata
  ↓
Use/display in Dreamland
  ↓
Seek more rare variants
```

### 3.4. Hidden exploration loop

```text
Read clue / equip Relic / choose path
  ↓
Reveal Hidden node
  ↓
Reach Hidden Ending
  ↓
Earn rare fragment/Relic/lore
  ↓
Unlock new clue or crafting path
```

### 3.5. Corrupt risk/reward loop

```text
Choose Corrupt path
  ↓
Gain Nightmare Shard / stronger reward
  ↓
Increase Corruption
  ↓
Unlock Nightmare content
  ↓
Face harder/riskier dreams
  ↓
Earn unique corrupt rewards
```

### 3.6. Dreamland meta loop

```text
Craft Building
  ↓
Place Building in Dreamland
  ↓
Activate passive bonus
  ↓
Improve reward efficiency or Beast growth
  ↓
Craft more advanced items
```

---

## 4. Reward Categories

### 4.1. Reward taxonomy

| Reward Category | Examples | Purpose |
|---|---|---|
| Progression | EXP, Dreamwalker rank | Growth |
| Material | Fragment, shard | Crafting |
| Collection | Beast, Relic, Building | Long-term goals |
| Cosmetic | Skin, aura, frame | Expression |
| Narrative | Lore entry, Dream History | Meaning |
| Dreamland | Building, decor, expansion | Personalization |
| Corrupt | Nightmare Shard, corrupt Relic | Risk/reward |
| NFT-ready | Mint-eligible item | Ownership layer |

### 4.2. Reward rarity

| Rarity | Use |
|---|---|
| Common | Daily baseline |
| Rare | Short-term goal |
| Epic | Weekly excitement |
| Legendary | Major milestone |
| Mythic / Dreamborn | Special event/story/hidden |

### 4.3. Reward value dimensions

Reward value is not only power.

A reward can be valuable because of:

- Combat strength.
- Crafting utility.
- Rarity.
- Origin metadata.
- Visual uniqueness.
- Hidden unlock.
- Dreamland decor.
- NFT provenance.
- Emotional/story value.

### 4.4. Reward design rule

Every Daily Dream should give:

- One guaranteed useful reward.
- One chance-based bonus reward.
- One path-specific reward.
- One narrative/progression update if relevant.

---

## 5. Currency & Material System

### 5.1. Currency policy

MVP should avoid a complex currency stack.

Use fragments as primary materials.

MVP does not need:

- Gold.
- Premium currency.
- Fungible blockchain token.
- Energy currency.

### 5.2. Core material types

| Material | Purpose |
|---|---|
| Dream Fragment | Generic dream material |
| Memory Fragment | Flexible crafting/lore material |
| Beast Fragment | Craft Beast |
| Building Fragment | Craft Building |
| Relic Fragment | Craft Relic |
| Realm Fragment | Realm-specific craft |
| Affinity Fragment | Affinity-specific craft |
| Nightmare Shard | Corrupt craft/risk reward |
| Dream Essence | Conversion/upgrade material, post-MVP |
| Event Fragment | Seasonal craft |

### 5.3. Dream Fragment

General-purpose low-tier material.

Use:

- Basic crafting.
- Common recipes.
- Conversion.
- Early progression.

### 5.4. Memory Fragment

Flexible material tied to Dreamverse.

Use:

- Relic crafting.
- Beast crafting filler.
- Archive unlock.
- Upgrade material.

### 5.5. Beast Fragment

Used to craft Beast.

Can be:

- Generic Beast Fragment.
- Specific Beast Fragment.
- Species Fragment.
- Affinity Beast Fragment.

MVP recommendation:

- Use specific Beast Fragment for rare/epic Beast.
- Use generic Beast Fragment for common starter recipes.

### 5.6. Building Fragment

Used to craft Building.

MVP recommendation:

- Generic Building Fragment + Realm Fragment for most Buildings.
- Specific fragment for Epic+.

### 5.7. Relic Fragment

Used to craft Relic.

MVP recommendation:

- Generic Relic Fragment for Common/Rare.
- Specific Relic Fragment for Epic+ Key Relic.

### 5.8. Realm Fragment

Represents origin Realm.

Examples:

- Forest Fragment.
- Ocean Fragment.
- Playground Fragment.
- Clocktower Fragment.
- Citadel Fragment.

Use:

- Realm Building.
- Realm Beast.
- Realm Relic.
- Hidden craft.

### 5.9. Affinity Fragment

Represents Affinity.

Examples:

- Light Fragment.
- Shadow Fragment.
- Memory Fragment.
- Emotion Fragment.
- Time Fragment.

Use:

- Skill upgrade.
- Affinity-specific Beast craft.
- Relic upgrade.
- Building bonus.

### 5.10. Nightmare Shard

High-risk material from Corrupt content.

Use:

- Nightmare Relic.
- Corrupt Beast variant.
- Nightmare Building.
- Shadow skill upgrade.
- Risk/reward crafting.

Rules:

- Should be useful.
- Should create Corruption or drawback when used in major recipes.
- Should not be required for normal progression.

### 5.11. Dream Essence

Post-MVP conversion material.

Sources:

- Duplicate item conversion.
- Event reward.
- Relic/Building dismantle.

Use:

- Upgrade.
- Cosmetic craft.
- Limited reroll if implemented.

MVP can reserve but not implement.

---

## 6. Reward Sources

### 6.1. Source overview

| Source | Reward Type |
|---|---|
| Daily Dream completion | Main reward |
| Combat encounter | EXP, minor fragments |
| Elite encounter | Better fragments |
| Boss | Ending-specific reward |
| Hidden Ending | Rare reward/lore |
| Puzzle node | Material/lore |
| NPC choice | Path reward |
| Dreamland Building | Bonus modifier |
| Event Dream | Event material |
| PvP Season | Cosmetic, badge, post-MVP |

### 6.2. Daily Dream completion

Main reward source.

Reward depends on:

- Dream rarity.
- Realm.
- Ending.
- Hidden path.
- Player modifiers.
- First clear.
- Corruption.
- Building bonuses.

### 6.3. Combat reward

Combat rewards should be minor.

Examples:

- EXP.
- Small fragment chance.
- Temporary buff.
- Node progress.

Combat should not be farmed infinitely.

### 6.4. Boss reward

Boss reward tied to ending.

Example:

- Purify boss → stable fragment.
- Corrupt boss → Nightmare Shard.
- Hidden boss spare → unique Relic/Beast fragment.

### 6.5. Puzzle reward

Puzzle reward should feel like discovery.

Examples:

- Realm Fragment.
- Relic Fragment.
- Hidden clue.
- Lore entry.

### 6.6. Dreamland reward

Dreamland should modify rewards, not generate too much passively in MVP.

Allowed:

- +EXP.
- +Fragment chance.
- +Hidden clue.
- +Craft reduction.

Avoid:

- Large offline material production.
- Mandatory hourly collection.

---

## 7. Ending-Based Reward Design

### 7.1. Ending identity

| Ending | Reward Identity |
|---|---|
| Purify | Stable, clean, progression-safe |
| Corrupt | Stronger, risky, Nightmare materials |
| Hidden | Rare, lore-rich, unique |
| Failed | Minimal consolation |
| Abandoned | None/minimal |

### 7.2. Purify reward

Purify should give:

- Stable fragments.
- Purity increase.
- Archive reputation.
- Light/Memory materials.
- Lower risk.

Example:

```text
Purify Ending:
+5 Memory Fragments
+2 Realm Fragments
+1 Purity
Small chance Pure Relic Fragment
```

### 7.3. Corrupt reward

Corrupt should give:

- Nightmare Shard.
- Higher quantity or stronger material.
- Corruption increase.
- Corrupt recipe progress.
- Risk/reward.

Example:

```text
Corrupt Ending:
+3 Nightmare Shards
+3 Shadow Fragments
+5 Corruption
Chance for Nightmare Relic Fragment
```

### 7.4. Hidden reward

Hidden should give:

- Rare Beast Fragment.
- Unique Relic.
- Lore entry.
- Special metadata.
- HiddenKnowledge increase.

Example:

```text
Hidden Ending:
+2 Abyss Serpent Fragments
+1 Lantern Relic Fragment
Unlock Lore Entry
+1 HiddenKnowledge
```

### 7.5. Failed reward

Failed should not feel rewarding enough to exploit.

Possible:

- Keep some combat EXP.
- 1 common fragment.
- No ending reward.
- No rare drop.
- No origin item.

### 7.6. Abandoned reward

If player quits:

- No main reward.
- Save run if crash/resume condition.
- If intentional abandon, no reward or minimal.

### 7.7. Ending reward comparison

| Reward | Purify | Corrupt | Hidden |
|---|---:|---:|---:|
| Stable Fragment | High | Low | Medium |
| Nightmare Shard | None | High | Low/conditional |
| Rare Beast Fragment | Low | Medium | High |
| Relic Chance | Medium | Medium/Corrupt | High |
| Lore Entry | Medium | Low/Corrupt lore | High |
| Corruption | Decrease/None | Increase | None/varies |
| Metadata Value | Good | Distinct | Highest |

---

## 8. Dream Rarity Reward Design

### 8.1. Rarity impact

Dream rarity affects:

- Reward quantity.
- Reward rarity.
- Hidden chance.
- Boss reward.
- Fragment tier.
- NFT eligibility later.

### 8.2. Reward baseline by rarity

| Dream Rarity | Guaranteed | Chance Reward |
|---|---|---|
| Common | Common Fragment | Small rare fragment chance |
| Rare | Common + Rare Fragment | Relic Fragment chance |
| Epic | Rare/Epic Fragment | Relic/Beast Fragment chance |
| Legendary | Epic/Legendary Fragment | Legendary Beast/Relic |
| Mythic | Special material | Unique/Dreamborn item |

### 8.3. Example reward values

#### Common Dream

```text
Guaranteed:
- 5 Dream Fragments
- 2 Realm Fragments
- Beast EXP

Chance:
- 20% Relic Fragment
- 10% Beast Fragment
```

#### Rare Dream

```text
Guaranteed:
- 8 Dream Fragments
- 4 Realm Fragments
- 2 Affinity Fragments

Chance:
- 30% Relic Fragment
- 20% Beast Fragment
- 5% Rare Relic
```

#### Epic Dream

```text
Guaranteed:
- 12 Dream Fragments
- 6 Realm Fragments
- 4 Affinity Fragments

Chance:
- 40% Relic Fragment
- 35% Beast Fragment
- 10% Epic Relic
- Hidden-specific reward
```

### 8.4. Legendary/Mythic control

Legendary/Mythic rewards must be controlled.

Rules:

- Limited drop sources.
- Strong metadata.
- Often fragment-based, not full item.
- Full item only through milestone/hidden/event.
- NFT eligibility carefully controlled.

---

## 9. Drop Table System

### 9.1. Drop table purpose

Drop tables define rewards in a data-driven way.

They must support:

- Guaranteed rewards.
- Weighted rewards.
- Conditional rewards.
- Ending-specific rewards.
- Modifier application.
- Reward caps.

### 9.2. Drop table data model

```json
{
  "dropTableId": "ocean_epic_hidden_reward",
  "guaranteed": [
    {
      "type": "Fragment",
      "itemId": "memory_fragment_epic",
      "amount": 5
    },
    {
      "type": "LoreEntry",
      "itemId": "song_beneath_lake",
      "amount": 1
    }
  ],
  "weighted": [
    {
      "type": "Fragment",
      "itemId": "abyss_serpent_fragment",
      "amount": 2,
      "weight": 40
    },
    {
      "type": "Relic",
      "itemId": "lantern_of_forgotten_shores",
      "amount": 1,
      "weight": 10
    }
  ],
  "conditions": [
    {
      "type": "ENDING",
      "value": "Hidden"
    }
  ],
  "maxRolls": 1
}
```

### 9.3. Guaranteed vs weighted

Guaranteed:

- Baseline progression.
- No frustration.

Weighted:

- Excitement.
- Rare rewards.
- Replay/daily interest.

### 9.4. Conditional rewards

Conditions can include:

- Ending.
- Realm.
- Dream rarity.
- Hidden flag.
- Boss spared.
- Corruption level.
- Relic equipped.
- First clear.
- Event active.

### 9.5. Modifier application order

Reward calculation order:

1. Base drop table.
2. Ending modifier.
3. Dream rarity modifier.
4. First clear modifier.
5. Building bonus.
6. Relic bonus.
7. LUCK bonus.
8. Corruption modifier.
9. Cap enforcement.
10. Server roll.
11. Inventory transaction.

### 9.6. Drop rate cap

MVP caps:

```text
Total fragment drop bonus cap: +20%
Rare item chance bonus cap: +10 percentage points
Nightmare Shard bonus cap: +25%
LUCK contribution cap: +10%
```

### 9.7. Server-side roll

All reward rolls must occur server-side.

Client can show:

- Possible rewards.
- Estimated rarity.
- Reward categories.

Client must not decide final reward.

---

## 10. Crafting Economy

### 10.1. Crafting categories

Players can craft:

- Beast.
- Building.
- Relic.
- Cosmetic, post-MVP.
- Upgrade material, post-MVP.

### 10.2. Crafting design rules

Crafting should be:

- Clear.
- Goal-oriented.
- Not overly random.
- Based on Daily Dream effort.
- Connected to origin metadata.
- Balanced around days/weeks, not hours of grind.

### 10.3. Beast crafting costs

| Beast Rarity | Cost |
|---|---:|
| Common | 10 Beast Fragments |
| Rare | 20 Beast Fragments |
| Epic | 40 Beast Fragments + 5 Realm Fragments |
| Legendary | 80+ specific fragments + boss material |
| Dreamborn | Special condition, no normal craft |

### 10.4. Building crafting costs

| Building Rarity | Cost |
|---|---:|
| Common | 10–15 Building Fragments |
| Rare | 25–40 Building Fragments |
| Epic | 50–80 Building Fragments + Realm material |
| Legendary | Guardian/Boss fragments |
| Mythic | Event/story condition |

### 10.5. Relic crafting costs

| Relic Rarity | Cost |
|---|---:|
| Common | 5–10 Relic Fragments |
| Rare | 15–25 Relic Fragments |
| Epic | 30–50 Relic Fragments + Realm material |
| Legendary | Boss fragments |
| Mythic | Unique condition |

### 10.6. Crafting time

MVP recommendation:

- Instant craft or 5–10 second animation.
- No long timers.

Avoid:

- 30m/2h/24h timers in MVP.
- Pay-to-speed-up design.

### 10.7. Crafting origin metadata

Crafted item should inherit origin from:

1. Rarest fragment source.
2. Dominant source.
3. Blueprint source.
4. Crafting Dream if applicable.

### 10.8. Crafting UX

Craft screen should show:

- Required fragments.
- Current owned amount.
- Output preview.
- Rarity.
- Origin preview if known.
- Effect/skills/bonus.
- Confirm button.

### 10.9. Crafting transaction

Backend must:

- Validate ownership.
- Validate quantities.
- Consume fragments.
- Create item.
- Attach metadata.
- Save crafting log.
- Return result.

---

## 11. Upgrade Economy

### 11.1. MVP upgrade scope

MVP should keep upgrades limited.

Recommended:

- Beast leveling by EXP.
- Optional skill upgrade if simple.
- No Relic leveling.
- No Building deep upgrade.

### 11.2. Post-MVP upgrade sinks

Upgrade materials can include:

- Affinity Fragments.
- Realm Fragments.
- Dream Essence.
- Duplicate fragments.
- Relic fragments.
- Building fragments.
- Event fragments.

### 11.3. Skill upgrade cost example

| Skill Level | Cost |
|---:|---|
| 2 | 5 Affinity Fragments |
| 3 | 10 Affinity Fragments + 2 Memory Fragments |
| 4 | 20 Affinity Fragments |
| 5 | 30 Affinity Fragments + Rare material |

### 11.4. Building upgrade cost example

| Building Level | Cost |
|---:|---|
| 2 | 10 Building Fragments |
| 3 | 20 Building Fragments + 5 Realm Fragments |
| 4 | 40 Building Fragments |
| 5 | 60 Building Fragments + Epic material |

### 11.5. Relic upgrade cost example

| Relic Level | Cost |
|---:|---|
| 2 | 5 matching Relic Fragments |
| 3 | 10 matching Relic Fragments |
| 4 | 20 matching Relic Fragments + Realm material |
| 5 | 30 matching Relic Fragments + rare material |

### 11.6. Upgrade warning

Upgrade should not become the only meaningful progression.

Collection and Dream exploration must remain important.

---

## 12. Progression Economy

### 12.1. Player progression

Player progression includes:

- Dreamwalker Rank.
- Realm unlock.
- Dreamland level.
- Archive completion.
- Corruption/Purity state.
- Collection milestones.

### 12.2. Beast progression

Beast progression includes:

- Level.
- Skill upgrades.
- Relic equip.
- Origin/rarity.
- Future bond/evolution.

### 12.3. Dreamland progression

Dreamland progression includes:

- Buildings crafted.
- Zones unlocked.
- Bonuses active.
- Beast roaming.
- Archive entries.
- Mood state.

### 12.4. Progression pacing goals

MVP target:

- First Beast craft: Day 2–4.
- First Building craft: Day 1–3.
- First Relic craft/drop: Day 3–5.
- First Rare Beast: Week 1.
- First Epic craft: Week 2–3.
- First Hidden reward: Week 1 if player explores.

### 12.5. Daily baseline

A casual player completing Daily Dream should make progress every day.

A dedicated player should make progress faster through:

- Hidden Ending.
- Better choices.
- Optional elite nodes.
- Smart Building placement.
- Correct Relic/Beast selection.

But there should not be unlimited grind advantage in MVP.

---

## 13. Reward Pacing

### 13.1. Session reward pacing

Within a Daily Dream:

```text
Node reward → small
Combat reward → small
Puzzle/choice reward → medium clue/material
Boss/ending reward → main
Hidden reward → special
```

### 13.2. Short-term goals

Examples:

- Craft first Building.
- Get enough fragments for Luma upgrade.
- Equip first Relic.
- Unlock Ocean Core.

Time:

- 1–3 days.

### 13.3. Mid-term goals

Examples:

- Craft Rare Beast.
- Build Memory Library.
- Unlock Hidden Ending.
- Craft Epic Relic.

Time:

- 1–2 weeks.

### 13.4. Long-term goals

Examples:

- Complete Realm collection.
- Craft Legendary Beast.
- Build full Dreamland theme.
- Mint rare NFT item.
- Collect Dreamborn.

Time:

- 1+ months.

### 13.5. Reward excitement cadence

Aim:

- Common useful reward daily.
- Rare excitement every few days.
- Epic reward around weekly/biweekly.
- Legendary event-like.
- Mythic very rare/story/seasonal.

---

## 14. Anti-Inflation Design

### 14.1. Inflation risks

Risks include:

- Too many fragments.
- Too many rare Beast.
- NFT oversupply.
- Nightmare Shard overproduction.
- Building bonus stacking.
- Marketplace undercutting.
- Common items worthless.
- Duplicate clutter.

### 14.2. Control levers

| Lever | Use |
|---|---|
| Drop rates | Control material flow |
| Crafting cost | Material sink |
| Upgrade cost | Long-term sink |
| Bonus caps | Prevent exponential gain |
| Rarity gates | Control rare supply |
| Daily limit | Prevent infinite farm |
| Account-bound items | Protect progression |
| Seasonal supply | Control event items |
| NFT mint eligibility | Control on-chain supply |

### 14.3. Daily limit

Daily Dream main reward:

```text
1 main reward per account per day.
```

Combat rewards:

- Only within valid run.
- No repeat farming same Daily Dream.
- Dream Echo reduced reward, post-MVP.

### 14.4. Fragment sink

Sinks:

- Craft Beast.
- Craft Building.
- Craft Relic.
- Skill upgrade.
- Building upgrade.
- Relic upgrade.
- Cosmetic craft.
- Dream Essence conversion.

### 14.5. Common item value

Common items remain useful through:

- Upgrade materials.
- Collection milestones.
- Dreamland display.
- Conversion.
- Low-cost crafting.
- New player progression.

### 14.6. NFT supply control

Do not mint everything automatically.

Rules:

- Off-chain by default.
- Optional mint.
- Mint eligibility by rarity/story/level.
- Fragment not on-chain in MVP.
- Seasonal cap for unique items.

---

## 15. LUCK & Bonus Economy

### 15.1. LUCK role

LUCK can affect:

- Crit chance.
- Status chance.
- Minor bonus fragment chance.
- Rare drop chance, capped.

### 15.2. LUCK drop formula

MVP recommendation:

```text
LuckDropBonus = min(LUCK × 0.02%, 10%)
```

Example:

- LUCK 50 → +1%.
- LUCK 100 → +2%.
- LUCK 300 → +6%.
- Cap +10%.

### 15.3. Building bonus

Building bonuses can add:

- Fragment chance.
- EXP bonus.
- Hidden clue.
- Crafting reduction.

Caps are required.

### 15.4. Relic bonus

Relics can add:

- Specific drop chance.
- Nightmare Shard bonus.
- LUCK.
- Hidden reward chance.

Avoid universal “all drops +30%” Relics.

### 15.5. Bonus stacking order

```text
BaseChance
  + BuildingBonus
  + RelicBonus
  + LUCKBonus
  + EventBonus
  = PreCapChance
  → Apply Cap
```

---

## 16. Corruption Economy

### 16.1. Purpose

Corruption economy supports risk/reward.

It gives players a meaningful reason to choose Corrupt path without making it strictly better.

### 16.2. Corruption reward sources

- Corrupt Ending.
- Nightmare Shrine.
- Nightmare Gate.
- Nightmare Relic.
- Corrupt crafting.
- Nightmare Variant battles.

### 16.3. Corruption reward outputs

- Nightmare Shard.
- Shadow Fragment.
- Corrupt Relic Fragment.
- Corrupt Beast variant.
- Nightmare Building.
- Nox route.
- Higher damage Relics.

### 16.4. Corruption costs

Costs may include:

- Corruption increase.
- Harder enemy variants.
- NPC reaction changes.
- Dreamland mood darkening.
- Healing reduction from certain items.
- Risk of Nightmare Invasion post-MVP.

### 16.5. Corruption balance

Corrupt path should be:

- More rewarding short-term.
- Riskier long-term.
- Not mandatory.
- Reversible or manageable.

### 16.6. Purification sinks

Players can reduce Corruption through:

- Purify Ending.
- Light Tower.
- Cleansing Fountain, post-MVP.
- Pure Relic.
- Dream Archivist quest.
- Spending Purity material.

### 16.7. Corruption thresholds

| Corruption | Effect |
|---:|---|
| 0–20 | Minimal |
| 21–50 | Nightmare options appear |
| 51–80 | Higher rewards/risk |
| 81–100 | Nightmare events, strong visual effects |

---

## 17. Event Economy

### 17.1. Event purpose

Events provide limited-time freshness without breaking core economy.

### 17.2. Event material

Examples:

- Lantern Festival Fragment.
- Echo Token.
- Nightmare Bloom Shard.
- Frozen Minute.
- Returning Light.

### 17.3. Event reward types

- Cosmetic skin.
- Dreamland decoration.
- Limited Relic.
- Limited Building visual.
- Beast skin fragment.
- Profile title.
- Lore entry.

### 17.4. Event economy rules

- Event rewards should not be mandatory for core progression.
- Limited power items should be sidegrade, not best-in-slot forever.
- Event fragments should expire or convert after event.
- Avoid FOMO too harsh.

### 17.5. Event shop

Post-MVP event shop can exchange event fragments for:

- Cosmetic.
- Relic skin.
- Building decoration.
- Memory Fragment.
- Title.

Avoid selling direct high-power advantage.

---

## 18. NFT & Marketplace Economy

### 18.1. NFT economy principle

NFT should preserve ownership and provenance, not replace gameplay.

NFT value should come from:

- Origin Dream.
- Rarity.
- Ending.
- Visual traits.
- Lore.
- Collection.
- Cosmetic uniqueness.
- Limited event.
- Achievement.

Not primarily from:

- Overpowered stats.
- Pay-to-win PvP advantage.
- Yield promise.

### 18.2. Mintable item types

Potential mintable:

- Beast.
- Building.
- Relic.
- Cosmetic skin.
- Profile badge.

Avoid minting in MVP:

- Every fragment.
- Temporary buff.
- Common materials.
- Consumables.

### 18.3. Optional mint flow

```text
Player owns eligible item
  ↓
Player chooses Mint
  ↓
Backend validates eligibility
  ↓
Metadata generated/frozen
  ↓
Smart contract mint
  ↓
Backend saves token mapping
  ↓
Item status = Minted
```

### 18.4. Mint eligibility

Eligibility can require:

- Item rarity Rare+.
- Complete origin metadata.
- Item not locked/equipped/placed.
- Account ownership verified.
- Item not story-bound.
- Level or milestone if Beast.
- No active run/listing.

### 18.5. Marketplace rules

If marketplace exists:

- Listing requires item not equipped/placed/active.
- Sale transfers ownership.
- Backend updates item owner after confirmation.
- Sold Building removed from Dreamland.
- Sold Beast removed from active loadout.
- Sold Relic unequipped.

### 18.6. Marketplace fees

Potential fees:

- Platform fee.
- Creator royalty.
- Gas costs.

Do not design economy around guaranteed profit.

### 18.7. Pay-to-win prevention

Measures:

- PvP stat normalization.
- Ranked PvP restrictions.
- Bonus caps.
- Account-bound progression items.
- Core content accessible off-chain.
- Marketplace items are sidegrade/cosmetic/provenance-heavy.
- No exclusive mandatory power from paid NFT.

### 18.8. NFT supply control

Use:

- Seasonal caps.
- Mint windows.
- Mint eligibility.
- Fragment-to-item bottleneck.
- Unique metadata.
- Optional mint, not auto-mint.

---

## 19. Reward Metadata

### 19.1. Purpose

Reward metadata connects economy to story.

Every important item should record:

- Origin Dream.
- Dream Seed.
- Realm.
- Ending.
- Key choice.
- Birth date.
- Rarity.
- Lore quote.

### 19.2. Metadata by item type

#### Beast

```json
{
  "originDream": "The Lantern Under the Lake",
  "originEnding": "Hidden",
  "keyChoice": "listen_to_song"
}
```

#### Relic

```json
{
  "originDream": "The Apology Tree",
  "originEnding": "Purify",
  "objectMeaning": "A thread that once held silence together."
}
```

#### Building

```json
{
  "originDream": "The Apology Tree",
  "originRealm": "Forest of Lost Voices",
  "bonusSummary": "+5% Beast EXP"
}
```

### 19.3. Metadata value

Metadata increases:

- Emotional value.
- Collection value.
- NFT value.
- Marketplace differentiation.
- Player memory.
- Lore consistency.

### 19.4. Metadata in reward screen

Reward screen should show origin preview for rare items.

Example:

```text
Lantern of Forgotten Shores
Born from: The Lantern Under the Lake
Ending: Hidden
“It lights what still waits below.”
```

---

## 20. Backend Economy Architecture

### 20.1. Economy services

| Service | Responsibility |
|---|---|
| RewardService | Calculates rewards |
| DropTableService | Loads/rolls drop tables |
| InventoryService | Stores materials/items |
| CraftingService | Consumes fragments/creates items |
| EconomyTransactionService | Logs all changes |
| ModifierService | Applies Building/Relic/LUCK modifiers |
| MetadataService | Attaches origin metadata |
| AntiInflationService | Caps/limits rewards |
| NFTEligibilityService | Checks mint eligibility |

### 20.2. Inventory tables

#### inventory_materials

```sql
inventory_material_id
owner_id
material_type
material_id
quantity
updated_at
```

#### inventory_items

```sql
item_id
owner_id
item_type
template_id
rarity
metadata_json
state_json
created_at
updated_at
```

#### economy_transactions

```sql
transaction_id
owner_id
transaction_type
source_type
source_id
items_added_json
items_removed_json
metadata_json
created_at
```

#### drop_tables

```sql
drop_table_id
guaranteed_json
weighted_json
conditions_json
version
status
created_at
updated_at
```

#### crafting_recipes

```sql
recipe_id
output_type
output_template_id
input_materials_json
requirements_json
metadata_rule_id
status
created_at
updated_at
```

### 20.3. Economy transaction types

| Type | Example |
|---|---|
| DreamReward | Completion reward |
| CombatReward | Battle reward |
| CraftingCost | Materials consumed |
| CraftingOutput | Beast/Relic/Building created |
| UpgradeCost | Upgrade material consumed |
| UpgradeOutput | Level/skill/building upgraded |
| EventReward | Event material granted |
| AdminGrant | Manual support action |
| NFTMint | Mint status updated |
| MarketplaceSale | Ownership transfer |

### 20.4. Reward grant flow

```text
Dream completed
  ↓
RewardService loads run
  ↓
Determine ending
  ↓
Load drop table
  ↓
Apply modifiers
  ↓
Enforce caps
  ↓
Server rolls reward
  ↓
Create transaction
  ↓
Update inventory
  ↓
Attach metadata
  ↓
Return reward summary
```

### 20.5. Atomic transactions

Reward/crafting operations must be atomic.

If any step fails:

- Rollback fragment consumption.
- Do not create duplicate item.
- Do not grant duplicate reward.

### 20.6. Idempotency

Important APIs should be idempotent.

Use idempotency keys:

```json
{
  "requestId": "CRAFT-REQUEST-UUID"
}
```

Prevents double craft/reward on retry.

---

## 21. API Requirements

### 21.1. Inventory

```text
GET /inventory/materials
GET /inventory/items
GET /inventory/summary
```

### 21.2. Rewards

```text
POST /rewards/claim-dream
GET  /rewards/preview-dream/{seedId}
GET  /rewards/history
```

### 21.3. Crafting

```text
GET  /crafting/recipes
POST /crafting/craft
GET  /crafting/preview/{recipeId}
```

### 21.4. Reward preview response

```json
{
  "dreamId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "possibleRewards": [
    {
      "type": "Fragment",
      "name": "Memory Fragment",
      "rarity": "Epic",
      "guaranteed": true
    },
    {
      "type": "Relic",
      "name": "Lantern of Forgotten Shores",
      "rarity": "Epic",
      "guaranteed": false
    }
  ],
  "bonusSources": [
    {
      "source": "Memory Library",
      "effect": "+5% Beast EXP"
    }
  ]
}
```

### 21.5. Craft request

```json
{
  "recipeId": "craft_abyss_serpent",
  "inputs": [
    {
      "materialId": "abyss_serpent_fragment",
      "quantity": 40
    },
    {
      "materialId": "ocean_fragment",
      "quantity": 5
    }
  ],
  "requestId": "uuid"
}
```

### 21.6. Craft response

```json
{
  "success": true,
  "output": {
    "itemType": "Beast",
    "itemId": "BEAST-000123",
    "name": "Abyss Serpent",
    "rarity": "Epic",
    "origin": {
      "dreamTitle": "The Lantern Under the Lake",
      "ending": "Hidden"
    }
  },
  "consumed": [
    {
      "materialId": "abyss_serpent_fragment",
      "quantity": 40
    }
  ]
}
```

---

## 22. Client UX Requirements

### 22.1. Reward screen

Reward screen must show:

- Dream title.
- Ending.
- Main rewards.
- Rare drops.
- EXP.
- Corruption/Purity change.
- Lore unlock.
- Origin metadata preview.
- Continue button.

### 22.2. Inventory UX

Inventory should support:

- Material counts.
- Item categories.
- Filter/sort.
- Rarity color.
- Origin view.
- Craftable indicator.
- New item badge.

### 22.3. Crafting UX

Crafting screen should show:

- Recipe list.
- Required materials.
- Owned amount.
- Output preview.
- Missing material source.
- Craft button.
- Result animation.

### 22.4. Missing material source

If player lacks fragment, show source hint:

```text
Abyss Serpent Fragment
Source: Hidden Ending in Ocean of Memories dreams.
```

Do not reveal all secret details too early.

### 22.5. Reward preview

Daily Dream card can show possible reward categories, not exact full drop table.

Example:

```text
Possible Rewards:
Memory Fragments
Aquatic Beast Fragment
Relic chance
```

### 22.6. Economy clarity

Players should understand:

- What they earned.
- Why they earned it.
- What it is used for.
- How close they are to crafting.

---

## 23. Analytics & Economy Monitoring

### 23.1. Required events

```text
reward_preview_viewed
reward_claimed
fragment_acquired
fragment_spent
item_crafted
crafting_failed
recipe_viewed
inventory_opened
material_source_viewed
drop_table_rolled
rare_drop_received
currency_balance_changed
corruption_reward_received
hidden_reward_received
nft_mint_eligible
```

### 23.2. Event properties

```json
{
  "userId": "USER-001",
  "sourceType": "DailyDream",
  "sourceId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "ending": "Hidden",
  "realm": "Ocean of Memories",
  "rarity": "Epic",
  "itemId": "abyss_serpent_fragment",
  "quantity": 2,
  "balanceAfter": 18
}
```

### 23.3. Key economy metrics

- Daily reward claim rate.
- Average fragments earned per day.
- Fragment spend rate.
- Crafting conversion rate.
- Time to first Beast craft.
- Time to first Relic.
- Time to first Building.
- Rare drop frequency.
- Hidden reward completion rate.
- Corruption reward adoption.
- Material inflation rate.
- Inventory hoarding.
- Crafting bottlenecks.
- NFT mint eligibility rate.

### 23.4. Economy health dashboards

Recommended dashboards:

1. Material source/sink.
2. Crafting progression.
3. Rare item supply.
4. Corruption economy.
5. Building bonus impact.
6. Beast acquisition.
7. Relic acquisition.
8. NFT readiness.

### 23.5. Source/sink analysis

For each material:

```text
Generated per day
Spent per day
Net change
Average balance
Median balance
Top 5% balance
Craft conversion
```

If net generation too high, inflation risk.

---

## 24. QA Test Plan

### 24.1. Reward tests

- Daily Dream reward granted.
- Ending-specific reward correct.
- Hidden reward only when condition met.
- Corrupt reward adds Corruption.
- Failed run does not grant main reward.
- Abandoned run does not grant reward.
- Duplicate claim rejected.

### 24.2. Drop table tests

- Guaranteed rewards always granted.
- Weighted rewards roll within expected range.
- Conditions work.
- Modifier caps apply.
- LUCK bonus applies correctly.
- Building bonus applies correctly.
- Relic bonus applies correctly.

### 24.3. Crafting tests

- Valid craft succeeds.
- Insufficient material rejected.
- Materials consumed correctly.
- Item created correctly.
- Metadata attached.
- Duplicate request id does not duplicate output.
- Recipe requirements enforced.

### 24.4. Inventory tests

- Material balance updates.
- Item appears in inventory.
- Sorting/filtering correct.
- New item badge works.
- Source hints correct.

### 24.5. Corruption economy tests

- Nightmare Shard granted.
- Corrupt craft consumes correct material.
- Corruption gain applies.
- Purification reduces corruption if designed.
- Nightmare Gate bonus/risk applies.

### 24.6. Anti-cheat tests

- Client cannot fake reward.
- Client cannot craft without material.
- Client cannot duplicate request.
- Client cannot bypass daily limit.
- Client cannot claim expired dream reward illegally.
- Server roll cannot be overridden.

### 24.7. NFT readiness tests

- Eligible item marked correctly.
- Ineligible item rejected.
- Metadata complete.
- Equipped/placed item cannot be listed if rule applies.
- Ownership transfer updates inventory.

---

## 25. Balance Guidelines

### 25.1. Daily baseline

Every completed Daily Dream should provide enough material to feel worthwhile.

Bad:

```text
Player plays 10 minutes and gets almost nothing.
```

Good:

```text
Player always moves closer to a craft goal.
```

### 25.2. Avoid over-rewarding combat

Combat should support progression, but ending reward is the main source.

### 25.3. Hidden reward balance

Hidden should be valuable but not required daily.

Hidden reward can include:

- Unique lore.
- Rare fragment.
- Key Relic.
- Special metadata.

### 25.4. Corrupt reward balance

Corrupt must be tempting.

If Corrupt gives only penalty, players avoid it.

If Corrupt gives too much, players always choose it.

Balance with:

- Strong material.
- Corruption risk.
- Special recipes.
- NPC/Dreamland consequences.

### 25.5. Craft cost tuning

Initial craft costs should be generous enough for early retention.

Avoid:

- First craft takes 2 weeks.
- Player cannot understand source.
- Too many fragment types too early.

### 25.6. Fragment type complexity

MVP should limit material complexity.

Recommended MVP materials:

- Dream Fragment.
- Memory Fragment.
- Beast Fragment.
- Building Fragment.
- Relic Fragment.
- Realm Fragment.
- Nightmare Shard.

Affinity-specific fragments can be introduced gradually.

### 25.7. Reward transparency

Show enough for player agency, but keep some mystery.

Show:

- Reward category.
- Rarity.
- Progress to craft.

Hide:

- Exact rare drop percentages unless product policy requires transparency.
- Hidden reward details before discovery.

---

## 26. MVP Implementation Plan

### Sprint 1 — Inventory & Materials

Deliver:

- Material inventory.
- Basic fragment types.
- Inventory API.
- UI display.

### Sprint 2 — Reward Tables

Deliver:

- Drop table schema.
- Daily Dream reward grant.
- Guaranteed rewards.
- Weighted rewards.

### Sprint 3 — Ending Rewards

Deliver:

- Purify reward.
- Corrupt reward.
- Hidden reward.
- Failed/abandoned handling.

### Sprint 4 — Crafting

Deliver:

- Crafting recipes.
- Material consumption.
- Item creation.
- Crafting logs.
- Beast/Relic/Building craft support.

### Sprint 5 — Modifiers

Deliver:

- Building bonus.
- Relic bonus.
- LUCK bonus.
- Bonus caps.

### Sprint 6 — Metadata

Deliver:

- Origin metadata attachment.
- Reward screen metadata.
- Inventory metadata view.

### Sprint 7 — Analytics & QA

Deliver:

- Economy events.
- Source/sink tracking.
- Anti-duplication.
- Balance test.

### Sprint 8 — NFT Readiness

Deliver:

- Mint eligibility fields.
- Metadata endpoint.
- No live mint required.

---

## 27. Open Design Questions

1. Should MVP have generic Dream Fragment or only specific fragments?
2. Should first Beast craft happen on Day 1 or Day 2–3?
3. Should Hidden Ending ever drop full Beast directly?
4. Should Corrupt Ending give more quantity or unique material?
5. Should LUCK affect rare drops or only combat crit/status?
6. Should Building bonuses apply to all rewards or only specific categories?
7. Should fragments be tradable later?
8. Should crafted items always inherit one origin Dream?
9. Should common duplicate items be convertible?
10. Should NFT mint require item level or rarity?

Recommended MVP answers:

1. Use both generic and category fragments, but keep types limited.
2. First Building Day 1–2, first Beast Day 2–4.
3. Rarely; mostly fragments.
4. Unique material: Nightmare Shard.
5. LUCK affects rare drop slightly, capped.
6. Specific categories only.
7. No fragment trading in MVP; reconsider later.
8. Yes, use dominant rarest source.
9. Post-MVP.
10. Yes, require complete metadata and rarity/level criteria.

---

## 28. Glossary

| Term | Meaning |
|---|---|
| Economy | System of reward, materials, crafting, sinks |
| Reward | Anything granted to player |
| Fragment | Material from Dream |
| Dream Fragment | Generic dream material |
| Beast Fragment | Material for Beast crafting |
| Building Fragment | Material for Building crafting |
| Relic Fragment | Material for Relic crafting |
| Realm Fragment | Realm-specific material |
| Nightmare Shard | Corrupt material |
| Drop Table | Data defining reward probabilities |
| Guaranteed Reward | Always granted reward |
| Weighted Reward | Chance-based reward |
| Crafting | Consuming materials to create item |
| Sink | Mechanic that removes material from economy |
| Source | Mechanic that creates material |
| Inflation | Too much material/item supply |
| Metadata | Origin and story data attached to reward |
| Mint Eligibility | Whether item can become NFT |
| Marketplace | Player trading system, post-MVP |

---

## 29. Final Economy Statement

Economy trong **Myth of Dreams** phải phục vụ fantasy cốt lõi của game: mỗi ngày người chơi bước vào một giấc mơ, đưa ra lựa chọn, rồi mang một phần của giấc mơ đó trở về.

Reward không nên chỉ là số lượng vật phẩm.

Một reward tốt phải có:

- Công dụng rõ.
- Nguồn gốc rõ.
- Liên hệ với lựa chọn của người chơi.
- Giá trị trong progression hoặc collection.
- Khả năng trở thành một phần của Dreamland.

Nếu làm đúng, economy không chỉ giữ chân người chơi bằng grind, mà bằng cảm giác:

> “Mỗi giấc mơ mình đi qua đều để lại một điều gì đó thật sự thuộc về mình.”\n