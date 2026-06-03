---
title: "Beast System"
description: "Myth of Dreams - Beast System"
date: "2026-06-03"
category: "game-design"
order: 14
tags: ["game-design","beast"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, dream_system.md, combat_system.md, relic_system.md, economy_reward_system.md, NFT_metadata.md  
**Owner:** Game Design / Combat Design / Narrative / Art / Backend  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Beast System** cho **Myth of Dreams**.

Beast là một trong những hệ thống quan trọng nhất của game, vì Beast không chỉ là đơn vị chiến đấu mà còn là:

- Sinh vật được sinh ra từ Dreamverse.
- Companion của người chơi.
- Đơn vị chiến đấu trong PvE/PvP.
- Collectible có rarity, skill, stat, visual identity.
- Sinh vật sống trong Dreamland với decor behavior.
- Item có origin metadata, có thể NFT hóa sau MVP.
- Một phần ký ức của Daily Dream mà người chơi đã trải qua.

Nếu Dream System là trái tim nội dung hằng ngày, thì Beast System là hệ thống giúp người chơi mang một phần của giấc mơ về lâu dài.

---

## 1. Beast Design Vision

### 1.1. Beast fantasy

Beast không phải quái vật bị bắt.  
Beast là sinh vật được sinh ra khi một ký ức, cảm xúc hoặc ước mơ trong Dreamverse kết tinh đủ mạnh để có hình dạng sống.

Một Beast có thể sinh ra từ:

- Một ngọn đèn dưới đáy hồ.
- Một lời xin lỗi chưa nói.
- Một vòng quay tuổi thơ không chịu dừng.
- Một cơn ác mộng bị khóa quá lâu.
- Một khoảnh khắc mà thời gian bị vỡ.
- Một lựa chọn Hidden Ending của người chơi.

### 1.2. Design statement

Beast trong Myth of Dreams phải đạt ba vai trò cùng lúc:

> Chiến đấu có bản sắc, sống động trong Dreamland, và mang một câu chuyện nguồn gốc đáng nhớ.

### 1.3. Beast pillars

#### 1. Combat Identity

Mỗi Beast phải có vai trò chiến đấu rõ:

- Striker.
- Tank.
- Support.
- Debuffer.
- Controller.
- Hybrid.

#### 2. Visual Personality

Mỗi Beast phải dễ nhận ra qua:

- Silhouette.
- Species.
- Affinity color.
- Animation style.
- Decor behavior.
- Rarity visual treatment.

#### 3. Emotional Origin

Beast hiếm hoặc quan trọng phải có origin gắn với Dream:

- Sinh ra từ Dream nào?
- Realm nào?
- Ending nào?
- Người chơi đã chọn gì?
- Beast đại diện cho cảm xúc gì?

#### 4. Collection Depth

Beast phải tạo động lực sưu tầm qua:

- Species.
- Affinity.
- Rarity.
- Skill kit.
- Visual traits.
- Origin metadata.
- Decor behavior.
- NFT provenance sau MVP.

#### 5. Gameplay Fairness

Beast hiếm có thể mạnh và đặc biệt hơn, nhưng không nên phá balance hoặc biến game thành pay-to-win.

---

## 2. Beast System Scope

### 2.1. MVP scope

MVP Beast System nên bao gồm:

- 6 Species Types.
- 5 Affinities.
- 2 Damage Types.
- 5 core rarity tiers.
- 12–18 Beast.
- 1 passive + 2 active skills mỗi Beast.
- Core stat system.
- Leveling đến level 20.
- Fragment-based crafting.
- Beast profile screen.
- Dreamland idle/decor behavior cơ bản.
- Origin metadata off-chain.
- 1 Relic slot.
- No breeding.
- No full gene inheritance.
- No real on-chain mint requirement.

### 2.2. Post-MVP scope

Sau MVP có thể mở rộng:

- Gene system.
- Breeding/fusion.
- Beast evolution.
- Cosmetic skin NFT.
- PvP Beast Duel.
- 2v2 combat.
- Advanced decor interaction.
- Beast relationship/mood.
- Beast expedition.
- On-chain mint.
- Marketplace listing.

### 2.3. Not in MVP

Không đưa vào MVP:

- Breeding economy.
- Complex gene inheritance.
- Multi-generation bloodline.
- Real-money gacha.
- PvP ladder full.
- 3D-like complex animation.
- Too many Beast variants.
- On-chain fragment.

---

## 3. Beast Lifecycle

### 3.1. High-level lifecycle

```text
Player completes Daily Dream
  ↓
Earns Beast Fragments
  ↓
Crafts / Awakens Beast
  ↓
Beast receives Species, Affinity, Rarity, Stats, Skills
  ↓
Origin Metadata is attached
  ↓
Beast enters Inventory
  ↓
Player uses Beast in Dream Combat
  ↓
Beast gains EXP and levels up
  ↓
Player equips Relic / places Beast in Dreamland
  ↓
Optional future: Mint NFT / Trade / PvP / Upgrade / Skin
```

### 3.2. Beast acquisition sources

| Source | Description |
|---|---|
| Starter Beast | First Beast, story/tutorial |
| Fragment Crafting | Main method |
| Hidden Ending | Rare Beast fragment or direct Beast |
| Event Dream | Limited Beast fragments |
| Boss Drop | Legendary fragment |
| Achievement | Special Beast |
| Marketplace | Post-NFT phase |
| PvP Season | Cosmetic/skin fragments, not core Beast initially |

### 3.3. Beast states

| State | Meaning |
|---|---|
| FragmentOnly | Player has fragments, no Beast yet |
| Awakening | Craft process started |
| Owned | Beast exists in inventory |
| ActiveTeam | Selected for Dream run |
| DreamlandRoaming | Placed in Dreamland |
| Locked | Cannot trade/burn due to use |
| MintEligible | Can be minted as NFT |
| Minted | Has on-chain mapping |
| Listed | Listed on marketplace |
| Archived | Retired/burned/converted, if feature exists |

### 3.4. Starter Beast

Starter Beast nên là **Luma** hoặc một variant tương tự.

Design goals:

- Dễ thương.
- Dễ hiểu.
- Có Light hoặc Memory affinity.
- Có basic damage + sustain.
- Có decor behavior rõ.
- Có story tie với Empty Dreamland.

Starter Beast không nên quá yếu về late game. Có thể cho upgrade path hoặc emotional value.

---

## 4. Beast Data Structure

### 4.1. Beast master definition

Đây là data template cho một loại Beast.

```json
{
  "beastTemplateId": "aurora_wyrm",
  "name": "Aurora Wyrm",
  "species": "Dragon",
  "affinity": "Light",
  "defaultDamageType": "Magic",
  "role": ["MagicStriker", "Support"],
  "baseRarity": "Epic",
  "baseStats": {
    "hp": 1600,
    "atk": 80,
    "matk": 210,
    "def": 90,
    "mdef": 140,
    "spd": 95,
    "luck": 60
  },
  "growthProfile": "dragon_magic_epic",
  "skills": {
    "basic": "arcane_bite",
    "active1": "radiant_breath",
    "active2": "aurora_wave",
    "passive": "sky_guardian"
  },
  "decorBehaviorSet": "dragon_light_flight",
  "allowedRealms": ["ocean_of_memories", "forest_of_lost_voices"],
  "visualTraitPool": "aurora_wyrm_traits",
  "loreTags": ["light", "dragon", "hope", "sky"],
  "mintable": true
}
```

### 4.2. Owned Beast instance

Đây là Beast cụ thể của player.

```json
{
  "beastId": "BEAST-000123",
  "ownerId": "USER-001",
  "templateId": "aurora_wyrm",
  "customName": "Moonflare",
  "level": 12,
  "exp": 3400,
  "rarity": "Epic",
  "species": "Dragon",
  "affinity": "Light",
  "damageType": "Magic",
  "stats": {
    "hp": 2130,
    "atk": 105,
    "matk": 288,
    "def": 122,
    "mdef": 189,
    "spd": 108,
    "luck": 72
  },
  "skillLevels": {
    "radiant_breath": 2,
    "aurora_wave": 1,
    "sky_guardian": 1
  },
  "equippedRelicId": "RELIC-009",
  "origin": {
    "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
    "dreamTitle": "The Lantern Under the Lake",
    "realm": "Ocean of Memories",
    "ending": "Hidden",
    "keyChoice": "listen_to_song",
    "birthDate": "2026-05-24"
  },
  "visualTraits": {
    "body": "pearl",
    "pattern": "aurora",
    "horn": "glass",
    "aura": "moonlight"
  },
  "decorState": {
    "placedInDreamland": true,
    "position": { "x": 12, "y": 5 },
    "favoriteBuildingId": "BUILDING-003"
  },
  "mintStatus": "NotMinted",
  "nftContract": null,
  "tokenId": null
}
```

### 4.3. Required Beast fields

Every Beast must have:

- Unique ID.
- Owner ID.
- Template ID.
- Species.
- Affinity.
- Damage Type.
- Rarity.
- Level.
- EXP.
- Stats.
- Skills.
- Origin metadata.
- Visual traits.
- Mint status.

---

## 5. Beast Taxonomy

Beast được phân loại theo 5 lớp chính:

```text
Species Type
  ↓
Affinity
  ↓
Damage Type
  ↓
Rarity
  ↓
Role
  ↓
Visual Traits / Origin
```

### 5.1. Species Type

Species mô tả hình thái sinh vật, animation và stat identity.

### 5.2. Affinity

Affinity mô tả nguồn năng lượng/cảm xúc của Beast.

### 5.3. Damage Type

Damage Type mô tả cách Beast gây sát thương chính:

- Physical.
- Magic.

### 5.4. Rarity

Rarity mô tả độ hiếm, sức mạnh, visual treatment và origin significance.

### 5.5. Role

Role mô tả chức năng chiến đấu.

### 5.6. Visual Traits

Visual Traits mô tả biến thể appearance, skin, pattern, horn, wing, aura.

---

## 6. Species Type System

### 6.1. Species overview

| Species | Identity | Common Role | Decor Style |
|---|---|---|---|
| Dragon | Majestic, powerful | Striker, Sweeper | Fly, perch |
| Avian | Fast, light | Speed, Disruptor | Fly, perch on trees |
| Beast | Familiar, loyal | Balanced, Striker | Run, sleep, react |
| Aquatic | Deep, resilient | Tank, Sustain | Swim, water behavior |
| Spirit | Ethereal, magical | Magic, Debuff | Float, fade |
| Construct | Solid, artificial | Tank, Control | Guard, rotate, glow |

---

## 6.2. Dragon

### Fantasy

Dragon Beast sinh ra từ khát vọng lớn, lời thề mạnh mẽ, ánh sáng cao xa hoặc những giấc mơ có quy mô vĩ đại.

### Visual identity

- Silhouette lớn.
- Cánh, sừng hoặc thân dài.
- Aura rõ.
- Animation bay hoặc lượn.
- Rarity visual dễ thể hiện.

### Stat tendency

| Stat | Tendency |
|---|---|
| HP | High |
| ATK | Medium–High |
| MATK | High |
| DEF | Medium |
| MDEF | Medium–High |
| SPD | Medium |
| LUCK | Low–Medium |

### Common roles

- Magic Striker.
- Physical Striker.
- Sweeper.
- Hybrid Support.

### Decor behavior

- Bay vòng quanh Dreamland.
- Đậu lên tower/building.
- Thỉnh thoảng gầm nhẹ.
- Tạo trail ánh sáng/bóng tối.
- Có thể tương tác với Building cao.

### Species-specific skill ideas

- Breath attack.
- Wing guard.
- Sky dive.
- Aura roar.
- Elemental wave.

### Example Beast

- Aurora Wyrm.
- Paper Dragon.
- Time Drake.
- Nightmare Wyrm.

---

## 6.3. Avian

### Fantasy

Avian sinh ra từ mong muốn tự do, thông điệp chưa gửi, chuyến đi dang dở hoặc ký ức về bầu trời.

### Visual identity

- Nhỏ/gọn.
- Cánh rõ.
- Chuyển động nhanh.
- Dáng đậu, nhảy, bay ngắn.
- Feather/aura dễ biến thể.

### Stat tendency

| Stat | Tendency |
|---|---|
| HP | Low–Medium |
| ATK | Medium |
| MATK | Medium |
| DEF | Low |
| MDEF | Medium |
| SPD | High |
| LUCK | High |

### Common roles

- Speed Striker.
- Disruptor.
- Status applier.
- Scout-type utility.

### Decor behavior

- Đậu lên cây.
- Bay từ Building này sang Building khác.
- Nhảy từng bước nhỏ.
- Phản ứng nhanh khi player lại gần.

### Species-specific skill ideas

- Feather slash.
- Echo call.
- Dive strike.
- Wind haste.
- Signal cry.

### Example Beast

- Chrono Raven.
- Glass Finch.
- Moon Heron.
- Whisper Owl.

---

## 6.4. Beast

### Fantasy

Beast dạng thú sinh ra từ bản năng gần gũi: trung thành, cô đơn, bảo vệ, tình bạn, sợ hãi hoặc nỗi nhớ nhà.

### Visual identity

- Dễ thân thiện.
- Chạy/nhảy tự nhiên.
- Phù hợp starter Beast.
- Dễ tạo emotional bond.

### Stat tendency

| Stat | Tendency |
|---|---|
| HP | Medium |
| ATK | Medium–High |
| MATK | Low–Medium |
| DEF | Medium |
| MDEF | Low–Medium |
| SPD | Medium–High |
| LUCK | Medium |

### Common roles

- Balanced Striker.
- Physical DPS.
- Bruiser.
- Debuffer tùy affinity.

### Decor behavior

- Chạy vòng.
- Ngủ.
- Chơi đùa.
- Lại gần player.
- Có thể chạy theo Beast khác.

### Species-specific skill ideas

- Bite.
- Howl.
- Pounce.
- Guard stance.
- Pack instinct.

### Example Beast

- Lumina Fox.
- Shadow Lupin.
- Hollow Stag.
- Memory Cub.

---

## 6.5. Aquatic

### Fantasy

Aquatic Beast sinh ra từ ký ức chìm, nước mắt, đại dương, hồ sâu, lời hứa bị nhấn chìm hoặc cảm xúc không thể nói.

### Visual identity

- Thân mềm/dài.
- Fins, shell, scales.
- Glow dưới nước.
- Có thể “bơi” trong không khí nếu không có nước.

### Stat tendency

| Stat | Tendency |
|---|---|
| HP | High |
| ATK | Low–Medium |
| MATK | Medium–High |
| DEF | High |
| MDEF | High |
| SPD | Low–Medium |
| LUCK | Medium |

### Common roles

- Tank.
- Sustain.
- Magic Disruptor.
- Defensive Support.

### Decor behavior

- Bơi trong hồ nếu Dreamland có water building.
- Nếu không có hồ, trôi trong vortex nước.
- Vòng quanh Ocean Core.
- Tạo ripple effect.

### Species-specific skill ideas

- Tidal shield.
- Memory coil.
- Deep heal.
- Whirlpool bind.
- Drowning echo.

### Example Beast

- Abyss Serpent.
- Glass Turtle.
- Mirror Jellyfish.
- Mnemora Whale.

---

## 6.6. Spirit

### Fantasy

Spirit Beast sinh ra từ cảm xúc không còn hình dạng rõ, người đã xa, lời nhắn chưa thành câu hoặc ký ức mờ.

### Visual identity

- Trong suốt/mờ.
- Lơ lửng.
- Body shape có thể abstract.
- Fade in/out.
- Particle nhẹ.

### Stat tendency

| Stat | Tendency |
|---|---|
| HP | Low |
| ATK | Low |
| MATK | High |
| DEF | Low |
| MDEF | Medium–High |
| SPD | High |
| LUCK | High |

### Common roles

- Magic Striker.
- Debuffer.
- Status specialist.
- Utility.

### Decor behavior

- Trôi nhẹ.
- Fade in/out.
- Xuyên qua background.
- Lơ lửng quanh Relic.
- Tương tác với Archive/Library.

### Species-specific skill ideas

- Phase strike.
- Dream echo.
- Soul mist.
- Memory copy.
- Fade shield.

### Example Beast

- Echo Wisp.
- Moon Spirit.
- Archive Shade.
- Dream Manta.

---

## 6.7. Construct

### Fantasy

Construct Beast sinh ra từ ký ức có cấu trúc: thói quen, máy móc, thành phố, lời hứa, công trình, logic hoặc những điều được lặp lại quá lâu.

### Visual identity

- Golem, cube, clockwork, crystal.
- Hình học rõ.
- Chuyển động nặng.
- Ánh sáng lõi.
- Dễ gắn với Building.

### Stat tendency

| Stat | Tendency |
|---|---|
| HP | High |
| ATK | Medium |
| MATK | Medium |
| DEF | Very High |
| MDEF | High |
| SPD | Low |
| LUCK | Low |

### Common roles

- Tank.
- Guardian.
- Control.
- Shield support.

### Decor behavior

- Canh cổng.
- Đứng im rồi xoay nhẹ.
- Tỏa sáng.
- Patrol chậm.
- Kích hoạt khi player lại gần.

### Species-specific skill ideas

- Stone guard.
- Gear lock.
- Barrier field.
- Core pulse.
- Clockwork slam.

### Example Beast

- Memory Golem.
- Clockwork Cub.
- Glass Sentinel.
- Archive Construct.

---

## 7. Affinity System for Beast

### 7.1. Affinity list

| Affinity | Core Theme | Combat Identity |
|---|---|---|
| Light | Hope, healing, clarity | Heal, shield, blind, purify |
| Shadow | Fear, pain, hidden truth | Curse, burn, burst |
| Memory | Recall, echo, identity | Debuff, copy, drain |
| Emotion | Feeling, bond, morale | Buff, inspire, synergy |
| Time | Regret, change, delay | Speed, cooldown, turn control |

### 7.2. Light

#### Lore

Light Beast sinh ra từ hy vọng, sự tha thứ, lời hứa được giữ hoặc ký ức muốn được chữa lành.

#### Combat

- Heal.
- Shield.
- Blind.
- Purify debuff.
- Moderate magic damage.

#### Visual

- Glow mềm.
- Vàng nhạt, trắng, xanh lam.
- Particle như bụi sao.

#### Example skills

- Lucid Heal.
- Radiant Breath.
- Moon Guard.
- Purifying Ray.

---

## 7.3. Shadow

#### Lore

Shadow Beast sinh ra từ nỗi sợ, bí mật, đau đớn, sự phản bội hoặc những phần ký ức bị chối bỏ.

#### Combat

- Burst damage.
- Curse.
- Dream Burn.
- Debuff.
- Risk/reward.

#### Visual

- Tím đen.
- Khói.
- Gai.
- Mắt sáng.
- Vệt bóng.

#### Example skills

- Night Claw.
- Fear Howl.
- Nightmare Fang.
- Thorn Curse.

---

## 7.4. Memory

#### Lore

Memory Beast sinh ra từ ký ức mạnh, hình ảnh lặp lại, tên người không muốn quên hoặc những điều bị chôn sâu.

#### Combat

- Stat drain.
- Copy/echo effects.
- Debuff.
- Anti-Time.
- Utility.

#### Visual

- Mảnh gương.
- Chữ viết.
- Hình ảnh ghost.
- Xanh biển, bạc, tím nhạt.

#### Example skills

- Memory Coil.
- Mind Flare.
- Echo Strike.
- Archive Drain.

---

## 7.5. Emotion

#### Lore

Emotion Beast sinh ra từ tình bạn, vui buồn, giận dữ, sự đồng cảm hoặc những cảm xúc không thể gọi tên.

#### Combat

- Buff.
- Morale.
- Team synergy.
- Flexible support.
- Stronger in multi-Beast team later.

#### Visual

- Màu gradient.
- Pulse wave.
- Aura thay đổi theo mood.
- Hồng, cam, xanh pastel.

#### Example skills

- Inspire Roar.
- Joy Pulse.
- Sorrow Guard.
- Heartflare.

---

## 7.6. Time

#### Lore

Time Beast sinh ra từ hối tiếc, chờ đợi, khoảnh khắc lặp lại, cơ hội đã mất hoặc mong muốn quay lại.

#### Combat

- Haste.
- Slow.
- Delay.
- Cooldown manipulation.
- Moderate damage.

#### Visual

- Đồng hồ.
- Cát.
- Vòng thời gian.
- Afterimage.
- Vàng kim, xanh đen.

#### Example skills

- Time Warp.
- Rewind.
- Stolen Second.
- Clock Pulse.

### 7.7. Affinity counter

MVP combat dùng counter vòng:

| Attacker | Strong Against |
|---|---|
| Light | Shadow |
| Shadow | Emotion |
| Emotion | Memory |
| Memory | Time |
| Time | Light |

Modifier:

- Strong: 120%.
- Weak: 85%.
- Neutral: 100%.

---

## 8. Damage Type System

### 8.1. Damage types

Beast có default Damage Type:

- Physical.
- Magic.

Một số skill có thể khác default, nhưng nên hạn chế để giữ identity.

### 8.2. Physical Beast

Physical Beast thường:

- Dùng ATK.
- Bị giảm bởi DEF.
- Có skill bite, claw, slam, slash.
- Phù hợp Beast, Dragon, Avian, Construct.

### 8.3. Magic Beast

Magic Beast thường:

- Dùng MATK.
- Bị giảm bởi MDEF.
- Có skill breath, wave, echo, spell.
- Phù hợp Spirit, Aquatic, Dragon, Memory/Light/Time.

### 8.4. Hybrid Beast

Hybrid có cả ATK và MATK usable.

MVP nên hạn chế hybrid vì khó balance.

Nếu có:

- Chỉ cho Rare/Epic.
- Skill 1 physical, skill 2 magic.
- Stat tổng không quá cao.

---

## 9. Rarity System

### 9.1. Rarity tiers

| Rarity | Meaning |
|---|---|
| Common | Dễ craft, early game |
| Rare | Skill tốt, identity rõ |
| Epic | Visual/skill mạnh, build value |
| Legendary | Gắn boss hoặc dream hiếm |
| Dreamborn | Mythic, origin đặc biệt, rất hiếm |

### 9.2. Rarity design rules

Rarity ảnh hưởng:

- Base stat budget.
- Skill complexity.
- Visual trait quality.
- Decor animation richness.
- Metadata uniqueness.
- Drop/craft cost.
- Mint eligibility.

Rarity không nên chỉ là “stat cao hơn”.  
Rarity cao nên có:

- Skill đặc biệt hơn.
- Visual nổi bật hơn.
- Origin đáng nhớ hơn.
- Decor behavior độc đáo hơn.

### 9.3. Rarity stat budget

Suggested base stat budget multiplier:

| Rarity | Stat Multiplier |
|---|---:|
| Common | 1.00 |
| Rare | 1.08 |
| Epic | 1.18 |
| Legendary | 1.32 |
| Dreamborn | 1.45 |

Balance warning:

- Không để multiplier quá lớn.
- PvP cần normalization.
- Skill power phải được tính cùng stat budget.

### 9.4. Rarity skill complexity

| Rarity | Skill Design |
|---|---|
| Common | Simple damage/heal |
| Rare | Damage + status hoặc buff |
| Epic | Conditional synergy |
| Legendary | Unique mechanic |
| Dreamborn | Signature mechanic + story interaction |

### 9.5. Rarity visual treatment

| Rarity | Visual |
|---|---|
| Common | Simple palette |
| Rare | Extra pattern |
| Epic | Aura/particle |
| Legendary | Unique animation/VFX |
| Dreamborn | Unique silhouette or special idle |

### 9.6. Dreamborn rules

Dreamborn Beast nên cực kỳ hiếm.

Chúng có thể đến từ:

- Mythic Daily Dream.
- Hidden Ending chuỗi dài.
- Major story boss.
- Seasonal limited arc.
- Special achievement.

Design rules:

- Không spam Dreamborn.
- Mỗi Dreamborn cần lore riêng.
- Có thể account-bound trong MVP/soft launch.
- Nếu NFT, metadata phải rất rõ.

---

## 10. Beast Role System

### 10.1. Role list

| Role | Description |
|---|---|
| Striker | High single-target damage |
| Sweeper | AoE damage |
| Guardian | Tank/shield |
| Healer | Sustain |
| Disruptor | Debuff/status |
| Controller | Turn manipulation |
| Support | Buff/cleanse |
| Hybrid | Mixed role |

### 10.2. Role distribution for MVP

For 12–18 Beast, target:

| Role | Count |
|---|---:|
| Striker | 3–4 |
| Guardian | 2–3 |
| Healer/Support | 2–3 |
| Disruptor | 2–3 |
| Controller | 1–2 |
| Hybrid | 2–3 |

### 10.3. Role by Species/Affinity matrix

| Species / Affinity | Light | Shadow | Memory | Emotion | Time |
|---|---|---|---|---|---|
| Dragon | Magic Striker | Burst | Hybrid | Sweeper | Controller |
| Avian | Speed Support | Assassin | Scout | Buff | Speed Control |
| Beast | Bruiser | Striker | Debuffer | Balanced | Fast Striker |
| Aquatic | Sustain | Tank/Curse | Disruptor | Support | Slow Control |
| Spirit | Healer/Magic | Curse Mage | Echo Mage | Utility | Controller |
| Construct | Shield Tank | Corrupt Tank | Archive Guard | Defender | Lockdown |

Not every combination needs to exist in MVP.

---

## 11. Stat System

### 11.1. Core stats

| Stat | Meaning |
|---|---|
| HP | Health |
| ATK | Physical attack |
| MATK | Magic attack |
| DEF | Physical defense |
| MDEF | Magic defense |
| SPD | Turn speed |
| LUCK | Crit/drop/status bonus |

### 11.2. Stat design philosophy

Each Beast should have 2–3 strong stats and 1–2 weaknesses.

Bad design:

- Beast has high everything.
- Rarity only increases every stat.
- SPD too high on high damage Beast without tradeoff.

Good design:

- Dragon Light: high MATK, high HP, medium SPD.
- Avian Shadow: high SPD/ATK, low HP/DEF.
- Construct Memory: high DEF/MDEF, low SPD.
- Spirit Time: high MATK/SPD, low HP.

### 11.3. Base stat template by Species

| Species | HP | ATK | MATK | DEF | MDEF | SPD | LUCK |
|---|---:|---:|---:|---:|---:|---:|---:|
| Dragon | High | Med | High | Med | Med | Med | Low |
| Avian | Low | Med | Med | Low | Med | High | High |
| Beast | Med | High | Low | Med | Low | Med | Med |
| Aquatic | High | Low | Med | High | High | Low | Med |
| Spirit | Low | Low | High | Low | Med | High | High |
| Construct | High | Med | Med | Very High | High | Low | Low |

### 11.4. Stat growth formula

```text
StatAtLevel = BaseStat × (1 + GrowthRate × (Level - 1))
```

Growth rates:

| Stat | Growth |
|---|---:|
| HP | 8% |
| ATK | 6% |
| MATK | 6% |
| DEF | 4.5% |
| MDEF | 4.5% |
| SPD | 1.5% |
| LUCK | 2% |

### 11.5. Rarity stat adjustment

```text
FinalBaseStat = SpeciesBaseStat × RarityMultiplier × IndividualVariance
```

Individual variance:

- Common: ±3%.
- Rare: ±5%.
- Epic: ±7%.
- Legendary: ±8%.
- Dreamborn: fixed or hand-authored.

MVP recommendation:

- Use small variance.
- Avoid extreme stat randomness.

### 11.6. Level cap

MVP:

- Level cap 20.

Soft launch:

- Level cap 40.

Long-term:

- Seasonal cap or level 60.

### 11.7. Derived stats

Derived stats come from base stats, Relic, Building, buffs.

| Derived | Source |
|---|---|
| Crit Rate | LUCK + Relic |
| Crit Damage | Base + Relic |
| Status Resistance | Relic + Species/Passive |
| Healing Bonus | Relic + Light affinity |
| Affinity Bonus | Dream + Building + Relic |

---

## 12. Skill Kit System

### 12.1. Beast skill structure

Every Beast has:

```text
Basic Attack
Active Skill 1
Active Skill 2
Passive Skill
```

### 12.2. Basic Attack

Basic Attack should reflect default damage type.

Physical examples:

- Bite.
- Claw.
- Slam.
- Peck.

Magic examples:

- Echo Bolt.
- Light Spark.
- Memory Pulse.
- Shadow Flicker.

### 12.3. Active Skill 1

Usually primary damage or main utility.

Design:

- Cooldown 2–3.
- Clear purpose.
- Used often.

### 12.4. Active Skill 2

Usually stronger, defensive or utility.

Design:

- Cooldown 3–5.
- More strategic.
- Can define Beast identity.

### 12.5. Passive Skill

Passive gives Beast uniqueness.

Good passive examples:

- Heal once when low HP.
- Extra damage against debuffed enemies.
- Start battle with shield.
- Chance to reduce cooldown.
- Bonus in specific Realm.
- Increase fragment chance lightly.

Bad passive examples:

- +50% all damage.
- Random huge effect.
- Too many triggers.
- Requires hidden math to understand.

### 12.6. Skill data model

```json
{
  "skillId": "night_claw",
  "name": "Night Claw",
  "affinity": "Shadow",
  "damageType": "Physical",
  "targetType": "SingleEnemy",
  "power": 1.7,
  "cooldown": 3,
  "effects": [
    {
      "type": "BONUS_DAMAGE_IF_TARGET_DEBUFFED",
      "value": 0.15
    }
  ],
  "animationId": "shadow_lupin_night_claw",
  "vfxId": "shadow_claw_slash",
  "sfxId": "shadow_claw_01"
}
```

### 12.7. Passive data model

```json
{
  "passiveId": "first_blood_instinct",
  "name": "First Blood Instinct",
  "trigger": "FIRST_ATTACK_IN_BATTLE",
  "effect": {
    "type": "DAMAGE_MULTIPLIER",
    "value": 0.08
  },
  "oncePerBattle": true
}
```

### 12.8. Skill upgrade

MVP optional.

If included:

- Skill level 1–5.
- Upgrade costs fragments or Dream Essence.
- Skill upgrades should be incremental.

Example upgrade:

| Level | Damage | Status Chance |
|---|---:|---:|
| 1 | 1.5 | 20% |
| 2 | 1.58 | 22% |
| 3 | 1.66 | 24% |
| 4 | 1.74 | 26% |
| 5 | 1.85 | 30% |

Do not reduce cooldown too often.

### 12.9. Skill design by Affinity

| Affinity | Skill Pattern |
|---|---|
| Light | Damage + heal/shield/blind |
| Shadow | Damage + curse/burn/risk |
| Memory | Damage + drain/copy/debuff |
| Emotion | Buff + damage/support |
| Time | Delay/haste/cooldown |

---

## 13. Beast Crafting & Awakening

### 13.1. Core concept

Beast được tạo bằng cách ghép Dream Fragments. Trong lore, đây là quá trình **Awakening** — đánh thức sinh vật đang ngủ trong fragment.

### 13.2. Crafting inputs

Inputs có thể gồm:

- Beast Fragment.
- Realm Fragment.
- Affinity Fragment.
- Memory Fragment.
- Nightmare Shard.
- Special Relic hoặc key item.

### 13.3. Crafting cost recommendation

| Output | Cost |
|---|---:|
| Common Beast | 10 Beast Fragments |
| Rare Beast | 20 Beast Fragments |
| Epic Beast | 40 Beast Fragments + 5 Realm Fragments |
| Legendary Beast | 80+ special fragments |
| Dreamborn Beast | Unique condition, not normal craft |

### 13.4. Determining Beast outcome

There are two possible systems:

#### Option A — Fixed Recipe

Player crafts specific Beast.

Example:

```text
20 Light Beast Fragments + 5 Forest Fragments = Lumina Fox
```

Pros:

- Clear.
- Fair.
- Easy UX.

Cons:

- Less surprise.

#### Option B — Weighted Awakening

Player uses fragments and outcome is weighted.

Example:

- More Light fragments → higher Light Beast chance.
- More Ocean fragments → higher Aquatic/Memory chance.

Pros:

- Exciting.
- Collection variety.

Cons:

- Can feel like gacha if not careful.

#### Recommendation for MVP

Use **Fixed Recipe for core Beast**, and **Weighted Visual Traits** for variation.

This avoids gambling concerns while still giving uniqueness.

### 13.5. Awakening flow

```text
Player opens Craft screen
  ↓
Select Beast recipe
  ↓
System checks fragments
  ↓
Preview Beast species/affinity/rarity
  ↓
Player confirms
  ↓
Backend consumes fragments
  ↓
Backend creates Beast instance
  ↓
Rolls visual traits
  ↓
Attaches origin metadata
  ↓
Player sees Awakening animation
```

### 13.6. Crafting result metadata

If Beast is crafted from fragments gathered across multiple dreams, origin can be determined by:

Option A:

- Dominant fragment source.

Option B:

- Final fragment source.

Option C:

- Crafting ritual source.

Recommendation:

- Use **dominant rarest fragment source**.

Example:

```text
If Beast uses 30 common fragments and 5 Epic fragments from The Lantern Under the Lake, origin Dream = The Lantern Under the Lake.
```

### 13.7. Nightmare crafting

Using Nightmare Shard can create:

- Shadow variant.
- Corrupt visual trait.
- Higher damage but drawback.
- Corruption metadata.
- Nightmare passive.

Example:

```text
Lumina Fox + Nightmare Shard → Eclipse Fox variant
```

MVP should avoid too many variant transformations. Use Nightmare Shard for specific recipes only.

---

## 14. Beast Origin Metadata

### 14.1. Purpose

Origin Metadata gives Beast story value.

Every Beast should answer:

- Where was it born?
- From which dream?
- Under which ending?
- What choice created it?
- What emotion does it represent?

### 14.2. Required fields

```json
{
  "originSeedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "originDreamTitle": "The Lantern Under the Lake",
  "originRealm": "Ocean of Memories",
  "originRarity": "Epic",
  "originEnding": "Hidden",
  "keyChoice": "listen_to_song",
  "birthDate": "2026-05-24",
  "originFragmentIds": ["FRAG-001", "FRAG-002"],
  "loreQuote": "It swims through memories too deep for daylight."
}
```

### 14.3. Origin display in Beast profile

Example:

```text
Origin
Born from: The Lantern Under the Lake
Realm: Ocean of Memories
Ending: Hidden
Key Choice: Listened to the song beneath the water
Birth Date: May 24, 2026

“It swims through memories too deep for daylight.”
```

### 14.4. Origin rarity value

A Common Beast can still have meaningful origin.

Rarity of origin can depend on:

- Dream rarity.
- Ending type.
- Hidden path.
- Event status.
- First clear.
- Corruption level.

### 14.5. NFT relevance

Origin metadata becomes especially important if Beast is minted.

NFT buyers/collectors should see:

- This Beast came from a specific Daily Dream.
- It was born from a Hidden Ending.
- It has unique visual traits.
- It is not just a generic token.

---

## 15. Visual Trait System

### 15.1. Purpose

Visual traits make Beast feel unique without needing a new full Beast design every time.

Trait categories:

- Body color.
- Pattern.
- Horn/wing/tail.
- Eye.
- Aura.
- Particle.
- Marking.
- Accessory, if appropriate.

### 15.2. Trait data model

```json
{
  "traitPoolId": "aurora_wyrm_traits",
  "traits": {
    "body": ["pearl", "silver", "dawn_blue"],
    "pattern": ["aurora", "moonstripe", "stardust"],
    "horn": ["glass", "crescent", "crystal"],
    "aura": ["moonlight", "soft_gold", "blue_flare"]
  }
}
```

### 15.3. Trait rarity

| Trait Rarity | Use |
|---|---|
| Common | Basic color/pattern |
| Rare | Special markings |
| Epic | Aura/particle |
| Legendary | Unique appendage/VFX |
| Mythic | One-of-one or event trait |

### 15.4. Trait generation

Traits can be influenced by:

- Beast template.
- Dream Realm.
- Ending.
- Fragment source.
- Corruption.
- Event.
- Rarity.

Example:

```text
Hidden Ending in Ocean increases chance of "deepwater glow" aura.
Corrupt Ending increases chance of "nightmare crack" pattern.
```

### 15.5. MVP recommendation

MVP can implement visual traits as metadata first, visual later.

Phase:

1. Store traits in data.
2. Display trait text in profile.
3. Implement palette swap for body/pattern.
4. Add aura/particle for high rarity.

---

## 16. Gene System

**Post-MVP / Optional.**

### 16.1. Purpose

Gene System supports deeper collection, visual inheritance and future breeding/fusion.

### 16.2. Gene categories

Initial idea:

- Body.
- Pattern.
- Tail/Horn/Wing.
- Aura.
- Behavior quirk.
- Skill modifier, optional.

### 16.3. Gene data

```json
{
  "genes": {
    "bodyGene": "pearl_body",
    "patternGene": "aurora_pattern",
    "appendageGene": "glass_horn",
    "auraGene": "moonlight_aura",
    "behaviorGene": "curious_flight"
  }
}
```

### 16.4. Gene impact

Genes may affect:

- Visual.
- Animation style.
- Decor behavior.
- Minor stat flavor.
- Optional skill variant.

### 16.5. Design warning

Do not let genes create uncontrollable power creep.

Recommended:

- Genes mostly cosmetic.
- Combat gene effects tiny or PvE-only.
- PvP normalization.

---

## 17. Leveling & Progression

### 17.1. EXP sources

Beast gains EXP from:

- Combat.
- Dream completion.
- Training Building.
- Event reward.
- Consumable item, post-MVP.

### 17.2. EXP formula

Combat EXP:

```text
EXP = BaseEnemyEXP × EnemyLevel × RarityMultiplier
```

Dream completion EXP:

```text
CompletionEXP = DreamRarityBaseEXP × EndingMultiplier
```

Ending multiplier:

| Ending | Multiplier |
|---|---:|
| Failed | 0.2 |
| Purify | 1.0 |
| Corrupt | 1.1 |
| Hidden | 1.25 |

### 17.3. Level curve

MVP simple curve:

```text
EXPToNextLevel = 100 × Level^1.35
```

Example:

| Level | EXP to Next |
|---:|---:|
| 1 | 100 |
| 2 | 255 |
| 3 | 440 |
| 5 | 878 |
| 10 | 2240 |
| 15 | 3868 |
| 20 | Cap |

### 17.4. Level cap

MVP:

- Cap 20.

Soft Launch:

- Cap 40.

Long-term:

- Cap 60 or seasonal cap.

### 17.5. Level-up rewards

When Beast levels:

- Stats increase.
- Skill upgrade unlock optional.
- New decor animation at milestone.
- Profile frame/VFX at high level.

Milestone examples:

| Level | Reward |
|---:|---|
| 5 | Skill 2 enhanced or unlocked |
| 10 | Passive upgrade |
| 15 | Decor behavior variant |
| 20 | Mint eligibility or title |

### 17.6. Overleveling control

Avoid making old content trivial:

- Dream enemy scaling.
- Rarity challenge.
- Optional hard mode.
- PvP normalization.

---

## 18. Upgrade System

### 18.1. Upgrade types

MVP possible:

- Level up by EXP.
- Skill level upgrade.
- Relic equip.
- Cosmetic skin change.

Post-MVP:

- Ascension.
- Evolution.
- Gene refinement.
- Bond level.
- Awakening star.

### 18.2. Skill upgrade costs

Example:

| Skill Level | Cost |
|---:|---|
| 2 | 5 Affinity Fragments |
| 3 | 10 Affinity Fragments + 1 Relic Fragment |
| 4 | 20 Affinity Fragments |
| 5 | 30 Affinity Fragments + Rare material |

### 18.3. Ascension

Post-MVP feature.

Purpose:

- Increase level cap.
- Unlock visual effect.
- Add minor passive.

Ascension should require:

- Realm fragments.
- Beast fragments.
- Dream Essence.
- Special achievement.

### 18.4. Evolution

Beast evolution is powerful but expensive to produce. Use carefully.

Options:

- Visual evolution only.
- Skill evolution.
- Rarity upgrade.
- Story evolution.

Recommendation:

- Do not include evolution in MVP.
- Use “Awakened Form” for select Beast later.

---

## 19. Relic Integration

### 19.1. Relic slot

MVP:

- 1 Relic per Beast.

Post-MVP:

- 1 Core Relic.
- 1–2 Minor Relic slots.
- Dreamland Relic aura.

### 19.2. Relic effect on Beast

Relic can:

- Increase stat.
- Add status chance.
- Add shield/heal.
- Modify skill.
- Unlock hidden path.
- Add drawback.

### 19.3. Relic compatibility

Some Relics can have affinity/species synergy.

Example:

```text
Lantern of Forgotten Shores:
+10% Memory damage.
Additional +5% if equipped by Aquatic Beast.
Unlocks Ocean hidden node.
```

### 19.4. UI display

Beast profile should show:

```text
Equipped Relic
Lantern of Forgotten Shores
Effect: +10% Memory damage
Origin: Ocean of Memories
```

### 19.5. Balance warning

Relic must not make a Beast mandatory.

Aim:

- Relic improves build.
- Relic does not replace Beast identity.
- Strong Relic has drawback or narrow condition.

---

## 20. Dreamland Decor Behavior

### 20.1. Purpose

Beast should feel alive outside combat.

Dreamland behavior increases:

- Emotional attachment.
- Collection value.
- Visual identity.
- Social/share value.
- NFT value after mint.

### 20.2. Placement rules

MVP:

- Player can place/select Beast to roam Dreamland.
- Limit visible Beast count for performance.
- Beast pathfinding simple.
- Beast behavior based on Species.

Recommended MVP visible limit:

- 3–5 Beast roaming.

Post-MVP:

- Increase via Building upgrade.
- Assign Beast to zones.
- Social visit mode.

### 20.3. Behavior by Species

#### Dragon

- Fly around.
- Perch on tall Building.
- Emit glow roar.
- Circle Dreamland edge.

#### Avian

- Perch on tree/roof.
- Short flight.
- Hop around.
- React quickly to player.

#### Beast

- Run.
- Sleep.
- Chase other Beast.
- Sit near player.
- Tail wag/howl.

#### Aquatic

- Swim in water building.
- Float in water vortex if no pond.
- Dive and reappear.
- Circle Ocean Core.

#### Spirit

- Float.
- Fade in/out.
- Pass through decor.
- Hover near Relic.

#### Construct

- Guard gate.
- Patrol slowly.
- Rotate body parts.
- Light core pulse.

### 20.4. Interaction behaviors

When player taps/clicks Beast:

- Happy reaction.
- Short animation.
- Open profile.
- Play sound.
- Maybe drop tiny affection sparkle, no reward needed.

### 20.5. Beast-Beast interactions

Post-MVP:

- Beast chase each other.
- Avian lands on Dragon back.
- Spirit circles Construct.
- Beast sleeps near Light Tower.
- Shadow Beast avoids Light Beast.
- Emotion Beast gathers others.

### 20.6. Mood system

Post-MVP optional.

Mood affected by:

- Recent combat.
- Dreamland corruption.
- Favorite Building.
- Player interaction.
- Affinity environment.

MVP should not implement mood unless needed.

---

## 21. Beast Bond System

**Post-MVP optional, but useful for retention.**

### 21.1. Purpose

Bond measures relationship between player and Beast.

### 21.2. Bond sources

- Use Beast in Dream.
- Win battle.
- Complete Hidden Ending.
- Interact in Dreamland.
- Equip favored Relic.
- Place near favorite Building.

### 21.3. Bond rewards

- New idle animation.
- Profile lore line.
- Small stat bonus.
- Cosmetic aura.
- Unlock nickname title.
- Hidden path clue.

### 21.4. MVP recommendation

Do not implement full Bond in MVP.  
But reserve data field:

```json
"bondLevel": 0,
"bondExp": 0
```

---

## 22. Beast Inventory & Management

### 22.1. Beast list screen

Must show:

- Beast portrait.
- Name.
- Rarity.
- Level.
- Species.
- Affinity.
- Role.
- Equipped marker.
- Dreamland placed marker.
- Mint status after MVP.

### 22.2. Filters

MVP filters:

- Rarity.
- Affinity.
- Species.
- Level.
- Role.

Post-MVP:

- Origin Realm.
- Ending.
- Mint status.
- PvP rating.
- Favorite.

### 22.3. Sorting

Sort by:

- Recently acquired.
- Level.
- Rarity.
- Affinity.
- Species.
- Power rating.

### 22.4. Beast profile screen

Sections:

1. Header.
2. Model/portrait.
3. Rarity/species/affinity.
4. Level/EXP.
5. Stats.
6. Skills.
7. Relic.
8. Origin.
9. Decor behavior.
10. NFT status.

### 22.5. Beast lock/favorite

Player can favorite/lock Beast to prevent:

- Accidental burn.
- Trade.
- Fusion.
- Listing.

MVP should include favorite/lock if possible.

### 22.6. Beast naming

Allow player to rename Beast.

Rules:

- Max 16–24 characters.
- Profanity filter.
- Original species name still visible.

Example:

```text
Moonflare
Aurora Wyrm
```

---

## 23. Beast Power Rating

### 23.1. Purpose

Power Rating gives quick estimate for matchmaking and UI.

### 23.2. Formula

Simple:

```text
PowerRating =
  HP × 0.08 +
  ATK × 1.2 +
  MATK × 1.2 +
  DEF × 1.0 +
  MDEF × 1.0 +
  SPD × 1.5 +
  LUCK × 0.6 +
  SkillPowerScore +
  RarityBonus
```

### 23.3. Usage

Power Rating used for:

- Recommended Dream difficulty.
- PvP matchmaking later.
- Beast sorting.
- Warning if underpowered.

### 23.4. Design warning

Power Rating is approximate. Do not use as final combat balance source.

---

## 24. Beast NFT Readiness

### 24.1. NFT principle

Beast should be fun and valuable even before NFT.  
NFT is an ownership/provenance layer, not the game itself.

### 24.2. Mint eligibility

A Beast can be eligible to mint if:

- Fully created as owned Beast.
- Not temporary.
- Not starter-only locked unless allowed.
- Has complete metadata.
- Not currently listed/traded.
- Meets rarity or level condition if desired.

MVP can store mintStatus without minting.

### 24.3. Mint status

| Status | Meaning |
|---|---|
| NotMinted | Off-chain only |
| MintEligible | Can be minted |
| MintPending | Mint transaction started |
| Minted | On-chain NFT exists |
| Listed | Listed on marketplace |
| Transferred | Ownership transferred |
| Burned | NFT burned, if supported |

### 24.4. NFT metadata fields

```json
{
  "name": "Moonflare",
  "beastTemplate": "Aurora Wyrm",
  "species": "Dragon",
  "affinity": "Light",
  "damageType": "Magic",
  "rarity": "Epic",
  "levelAtMint": 20,
  "originDream": "The Lantern Under the Lake",
  "originSeed": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "originRealm": "Ocean of Memories",
  "originEnding": "Hidden",
  "birthDate": "2026-05-24",
  "visualTraits": {
    "body": "pearl",
    "pattern": "aurora",
    "horn": "glass",
    "aura": "moonlight"
  },
  "loreQuote": "It swims through memories too deep for daylight."
}
```

### 24.5. NFT image

NFT image can be:

- Static portrait.
- Animated GIF/WebM later.
- Generated card with metadata.
- Rarity frame.

MVP/web phase:

- Use generated card template.

### 24.6. Trading rules

To avoid gameplay issues:

- Beast in active Dream Run cannot be traded.
- Beast placed in active PvP defense cannot be traded.
- Beast locked/favorite cannot be listed.
- If traded, update owner in backend after on-chain confirmation.

### 24.7. Pay-to-win mitigation

- PvP normalized.
- Some modes use rental/standardized stats.
- Power differences capped by league.
- Cosmetic and provenance value emphasized.
- Starter/progression Beast remain viable.

---

## 25. Beast PvP Readiness

### 25.1. PvP requirements

Beast needs additional fields for PvP:

```json
{
  "pvpRating": 1240,
  "pvpWins": 12,
  "pvpLosses": 8,
  "skillPriority": [],
  "pvpLoadoutLocked": false
}
```

### 25.2. PvP skill priority

For auto battle:

```json
{
  "priority": [
    {
      "condition": "self_hp_below_40",
      "skillId": "deep_recall"
    },
    {
      "condition": "enemy_has_debuff",
      "skillId": "night_claw"
    },
    {
      "condition": "default",
      "skillId": "basic_attack"
    }
  ]
}
```

### 25.3. PvP balance

PvP should consider:

- Level bracket.
- Rarity bracket.
- Relic restrictions.
- Separate PvP skill modifiers.
- No unlimited Time loop.
- Control reduction.

### 25.4. PvP roles

Some Beast may be better in PvE, some in PvP.

Design should allow:

- PvE boss killer.
- PvP controller.
- Dreamland cosmetic favorite.
- Farming/LUCK Beast.

---

## 26. Beast Economy

### 26.1. Economy role

Beast drives:

- Fragment demand.
- Dream participation.
- Crafting.
- Relic usage.
- Dreamland decoration.
- Marketplace activity later.

### 26.2. Supply control

Risks:

- Too many high rarity Beast.
- NFT oversupply.
- Common Beast worthless.
- Marketplace power inflation.

Mitigation:

- Fragment cost scaling.
- Legendary/Dreamborn limited by content.
- Crafting requires Realm-specific material.
- High rarity visual/cosmetic rather than only stat.
- Account-bound starter/progression Beast.

### 26.3. Duplicate Beast

Player may own duplicates.

Duplicate uses:

- Different visual traits.
- Different origin metadata.
- Future fusion/ascension.
- Dreamland display.
- Trade/mint.
- Convert to Essence, if needed.

MVP can allow duplicates and rely on collection value.

### 26.4. Burning/conversion

Post-MVP:

- Convert duplicate Beast to Dream Essence.
- Do not allow burning minted NFT without special flow.
- Protect favorites/locked.

### 26.5. Marketplace considerations

If Beast tradable:

- Show origin.
- Show level.
- Show skills.
- Show visual traits.
- Show mint date.
- Show rarity.
- Show whether normalized in PvP.

---

## 27. Starter Beast Design

### 27.1. Luma Fox

Recommended starter.

| Field | Value |
|---|---|
| Name | Luma Fox |
| Species | Beast |
| Affinity | Light |
| Damage Type | Magic or Hybrid |
| Rarity | Common/Rare story-bound |
| Role | Support Striker |
| Origin | Empty Dreamland |

### 27.2. Stats

| Stat | Value |
|---|---:|
| HP | 1050 |
| ATK | 85 |
| MATK | 115 |
| DEF | 75 |
| MDEF | 90 |
| SPD | 105 |
| LUCK | 60 |

### 27.3. Skills

#### Basic — Moon Bite

- Magic or Physical.
- 0.9 power.

#### Active 1 — Lunar Spark

- Light Magic.
- 1.3 MATK.
- Cooldown 2.

#### Active 2 — Healing Tail

- Heal self 12% max HP.
- Cooldown 4.

#### Passive — Guiding Glow

- First time HP drops below 50%, gain small Shield.
- Also glows near hidden tutorial node.

### 27.4. Narrative

Luma may be the last Beast that remembers player’s Dreamland before Blank Mist.

### 27.5. Long-term value

Options:

- Luma can be upgraded to Rare/Epic through story.
- Luma has unique Dreamland behavior.
- Luma remains account-bound.
- Luma unlocks early hidden clues.

---

## 28. Example Beast Catalog for MVP

### 28.1. MVP Beast target

12–18 Beast.

Recommended distribution:

- 2–3 per MVP Realm.
- At least one per Affinity except Time can be rare.
- At least one per Species.
- At least one support/healer.
- At least one tank.
- At least one debuffer.
- At least one speed/control.

### 28.2. Suggested MVP Beast list

| Beast | Species | Affinity | Damage | Rarity | Role | Source |
|---|---|---|---|---|---|---|
| Luma Fox | Beast | Light | Magic | Rare | Support | Starter |
| Shadow Lupin | Beast | Shadow | Physical | Epic | Striker | Forest/Corrupt |
| Whisper Moth | Avian/Insect | Memory | Magic | Common | Debuffer | Forest |
| Silent Stag | Beast | Memory | Magic | Rare | Guardian | Forest Hidden |
| Aurora Wyrm | Dragon | Light | Magic | Epic | Striker/Support | Ocean/Light |
| Abyss Serpent | Aquatic | Memory | Magic | Epic | Sustain | Ocean Hidden |
| Glass Turtle | Aquatic | Light | Magic | Rare | Tank | Ocean |
| Mirror Jelly | Aquatic | Emotion | Magic | Common | Disruptor | Ocean |
| Paper Dragon | Dragon | Emotion | Magic | Epic | Sweeper | Playground Hidden |
| Toy Cub | Beast | Emotion | Physical | Common | Balanced | Playground |
| Hollow Doll Spirit | Spirit | Shadow | Magic | Rare | Curse | Playground Corrupt |
| Chalk Bird | Avian | Memory | Magic | Common | Speed Debuffer | Playground |
| Clockwork Cub | Construct | Time | Physical | Rare | Control | Clocktower later |
| Time Serpent | Aquatic/Spirit | Time | Magic | Legendary | Controller | Clocktower |
| Nightmare Wyrm | Dragon | Shadow | Magic | Legendary | Burst | Citadel |
| Archive Golem | Construct | Memory | Magic | Epic | Tank | Archive/Event |

MVP can implement first 12 and reserve others.

---

## 29. Detailed Example Beast

## 29.1. Aurora Wyrm

### Basic info

| Field | Value |
|---|---|
| Species | Dragon |
| Affinity | Light |
| Damage Type | Magic |
| Rarity | Epic |
| Role | Magic Striker / Support |
| Origin Realm | Ocean of Memories or Forest of Lost Voices |
| Decor | Flying/perching |

### Lore

Aurora Wyrm is born when a dream refuses to let darkness become the final memory. Its wings do not beat against air, but against the silence left after despair.

### Stats

| Stat | Value |
|---|---:|
| HP | 1600 |
| ATK | 80 |
| MATK | 210 |
| DEF | 90 |
| MDEF | 140 |
| SPD | 95 |
| LUCK | 60 |

### Skills

#### Basic — Arcane Bite

- Magic.
- 0.9 MATK.
- Single target.

#### Active 1 — Radiant Breath

- Light Magic.
- 1.6 MATK.
- 20% chance Blind.
- Cooldown 3.

#### Active 2 — Aurora Wave

- Light Magic.
- 0.8 MATK to all enemies.
- Self Haste +10% SPD for 2 turns.
- Cooldown 4.

#### Passive — Sky Guardian

- Once per battle.
- When HP < 40%, heal 8% max HP.

### Decor

- Flies around Dreamland.
- Perches on Light Tower.
- Leaves aurora trail.
- Reacts to Light Building.

### Metadata quote

```text
It carries dawn across dreams that forgot the sky.
```

---

## 29.2. Shadow Lupin

### Basic info

| Field | Value |
|---|---|
| Species | Beast |
| Affinity | Shadow |
| Damage Type | Physical |
| Rarity | Epic |
| Role | Physical Striker / Debuffer |
| Origin Realm | Forest / Nightmare |
| Decor | Stalking/running |

### Lore

Shadow Lupin is born from the fear of betrayal, but also from the instinct to survive it. It does not trust easily, but once bonded, it follows its Dreamwalker even through Nightmare mist.

### Stats

| Stat | Value |
|---|---:|
| HP | 1300 |
| ATK | 185 |
| MATK | 40 |
| DEF | 100 |
| MDEF | 60 |
| SPD | 130 |
| LUCK | 40 |

### Skills

#### Basic — Quick Bite

- Physical.
- 1.0 ATK.

#### Active 1 — Night Claw

- Shadow Physical.
- 1.7 ATK.
- +15% damage if target has debuff.
- Cooldown 3.

#### Active 2 — Fear Howl

- All enemies.
- -15% ATK for 2 turns.
- 30% chance Curse.
- Cooldown 4.

#### Passive — First Blood Instinct

- First attack in battle deals +8% damage.

### Decor

- Runs around shadowed areas.
- Hides behind trees.
- Howls when player approaches.
- Interacts with Nightmare Gate.

### Metadata quote

```text
It learned to bare its teeth before it learned to sleep.
```

---

## 29.3. Abyss Serpent

### Basic info

| Field | Value |
|---|---|
| Species | Aquatic |
| Affinity | Memory |
| Damage Type | Magic |
| Rarity | Epic |
| Role | Sustain / Disruptor |
| Origin Realm | Ocean of Memories |
| Decor | Swimming/water vortex |

### Lore

Abyss Serpent is born from memories too deep for daylight. It coils around forgotten songs and keeps them from dissolving into silence.

### Stats

| Stat | Value |
|---|---:|
| HP | 1500 |
| ATK | 60 |
| MATK | 165 |
| DEF | 120 |
| MDEF | 130 |
| SPD | 85 |
| LUCK | 70 |

### Skills

#### Basic — Ripple Fang

- Magic.
- 0.9 MATK.

#### Active 1 — Memory Coil

- Memory Magic.
- 1.3 MATK.
- Apply Memory Drain -15% MATK for 2 turns.
- Cooldown 3.

#### Active 2 — Deep Recall

- Heal self 15% max HP.
- If enemy has Memory Drain, gain Shield 10% max HP.
- Cooldown 4.

#### Passive — Beneath the Surface

- +10% Status Resistance at battle start.

### Decor

- Swims around Ocean Core.
- Creates water ripples.
- If no water, floats in a spiral vortex.
- Reacts to Lantern Relics.

### Metadata quote

```text
It swims through memories too deep for daylight.
```

---

## 29.4. Paper Dragon

### Basic info

| Field | Value |
|---|---|
| Species | Dragon |
| Affinity | Emotion |
| Damage Type | Magic |
| Rarity | Epic |
| Role | Sweeper / Buff |
| Origin Realm | Childhood Playground |
| Decor | Paper flight / playful |

### Lore

Paper Dragon was folded from a child’s belief that anything drawn could become real if someone loved it enough.

### Skills

#### Basic — Paper Spark

- Emotion Magic.
- 0.9 MATK.

#### Active 1 — Crayon Flame

- Emotion Magic.
- 1.4 MATK.
- If player has Inspire, +10% damage.
- Cooldown 3.

#### Active 2 — Make Believe

- Gain Inspire +15% MATK for 2 turns.
- Deal 0.6 MATK to all enemies.
- Cooldown 4.

#### Passive — Still Real to Me

- When HP below 30%, gains Shield once.

### Decor

- Flutters like paper.
- Lands on Playground Building.
- Chases Chalk Bird.
- Folds/unfolds when tapped.

### Metadata quote

```text
It was only paper until someone believed it could fly.
```

---

## 29.5. Clockwork Cub

### Basic info

| Field | Value |
|---|---|
| Species | Construct |
| Affinity | Time |
| Damage Type | Physical |
| Rarity | Rare |
| Role | Tank / Control |
| Origin Realm | Clocktower of Time |
| Decor | Patrol/gear rotation |

### Skills

#### Basic — Gear Paw

- Physical.
- 0.95 ATK.

#### Active 1 — Stolen Tick

- Physical.
- 1.1 ATK.
- Apply Slow -15% SPD for 2 turns.
- Cooldown 3.

#### Active 2 — Brass Guard

- Gain Shield 18% max HP.
- Cooldown 4.

#### Passive — Wind-Up Heart

- At battle start, gain +10% DEF for 2 turns.

### Decor

- Patrols slowly.
- Sits near Clock Shrine.
- Gear ears rotate.
- Emits tick-tock sound lightly.

### Metadata quote

```text
It guards the second before goodbye.
```

---

## 30. Beast Art Requirements

### 30.1. Required assets per Beast

MVP minimum:

- Portrait/icon.
- Combat idle.
- Basic attack animation.
- Active Skill 1 animation.
- Active Skill 2 animation.
- Hit animation.
- Defeat animation.
- Victory animation.
- Dreamland idle.
- Dreamland movement.
- Interaction reaction.

### 30.2. Optional assets

- Rarity aura.
- NFT card render.
- Skin variants.
- Special idle.
- Boss intro if Beast has story.

### 30.3. Silhouette rule

Beast should be recognizable in small mobile size.

Checklist:

- Distinct head/body shape.
- Clear Species read.
- Affinity color accent.
- Avoid over-detailing small sprites.
- Rarity VFX should not obscure form.

### 30.4. Color by Affinity

| Affinity | Color Direction |
|---|---|
| Light | White, gold, soft blue |
| Shadow | Black, violet, crimson |
| Memory | Blue, silver, glass, ink |
| Emotion | Pink, orange, pastel gradient |
| Time | Bronze, gold, dark teal |

### 30.5. Rarity VFX

- Common: no aura.
- Rare: small accent glow.
- Epic: visible aura/particle.
- Legendary: special idle VFX.
- Dreamborn: unique VFX layer.

---

## 31. Animation Requirements

### 31.1. Combat animation list

| Animation | Required |
|---|---|
| Idle | Yes |
| Basic Attack | Yes |
| Skill 1 | Yes |
| Skill 2 | Yes |
| Hit | Yes |
| Defeat | Yes |
| Victory | Yes |
| Status Affected | Optional but recommended |
| Defend | Yes if Defend exists |

### 31.2. Dreamland animation list

| Animation | Required |
|---|---|
| Idle | Yes |
| Move | Yes |
| Tap Reaction | Yes |
| Special Species Idle | Recommended |
| Building Interaction | Post-MVP |
| Beast-Beast Interaction | Post-MVP |

### 31.3. Animation complexity by rarity

| Rarity | Animation Complexity |
|---|---|
| Common | Simple |
| Rare | Extra reaction |
| Epic | Better skill VFX |
| Legendary | Unique idle/skill flourish |
| Dreamborn | Custom animation beat |

---

## 32. Audio Requirements

### 32.1. Beast audio

Each Beast should have:

- Select sound.
- Idle sound.
- Attack sound.
- Skill sound.
- Hit sound.
- Victory sound.
- Dreamland tap sound.

MVP can reuse audio by Species/Affinity.

### 32.2. Audio by Species

| Species | Audio Style |
|---|---|
| Dragon | Low roar, wind |
| Avian | Chirp, wing flap |
| Beast | Growl, bark, steps |
| Aquatic | Water ripple, deep call |
| Spirit | Whisper, chime |
| Construct | Gear, stone, crystal |

### 32.3. Audio by Affinity

| Affinity | Audio Layer |
|---|---|
| Light | Chime, soft flare |
| Shadow | Low hum, dark hiss |
| Memory | Echo, glass |
| Emotion | Pulse, harmonic tone |
| Time | Tick, reverse swell |

---

## 33. Backend Requirements

### 33.1. Tables

#### beast_templates

```sql
beast_template_id
name
species
affinity
default_damage_type
base_rarity
role_tags
base_stats_json
growth_profile_id
skill_set_json
decor_behavior_set_id
visual_trait_pool_id
lore_tags_json
mintable
status
created_at
updated_at
```

#### user_beasts

```sql
beast_id
owner_id
template_id
custom_name
level
exp
rarity
species
affinity
damage_type
stats_json
skill_levels_json
equipped_relic_id
origin_json
visual_traits_json
decor_state_json
bond_level
bond_exp
mint_status
nft_contract
token_id
is_locked
is_favorite
created_at
updated_at
```

#### beast_fragments

```sql
fragment_id
owner_id
fragment_type
beast_template_id
affinity
realm_id
rarity
source_seed_id
quantity
created_at
updated_at
```

#### beast_crafting_logs

```sql
craft_id
owner_id
recipe_id
input_fragments_json
output_beast_id
origin_seed_id
result_json
created_at
```

### 33.2. Services

| Service | Responsibility |
|---|---|
| BeastTemplateService | Load master Beast data |
| UserBeastService | Manage owned Beast |
| BeastCraftingService | Craft/Awaken Beast |
| BeastProgressionService | EXP/level/skill upgrades |
| BeastDecorService | Dreamland placement/behavior state |
| BeastMetadataService | Origin metadata |
| BeastMintService | NFT readiness/mapping |
| BeastValidationService | Validate combat/loadout |

### 33.3. API endpoints

```text
GET  /beasts
GET  /beasts/{beastId}
POST /beasts/{beastId}/rename
POST /beasts/{beastId}/favorite
POST /beasts/{beastId}/lock
POST /beasts/{beastId}/equip-relic
POST /beasts/craft
GET  /beast-recipes
GET  /beast-fragments
POST /dreamland/place-beast
POST /dreamland/remove-beast
GET  /beasts/{beastId}/metadata
POST /beasts/{beastId}/mint
```

### 33.4. Craft Beast API example

Request:

```json
{
  "recipeId": "craft_abyss_serpent",
  "inputFragments": [
    {
      "fragmentType": "abyss_serpent_fragment",
      "quantity": 40
    },
    {
      "fragmentType": "ocean_realm_fragment",
      "quantity": 5
    }
  ]
}
```

Response:

```json
{
  "success": true,
  "beast": {
    "beastId": "BEAST-000123",
    "name": "Abyss Serpent",
    "species": "Aquatic",
    "affinity": "Memory",
    "rarity": "Epic",
    "origin": {
      "dreamTitle": "The Lantern Under the Lake",
      "ending": "Hidden"
    },
    "visualTraits": {
      "body": "deep_blue",
      "pattern": "lantern_glow",
      "aura": "underwater_light"
    }
  }
}
```

### 33.5. Server authority

Backend must own:

- Beast creation.
- Fragment consumption.
- Stat calculation.
- Level-up.
- Skill upgrade.
- Relic equip validation.
- Mint eligibility.
- Ownership.
- Trade lock state.

Client can preview but not decide authoritative result.

---

## 34. Client Requirements

### 34.1. Unity modules

- BeastInventoryController.
- BeastProfileUI.
- BeastCraftingUI.
- BeastRenderer.
- BeastAnimationController.
- BeastSkillDisplay.
- BeastDreamlandController.
- BeastPlacementController.
- BeastMetadataDisplay.
- BeastLoadoutSelector.

### 34.2. Beast profile UI

Profile must display:

- Portrait/model.
- Custom name.
- Template name.
- Rarity.
- Species.
- Affinity.
- Damage Type.
- Level/EXP.
- Stats.
- Skills.
- Passive.
- Equipped Relic.
- Origin.
- Visual traits.
- Dreamland status.
- NFT status.

### 34.3. Beast selection before Dream

Before entering Daily Dream:

- Show recommended affinity.
- Show Beast list.
- Show power rating.
- Warn if underleveled.
- Show equipped Relic.
- Confirm selection.

### 34.4. Dreamland rendering

Client should support:

- Spawn selected roaming Beast.
- Species behavior set.
- Tap/click interaction.
- Simple pathing.
- Performance cap.
- Hide Beast if too many active objects.

### 34.5. Caching

Beast data can be cached locally, but refresh when:

- Inventory changes.
- Crafting occurs.
- Level up.
- Relic equip.
- Mint/trade.
- Login.

---

## 35. Content Authoring Pipeline

### 35.1. Beast creation workflow

```text
Narrative defines Beast origin/theme
  ↓
Game Design defines Species/Affinity/Role
  ↓
Combat Design creates stats/skills
  ↓
Art creates concept/sprite/animation
  ↓
Audio creates SFX
  ↓
Backend adds template data
  ↓
Unity integrates visuals/animation
  ↓
QA tests combat, inventory, Dreamland behavior
```

### 35.2. Beast template checklist

- [ ] Name.
- [ ] Species.
- [ ] Affinity.
- [ ] Damage Type.
- [ ] Rarity.
- [ ] Role.
- [ ] Base stats.
- [ ] Growth profile.
- [ ] Basic attack.
- [ ] Active skill 1.
- [ ] Active skill 2.
- [ ] Passive.
- [ ] Origin Realm.
- [ ] Visual traits.
- [ ] Decor behavior.
- [ ] Lore quote.
- [ ] Crafting recipe.
- [ ] Fragment source.
- [ ] Art assets.
- [ ] Animation assets.
- [ ] Audio assets.
- [ ] Balance tested.

### 35.3. Beast balancing checklist

- [ ] Has clear strength.
- [ ] Has clear weakness.
- [ ] Not strictly better than lower rarity in all cases.
- [ ] Skill cooldown appropriate.
- [ ] Passive not overpowered.
- [ ] Works in at least one Dream type.
- [ ] Counterplay exists in PvP later.
- [ ] Relic synergy not broken.
- [ ] Visual rarity matches gameplay rarity.

---

## 36. QA Test Plan

### 36.1. Inventory tests

- Beast appears after crafting.
- Beast stats display correctly.
- Rename works.
- Favorite/lock works.
- Filters work.
- Sorting works.
- Origin metadata correct.

### 36.2. Crafting tests

- Correct fragments consumed.
- Invalid recipe rejected.
- Insufficient fragments rejected.
- Visual traits generated.
- Origin selected correctly.
- Duplicate Beast allowed.
- Crafting log saved.
- Cannot double-submit craft.

### 36.3. Combat integration tests

- Beast loads into battle.
- Stats match backend.
- Skills work.
- Passive triggers.
- Relic effect applies.
- Level scaling works.
- EXP gained.
- Level up applies stat increase.

### 36.4. Dreamland tests

- Beast placed in Dreamland.
- Beast removed correctly.
- Behavior matches Species.
- Tap reaction works.
- Multiple Beast performance OK.
- Aquatic behavior works with/without water.
- Dragon perches if Building available.

### 36.5. Metadata tests

- Beast origin dream correct.
- Ending correct.
- Key choice correct.
- Birth date correct.
- Metadata shown in profile.
- NFT metadata endpoint includes correct fields.

### 36.6. Security tests

- Cannot edit Beast stats client-side.
- Cannot craft without fragments.
- Cannot equip Relic owned by another user.
- Cannot mint Beast not owned.
- Cannot trade locked Beast.
- Cannot use traded-away Beast in Dream run.

---

## 37. Analytics Events

### 37.1. Required events

```text
beast_acquired
beast_crafted
beast_renamed
beast_favorited
beast_locked
beast_selected_for_dream
beast_level_up
beast_skill_upgraded
beast_relic_equipped
beast_placed_dreamland
beast_interacted_dreamland
beast_mint_eligible
beast_minted
beast_listed_marketplace
```

### 37.2. Event properties

```json
{
  "beastId": "BEAST-000123",
  "templateId": "abyss_serpent",
  "species": "Aquatic",
  "affinity": "Memory",
  "rarity": "Epic",
  "level": 1,
  "originSeedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "originEnding": "Hidden"
}
```

### 37.3. Key metrics

- Most crafted Beast.
- Least used Beast.
- Beast usage by Dream Realm.
- Beast win rate.
- Average level by Beast.
- Skill usage rate.
- Relic pairing frequency.
- Dreamland placement rate.
- Favorite rate.
- Craft-to-use conversion.
- Mint eligibility rate.
- NFT mint conversion later.

---

## 38. Balance Guidelines

### 38.1. Avoid strict power creep

A Rare Beast should sometimes be useful over Epic due to:

- Better affinity matchup.
- Specific status.
- Lower cooldown.
- Relic synergy.
- Hidden path utility.

### 38.2. Keep starter relevant

Starter Beast should not become useless after 1 day.

Ways:

- Story upgrades.
- Hidden path detection.
- Light support utility.
- Dreamland emotional value.
- Account-bound special skin.

### 38.3. Rarity vs skill complexity

Higher rarity can have more conditional effects, but must remain readable.

Bad:

```text
When attacking a burned enemy while shielded and below 30% HP, gain 12% SPD and reset cooldown if the dream is Ocean.
```

Good:

```text
Deals bonus damage to debuffed enemies.
```

### 38.4. Time Beast caution

Time Beast can break combat.

Rules:

- Avoid unlimited cooldown reset.
- Avoid repeated extra turns.
- Boss resistance to delay.
- PvP modifiers for Time skills.

### 38.5. LUCK caution

LUCK affects crit/drop/status. Avoid making high LUCK Beast mandatory for farming.

Options:

- LUCK affects combat crit/status mostly.
- Drop bonus from LUCK is capped.
- Building/Relic provide alternative drop bonus.

### 38.6. Shadow risk/reward

Shadow Beast should feel powerful but risky.

Examples:

- Higher damage, lower defense.
- Curse/burn but weaker sustain.
- Nightmare Relic synergy with drawback.
- Corruption interaction.

---

## 39. MVP Implementation Plan

### Sprint 1 — Beast Data Foundation

Deliver:

- Beast template schema.
- User Beast schema.
- 3 Beast templates.
- Beast list API.
- Beast profile UI placeholder.

### Sprint 2 — Combat Beast Integration

Deliver:

- Load Beast stats into Combat.
- Skills from data.
- Passive trigger.
- EXP gain.

### Sprint 3 — Fragment & Crafting

Deliver:

- Fragment inventory.
- Craft recipe.
- Beast creation.
- Origin metadata.
- Crafting UI.

### Sprint 4 — Beast Inventory Polish

Deliver:

- Filters.
- Sort.
- Rename.
- Favorite/lock.
- Relic equip placeholder.

### Sprint 5 — Dreamland Behavior

Deliver:

- Place Beast in Dreamland.
- Species idle behavior.
- Tap interaction.
- 3–5 visible Beast cap.

### Sprint 6 — Content Expansion

Deliver:

- 12 MVP Beast.
- Visual traits metadata.
- Basic art/animation pass.
- Balance pass.

### Sprint 7 — NFT Readiness

Deliver:

- Mint status field.
- Metadata endpoint.
- NFT card preview.
- No real mint required.

---

## 40. Open Design Questions

1. Should Beast crafting be fixed recipe or weighted awakening?
2. Should starter Beast be tradable/mintable?
3. Should Beast have permanent death? Recommended: no.
4. Should duplicate Beast be allowed? Recommended: yes.
5. Should Beast rarity be upgradeable? Recommended: not in MVP.
6. Should Beast visual traits affect stats? Recommended: no or very minor.
7. Should LUCK affect drop rate? Recommended: yes, capped.
8. Should Beast have mood/bond in MVP? Recommended: reserve fields, not full feature.
9. Should Hidden Ending ever grant full Beast directly? Recommended: rarely, mostly fragments.
10. Should NFT mint lock current stats or update dynamically? Recommended: metadata contains base/origin, backend profile shows live stats.

---

## 41. Glossary

| Term | Meaning |
|---|---|
| Beast | Creature born from Dreamverse |
| Species | Physical creature type |
| Affinity | Emotional/elemental type |
| Damage Type | Physical or Magic |
| Rarity | Collection/power tier |
| Role | Combat function |
| Fragment | Material used to craft Beast |
| Awakening | Crafting process that creates Beast |
| Origin Metadata | Dream source data attached to Beast |
| Visual Trait | Cosmetic/appearance attribute |
| Gene | Post-MVP inheritance/cosmetic trait |
| Decor Behavior | Dreamland idle behavior |
| Bond | Relationship progression, post-MVP |
| Mint Status | NFT readiness/on-chain state |
| Power Rating | Approximate strength score |

---

## 42. Final Beast System Statement

Beast System là nơi gameplay, lore, art, economy và NFT ownership gặp nhau.

Một Beast tốt không chỉ cần chỉ số mạnh. Nó cần:

- Hình dáng dễ nhớ.
- Vai trò chiến đấu rõ.
- Skill có cá tính.
- Hành vi sống động trong Dreamland.
- Nguồn gốc gắn với giấc mơ.
- Giá trị sưu tầm lâu dài.

Trong Myth of Dreams, Beast không phải phần thưởng vô hồn.

> Mỗi Beast là một mảnh giấc mơ đã chọn đi cùng người chơi.\n