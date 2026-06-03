---
title: "NPC Bible"
description: "Myth of Dreams - NPC Bible"
date: "2026-06-03"
category: "worldbuilding"
order: 32
tags: ["worldbuilding","npc"]
---

**Version:** 1.0  
**Document Type:** Narrative Bible / Character Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, daily_dream_template.md, exploration_system.md, realm_lore.md  
**Owner:** Narrative Design / Game Design / Art / Audio  
**Status:** Draft for MVP Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa **NPC Bible** cho Myth of Dreams.

NPC trong Myth of Dreams không chỉ là người giao quest. Họ là những Echo, Guide, Dreamborn, Nightmare Agent hoặc Memory Object có tiếng nói. NPC giúp người chơi hiểu cảm xúc của Daily Dream, nhận clue, mở Hidden Ending và cảm nhận Dreamverse như một thế giới sống.

Tài liệu này dùng để:

- Chuẩn hóa vai trò NPC.
- Giữ voice/tone nhất quán.
- Định nghĩa NPC quan trọng như Mira, Nox, Echo Child.
- Tạo template cho NPC trong Daily Dream.
- Hướng dẫn viết dialogue.
- Liên kết NPC với Realm, Ending, Reward và Hidden Path.
- Hỗ trợ art/audio brief.

---

## 1. NPC Design Vision

### 1.1. NPC fantasy

Trong Dreamverse, không phải ai cũng là “người”. Một NPC có thể là:

- Một đứa trẻ chỉ còn lại tiếng cười.
- Một cái cây biết xin lỗi.
- Một vỏ sò hát bằng ký ức.
- Một chiếc đồng hồ nói bằng giọng người đã mất.
- Một con rối giữ luật chơi cũ.
- Một cánh cửa không muốn mở.
- Một Nightmare noble đang mời gọi người chơi.

NPC là cách Dreamverse trò chuyện với Dreamwalker.

### 1.2. NPC design statement

NPC trong Myth of Dreams phải:

> Gợi cảm xúc, đưa clue, phản ánh lựa chọn của người chơi, và khiến mỗi Dream có linh hồn riêng.

### 1.3. NPC pillars

#### Emotional Function

Mỗi NPC phải đại diện cho một cảm xúc hoặc ký ức.

#### Gameplay Function

Mỗi NPC nên có ít nhất một chức năng:

- Clue.
- Choice.
- Reward.
- Hidden path.
- Tutorial.
- Warning.
- Ending setup.

#### Dreamlike Voice

Dialogue phải ngắn, giàu hình ảnh, nhưng không quá khó hiểu.

#### Reactivity

NPC nên phản ứng với:

- Beast.
- Relic.
- Corruption.
- Purity.
- HiddenKnowledge.
- Previous choices.
- Dream History.

#### Lore Consistency

NPC phải phù hợp với Realm và Story Bible.

---

## 2. NPC Taxonomy

### 2.1. NPC types

| NPC Type | Description | Example |
|---|---|---|
| Guide | Meta guide/support | Mira |
| Temptation Guide | Corrupt route guide | Nox |
| Echo | Fragment of memory/person | Echo Child |
| Realm Spirit | Native symbolic entity | Shell Child |
| Dreamborn NPC | Stronger named dream entity | Silent Stag |
| Nightmare Agent | Agent of Nightmare Court | Masked Noble |
| Memory Object | Object that speaks/acts | Apology Tree |
| Boss-as-NPC | Boss before/after combat | Hollow Child |
| Merchant/Archivist | System NPC, post-MVP | Archive Keeper |
| Event NPC | Seasonal character | Lantern Herald |

### 2.2. NPC functions

| Function | Description |
|---|---|
| Tutorial | Teach mechanic |
| Clue Giver | Hint hidden path |
| Moral Mirror | Reflect player choice |
| Reward Giver | Grant material/lore |
| Gatekeeper | Require condition |
| Emotional Anchor | Explain dream wound |
| Corruption Temptation | Offer risky reward |
| Comic Relief | Light tone, rare use |
| Lore Archivist | Unlock history |
| Companion Comment | Mira/Nox/Luma reactions |

### 2.3. NPC importance tiers

| Tier | Use |
|---|---|
| Core | Major recurring character |
| Realm Recurring | Appears across Realm |
| Dream-Specific | Appears in one Daily Dream |
| Hidden | Secret NPC |
| Event | Seasonal |
| Background | Flavor only |

---

## 3. Core NPCs

## 3.1. Mira — The Dream Archivist

### Role

Mira là guide chính của người chơi trong Dreamverse. Cô đại diện cho Memory, Purity, Archive và việc thấu hiểu giấc mơ thay vì khai thác nó.

### NPC type

```yaml
npc_type: Guide / Archivist
importance: Core
affinity: Memory / Light
alignment: Restoration
associated_systems:
  - Tutorial
  - Dream History
  - Archive
  - Purify route
  - Lore unlock
```

### Character fantasy

Mira là người ghi lại những giấc mơ trước khi chúng bị Blank Mist nuốt mất. Cô không ra lệnh cho người chơi phải làm điều tốt, nhưng luôn nhắc rằng mỗi giấc mơ từng là điều quan trọng với ai đó.

### Personality

- Bình tĩnh.
- Dịu nhưng không yếu.
- Nói ít.
- Tin vào việc lắng nghe.
- Có chút buồn.
- Không thích Corruption nhưng hiểu vì sao nó hấp dẫn.
- Luôn đặt câu hỏi thay vì phán xét.

### Voice direction

Mira nói như một người đã đọc quá nhiều ký ức, nhưng vẫn còn tin vào chúng.

Tone:

- Soft.
- Reflective.
- Precise.
- Poetic but readable.

### Sample lines

```text
“Đừng vội gọi nó là quái vật. Một số ký ức chỉ biết tự vệ bằng hình dạng xấu xí.”
```

```text
“Giấc mơ này không muốn được thắng. Nó muốn được hiểu.”
```

```text
“Bạn có thể lấy ánh sáng đó. Nhưng hãy tự hỏi: nó đang soi đường cho ai?”
```

```text
“Archive sẽ giữ lại kết thúc này. Nhưng bạn mới là người quyết định nó có nghĩa gì.”
```

### Gameplay functions

- Tutorial guide.
- Explains Daily Dream.
- Gives Purify hints.
- Unlocks Archive.
- Comments on Hidden clues.
- Warns about Corruption.
- Helps summarize Dream History.

### Reactivity

If player chooses Corrupt often:

```text
“Có những con đường ngắn hơn. Nhưng chúng hiếm khi trả lại cho bạn đúng thứ bạn đã đánh đổi.”
```

If player finds Hidden Ending:

```text
“Không phải ai cũng nhận ra một giấc mơ đang thì thầm thay vì kêu cứu.”
```

If player uses Nightmare Relic:

```text
“Vật đó vẫn còn đau. Hãy cẩn thận khi gọi nó là sức mạnh.”
```

### Visual direction

- Long coat/robe with archive paper motifs.
- Soft blue/silver/white palette.
- Floating pages.
- Lantern/book focus.
- Calm silhouette.
- Eyes like ink or stars.

### Audio direction

- Soft page flutter.
- Light chime.
- Subtle pen scratching.
- Calm voice blip.

---

## 3.2. Nox — The Nightmare Broker

### Role

Nox là nhân vật đại diện cho Corruption, Nightmare Shard, shortcut, risk/reward và sự cám dỗ của sức mạnh.

### NPC type

```yaml
npc_type: Temptation Guide / Nightmare Agent
importance: Core
affinity: Shadow / Time
alignment: Exploitation / Freedom Through Power
associated_systems:
  - Corrupt route
  - Nightmare Relic
  - Nightmare Gate
  - Corruption economy
  - Risk reward choices
```

### Character fantasy

Nox không tự nhận là ác. Nox tin rằng những giấc mơ đau đớn không cần được chữa lành — chúng có thể được dùng. Với Nox, một ký ức bị khóa là một kho báu, không phải một vết thương.

### Personality

- Quyến rũ.
- Mỉa mai.
- Thông minh.
- Không nói dối hoàn toàn.
- Nói sự thật theo cách nguy hiểm.
- Tôn trọng người chơi nếu họ dám chọn.
- Khinh thường sự do dự.

### Voice direction

Nox nói như một người biết trước bạn sẽ bị cám dỗ.

Tone:

- Smooth.
- Dark humor.
- Elegant.
- Slightly predatory.
- Never cartoon villain.

### Sample lines

```text
“Bạn gọi nó là tha hóa. Ta gọi nó là không lãng phí đau đớn.”
```

```text
“Lấy đi. Nếu giấc mơ đủ mạnh để giữ nó, nó đã không để bạn chạm vào.”
```

```text
“Mira muốn lưu giữ mọi thứ. Thật đáng yêu. Và thật chậm chạp.”
```

```text
“Không phải cánh cửa nào cũng cần chìa khóa. Một số chỉ cần đủ lực.”
```

### Gameplay functions

- Offers Corrupt choices.
- Explains Nightmare Shard.
- Unlocks Nightmare Gate.
- Reacts to Corruption threshold.
- Gives risky reward offers.
- May appear in Nightmare Citadel.

### Reactivity

If player has high Corruption:

```text
“Cuối cùng thì Dreamland của bạn cũng bắt đầu có răng.”
```

If player refuses corrupt choice:

```text
“Không sao. Những người kiên nhẫn nhất thường quay lại khi phần thưởng đủ sáng.”
```

If player equips Nightmare Thorn:

```text
“À. Một bông hoa biết cắn. Hợp với bạn hơn ta tưởng.”
```

### Visual direction

- Elegant shadow figure.
- Mask/crown/thorn motif.
- Black/violet/red palette.
- Smile visible before eyes, or vice versa.
- Not monstrous at first glance.
- Slight distortion around silhouette.

### Audio direction

- Low velvet tone.
- Glass crack.
- Distant chain.
- Reverse whisper.

---

## 3.3. Luma — The Starter Beast Companion

### Role

Luma là starter Beast và companion đầu game. Không phải NPC theo nghĩa truyền thống, nhưng có reaction lines/behavior quan trọng.

### NPC type

```yaml
npc_type: Companion Beast
importance: Core
affinity: Light / Memory
alignment: Player Bond
associated_systems:
  - Tutorial
  - Beast System
  - Hidden hint
  - Dreamland
```

### Character fantasy

Luma là sinh vật đầu tiên còn nhớ Dreamland trước Blank Mist. Luma không nói nhiều bằng lời, nhưng phản ứng với Dream, Relic và lựa chọn của người chơi.

### Personality

- Tò mò.
- Trung thành.
- Nhạy cảm với Corruption.
- Vui khi Dreamland sáng lên.
- Lo lắng khi player chọn exploitative route.
- Có thể phát hiện hidden clue.

### Communication style

- Short chirps.
- Body language.
- Glow.
- Small text interpretation from Mira.

### Sample reactions

```text
Luma’s tail glows softly toward the sealed door.
```

```text
Luma steps back from the black water.
```

```text
Luma presses its head against the lantern, as if listening.
```

```text
Luma refuses to growl. Something here is not an enemy.
```

### Gameplay functions

- Tutorial companion.
- Hidden clue detector.
- Dreamland emotional anchor.
- Light/Purity reaction.
- Early accessibility hint.

### Visual direction

- Small fox-like Beast.
- Moonlight tail.
- Gentle eyes.
- Soft gold/white/blue glow.
- Expressive idle.

### Audio direction

- Soft chime.
- Small fox chirp.
- Glow pulse.

---

## 4. Realm Recurring NPCs

## 4.1. Shell Child

### Realm

Ocean of Memories.

### NPC type

Echo / Realm Spirit / Clue Giver.

### Function

- Ocean hidden path clue.
- Song/memory motif.
- Lantern Keeper emotional context.

### Personality

- Shy.
- Speaks indirectly.
- Afraid of reflections.
- Knows songs before words.
- Trusts players who wait/listen.

### Sample lines

```text
“Đừng kéo đèn lên. Trên mặt nước, nó sẽ quên cách sáng.”
```

```text
“Vỏ sò không giữ biển. Nó chỉ giữ tiếng biển đủ lâu để ai đó nhớ.”
```

```text
“Người giữ đèn không giận đâu. Chỉ là... họ đã chờ quá lâu.”
```

### Hidden clue style

Shell Child rarely says direct solution. They imply:

- Listen.
- Do not take.
- Song matters.
- Lantern responds to patience.

### Visual direction

- Small child-like figure made of shell, water and moonlight.
- Hair floating as if underwater.
- Eyes like pearls.
- Carries cracked shell.

---

## 4.2. Echo Child

### Realm

Childhood Playground.

### NPC type

Echo / Child Memory / Hidden clue.

### Function

- Playground lore.
- Carousel Ticket clue.
- Hollow Child empathy route.

### Personality

- Playful but sad.
- Changes rules.
- Asks simple questions with heavy meaning.
- Distrusts adults/authority.
- Responds to Toy/Emotion Relic.

### Sample lines

```text
“Nếu mình đổi luật trước khi thua, vậy có tính là mình vẫn thắng không?”
```

```text
“Bạn có vé không? Không có vé thì vòng quay sẽ không nhớ bạn.”
```

```text
“Đừng đánh bạn ấy khi bạn ấy khóc. Như vậy là hỏng trò chơi.”
```

### Visual direction

- Faded child silhouette.
- Chalk marks.
- Toy crown or ribbon.
- Sunset palette.
- Smile that flickers.

---

## 4.3. The Apology Tree

### Realm

Forest of Lost Voices.

### NPC type

Memory Object / Speaking Tree / Puzzle NPC.

### Function

- Forest clue.
- Name restoration.
- Purify route.
- Hollow Treant counterplay.

### Personality

- Slow.
- Heavy with unsaid words.
- Speaks in fragments.
- Sometimes repeats player’s words.
- Wants to say one name but forgot it.

### Sample lines

```text
“Ta không quên lời xin lỗi. Ta quên người cần nghe nó.”
```

```text
“Rễ giữ lại những điều miệng không đủ can đảm thả ra.”
```

```text
“Nói tên đó... nếu bạn còn nghe thấy nó trong lá.”
```

### Visual direction

- Tree with stitched mouths.
- Soft glowing names under bark.
- Leaves shaped like torn letters.
- Not fully hostile.

---

## 4.4. Timekeeper Echo

### Realm

Clocktower of Time.

### NPC type

Realm Guide / Puzzle NPC / Regret clue.

### Function

- Time mechanics.
- Loop clue.
- Clockglass interaction.
- Regret Regent setup.

### Personality

- Precise.
- Sad but dry.
- Repeats phrases.
- Treats seconds as living things.
- Dislikes shortcuts.

### Sample lines

```text
“Bạn không thể quay lại khoảnh khắc đó. Nhưng bạn có thể ngừng trừng phạt hiện tại vì nó.”
```

```text
“Chiếc kim phút nói dối ít hơn người dùng nó.”
```

```text
“Đừng sửa quá khứ. Hãy trả tự do cho nó.”
```

### Visual direction

- Humanoid made of brass, dust and clock hands.
- Face partly hidden by broken dial.
- Moves in small stutters.

---

## 4.5. Masked Noble

### Realm

Nightmare Citadel.

### NPC type

Nightmare Agent / Gatekeeper / Corrupt route NPC.

### Function

- Nightmare bargain.
- Corrupt reward offer.
- Nox-aligned clue.
- Nightmare Court worldbuilding.

### Personality

- Polite.
- Threatening without raising voice.
- Treats fear as currency.
- Offers deals that are technically fair.

### Sample lines

```text
“Ở đây, không ai đánh cắp giấc mơ. Chúng ta chỉ mua lại những thứ chủ nhân đã bỏ rơi.”
```

```text
“Một cánh cửa khóa lại không phải để ngăn bạn vào. Nó để xem bạn muốn vào đến mức nào.”
```

```text
“Bạn có thể rời đi không mất gì. Ngoại trừ cơ hội.”
```

### Visual direction

- Tall elegant figure.
- Mask with no mouth or too many mouths.
- Crown/thorn/contract motif.
- Black velvet and red glass.

---

## 5. Boss-as-NPC Guidelines

### 5.1. Boss dialogue purpose

Boss dialogue should reveal:

- What boss protects.
- What boss fears.
- Why combat happens.
- How Hidden Ending might work.
- What emotional wound defines dream.

### 5.2. Boss dialogue timing

Use dialogue at:

- Intro.
- Phase change.
- Low HP.
- Hidden hook.
- Defeat.
- Spare/Purify/Corrupt result.

### 5.3. Abyss Lantern Keeper sample

Intro:

```text
“Do not touch the light. It is still waiting.”
```

Phase 2:

```text
“If it rises, it will forget. If it forgets, I waited for nothing.”
```

Hidden hesitation:

```text
“The song... you heard it?”
```

Spare:

```text
“Then let it stay. Let it shine for the one who never came.”
```

### 5.4. Hollow Child sample

Intro:

```text
“You’re late. The game already started.”
```

Phase 2:

```text
“No. No, that’s not the rule. I can change it. I can still win.”
```

Hidden crying turn:

```text
“If I stop playing, everyone leaves.”
```

Spare:

```text
“Then... can we just sit here until the sun goes down?”
```

### 5.5. Hollow Treant sample

Intro:

```text
“Roots remember what mouths bury.”
```

Phase 2:

```text
“Do not ask me to speak. The name has teeth.”
```

Purify:

```text
“I am sorry. I am sorry. I remember now.”
```

---

## 6. NPC Reactivity System

### 6.1. Reactivity inputs

NPC can react to:

- Active Beast.
- Beast Affinity.
- Equipped Relic.
- Dreamland mood.
- Corruption.
- Purity.
- HiddenKnowledge.
- Previous choices.
- Dream History.
- Boss state.
- Ending route.

### 6.2. Reactivity priority

Recommended priority:

1. Required story line.
2. Hidden route condition.
3. Relic reaction.
4. Beast reaction.
5. Corruption/Purity reaction.
6. Generic line.

### 6.3. Conditional line data

```json
{
  "lineId": "shell_child_lantern_relic",
  "speaker": "Shell Child",
  "conditions": [
    {
      "type": "HAS_RELIC_TAG",
      "value": "lantern"
    }
  ],
  "text": "That light... it remembers the first song.",
  "setFlags": ["shell_child_recognized_lantern"]
}
```

### 6.4. Beast reaction examples

Light Beast:

```text
The Echo lowers its voice. Your Beast glows without fear.
```

Shadow Beast:

```text
The Echo watches your Beast’s shadow before answering.
```

Memory Beast:

```text
Your Beast tilts its head, as if hearing the name before it is spoken.
```

Time Beast:

```text
The NPC repeats the last word twice, but only your Beast seems to notice.
```

### 6.5. Relic reaction examples

Lantern Relic:

```text
The lantern in your pack answers with a warmer light.
```

Broken Toy Crown:

```text
The Echo Child stops laughing and stares at the crown.
```

Nightmare Thorn:

```text
The roots lean toward the thorn as if recognizing an old wound.
```

---

## 7. Dialogue Writing Rules

### 7.1. General rules

- Keep lines short.
- Avoid exposition dumps.
- Let imagery carry lore.
- Write with emotional subtext.
- Repeat motifs intentionally.
- Avoid modern slang unless character-specific.
- Do not over-explain mechanics in poetic lines.
- Separate mechanic tooltip from dialogue if needed.

### 7.2. Line length

Recommended:

- Normal line: 8–18 words.
- Important line: up to 25 words.
- Avoid long paragraphs in Daily Dream.

### 7.3. Good vs bad

Bad:

```text
You need to equip the Lantern of Forgotten Shores to unlock the hidden path that leads to the Hidden Ending.
```

Good:

```text
“Something here waits for a light that has touched this lake before.”
```

Then UI tooltip can say:

```text
A Relic in your inventory may react here.
```

### 7.4. NPC voice contrast

| NPC | Voice |
|---|---|
| Mira | Gentle, reflective, precise |
| Nox | Smooth, tempting, sharp |
| Luma | Nonverbal, expressive |
| Shell Child | Shy, watery, indirect |
| Echo Child | Playful, sad, simple |
| Apology Tree | Slow, heavy, fragmented |
| Timekeeper Echo | Precise, looping, regretful |
| Masked Noble | Polite, dangerous |

### 7.5. Emotional subtext

NPC should rarely state emotion directly.

Instead of:

```text
I am sad because I was forgotten.
```

Use:

```text
“I kept a seat open until the wood forgot the shape of waiting.”
```

### 7.6. Mechanical clarity

When needed, use separate system text.

Dialogue:

```text
“The water darkens when you reach for it.”
```

System text:

```text
This choice will increase Corruption.
```

---

## 8. NPC Data Template

```yaml
npc_id: ""
name: ""
npc_type: Guide | Echo | RealmSpirit | NightmareAgent | MemoryObject | BossNPC | EventNPC
importance: Core | RealmRecurring | DreamSpecific | Hidden | Event | Background
realm: ""
affinity: ""
alignment: Purify | Corrupt | Neutral | Hidden | Mixed
first_appearance: ""
function:
  - clue
  - choice
  - reward
  - tutorial
  - hidden_unlock
personality_keywords: []
voice_keywords: []
visual_motifs: []
audio_motifs: []
reactivity:
  beast_affinity: []
  relic_tags: []
  corruption: []
  purity: []
  hidden_knowledge: []
sample_lines: []
lore_notes: ""
implementation_notes: ""
```

---

## 9. NPC Dialogue Tree Template

```yaml
dialogue_tree_id: ""
npc_id: ""
context: ""
nodes:
  - id: "start"
    speaker: ""
    text: ""
    conditions: []
    responses:
      - response_id: ""
        text: ""
        requirements: []
        set_flags: []
        next: ""
  - id: ""
    speaker: ""
    text: ""
    set_flags: []
    rewards: []
    next: ""
```

### Example

```yaml
dialogue_tree_id: shell_child_lantern_01
npc_id: shell_child
context: Ocean Lantern Dream
nodes:
  - id: start
    speaker: Shell Child
    text: "The lantern is not lost. It is waiting."
    responses:
      - response_id: ask_waiting
        text: "Waiting for whom?"
        set_flags: [asked_lantern_waiting]
        next: waiting_answer
      - response_id: ask_song
        text: "What is that song?"
        set_flags: [asked_about_song]
        next: song_answer
  - id: song_answer
    speaker: Shell Child
    text: "The shell remembers it better than I do."
    set_flags: [shell_child_song_hint]
```

---

## 10. NPC Reward & Hidden Integration

### 10.1. NPC can grant

- Flag.
- Lore entry.
- Node reveal.
- Fragment.
- Temporary buff.
- Hidden clue.
- Ending condition.
- Relic reaction.
- Beast reaction.

### 10.2. NPC reward rule

NPC should rarely give large material reward directly.

Better rewards:

- Clue.
- Route.
- Lore.
- Hidden flag.
- Emotional context.

### 10.3. Hidden integration examples

Shell Child:

- Sets `shell_child_song_hint`.
- Reveals Shell Song puzzle if player asks correctly.

Echo Child:

- Sets `hollow_child_defend_hint`.
- Unlocks Hidden route with Carousel Ticket.

Apology Tree:

- Sets `learned_lost_name`.
- Weakens Hollow Treant boss.

Masked Noble:

- Sets `accepted_nightmare_bargain`.
- Opens Corrupt route.

---

## 11. Art & Audio NPC Brief Template

### 11.1. Art brief

```yaml
npc_name: ""
realm: ""
shape_language: ""
size: ""
materials: ""
colors: ""
face_expression: ""
animation_idle: ""
special_animation: ""
must_read_at_small_size: true
```

### 11.2. Portrait requirements

MVP NPC portrait should include:

- Neutral expression.
- Emotional expression if important.
- Corrupt/Hidden variant if needed.
- Small icon silhouette.

### 11.3. Audio brief

```yaml
npc_name: ""
voice_blip_style: ""
sfx_motifs: []
ambient_layer: ""
special_reaction_sfx: ""
```

### 11.4. Example: Shell Child

```yaml
shape_language: "small, curved, shell-like"
materials: "pearl, water, moonlight"
colors: "pale blue, silver, soft gold"
animation_idle: "hair floating, shell pulsing softly"
voice_blip_style: "soft shell chime, muffled water tone"
```

---

## 12. NPC Implementation Notes

### 12.1. Backend

NPC dialogue can be stored as:

- Dialogue tree config.
- Node content JSON.
- Localization keys.
- Conditional line rules.

### 12.2. Client

Unity needs:

- NPC portrait display.
- Dialogue box.
- Response options.
- Conditional line rendering.
- Flag sync.
- Dialogue history log.
- Skip/fast-forward.

### 12.3. Localization

Use keys:

```text
npc.mira.line.dream_not_monster
npc.shell_child.line.lantern_waiting
npc.nox.line.not_waste_pain
```

### 12.4. QA

Test:

- Correct line appears.
- Conditional line priority.
- Flags set.
- Hidden clue available.
- Dialogue not repeated incorrectly.
- Localization key exists.
- Text fits UI.

---

## 13. MVP NPC Roster

### 13.1. Core

| NPC | Role |
|---|---|
| Mira | Main guide / Archive |
| Nox | Corrupt temptation |
| Luma | Starter companion |

### 13.2. Forest

| NPC | Role |
|---|---|
| Apology Tree | Puzzle/clue |
| Lost Voice | Minor Echo |
| Silent Stag | Guardian |

### 13.3. Ocean

| NPC | Role |
|---|---|
| Shell Child | Hidden clue |
| Drowned Singer | Lore Echo |
| Abyss Lantern Keeper | Boss NPC |

### 13.4. Playground

| NPC | Role |
|---|---|
| Echo Child | Hidden clue |
| Toy Judge | Choice NPC |
| Hollow Child | Boss NPC |

### 13.5. Post-MVP

| NPC | Realm | Role |
|---|---|---|
| Timekeeper Echo | Clocktower | Time guide |
| Masked Noble | Nightmare Citadel | Corrupt gatekeeper |
| Archive Keeper | Dreamland | Lore system |
| Lantern Herald | Event | Seasonal |

---

## 14. NPC QA Checklist

- [ ] NPC has clear function.
- [ ] NPC has emotional purpose.
- [ ] Voice matches Bible.
- [ ] Realm motifs are present.
- [ ] Dialogue is short enough.
- [ ] Hidden clue is fair.
- [ ] Conditional lines work.
- [ ] Art brief exists.
- [ ] Audio brief exists.
- [ ] Localization keys exist.
- [ ] Flags and rewards are defined.
- [ ] NPC does not overexplain.
- [ ] NPC supports Dream ending.

---

## 15. Final NPC Statement

NPC trong Myth of Dreams là giọng nói của những thứ bị bỏ lại trong giấc mơ.

Một NPC tốt không chỉ nói với người chơi phải làm gì.  
Họ khiến người chơi tự hỏi:

- Người này đang giữ ký ức gì?
- Họ sợ điều gì?
- Họ muốn mình hiểu điều gì?
- Mình có nên giúp, khai thác hay lắng nghe?

Nếu Daily Dream là một câu chuyện ngắn, NPC là những câu nói khiến câu chuyện đó ở lại trong đầu người chơi sau khi Dream kết thúc.\n