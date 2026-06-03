---
title: "Combat System"
description: "Myth of Dreams - Combat System"
date: "2026-06-03"
category: "game-design"
order: 13
tags: ["game-design","combat"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, dream_system.md, beast_system.md, enemy_boss_system.md, relic_system.md, economy_reward_system.md, technical_architecture.md  
**Owner:** Game Design / Combat Design / Unity / Backend  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Combat System** cho **Myth of Dreams**.

Combat System là hệ thống chiến đấu theo lượt, nơi Beast của người chơi đối đầu với các sinh vật trong Dreamverse. Hệ thống này cần đủ đơn giản để người chơi casual hiểu nhanh, nhưng đủ sâu để hỗ trợ:

- Beast collection.
- Affinity.
- Skill cooldown.
- Damage type.
- Status effects.
- Relic build.
- Boss mechanics.
- PvP Beast Duel ở phase sau.
- Server-side validation.

Tài liệu này dùng cho:

- Game designer để cân bằng gameplay.
- Combat designer để tạo skill, enemy, boss.
- Unity developer để implement battle scene.
- Backend developer để validate combat result.
- QA để tạo test case.
- Economy designer để cân bằng reward và progression.

---

## 1. Combat Vision

### 1.1. Combat fantasy

Người chơi không điều khiển một đội quân lớn, mà chiến đấu cùng một Beast được sinh ra từ giấc mơ của chính họ.

Mỗi trận chiến là một va chạm giữa:

- Ký ức và ác mộng.
- Ánh sáng và bóng tối.
- Cảm xúc và lý trí.
- Thời gian và điều đã mất.
- Beast của người chơi và những mảnh dream bị bóp méo.

### 1.2. Combat design statement

Combat trong Myth of Dreams phải:

> Dễ đọc trong 10 giây, ra quyết định trong 30 giây, nhưng vẫn có chiều sâu qua Beast, Affinity, Skill, Relic và trạng thái.

### 1.3. Combat pillars

#### 1. Clarity First

Người chơi luôn phải hiểu:

- Ai sắp đi lượt.
- Skill nào đang cooldown.
- Địch còn bao nhiêu HP.
- Status nào đang ảnh hưởng.
- Vì sao họ thắng hoặc thua.

#### 2. Small Team, Big Identity

MVP tập trung vào 1 Beast vs 1–3 enemy. Vì số unit ít, mỗi Beast phải có identity rõ:

- Damage dealer.
- Sustain.
- Debuffer.
- Speed controller.
- Tank.
- Hybrid.

#### 3. Meaningful Cooldown

Skill cooldown là nguồn chiến thuật chính. Người chơi cần quyết định:

- Dùng skill mạnh ngay.
- Giữ lại cho boss.
- Dùng heal trước hay tấn công.
- Gây status trước hay burst.

#### 4. Affinity Matters, But Does Not Auto-Win

Affinity giúp định hướng build, nhưng không nên biến combat thành “cầm đúng hệ là thắng”.

#### 5. Fast Battles

Trận thường nên ngắn. Boss có thể dài hơn.

Target:

- Normal encounter: 30–90 giây.
- Elite encounter: 1–2 phút.
- Boss: 2–4 phút.

---

## 2. Combat Scope

### 2.1. MVP combat scope

MVP bao gồm:

- PvE Dream Combat.
- 1 Beast của player.
- 1–3 enemies.
- Basic attack.
- 2 active skills.
- 1 passive skill.
- Skill cooldown.
- Turn order theo SPD.
- Physical/Magic damage.
- Affinity modifier.
- 6–8 status effects cơ bản.
- Boss có 1–2 mechanic đơn giản.
- Reward sau combat.
- Server validation dạng lightweight.

### 2.2. Post-MVP combat scope

Sau MVP có thể mở rộng:

- 2v2 Beast team.
- PvP Beast Duel.
- Auto battle priority.
- More status effects.
- Ultimate skill.
- Combo/synergy.
- Advanced boss phase.
- Seasonal modifiers.
- PvP normalized stats.
- Replay/log battle.

### 2.3. Not in MVP

Không đưa vào MVP:

- Real-time combat.
- Grid tactics phức tạp.
- Team 5v5.
- Manual targeting nhiều tầng phức tạp.
- DoT/HoT stacking quá sâu.
- Full PvP ladder.
- Equipment nhiều slot.
- Complex elemental chain reaction.

---

## 3. Combat Modes

## 3.1. PvE Dream Combat

### Description

Đây là mode chính trong MVP. Player dùng một Beast đã chọn trước khi vào Dream để chiến đấu với enemy trong Dream.

### Encounter types

| Type | Description | Target Duration |
|---|---|---:|
| Normal | Enemy thường | 30–90s |
| Elite | Enemy mạnh hoặc có mechanic | 1–2m |
| Boss | Encounter chính của Dream | 2–4m |
| Nightmare Variant | Enemy corrupt mạnh hơn | 1–3m |
| Tutorial | Dạy mechanic | 30–60s |

### PvE rules

- Player Beast không thể đổi giữa combat trong cùng run, trừ khi có feature đặc biệt sau MVP.
- HP có thể giữ nguyên giữa các encounter hoặc hồi một phần tùy Dream design.
- Enemy stat scale theo selected Beast level và Dream rarity.
- Thắng combat mở node/reward.
- Thua combat kết thúc Dream Run.

### MVP recommendation

Sau mỗi normal combat:

- Beast hồi 10–20% max HP.
- Shrine hoặc item node có thể hồi thêm.
- Boss trước portal có thể cho heal nhỏ nếu cần tránh frustration.

---

## 3.2. Boss Combat

### Description

Boss là điểm cao trào của một Daily Dream.

Boss cần có:

- Visual rõ.
- 1 signature skill.
- 1 mechanic liên quan Realm.
- 1 trạng thái chuyển phase nếu cần.
- Reward gắn với ending.

### Boss structure MVP

Boss nên có tối đa 2 phase:

```text
Phase 1: Basic pattern
Phase 2: Trigger at 50% HP, unlock stronger skill or status
```

### Boss examples

#### Abyss Lantern Keeper

- Realm: Ocean of Memories.
- Affinity: Memory.
- Damage Type: Magic.
- Mechanic: Lantern Shield.
- Phase 2: Summon Drowned Echo hoặc gây Blind.

#### Hollow Treant

- Realm: Forest of Lost Voices.
- Affinity: Shadow/Memory.
- Mechanic: Silence Roots.
- Phase 2: Healing nếu player không phá root.

#### The Hollow Child

- Realm: Childhood Playground.
- Affinity: Emotion/Shadow.
- Mechanic: Toy Swap.
- Phase 2: Random buff/debuff based on “game rules”.

---

## 3.3. PvP Beast Duel

**Post-MVP feature.**

### Description

PvP Beast Duel là combat giữa Beast của người chơi với Beast của người chơi khác.

### Phase 1 PvP recommendation

- 1v1.
- Semi-auto hoặc full auto.
- Người chơi chọn Beast và skill priority.
- Matchmaking dựa trên Beast Rating.
- Reward chủ yếu cosmetic/seasonal.
- Không nên ảnh hưởng quá mạnh đến PvE progression.

### Phase 2 PvP

- 2v2.
- Team synergy.
- Seasonal ranking.
- PvP-only Relic hoặc normalized stat.

### PvP design warning

PvP dễ phá balance nếu NFT/item tradable ảnh hưởng power quá mạnh.

Khuyến nghị:

- Normalized level bracket.
- Separate PvP modifiers.
- Ban/limit certain Relic trong PvP.
- Reward cosmetic nhiều hơn power.

---

## 4. Battle Flow

### 4.1. High-level flow

```text
Encounter Triggered
  ↓
Load Battle Scene
  ↓
Create Combatants
  ↓
Apply Pre-Battle Modifiers
  ↓
Determine Initial Turn Order
  ↓
Combat Loop
  ↓
Victory / Defeat
  ↓
Reward or Fail Dream Run
  ↓
Return to Exploration / Ending
```

### 4.2. Combat loop

```text
Start Round
  ↓
Select next unit by turn order
  ↓
Apply start-of-turn effects
  ↓
Unit chooses action
  ↓
Validate action
  ↓
Resolve cost/cooldown
  ↓
Resolve hit/damage/status
  ↓
Apply death checks
  ↓
Apply end-of-turn effects
  ↓
Update cooldowns/durations
  ↓
Check victory/defeat
  ↓
Next turn
```

### 4.3. Battle start steps

1. Client receives encounter data.
2. Client loads battle scene.
3. Server or client constructs combatant snapshots.
4. Apply Dream modifiers.
5. Apply Building passive modifiers.
6. Apply Relic effects.
7. Apply Affinity bonus from Dream if any.
8. Determine turn order.
9. Show intro animation.
10. Player starts first decision.

### 4.4. Battle end conditions

Victory:

- All enemies defeated.
- Boss resolved by special condition.
- Enemy spared if Hidden Ending route allows.

Defeat:

- Player Beast HP <= 0.
- Turn limit exceeded if encounter has time rule.
- Special fail mechanic triggers.

Abandon:

- Player quits battle.
- Run forcibly terminated by server.

---

## 5. Combatants

### 5.1. Combatant types

| Type | Description |
|---|---|
| Player Beast | Beast controlled by player |
| Enemy | Normal enemy |
| Elite Enemy | Strong enemy |
| Boss | Major encounter |
| Summon | Temporary unit summoned by boss |
| PvP Beast | Opponent Beast in PvP |

### 5.2. Combatant data model

```json
{
  "combatantId": "unit_001",
  "sourceId": "BEAST-009",
  "type": "PlayerBeast",
  "name": "Aurora Wyrm",
  "level": 12,
  "species": "Dragon",
  "affinity": "Light",
  "damageTypePreference": "Magic",
  "stats": {
    "hp": 1600,
    "maxHp": 1600,
    "atk": 80,
    "matk": 210,
    "def": 90,
    "mdef": 140,
    "spd": 95,
    "luck": 60
  },
  "skills": ["basic_attack", "radiant_breath", "aurora_wave"],
  "passives": ["sky_guardian"],
  "statusEffects": [],
  "cooldowns": {}
}
```

### 5.3. Combat snapshot

Khi battle bắt đầu, hệ thống nên tạo snapshot stat.

Lý do:

- Tránh item thay đổi giữa battle.
- Dễ validate.
- Dễ log.
- Dễ replay.

Snapshot chứa:

- Beast level.
- Stats sau modifier.
- Equipped Relic.
- Active Building bonus.
- Dream modifiers.
- Corruption modifiers.
- Skills.
- Passive state.

---

## 6. Stat System

### 6.1. Core stats

| Stat | Meaning |
|---|---|
| HP | Máu hiện tại/tối đa |
| ATK | Sát thương vật lý |
| MATK | Sát thương phép |
| DEF | Giảm sát thương vật lý |
| MDEF | Giảm sát thương phép |
| SPD | Tốc độ lượt |
| LUCK | Crit, bonus effect, drop influence |

### 6.2. Secondary stats

Secondary stats chủ yếu đến từ Relic, Building hoặc buff.

| Stat | Meaning |
|---|---|
| Crit Rate | Tỉ lệ chí mạng |
| Crit Damage | Sát thương chí mạng |
| Accuracy | Tỉ lệ đánh trúng |
| Evasion | Tỉ lệ né |
| Status Chance | Tăng tỉ lệ gây status |
| Status Resistance | Giảm tỉ lệ dính status |
| Healing Bonus | Tăng hồi máu |
| Shield Bonus | Tăng shield |
| Affinity Bonus | Tăng hiệu quả hệ nhất định |

### 6.3. MVP secondary stat recommendation

MVP chỉ nên dùng:

- Crit Rate.
- Crit Damage.
- Status Resistance.
- Healing Bonus.
- Affinity Bonus.

Accuracy/Evasion có thể để sau vì dễ gây cảm giác “miss khó chịu”.

### 6.4. Stat ranges

MVP level 1 Beast approximate:

| Role | HP | ATK | MATK | DEF | MDEF | SPD | LUCK |
|---|---:|---:|---:|---:|---:|---:|---:|
| Balanced | 1000 | 100 | 100 | 80 | 80 | 100 | 50 |
| Physical DPS | 900 | 140 | 50 | 70 | 60 | 115 | 50 |
| Magic DPS | 850 | 50 | 150 | 60 | 80 | 105 | 60 |
| Tank | 1400 | 80 | 60 | 130 | 120 | 70 | 30 |
| Speed | 800 | 110 | 90 | 60 | 60 | 145 | 70 |
| Support | 950 | 70 | 120 | 80 | 100 | 100 | 80 |

### 6.5. Stat growth

Simple growth formula:

```text
StatAtLevel = BaseStat × (1 + GrowthRate × (Level - 1))
```

Example growth rates:

| Stat | Growth Rate |
|---|---:|
| HP | 0.08 |
| ATK | 0.06 |
| MATK | 0.06 |
| DEF | 0.045 |
| MDEF | 0.045 |
| SPD | 0.015 |
| LUCK | 0.02 |

SPD và LUCK nên tăng chậm để không phá turn order và drop economy.

### 6.6. Stat cap recommendation

MVP:

- Level cap: 20.
- Crit Rate soft cap: 50%.
- Status Resistance soft cap: 60%.
- Cooldown reduction: không dùng trong MVP hoặc cap 20%.

---

## 7. Damage System

### 7.1. Damage types

#### Physical Damage

- Dựa trên ATK.
- Bị giảm bởi DEF.
- Thường dùng bởi Beast, Dragon, Avian.

#### Magic Damage

- Dựa trên MATK.
- Bị giảm bởi MDEF.
- Thường dùng bởi Spirit, Memory, Light, Time.

#### True Damage

Post-MVP hoặc boss-only.

- Bỏ qua DEF/MDEF.
- Dùng rất hạn chế.
- Không nên xuất hiện nhiều trong MVP.

### 7.2. Base damage formula

Physical:

```text
RawDamage = SkillPower × AttackerATK
Mitigation = 100 / (100 + TargetDEF)
Damage = RawDamage × Mitigation
```

Magic:

```text
RawDamage = SkillPower × AttackerMATK
Mitigation = 100 / (100 + TargetMDEF)
Damage = RawDamage × Mitigation
```

Minimum damage:

```text
Damage = max(1, floor(Damage))
```

### 7.3. Full damage formula

```text
BaseDamage =
  if Physical: SkillPower × ATK × (100 / (100 + TargetDEF))
  if Magic:    SkillPower × MATK × (100 / (100 + TargetMDEF))

AfterAffinity = BaseDamage × AffinityModifier

AfterBuffs = AfterAffinity × DamageBuffs × TargetDamageTakenModifiers

AfterCrit =
  if Crit: AfterBuffs × CritDamage
  else: AfterBuffs

FinalDamage = max(1, floor(AfterCrit - FlatShield))
```

### 7.4. Skill power ranges

| Skill Type | Power |
|---|---:|
| Basic Attack | 0.8–1.0 |
| Low CD Skill | 1.1–1.4 |
| Medium Skill | 1.5–1.8 |
| High Skill | 1.9–2.4 |
| AoE Skill | 0.7–1.2 per target |
| Damage + Status | 1.0–1.5 |
| Heal Skill | 10–25% max HP or MATK scaling |

### 7.5. Crit formula

Base:

```text
CritRate = 5% + LUCK × 0.05%
```

Example:

- LUCK 50 → 7.5% crit.
- LUCK 100 → 10% crit.
- LUCK 200 → 15% crit.

With Relic:

```text
FinalCritRate = BaseCritRate + RelicCritBonus + BuffCritBonus
```

Default Crit Damage:

```text
CritDamage = 150%
```

Cap recommendation:

```text
CritRateCap = 50%
CritDamageCap = 250%
```

### 7.6. Random variance

Để combat cảm giác tự nhiên:

```text
DamageVariance = random(0.95, 1.05)
```

MVP có thể dùng variance nhẹ ±5%.

Không nên dùng variance quá cao vì gây khó balance.

### 7.7. Shield

Shield hấp thụ damage trước HP.

```text
DamageToShield = min(ShieldValue, IncomingDamage)
RemainingDamage = IncomingDamage - DamageToShield
ShieldValue -= DamageToShield
HP -= RemainingDamage
```

Shield có duration hoặc bị phá khi hết value.

### 7.8. Healing

Healing formula đơn giản:

```text
HealAmount = SkillHealPower × MATK
```

Hoặc % HP:

```text
HealAmount = TargetMaxHP × HealPercent
```

Recommendation:

- Support Beast dùng MATK scaling.
- Self-sustain passive dùng % max HP.

Healing affected by:

- Healing Bonus.
- Curse.
- Corruption effects.
- Relic modifiers.

---

## 8. Affinity System

### 8.1. Affinity list

| Affinity | Identity |
|---|---|
| Light | Heal, shield, purify, blind |
| Shadow | Poison, curse, burst |
| Memory | Debuff, copy, echo, drain |
| Emotion | Buff, morale, synergy |
| Time | Delay, speed, cooldown manipulation |

### 8.2. Affinity design goals

Affinity phải:

- Tạo identity rõ.
- Ảnh hưởng lựa chọn Beast.
- Liên quan Realm/Dream theme.
- Không làm combat phụ thuộc tuyệt đối.
- Dễ đọc trong UI.

### 8.3. Affinity relationship

MVP dùng vòng counter đơn giản:

| Attacker | Strong Against |
|---|---|
| Light | Shadow |
| Shadow | Emotion |
| Emotion | Memory |
| Memory | Time |
| Time | Light |

Modifier:

```text
Strong: 120% damage
Weak: 85% damage
Neutral: 100% damage
```

Nếu muốn thêm dễ hiểu trong UI:

- Mũi tên xanh: Strong.
- Mũi tên đỏ: Weak.
- Không icon: Neutral.

### 8.4. Alternative affinity rule from early concept

Ý tưởng ban đầu có “Time > tất cả nhưng hiếm”.  
Khuyến nghị không dùng trong combat damage, vì Time sẽ khó balance.

Thay vào đó:

- Time mạnh ở turn manipulation.
- Time skill cooldown cao.
- Time Beast hiếm.
- Time không có nhiều burst damage.

### 8.5. Affinity status identity

| Affinity | Common Status |
|---|---|
| Light | Blind, Shield, Purify |
| Shadow | Dream Burn, Curse |
| Memory | Memory Drain, Echo |
| Emotion | Inspire, Fear, Charm-lite |
| Time | Slow, Delay, Haste |

### 8.6. Dream Affinity Modifier

Một số Daily Dream có Dream Affinity.

Ví dụ:

```text
Ocean of Memories Dream: Memory skills +10% effect
Nightmare Dream: Shadow skills +10% damage, Light skills +10% shield
```

MVP nên dùng modifier nhẹ, tối đa ±10%.

---

## 9. Turn Order System

### 9.1. MVP turn order

MVP dùng round-based SPD sort:

```text
At start of each round:
Sort all alive combatants by SPD descending.
Each combatant acts once.
```

Ưu điểm:

- Dễ implement.
- Dễ hiểu.
- Dễ debug.

Nhược điểm:

- SPD không tạo cảm giác “đi nhiều lượt hơn” rõ ràng.
- Time skill khó thể hiện sâu.

### 9.2. Post-MVP action gauge

Sau MVP có thể dùng action gauge:

```text
Each tick:
ActionGauge += SPD

If ActionGauge >= 100:
Unit gets a turn
ActionGauge -= 100
```

Ưu điểm:

- SPD cao có thể đi nhiều hơn.
- Time skill thú vị hơn.
- PvP có chiều sâu hơn.

Nhược điểm:

- Khó UI/validation hơn.
- Dễ balance lỗi.

### 9.3. Recommendation

MVP:

- Round-based SPD sort.

Post-MVP/PvP:

- Action gauge nếu cần chiều sâu.

### 9.4. Tie-breaker

Nếu SPD bằng nhau:

1. Player Beast ưu tiên trong PvE.
2. Higher LUCK.
3. Random deterministic seed.

Tie-break random phải dùng battle seed để server/client đồng bộ.

### 9.5. Turn order UI

Hiển thị:

- 3–5 lượt tiếp theo.
- Icon Beast/enemy.
- Status ảnh hưởng turn như Slow/Haste.
- Boss phase marker nếu có.

---

## 10. Skill System

### 10.1. Skill kit

Mỗi Beast có:

- Basic Attack.
- Active Skill 1.
- Active Skill 2.
- Passive Skill.

Enemy có thể có:

- Basic Attack.
- 1–3 skills.
- Passive hoặc boss mechanic.

### 10.2. Skill data model

```json
{
  "skillId": "radiant_breath",
  "name": "Radiant Breath",
  "description": "Deal Light magic damage and chance to Blind.",
  "affinity": "Light",
  "damageType": "Magic",
  "targetType": "SingleEnemy",
  "skillPower": 1.6,
  "cooldown": 3,
  "initialCooldown": 0,
  "statusEffects": [
    {
      "statusId": "blind",
      "chance": 0.2,
      "duration": 2
    }
  ],
  "tags": ["damage", "status", "light"]
}
```

### 10.3. Target types

| Target Type | Description |
|---|---|
| SingleEnemy | Một enemy |
| AllEnemies | Tất cả enemy |
| RandomEnemy | Enemy ngẫu nhiên |
| Self | Chính unit |
| Ally | Đồng minh, dùng sau khi có team |
| AllAllies | Team, dùng sau MVP |
| LowestHpEnemy | Target AI |
| HighestAtkEnemy | Target AI |

MVP PvE 1 Beast:

- SingleEnemy.
- AllEnemies.
- Self.
- RandomEnemy.

### 10.4. Cooldown rules

- Skill bắt đầu với cooldown = initialCooldown.
- Khi dùng skill, cooldown set về skill cooldown.
- Cuối lượt của owner, cooldown giảm 1.
- Basic attack không có cooldown.
- Passive không có cooldown trừ khi định nghĩa internal cooldown.

Example:

```text
Turn 1: Use Radiant Breath, CD = 3
End Turn: CD becomes 2
Next Beast Turn: CD = 2, cannot use
```

Design note: Nếu giảm cooldown ngay cuối lượt, UI phải rõ để người chơi không thấy “cooldown 3 mà chờ 2 lượt”. Có thể chọn giảm ở start-of-turn thay vì end-of-turn.

Recommendation MVP:

```text
Cooldown decreases at start of owner's turn.
After using skill, skill cannot be used again until cooldown reaches 0 on future turns.
```

### 10.5. Skill categories

| Category | Examples |
|---|---|
| Damage | Slash, Breath, Bolt |
| Heal | Recover HP |
| Shield | Absorb damage |
| Buff | Increase ATK/SPD |
| Debuff | Reduce DEF/MATK |
| Status | Burn, Sleep, Blind |
| Turn Control | Delay, Haste |
| Utility | Cleanse, cooldown reset |

### 10.6. Passive skills

Passive triggers can be:

| Trigger | Example |
|---|---|
| Battle Start | Gain Shield |
| Turn Start | Heal small amount |
| On Hit | Chance counter |
| On Crit | Apply status |
| Low HP | Heal once |
| Enemy Defeated | Gain ATK |
| Status Applied | Gain SPD |
| Dream Realm | Bonus in specific Realm |

### 10.7. Passive data model

```json
{
  "passiveId": "sky_guardian",
  "name": "Sky Guardian",
  "trigger": "HP_BELOW_THRESHOLD",
  "threshold": 0.4,
  "oncePerBattle": true,
  "effect": {
    "type": "HEAL_SELF",
    "valueType": "PERCENT_MAX_HP",
    "value": 0.08
  }
}
```

### 10.8. Skill upgrade

MVP có thể chưa cần skill upgrade sâu.

Nếu có:

- Skill level 1–5.
- Tăng power nhẹ.
- Giảm cooldown ở level cao nhưng rất hạn chế.
- Tăng status chance.

Example:

| Skill Level | Power | Status Chance |
|---|---:|---:|
| 1 | 1.4 | 20% |
| 2 | 1.48 | 22% |
| 3 | 1.56 | 24% |
| 4 | 1.64 | 26% |
| 5 | 1.75 | 30% |

Không nên giảm cooldown quá nhiều vì dễ phá balance.

---

## 11. Status Effect System

### 11.1. Status effect goals

Status effects tạo chiều sâu mà không cần nhiều unit.

Status phải:

- Dễ hiểu.
- Có icon rõ.
- Duration rõ.
- Không stack quá phức tạp trong MVP.
- Có counterplay qua Relic/Resistance.

### 11.2. MVP status list

| Status | Type | Effect |
|---|---|---|
| Sleep | Control | Bỏ lượt, tỉnh khi nhận damage |
| Dream Burn | Damage over Time | Mất HP mỗi turn |
| Lucid Shock | Speed Debuff | Giảm SPD hoặc delay |
| Memory Drain | Stat Debuff | Giảm ATK/MATK |
| Blind | Accuracy/Damage Debuff | Giảm damage hoặc hit chance |
| Curse | Healing Debuff | Giảm healing nhận vào |
| Shield | Defensive Buff | Hấp thụ damage |
| Haste | Speed Buff | Tăng SPD |
| Inspire | Offensive Buff | Tăng ATK/MATK |
| Purify | Cleanse | Xóa debuff/corruption effect |

MVP có thể implement 8 status đầu, Inspire/Purify nếu kịp.

### 11.3. Status data model

```json
{
  "statusId": "dream_burn",
  "name": "Dream Burn",
  "type": "Debuff",
  "duration": 3,
  "stackingRule": "REFRESH_DURATION",
  "tickTiming": "START_OF_TURN",
  "effect": {
    "type": "DAMAGE_PERCENT_MAX_HP",
    "value": 0.05
  }
}
```

### 11.4. Duration timing

Recommendation:

- DoT/HoT tick at start of affected unit's turn.
- Duration decreases at end of affected unit's turn.
- Control status checked at start of turn.

### 11.5. Stacking rules

MVP nên dùng stacking đơn giản:

| Status | Stacking |
|---|---|
| Dream Burn | Refresh duration, no damage stack |
| Memory Drain | Strongest value only |
| Blind | Refresh duration |
| Curse | Refresh duration |
| Shield | Add value up to cap |
| Haste | Strongest value only |
| Inspire | Strongest value only |
| Sleep | Refresh only if not damaged |

### 11.6. Status chance formula

```text
FinalStatusChance = BaseChance × (1 + AttackerStatusBonus) × (1 - TargetStatusResistance)
```

Example:

- Base chance: 30%.
- Attacker bonus: 10%.
- Target resistance: 20%.

```text
Final = 0.30 × 1.10 × 0.80 = 26.4%
```

### 11.7. Status resistance cap

Recommendation:

```text
StatusResistanceCap = 60%
```

Boss may have special resistance:

```text
BossControlResistance = 80%
BossDoTResistance = 30%
```

### 11.8. Boss status rules

Boss không nên immune hoàn toàn với mọi thứ, nhưng control phải giảm hiệu quả.

Examples:

- Sleep on boss → “Drowsy”: boss damage -10% next turn instead of skipping turn.
- Delay on boss → reduce action priority slightly.
- Burn works but capped.
- Memory Drain works at 50% effect.

---

## 12. Buff & Debuff System

### 12.1. Buff/debuff categories

| Category | Examples |
|---|---|
| Stat Buff | +ATK, +MATK, +DEF, +SPD |
| Stat Debuff | -ATK, -DEF, -SPD |
| Damage Modifier | +Light damage, -damage taken |
| Healing Modifier | +healing, -healing |
| Shield | Temporary HP |
| Special | Cooldown reset, extra turn |

### 12.2. Buff stacking

MVP rule:

- Same buff type: strongest value applies.
- Different buff types: multiply or add based on category.
- Maximum total offensive buff: +50%.
- Maximum total defensive reduction: -50% damage taken.

### 12.3. Example

Aurora Wave:

```json
{
  "effect": {
    "type": "BUFF_STAT",
    "stat": "SPD",
    "value": 0.10,
    "duration": 2
  }
}
```

Fear Howl:

```json
{
  "effect": {
    "type": "DEBUFF_STAT",
    "stat": "ATK",
    "value": -0.15,
    "duration": 2
  }
}
```

---

## 13. Relic Combat Integration

### 13.1. Relic role in combat

Relic giúp tùy biến build.

MVP:

- Mỗi Beast equip 1 Relic.
- Relic có passive effect hoặc triggered effect.
- Relic effect phải dễ hiểu.

### 13.2. Relic effect types

| Type | Example |
|---|---|
| Stat Bonus | +10% MATK |
| Status Bonus | +15% Burn chance |
| Trigger Effect | Heal when low HP |
| Affinity Bonus | +Light shield |
| Risk/Reward | +Damage, -Healing |
| Hidden Path | Unlock Dream node |

### 13.3. Combat Relic examples

#### Lantern of Forgotten Shores

- +10% Memory damage.
- If HP below 50%, gain small Shield once.
- Unlocks Ocean hidden node.

#### Clockglass Loop

- 15% chance to reduce Skill 1 cooldown by 1 after use.
- -5% max HP.

#### Nightmare Thorn

- +18% damage when HP below 50%.
- Healing received -20%.

#### Broken Toy Crown

- Emotion buffs +10%.
- Echo Children NPC interaction bonus.

### 13.4. Relic balancing

Rules:

- Relic should not double Beast power.
- Relic effect should be 5–20% impact.
- Risk/reward Relic can be stronger but must have drawback.
- PvP may use separate Relic tuning.

---

## 14. Enemy AI System

### 14.1. AI goals

Enemy AI phải:

- Đủ thông minh để combat không nhàm.
- Dễ predict để player học.
- Không cần machine learning/phức tạp.
- Có pattern theo enemy role.

### 14.2. AI types

| AI Type | Behavior |
|---|---|
| Aggressive | Ưu tiên damage |
| Defensive | Shield/heal khi thấp HP |
| Disruptor | Debuff/status |
| Trickster | Random/copy/swap |
| Support | Buff allies |
| Boss Pattern | Theo phase/script |

### 14.3. AI decision model MVP

AI dùng priority list.

Example:

```json
{
  "aiType": "Defensive",
  "rules": [
    {
      "condition": "self_hp_below_40",
      "action": "use_skill",
      "skillId": "shell_guard"
    },
    {
      "condition": "target_has_no_burn",
      "action": "use_skill",
      "skillId": "dream_burn"
    },
    {
      "condition": "default",
      "action": "basic_attack"
    }
  ]
}
```

### 14.4. AI target selection

MVP PvE 1 Beast:

- Target luôn là player Beast.

Future team combat:

- Lowest HP.
- Highest ATK.
- Random.
- Has status.
- No shield.

### 14.5. Boss AI pattern

Boss có script theo phase.

Example:

```text
Turn 1: Basic Attack
Turn 2: Memory Drain
Turn 3: Lantern Pulse
Repeat

At HP <= 50%:
Use Deepwater Shield once
Then add Drowned Echo every 4 turns
```

### 14.6. Telegraph

Boss skill mạnh nên có telegraph:

```text
The Lantern Keeper raises its light...
```

Next turn:

```text
Lantern Pulse
```

Điều này tạo cơ hội player dùng Shield/Heal/Defend.

---

## 15. Boss Mechanics

### 15.1. Boss design principles

Boss nên:

- Gắn chặt với Realm theme.
- Có mechanic dễ hiểu.
- Có phase transition rõ.
- Không kéo dài quá lâu.
- Có counterplay.
- Có thể gắn với ending/hidden condition.

### 15.2. Boss mechanic types

| Mechanic | Example |
|---|---|
| Shield Phase | Boss có shield cần phá |
| Summon | Gọi enemy nhỏ |
| Charge Attack | Báo trước skill mạnh |
| Status Pressure | Dùng debuff liên tục |
| Choice Combat | Player chọn tha/đánh |
| Puzzle Combat | Tương tác object trước combat |
| Corruption Trigger | Corrupt skill mạnh hơn |

### 15.3. Hidden Ending via combat

Hidden Ending có thể yêu cầu:

- Không giết boss, chỉ hạ đến 10% HP.
- Dùng Purify skill khi boss low HP.
- Không dùng Nightmare Relic.
- Đánh bại summon trước boss.
- Survive charge attack without attacking.
- Có Beast đúng Affinity.

Example:

```text
Abyss Lantern Keeper Hidden:
- Player selected "listen_to_song"
- Boss HP <= 20%
- Player uses Light/Memory non-lethal action
- Boss is spared
```

### 15.4. Boss phase data

```json
{
  "bossId": "abyss_lantern_keeper",
  "phases": [
    {
      "phase": 1,
      "hpAbove": 0.5,
      "skillPattern": ["basic_attack", "memory_drain", "lantern_pulse"]
    },
    {
      "phase": 2,
      "hpBelowOrEqual": 0.5,
      "onEnter": ["apply_lantern_shield"],
      "skillPattern": ["summon_drowned_echo", "lantern_pulse", "basic_attack"]
    }
  ]
}
```

---

## 16. Player Actions

### 16.1. Available actions

MVP:

- Basic Attack.
- Skill 1.
- Skill 2.
- Defend.
- Relic Action if equipped and active.
- Flee only in specific non-boss encounters.

### 16.2. Basic Attack

- No cooldown.
- Physical or Beast default damage type.
- Power 0.9–1.0.
- Can crit.
- Can trigger passive.

### 16.3. Defend

Defend should be included for boss telegraph.

Effect:

```text
Reduce incoming damage by 40% until next turn.
```

Optional:

- Increase status resistance by 20%.
- Clear 1 stack of minor debuff after MVP.

### 16.4. Flee

MVP optional.

Rules:

- Not allowed in boss.
- If flee succeeds, dream path may skip reward.
- If flee fails, enemy gets free attack.
- Simpler: Flee always succeeds but marks node as failed.

Recommendation:

- Avoid Flee in MVP unless needed.
- Let player avoid optional enemy nodes through exploration instead.

### 16.5. Relic Action

Most Relics should be passive in MVP.

Active Relic can be post-MVP.

---

## 17. Health Persistence Between Battles

### 17.1. Options

#### Option A — Full heal after each battle

Pros:

- Casual friendly.
- Easier balance.
- Less frustration.

Cons:

- Less tension in exploration.
- Healing Beast less valuable.

#### Option B — Partial heal after battle

Pros:

- Keeps tension.
- Healing/support matters.
- Shrine/item nodes useful.

Cons:

- Harder balance.

#### Option C — Persistent HP only

Pros:

- Roguelite tension.

Cons:

- Too punishing for daily casual loop.

### 17.2. MVP recommendation

Use Option B:

```text
After normal battle: recover 15% max HP.
After elite battle: recover 10% max HP.
Before boss: optional shrine/heal node.
After boss: full heal when leaving dream.
```

### 17.3. Healing node

Dream map can include:

- Lucid Spring: heal 30%.
- Memory Shrine: heal 20% + buff.
- Nightmare Shrine: heal full but +Corruption.

---

## 18. Combat Rewards

### 18.1. Reward types

After combat:

- Beast EXP.
- Minor fragment chance.
- Node progress.
- Temporary buff.
- Lore clue in special encounter.

### 18.2. Combat reward principles

- Combat reward should not overshadow ending reward.
- Minor rewards make combat feel useful.
- Boss reward mostly tied to ending.

### 18.3. EXP formula

```text
EXP = BaseEnemyEXP × EnemyLevel × RarityMultiplier
```

Example:

| Encounter | Base EXP |
|---|---:|
| Normal | 10 |
| Elite | 25 |
| Boss | 60 |

Rarity multiplier:

| Rarity | Multiplier |
|---|---:|
| Common | 1.0 |
| Rare | 1.2 |
| Epic | 1.5 |
| Legendary | 2.0 |
| Mythic | 3.0 |

### 18.4. Fragment drop

Normal enemy:

- Small chance.
- Mostly common material.

Elite:

- Better chance.
- Realm-specific material.

Boss:

- Ending reward table.

### 18.5. Reward server authority

Combat reward should be server-authoritative.

Options:

1. Server grants reward after battle result validation.
2. Server only grants all rewards at dream completion.

MVP recommendation:

- Track combat rewards during run.
- Commit final inventory at dream completion.
- If failed, grant only allowed consolation rewards.

---

## 19. Combat Validation & Anti-Cheat

### 19.1. Threats

Players may try to:

- Fake win result.
- Modify Beast stats.
- Skip cooldown.
- Claim reward multiple times.
- Send impossible damage.
- Avoid HP loss.
- Trigger hidden ending without conditions.

### 19.2. Validation models

#### Model A — Full server simulation

Server simulates every action.

Pros:

- Strong anti-cheat.
- Accurate.

Cons:

- More backend work.
- More latency.
- Harder for mobile offline tolerance.

#### Model B — Client simulation + server validation

Client simulates battle. Server checks if outcome is plausible.

Pros:

- Faster MVP.
- Lower server cost.

Cons:

- Weaker anti-cheat.

#### Model C — Deterministic simulation with action log

Client sends action log. Server replays using same seed.

Pros:

- Strong and scalable.
- Good for PvP.

Cons:

- Needs deterministic design.

### 19.3. MVP recommendation

Use Model B for early prototype, then move toward Model C.

MVP validation checks:

- Beast snapshot matches server.
- Enemy stats match seed.
- Battle duration plausible.
- Number of turns plausible.
- Skills used respect cooldown.
- Damage values within tolerance.
- Ending condition matches run state.
- Reward claim not duplicated.

### 19.4. Battle action log

Client should record:

```json
{
  "battleId": "BATTLE-001",
  "turns": [
    {
      "turn": 1,
      "actorId": "BEAST-009",
      "action": "use_skill",
      "skillId": "radiant_breath",
      "targetIds": ["enemy_001"],
      "result": {
        "damage": 230,
        "statusApplied": ["blind"]
      }
    }
  ]
}
```

### 19.5. Suspicious result handling

If suspicious:

- Do not immediately ban.
- Mark run as needs review.
- Deny rare reward if invalid.
- Log action.
- Return generic error if necessary.

---

## 20. Battle Data Models

### 20.1. Battle instance

```json
{
  "battleId": "BATTLE-001",
  "runId": "RUN-123456",
  "encounterId": "enc_ocean_03",
  "battleSeed": 982133,
  "status": "InProgress",
  "playerCombatants": [],
  "enemyCombatants": [],
  "turnNumber": 1,
  "roundNumber": 1,
  "createdAt": "2026-05-24T12:04:00Z"
}
```

### 20.2. Encounter data

```json
{
  "encounterId": "enc_ocean_03",
  "encounterType": "Elite",
  "enemyIds": ["drowned_echo", "mirror_jellyfish"],
  "levelScaling": "selected_beast",
  "rewardTableId": "ocean_elite_minor",
  "canFlee": false,
  "isRequired": true
}
```

### 20.3. Combat result

```json
{
  "battleId": "BATTLE-001",
  "result": "Victory",
  "turnsTaken": 7,
  "playerHpRemaining": 842,
  "enemiesDefeated": ["enemy_001", "enemy_002"],
  "skillsUsed": ["radiant_breath", "aurora_wave"],
  "statusApplied": ["blind"],
  "actionLogHash": "abc123",
  "clientDurationSeconds": 74
}
```

### 20.4. Skill definition

```json
{
  "skillId": "fear_howl",
  "name": "Fear Howl",
  "affinity": "Shadow",
  "damageType": "None",
  "targetType": "AllEnemies",
  "cooldown": 3,
  "effects": [
    {
      "type": "DEBUFF_STAT",
      "stat": "ATK",
      "value": -0.15,
      "duration": 2
    }
  ]
}
```

---

## 21. UI/UX Requirements

### 21.1. Battle screen layout

Required elements:

- Player Beast portrait/model.
- Enemy models.
- HP bars.
- Status icons.
- Turn order bar.
- Skill buttons.
- Cooldown numbers.
- Basic attack button.
- Defend button.
- Battle log compact.
- Speed up toggle after tutorial.
- Settings/pause.

### 21.2. Skill button

Skill button must show:

- Name.
- Icon.
- Cooldown.
- Target type.
- Disabled state if cooldown.
- Tooltip/long press details.

Mobile:

- Tap shows quick target if needed.
- Long press shows details.

### 21.3. Status icon tooltip

Tap/hover status icon:

```text
Dream Burn
Loses 5% max HP at start of turn.
2 turns remaining.
```

### 21.4. Damage feedback

Need clear combat feedback:

- Normal damage number.
- Crit damage emphasized.
- Weak/Resist label.
- Shield absorb number.
- Heal number.
- Status applied text.
- Status resisted text.

### 21.5. Turn order clarity

Show at least:

```text
Beast → Enemy A → Enemy B → Beast
```

If using round-based, UI can show current round order.

### 21.6. Boss telegraph

When boss charges:

- Text warning.
- Animation.
- Turn order marker.
- Skill icon above boss.

Example:

```text
Abyss Lantern Keeper is gathering light...
```

---

## 22. Animation & VFX Requirements

### 22.1. Player Beast combat animation

Minimum:

- Idle.
- Basic attack.
- Skill 1.
- Skill 2.
- Hit.
- Defeat.
- Victory.
- Status affected.
- Defend.

### 22.2. Enemy animation

Minimum:

- Idle.
- Attack.
- Skill.
- Hit.
- Defeat.
- Status affected.

### 22.3. Boss animation

Minimum:

- Idle.
- Basic attack.
- Signature skill.
- Phase transition.
- Hit.
- Defeat/resolution.
- Charge telegraph.

### 22.4. VFX by Affinity

| Affinity | VFX Style |
|---|---|
| Light | Glow, rays, soft particles |
| Shadow | Smoke, dark flame, thorns |
| Memory | Glass shards, echo images, ink |
| Emotion | Color waves, heart/spark pulse but not too cute |
| Time | Clock rings, sand, rewind trails |

### 22.5. Combat speed

Need speed-up option after tutorial:

- 1x.
- 1.5x.
- 2x.

MVP can implement only 1x and 2x if needed.

---

## 23. Audio Requirements

### 23.1. Required combat audio

- Battle start stinger.
- Basic attack SFX.
- Skill SFX per Affinity.
- Hit SFX.
- Crit SFX.
- Heal SFX.
- Shield SFX.
- Status apply SFX.
- Enemy defeat SFX.
- Victory jingle.
- Defeat jingle.
- Boss phase SFX.

### 23.2. Music

Combat music should vary by:

- Normal battle.
- Boss battle.
- Nightmare encounter.
- Realm theme.

MVP can use:

- 1 normal battle track.
- 1 boss track.
- 1 Nightmare variant layer.

---

## 24. Beast Role Archetypes

### 24.1. Roles

| Role | Description |
|---|---|
| Striker | High single-target damage |
| Sweeper | AoE damage |
| Guardian | Tank/shield |
| Healer | Sustain |
| Disruptor | Debuff/status |
| Controller | Turn manipulation |
| Hybrid | Mixed role |

### 24.2. Role by Species tendency

| Species | Common Roles |
|---|---|
| Dragon | Striker, Sweeper |
| Avian | Speed Striker, Disruptor |
| Beast | Balanced Striker, Guardian |
| Aquatic | Guardian, Sustain |
| Spirit | Magic Striker, Disruptor |
| Construct | Tank, Control |

### 24.3. Role by Affinity tendency

| Affinity | Common Roles |
|---|---|
| Light | Healer, Guardian |
| Shadow | Striker, Debuffer |
| Memory | Disruptor, Utility |
| Emotion | Buffer, Hybrid |
| Time | Controller, Speed |

---

## 25. Example Beast Combat Kits

## 25.1. Aurora Wyrm

- Species: Dragon.
- Affinity: Light.
- Damage Type: Magic.
- Role: Magic Striker / Support.
- Rarity: Epic.

Stats identity:

- High MATK.
- Good MDEF.
- Medium SPD.
- Low ATK.

Skills:

### Basic Attack — Arcane Bite

- Magic.
- 0.9 MATK.
- Single target.

### Active 1 — Radiant Breath

- Light Magic.
- 1.6 MATK.
- 20% chance Blind.
- Cooldown: 3.

### Active 2 — Aurora Wave

- Light Magic.
- 0.8 MATK to all enemies.
- Self +10% SPD for 2 turns.
- Cooldown: 4.

### Passive — Sky Guardian

- Once per battle.
- When HP < 40%, heal 8% max HP.

---

## 25.2. Shadow Lupin

- Species: Beast.
- Affinity: Shadow.
- Damage Type: Physical.
- Role: Physical Striker / Debuffer.
- Rarity: Epic.

### Basic Attack — Quick Bite

- Physical.
- 1.0 ATK.

### Active 1 — Night Claw

- Shadow Physical.
- 1.7 ATK.
- If target has debuff, +15% damage.
- Cooldown: 3.

### Active 2 — Fear Howl

- All enemies.
- Reduce ATK by 15% for 2 turns.
- 30% chance apply Curse.
- Cooldown: 4.

### Passive — First Blood Instinct

- First attack in battle deals +8% damage.

---

## 25.3. Abyss Serpent

- Species: Aquatic.
- Affinity: Memory.
- Damage Type: Magic.
- Role: Sustain / Disruptor.
- Rarity: Epic.

### Basic Attack — Ripple Fang

- Magic.
- 0.9 MATK.

### Active 1 — Memory Coil

- Memory Magic.
- 1.3 MATK.
- Apply Memory Drain: -15% MATK for 2 turns.
- Cooldown: 3.

### Active 2 — Deep Recall

- Heal self 15% max HP.
- If target enemy has Memory Drain, also gain Shield.
- Cooldown: 4.

### Passive — Beneath the Surface

- At battle start, gain +10% Status Resistance.

---

## 25.4. Time Serpent

- Species: Spirit/Aquatic.
- Affinity: Time.
- Damage Type: Magic.
- Role: Controller.
- Rarity: Legendary.

### Basic Attack — Temporal Bite

- Magic.
- 0.85 MATK.

### Active 1 — Time Warp

- Magic.
- 1.1 MATK.
- Gain Haste +20% SPD for 2 turns.
- Cooldown: 4.

### Active 2 — Rewind

- Reduce own active skill cooldowns by 1.
- Heal 5% max HP.
- Cooldown: 5.

### Passive — Slipping Seconds

- 15% chance to reduce incoming damage by 30%.

Balance warning:

- Avoid giving extra full turn in MVP unless heavily limited.

---

## 26. Example Enemy Kits

## 26.1. Whisper Moth

- Realm: Forest of Lost Voices.
- Affinity: Memory.
- Role: Debuffer.

Skills:

- Dust Bite: 0.9 MATK.
- Whisper Dust: 25% Memory Drain.
- Passive: +10% evasion-like effect can be replaced with +10% damage reduction in MVP.

## 26.2. Drowned Echo

- Realm: Ocean of Memories.
- Affinity: Memory.
- Role: Sustain enemy.

Skills:

- Water Touch: 0.9 MATK.
- Sinking Memory: Apply Lucid Shock.
- Drowned Resilience: Heal 5% HP when below 30%, once.

## 26.3. Broken Toy Knight

- Realm: Childhood Playground.
- Affinity: Emotion.
- Role: Guardian.

Skills:

- Wooden Slash: 1.0 ATK.
- Toy Shield: Gain Shield.
- Brave Pretend: +10% ATK when HP below 50%.

## 26.4. Second Hand Imp

- Realm: Clocktower of Time.
- Affinity: Time.
- Role: Speed disruptor.

Skills:

- Tick Scratch: 0.9 ATK.
- Stolen Second: Reduce target SPD by 15%.
- Hurry: Gain Haste.

---

## 27. Example Boss Kits

## 27.1. Abyss Lantern Keeper

### Identity

- Realm: Ocean of Memories.
- Affinity: Memory.
- Damage Type: Magic.
- Role: Boss / Disruptor.

### Stats

- High HP.
- High MATK.
- Medium DEF.
- High MDEF.
- Low/medium SPD.

### Skills

#### Lantern Strike

- Magic.
- 1.0 MATK.
- Single target.

#### Memory Drain

- Magic.
- 1.1 MATK.
- Apply -15% ATK/MATK for 2 turns.
- Cooldown: 3.

#### Lantern Pulse

- Magic.
- 1.4 MATK.
- 25% chance Blind.
- Cooldown: 4.
- Telegraph one turn before use.

#### Deepwater Shield

- Trigger at 50% HP.
- Gain Shield = 15% max HP.
- Once per battle.

### Hidden condition

If player has heard song and uses non-lethal Light/Memory action at low boss HP, boss can be spared.

---

## 27.2. Hollow Treant

### Identity

- Realm: Forest of Lost Voices.
- Affinity: Shadow/Memory.
- Role: Tank / DoT.

### Skills

#### Root Slam

- Physical.
- 1.1 ATK.

#### Buried Words

- Apply Dream Burn.
- Cooldown: 3.

#### Silence Roots

- Apply Memory Drain + reduce healing.
- Cooldown: 4.

#### Hollow Regrowth

- At 40% HP, heals 10% max HP unless player previously purified root node.

---

## 27.3. The Hollow Child

### Identity

- Realm: Childhood Playground.
- Affinity: Emotion/Shadow.
- Role: Trickster.

### Skills

#### Wooden Sword

- Physical.
- 1.0 ATK.

#### Pretend Rules

- Randomly applies one:
  - Boss gains Inspire.
  - Player gets Blind.
  - Both gain Haste.
- Cooldown: 3.

#### Tantrum Burst

- Shadow/Emotion.
- 1.5 MATK.
- Stronger if player chose Corrupt route.
- Cooldown: 4.

### Hidden condition

Find lost ticket before fight. During fight, use Defend on the turn Hollow Child cries. Unlock spare option.

---

## 28. PvP Combat Design

**Post-MVP.**

### 28.1. PvP goals

PvP should:

- Give Beast long-term value.
- Encourage build diversity.
- Create seasonal goals.
- Avoid pay-to-win perception.
- Be easy to simulate and validate.

### 28.2. PvP format phase 1

- 1v1.
- Auto battle.
- Player sets skill priority.
- Battle resolved server-side.
- Player watches replay or instant result.

### 28.3. Skill priority example

```json
{
  "beastId": "BEAST-009",
  "priority": [
    {
      "condition": "self_hp_below_40",
      "skillId": "aurora_wave"
    },
    {
      "condition": "enemy_has_no_blind",
      "skillId": "radiant_breath"
    },
    {
      "condition": "default",
      "skillId": "basic_attack"
    }
  ]
}
```

### 28.4. PvP rating

Beast Rating could consider:

- Level.
- Rarity.
- Stat total.
- Skill tier.
- Relic.
- PvP history.

### 28.5. PvP reward

Recommended:

- Seasonal badge.
- Skin fragment.
- Profile frame.
- Dreamland decoration.
- Small currency.

Avoid:

- Large power reward.
- Exclusive overpowered Relic.
- Reward that makes winners win more.

### 28.6. PvP normalization

Options:

#### Normalized Level

All Beast treated as level 30 in PvP.

#### Bracketed PvP

Level ranges:

- 1–10.
- 11–20.
- 21–40.

#### Separate PvP Stat Modifier

Skill values adjusted in PvP.

Recommendation:

- Start with bracketed + normalized within bracket.

---

## 29. Balance Guidelines

### 29.1. Battle duration

| Encounter | Target Turns |
|---|---:|
| Normal | 3–6 Beast turns |
| Elite | 5–8 Beast turns |
| Boss | 8–14 Beast turns |

### 29.2. Enemy damage

Normal enemy should not kill player from full HP unless:

- Player is underleveled.
- Player ignores mechanic.
- Player enters with low HP.

Boss can threaten lethal but should telegraph big attacks.

### 29.3. Healing balance

Healing should:

- Help sustain.
- Not allow infinite stall.
- Be limited by cooldown.
- Be countered by Curse or burst.

### 29.4. Status balance

Status should:

- Matter.
- Not lock down enemies permanently.
- Have reduced effect on boss.
- Have visible duration.

### 29.5. Cooldown balance

Recommended:

| Skill Strength | Cooldown |
|---|---:|
| Minor | 2 |
| Medium | 3 |
| Strong | 4 |
| Very Strong | 5 |

Avoid cooldown 1 except very weak utility.

### 29.6. AoE balance

In 1 vs 3 encounters, AoE can be strong. Keep AoE power lower.

Example:

- Single target strong skill: 1.7 ATK.
- AoE skill: 0.8–1.0 ATK to all.

### 29.7. Time affinity balance

Time is dangerous to balance.

Rules:

- Avoid repeated extra turns.
- Cooldown manipulation should be limited.
- Delay should be weaker on boss.
- Time damage should be moderate.

### 29.8. Shadow risk/reward

Shadow can have higher damage but drawbacks:

- Self damage.
- Lower defense.
- Healing reduction.
- Needs debuff setup.
- Corruption interaction.

### 29.9. Light sustain balance

Light can heal/shield but lower burst.

Rules:

- Heal cooldown 3–5.
- Shield duration short.
- Damage moderate.

---

## 30. Progression Integration

### 30.1. Beast EXP

Beast gains EXP from combat and Dream completion.

Combat EXP should be meaningful but not the only progression source.

### 30.2. Skill unlock

MVP:

- Beast starts with full kit.

Post-MVP:

- Active Skill 2 unlocks at level 3.
- Passive upgrade at level 10.
- Skill upgrade through materials.

### 30.3. Difficulty progression

As player grows:

- Enemy level scales.
- Higher rarity Dream appears.
- Boss mechanics get more complex.
- More hidden conditions require build choices.

### 30.4. New player onboarding

First combat should teach:

1. Basic attack.
2. Skill cooldown.
3. Enemy HP.
4. Victory reward.

Second/third combat can teach:

- Status effect.
- Affinity.
- Defend.
- Boss telegraph.

---

## 31. Tutorial Combat

### 31.1. First battle design

Enemy:

- Weak Nightmare Wisp.
- Low HP.
- No dangerous skill.

Player Beast:

- Luma or starter Beast.

Flow:

1. Player uses basic attack.
2. Enemy attacks.
3. Player uses Skill 1.
4. Enemy defeated.
5. Reward shown.

### 31.2. Tutorial messages

Keep messages short.

Example:

```text
Skills are stronger than basic attacks, but need time to return.
```

```text
This enemy is weak to Light. Strong hits deal more damage.
```

```text
The enemy is charging. Defend to reduce the next attack.
```

### 31.3. Tutorial skip

Returning players should skip tutorial.

---

## 32. Technical Requirements

### 32.1. Unity combat modules

- BattleSceneController.
- CombatantView.
- CombatStateManager.
- TurnOrderManager.
- SkillResolver.
- StatusEffectManager.
- DamageCalculator.
- BattleUIController.
- BattleAnimationController.
- BattleLogRecorder.
- BattleResultReporter.

### 32.2. Backend combat modules

- BattleInstanceService.
- CombatValidationService.
- EnemyScalingService.
- RewardStagingService.
- BattleLogService.
- AntiCheatService.

### 32.3. Deterministic random

Use battleSeed for:

- Damage variance.
- Crit roll.
- Status roll.
- Enemy AI tie-breaker.

This helps replay/validation.

### 32.4. Config-driven design

Skills, status, enemies and encounters should be data-driven.

Avoid hardcoding skill behavior when possible.

Config examples:

- skills.json.
- status_effects.json.
- enemies.json.
- encounters.json.
- boss_patterns.json.

### 32.5. Versioning

Battle configs need version.

```json
{
  "combatConfigVersion": "1.0.3"
}
```

Run should store config version to debug old battles.

---

## 33. API Requirements

### 33.1. Start battle

```text
POST /battle/start
```

Request:

```json
{
  "runId": "RUN-123456",
  "nodeId": "node_enemy_03"
}
```

Response:

```json
{
  "battleId": "BATTLE-001",
  "battleSeed": 982133,
  "encounter": {},
  "playerSnapshot": {},
  "enemySnapshots": [],
  "combatConfigVersion": "1.0.0"
}
```

### 33.2. Submit battle result

```text
POST /battle/result
```

Request:

```json
{
  "battleId": "BATTLE-001",
  "result": "Victory",
  "turnsTaken": 7,
  "playerHpRemaining": 842,
  "actionLog": [],
  "clientDurationSeconds": 74
}
```

Response:

```json
{
  "validated": true,
  "nodeState": "Completed",
  "stagedRewards": [
    {
      "type": "EXP",
      "amount": 45
    }
  ],
  "runStateUpdates": ["enemy_03_defeated"]
}
```

### 33.3. Abandon battle

```text
POST /battle/abandon
```

Result:

- Marks battle abandoned.
- Dream run may become Failed/Abandoned depending rules.

---

## 34. QA Test Plan

### 34.1. Damage formula tests

- Physical damage vs DEF.
- Magic damage vs MDEF.
- Crit applies correctly.
- Affinity strong/weak applies.
- Shield absorbs correctly.
- Minimum damage works.
- Damage variance within range.

### 34.2. Turn order tests

- Higher SPD acts first.
- Tie-break works.
- Haste changes order next round.
- Slow changes order next round.
- Dead unit skipped.

### 34.3. Cooldown tests

- Skill unavailable during cooldown.
- Cooldown decreases correctly.
- Cooldown reset effects work.
- Skill cannot be used twice illegally.

### 34.4. Status tests

- Dream Burn ticks.
- Sleep skips turn.
- Sleep breaks on damage.
- Memory Drain reduces correct stats.
- Blind applies correct debuff.
- Curse reduces healing.
- Shield expires or depletes.
- Boss reduced control works.

### 34.5. Passive tests

- Passive triggers at correct condition.
- Once-per-battle passive triggers once.
- Passive does not trigger after death.
- Passive respects cooldown/internal state.

### 34.6. Boss tests

- Phase transition at correct HP.
- Telegraph appears.
- Boss pattern changes.
- Hidden combat condition triggers.
- Boss reward/ending route correct.

### 34.7. Anti-cheat tests

- Invalid damage rejected.
- Invalid cooldown rejected.
- Fake victory rejected.
- Duplicate battle result rejected.
- Wrong Beast snapshot rejected.
- Wrong enemy level rejected.

---

## 35. Analytics Events

### 35.1. Required events

```text
battle_started
battle_turn_started
battle_action_selected
battle_skill_used
battle_status_applied
battle_status_resisted
battle_damage_dealt
battle_heal_done
battle_unit_defeated
battle_phase_changed
battle_won
battle_lost
battle_abandoned
battle_result_submitted
battle_result_validated
battle_result_rejected
```

### 35.2. Event properties

```json
{
  "battleId": "BATTLE-001",
  "runId": "RUN-123456",
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "encounterType": "Elite",
  "realm": "ocean_of_memories",
  "rarity": "Epic",
  "selectedBeastId": "BEAST-009",
  "selectedBeastLevel": 12,
  "enemyCount": 2
}
```

### 35.3. Balance metrics

- Average turns per encounter.
- Win rate by encounter.
- Win rate by Beast.
- Skill usage rate.
- Status application rate.
- Average HP remaining.
- Boss fail rate.
- Time to complete battle.
- Affinity advantage impact.
- Relic usage impact.
- Corrupt vs Purify combat success.

---

## 36. MVP Implementation Plan

### Sprint 1 — Basic Combat Prototype

Deliver:

- Battle scene.
- 1 Beast.
- 1 enemy.
- Basic attack.
- HP/damage.
- Win/lose.

### Sprint 2 — Turn & Skill System

Deliver:

- Turn order.
- 2 active skills.
- Cooldown.
- Basic UI.

### Sprint 3 — Stats & Damage Types

Deliver:

- ATK/MATK.
- DEF/MDEF.
- Physical/Magic.
- Crit.
- Affinity modifier.

### Sprint 4 — Status Effects

Deliver:

- Dream Burn.
- Memory Drain.
- Shield.
- Blind.
- Curse.
- Sleep or Lucid Shock.

### Sprint 5 — Enemy AI & Boss

Deliver:

- AI priority rules.
- 3 enemy types.
- 1 boss with phase.
- Telegraph.

### Sprint 6 — Backend Validation

Deliver:

- Battle start API.
- Combat snapshot.
- Submit result.
- Plausibility validation.
- Reward staging.

### Sprint 7 — Polish & Balance

Deliver:

- VFX/SFX.
- Better UI.
- Battle log.
- Analytics.
- QA pass.
- Balance numbers.

---

## 37. Open Design Questions

1. Should HP persist fully between battles or partially recover?
2. Should Basic Attack use ATK always, or Beast preferred damage type?
3. Should Accuracy/Evasion exist in MVP?
4. Should Sleep be in MVP if it can frustrate players?
5. Should boss be immune to Sleep or transform it into reduced effect?
6. Should Time affinity use action gauge in MVP?
7. Should Relic active abilities exist in MVP?
8. Should combat rewards be granted immediately or staged until Dream completion?
9. Should PvP use same formulas as PvE?
10. Should Corruption affect combat stats directly?

Recommended MVP answers:

1. Partial recover.
2. Basic Attack uses Beast default damage preference.
3. No full Accuracy/Evasion in MVP.
4. Use Sleep carefully or replace with Lucid Shock first.
5. Boss transforms hard CC into reduced effect.
6. No, use round-based SPD.
7. Mostly passive Relics.
8. Stage rewards until Dream completion.
9. Same base formulas, separate PvP modifiers later.
10. Only via specific Relic/Dream modifiers, not global stat penalty.

---

## 38. Glossary

| Term | Meaning |
|---|---|
| Combatant | Any unit in battle |
| Beast | Player-owned creature |
| Enemy | PvE opponent |
| Boss | Major encounter |
| Skill | Action with effect/cooldown |
| Passive | Auto-triggered ability |
| Cooldown | Turns before skill can be used again |
| Affinity | Element/emotional type |
| Physical Damage | Damage based on ATK vs DEF |
| Magic Damage | Damage based on MATK vs MDEF |
| Status Effect | Temporary buff/debuff/control |
| DoT | Damage over time |
| Shield | Temporary damage absorption |
| Crit | Critical hit |
| Battle Seed | Random seed for deterministic combat |
| Action Log | Record of combat actions |
| Telegraph | Warning before powerful boss action |

---

## 39. Final Combat Statement

Combat trong **Myth of Dreams** không cần phức tạp như hardcore tactics game. Nó cần nhanh, rõ, có cảm xúc và đủ chiều sâu để mỗi Beast có lý do tồn tại.

Một trận combat tốt phải khiến người chơi cảm thấy:

- Beast của mình có cá tính.
- Skill mình chọn có ý nghĩa.
- Enemy thuộc về Dream đang khám phá.
- Victory giúp mình tiến gần hơn đến ending.
- Reward nhận được là một phần của câu chuyện.

Combat System cần phục vụ fantasy cốt lõi:

> Người chơi không chỉ đánh bại quái vật. Họ đang đối mặt với những ký ức bị tổn thương và quyết định cách giấc mơ ấy kết thúc.\n