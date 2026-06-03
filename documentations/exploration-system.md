---
title: "Exploration System"
description: "Myth of Dreams - Exploration System"
date: "2026-06-03"
category: "game-design"
order: 11
tags: ["game-design","exploration"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, Lore_Story_Bible.md, Dream_System.md, Combat_System.md, Enemy_Boss_System.md, Beast_System.md, Relic_System.md, Building_Dreamland_System.md, Economy_Reward_System.md, Technical_Architecture.md  
**Owner:** Game Design / Level Design / Narrative / Unity / Backend  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chi tiết **Exploration System** cho **Myth of Dreams**.

Exploration System là hệ thống điều khiển cách người chơi di chuyển, khám phá và tương tác bên trong một **Daily Dream**. Nếu Combat là nơi người chơi đối đầu với sinh vật trong dream, thì Exploration là nơi người chơi hiểu dream đó đang kể câu chuyện gì.

Exploration System bao gồm:

- Dream map.
- Node-based progression.
- Choice.
- NPC/Echo interaction.
- Puzzle.
- Combat encounter trigger.
- Hidden node.
- Relic/Beast/Building-based unlock.
- Corruption/Purity route.
- Ending path logic.
- Exploration reward.
- Dream state flags.
- Map UI/UX.
- Backend run-state validation.

Mục tiêu của hệ thống này là biến mỗi Daily Dream thành một hành trình ngắn, có lựa chọn, có bí mật và có cảm giác “mình đã khám phá một giấc mơ”, thay vì chỉ là chuỗi combat.

---

## 1. Exploration Vision

### 1.1. Exploration fantasy

Người chơi là một **Dreamwalker** bước vào những giấc mơ bị vỡ, bị quên hoặc bị Nightmare làm nhiễu.

Trong mỗi Dream, người chơi không chỉ đi từ điểm A đến điểm B. Họ:

- Lắng nghe một Echo.
- Chạm vào một vật thể ký ức.
- Chọn tha thứ hoặc khai thác.
- Tìm đường qua một vùng méo mó.
- Dùng Relic đúng lúc.
- Nhận ra một chi tiết đã xuất hiện trong Lore.
- Mở Hidden Ending bằng sự chú ý.

Exploration phải tạo cảm giác:

> “Mình đang đi qua một ký ức sống, không phải một map nhiệm vụ vô hồn.”

### 1.2. Exploration design statement

Exploration trong Myth of Dreams phải:

> Ngắn, dễ điều hướng, giàu lựa chọn, có bí mật, và luôn dẫn người chơi đến một kết thúc có ý nghĩa.

### 1.3. Exploration pillars

#### 1. Short Daily Journey

Mỗi Daily Dream nên hoàn thành trong khoảng 5–15 phút.

Exploration không nên quá dài hoặc khó hiểu trong MVP.

#### 2. Choice Creates Meaning

Lựa chọn trong Exploration phải ảnh hưởng đến:

- Route.
- Combat difficulty.
- Corruption/Purity.
- Hidden condition.
- Reward.
- Ending.
- NPC dialogue.
- Dream history metadata.

#### 3. Secrets Are Earned, Not Random

Hidden node và Hidden Ending nên đến từ:

- Quan sát.
- Relic đúng.
- Beast đúng Affinity.
- Dialogue clue.
- Previous Dream History.
- Non-obvious nhưng hợp lý.

Không nên là random 1% vô căn cứ.

#### 4. Combat Supports Exploration

Combat là một loại node trong hành trình, không phải toàn bộ hành trình.

Dream nên có mix:

- Choice.
- Combat.
- Puzzle.
- NPC.
- Relic interaction.
- Boss.

#### 5. Server Validated Run State

Client hiển thị và điều khiển trải nghiệm, nhưng server phải xác nhận:

- Node hợp lệ.
- Choice hợp lệ.
- Reward hợp lệ.
- Hidden unlock hợp lệ.
- Ending hợp lệ.

---

## 2. Exploration Scope

### 2.1. MVP scope

MVP Exploration System nên bao gồm:

- Node-based Dream map.
- 5–9 nodes per Dream.
- Linear + light branching.
- Node types:
  - Start.
  - Story.
  - Choice.
  - Combat.
  - Elite Combat.
  - Puzzle.
  - NPC/Echo.
  - Reward.
  - Hidden.
  - Boss.
  - Ending.
- Dream state flags.
- Simple choice conditions.
- Relic-based hidden unlock.
- Beast Affinity hint/unlock.
- Corruption/Purity path.
- Hidden Ending condition.
- Exploration reward staging.
- Server-side run validation.
- Map UI.

### 2.2. Post-MVP scope

Sau MVP có thể mở rộng:

- Larger procedural maps.
- Dream Echo replay with altered routes.
- Multi-layer maps.
- Timed exploration events.
- Environmental hazards.
- Companion dialogue.
- Multiple Beast exploration ability.
- Advanced puzzle chain.
- Social/shared Dream expedition.
- Branching questlines.
- Realm-specific exploration mechanics.
- Dynamic map mutation by Corruption.

### 2.3. Not in MVP

Không đưa vào MVP:

- Open world exploration.
- Real-time movement platforming.
- Full roguelike procedural dungeon.
- Complex inventory puzzle chain.
- Large maze.
- Multiplayer exploration.
- Permanent fail traps.
- Heavy point-and-click adventure complexity.
- Dozens of hidden flags per dream.

---

## 3. Exploration Core Loop

### 3.1. High-level loop

```text
Enter Daily Dream
  ↓
View Dream intro
  ↓
Move through map nodes
  ↓
Interact with story/combat/puzzle/choice nodes
  ↓
Set run flags
  ↓
Reveal or hide optional paths
  ↓
Reach boss or ending gate
  ↓
Resolve ending
  ↓
Return to Dreamland with rewards
```

### 3.2. Node loop

```text
Select available node
  ↓
Server validates node access
  ↓
Client loads node content
  ↓
Player resolves node interaction
  ↓
Server records outcome
  ↓
Run state updates
  ↓
New nodes unlock/reveal
```

### 3.3. Player decision loop

```text
Read context
  ↓
Choose action
  ↓
See consequence
  ↓
Run flag changes
  ↓
Route/reward/ending shifts
```

### 3.4. Hidden discovery loop

```text
Find clue
  ↓
Equip/use correct Relic or Beast
  ↓
Choose non-obvious action
  ↓
Hidden node appears
  ↓
Resolve special interaction
  ↓
Hidden Ending candidate enabled
```

### 3.5. Corruption route loop

```text
Choose exploitative/dark option
  ↓
Gain immediate reward or shortcut
  ↓
Increase Corruption
  ↓
Unlock Nightmare node/variant
  ↓
Potential Corrupt Ending
```

---

## 4. Dream Map Structure

### 4.1. Map design philosophy

Daily Dream maps should be small but meaningful.

Each map should feel like a short dream sequence:

- A beginning image.
- A conflict.
- A few choices.
- A hidden layer.
- A climax.
- An ending.

### 4.2. MVP map size

Recommended:

| Dream Rarity | Node Count |
|---|---:|
| Common | 4–6 |
| Rare | 6–8 |
| Epic | 8–10 |
| Legendary | 10–14 |
| Mythic | Custom |

MVP target:

```text
Average: 6–9 nodes
```

### 4.3. Map topology types

#### Linear

```text
Start → Story → Combat → Choice → Boss → Ending
```

Use for tutorial/common dreams.

#### Branching

```text
Start
  ↓
Choice
 ↙   ↘
Purify Path  Corrupt Path
  ↓           ↓
Boss        Nightmare Elite
  ↓           ↓
Ending      Corrupt Ending
```

Use for Rare/Epic dreams.

#### Hidden branch

```text
Main Path → Boss → Ending
     ↓
Hidden Clue → Hidden Node → Alternate Boss Resolution → Hidden Ending
```

Use for hidden content.

#### Hub-and-spoke

```text
Center Node
 ├ Combat
 ├ NPC
 ├ Puzzle
 └ Boss Gate
```

Use after MVP for more exploration feel.

### 4.4. Node visibility states

| State | Meaning |
|---|---|
| Hidden | Not visible |
| Revealed | Visible but not accessible |
| Available | Can enter |
| Active | Currently resolving |
| Completed | Resolved |
| Locked | Visible but condition unmet |
| Failed | Resolved negatively |
| Skipped | Bypassed |

### 4.5. Map data model

```json
{
  "mapTemplateId": "ocean_lantern_map_01",
  "realm": "Ocean of Memories",
  "nodes": [
    {
      "nodeId": "start_01",
      "nodeType": "Start",
      "position": { "x": 0, "y": 0 },
      "nextNodes": ["story_lake_01"]
    },
    {
      "nodeId": "choice_lantern_01",
      "nodeType": "Choice",
      "position": { "x": 2, "y": 1 },
      "nextNodes": ["combat_echo_01", "hidden_song_01"],
      "visibilityRules": []
    }
  ],
  "edges": [
    {
      "from": "start_01",
      "to": "story_lake_01"
    }
  ]
}
```

### 4.6. Map generation approach

MVP recommendation:

- Use authored map templates.
- Fill with generated seed parameters.
- Avoid fully procedural map generation at first.

Example:

```text
Template: Ocean Lantern Map
Seed fills:
- Boss: Abyss Lantern Keeper
- NPC: Shell Child
- Hidden node: Underwater Song
- Relic hint: Lantern of Forgotten Shores
```

---

## 5. Node Types

### 5.1. Node type overview

| Node Type | Purpose |
|---|---|
| Start | Dream intro |
| Story | Narrative scene |
| Choice | Player decision |
| Combat | Normal battle |
| EliteCombat | Hard battle |
| Boss | Boss battle |
| Puzzle | Light puzzle/interaction |
| NPC | Dialogue and clue |
| Reward | Material/lore reward |
| Shrine | Heal/buff/corrupt option |
| Relic | Relic interaction |
| Hidden | Secret content |
| Ending | Resolve dream |
| Exit | Return to Dreamland |

---

## 5.2. Start Node

### Purpose

Introduces Dream atmosphere.

### Content

- Dream title.
- Realm.
- Short intro text.
- Visual scene.
- Initial objective.
- Optional Mira/Nox comment.

### Example

```text
You wake beneath a lake that has no surface.
Far above, a lantern swings from nothing.
Someone is humming from the dark.
```

### Data

```json
{
  "nodeType": "Start",
  "titleKey": "dream.ocean_lantern.start.title",
  "bodyKey": "dream.ocean_lantern.start.body",
  "setFlags": ["entered_ocean_lantern"]
}
```

---

## 5.3. Story Node

### Purpose

Delivers narrative beat without major choice.

### Use

- Describe environment.
- Foreshadow boss.
- Reveal emotional logic.
- Show consequence of previous choice.

### Example

```text
The path is lined with doors. Each door whispers a name, but none of them are yours.
```

### Outcome

Usually:

- Set flag.
- Reveal next node.
- Add lore hint.
- No reward or small lore progress.

---

## 5.4. Choice Node

### Purpose

Let player choose direction, tone or moral approach.

### Choice categories

| Category | Example |
|---|---|
| Purify | Comfort, restore, listen |
| Corrupt | Take, force, exploit |
| Neutral | Observe, leave, proceed |
| Hidden | Special action unlocked |
| Risk | Take damage for reward |
| Utility | Heal, buff, skip |

### Choice data model

```json
{
  "nodeId": "choice_lantern_01",
  "nodeType": "Choice",
  "prompt": "The lantern is tangled in black weeds.",
  "choices": [
    {
      "choiceId": "free_lantern",
      "text": "Gently untangle the weeds.",
      "tags": ["purify"],
      "setFlags": ["helped_lantern"],
      "purityDelta": 1,
      "nextNode": "combat_echo_01"
    },
    {
      "choiceId": "break_weeds",
      "text": "Tear the weeds apart and take the light.",
      "tags": ["corrupt"],
      "setFlags": ["took_lantern_light"],
      "corruptionDelta": 3,
      "nextNode": "nightmare_eel_01"
    }
  ]
}
```

### Design rule

Choice text must clearly imply tone, but not reveal all mechanical consequences unless necessary.

---

## 5.5. Combat Node

### Purpose

Triggers normal battle.

### Data

```json
{
  "nodeId": "combat_echo_01",
  "nodeType": "Combat",
  "encounterId": "ocean_memory_normal_02",
  "onVictory": {
    "setFlags": ["echo_defeated"],
    "revealNodes": ["npc_shell_child_01"]
  },
  "onDefeat": {
    "runStatus": "Failed"
  }
}
```

### Combat node rules

- Combat starts through Battle API.
- Result must be submitted.
- On victory, node completes.
- On defeat, run fails unless special rule.
- Reward usually staged.

---

## 5.6. Elite Combat Node

### Purpose

Higher-risk optional or required battle.

### Rules

Elite nodes should be:

- Signposted.
- Optional when possible.
- Better reward.
- Mechanically distinct.

### Example warning

```text
The water below is darker here. Something large is circling.
```

### Reward

- Better fragment.
- Relic fragment chance.
- Hidden clue.
- Corruption material if Nightmare.

---

## 5.7. Boss Node

### Purpose

Dream climax.

### Rules

Boss node:

- Usually required for ending.
- Has phase/telegraph.
- Can set ending flags.
- Can include hidden combat hooks.

### Data

```json
{
  "nodeId": "boss_lantern_keeper",
  "nodeType": "Boss",
  "bossId": "abyss_lantern_keeper",
  "requiredFlags": ["opened_lake_gate"],
  "onVictory": {
    "setFlags": ["boss_defeated"],
    "revealNodes": ["ending_portal"]
  },
  "hiddenHooks": ["lantern_keeper_spare"]
}
```

---

## 5.8. Puzzle Node

### Purpose

Adds interaction without combat.

MVP puzzles should be light.

Examples:

- Choose correct memory object.
- Arrange 3 symbols.
- Listen before touching.
- Match echo phrase.
- Decide order of actions.
- Use Relic/Beast hint.

### Puzzle complexity

MVP puzzle target:

- Solvable in 30–90 seconds.
- 2–4 choices.
- No fail state that ruins run.
- Wrong answer may give less reward or different path.

### Data

```json
{
  "nodeId": "puzzle_shell_song",
  "nodeType": "Puzzle",
  "puzzleType": "SequenceChoice",
  "prompt": "Three shells sing in different voices.",
  "solution": ["left", "middle", "right"],
  "onSuccess": {
    "setFlags": ["heard_lantern_song"],
    "revealNodes": ["hidden_underwater_song"]
  },
  "onFail": {
    "setFlags": ["song_missed"],
    "nextNode": "combat_echo_02"
  }
}
```

### Design rule

Puzzle should reinforce lore, not feel arbitrary.

---

## 5.9. NPC / Echo Node

### Purpose

Dialogue with dream entities.

NPCs can:

- Give clues.
- Offer choices.
- Reveal hidden condition.
- React to Beast/Relic.
- Influence ending.
- Provide small reward.

### NPC types

| Type | Description |
|---|---|
| Echo Child | Memory/person fragment |
| Realm Guide | Helps explain Dream |
| Lost Voice | Forest NPC |
| Shell Child | Ocean NPC |
| Toy Echo | Playground NPC |
| Nightmare Agent | Corrupt route |
| Mira/Nox Projection | Meta guide |

### Data

```json
{
  "nodeId": "npc_shell_child_01",
  "nodeType": "NPC",
  "npcId": "shell_child",
  "dialogueTreeId": "shell_child_lantern_01",
  "conditions": [],
  "onComplete": {
    "setFlags": ["met_shell_child"]
  }
}
```

### NPC interaction with Beast/Relic

Example:

```text
If player has Lantern of Forgotten Shores:
Shell Child: “That light... it remembers the song.”
```

---

## 5.10. Reward Node

### Purpose

Gives non-combat reward.

Use for:

- Puzzle reward.
- Exploration secret.
- Small cache.
- Lore object.
- Shrine reward.

### Rules

- Reward must be server-granted or staged.
- Reward node can be optional.
- Reward should match Realm.

### Example

```text
You find a pearl inside a broken mirror.
```

Reward:

- Ocean Fragment.
- Drowned Pearl Fragment chance.

---

## 5.11. Shrine Node

### Purpose

Offer heal, buff or risk/reward.

Shrine types:

| Shrine | Effect |
|---|---|
| Lucid Spring | Heal Beast |
| Memory Shrine | Gain clue/buff |
| Nightmare Shrine | Strong reward + Corruption |
| Time Shrine | Reduce cooldown in next combat |
| Echo Shrine | Reveal hidden clue |

### Example

```json
{
  "nodeType": "Shrine",
  "choices": [
    {
      "choiceId": "rest",
      "text": "Rest by the spring.",
      "effect": "HEAL_BEAST_30_PERCENT"
    },
    {
      "choiceId": "drink_dark_water",
      "text": "Drink from the black reflection.",
      "effect": "GAIN_NIGHTMARE_SHARD",
      "corruptionDelta": 2
    }
  ]
}
```

---

## 5.12. Relic Interaction Node

### Purpose

Node that reacts to equipped/owned Relic.

Examples:

- Lantern opens underwater path.
- Broken Toy Crown changes Echo Child dialogue.
- Clockglass reveals frozen minute.
- Nightmare Thorn opens corrupt door.

### Data

```json
{
  "nodeId": "relic_lantern_door",
  "nodeType": "Relic",
  "requiredRelicTags": ["lantern", "ocean", "memory"],
  "onMatched": {
    "revealNodes": ["hidden_underwater_song"],
    "setFlags": ["lantern_reacted"]
  },
  "onMissing": {
    "text": "Something here waits for a light you do not carry."
  }
}
```

### Design rule

Relic nodes should not block main path. They unlock optional/hidden value.

---

## 5.13. Hidden Node

### Purpose

Secret content.

Hidden nodes can contain:

- Lore.
- Puzzle.
- Special NPC.
- Rare reward.
- Hidden Ending condition.
- Alternate boss route.

### Reveal conditions

Hidden node may require:

- Specific flag.
- Relic.
- Beast Affinity.
- Previous choice.
- Puzzle success.
- Low/high Corruption.
- Dream History clue.
- Building bonus post-MVP.

### Data

```json
{
  "nodeId": "hidden_underwater_song",
  "nodeType": "Hidden",
  "visibilityRules": [
    {
      "type": "FLAG",
      "key": "heard_lantern_song"
    },
    {
      "type": "HAS_RELIC_TAG",
      "value": "lantern"
    }
  ],
  "onComplete": {
    "setFlags": ["hidden_song_completed"],
    "hiddenKnowledgeDelta": 1
  }
}
```

### Hidden design rule

Hidden content should be discoverable with clues, not blind guessing.

---

## 5.14. Ending Node

### Purpose

Resolves Dream.

Ending node determines:

- Ending type.
- Reward table.
- Dream history record.
- Origin metadata.
- Purity/Corruption/HiddenKnowledge.
- Return to Dreamland.

### Ending types

- Purify.
- Corrupt.
- Hidden.
- Failed.
- Abandoned.

### Data

```json
{
  "nodeId": "ending_portal",
  "nodeType": "Ending",
  "endingRuleSetId": "ocean_lantern_endings_01"
}
```

---

## 6. Choice System

### 6.1. Choice goals

Choices should:

- Express player intent.
- Affect dream state.
- Create consequence.
- Feed ending logic.
- Unlock routes.
- Reflect lore.

### 6.2. Choice categories

| Choice Type | Mechanical Result |
|---|---|
| Purify | +Purity, stable reward, healing route |
| Corrupt | +Corruption, Nightmare reward, harder route |
| Hidden | Hidden flag, rare reward, secret route |
| Neutral | Safe progression |
| Risk | Damage/debuff for reward |
| Mercy | Spare/avoid combat |
| Force | Immediate shortcut/corrupt |
| Listen | Unlock clue/hidden |
| Take | Gain item, increase corruption |
| Leave | Avoid risk |

### 6.3. Choice data fields

```json
{
  "choiceId": "listen_to_song",
  "textKey": "choice.listen_to_song",
  "tags": ["hidden", "listen", "memory"],
  "requirements": [],
  "effects": {
    "setFlags": ["heard_lantern_song"],
    "hiddenKnowledgeDelta": 1,
    "revealNodes": ["hidden_underwater_song"]
  },
  "nextNode": "npc_shell_child_01"
}
```

### 6.4. Conditional choices

Choice may only appear if:

- Beast has Affinity.
- Relic equipped.
- Run flag exists.
- Corruption threshold.
- Dream History unlock.
- Building bonus.
- Previous ending.

Example:

```json
{
  "choiceId": "raise_lantern_relic",
  "requirements": [
    {
      "type": "HAS_RELIC_TAG",
      "value": "lantern"
    }
  ]
}
```

### 6.5. Choice consequence display

MVP should show tone, not full math.

Examples:

- “This feels gentle.”
- “This may darken the Dream.”
- “Your Relic responds.”
- “Luma seems uneasy.”

For explicit risk:

```text
This will increase Corruption.
```

### 6.6. Choice memory

Every important choice should be stored:

```json
{
  "nodeId": "choice_lantern_01",
  "choiceId": "listen_to_song",
  "timestamp": "2026-05-24T12:10:00Z"
}
```

Used for:

- Ending.
- Reward.
- Metadata.
- Dream History.
- Analytics.

---

## 7. Dream State Flag System

### 7.1. Purpose

Dream state flags track what happened during a run.

Examples:

- Player met NPC.
- Player heard song.
- Player chose corrupt option.
- Boss spared.
- Hidden node completed.
- Relic reacted.
- Puzzle solved.

### 7.2. Flag types

| Type | Example |
|---|---|
| Story Flag | met_shell_child |
| Choice Flag | chose_listen |
| Combat Flag | boss_spared |
| Puzzle Flag | solved_shell_song |
| Hidden Flag | hidden_song_completed |
| Corruption Flag | took_lantern_light |
| Relic Flag | lantern_reacted |
| Beast Flag | light_beast_resonated |

### 7.3. Flag naming convention

Use lowercase snake_case.

Examples:

```text
met_shell_child
heard_lantern_song
lantern_reacted
boss_hesitated
boss_spared
took_lantern_light
```

### 7.4. Run state data

```json
{
  "flags": [
    "entered_ocean_lantern",
    "met_shell_child",
    "heard_lantern_song"
  ],
  "choicesMade": [
    {
      "nodeId": "choice_lantern_01",
      "choiceId": "listen_to_song"
    }
  ],
  "nodeStates": {
    "start_01": "Completed",
    "choice_lantern_01": "Completed",
    "hidden_underwater_song": "Revealed"
  },
  "purityDelta": 1,
  "corruptionDelta": 0,
  "hiddenKnowledgeDelta": 1
}
```

### 7.5. Flag rules

- Server owns authoritative flags.
- Client may preview local state but must sync.
- Ending rules use server flags.
- Reward rules use server flags.
- Metadata uses server flags.

---

## 8. Hidden Path System

### 8.1. Hidden path goals

Hidden paths reward curiosity and attention.

They should provide:

- Rare lore.
- Better metadata.
- Special Beast/Relic fragment.
- Hidden Ending.
- Emotional payoff.

### 8.2. Hidden path sources

Hidden path may be unlocked by:

- Dialogue clue.
- Puzzle success.
- Specific Relic.
- Specific Beast Affinity.
- Dream History.
- Low Corruption.
- High Corruption.
- Building bonus.
- Prior Hidden Ending.

### 8.3. Hidden path structure

Typical structure:

```text
Clue Node
  ↓
Condition Check
  ↓
Hidden Node Revealed
  ↓
Special Puzzle/NPC
  ↓
Boss Hook Enabled
  ↓
Hidden Ending
```

### 8.4. Example: Ocean Hidden Path

```text
NPC Shell Child mentions a song
  ↓
Player chooses “listen”
  ↓
Puzzle: shell song sequence
  ↓
Lantern Relic reacts
  ↓
Hidden Underwater Song node appears
  ↓
Boss hesitates at low HP
  ↓
Player uses non-lethal Light/Memory action
  ↓
Hidden Ending
```

### 8.5. Hidden hint system

Hints can appear through:

- NPC line.
- Relic glow.
- Beast reaction.
- Map shimmer.
- Mira/Nox comment.
- Archive entry.
- Dreamland Building.

### 8.6. Hidden failure

If player misses hidden path:

- Continue normal run.
- No hard fail.
- Dream History can record clue found/missed.
- Future Dream Echo can allow retry, post-MVP.

---

## 9. Puzzle System

### 9.1. Puzzle philosophy

Puzzles should be:

- Short.
- Thematic.
- Forgiving.
- Data-driven.
- Optional or reward-enhancing.
- Not frustrating on mobile.

### 9.2. MVP puzzle types

| Puzzle Type | Description |
|---|---|
| Choice Sequence | Choose correct order |
| Memory Match | Match symbol/phrase |
| Listen/Wait | Choose patience over action |
| Relic Use | Use/equip correct Relic |
| Beast Affinity | Beast reacts to clue |
| Corruption Choice | Risk/reward decision |
| Object Selection | Pick one of 2–4 objects |

### 9.3. Puzzle result types

| Result | Meaning |
|---|---|
| Success | Unlock flag/reward |
| Partial | Small reward, no hidden |
| Fail | Continue main path |
| Corrupt Success | Reward + Corruption |
| Hidden Success | Hidden flag |

### 9.4. Puzzle data model

```json
{
  "puzzleId": "shell_song_sequence",
  "puzzleType": "SequenceChoice",
  "steps": ["left_shell", "middle_shell", "right_shell"],
  "maxAttempts": 2,
  "onSuccess": {
    "setFlags": ["heard_lantern_song"],
    "revealNodes": ["hidden_underwater_song"]
  },
  "onFail": {
    "setFlags": ["missed_lantern_song"]
  }
}
```

### 9.5. Puzzle hinting

Hints can be:

- Text before puzzle.
- Visual glow.
- Beast reaction.
- Relic tooltip.
- Failure feedback.

Example:

```text
The smallest shell sings last, but its voice reaches you first.
```

### 9.6. Puzzle anti-frustration

Rules:

- Do not block main path in MVP.
- Allow at least one mistake.
- Keep interaction simple.
- Avoid timer unless event-specific.
- Provide feedback.

---

## 10. NPC & Dialogue Integration

### 10.1. NPC role in exploration

NPCs are important for:

- Lore.
- Clues.
- Route unlock.
- Emotional context.
- Choice framing.
- Ending logic.

### 10.2. Dialogue tree model

```json
{
  "dialogueTreeId": "shell_child_lantern_01",
  "nodes": [
    {
      "id": "start",
      "speaker": "Shell Child",
      "textKey": "dialogue.shell_child.start",
      "responses": [
        {
          "responseId": "ask_song",
          "textKey": "dialogue.response.ask_song",
          "next": "song_hint",
          "setFlags": ["asked_about_song"]
        }
      ]
    }
  ]
}
```

### 10.3. Conditional dialogue

Dialogue can react to:

- Beast Affinity.
- Equipped Relic.
- Corruption.
- Previous choice.
- Dream History.
- HiddenKnowledge.

Example:

```text
If Shadow Beast active:
Shell Child: “Your companion carries a night that the lake does not trust.”
```

### 10.4. NPC consequence

NPC interaction can:

- Set flags.
- Reveal node.
- Give reward.
- Change boss hook.
- Modify Corruption/Purity.
- Unlock Archive entry.

### 10.5. Dialogue length

MVP Daily Dream dialogue should be concise.

Guideline:

- 1–3 short lines per node.
- Important NPC: 3–6 lines.
- Avoid long VN-style scenes in core daily loop.

---

## 11. Realm-Specific Exploration Mechanics

## 11.1. Forest of Lost Voices

### Theme

- Silence.
- Lost names.
- Apologies.
- Whispering trees.
- Listening.

### Exploration mechanics

- Choose whether to speak/listen.
- Restore lost name.
- Follow whispers.
- Avoid forcing open mouths/doors.
- Memory Drain hazards.

### Node examples

| Node | Purpose |
|---|---|
| Whispering Path | Choice/listen clue |
| Apology Tree | NPC/puzzle |
| Silent Grove | Combat/ambush |
| Name-Etched Bark | Hidden clue |
| Hollow Treant Roots | Boss gate |

### Hidden path idea

Find the correct name before boss.  
If found, Hollow Treant’s healing phase fails and Purify/Hidden route opens.

---

## 11.2. Ocean of Memories

### Theme

- Water.
- Reflection.
- Submerged memories.
- Songs.
- Lanterns.

### Exploration mechanics

- Listen beneath water.
- Choose reflection vs object.
- Use Lantern Relic.
- Follow song order.
- Dive/float node reveal.

### Node examples

| Node | Purpose |
|---|---|
| Sunken Shore | Intro |
| Mirror Tide | Choice |
| Shell Song | Puzzle |
| Drowned Echo | Combat |
| Underwater Lantern | Hidden |
| Abyss Gate | Boss gate |

### Hidden path idea

Hear shell song, carry lantern memory, spare Lantern Keeper.

---

## 11.3. Childhood Playground

### Theme

- Toys.
- Rules.
- Loneliness.
- Make-believe.
- Abandoned joy.

### Exploration mechanics

- Play along.
- Find lost ticket.
- Choose empathy over winning.
- Follow strange game rules.
- Use Broken Toy Crown/Carousel Ticket.

### Node examples

| Node | Purpose |
|---|---|
| Empty Swing | Intro |
| Chalk Circle | Puzzle |
| Toy Court | Choice |
| Echo Child | NPC |
| Broken Carousel | Hidden |
| Hollow Child | Boss |

### Hidden path idea

Find Carousel Ticket, defend during Hollow Child’s crying turn, unlock spare ending.

---

## 11.4. Clocktower of Time

**Post-MVP.**

### Theme

- Regret.
- Repetition.
- Frozen seconds.
- Wrong choices.

### Exploration mechanics

- Looping nodes.
- Choose what to repeat.
- Use Clockglass Relic.
- Time locks.
- Delayed consequences.

### Design warning

Avoid confusing loops in MVP. Introduce later.

---

## 11.5. Nightmare Citadel

**Post-MVP / advanced.**

### Theme

- Fear.
- Locked dreams.
- Power through corruption.
- Nox route.

### Exploration mechanics

- Doors requiring Corruption.
- Nightmare bargains.
- Risk/reward shortcuts.
- Corrupt Relic reactions.
- Enemy variants.

### Design warning

Nightmare exploration should be clearly risky, not accidentally punishing.

---

## 12. Exploration Rewards

### 12.1. Reward types

Exploration can reward:

- Fragments.
- Relic Fragment.
- Beast Fragment.
- Lore entry.
- HiddenKnowledge.
- Purity.
- Corruption.
- Temporary buff.
- Healing.
- Dreamland clue.
- Metadata value.

### 12.2. Reward placement

| Node Type | Reward |
|---|---|
| Story | Lore/clue |
| Choice | Route flag, Purity/Corruption |
| Puzzle | Fragment/lore/hidden |
| Combat | EXP/minor fragments |
| Elite | Better fragments |
| Hidden | Rare reward |
| Shrine | Heal/buff/risk |
| Boss | Ending reward |
| Ending | Main reward |

### 12.3. Reward staging

Exploration rewards should usually be staged until run completion.

Exceptions:

- Temporary buff.
- Heal.
- Node state flag.
- Corruption/Purity delta.

### 12.4. Hidden reward

Hidden reward can include:

- Rare Beast Fragment.
- Key Relic Fragment.
- Unique lore entry.
- Higher metadata rarity.
- Dream History badge.

### 12.5. Corrupt exploration reward

Corrupt route can give:

- Nightmare Shard.
- Shortcut.
- Extra fragment.
- Strong temporary buff.

But should add:

- Corruption.
- Harder combat.
- NPC reaction.
- Potential Dreamland mood change.

---

## 13. Ending Resolution System

### 13.1. Ending inputs

Ending is determined by:

- Required boss state.
- Run flags.
- Choice tags.
- Corruption/Purity delta.
- Hidden flags.
- Relic interaction.
- Beast interaction.
- Puzzle success.
- Failed/abandoned state.

### 13.2. Ending rule priority

Recommended priority:

1. Failed.
2. Abandoned.
3. Hidden.
4. Corrupt.
5. Purify.
6. Neutral/default.

### 13.3. Ending rule data

```json
{
  "endingRuleSetId": "ocean_lantern_endings_01",
  "rules": [
    {
      "ending": "Hidden",
      "priority": 100,
      "requirements": [
        { "type": "FLAG", "key": "heard_lantern_song" },
        { "type": "FLAG", "key": "boss_spared" },
        { "type": "FLAG", "key": "hidden_song_completed" }
      ]
    },
    {
      "ending": "Corrupt",
      "priority": 50,
      "requirements": [
        { "type": "CORRUPTION_DELTA_AT_LEAST", "value": 5 }
      ]
    },
    {
      "ending": "Purify",
      "priority": 10,
      "requirements": [
        { "type": "FLAG", "key": "boss_defeated" }
      ]
    }
  ]
}
```

### 13.4. Ending output

Ending produces:

- Ending type.
- Reward table.
- Dream History record.
- Metadata origin result.
- Purity/Corruption/HiddenKnowledge changes.
- Optional unlocks.

### 13.5. Ending UX

Ending screen should show:

- Dream title.
- Ending name.
- Short ending text.
- Key choice summary.
- Reward.
- Dreamland change.
- New lore/item origin.

---

## 14. UI/UX Requirements

### 14.1. Exploration screen

Must show:

- Dream background/scene.
- Current node.
- Available next nodes.
- Player Beast portrait.
- HP/status if persistent.
- Relic hint if applicable.
- Dream objective.
- Map button.
- Exit/abandon button.
- Corruption/Purity hint if relevant.

### 14.2. Map UI

Map should show:

- Nodes.
- Completed nodes.
- Available nodes.
- Locked nodes.
- Hidden nodes only if revealed.
- Boss node.
- Path lines.

### 14.3. Node UI

Node screen includes:

- Node title.
- Scene art.
- Narrative text.
- Choices/actions.
- Reward preview if applicable.
- Requirement hints.

### 14.4. Choice UI

Choice button should show:

- Text.
- Optional tone icon:
  - Light/Purify.
  - Shadow/Corrupt.
  - Hidden.
  - Risk.
- Requirement lock if unavailable.

Example:

```text
[Listen to the song]  Hidden hint
[Take the lantern light]  Corrupt
[Leave it untouched]  Neutral
```

### 14.5. Hidden hint UI

Use subtle cues:

- Relic glow.
- Beast reaction.
- Node shimmer.
- Audio cue.
- Short text.

Avoid explicit checklist unless accessibility mode.

### 14.6. Abandon UX

If player abandons:

```text
Leave this Dream?
You will lose unclaimed ending rewards.
```

If run can resume:

```text
Your current Dream progress will be saved.
```

### 14.7. Accessibility

Need:

- Clear text size.
- Colorblind-friendly icons, not only colors.
- Tap targets mobile-friendly.
- Dialogue skip/fast-forward.
- Review recent log.
- Reduce motion option.

---

## 15. Art & Audio Requirements

### 15.1. Exploration art style

- 2D illustrated dream scenes.
- Isometric or node map overlay.
- Realm-specific backgrounds.
- Soft animation for important nodes.
- Minimal but evocative.

### 15.2. Node art requirements

Each node can use:

- Background image.
- Icon.
- Small animation.
- Character/NPC portrait.
- Relic glow overlay.
- Boss silhouette.

MVP can reuse Realm backgrounds with node-specific overlays.

### 15.3. Realm visual language

| Realm | Exploration visuals |
|---|---|
| Forest | Mist, trees, stitched mouths, leaves |
| Ocean | Water, reflection, lanterns, shells |
| Playground | Toys, chalk, sunset, carousel |
| Clocktower | Gears, hourglass, frozen dust |
| Citadel | Black stone, thorns, crowns |

### 15.4. Audio requirements

Exploration needs:

- Realm ambience.
- Node selection sound.
- Choice sound.
- Hidden reveal sound.
- Puzzle success/fail sound.
- NPC dialogue blip.
- Corruption choice sound.
- Purify choice sound.
- Boss node sting.

### 15.5. Dynamic audio

Post-MVP:

- Corruption layer.
- Hidden node whisper.
- Beast reaction sound.
- Relic resonance sound.

---

## 16. Backend Requirements

### 16.1. Tables

#### dream_map_templates

```sql
map_template_id
realm_id
rarity_range_json
nodes_json
edges_json
version
status
created_at
updated_at
```

#### dream_node_templates

```sql
node_template_id
node_type
content_json
conditions_json
effects_json
version
status
created_at
updated_at
```

#### dream_runs

```sql
run_id
owner_id
dream_seed_id
selected_beast_id
status
current_node_id
node_states_json
flags_json
choices_json
staged_rewards_json
purity_delta
corruption_delta
hidden_knowledge_delta
started_at
completed_at
updated_at
```

#### exploration_actions

```sql
action_id
run_id
owner_id
node_id
action_type
choice_id
result_json
created_at
```

#### ending_rule_sets

```sql
ending_rule_set_id
rules_json
version
status
created_at
updated_at
```

### 16.2. Services

| Service | Responsibility |
|---|---|
| DreamMapService | Load map templates |
| ExplorationService | Validate/resolve node actions |
| NodeConditionService | Check node visibility/access |
| ChoiceService | Resolve choices |
| PuzzleService | Resolve puzzle results |
| HiddenPathService | Reveal hidden nodes |
| EndingResolutionService | Determine ending |
| RunStateService | Store flags/node states |
| ExplorationRewardService | Stage node rewards |

### 16.3. API endpoints

```text
GET  /dream/run/{runId}/map
POST /dream/run/{runId}/enter-node
POST /dream/run/{runId}/choice
POST /dream/run/{runId}/puzzle-submit
POST /dream/run/{runId}/claim-node-reward
POST /dream/run/{runId}/complete-node
POST /dream/run/{runId}/resolve-ending
```

### 16.4. Node action request

```json
{
  "runId": "RUN-001",
  "nodeId": "choice_lantern_01",
  "choiceId": "listen_to_song",
  "requestId": "uuid"
}
```

### 16.5. Node action response

```json
{
  "success": true,
  "updatedFlags": ["heard_lantern_song"],
  "nodeStateUpdates": {
    "choice_lantern_01": "Completed",
    "hidden_underwater_song": "Revealed"
  },
  "purityDelta": 0,
  "corruptionDelta": 0,
  "hiddenKnowledgeDelta": 1,
  "nextAvailableNodes": ["npc_shell_child_01", "hidden_underwater_song"]
}
```

### 16.6. Server validation

Server validates:

- Run belongs to user.
- Run is active.
- Node exists in map.
- Node is available.
- Choice exists.
- Requirements met.
- Node not already completed if non-repeatable.
- Reward not already claimed.
- Request idempotency.

---

## 17. Client Requirements

### 17.1. Unity modules

- DreamExplorationController.
- DreamMapView.
- DreamNodeView.
- ChoiceUIController.
- PuzzleUIController.
- NPCDialogueController.
- HiddenRevealController.
- ExplorationStateCache.
- ExplorationAPIClient.
- EndingScreenController.

### 17.2. Client flow

```text
Load run map
  ↓
Render available nodes
  ↓
Player selects node
  ↓
Client requests enter-node
  ↓
Render node content
  ↓
Player chooses action
  ↓
Client submits action
  ↓
Apply server response
  ↓
Update map
```

### 17.3. Client local prediction

Client can:

- Highlight likely available nodes.
- Preview choice.
- Animate reveal.

Client cannot:

- Permanently set flag.
- Grant reward.
- Determine ending.
- Unlock hidden node authoritatively.

### 17.4. Error handling

If action fails:

- Show user-friendly error.
- Refresh run state.
- Do not soft-lock.

Example:

```text
The Dream has shifted. Refreshing your path...
```

### 17.5. Resume behavior

On reconnect:

- Fetch run state.
- Rebuild map.
- Resume current node if needed.
- If in combat, resume battle or mark recoverable.

---

## 18. Analytics Events

### 18.1. Required events

```text
exploration_started
exploration_node_viewed
exploration_node_entered
exploration_choice_viewed
exploration_choice_selected
exploration_puzzle_started
exploration_puzzle_completed
exploration_hidden_node_revealed
exploration_hidden_node_completed
exploration_shrine_used
exploration_npc_talked
exploration_relic_reacted
exploration_beast_reacted
exploration_boss_node_reached
exploration_ending_resolved
exploration_abandoned
```

### 18.2. Event properties

```json
{
  "runId": "RUN-001",
  "seedId": "DREAM-2026-05-24-OCEAN-EPIC-001",
  "realm": "Ocean of Memories",
  "rarity": "Epic",
  "nodeId": "choice_lantern_01",
  "nodeType": "Choice",
  "choiceId": "listen_to_song",
  "selectedBeastId": "BEAST-001",
  "equippedRelicId": "RELIC-001",
  "corruptionDelta": 0,
  "hiddenRevealed": true
}
```

### 18.3. Key metrics

- Node completion rate.
- Dream abandonment point.
- Choice distribution.
- Hidden node reveal rate.
- Hidden Ending rate.
- Puzzle success/fail rate.
- Corrupt vs Purify choice ratio.
- Average nodes per run.
- Average exploration duration.
- Boss reach rate.
- Reward node engagement.
- Relic hidden interaction usage.

---

## 19. QA Test Plan

### 19.1. Map tests

- Map loads correctly.
- Node positions correct.
- Edges correct.
- Start node available.
- Hidden nodes hidden initially.
- Locked nodes show correct state.
- Completed nodes persist.

### 19.2. Choice tests

- Choice appears.
- Conditional choice hidden/locked correctly.
- Choice sets flag.
- Choice changes Corruption/Purity.
- Choice reveals correct node.
- Choice cannot be submitted twice if not allowed.

### 19.3. Puzzle tests

- Correct solution succeeds.
- Wrong solution fails/partial.
- Attempts count works.
- Success reveals hidden node.
- Puzzle state persists after reconnect.

### 19.4. Hidden tests

- Hidden node not visible without condition.
- Relic condition works.
- Beast Affinity condition works.
- Hidden node reward correct.
- Hidden Ending flag set.
- Missing hidden path still allows normal ending.

### 19.5. Combat integration tests

- Combat node starts battle.
- Victory completes node.
- Defeat fails run.
- Elite node reward staged.
- Boss node unlocks ending.

### 19.6. Ending tests

- Purify Ending resolves.
- Corrupt Ending resolves.
- Hidden Ending priority works.
- Failed run cannot claim ending reward.
- Ending reward table correct.
- Dream History stores key choice.

### 19.7. Server validation tests

- Cannot enter unavailable node.
- Cannot choose invalid choice.
- Cannot claim reward twice.
- Cannot fake hidden flag.
- Cannot complete ending early.
- Idempotent request safe.

---

## 20. Balance Guidelines

### 20.1. Exploration duration

Target:

| Dream Rarity | Exploration + Combat Duration |
|---|---:|
| Common | 5–8 minutes |
| Rare | 8–12 minutes |
| Epic | 10–15 minutes |
| Legendary | 15–25 minutes |
| Mythic | Custom |

### 20.2. Node count

Keep MVP manageable.

Avoid:

- Too many nodes.
- Too many branches.
- Too many hidden conditions.
- Long reading blocks.

### 20.3. Choice balance

Each major dream should have:

- At least 1 meaningful choice.
- At least 1 route-influencing choice for Rare+.
- At least 1 hidden clue for Epic+.

### 20.4. Hidden balance

Hidden path should be:

- Rare enough to feel special.
- Clued enough to feel fair.
- Not required for progression.
- Rewarding but not mandatory.

### 20.5. Corruption balance

Corrupt choices should:

- Offer immediate benefit.
- Clearly imply risk.
- Increase Corruption.
- Sometimes open Nightmare content.

### 20.6. Puzzle balance

Puzzle should:

- Support theme.
- Be short.
- Be optional or forgiving.
- Have clear feedback.

---

## 21. MVP Implementation Plan

### Sprint 1 — Map Foundation

Deliver:

- Map template data.
- Node state model.
- Dream run map API.
- Basic map UI.

### Sprint 2 — Node Resolution

Deliver:

- Start/Story/Choice node.
- Node access validation.
- Choice submit API.
- Run flags.

### Sprint 3 — Combat Node Integration

Deliver:

- Combat node.
- Battle start from node.
- Victory/defeat node result.
- Boss node placeholder.

### Sprint 4 — Puzzle & NPC Nodes

Deliver:

- Simple puzzle node.
- NPC dialogue node.
- Dialogue flags.
- Puzzle success/fail.

### Sprint 5 — Hidden Node System

Deliver:

- Hidden visibility rules.
- Relic condition.
- Beast Affinity condition.
- Hidden reveal animation.

### Sprint 6 — Ending Resolution

Deliver:

- Ending rule sets.
- Purify/Corrupt/Hidden.
- Ending screen.
- Dream History output.

### Sprint 7 — Rewards & Analytics

Deliver:

- Exploration reward staging.
- Shrine/reward node.
- Analytics events.
- QA validation.

### Sprint 8 — Content Expansion

Deliver:

- 3 Realm map templates.
- 6–10 Dream node sets.
- Hidden path examples.
- Balance pass.

---

## 22. Open Design Questions

1. Should map be fully visible at start or revealed gradually?
2. Should player physically move avatar or select nodes from map?
3. Should exploration HP persist between combat nodes?
4. Should Shrine nodes be guaranteed before boss?
5. Should Hidden node requirements show as locked hints or remain invisible?
6. Should player be able to backtrack?
7. Should failed puzzle allow retry?
8. Should Corruption choices always be labeled?
9. Should Daily Dream allow only one ending attempt per day?
10. Should Dream Echo replay allow hidden retry?

Recommended MVP answers:

1. Reveal gradually.
2. Node selection from map, not free movement.
3. Yes, combat HP persistence with partial heal.
4. Sometimes, based on difficulty.
5. Invisible until clue; locked hint for Relic-based nodes.
6. Limited backtracking if node graph allows.
7. Usually one retry or partial fail.
8. Strong Corruption choices should be labeled.
9. Yes, one main reward per day.
10. Post-MVP yes, with reduced rewards.

---

## 23. Diagram Suggestions

Một số phần của Exploration System rất nên vẽ diagram riêng để team dễ hiểu:

### 23.1. Exploration Flow Diagram

Nên vẽ:

```text
Enter Dream → Node Map → Choice/Combat/Puzzle/NPC → Boss → Ending → Reward
```

Dùng cho GDD và onboarding dev.

### 23.2. Node State Machine Diagram

Nên vẽ các state:

```text
Hidden → Revealed → Available → Active → Completed
                         ↓
                       Failed / Skipped
```

Dùng cho backend và Unity state sync.

### 23.3. Hidden Ending Logic Diagram

Ví dụ Ocean Hidden:

```text
Meet Shell Child
  ↓
Choose Listen
  ↓
Solve Shell Song
  ↓
Lantern Relic Reacts
  ↓
Boss Hesitates
  ↓
Spare Action
  ↓
Hidden Ending
```

Dùng cho narrative/game design.

### 23.4. Run State Validation Diagram

Nên vẽ client-server flow:

```text
Client selects node
  ↓
Server validates
  ↓
Server updates flags/node state
  ↓
Client refreshes map
```

Dùng cho technical architecture.

### 23.5. Ending Priority Diagram

Nên vẽ priority:

```text
Failed > Abandoned > Hidden > Corrupt > Purify > Default
```

Dùng cho design và QA.

---

## 24. Glossary

| Term | Meaning |
|---|---|
| Exploration | Dream map/node interaction gameplay |
| Node | A point of interaction in Dream |
| Edge | Connection between nodes |
| Run State | Current state of a Dream run |
| Flag | Boolean/event marker set during run |
| Choice | Player decision in node |
| Hidden Node | Secret node revealed by condition |
| Shrine | Heal/buff/risk node |
| Puzzle | Short interaction challenge |
| NPC/Echo | Dream entity dialogue node |
| Boss Node | Node that starts boss combat |
| Ending Node | Node that resolves Dream ending |
| Purity | Positive/restorative route value |
| Corruption | Risk/dark route value |
| HiddenKnowledge | Secret/lore discovery value |
| Visibility Rule | Condition to reveal/access node |
| Ending Rule Set | Logic that decides ending |

---

## 25. Final Exploration Statement

Exploration System là phần giúp **Myth of Dreams** khác với một game combat/collection thông thường.

Người chơi không chỉ chọn Beast rồi đánh quái. Họ đi qua một giấc mơ, đọc dấu vết, nghe Echo, chạm vào ký ức, đưa ra lựa chọn và đôi khi tìm thấy một điều bị giấu rất sâu.

Một Exploration System tốt phải khiến người chơi nghĩ:

> “Mình đã hiểu giấc mơ này thêm một chút.”

Và nếu họ đủ chú ý:

> “Mình đã tìm thấy điều mà giấc mơ này thật sự muốn nói.”\n