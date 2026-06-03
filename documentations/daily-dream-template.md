---
title: "Daily Dream Template"
description: "Myth of Dreams - Daily Dream Template"
date: "2026-06-03"
category: "production"
order: 80
tags: ["production","template"]
---

**Version:** 1.0  
**Document Type:** Content Template / Narrative Design Template  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, dream_system.md, exploration_system.md, combat_system.md, enemy_boss_system.md, economy_reward_system.md  
**Owner:** Narrative Design / Game Design / Level Design / Content Team  
**Status:** Production Template for Daily Dream Authoring  

---

## 0. Mục đích tài liệu

Tài liệu này là **template chuẩn** để team thiết kế một **Daily Dream** hoàn chỉnh cho Myth of Dreams.

Daily Dream là đơn vị nội dung hằng ngày của game. Mỗi Daily Dream cần có:

- Một fantasy rõ.
- Một Realm cụ thể.
- Một xung đột cảm xúc.
- Một map exploration ngắn.
- Một số node story/choice/combat/puzzle.
- Boss hoặc climax.
- Ít nhất một ending chính.
- Có thể có Purify / Corrupt / Hidden Ending.
- Reward gắn với lựa chọn.
- Metadata đủ để tạo Beast, Relic, Building hoặc Dream History.

Template này dùng cho:

- Narrative designer.
- Game designer.
- Level designer.
- Combat designer.
- Economy designer.
- Backend/content implementer.
- QA.

Mục tiêu là để mỗi Daily Dream được viết ra có thể chuyển thành data/config tương đối rõ ràng.

---

## 1. Daily Dream Design Principles

### 1.1. Một Daily Dream tốt cần có gì?

Một Daily Dream tốt cần trả lời được:

1. Giấc mơ này nói về điều gì?
2. Cảm xúc trung tâm là gì?
3. Người chơi phải lựa chọn điều gì?
4. Realm này thể hiện qua hình ảnh nào?
5. Enemy/Boss đại diện cho nỗi đau nào?
6. Hidden Ending có ý nghĩa gì?
7. Reward sinh ra từ dream này là gì?
8. Nếu vật phẩm từ dream này thành NFT, metadata của nó kể câu chuyện gì?

### 1.2. Target duration

| Dream Rarity | Target Duration |
|---|---:|
| Common | 5–8 phút |
| Rare | 8–12 phút |
| Epic | 10–15 phút |
| Legendary | 15–25 phút |
| Mythic | Custom |

### 1.3. Target node count

| Dream Rarity | Node Count |
|---|---:|
| Common | 4–6 |
| Rare | 6–8 |
| Epic | 8–10 |
| Legendary | 10–14 |
| Mythic | Custom |

### 1.4. Required content blocks

Một Daily Dream tối thiểu cần có:

- Dream ID.
- Title.
- Realm.
- Rarity.
- Theme.
- Emotional conflict.
- Intro.
- Node list.
- Boss/climax.
- Ending logic.
- Reward table.
- Metadata rules.
- QA checklist.

---

## 2. Daily Dream Header Template

```yaml
dream_id: DREAM-YYYY-MM-DD-REALM-RARITY-###
title: ""
realm: ""
rarity: Common | Rare | Epic | Legendary | Mythic
estimated_duration: ""
target_player_level: ""
recommended_affinity: ""
main_emotion: ""
secondary_emotion: ""
dream_tags: []
content_status: Draft | Review | Approved | Live
author: ""
last_updated: ""
```

### Example

```yaml
dream_id: DREAM-2026-05-24-OCEAN-EPIC-001
title: "The Lantern Under the Lake"
realm: "Ocean of Memories"
rarity: "Epic"
estimated_duration: "12–15 minutes"
target_player_level: "8–14"
recommended_affinity: "Light / Memory"
main_emotion: "Longing"
secondary_emotion: "Regret"
dream_tags: ["ocean", "memory", "lantern", "song", "hidden_spare"]
content_status: "Draft"
author: "Narrative Team"
last_updated: "2026-05-24"
```

---

## 3. High Concept

### 3.1. One-sentence pitch

```text
[Dream Title] is a [Realm] dream about [emotional conflict], where the player must decide whether to [choice A] or [choice B].
```

### Example

```text
The Lantern Under the Lake is an Ocean of Memories dream about a light that has waited too long, where the player must decide whether to free the memory, take its power, or listen to the song it protects.
```

### 3.2. Design intention

Viết 2–4 câu giải thích vì sao dream này tồn tại.

Template:

```text
This dream is designed to teach/explore [mechanic/theme]. It introduces [NPC/enemy/boss/choice]. The main emotional question is [question]. The Hidden route rewards players who [behavior].
```

### Example

```text
This dream is designed to explore Memory and Light interaction through listening-based choices. It introduces Shell Child, Drowned Echo and Abyss Lantern Keeper. The main emotional question is whether an old memory should be recovered, exploited or simply witnessed. The Hidden route rewards players who listen before acting.
```

---

## 4. Emotional Core

### 4.1. Core emotion

Chọn một cảm xúc chính:

- Longing.
- Regret.
- Fear.
- Loneliness.
- Hope.
- Grief.
- Shame.
- Wonder.
- Anger.
- Nostalgia.
- Forgiveness.
- Curiosity.

### 4.2. Emotional question

Template:

```text
What does this dream ask the player emotionally?
```

Examples:

```text
Can something forgotten still be loved?
```

```text
Is it kinder to end a painful memory or let it speak?
```

```text
When a child is angry because they were abandoned, should you win the game or play along?
```

### 4.3. Player-facing theme

Viết thành câu ngắn có thể dùng cho narrative direction.

```text
A memory does not need to be taken to be saved.
```

### 4.4. Design consequence

Cảm xúc chính phải ảnh hưởng:

- Node text.
- Choice wording.
- Enemy design.
- Boss behavior.
- Ending.
- Reward metadata.

---

## 5. Realm & Visual Direction

### 5.1. Realm

```yaml
realm: Forest of Lost Voices | Ocean of Memories | Childhood Playground | Clocktower of Time | Nightmare Citadel | Deep Dream
```

### 5.2. Realm manifestation

Mô tả dream này thể hiện Realm như thế nào.

Template:

```text
This dream uses [Realm] through [visual motifs], [sound motifs], and [interaction motifs].
```

### Example

```text
This dream uses Ocean of Memories through drowned lanterns, slow water distortion, shell songs, mirror tides and muffled voices.
```

### 5.3. Visual motifs

List 5–10 motif:

- Lantern.
- Shell.
- Black water.
- Mirror tide.
- Door under water.
- Blue flame.
- Floating hair.
- Whale shadow.
- Broken pier.
- Pearl.

### 5.4. Audio motifs

List 3–6 motif:

- Muffled humming.
- Water pressure.
- Soft bell.
- Distant whale tone.
- Shell resonance.
- Lantern crackle under water.

### 5.5. Color direction

```text
Primary: Deep blue
Secondary: Silver
Accent: Warm lantern gold
Corrupt accent: Violet-black
Hidden accent: Moonlight white
```

---

## 6. Narrative Cast

### 6.1. Required NPC/Boss list

| Character | Type | Role in Dream | Notes |
|---|---|---|---|
|  | Echo NPC | Clue giver |  |
|  | Boss | Emotional climax |  |
|  | Guide | Optional Mira/Nox line |  |

### 6.2. NPC template

```yaml
npc_id: ""
name: ""
npc_type: Echo | Guide | Nightmare Agent | Realm Spirit | Child Echo | Memory Object
realm: ""
function: clue | choice | reward | hidden unlock | emotional context
tone: ""
first_appearance_node: ""
```

### 6.3. NPC emotional purpose

```text
This NPC represents [emotion/memory]. They want [desire], but cannot [block].
```

### Example

```text
Shell Child represents a memory that learned to hide under water. They want the Lantern Keeper to hear the song again, but cannot approach because the lake reflects their fear back at them.
```

---

## 7. Enemy & Boss Planning

### 7.1. Enemy pool

| Enemy | Role | Affinity | Purpose |
|---|---|---|---|
| Drowned Echo | Disruptor | Memory | Introduce Memory Drain |
| Mirror Jellyfish | Trickster | Memory/Emotion | Reflection motif |
| Abyss Eel | Attacker | Shadow | Corrupt path danger |

### 7.2. Encounter plan

| Node | Encounter | Difficulty | Purpose |
|---|---|---|---|
| combat_01 | Drowned Echo | Normal | Teach Memory debuff |
| elite_01 | Mirror Jellyfish + Abyss Eel | Elite | Optional risk |
| boss_01 | Abyss Lantern Keeper | Boss | Climax |

### 7.3. Boss summary

```yaml
boss_id: ""
name: ""
affinity: ""
damage_type: ""
role: ""
phase_count: 1 | 2
signature_mechanic: ""
hidden_hook: ""
```

### 7.4. Boss emotional function

Template:

```text
The boss is not simply guarding the ending. It represents [emotional wound]. Its combat mechanic expresses this by [mechanic].
```

Example:

```text
The Abyss Lantern Keeper represents a memory that fears being recovered only to be abandoned again. Its shield phase expresses emotional withdrawal, while Memory Drain represents the way old grief weakens the present self.
```

---

## 8. Map Structure Template

### 8.1. Map topology

Choose one:

- Linear.
- Branching.
- Hidden Branch.
- Hub-and-spoke.
- Mini-loop.
- Boss-gate.

### 8.2. Node map overview

```text
Start
  ↓
Story
  ↓
Choice
 ↙   ↘
Purify Path  Corrupt Path
  ↓           ↓
NPC/Puzzle    Elite Combat
  ↓           ↓
Boss
  ↓
Ending
```

### 8.3. Node list

| Node ID | Node Type | Title | Required? | Notes |
|---|---|---|---|---|
| start_01 | Start |  | Yes |  |
| story_01 | Story |  | Yes |  |
| choice_01 | Choice |  | Yes | Main moral choice |
| combat_01 | Combat |  | Yes |  |
| npc_01 | NPC |  | Optional | Hidden clue |
| puzzle_01 | Puzzle |  | Optional | Hidden requirement |
| hidden_01 | Hidden |  | Optional |  |
| boss_01 | Boss |  | Yes |  |
| ending_01 | Ending |  | Yes |  |

### 8.4. Node count target

```yaml
total_nodes: 
required_nodes:
optional_nodes:
hidden_nodes:
combat_nodes:
story_nodes:
```

---

## 9. Node Authoring Template

Use template này cho từng node.

```yaml
node_id: ""
node_type: Start | Story | Choice | Combat | EliteCombat | Puzzle | NPC | Reward | Shrine | Relic | Hidden | Boss | Ending
title: ""
map_position:
  x:
  y:
visibility:
  initial_state: Hidden | Revealed | Available | Locked
  rules: []
requirements: []
content:
  scene_text: ""
  visual_notes: ""
  audio_notes: ""
choices: []
effects:
  set_flags: []
  reveal_nodes: []
  grant_rewards: []
  purity_delta: 0
  corruption_delta: 0
  hidden_knowledge_delta: 0
next_nodes: []
qa_notes: ""
```

### Example node

```yaml
node_id: "choice_lantern_01"
node_type: "Choice"
title: "The Tangled Lantern"
map_position:
  x: 2
  y: 1
visibility:
  initial_state: "Available"
requirements: []
content:
  scene_text: "The lantern is tangled in black weeds. Its light pulses like a tired heartbeat."
  visual_notes: "Lantern caught in dark seaweed, warm gold against blue water."
  audio_notes: "Muffled bell, slow water movement."
choices:
  - choice_id: "untangle_gently"
    text: "Gently untangle the weeds."
    tags: ["purify", "light"]
    set_flags: ["helped_lantern"]
    purity_delta: 1
    next_node: "npc_shell_child_01"
  - choice_id: "take_light"
    text: "Tear the weeds apart and take the light."
    tags: ["corrupt", "shadow"]
    set_flags: ["took_lantern_light"]
    corruption_delta: 3
    next_node: "elite_abyss_eel_01"
  - choice_id: "listen_first"
    text: "Do nothing. Listen."
    tags: ["hidden", "memory"]
    set_flags: ["heard_lantern_song"]
    hidden_knowledge_delta: 1
    reveal_nodes: ["hidden_underwater_song"]
    next_node: "npc_shell_child_01"
effects: {}
next_nodes: []
qa_notes: "Hidden choice may require prior shell clue in higher rarity version."
```

---

## 10. Choice Design Template

### 10.1. Choice table

| Choice ID | Text | Tone | Requirements | Effects | Next Node |
|---|---|---|---|---|---|
|  |  | Purify |  |  |  |
|  |  | Corrupt |  |  |  |
|  |  | Hidden |  |  |  |

### 10.2. Choice tone guidelines

#### Purify choices

Use verbs like:

- Listen.
- Restore.
- Untangle.
- Comfort.
- Return.
- Remember.
- Forgive.
- Wait.

#### Corrupt choices

Use verbs like:

- Take.
- Break.
- Force.
- Claim.
- Cut.
- Burn.
- Consume.
- Silence.

#### Hidden choices

Use verbs like:

- Listen.
- Wait.
- Hum back.
- Offer.
- Refuse to fight.
- Place the Relic.
- Speak the name.
- Defend.

### 10.3. Choice consequence rules

Every major choice should affect at least one:

- Flag.
- Route.
- Corruption/Purity.
- Hidden condition.
- Reward table.
- Boss behavior.
- Dream History.

---

## 11. Hidden Ending Template

### 11.1. Hidden route summary

```yaml
hidden_ending_name: ""
hidden_theme: ""
hidden_route_summary: ""
required_clues: []
required_flags: []
required_relics: []
required_beast_affinity: []
required_combat_action: ""
reward_identity: ""
```

### 11.2. Hidden route steps

| Step | Requirement | Source Node | Result |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  | Boss | Hidden ending candidate |

### 11.3. Hidden route example

```yaml
hidden_ending_name: "The Light That Was Not Taken"
hidden_theme: "Some memories only need to be witnessed."
required_clues:
  - Shell Child mentions the song.
  - Player sees the lantern pulse when they wait.
required_flags:
  - heard_lantern_song
  - hidden_song_completed
  - boss_hesitated
required_relics:
  - optional: Lantern of Forgotten Shores
required_beast_affinity:
  - Light
  - Memory
required_combat_action: "Use non-lethal Light/Memory action or Defend while boss hesitates."
reward_identity: "Abyss Serpent Fragment + Lantern Relic metadata"
```

### 11.4. Hidden Ending text template

```text
The [object/boss] does not disappear. It [resolution action].
For the first time, the dream [emotional change].
You leave without taking [thing], but it follows you as [reward/metaphor].
```

---

## 12. Ending Template

### 12.1. Ending types

Every Daily Dream should define:

- Purify Ending.
- Corrupt Ending, if applicable.
- Hidden Ending, if applicable.
- Failed Ending.
- Abandoned state.

### 12.2. Ending table

| Ending | Requirements | Narrative Result | Reward Table | Metadata Note |
|---|---|---|---|---|
| Purify |  |  |  |  |
| Corrupt |  |  |  |  |
| Hidden |  |  |  |  |
| Failed |  |  |  |  |

### 12.3. Purify Ending template

```text
The dream settles.
[Boss/object] is released from [pain].
The Realm leaves behind [stable reward].
```

### 12.4. Corrupt Ending template

```text
The dream cracks, but does not resist.
You take [power/object].
Something follows you back through the gate.
```

### 12.5. Hidden Ending template

```text
The dream does not end the way it expected.
By [hidden action], you allow [truth] to be remembered.
```

### 12.6. Failed Ending template

```text
The dream folds in on itself before you can understand it.
Only a few fragments remain.
```

---

## 13. Reward Template

### 13.1. Reward table summary

```yaml
reward_tables:
  purify: ""
  corrupt: ""
  hidden: ""
  failed: ""
```

### 13.2. Reward planning

| Reward | Purify | Corrupt | Hidden |
|---|---:|---:|---:|
| Dream Fragment |  |  |  |
| Realm Fragment |  |  |  |
| Beast Fragment |  |  |  |
| Relic Fragment |  |  |  |
| Building Fragment |  |  |  |
| Nightmare Shard |  |  |  |
| Lore Entry |  |  |  |
| Purity/Corruption/HiddenKnowledge |  |  |  |

### 13.3. Example

| Reward | Purify | Corrupt | Hidden |
|---|---:|---:|---:|
| Memory Fragment | 5 | 2 | 6 |
| Ocean Fragment | 3 | 1 | 4 |
| Nightmare Shard | 0 | 3 | 0 |
| Abyss Serpent Fragment | 0–1 | 1 | 2 |
| Lantern Relic Fragment | 1 | 0 | 2 |
| Lore Entry | 1 | 0 | 1 unique |
| Purity/Corruption/HiddenKnowledge | +1 Purity | +5 Corruption | +1 HiddenKnowledge |

### 13.4. Reward metadata rule

For rare rewards, define origin:

```yaml
metadata_origin:
  source_dream: current_dream
  source_ending: actual_ending
  key_choice_priority:
    - listen_to_song
    - helped_lantern
    - took_lantern_light
  lore_quote: ""
```

---

## 14. Metadata Template

### 14.1. Dream History metadata

```json
{
  "dreamId": "",
  "dreamTitle": "",
  "date": "",
  "realm": "",
  "rarity": "",
  "ending": "",
  "keyChoice": "",
  "bossResult": "",
  "hiddenDiscovered": false,
  "rewards": [],
  "loreUnlocked": []
}
```

### 14.2. Origin metadata for item born from dream

```json
{
  "originSeedId": "",
  "originDreamTitle": "",
  "originRealm": "",
  "originRarity": "",
  "originEnding": "",
  "keyChoice": "",
  "birthDate": "",
  "loreQuote": ""
}
```

### 14.3. Metadata design rule

Metadata must be meaningful even if item is not minted as NFT.

---

## 15. Dialogue Template

### 15.1. Dialogue node format

```yaml
dialogue_id: ""
speaker: ""
speaker_type: Echo | Mira | Nox | Boss | Object
text: ""
conditions: []
set_flags: []
next_dialogue: ""
```

### 15.2. Dialogue writing guidelines

- Short lines.
- Dreamlike but readable.
- Avoid overexplaining.
- Use repeated motif.
- Let NPC hint rather than solve.
- Boss dialogue should reveal wound.

### 15.3. Example

```text
Shell Child:
“If you pull the lantern up, it will go out.”

Player:
“Then why does it keep shining?”

Shell Child:
“Because someone down here still thinks they are coming home.”
```

### 15.4. Conditional dialogue examples

If player has Shadow Beast:

```text
Shell Child:
“Your companion knows how deep the dark can bite.”
```

If player has Lantern Relic:

```text
Shell Child:
“That light... it remembers the first song.”
```

If high Corruption:

```text
The water moves away from your reflection.
```

---

## 16. Combat Integration Template

### 16.1. Combat encounter summary

```yaml
encounters:
  - node_id: ""
    encounter_id: ""
    enemy_list: []
    purpose: ""
    difficulty: Normal | Elite | Boss
    reward_table: ""
```

### 16.2. Boss hook template

```yaml
boss_hidden_hook:
  trigger_condition: ""
  player_required_action: ""
  feedback_text: ""
  success_flag: ""
```

### Example

```yaml
boss_hidden_hook:
  trigger_condition: "Boss HP <= 20% and heard_lantern_song flag is active"
  player_required_action: "Use Defend or Light/Memory non-lethal action"
  feedback_text: "The Lantern Keeper lowers its light, waiting."
  success_flag: "boss_spared"
```

---

## 17. Art & Audio Brief Template

### 17.1. Scene art brief

```yaml
scene_name: ""
realm: ""
mood: ""
main_visual_objects: []
color_palette: []
animation_notes: ""
```

### 17.2. Character/NPC art brief

```yaml
character_name: ""
silhouette: ""
materials: ""
color_notes: ""
expression_notes: ""
animation_notes: ""
```

### 17.3. Boss art brief

```yaml
boss_name: ""
size: ""
shape_language: ""
phase_1_visual: ""
phase_2_visual: ""
signature_vfx: ""
defeat_resolution_visual: ""
```

### 17.4. Audio brief

```yaml
ambient_layers: []
node_sfx: []
choice_sfx:
  purify: ""
  corrupt: ""
  hidden: ""
boss_music_notes: ""
```

---

## 18. Backend Config Template

### 18.1. Dream seed config

```json
{
  "dreamSeedId": "",
  "dreamTemplateId": "",
  "date": "",
  "realmId": "",
  "rarity": "",
  "mapTemplateId": "",
  "enemyPoolId": "",
  "bossId": "",
  "endingRuleSetId": "",
  "lootTableSetId": "",
  "contentVersion": "1.0"
}
```

### 18.2. Map template config

```json
{
  "mapTemplateId": "",
  "nodes": [],
  "edges": [],
  "initialAvailableNodes": ["start_01"]
}
```

### 18.3. Ending rule set config

```json
{
  "endingRuleSetId": "",
  "rules": [
    {
      "ending": "Hidden",
      "priority": 100,
      "requirements": []
    },
    {
      "ending": "Corrupt",
      "priority": 50,
      "requirements": []
    },
    {
      "ending": "Purify",
      "priority": 10,
      "requirements": []
    }
  ]
}
```

---

## 19. QA Checklist

### 19.1. Content QA

- [ ] Dream has clear title.
- [ ] Realm matches visual/audio motifs.
- [ ] Emotional core is understandable.
- [ ] Main choice has consequence.
- [ ] Boss matches dream theme.
- [ ] Ending text matches choices.
- [ ] Hidden path has clues.
- [ ] Reward matches ending.
- [ ] Metadata fields complete.

### 19.2. Design QA

- [ ] Node count fits rarity.
- [ ] Duration target reasonable.
- [ ] Combat difficulty appropriate.
- [ ] Puzzle is not too hard.
- [ ] Hidden not required for main progression.
- [ ] Corrupt route has risk and reward.
- [ ] Purify route feels worthwhile.
- [ ] Failed run not exploitable.

### 19.3. Technical QA

- [ ] All node IDs unique.
- [ ] All edges valid.
- [ ] All flags use naming convention.
- [ ] All referenced enemy IDs valid.
- [ ] Boss ID valid.
- [ ] Reward table IDs valid.
- [ ] Ending rule set valid.
- [ ] No unreachable required node.
- [ ] No soft lock.
- [ ] Server validation rules defined.

---

## 20. Full Example Daily Dream

## 20.1. Header

```yaml
dream_id: DREAM-2026-05-24-OCEAN-EPIC-001
title: The Lantern Under the Lake
realm: Ocean of Memories
rarity: Epic
estimated_duration: 12–15 minutes
target_player_level: 8–14
recommended_affinity: Light / Memory
main_emotion: Longing
secondary_emotion: Regret
dream_tags: [ocean, memory, lantern, song, hidden_spare]
```

## 20.2. High concept

A lantern waits beneath a lake for someone who never returned. The player must decide whether to free the light, take it, or listen to the song it has protected for years.

## 20.3. Emotional question

```text
Can a memory be saved without being taken?
```

## 20.4. Map overview

```text
Start: Beneath the Lake
  ↓
Story: The Door Without Surface
  ↓
Choice: The Tangled Lantern
 ↙        ↓          ↘
Purify   Hidden      Corrupt
NPC      Puzzle      Elite
  ↓        ↓          ↓
Combat: Drowned Echo
  ↓
Boss: Abyss Lantern Keeper
  ↓
Ending
```

## 20.5. Key nodes

| Node ID | Type | Summary |
|---|---|---|
| start_beneath_lake | Start | Player wakes under lake |
| story_surface_door | Story | Door above has no surface |
| choice_tangled_lantern | Choice | Untangle, take, or listen |
| npc_shell_child | NPC | Shell Child gives song clue |
| puzzle_shell_song | Puzzle | Choose correct shell sequence |
| hidden_underwater_song | Hidden | Hear the true song |
| combat_drowned_echo | Combat | Fight Drowned Echo |
| elite_abyss_eel | EliteCombat | Corrupt path danger |
| boss_lantern_keeper | Boss | Abyss Lantern Keeper |
| ending_lake_portal | Ending | Resolve dream |

## 20.6. Ending logic

| Ending | Requirements | Result |
|---|---|---|
| Purify | helped_lantern + boss_defeated | Lantern rises, memory released |
| Corrupt | took_lantern_light or corruption_delta >= 5 | Player takes the light, lake darkens |
| Hidden | heard_lantern_song + hidden_song_completed + boss_spared | Lantern stays, song is remembered |

## 20.7. Hidden route

1. Choose “Listen” at Tangled Lantern.
2. Talk to Shell Child.
3. Solve Shell Song puzzle.
4. Complete Hidden Underwater Song node.
5. During boss at low HP, use Defend or Light/Memory non-lethal action.
6. Boss is spared.
7. Hidden Ending unlocks.

## 20.8. Rewards

| Reward | Purify | Corrupt | Hidden |
|---|---:|---:|---:|
| Memory Fragment | 5 | 2 | 6 |
| Ocean Fragment | 3 | 1 | 4 |
| Nightmare Shard | 0 | 3 | 0 |
| Abyss Serpent Fragment | 0–1 | 1 | 2 |
| Lantern Relic Fragment | 1 | 0 | 2 |
| Lore Entry | The Waiting Light | None | Song Beneath the Lake |
| State | +1 Purity | +5 Corruption | +1 HiddenKnowledge |

## 20.9. Metadata quote

```text
It does not light the way forward. It lights what still waits below.
```

---

## 21. Production Notes

### 21.1. How to use this template

For each new Daily Dream:

1. Fill Header.
2. Define emotional core.
3. Pick Realm motifs.
4. Define NPC/Boss.
5. Build node map.
6. Write node content.
7. Define choices and flags.
8. Define Hidden route.
9. Define endings.
10. Define rewards.
11. Define metadata.
12. Run QA checklist.
13. Convert to backend config.

### 21.2. Content naming convention

Use consistent IDs:

```text
dream_ocean_lantern_01
node_ocean_lantern_choice_01
flag_heard_lantern_song
boss_abyss_lantern_keeper
reward_ocean_lantern_hidden
```

### 21.3. MVP content recommendation

For MVP, prepare:

- 5 Common Dreams.
- 5 Rare Dreams.
- 3 Epic Dreams.
- 1 Legendary prototype.
- 1 tutorial Dream.
- At least 3 Hidden Ending examples.
- At least 1 Corrupt route per Realm.

---

## 22. Final Template Statement

Daily Dream Template exists to make every dream production-ready without losing poetic identity.

A good Daily Dream is not just:

```text
Map + enemy + reward.
```

It is:

```text
Emotion + choice + consequence + memory + reward.
```

Every time a player completes a Daily Dream, they should feel that something from that dream has followed them home.\n