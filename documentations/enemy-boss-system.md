---
title: "Enemy & Boss System"
description: "Myth of Dreams - Enemy & Boss System"
date: "2026-06-03"
category: "game-design"
order: 15
tags: ["game-design","enemy"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, dream_system.md, combat_system.md, beast_system.md, relic_system.md, economy_reward_system.md  
**Owner:** Game Design / Combat Design / Narrative / Art / Backend  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Enemy & Boss System** cho **Myth of Dreams**.

Enemy và Boss là các thực thể đối đầu với Beast của người chơi trong Daily Dream. Họ không chỉ là “quái vật để đánh”, mà là biểu hiện của:

- Ký ức bị bóp méo.
- Cảm xúc bị chôn vùi.
- Giấc mơ không được kết thúc.
- Nightmare Corruption.
- Guardian bị tha hóa.
- Các mảnh Dreamverse đang tự vệ.

Tài liệu này dùng để chuẩn hóa:

- Enemy taxonomy.
- Enemy role.
- Boss design.
- AI behavior.
- Encounter composition.
- Enemy scaling.
- Realm enemy pools.
- Boss phase.
- Hidden ending combat condition.
- Reward và drop.
- Backend/client data model.
- QA và analytics.

---

## 1. Enemy & Boss Design Vision

### 1.1. Enemy fantasy

Enemy trong Myth of Dreams là những sinh vật được sinh ra khi dream bị rối loạn.

Một enemy có thể là:

- Một lời xin lỗi bị nuốt lại quá lâu.
- Một con bướm ăn mất giọng nói.
- Một chiếc đèn lồng dưới nước không chịu tắt.
- Một món đồ chơi bị bỏ quên.
- Một kim đồng hồ đánh cắp khoảnh khắc.
- Một giấc mơ bị Nightmare Court biến thành lính canh.

Enemy không nên xuất hiện ngẫu nhiên không lý do. Mỗi enemy phải thuộc về Realm và theme của Daily Dream.

### 1.2. Boss fantasy

Boss là trung tâm cảm xúc hoặc xung đột của một Dream.

Boss có thể là:

- Guardian của Realm.
- Ký ức bị tha hóa.
- Nightmare noble.
- Echo bị mắc kẹt.
- Dreamborn bị tổn thương.
- Biểu tượng của một lựa chọn chưa được giải quyết.

Một Boss tốt không chỉ mạnh hơn enemy thường. Boss phải khiến người chơi hiểu rõ:

> “Đây là điều mà giấc mơ này đang đau vì nó.”

### 1.3. Design statement

Enemy và Boss trong Myth of Dreams phải:

> Đọc được nhanh, chiến đấu rõ vai trò, khớp với Realm, và kể được một phần câu chuyện bằng cả gameplay lẫn hình ảnh.

### 1.4. Design pillars

#### 1. Realm Identity

Enemy phải phản ánh Realm.

Forest enemy thì liên quan đến tiếng nói, lá, rừng, im lặng.  
Ocean enemy thì liên quan đến nước, ký ức chìm, phản chiếu.  
Playground enemy thì liên quan đến đồ chơi, tiếng cười, tuổi thơ méo mó.

#### 2. Combat Readability

Người chơi phải hiểu enemy đang làm gì.

Enemy cần có:

- Silhouette rõ.
- Role rõ.
- Skill telegraph nếu nguy hiểm.
- Status icon rõ.
- Không dùng quá nhiều hiệu ứng lẫn lộn.

#### 3. Emotional Logic

Enemy không chỉ là stat block.

Mỗi enemy nên có một “emotional logic”:

- Nó sợ gì?
- Nó bảo vệ gì?
- Nó bị bóp méo từ điều gì?
- Vì sao nó tấn công người chơi?

#### 4. Boss as Narrative Climax

Boss phải là điểm giao giữa:

- Combat challenge.
- Dream story.
- Ending condition.
- Reward identity.
- Hidden path.

#### 5. Scalable Content

Enemy/Boss phải dễ thêm mới thông qua data, template và pool, tránh hardcode.

---

## 2. System Scope

### 2.1. MVP scope

MVP Enemy & Boss System bao gồm:

- 20–30 enemy cơ bản.
- 3–5 boss.
- 3 MVP Realms:
  - Forest of Lost Voices.
  - Ocean of Memories.
  - Childhood Playground.
- 5 enemy roles:
  - Attacker.
  - Defender.
  - Disruptor.
  - Support.
  - Trickster.
- 3 encounter types:
  - Normal.
  - Elite.
  - Boss.
- Simple AI priority system.
- Boss 1–2 phase.
- Enemy scaling theo Beast level và Dream rarity.
- Drop table liên kết Dream System.
- Hidden ending combat hooks.
- Backend enemy snapshot và validation.

### 2.2. Post-MVP scope

Sau MVP:

- Clocktower of Time enemy pool.
- Nightmare Citadel enemy pool.
- Realm Guardians.
- Mythic bosses.
- Multi-phase boss.
- Summon mechanic.
- PvP-like AI simulation.
- Seasonal enemy variants.
- Nightmare invasion.
- Elite affix.
- Boss challenge mode.
- Raid/event boss nếu cần.

### 2.3. Not in MVP

Không đưa vào MVP:

- Real-time enemy behavior.
- Complex tactical positioning.
- 5+ enemy trong một trận.
- Boss raid multiplayer.
- Multi-body boss quá phức tạp.
- Enemy equipment.
- Enemy procedural skill generation.
- Advanced AI planning.

---

## 3. Enemy Taxonomy

### 3.1. Enemy classification

Enemy được phân loại theo:

```text
Realm
  ↓
Enemy Category
  ↓
Combat Role
  ↓
Affinity
  ↓
Threat Level
  ↓
Variant
```

### 3.2. Enemy categories

| Category | Description |
|---|---|
| Minion | Enemy thường, đơn giản |
| Elite | Enemy mạnh hơn, có mechanic |
| Guardian | Mini-boss hoặc protector |
| Boss | Encounter chính |
| Nightmare Variant | Bản corrupt của enemy |
| Event Enemy | Seasonal/special |
| Summon | Unit tạm thời do boss gọi |
| Unremembered | Late-game Blank Mist entity |

### 3.3. Combat roles

| Role | Purpose |
|---|---|
| Attacker | Gây damage trực tiếp |
| Defender | Trâu, shield, kéo dài trận |
| Disruptor | Debuff/status |
| Support | Buff/heal enemy team |
| Trickster | Random, swap, copy, unusual effect |
| Controller | Speed/delay/turn manipulation |
| Boss | Có pattern/phase riêng |

### 3.4. Threat levels

| Threat | Description |
|---|---|
| Low | Tutorial/common enemy |
| Medium | Standard enemy |
| High | Elite |
| Very High | Boss |
| Mythic | Special boss/story enemy |

### 3.5. Variant types

| Variant | Meaning |
|---|---|
| Normal | Standard enemy |
| Lucid | Pure/light variant |
| Corrupt | Nightmare-influenced |
| Echoed | Replay/weaker version |
| Seasonal | Event appearance |
| Rare | Lower spawn chance, better drop |
| Ancient | Stronger lore version |

---

## 4. Enemy Data Structure

### 4.1. Enemy master definition

```json
{
  "enemyTemplateId": "whisper_moth",
  "name": "Whisper Moth",
  "category": "Minion",
  "realm": "Forest of Lost Voices",
  "role": "Disruptor",
  "affinity": "Memory",
  "damageType": "Magic",
  "threatLevel": "Low",
  "baseStats": {
    "hp": 520,
    "atk": 40,
    "matk": 95,
    "def": 35,
    "mdef": 60,
    "spd": 115,
    "luck": 30
  },
  "skills": ["dust_touch", "whisper_dust"],
  "passives": [],
  "aiProfileId": "ai_disruptor_basic",
  "dropTableId": "forest_common_enemy_drop",
  "visualAssetId": "enemy_whisper_moth",
  "animationSetId": "anim_whisper_moth",
  "sfxSetId": "sfx_moth_memory",
  "loreTags": ["forest", "voice", "memory", "silence"]
}
```

### 4.2. Enemy instance in battle

```json
{
  "enemyInstanceId": "ENEMY-RUN-001",
  "templateId": "whisper_moth",
  "level": 6,
  "variant": "Normal",
  "scaledStats": {
    "hp": 720,
    "atk": 55,
    "matk": 132,
    "def": 48,
    "mdef": 84,
    "spd": 119,
    "luck": 32
  },
  "currentHp": 720,
  "cooldowns": {},
  "statusEffects": [],
  "aiState": {},
  "spawnNodeId": "node_enemy_02"
}
```

### 4.3. Boss master definition

```json
{
  "bossTemplateId": "abyss_lantern_keeper",
  "name": "Abyss Lantern Keeper",
  "realm": "Ocean of Memories",
  "category": "Boss",
  "role": "BossDisruptor",
  "affinity": "Memory",
  "damageType": "Magic",
  "baseStats": {
    "hp": 2600,
    "atk": 60,
    "matk": 170,
    "def": 90,
    "mdef": 140,
    "spd": 80,
    "luck": 40
  },
  "skills": ["lantern_strike", "memory_drain", "lantern_pulse", "deepwater_shield"],
  "phaseSetId": "abyss_lantern_keeper_phases",
  "aiProfileId": "ai_boss_lantern_keeper",
  "endingHooks": ["spare_at_low_hp_with_lantern_song"],
  "dropTableId": "ocean_lantern_boss_drop",
  "loreEntryId": "abyss_lantern_keeper_lore",
  "visualAssetId": "boss_abyss_lantern_keeper"
}
```

### 4.4. Required fields

Every enemy needs:

- Template ID.
- Name.
- Realm.
- Category.
- Role.
- Affinity.
- Damage Type.
- Base stats.
- Skills.
- AI profile.
- Drop table.
- Visual/animation reference.
- Lore tags.

Every boss additionally needs:

- Phase set.
- Boss mechanic.
- Ending hooks.
- Boss reward reference.
- Narrative description.

---

## 5. Enemy Stats & Scaling

### 5.1. Enemy stats

Enemies use same core stats as Beast:

| Stat | Meaning |
|---|---|
| HP | Health |
| ATK | Physical damage |
| MATK | Magic damage |
| DEF | Physical defense |
| MDEF | Magic defense |
| SPD | Turn order |
| LUCK | Rarely used, crit/status/drop flavor |

### 5.2. Base stat by role

| Role | HP | ATK | MATK | DEF | MDEF | SPD |
|---|---:|---:|---:|---:|---:|---:|
| Attacker | Medium | High | Medium/High | Low | Low | Medium |
| Defender | High | Low | Low | High | High | Low |
| Disruptor | Medium | Low | Medium | Low | Medium | High |
| Support | Medium | Low | Medium | Medium | Medium | Medium |
| Trickster | Low/Med | Medium | Medium | Low | Medium | High |
| Controller | Medium | Low | Medium | Medium | Medium | High |
| Boss | High | Medium | High | Medium | High | Custom |

### 5.3. Scaling input

Enemy scaling uses:

- Selected Beast level.
- Dream rarity.
- Realm progression.
- Encounter type.
- Corruption modifier.
- New player protection.

### 5.4. Enemy level formula

MVP recommendation:

```text
EnemyLevel = SelectedBeastLevel + RarityModifier + EncounterModifier
```

Rarity modifier:

| Rarity | Modifier |
|---|---:|
| Common | -1 |
| Rare | 0 |
| Epic | +1 |
| Legendary | +2 |
| Mythic | +3 |

Encounter modifier:

| Encounter | Modifier |
|---|---:|
| Normal | 0 |
| Elite | +1 |
| Boss | +2 |
| Nightmare Variant | +2 |

Clamp:

```text
EnemyLevel = clamp(EnemyLevel, RealmMinLevel, RealmMaxLevel)
```

### 5.5. Stat scaling formula

```text
ScaledStat = BaseStat × LevelMultiplier × RarityMultiplier × EncounterMultiplier × VariantMultiplier
```

Level multiplier:

```text
LevelMultiplier = 1 + 0.07 × (EnemyLevel - 1)
```

Rarity multiplier:

| Dream Rarity | Multiplier |
|---|---:|
| Common | 0.9 |
| Rare | 1.0 |
| Epic | 1.15 |
| Legendary | 1.35 |
| Mythic | 1.6 |

Encounter multiplier:

| Encounter | HP | Damage | Defense |
|---|---:|---:|---:|
| Normal | 1.0 | 1.0 | 1.0 |
| Elite | 1.35 | 1.15 | 1.1 |
| Boss | 2.8–4.0 | 1.25 | 1.15 |
| Summon | 0.5–0.8 | 0.7 | 0.7 |

### 5.6. New player protection

First 3 days or tutorial period:

- Enemy damage -10%.
- Boss HP -10%.
- No elite double-status combo.
- No hard counter enemy.
- Defeat grants small consolation.

### 5.7. Scaling warning

Avoid making enemies always perfectly match player level in a way that removes progression feeling.

Use:

- Some lower-level enemies.
- Elite/boss as challenge.
- Higher rarity as real difficulty jump.
- Optional hard path for stronger players.

---

## 6. Enemy Skill System

### 6.1. Enemy skill rules

Enemy skills use same framework as Beast skills:

- Skill power.
- Damage type.
- Affinity.
- Cooldown.
- Target type.
- Status effect.
- AI conditions.

### 6.2. Enemy skill complexity by category

| Category | Skill Complexity |
|---|---|
| Minion | 1 basic + 1 simple skill |
| Elite | 1 basic + 2 skills |
| Guardian | 1 basic + 2–3 skills |
| Boss | 1 basic + 3–5 skills |
| Nightmare Variant | Same skill + corrupt modifier |

### 6.3. Skill data example

```json
{
  "skillId": "whisper_dust",
  "name": "Whisper Dust",
  "affinity": "Memory",
  "damageType": "Magic",
  "targetType": "SingleEnemy",
  "power": 0.8,
  "cooldown": 3,
  "effects": [
    {
      "type": "APPLY_STATUS",
      "statusId": "memory_drain",
      "chance": 0.35,
      "duration": 2
    }
  ],
  "telegraph": false
}
```

### 6.4. Boss signature skill

Boss signature skill should:

- Match Realm theme.
- Be visually clear.
- Have cooldown.
- Often be telegraphed.
- Have counterplay.

Example:

```json
{
  "skillId": "lantern_pulse",
  "name": "Lantern Pulse",
  "affinity": "Memory",
  "damageType": "Magic",
  "targetType": "SingleEnemy",
  "power": 1.45,
  "cooldown": 4,
  "telegraph": true,
  "telegraphText": "Abyss Lantern Keeper raises its light...",
  "effects": [
    {
      "type": "APPLY_STATUS",
      "statusId": "blind",
      "chance": 0.25,
      "duration": 2
    }
  ]
}
```

### 6.5. Skill budget

Enemy skills should not all be high damage and high status.

Budget example:

- Damage only: higher power.
- Damage + status: lower power.
- AoE: lower power.
- Debuff only: no damage or very low damage.
- Boss skill: can be strong but telegraphed.

---

## 7. Enemy AI System

### 7.1. AI design goal

Enemy AI must be:

- Predictable enough to learn.
- Varied enough to avoid boredom.
- Data-driven.
- Lightweight for MVP.
- Easy to validate server-side.

### 7.2. AI model

MVP uses **priority rule AI**.

AI checks conditions from top to bottom. First valid rule triggers.

```json
{
  "aiProfileId": "ai_disruptor_basic",
  "rules": [
    {
      "condition": "target_not_has_status:memory_drain",
      "action": "use_skill",
      "skillId": "whisper_dust"
    },
    {
      "condition": "skill_available:basic_attack",
      "action": "use_skill",
      "skillId": "dust_touch"
    }
  ]
}
```

### 7.3. AI profiles

| AI Profile | Behavior |
|---|---|
| AggressiveBasic | Damage priority |
| DefensiveBasic | Shield/heal when low |
| DisruptorBasic | Apply debuff/status |
| SupportBasic | Buff ally/summon |
| TricksterBasic | Randomized pattern |
| BossPattern | Phase-based script |
| NightmareAggressive | Higher risk damage |
| Tutorial | Predictable teaching |

### 7.4. Aggressive AI

Behavior:

- Use highest damage skill when available.
- Basic attack otherwise.
- No defensive logic.

Example enemies:

- Shadow Lupin enemy variant.
- Broken Toy Knight aggressive variant.
- Nightmare Knight.

### 7.5. Defensive AI

Behavior:

- Shield/heal when HP low.
- Attack otherwise.

Example:

```json
{
  "rules": [
    {
      "condition": "self_hp_below:0.4",
      "action": "use_skill",
      "skillId": "shell_guard"
    },
    {
      "condition": "default",
      "action": "basic_attack"
    }
  ]
}
```

### 7.6. Disruptor AI

Behavior:

- Apply status if target lacks it.
- Refresh only when expired.
- Damage otherwise.

### 7.7. Trickster AI

Behavior:

- Uses unpredictable but bounded effects.
- Should not be too random in MVP.

Example:

- The Hollow Child.
- Mirror Jellyfish.

### 7.8. Boss AI

Boss AI uses:

- Phase.
- HP threshold.
- Turn count.
- Cooldown.
- Special flags.
- Hidden condition hooks.

Example:

```text
Turn 1: Basic
Turn 2: Memory Drain
Turn 3: Telegraph Lantern Pulse
Turn 4: Lantern Pulse
Repeat

At HP <= 50%:
Use Deepwater Shield once
Switch to Phase 2 pattern
```

### 7.9. AI randomness

MVP should use low randomness.

If random selection is needed:

- Use deterministic battle seed.
- Limit choices to valid similar power actions.
- Log AI decisions.

---

## 8. Encounter Design

### 8.1. Encounter purpose

Encounter is not just enemy group. It defines:

- Enemy composition.
- Node type.
- Difficulty.
- Reward.
- Narrative role.
- Hidden condition relevance.

### 8.2. Encounter types

| Type | Description |
|---|---|
| Tutorial | Teaches mechanic |
| Normal | Standard combat |
| Elite | Higher challenge |
| Boss | Dream climax |
| Optional | Can skip for risk/reward |
| Hidden | Secret encounter |
| Corrupt | Nightmare path |
| Guardian | Mini-boss or gatekeeper |

### 8.3. Encounter data model

```json
{
  "encounterId": "ocean_memory_elite_01",
  "encounterType": "Elite",
  "realm": "Ocean of Memories",
  "rarityRange": ["Rare", "Epic"],
  "enemySlots": [
    {
      "enemyTemplateId": "drowned_echo",
      "levelOffset": 0,
      "variant": "Normal"
    },
    {
      "enemyTemplateId": "mirror_jellyfish",
      "levelOffset": 1,
      "variant": "Normal"
    }
  ],
  "rewardTableId": "ocean_elite_minor",
  "requiredNodeTags": ["memory", "water"],
  "canFlee": false,
  "isOptional": false
}
```

### 8.4. Enemy count by rarity

| Dream Rarity | Normal | Elite | Boss |
|---|---:|---:|---:|
| Common | 1 enemy | Rarely | 1 simple boss/mini |
| Rare | 1–2 enemies | 1 elite possible | 1 boss |
| Epic | 2–3 enemies | 1–2 elite | 1 boss |
| Legendary | 2–3 stronger | 2 elite | 1 major boss |
| Mythic | Custom | Custom | Custom |

MVP max:

```text
Player Beast vs 3 enemies
```

### 8.5. Encounter pacing

A typical Rare Dream:

```text
Normal Encounter
  ↓
NPC/Choice
  ↓
Normal or Puzzle
  ↓
Elite Encounter
  ↓
Boss
```

A Common Dream:

```text
Normal Encounter
  ↓
Choice
  ↓
Boss/Mini-boss
```

### 8.6. Optional encounter

Optional encounter should offer:

- Extra fragment.
- Hidden clue.
- Relic chance.
- Corruption risk.
- Additional EXP.

But should not block main path.

### 8.7. Corrupt encounter

Corrupt encounter appears if player:

- Chooses Corrupt option.
- Has high Corruption.
- Uses Nightmare Relic.
- Enters Nightmare Shrine.

Rewards:

- Nightmare Shard.
- Shadow Fragment.
- Corrupt Relic chance.

Risks:

- Harder enemy.
- More status.
- Corruption gain.

---

## 9. Boss Design

### 9.1. Boss design requirements

Every Boss must have:

- Name.
- Realm.
- Lore premise.
- Visual identity.
- Combat role.
- Affinity.
- At least 3 skills.
- 1 signature mechanic.
- 1 phase change or special trigger.
- Ending interaction.
- Reward identity.
- Defeat/resolution text.

### 9.2. Boss structure

MVP boss structure:

```text
Intro
  ↓
Phase 1 pattern
  ↓
HP threshold / trigger
  ↓
Phase 2 mechanic
  ↓
Final resolution
  ↓
Ending hook
```

### 9.3. Boss phase rules

Boss phases can trigger by:

- HP threshold.
- Turn count.
- Player choice.
- Status applied.
- Hidden condition.
- Summon defeated.
- Relic equipped.

MVP recommended:

- HP threshold at 50%.
- Hidden condition at low HP.

### 9.4. Boss data model

```json
{
  "phaseSetId": "hollow_child_phases",
  "phases": [
    {
      "phaseId": "phase_1",
      "condition": "hp_above:0.5",
      "pattern": ["wooden_sword", "pretend_rules", "wooden_sword"]
    },
    {
      "phaseId": "phase_2",
      "condition": "hp_below_or_equal:0.5",
      "onEnter": ["tantrum_animation", "apply_inspire_self"],
      "pattern": ["tantrum_burst", "pretend_rules", "wooden_sword"]
    }
  ]
}
```

### 9.5. Boss telegraph

Strong boss skills should have telegraph.

Telegraph includes:

- Text.
- Animation.
- Icon.
- Sound.
- Turn order marker.

Example:

```text
The Hollow Child grips the broken crown and starts to cry...
```

Next turn:

```text
Tantrum Burst
```

### 9.6. Boss resolution types

| Resolution | Meaning |
|---|---|
| Defeat | Boss is destroyed or dispersed |
| Purify | Boss is healed/released |
| Corrupt | Boss power is extracted |
| Spare | Boss survives, Hidden route |
| Transform | Boss becomes Beast/Relic fragment |
| Escape | Boss returns later |

### 9.7. Boss and ending integration

Boss result can affect ending:

- Kill boss normally → Purify/standard.
- Use corrupt action → Corrupt.
- Spare boss with condition → Hidden.
- Fail to break shield → Failed or bad ending.
- Bring key Relic → alternate resolution.

---

## 10. Hidden Ending Combat Hooks

### 10.1. Purpose

Some Hidden Endings should require special combat behavior, not just dialogue.

### 10.2. Hook types

| Hook | Example |
|---|---|
| Non-lethal | Reduce boss to low HP, then spare |
| Status requirement | Apply Purify/Memory Drain at right moment |
| Relic requirement | Equip Lantern Relic |
| Defend timing | Defend during emotional outburst |
| No-kill summon | Avoid killing Echo summon |
| Turn limit | Survive 5 turns without defeating boss |
| Affinity use | Use Light/Memory skill |
| Choice flag | Must have selected hidden dialogue earlier |

### 10.3. Hook data model

```json
{
  "hookId": "lantern_keeper_spare",
  "bossId": "abyss_lantern_keeper",
  "requires": [
    {
      "type": "RUN_FLAG",
      "key": "heard_lantern_song"
    },
    {
      "type": "BOSS_HP_BELOW",
      "value": 0.2
    },
    {
      "type": "PLAYER_ACTION_TAG",
      "value": "light_or_memory_nonlethal"
    }
  ],
  "result": {
    "setRunFlag": "boss_spared",
    "triggerEndingCandidate": "Hidden"
  }
}
```

### 10.4. UX for hidden combat

Do not make hidden combat impossible to infer.

Hints can come from:

- NPC before battle.
- Boss dialogue.
- Relic glow.
- Beast reaction.
- Boss telegraph text.
- Archive clue.

Example:

```text
Mira: “Không phải mọi ánh sáng cần được kéo lên. Một số chỉ cần được nhìn thấy.”
```

During battle:

```text
The Lantern Keeper hesitates. Its light flickers like it is listening.
```

### 10.5. Failure behavior

If player misses hidden combat hook:

- Continue normal ending.
- Do not hard fail dream.
- Let player learn for future Dream Echo or similar dream.

---

## 11. Realm Enemy Pools

## 11.1. Forest of Lost Voices

### Realm combat identity

- Debuff.
- Memory Drain.
- Silence-like effects.
- Shadow roots.
- Enemies that punish reckless attacks lightly.
- Hidden path through listening.

### Enemy pool

| Enemy | Category | Role | Affinity | Damage |
|---|---|---|---|---|
| Whisper Moth | Minion | Disruptor | Memory | Magic |
| Mute Raven | Minion | Attacker | Shadow/Memory | Physical |
| Hollow Sapling | Minion | Defender | Memory | Physical |
| Silent Stag | Elite/Guardian | Guardian | Memory/Light | Magic |
| Hollow Treant | Boss | Boss Tank/DoT | Shadow/Memory | Mixed |
| Hush Mother | Boss/Legendary | Boss Controller | Memory/Shadow | Magic |

### Enemy details

#### Whisper Moth

Fantasy:

- A moth that eats unsaid words.

Combat:

- Applies Memory Drain.
- Fast but fragile.

Skills:

- Dust Touch.
- Whisper Dust.

Drop:

- Memory Fragment.
- Voice Dust.

#### Mute Raven

Fantasy:

- A raven that steals voices.

Combat:

- Physical attacker.
- Can apply Blind or reduce MATK.

Skills:

- Beak Strike.
- Stolen Cry.

Drop:

- Shadow Feather.
- Voice Fragment.

#### Hollow Sapling

Fantasy:

- Young tree grown from a buried apology.

Combat:

- Defender.
- Gains Shield.
- Low damage.

Skills:

- Root Guard.
- Bark Tap.

Drop:

- Forest Fragment.
- Apology Thread Fragment.

#### Silent Stag

Fantasy:

- A guardian that walks without sound.

Combat:

- Elite.
- High MDEF.
- Uses Light/Memory shield.

Skills:

- Antler Gleam.
- Quiet Ward.
- Memory Step.

Drop:

- Silent Stag Fragment.
- Memory Fragment.

#### Hollow Treant

Fantasy:

- A tree full of stitched mouths.

Combat:

- Boss.
- Dream Burn.
- Self-heal if roots remain.

Skills:

- Root Slam.
- Buried Words.
- Silence Roots.
- Hollow Regrowth.

Hidden Hook:

- If player unlocked apology name, can prevent Hollow Regrowth.

---

## 11.2. Ocean of Memories

### Realm combat identity

- Memory damage.
- Sustain.
- Blind/reflection.
- Shield.
- Water-themed defensive enemies.
- Hidden paths through listening/reflection.

### Enemy pool

| Enemy | Category | Role | Affinity | Damage |
|---|---|---|---|---|
| Drowned Echo | Minion | Disruptor | Memory | Magic |
| Mirror Jellyfish | Minion | Trickster | Emotion/Memory | Magic |
| Abyss Eel | Minion | Attacker | Shadow | Physical |
| Glass Turtle | Elite | Defender | Light/Memory | Magic |
| Lantern Warden | Elite | Support | Light/Memory | Magic |
| Abyss Lantern Keeper | Boss | Boss Disruptor | Memory | Magic |

### Enemy details

#### Drowned Echo

Fantasy:

- A memory that could not surface.

Combat:

- Applies Lucid Shock.
- Moderate sustain.

Skills:

- Water Touch.
- Sinking Memory.

Drop:

- Memory Fragment.
- Drowned Pearl Fragment.

#### Mirror Jellyfish

Fantasy:

- A jellyfish that reflects what player avoids.

Combat:

- Trickster.
- Can copy last buff or apply Blind.

Skills:

- Mirror Sting.
- Reflection Pulse.

Drop:

- Mirror Shard.
- Emotion Fragment.

#### Abyss Eel

Fantasy:

- A predator feeding on sunken fragments.

Combat:

- Fast attacker.
- Shadow damage.
- Bonus against debuffed target.

Skills:

- Abyss Bite.
- Deep Cut.

Drop:

- Shadow Fragment.
- Ocean Fragment.

#### Glass Turtle

Fantasy:

- A turtle carrying a tiny sunken city on its shell.

Combat:

- Defender.
- Shield.
- High DEF/MDEF.

Skills:

- Shell Guard.
- Tidal Bash.

Drop:

- Glass Shell.
- Aquatic Fragment.

#### Abyss Lantern Keeper

Fantasy:

- Keeper of a lantern waiting beneath the lake.

Combat:

- Boss.
- Memory Drain.
- Blind.
- Shield phase.
- Hidden spare route.

Skills:

- Lantern Strike.
- Memory Drain.
- Lantern Pulse.
- Deepwater Shield.

Hidden Hook:

- Hear song before fight.
- Bring Light/Memory Beast or Lantern Relic.
- Use non-lethal action at low HP.

---

## 11.3. Childhood Playground

### Realm combat identity

- Emotion buffs/debuffs.
- Trickster mechanics.
- Toy enemies.
- “Game rules” that change battle condition.
- Hidden path through empathy/play.

### Enemy pool

| Enemy | Category | Role | Affinity | Damage |
|---|---|---|---|---|
| Broken Toy Knight | Minion | Defender | Emotion | Physical |
| Chalk Beast | Minion | Attacker | Memory | Physical |
| Laughing Shadow | Minion | Disruptor | Shadow | Magic |
| Paper Dragon | Elite | Sweeper | Emotion/Light | Magic |
| Music Box Doll | Elite | Support/Trickster | Emotion | Magic |
| The Hollow Child | Boss | Boss Trickster | Emotion/Shadow | Mixed |

### Enemy details

#### Broken Toy Knight

Fantasy:

- A toy knight still guarding a child who left.

Combat:

- Shield.
- Low/medium damage.

Skills:

- Wooden Slash.
- Toy Shield.

Drop:

- Toy Fragment.
- Emotion Fragment.

#### Chalk Beast

Fantasy:

- A chalk drawing that stepped off the ground.

Combat:

- Physical attacker.
- Fragile.
- Fast.

Skills:

- Chalk Scratch.
- Smudge Dash.

Drop:

- Chalk Dust.
- Memory Fragment.

#### Laughing Shadow

Fantasy:

- A shadow laughing when no one is happy.

Combat:

- Shadow magic.
- Curse.
- Debuff.

Skills:

- Hollow Laugh.
- Dark Giggle.

Drop:

- Shadow Fragment.
- Nightmare Shard chance if Corrupt path.

#### Paper Dragon

Fantasy:

- A paper dragon that wants to be real.

Combat:

- Elite.
- AoE Emotion Magic.
- Weak to Shadow or Memory depending tuning.

Skills:

- Crayon Flame.
- Paper Wing.
- Make Believe.

Drop:

- Paper Dragon Fragment.
- Emotion Fragment.

#### The Hollow Child

Fantasy:

- An Echo Child who played alone too long.

Combat:

- Boss.
- Trickster.
- Random “pretend rules”.
- Stronger if player chose Corrupt.

Skills:

- Wooden Sword.
- Pretend Rules.
- Tantrum Burst.
- Lonely Cry.

Hidden Hook:

- Find Carousel Ticket.
- Defend during crying turn.
- Spare option appears.

---

## 11.4. Clocktower of Time

**Post-MVP Realm.**

### Realm combat identity

- Slow/Haste.
- Cooldown manipulation.
- Delayed attacks.
- Regret mechanics.
- High difficulty due to turn control.

### Enemy pool

| Enemy | Category | Role | Affinity | Damage |
|---|---|---|---|---|
| Second Hand Imp | Minion | Controller | Time | Physical |
| Chrono Raven | Minion | Disruptor | Time/Memory | Magic |
| Rusted Guardian | Elite | Defender | Construct/Time | Physical |
| Hourglass Wraith | Elite | DoT/Control | Shadow/Time | Magic |
| Regret Regent | Boss | Boss Controller | Time/Shadow | Magic |
| Time Serpent | Legendary Boss/Beast Source | Controller | Time | Magic |

### Design warning

Time enemies can frustrate players if they skip turns too often. Use Slow/Haste more than hard stun.

---

## 11.5. Nightmare Citadel

**Post-MVP Realm.**

### Realm combat identity

- High risk/reward.
- Corruption.
- Curse.
- Nightmare Shard.
- Bosses with strong mechanics.
- Shadow/Memory/Time hybrid.

### Enemy pool

| Enemy | Category | Role | Affinity | Damage |
|---|---|---|---|---|
| Nightmare Knight | Minion/Elite | Attacker | Shadow | Physical |
| Glass Prisoner | Minion | Defender | Memory | Magic |
| Crowned Regret | Elite | Debuffer | Shadow/Time | Magic |
| Dreamless Beast | Elite | Bruiser | Shadow | Physical |
| Masked Noble | Elite | Trickster | Shadow/Memory | Magic |
| The Crowned Fear | Boss | Boss Burst/Control | Shadow | Mixed |

### Design warning

Nightmare enemies should be scary but not unfair.

Use:

- Clear telegraphs.
- Strong reward.
- Corruption tradeoff.
- Avoid excessive chain control.

---

## 12. Nightmare Variants

### 12.1. What is a Nightmare Variant?

Nightmare Variant is a corrupted version of a normal enemy.

It can appear when:

- Player chooses Corrupt path.
- Player has high Corruption.
- Dream rarity is high.
- Nightmare Citadel influence is active.
- Event “Nightmare Bloom” occurs.

### 12.2. Visual changes

- Darker palette.
- Purple/black cracks.
- Red glow.
- Distorted animation.
- Thorn/growth elements.
- Shadow trail.

### 12.3. Gameplay changes

Nightmare Variant may have:

- +10–20% damage.
- +10–20% HP.
- Shadow affinity overlay.
- Extra Corrupt skill.
- Better Nightmare Shard drop.
- Corruption gain on defeat or completion.

### 12.4. Variant data model

```json
{
  "variantId": "nightmare",
  "statModifiers": {
    "hp": 1.15,
    "damage": 1.15,
    "spd": 1.05
  },
  "addedSkills": ["nightmare_burst"],
  "visualModifier": "nightmare_cracks",
  "dropTableModifier": "nightmare_shard_bonus",
  "corruptionOnEncounter": 2
}
```

### 12.5. Design rule

Nightmare Variant must be optional or clearly signposted in early game.

---

## 13. Guardian System

### 13.1. What is a Guardian?

Guardian is a powerful entity tied to Realm or Dreamland.

Guardian can be:

- Mini-boss.
- Realm protector.
- Corrupted Dreamborn.
- Gatekeeper to new Realm.
- Source of Legendary Beast Fragment.

### 13.2. Guardian vs Boss

| Type | Use |
|---|---|
| Boss | Climax of a Daily Dream |
| Guardian | Larger progression/lore entity |

A Guardian can appear as Boss in special dream.

### 13.3. Guardian examples

| Guardian | Realm | Theme |
|---|---|---|
| Silent Stag | Forest | Unspoken truth |
| Mnemora Whale | Ocean | Deep memory |
| Hollow Child | Playground | Abandoned joy |
| Chronovyr | Clocktower | Time regret |
| Crowned Fear | Citadel | Fear of being forgotten |

### 13.4. Guardian rewards

- Realm unlock.
- Legendary Fragment.
- Building blueprint.
- Relic.
- Lore entry.
- Dreamland expansion.

---

## 14. Boss Catalog

## 14.1. Hollow Treant

### Basic info

| Field | Value |
|---|---|
| Realm | Forest of Lost Voices |
| Role | Boss Tank / DoT |
| Affinity | Shadow/Memory |
| Damage | Mixed |
| Theme | Apology trapped in silence |

### Lore

Hollow Treant grew from a buried apology. Its mouths were stitched shut by fear, and its roots drink words that were never spoken.

### Combat identity

- High HP.
- Dream Burn.
- Healing if roots not purified.
- Punishes long fight.

### Skills

#### Root Slam

- Physical.
- 1.1 ATK.
- Single target.

#### Buried Words

- Magic.
- 1.0 MATK.
- Applies Dream Burn.
- Cooldown 3.

#### Silence Roots

- Magic/debuff.
- Applies Memory Drain.
- Reduces healing received.
- Cooldown 4.

#### Hollow Regrowth

- At 40% HP.
- Heals 10–15% max HP.
- Prevented if player resolved apology clue.

### Phase

Phase 1:

- Root Slam.
- Buried Words.

Phase 2 at 50% HP:

- Silence Roots added.
- Hollow Regrowth trigger available.

### Hidden hook

If player found “the name that needed apology”, Hollow Regrowth fails and boss becomes Purify-able.

### Rewards

- Memory Fragment.
- Apology Thread Fragment.
- Silent Stag Fragment chance on Hidden.

---

## 14.2. Abyss Lantern Keeper

### Basic info

| Field | Value |
|---|---|
| Realm | Ocean of Memories |
| Role | Boss Disruptor |
| Affinity | Memory |
| Damage | Magic |
| Theme | A light waiting underwater |

### Lore

The Abyss Lantern Keeper guards a lantern beneath the lake, though it has forgotten who first lit it. It attacks not from anger, but from fear that the light will be taken away.

### Combat identity

- Magic damage.
- Memory Drain.
- Blind.
- Shield phase.
- Hidden spare route.

### Skills

#### Lantern Strike

- Magic.
- 1.0 MATK.

#### Memory Drain

- Magic.
- 1.1 MATK.
- Applies -15% ATK/MATK.
- Cooldown 3.

#### Lantern Pulse

- Magic.
- 1.45 MATK.
- 25% Blind.
- Telegraph.
- Cooldown 4.

#### Deepwater Shield

- Trigger at 50% HP.
- Shield = 15% max HP.
- Once per battle.

### Phase

Phase 1:

- Lantern Strike.
- Memory Drain.

Phase 2:

- Deepwater Shield.
- Lantern Pulse.
- Stronger Memory Drain.

### Hidden hook

Requirements:

- Player chose “listen to song”.
- Player has Light/Memory Beast or Lantern Relic.
- Boss HP below 20%.
- Player uses non-lethal Light/Memory action or Defend when boss hesitates.

Result:

- Boss spared.
- Hidden Ending candidate.

### Rewards

- Memory Fragment.
- Lantern Relic chance.
- Abyss Serpent Fragment on Hidden.

---

## 14.3. The Hollow Child

### Basic info

| Field | Value |
|---|---|
| Realm | Childhood Playground |
| Role | Boss Trickster |
| Affinity | Emotion/Shadow |
| Damage | Mixed |
| Theme | A childlike echo trapped in endless play |

### Lore

The Hollow Child played alone for so long that it forgot games were meant to end. It changes the rules whenever losing begins to hurt.

### Combat identity

- Trickster.
- Buff/debuff random within bounds.
- Emotional telegraphs.
- Defend/spare hidden route.

### Skills

#### Wooden Sword

- Physical.
- 1.0 ATK.

#### Pretend Rules

- Random bounded effect:
  - Boss gains Inspire.
  - Player gets Blind.
  - Both gain Haste.
  - Boss gains small Shield.
- Cooldown 3.

#### Tantrum Burst

- Shadow/Emotion Magic.
- 1.5 MATK.
- Stronger if Corrupt path.
- Telegraph.
- Cooldown 4.

#### Lonely Cry

- Trigger below 30% HP.
- Boss skips attack but charges emotional burst next.
- Hidden hook opportunity.

### Hidden hook

Requirements:

- Player found Carousel Ticket.
- Player Defends during Lonely Cry turn.
- Player does not attack immediately after.

Result:

- Spare dialogue.
- Hidden Ending candidate.

### Rewards

- Emotion Fragment.
- Broken Toy Crown chance.
- Paper Dragon Fragment on Hidden.

---

## 14.4. Regret Regent

**Post-MVP.**

### Basic info

| Field | Value |
|---|---|
| Realm | Clocktower of Time |
| Role | Boss Controller |
| Affinity | Time/Shadow |
| Damage | Magic |
| Theme | The ruler of wrong choices |

### Combat identity

- Slow.
- Delayed attack.
- Cooldown disruption.
- Phase based on “wrong choice” marks.

### Design warning

Avoid excessive turn denial. Use clear telegraph and partial delays.

---

## 14.5. The Crowned Fear

**Post-MVP.**

### Basic info

| Field | Value |
|---|---|
| Realm | Nightmare Citadel |
| Role | Boss Burst/Control |
| Affinity | Shadow |
| Damage | Mixed |
| Theme | Fear of being forgotten |

### Combat identity

- Curse.
- Nightmare burst.
- Corruption interaction.
- High reward.

### Design warning

Should be scary but fair. Big attacks must be telegraphed.

---

## 15. Enemy Rewards & Drops

### 15.1. Reward categories

Enemy can reward:

- EXP.
- Minor fragment.
- Realm fragment.
- Relic fragment.
- Beast fragment.
- Nightmare Shard.
- Lore clue.
- Temporary buff.

### 15.2. Reward by enemy category

| Category | Reward |
|---|---|
| Minion | EXP, small fragment chance |
| Elite | EXP, better fragment, Relic fragment chance |
| Boss | Ending reward, boss fragment, Relic chance |
| Hidden | Rare fragment/lore |
| Nightmare | Nightmare Shard, corrupt fragment |
| Guardian | Legendary fragment, unlock |

### 15.3. Drop design

Normal enemy should not be main source of high-value items.

Main reward should come from:

- Dream completion.
- Ending.
- Hidden path.
- Boss.
- Crafting milestone.

### 15.4. Drop table example

```json
{
  "dropTableId": "forest_common_enemy_drop",
  "guaranteed": [
    {
      "type": "EXP",
      "amount": 20
    }
  ],
  "weighted": [
    {
      "type": "Fragment",
      "itemId": "memory_fragment_common",
      "amount": 1,
      "weight": 60
    },
    {
      "type": "Fragment",
      "itemId": "forest_fragment_common",
      "amount": 1,
      "weight": 30
    },
    {
      "type": "None",
      "weight": 10
    }
  ]
}
```

### 15.5. Boss reward table

Boss reward should link to ending.

Example:

```json
{
  "bossId": "abyss_lantern_keeper",
  "endingLootTables": {
    "Purify": "lantern_keeper_purify_loot",
    "Corrupt": "lantern_keeper_corrupt_loot",
    "Hidden": "lantern_keeper_hidden_loot"
  }
}
```

### 15.6. Drop modifiers

Drop can be modified by:

- Dream rarity.
- Ending.
- LUCK, capped.
- Building bonus.
- Relic bonus.
- Corruption.
- First clear.

Design cap:

```text
Total drop rate bonus should not exceed +50% in MVP.
```

---

## 16. Encounter and Dream Integration

### 16.1. Node integration

Enemy encounters appear in Dream nodes.

Node types:

- Enemy Node.
- Elite Enemy Node.
- Boss Node.
- Hidden Enemy Node.
- Corrupt Enemy Node.
- Guardian Node.

### 16.2. Encounter in Dream Seed

Dream Seed references enemy pool and boss:

```json
{
  "enemyPoolId": "ocean_memory_pool_b",
  "bossId": "abyss_lantern_keeper",
  "encounterSetId": "ocean_epic_encounters_02"
}
```

### 16.3. Node encounter data

```json
{
  "nodeId": "node_enemy_03",
  "nodeType": "Enemy",
  "encounterId": "ocean_memory_normal_02",
  "requiredState": ["met_shell_child"],
  "onVictoryFlags": ["enemy_03_defeated"],
  "onDefeatRunStatus": "Failed"
}
```

### 16.4. Boss as ending gate

Boss can be required before ending portal.

```text
Boss defeated/resolved
  ↓
Ending portal unlocks
```

Or boss itself can trigger ending.

```text
Boss resolution
  ↓
Ending determined immediately
```

MVP recommendation:

- Boss resolution leads to Ending Portal or Reward Summary depending Dream template.
- Keep UI clear.

---

## 17. Enemy Art Direction

### 17.1. Visual principles

Enemy should:

- Match Realm.
- Have readable silhouette.
- Show role through shape.
- Show Affinity through color/VFX.
- Be distinguishable from Beast.

### 17.2. Role silhouette

| Role | Shape language |
|---|---|
| Attacker | Sharp, forward-leaning |
| Defender | Broad, heavy |
| Disruptor | Thin, floating, strange |
| Support | Open shape, glowing core |
| Trickster | Asymmetric, playful |
| Boss | Large, iconic, unique silhouette |

### 17.3. Affinity color accents

| Affinity | Accent |
|---|---|
| Light | White/gold/soft blue |
| Shadow | Black/violet/crimson |
| Memory | Blue/silver/glass |
| Emotion | Pink/orange/pastel |
| Time | Bronze/gold/dark teal |

### 17.4. Nightmare variant overlay

Add:

- Cracks.
- Thorn growth.
- Dark aura.
- Red/purple glow.
- Distorted idle.

### 17.5. Boss visual requirements

Boss needs:

- Unique silhouette.
- Phase change visual.
- Signature skill VFX.
- Defeat/resolution animation.
- Icon/portrait for UI.

---

## 18. Animation Requirements

### 18.1. Minion animation

Minimum:

- Idle.
- Attack.
- Skill.
- Hit.
- Defeat.
- Status affected, optional.

### 18.2. Elite animation

Minimum:

- Idle.
- Attack.
- Skill 1.
- Skill 2.
- Hit.
- Defeat.
- Status affected.

### 18.3. Boss animation

Minimum:

- Idle.
- Basic attack.
- Skill 1.
- Signature skill.
- Telegraph.
- Phase transition.
- Hit.
- Defeat.
- Hidden resolution/spare if applicable.

### 18.4. Animation by Realm

Forest:

- Whispering, swaying, root movement.

Ocean:

- Floating, swimming, liquid distortion.

Playground:

- Toy-like, jerky, playful.

Clocktower:

- Mechanical, stuttered, reversed.

Citadel:

- Heavy, shadowy, glitch-like.

---

## 19. Audio Requirements

### 19.1. Enemy audio

Each enemy type should have:

- Idle ambient, optional.
- Attack SFX.
- Skill SFX.
- Hit SFX.
- Defeat SFX.

Can reuse by family in MVP.

### 19.2. Boss audio

Boss needs:

- Intro sting.
- Idle loop or ambience.
- Signature skill SFX.
- Phase transition SFX.
- Defeat/resolution SFX.

### 19.3. Realm audio style

| Realm | Audio |
|---|---|
| Forest | Whisper, leaves, wood creak |
| Ocean | Water, muffled echo, whale-like tone |
| Playground | Music box, toy rattle, distant laughter |
| Clocktower | Tick, gears, reversed chime |
| Citadel | Low choir, chain, heartbeat |

---

## 20. Backend Requirements

### 20.1. Tables

#### enemy_templates

```sql
enemy_template_id
name
category
realm
role
affinity
damage_type
threat_level
base_stats_json
skills_json
passives_json
ai_profile_id
drop_table_id
visual_asset_id
animation_set_id
sfx_set_id
lore_tags_json
status
created_at
updated_at
```

#### boss_templates

```sql
boss_template_id
name
realm
role
affinity
damage_type
base_stats_json
skills_json
phase_set_id
ai_profile_id
ending_hooks_json
drop_table_id
lore_entry_id
visual_asset_id
status
created_at
updated_at
```

#### enemy_pools

```sql
enemy_pool_id
realm
rarity_range_json
enemy_entries_json
elite_entries_json
nightmare_entries_json
status
created_at
updated_at
```

#### encounters

```sql
encounter_id
encounter_type
realm
rarity_range_json
enemy_slots_json
reward_table_id
required_tags_json
can_flee
is_optional
status
created_at
updated_at
```

#### ai_profiles

```sql
ai_profile_id
profile_type
rules_json
version
status
created_at
updated_at
```

#### boss_phase_sets

```sql
phase_set_id
boss_template_id
phases_json
version
status
created_at
updated_at
```

### 20.2. Services

| Service | Responsibility |
|---|---|
| EnemyTemplateService | Load enemy data |
| BossTemplateService | Load boss data |
| EncounterService | Build encounter instance |
| EnemyScalingService | Scale enemy stats |
| AIProfileService | Resolve enemy action |
| BossPhaseService | Manage boss phase |
| EnemyRewardService | Link drops/rewards |
| EnemyValidationService | Validate combat data |

### 20.3. API usage

Enemy/Boss data usually served through:

- Dream start response.
- Battle start response.
- Internal backend validation.

Possible endpoints for tools/admin:

```text
GET /admin/enemies
GET /admin/enemies/{enemyId}
POST /admin/enemies
GET /admin/bosses
GET /admin/encounters
```

Game runtime:

```text
POST /battle/start
```

Response includes enemy snapshots.

### 20.4. Enemy snapshot generation

When battle starts:

1. Load encounter.
2. Load enemy templates.
3. Determine enemy level.
4. Apply scaling.
5. Apply variant.
6. Create enemy instance.
7. Store battle snapshot.
8. Send to client.

---

## 21. Client Requirements

### 21.1. Unity modules

- EnemyDatabaseClient.
- EncounterLoader.
- EnemyCombatantView.
- EnemyAnimationController.
- BossPhaseController.
- EnemyStatusUI.
- BossTelegraphUI.
- EnemyRewardPreview.
- BattleLogEnemyEvents.

### 21.2. Runtime requirements

Client must:

- Render enemy models/sprites.
- Show HP/status.
- Show boss phase change.
- Play telegraph.
- Play skill VFX.
- Display reward summary.
- Send battle result/action log.

Client must not:

- Decide reward.
- Decide hidden ending validity.
- Modify enemy stats.
- Skip encounter state validation.

### 21.3. Boss UI

Boss battle should show:

- Boss name.
- HP bar.
- Phase indicator, optional.
- Status icons.
- Telegraph warning.
- Signature skill cue.

### 21.4. Enemy readability

Enemy should have:

- Name on tap/hover.
- Affinity icon.
- Status icons.
- Weak/strong indicator if target selected.

---

## 22. Content Authoring Pipeline

### 22.1. Enemy creation workflow

```text
Narrative defines enemy concept
  ↓
Game Design defines role/Realm/Affinity
  ↓
Combat Design creates stats/skills/AI
  ↓
Art creates concept/sprite/animation
  ↓
Audio creates SFX
  ↓
Backend adds template
  ↓
Unity integrates asset
  ↓
QA tests combat/readability/reward
```

### 22.2. Boss creation workflow

```text
Narrative defines dream conflict
  ↓
Game Design defines boss role and ending hooks
  ↓
Combat Design creates skills/phase
  ↓
Level Design places boss node
  ↓
Art creates boss asset/VFX
  ↓
Audio creates boss sounds/music cues
  ↓
Backend adds boss data/phase set
  ↓
Unity implements phase/telegraph
  ↓
QA validates all endings
```

### 22.3. Enemy checklist

- [ ] Name.
- [ ] Realm.
- [ ] Category.
- [ ] Role.
- [ ] Affinity.
- [ ] Damage Type.
- [ ] Base stats.
- [ ] Skills.
- [ ] AI profile.
- [ ] Drop table.
- [ ] Visual asset.
- [ ] Animation asset.
- [ ] SFX.
- [ ] Lore tags.
- [ ] Balance tested.

### 22.4. Boss checklist

- [ ] Name.
- [ ] Realm.
- [ ] Lore premise.
- [ ] Combat role.
- [ ] Affinity.
- [ ] Damage Type.
- [ ] Base stats.
- [ ] Skills.
- [ ] Signature skill.
- [ ] Telegraph.
- [ ] Phase set.
- [ ] AI pattern.
- [ ] Ending hooks.
- [ ] Reward tables.
- [ ] Defeat/resolution text.
- [ ] Art/VFX.
- [ ] Audio.
- [ ] QA for Purify/Corrupt/Hidden.

---

## 23. QA Test Plan

### 23.1. Enemy functional tests

- Enemy loads correctly.
- Stats scale correctly.
- Skills work.
- AI uses valid actions.
- Cooldowns respected.
- Enemy dies correctly.
- Reward staged/granted correctly.
- Status effects apply correctly.

### 23.2. Encounter tests

- Correct enemy count.
- Encounter matches Dream rarity.
- Optional encounter can be skipped.
- Elite encounter harder than normal.
- Nightmare variant applies modifier.
- Encounter completion updates node state.

### 23.3. Boss tests

- Boss loads.
- Boss phase triggers at correct HP.
- Telegraph appears.
- Signature skill fires.
- Hidden hook works.
- Boss death/resolution correct.
- Ending state set correctly.
- Reward table matches ending.
- Boss cannot be exploited by status loop.

### 23.4. Scaling tests

- Level 1 Beast vs Common enemy.
- Level 10 Beast vs Rare enemy.
- Level 20 Beast vs Epic boss.
- Underleveled warning.
- New player protection.
- Corruption variant scaling.

### 23.5. AI tests

- Aggressive AI attacks.
- Defensive AI shields at low HP.
- Disruptor AI avoids reapplying status wastefully.
- Boss AI follows pattern.
- AI deterministic with battle seed.

### 23.6. Narrative tests

- Enemy belongs to correct Realm.
- Boss dialogue matches ending.
- Hidden hook has clue.
- Corrupt variant has correct visuals/text.
- Lore entry unlocks correctly.

### 23.7. Security tests

- Client cannot fake enemy stats.
- Client cannot skip boss.
- Client cannot claim boss reward twice.
- Invalid hidden hook rejected.
- Invalid battle result flagged.

---

## 24. Analytics Events

### 24.1. Required events

```text
enemy_encounter_started
enemy_encounter_completed
enemy_encounter_failed
enemy_defeated
elite_encounter_started
boss_encounter_started
boss_phase_changed
boss_telegraph_shown
boss_skill_used
boss_defeated
boss_spared
hidden_combat_hook_triggered
nightmare_variant_encountered
enemy_reward_claimed
```

### 24.2. Event properties

```json
{
  "runId": "RUN-123456",
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "encounterId": "ocean_memory_elite_01",
  "enemyTemplateId": "drowned_echo",
  "bossId": "abyss_lantern_keeper",
  "realm": "Ocean of Memories",
  "rarity": "Epic",
  "selectedBeastId": "BEAST-000456",
  "selectedBeastLevel": 12,
  "turnsTaken": 7,
  "playerHpRemainingPercent": 0.42
}
```

### 24.3. Key metrics

- Enemy win/loss rate.
- Average turns per encounter.
- Boss fail rate.
- Boss average HP remaining.
- Hidden hook trigger rate.
- Enemy damage contribution.
- Most lethal enemy.
- Most skipped optional encounter.
- Nightmare variant completion rate.
- Reward drop distribution.
- Encounter duration by rarity.

---

## 25. Balance Guidelines

### 25.1. Normal enemy

Normal enemy should:

- Be defeated in 3–6 Beast turns.
- Teach one small mechanic.
- Not require perfect play.
- Not chain hard CC.
- Give modest reward.

### 25.2. Elite enemy

Elite enemy should:

- Require attention.
- Have 1 mechanic.
- Be optional or clearly placed.
- Give better reward.

### 25.3. Boss

Boss should:

- Last 8–14 Beast turns.
- Have telegraph.
- Have phase.
- Have counterplay.
- Be beatable with several Beast types.
- Reward based on ending.

### 25.4. Status use

Enemy status should:

- Be clear.
- Have duration.
- Not stack too much.
- Be reduced on player if tutorial.
- Avoid long Sleep chains.

### 25.5. Damage tuning

Enemy damage should:

- Threaten but not one-shot unexpectedly.
- Boss big damage should be telegraphed.
- Nightmare variant can be more dangerous but optional/signposted.

### 25.6. Enemy composition

Avoid combining too much frustration:

Bad early-game encounter:

```text
2 Disruptors + 1 Controller + Sleep + Slow + Blind
```

Good encounter:

```text
1 Attacker + 1 Disruptor
```

### 25.7. Boss Hidden Ending

Hidden combat condition should:

- Be optional.
- Have clue.
- Not require impossible precision.
- Not require rare NFT-only item.
- Reward discovery.

---

## 26. MVP Implementation Plan

### Sprint 1 — Enemy Data Foundation

Deliver:

- Enemy template schema.
- 5 enemy templates.
- Basic enemy loading in combat.
- Enemy HP/damage.

### Sprint 2 — AI Profiles

Deliver:

- Aggressive AI.
- Defensive AI.
- Disruptor AI.
- Skill cooldown support.

### Sprint 3 — Encounter System

Deliver:

- Encounter data.
- Enemy pool.
- Dream node encounter integration.
- Reward staging.

### Sprint 4 — Boss System

Deliver:

- Boss template.
- Phase trigger.
- Telegraph.
- Boss reward.
- 1 MVP boss.

### Sprint 5 — Realm Enemy Pools

Deliver:

- Forest pool.
- Ocean pool.
- Playground pool.
- 15–20 total enemies.

### Sprint 6 — Hidden Combat Hooks

Deliver:

- Boss spare hook.
- Relic/choice condition.
- Hidden ending flag.
- QA validation.

### Sprint 7 — Balance & Polish

Deliver:

- Enemy animations.
- Boss VFX/SFX.
- Analytics.
- Difficulty tuning.
- QA pass.

---

## 27. Open Design Questions

1. Should enemy HP persist if player disconnects mid-battle?
2. Should players be able to flee normal encounters?
3. Should boss status resistance be universal or per boss?
4. Should optional elite encounter be visible before entering?
5. Should Nightmare Variant appear before player first chooses Corrupt?
6. Should boss hidden hook require specific Relic, Affinity, or either?
7. Should enemies have crit?
8. Should LUCK affect enemy drop directly or only reward table?
9. Should Guardian fights be Daily Dream content or separate milestone?
10. Should Boss reward be granted immediately or only through Dream completion?

Recommended MVP answers:

1. Yes, battle state should be resumable.
2. Avoid flee in MVP; allow path choice instead.
3. Per boss, but use standard baseline.
4. Yes, signpost danger.
5. No, introduce after Corrupt/Nightmare tutorial.
6. Prefer either Affinity or Relic, not NFT-only requirement.
7. Enemy crit off in MVP or very rare.
8. LUCK capped and server-side.
9. Guardian as milestone later.
10. Through Dream completion/ending reward.

---

## 28. Glossary

| Term | Meaning |
|---|---|
| Enemy | PvE opponent |
| Minion | Basic enemy |
| Elite | Stronger enemy with mechanic |
| Boss | Main encounter/climax |
| Guardian | Major Realm protector/progression entity |
| Nightmare Variant | Corrupted enemy variant |
| Encounter | Enemy composition in a node |
| AI Profile | Rule set controlling enemy behavior |
| Phase | Boss state based on HP/condition |
| Telegraph | Warning before powerful action |
| Hidden Hook | Combat condition for Hidden Ending |
| Enemy Pool | Set of enemies available for a Realm/Dream |
| Threat Level | Difficulty/intensity rating |
| Drop Table | Reward table for enemy/encounter |

---

## 29. Final Enemy & Boss System Statement

Enemy và Boss trong **Myth of Dreams** không chỉ là vật cản trên đường nhận reward. Chúng là cách Dreamverse phản ứng lại với người chơi.

Một enemy tốt cho người chơi thấy Realm đang bị tổn thương như thế nào.  
Một boss tốt khiến người chơi hiểu giấc mơ này cần được chữa lành, khai thác hay thấu hiểu.

Combat PvE thành công khi người chơi không chỉ nghĩ:

> “Mình đã thắng trận.”

Mà còn nghĩ:

> “Mình đã hiểu vì sao giấc mơ này biến thành như vậy.”\n