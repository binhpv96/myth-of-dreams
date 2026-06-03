---
title: "Visual Direction"
description: "Myth of Dreams - Visual Direction"
date: "2026-06-03"
category: "visual"
order: 40
tags: ["visual","direction"]
---

**Version:** 1.0  
**Status:** Working Draft  
**Dùng cho:** Founder / Game Design / Art / UI-UX / Unity  
**Mục tiêu:** Chốt định hướng hình ảnh để team biết game nên nhìn như thế nào trước khi làm mockup, asset và vertical slice.

---

## 1. Quyết định visual tổng thể

### 1.1. Game presentation đề xuất

Myth of Dreams nên đi theo hướng:

```text
Hybrid 2D / 2.5D Stylized Mobile RPG
```

Cụ thể:

```text
2.5D Isometric Dreamland
+
2D Illustrated Daily Dream Exploration
+
2D Side-view Turn-based Combat
+
2D Hand-painted Card / Reward / UI
```

### 1.2. Art style đề xuất

```text
Soft hand-painted dream fantasy
```

Nói dễ hiểu:

- Mềm.
- Có chất truyện cổ tích.
- Có cảm giác mộng.
- Đẹp nhưng không quá realistic.
- Có chiều sâu cảm xúc.
- Không quá cute đơn giản.
- Không horror nặng.
- Không generic anime fantasy.

Từ khóa style:

```text
dreamlike
soft fantasy
storybook
hand-painted
emotional
mysterious
warm but melancholic
collectible
```

### 1.3. Quyết định quan trọng

| Hạng mục | Quyết định |
|---|---|
| Full 3D | Không làm trong MVP |
| Open world movement | Không làm trong MVP |
| Camera xoay tự do | Không làm trong MVP |
| Dreamland | 2.5D isometric |
| Exploration | 2D illustrated node-based |
| Combat | 2D side-view turn-based |
| Beast | 2D sprite + portrait/card |
| Building | 2.5D isometric asset |
| Relic | 2D icon/card |
| Reward | 2D collectible card reveal |
| NFT preview | 2D collectible card |

---

## 2. Vì sao chọn hướng 2D / 2.5D?

### 2.1. Phù hợp với scope startup

Myth of Dreams có nhiều hệ thống:

- Daily Dream.
- Exploration.
- Combat.
- Beast.
- Relic.
- Building.
- Dreamland.
- NPC.
- Boss.
- Reward.
- Metadata/NFT-ready.

Nếu làm full 3D, mỗi hệ thống sẽ kéo theo chi phí lớn:

- 3D model.
- Rig.
- Animation.
- Lighting.
- Shader.
- VFX 3D.
- Optimization mobile.
- Camera.
- Scene production.

Với team nhỏ, hướng 2D/2.5D giúp:

- Làm được nhiều content hơn.
- Dễ giữ chất lượng visual.
- Dễ iterate nhanh.
- Hợp mobile.
- Nhẹ performance.
- Hợp với collection/card/reward fantasy.
- Hợp với lore/dreamlike tone.

### 2.2. Phù hợp với bản sắc game

Myth of Dreams mạnh ở:

- Cảm xúc.
- Ký ức.
- Lore.
- Choice.
- Hidden Ending.
- Beast companion.
- Dreamland cá nhân.
- Reward có nguồn gốc.

Những yếu tố này cần **illustration đẹp và mood mạnh**, không bắt buộc cần full 3D.

### 2.3. Kết luận kỹ thuật/art

MVP nên tập trung vào:

```text
Art direction đẹp
+
Core loop mượt
+
Asset đủ dùng
+
Dream feeling rõ
```

Không nên tiêu tốn quá nhiều vào full 3D pipeline khi chưa chứng minh gameplay loop.

---

## 3. Visual identity

### 3.1. Cảm giác chính

Game phải tạo cảm giác:

```text
Bạn đang bước qua những giấc mơ có linh hồn.
```

Không phải:

```text
Bạn đang chạy một checklist nhiệm vụ.
```

### 3.2. Mood tổng thể

Mood nên là:

- Mộng.
- Dịu.
- Bí ẩn.
- Có chút buồn.
- Có sự ấm áp.
- Có cảm giác healing.
- Có một lớp dark fantasy nhẹ ở Nightmare/Corruption.
- Không quá tươi như casual cartoon.
- Không quá tối như horror.

### 3.3. Visual keywords

```text
soft light
floating particles
mist
glow
memory fragments
gentle gradients
painted texture
symbolic shapes
dream islands
storybook depth
```

### 3.4. Những thứ cần tránh

Tránh:

- 3D realistic.
- Low-poly generic.
- Anime gacha quá phổ biến.
- UI sci-fi cứng.
- Horror máu me.
- Pixel art nếu không có chủ đích.
- Cartoon quá trẻ con.
- Asset style không đồng nhất giữa Realm.
- Combat quá chibi nếu lore đang emotional.

---

## 4. Screen-by-screen visual direction

### 4.1. Dreamland

**Presentation:**

```text
2.5D Isometric
```

**Vai trò:**

Dreamland là “nhà” của người chơi. Đây là nơi người chơi quay lại sau mỗi Daily Dream.

Dreamland phải thể hiện:

- Tiến trình.
- Ký ức đã mang về.
- Building đã craft.
- Beast đang sống trong không gian đó.
- Mood Purity/Corruption.
- Cảm giác cá nhân hóa.

**Camera:**

```text
Fixed isometric camera
```

Không cần:

- Xoay camera.
- Zoom quá sâu.
- Free movement.
- Full 3D navigation.

**Layout cảm giác:**

```text
Một hòn đảo mộng nhìn chéo từ trên xuống.
Có mây, ánh sáng, mảnh ký ức trôi nhẹ.
Building đặt trên grid mềm, không quá máy móc.
Beast đi lại hoặc idle quanh các anchor.
```

**Visual elements:**

- Dream island.
- Floating edges.
- Soft mist.
- Memory particles.
- Building glow.
- Beast roaming.
- Daily Dream portal.
- Archive area.
- Relic pedestal.
- Dreamwell.

**MVP Dreamland asset:**

- 1 base island.
- 1 Daily Dream portal.
- 1 Dreamwell.
- 1 Memory Library.
- 1 Ocean Core hoặc Echo Garden.
- 1 Relic Pedestal placeholder.
- 1 Beast roaming: Luma.
- 1 background sky.
- UI buttons.

**Không làm trong MVP:**

- Multiple islands.
- Camera rotation.
- Complex terrain edit.
- Full decoration shop.
- Social visit.
- Advanced building upgrade visuals.
- Real-time multiplayer hub.

---

### 4.2. Daily Dream selection

**Presentation:**

```text
2D card / portal UI
```

**Vai trò:**

Màn hình này giới thiệu Daily Dream hôm nay.

Cần hiển thị:

- Dream title.
- Realm.
- Rarity.
- Estimated duration.
- Recommended affinity.
- Reward preview.
- Start button.
- Already completed/in progress state.

**Visual style:**

Daily Dream card nên giống:

```text
Một tấm thẻ giấc mơ / cánh cổng mộng.
```

Mỗi Realm có card mood riêng:

| Realm | Card feeling |
|---|---|
| Forest | Mist, leaves, stitched bark |
| Ocean | Water, lantern, shell glow |
| Playground | Chalk, sunset, toy motif |
| Clocktower | Gears, sand, brass |
| Nightmare | Thorn, black glass, red glow |
| Deep Dream | Stars, white void, cosmic door |

---

### 4.3. Exploration map

**Presentation:**

```text
2D node map
```

**Vai trò:**

Người chơi chọn node để đi qua Dream.

**Visual style:**

Node map nên giống:

```text
Một bản đồ giấc mơ nhỏ, các điểm ký ức nối với nhau bằng luồng sáng/mist.
```

**Node visuals:**

| Node Type | Visual icon |
|---|---|
| Start | Small portal / eye opening |
| Story | Scroll / memory shard |
| Choice | Forked path / split light |
| Combat | Beast claw / shadow mark |
| Elite | Darker combat icon |
| Puzzle | Symbol / rune |
| NPC | Echo face / speech glow |
| Hidden | Faint shimmer / moon mark |
| Boss | Large nightmare mark |
| Ending | Door / lantern / dawn |

**Node state:**

| State | Visual |
|---|---|
| Hidden | Không hiện |
| Revealed | Mờ, glow nhẹ |
| Available | Sáng, clickable |
| Active | Pulse animation |
| Completed | Soft check/glow |
| Locked | Icon khóa hoặc mist |
| Failed | Dim/red crack |

**MVP scope:**

- Node map tĩnh.
- Node positions từ config.
- Simple line/edge.
- Reveal animation đơn giản.
- Không cần map lớn hoặc scroll phức tạp.

---

### 4.4. Dream node scene

**Presentation:**

```text
2D illustrated scene
```

**Vai trò:**

Mỗi node là một cảnh nhỏ trong Dream.

Cấu trúc màn hình:

```text
Background illustration
NPC/echo portrait nếu có
Narrative text
Choice buttons
Relic/Beast reaction hint
```

**Visual style:**

- Background vẽ tay.
- Parallax nhẹ.
- Particle/mist nhẹ.
- Text box mềm.
- Choice button rõ.
- Tone icon cho Purify/Corrupt/Hidden.

**MVP asset strategy:**

Không cần mỗi node một background riêng.

Dùng:

```text
1 Realm background base
+
node overlay
+
lighting variant
+
small object illustration
```

Ví dụ Ocean:

- Base background: underwater lake.
- Overlay: lantern.
- Overlay: shell.
- Overlay: dark eel shadow.
- Overlay: hidden moonlight.

---

### 4.5. NPC dialogue

**Presentation:**

```text
2D portrait + dialogue box
```

**Vai trò:**

NPC giúp đưa lore, clue, emotional context.

**Visual style:**

- Portrait painterly.
- Expression nhẹ.
- Không cần full body animation.
- Có small idle effect nếu quan trọng.
- Dialogue box mềm, dễ đọc.

**MVP portrait requirement:**

Mỗi NPC quan trọng cần:

- 1 neutral portrait.
- 1 emotional/alternate portrait nếu cần.
- 1 small icon/silhouette.

NPC MVP:

- Mira.
- Nox.
- Shell Child.
- Echo Child.
- Apology Tree.
- Luma reaction icon.
- 3 boss portraits hoặc silhouettes.

---

### 4.6. Combat

**Presentation:**

```text
2D side-view turn-based combat
```

**Layout đề xuất:**

```text
Enemy/Boss bên phải
Beast/player bên trái
Background theo Realm
HP/status trên nhân vật
Skill buttons phía dưới
Turn/status info phía trên hoặc cạnh dưới
```

**Vì sao side-view?**

- Dễ hiểu.
- Dễ đọc trên mobile.
- Dễ làm VFX.
- Dễ reuse background.
- Dễ mở rộng Beast/enemy.
- Không cần 3D rig.

**Combat visual priority:**

MVP cần:

- Idle animation.
- Attack animation đơn giản.
- Hit animation.
- Death/defeat animation đơn giản.
- Skill VFX.
- Status effect icon.
- Boss phase feedback.

**Combat background:**

| Realm | Combat background |
|---|---|
| Forest | Misty grove |
| Ocean | Underwater lake |
| Playground | Empty playground sunset |

**Boss:**

Boss nên có:

- Silhouette mạnh.
- Size lớn hơn enemy thường.
- Phase visual change nhẹ.
- Special VFX.
- Defeat/spare visual.

---

### 4.7. Beast visual

**Presentation:**

```text
2D sprite + portrait/card
```

Beast cần có 2 dạng visual:

| Dạng | Dùng ở đâu |
|---|---|
| Sprite | Combat, Dreamland roaming |
| Portrait/Card | Profile, reward, inventory, metadata/NFT preview |

**MVP animation:**

Mỗi Beast nên có:

- Idle.
- Attack.
- Hit.
- Victory hoặc happy.
- Optional Dreamland idle.

Không cần:

- Walk 8 hướng.
- Full skeletal rig phức tạp.
- Evolution animation dài.
- 3D model.

**Beast style:**

Beast nên:

- Có silhouette dễ nhận diện.
- Mang motif Realm.
- Không quá generic.
- Có charm/attachment.
- Có rarity visual nhẹ.

Ví dụ:

| Beast | Visual motif |
|---|---|
| Luma | Moonlight fox, soft tail glow |
| Abyss Serpent | Deep water, lantern eyes |
| Whisper Owl | Leaves, stitched feather |
| Paper Dragon | Toy paper, sunset fold |
| Glass Turtle | Shell mirror, water ripple |

---

### 4.8. Relic visual

**Presentation:**

```text
2D icon/card
```

Relic là vật phẩm lore + gameplay.

Relic visual nên rõ:

- Hình dạng.
- Realm.
- Rarity.
- Emotional origin.

**MVP requirement:**

Mỗi Relic cần:

- Icon nhỏ.
- Card art hoặc enlarged illustration.
- Rarity frame.
- Optional glow/effect.

**Relic card structure:**

```text
Relic art
Name
Rarity
Realm
Effect summary
Origin line
```

---

### 4.9. Building visual

**Presentation:**

```text
2.5D isometric asset
```

Building là tiến trình nhìn thấy được trong Dreamland.

Building phải có:

- Isometric perspective.
- Footprint rõ.
- Readable silhouette.
- Realm motif.
- Small idle effect nếu quan trọng.

**MVP Building asset:**

| Building | Visual direction |
|---|---|
| Dreamwell | Central glowing well |
| Memory Library | Small archive with floating pages |
| Light Tower | Soft lighthouse/crystal tower |
| Ocean Core | Small water pool/lantern pond |
| Echo Garden | Flowers/toys/echo particles |
| Relic Pedestal | Display platform |

**Không làm trong MVP:**

- 4-level visual upgrade.
- Multiple skin variants.
- Interior view.
- Complex placement animation.

---

### 4.10. Reward screen

**Presentation:**

```text
2D collectible reveal
```

Reward screen phải làm người chơi cảm thấy:

```text
Mình đã mang thứ này về từ Dream.
```

Không chỉ là:

```text
+5 fragment
```

**Reward visual structure:**

```text
Dream ending title
Short ending result
Reward cards
Origin metadata preview
Continue to Dreamland
```

**Reward card cần có:**

- Icon/art.
- Name.
- Type.
- Rarity.
- Quantity nếu là material.
- Origin nếu là Beast/Relic/Building.
- New tag.

**Hidden reward:**

Hidden reward cần visual đặc biệt:

- Moonlight glow.
- Unique card frame.
- Small hidden symbol.
- Subtle animation.

---

### 4.11. Inventory / Collection

**Presentation:**

```text
2D card grid
```

UI cần hỗ trợ:

- Beast list.
- Relic list.
- Building list.
- Material list.
- Filter theo Realm.
- Filter theo rarity.
- Sort theo newest/power/rarity.

Visual style:

```text
Một archive của những thứ đã mang về từ Dream.
```

---

### 4.12. Metadata / NFT preview

**Presentation:**

```text
2D collectible card
```

MVP chỉ cần preview, chưa cần mint thật.

Card nên hiển thị:

- Item art.
- Item type.
- Rarity.
- Origin Dream.
- Origin Realm.
- Ending.
- Key choice.
- Birth date.
- Lore quote.
- Mint status.

Visual tone:

```text
Một thẻ ký ức / dream provenance card.
```

---

## 5. Camera direction

### 5.1. Dreamland camera

```text
Fixed isometric
```

Gợi ý:

- Góc nhìn khoảng 30–45 độ.
- Không xoay camera.
- Có thể zoom nhẹ.
- Pan nhẹ nếu map lớn hơn sau MVP.
- MVP có thể camera cố định hoàn toàn.

### 5.2. Exploration camera

```text
Static 2D UI camera
```

Có thể dùng:

- Parallax nhẹ.
- Fade transition.
- Node reveal animation.
- Background slow drift.

### 5.3. Combat camera

```text
Fixed side-view
```

Có thể thêm:

- Shake nhẹ khi hit.
- Zoom nhẹ khi boss skill.
- Slow flash khi hidden hook.
- Không cần 3D camera.

---

## 6. Realm visual direction

### 6.1. Forest of Lost Voices

**Mood:**

```text
Silent, misty, regretful, healing
```

**Palette:**

| Loại | Màu |
|---|---|
| Primary | Moss green, deep teal |
| Secondary | Bark brown, ink blue |
| Accent | Soft gold, apology white |
| Corrupt | Purple rot, black root, red thread |

**Motifs:**

- Trees.
- Roots.
- Stitched mouths.
- Leaves shaped like letters.
- Threads.
- Bells.
- Fog.
- Names under bark.

**Lighting:**

- Soft filtered light.
- Misty shafts.
- Gentle glow on names/letters.

**Avoid:**

- Jungle quá rậm.
- Horror body imagery quá mạnh.
- Forest generic fantasy.

---

### 6.2. Ocean of Memories

**Mood:**

```text
Deep, longing, reflective, melancholic
```

**Palette:**

| Loại | Màu |
|---|---|
| Primary | Deep blue, teal, indigo |
| Secondary | Pearl white, silver |
| Accent | Lantern gold, moonlight |
| Corrupt | Black water, violet abyss, red coral |

**Motifs:**

- Water.
- Lantern.
- Shell.
- Mirror tide.
- Pearl.
- Sunken door.
- Whale shadow.
- Floating hair.
- Glass fish.

**Lighting:**

- Underwater glow.
- Lantern pools.
- Rippling caustics.
- Soft blue haze.

**Avoid:**

- Ocean vui nhộn tropical.
- Sci-fi underwater.
- Quá tối không đọc được UI.

---

### 6.3. Childhood Playground

**Mood:**

```text
Nostalgic, warm, lonely, bittersweet
```

**Palette:**

| Loại | Màu |
|---|---|
| Primary | Sunset orange, warm yellow, pastel pink |
| Secondary | Chalk white, toy blue, faded red |
| Corrupt | Dirty crimson, deep purple, broken black |

**Motifs:**

- Carousel.
- Chalk.
- Toy crown.
- Swing.
- Paper dragon.
- Music box.
- Cardboard castle.
- Marbles.
- Broken plush.

**Lighting:**

- Sunset glow.
- Long shadows.
- Warm but slightly empty.
- Toy sparkle.

**Avoid:**

- Quá cute.
- Kindergarten UI quá trẻ con.
- Horror doll cliché quá nặng.

---

### 6.4. Clocktower of Time

Post-MVP.

**Mood:**

```text
Regret, repetition, frozen time
```

**Palette:**

- Bronze.
- Dust gold.
- Dark teal.
- Clock face white.
- Rust red corruption.

**Motifs:**

- Gears.
- Hourglass.
- Clock hands.
- Bells.
- Dust.
- Looping stairs.
- Broken minute key.

---

### 6.5. Nightmare Citadel

Post-MVP / advanced.

**Mood:**

```text
Elegant fear, controlled darkness, temptation
```

**Palette:**

- Black.
- Deep violet.
- Crimson.
- Dark silver.
- Poison gold.

**Motifs:**

- Thorns.
- Crowns.
- Masks.
- Red glass.
- Chains.
- Contracts.
- Locked gates.
- Velvet shadows.

Nightmare nên giống:

```text
Nỗi sợ đã học cách mặc áo quyền lực.
```

---

### 6.6. Deep Dream

Post-MVP / story milestone.

**Mood:**

```text
Cosmic, origin, strange, beautiful
```

**Palette:**

- Void black.
- Star white.
- Cosmic violet.
- Dreamborn gold.
- Impossible blue.

**Motifs:**

- Stars.
- Doors.
- Floating islands.
- Ink constellations.
- White void.
- Giant sleeping silhouettes.
- Cosmic archive.

---

## 7. UI direction

### 7.1. UI tone

UI nên có cảm giác:

```text
Dream archive + storybook + soft fantasy
```

Không nên:

- Sci-fi HUD.
- Dark crypto dashboard.
- Too casual cartoon.
- Quá nhiều border cứng.

### 7.2. UI shape language

Dùng:

- Rounded corners.
- Soft panels.
- Gentle glow.
- Paper/card texture nhẹ.
- Icon symbolic.
- Clear hierarchy.

Tránh:

- Sharp metallic UI.
- Neon heavy.
- Too many gradients.
- Text quá nhỏ.

### 7.3. Typography

Cần 2 nhóm font:

**Display font** dùng cho:

- Title.
- Dream name.
- Realm name.
- Ending title.

Yêu cầu:

- Fantasy nhẹ.
- Dễ đọc.
- Không quá ornate.

**Body font** dùng cho:

- Dialogue.
- Description.
- System text.
- Button.

Yêu cầu:

- Rất dễ đọc trên mobile.
- Hỗ trợ tiếng Việt tốt.
- Không lỗi dấu.

### 7.4. Icon direction

Icon nên:

- Đơn giản.
- Dễ đọc ở size nhỏ.
- Có silhouette rõ.
- Đồng bộ với Realm.
- Không quá chi tiết.

Icon groups:

- Affinity.
- Rarity.
- Node type.
- Material type.
- Status effect.
- Reward type.
- Building category.

### 7.5. Rarity visual

Rarity nên thể hiện bằng:

- Frame.
- Glow.
- Small symbol.
- Color accent.

Không chỉ dựa vào màu, vì accessibility.

| Rarity | Visual |
|---|---|
| Common | Simple frame |
| Rare | Soft glow |
| Epic | Ornate frame + particles |
| Legendary | Animated shimmer |
| Mythic | Unique frame + symbol |

---

## 8. Animation direction

### 8.1. Nguyên tắc animation

Animation trong MVP nên:

- Nhẹ.
- Có cảm xúc.
- Không quá tốn production.
- Ưu tiên những điểm người chơi nhìn nhiều.

Ưu tiên animation cho:

1. Dreamland ambience.
2. Beast idle.
3. Combat attack/hit.
4. Reward reveal.
5. Hidden reveal.
6. Boss phase.
7. Choice feedback.

### 8.2. Dreamland animation

MVP cần:

- Clouds/mist drift.
- Building glow.
- Portal idle.
- Luma idle/walk short loop.
- Particle floating.

Không cần:

- Complex pathfinding.
- Full day/night cycle.
- Weather system.
- Camera cinematic.

### 8.3. Combat animation

MVP cần:

- Idle loop.
- Attack anticipation.
- Attack hit.
- Hit reaction.
- Defeat.
- Skill VFX.
- Status effect pulse.

Không cần:

- Combo animation dài.
- Full frame-by-frame cho mọi skill.
- 3D particle heavy.

### 8.4. UI animation

MVP cần:

- Button feedback.
- Panel transition.
- Card reveal.
- Reward pop.
- Hidden node reveal.
- Ending screen fade.

Không cần:

- Long cutscene.
- Over-animated UI.
- Animation làm chậm flow.

---

## 9. Asset production scope MVP

### 9.1. Dreamland assets

| Asset | Số lượng MVP |
|---|---:|
| Base island | 1 |
| Background sky | 1 |
| Daily Dream portal | 1 |
| Dreamwell | 1 |
| Memory Library | 1 |
| Ocean Core | 1 |
| Echo Garden | 1 |
| Relic Pedestal | 1 |
| Small decoration | 3–5 |
| Beast roaming sprite | 1–3 |

### 9.2. Realm backgrounds

| Realm | Background cần |
|---|---:|
| Forest | 2–3 |
| Ocean | 2–3 |
| Playground | 2–3 |

Mỗi Realm nên có:

- Exploration background.
- Combat background.
- Optional hidden/boss variant.

### 9.3. Beast assets

MVP target:

```text
12–20 Beast
```

Nhưng visual production nên chia:

| Tier | Số lượng | Chất lượng |
|---|---:|---|
| Hero Beast | 3–5 | Polish cao |
| Standard Beast | 7–10 | Đủ combat + card |
| Placeholder Beast | 3–5 | Có thể dùng tạm |

Hero Beast MVP:

- Luma.
- Abyss Serpent.
- Whisper Owl.
- Paper Dragon.
- Silent Stag hoặc Glass Turtle.

### 9.4. Enemy assets

MVP target:

```text
20–30 enemy
```

Nhưng có thể reuse variant:

- Base enemy.
- Color/Realm variant.
- Elite variant.
- Nightmare variant.

Ưu tiên:

| Type | Số lượng |
|---|---:|
| Normal enemy base | 9–12 |
| Variant | 6–10 |
| Elite | 3–5 |
| Boss | 3 |

### 9.5. Boss assets

MVP cần 3 boss chính:

| Boss | Realm |
|---|---|
| Hollow Treant | Forest |
| Abyss Lantern Keeper | Ocean |
| Hollow Child | Playground |

Mỗi boss cần:

- Large sprite.
- Idle.
- Attack.
- Hit.
- Phase indicator.
- Defeat/spare visual.
- Portrait/silhouette.

### 9.6. Relic assets

MVP target:

```text
10–15 Relics
```

Mỗi Relic cần:

- Icon.
- Card art hoặc enlarged art.
- Rarity frame.

### 9.7. Building assets

MVP target:

```text
8–10 Buildings
```

Mỗi Building cần:

- Isometric art.
- Footprint info.
- Simple idle glow nếu quan trọng.
- Icon/card.

### 9.8. UI assets

Cần:

- Button set.
- Panel set.
- Card frame.
- Rarity frames.
- Node icons.
- Affinity icons.
- Material icons.
- Status icons.
- Reward reveal effects.
- Loading screen.
- Basic HUD.

---

## 10. Art pipeline đề xuất

### 10.1. Pipeline MVP

```text
Concept sketch
  ↓
Style review
  ↓
Final painted asset
  ↓
Sprite slicing / export
  ↓
Unity import
  ↓
Prefab setup
  ↓
Animation/VFX setup
  ↓
In-game review
```

### 10.2. Export format

| Asset | Format |
|---|---|
| UI/Icon | PNG/WebP |
| Sprite | PNG/WebP |
| Background | PNG/WebP |
| Animation frames | PNG sequence / Spine nếu có |
| Source file | PSD/Procreate/Krita |
| Vector icon nếu có | SVG |

### 10.3. Naming convention

```text
realm_assettype_name_variant
```

Ví dụ:

```text
ocean_bg_underwater_lake_01
forest_enemy_whisper_moth_idle
playground_building_echo_garden
ui_icon_affinity_light
relic_lantern_forgotten_shores_card
beast_luma_combat_idle
```

### 10.4. Folder structure đề xuất

```text
Art/
  Concept/
  Source/
  Export/
    UI/
    Icons/
    Backgrounds/
    Characters/
    Beasts/
    Enemies/
    Bosses/
    Buildings/
    Relics/
    VFX/
Unity/
  ArtImported/
  Prefabs/
  Animations/
```

### 10.5. Asset review checklist

Mỗi asset trước khi đưa vào Unity cần check:

- Có đúng style không?
- Có đúng Realm không?
- Silhouette rõ không?
- Đọc được ở mobile size không?
- Rarity có rõ không?
- Có quá nhiều detail không?
- Có hỗ trợ animation không?
- Tên file đúng convention không?
- Có source file không?
- Có export đúng size không?

---

## 11. Technical art notes cho Unity

### 11.1. Render approach

MVP có thể dùng:

```text
Unity 2D Renderer / URP
```

Dreamland:

- Isometric tile/grid hoặc object placement.
- Sprite sorting theo Y.
- Sorting layer rõ.

Combat:

- 2D sprite.
- Particle/VFX 2D.
- Background parallax nhẹ.

UI:

- Unity UI Toolkit hoặc uGUI.
- MVP có thể dùng uGUI cho nhanh nếu team quen.

### 11.2. Sorting layer gợi ý

```text
Background
Environment
Buildings
Characters
VFX_Back
VFX_Front
UI_Back
UI
UI_Front
```

### 11.3. Sprite size

Cần thống nhất pixel/unit sau khi có mockup.

MVP chưa cần chốt ngay, nhưng nên có rule:

```text
Beast combat sprite: readable trên màn hình mobile
Building: readable trong Dreamland zoom mặc định
Icon: readable ở 64x64
Card art: đẹp ở 512px+
```

### 11.4. Performance

Ưu tiên:

- Texture atlas.
- Nén texture.
- Không dùng quá nhiều transparent overdraw.
- Hạn chế particle dày.
- Reuse backgrounds.
- Load asset theo screen.
- Dùng Addressables nếu content tăng.

---

## 12. Reference direction

### 12.1. Reference nên tìm

Tìm reference theo nhóm:

**Dreamland:**

```text
isometric fantasy island
cozy magical island
dream garden isometric
storybook isometric village
```

**Exploration:**

```text
storybook fantasy background
dreamlike forest illustration
underwater fantasy lantern illustration
melancholic playground illustration
```

**Combat:**

```text
2D side view turn based RPG battle
painterly creature battle
mobile RPG side battle UI
```

**Card / Reward:**

```text
fantasy collectible card UI
storybook item card
magical relic card
creature collection card design
```

### 12.2. Reference không nên copy

Không copy style trực tiếp từ:

- Pokémon.
- Genshin.
- Hollow Knight.
- Sky.
- Slay the Spire.
- AFK Arena.
- NFT projects.

Chỉ dùng để học:

- Mood.
- Readability.
- Composition.
- UI hierarchy.
- Production scope.

---

## 13. Mockup cần làm tiếp theo

Trước khi production asset lớn, cần làm 3 mockup.

### 13.1. Mockup 1 — Dreamland

Cần có:

- 2.5D isometric island.
- Luma roaming hoặc idle.
- Dreamwell.
- Memory Library.
- Daily Dream portal.
- UI nút chính.

Output:

```text
1 Figma screen hoặc 1 concept image
```

### 13.2. Mockup 2 — Daily Dream Node

Cần có:

- 2D illustrated background.
- NPC portrait.
- Story text.
- 3 choice buttons.
- Beast/Relic reaction hint.
- Tone icon Purify/Corrupt/Hidden.

Output:

```text
1 Figma screen hoặc 1 concept image
```

### 13.3. Mockup 3 — Combat

Cần có:

- Beast bên trái.
- Enemy/Boss bên phải.
- HP/status.
- Skill buttons.
- Realm background.
- Turn/phase indicator.

Output:

```text
1 Figma screen hoặc 1 concept image
```

---

## 14. Vertical slice art test

Sau mockup, nên làm vertical slice art test.

### 14.1. Scope

```text
1 Dreamland scene
1 Daily Dream node scene
1 Combat scene
1 Beast: Luma
1 Enemy: Drowned Echo
1 Boss: Abyss Lantern Keeper
1 Relic card
1 Reward screen
```

### 14.2. Mục tiêu

Vertical slice art test cần trả lời:

- Game có đúng vibe không?
- 2D/2.5D có phù hợp không?
- Beast có đủ attachment không?
- Dreamland có muốn quay lại không?
- Combat có dễ đọc không?
- Reward có cảm giác meaningful không?
- UI có đọc tốt trên mobile không?

### 14.3. Nếu vertical slice không đạt

Nếu chưa đạt, điều chỉnh:

- Palette.
- UI density.
- Character silhouette.
- Camera angle.
- Background contrast.
- Card frame.
- Animation intensity.

Không nên build tiếp quá nhiều asset khi style chưa ổn.

---

## 15. MVP visual cut rules

Nếu thiếu thời gian, cắt theo thứ tự:

1. Extra decoration.
2. Extra Building variants.
3. Extra Relic card art.
4. Extra Beast animation.
5. Extra exploration backgrounds.
6. Dreamland mood variants.
7. Boss alternate phase art.
8. NFT card polish.
9. Hidden special VFX.
10. Additional Realm visual variants.

Không cắt:

- Dreamland base.
- Luma.
- Daily Dream portal.
- 3 Realm backgrounds.
- Combat readability.
- Reward screen.
- Beast/enemy silhouettes.
- Basic UI frame.
- Rarity visual.
- Hidden reveal feedback.

---

## 16. Art tasks cho Roadmap

### Phase 0 / Foundation

| Task | Output |
|---|---|
| Visual Direction | Visual_Direction.md |
| Art moodboard | Moodboard link |
| 3 key screen mockups | Figma/concept |
| Realm palette draft | Palette sheet |
| UI style tile | UI style tile |
| Asset naming convention | Naming guide |

### Phase 1 / Prototype

| Task | Output |
|---|---|
| Dreamland prototype art | Scene art |
| Luma prototype | Sprite + portrait |
| Drowned Echo prototype | Enemy sprite |
| Abyss Lantern Keeper rough | Boss concept |
| Combat UI rough | Unity/Figma |
| Reward card rough | UI card |

### Phase 2 / MVP Production

| Task | Output |
|---|---|
| 3 Realm background packs | Background assets |
| 12–20 Beast assets | Sprite/card |
| 20–30 enemy assets | Sprites |
| 3 boss assets | Boss sprite/animation |
| 10–15 Relic assets | Icons/cards |
| 8–10 Building assets | Isometric assets |
| UI kit | Buttons/panels/icons |
| VFX pack | Combat/reward/hidden |

---

## 17. Final visual decision

Chốt hướng visual cho Myth of Dreams MVP:

```text
Hybrid 2D / 2.5D Stylized Mobile RPG
```

Chi tiết:

```text
Dreamland: 2.5D isometric
Exploration: 2D illustrated node-based
Combat: 2D side-view turn-based
Beast: 2D sprite + portrait/card
Building: 2.5D isometric
Relic/Reward/NFT Preview: 2D collectible card
Art Style: soft hand-painted dream fantasy
```

Đây là hướng phù hợp nhất với:

- Team nhỏ.
- Mobile MVP.
- Lore/dream fantasy.
- Beast collection.
- Dreamland progression.
- Daily Dream production.
- Metadata/NFT-ready item identity.

Mục tiêu không phải làm game “to nhất” về kỹ thuật hình ảnh.  
Mục tiêu là làm game có **vibe rõ, cảm xúc mạnh, production scope hợp lý và đủ đẹp để người chơi muốn quay lại Dreamland mỗi ngày**.\n