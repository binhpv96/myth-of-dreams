---
title: "NFT Metadata"
description: "Myth of Dreams - NFT Metadata"
date: "2026-06-03"
category: "technical"
order: 63
tags: ["technical","nft"]
---

**Version:** 1.0  
**Document Type:** System Design Document  
**Project:** Myth of Dreams  
**Related Docs:** GDD.md, lore_story_bible.md, dream_system.md, beast_system.md, relic_system.md, building_dreamland_system.md, economy_reward_system.md, technical_architecture.md  
**Owner:** Product / Game Design / Backend / Blockchain / Economy / Narrative  
**Status:** Draft for MVP & NFT Readiness Planning  

---

## 0. Mục đích tài liệu

Tài liệu này định nghĩa chuẩn **NFT Metadata & Ownership System** cho **Myth of Dreams**.

Mục tiêu của tài liệu:

- Chuẩn hóa metadata cho Beast, Relic, Building và Cosmetic.
- Đảm bảo mọi item quan trọng đều có nguồn gốc từ Dream Seed, Realm, Ending và key choice.
- Chuẩn bị cấu trúc dữ liệu để có thể mint NFT sau MVP.
- Phân biệt rõ off-chain item và on-chain NFT.
- Tránh pay-to-win.
- Định nghĩa marketplace readiness.
- Định nghĩa ownership, transfer, lock, listing và metadata update policy.
- Đảm bảo lore/provenance là giá trị cốt lõi của NFT, không chỉ là chỉ số combat.

Tài liệu này không bắt buộc team phải triển khai blockchain trong MVP. Ngược lại, khuyến nghị chính là:

> Build game-first, metadata-first, NFT-optional.

---

## 1. NFT Design Vision

### 1.1. NFT fantasy

Trong Myth of Dreams, NFT không nên là “ảnh đại diện có stat”. NFT là chứng nhận rằng một vật thể đã được sinh ra từ một giấc mơ cụ thể, trong một ngày cụ thể, thông qua lựa chọn cụ thể của một Dreamwalker.

Một Beast NFT không chỉ nói:

```text
Epic • Dragon • Light
```

Mà nên nói:

```text
Sinh ra từ “The Lantern Under the Lake”, trong Hidden Ending, khi Dreamwalker chọn lắng nghe tiếng hát dưới nước thay vì kéo ngọn đèn lên.
```

### 1.2. NFT design statement

NFT trong Myth of Dreams phải:

> Lưu giữ nguồn gốc, hành trình và dấu ấn cảm xúc của item, thay vì chỉ bán sức mạnh gameplay.

### 1.3. NFT pillars

#### Provenance First

Giá trị chính của NFT đến từ nguồn gốc:

- Dream nào?
- Ngày nào?
- Realm nào?
- Ending nào?
- Key choice nào?
- Rarity nào?
- Ai là người đầu tiên tạo ra nó?

#### Gameplay Fairness

NFT không được phá balance.

- PvE vẫn chơi được không cần NFT.
- PvP cần normalization hoặc restriction.
- Marketplace không được trở thành con đường bắt buộc để mạnh hơn.

#### Off-chain First

MVP vận hành off-chain.

Item trong game có:

- Internal ID.
- Metadata đầy đủ.
- Mint status.

Khi sẵn sàng, item có thể được mint thành NFT.

#### Dynamic Gameplay, Stable Provenance

Một số dữ liệu gameplay có thể thay đổi:

- Level.
- EXP.
- Equipped Relic.
- Placement.
- PvP rating.

Nhưng provenance nên ổn định:

- Origin Dream.
- Origin Seed.
- Origin Ending.
- Birth Date.
- Base visual traits.

#### Narrative Metadata

Metadata cần có chất lore. Một item NFT phải đọc được như một phần nhỏ của Story Bible.

---

## 2. NFT Scope

### 2.1. MVP scope

MVP không cần mint thật.

MVP nên có:

- Metadata schema chuẩn.
- Mint status field.
- Mint eligibility logic placeholder.
- Metadata preview UI.
- NFT card preview.
- Off-chain ownership.
- No real marketplace.
- No blockchain transaction.
- No token economy.

### 2.2. NFT-ready scope

Sau MVP hoặc soft launch:

- Metadata endpoint.
- NFT card generation.
- Mint eligibility validation.
- Wallet linking.
- Contract mapping.
- Mint pending state.
- Token ID storage.
- Optional testnet mint.

### 2.3. Full NFT scope

Post-MVP:

- Mainnet mint.
- Marketplace listing.
- Transfer ownership sync.
- NFT display page.
- On-chain/off-chain metadata policy.
- Dynamic metadata update policy.
- NFT event indexing.
- Trading restrictions.
- Royalty/fee logic.

### 2.4. Not recommended

Không khuyến nghị:

- Mint mọi fragment.
- Mint consumable.
- Mint temporary buff.
- Mint random low-value spam.
- Bắt buộc NFT để chơi core game.
- Play-to-earn token emission.
- Staking/yield mechanics.
- NFT stat advantage không cap.
- Paid gacha NFT.

---

## 3. Mintable Item Types

### 3.1. Candidate mintable types

| Type | Mintable? | Priority | Notes |
|---|---|---:|---|
| Beast | Yes | High | Strongest NFT candidate |
| Relic | Yes | Medium/High | Good provenance object |
| Building | Yes | Medium | Dreamland/showcase value |
| Cosmetic Skin | Yes | Medium | Safe for marketplace |
| Profile Badge | Yes | Low/Medium | Achievement/social |
| Dream Card | Optional | Low | Could be commemorative |
| Fragment | No for MVP | Low | Avoid supply spam |
| Consumable | No | None | Not suitable |
| Temporary Buff | No | None | Not suitable |

### 3.2. Beast NFT

Best candidate because Beast has:

- Combat role.
- Visual identity.
- Dreamland behavior.
- Origin metadata.
- Rarity.
- Collection value.
- Potential PvP/showcase value.

### 3.3. Relic NFT

Good candidate because Relic has:

- Object-based lore.
- Hidden interaction.
- Rarity.
- Origin story.
- Marketplace readability.

### 3.4. Building NFT

Good candidate if Dreamland social/showcase exists.

Building NFT value comes from:

- Visual.
- Dreamland decor.
- Bonus type, capped.
- Origin.
- Rarity.
- Event status.

### 3.5. Cosmetic NFT

Safest NFT category for avoiding pay-to-win.

Examples:

- Beast skin.
- Building skin.
- Dreamland aura.
- Profile frame.
- Card background.
- Seasonal decoration.

### 3.6. Fragment policy

Fragments should remain off-chain in MVP.

Reasons:

- Too many transactions.
- Too much supply.
- Harder balancing.
- Bad UX.
- High infra complexity.

Future option:

- Only special event fragments or commemorative shards, not core materials.

---

## 4. Ownership Model

### 4.1. Off-chain ownership

In MVP, all items are owned off-chain by user account.

Each item has:

- ownerId.
- itemId.
- itemType.
- templateId.
- metadata.
- mintStatus.

### 4.2. On-chain ownership

After mint:

- Smart contract owns token record.
- Backend maps tokenId to itemId.
- Wallet owns NFT.
- Game account must link wallet to use NFT.

### 4.3. Hybrid ownership

Recommended model:

```text
Off-chain item exists first
  ↓
Player optionally mints
  ↓
NFT token represents ownership/provenance
  ↓
Backend keeps gameplay state
  ↓
On-chain token maps to in-game item
```

### 4.4. Why hybrid?

Because game state changes frequently:

- Level changes.
- Relic equipped.
- Dreamland placement.
- PvP rating changes.
- Balance patches happen.

Keeping every change on-chain is inefficient and inflexible.

### 4.5. Ownership states

| State | Meaning |
|---|---|
| OffChainOwned | Normal game item |
| MintEligible | Item can be minted |
| MintPending | Mint transaction in progress |
| Minted | Token exists |
| Listed | Listed for sale |
| TransferPending | Transfer syncing |
| Transferred | Owner changed |
| Burned | Token burned |
| Frozen | Item locked due to dispute/error |

### 4.6. Item lock states

Items may be locked if:

- Equipped.
- Placed in Dreamland.
- Used in active Dream Run.
- Used in PvP defense/loadout.
- Listed on marketplace.
- Marked favorite/locked by player.
- Story-bound.
- Under review.

---

## 5. Mint Eligibility

### 5.1. General eligibility

An item can be minted if:

- Player owns it.
- Item is not temporary.
- Item has complete metadata.
- Item is not currently equipped/placed/listed.
- Item is not locked.
- Item is not story-bound unless allowed.
- Item meets rarity/level/event criteria.
- Item is not involved in active run or transaction.
- User has linked wallet.
- Minting feature is enabled.

### 5.2. Beast mint eligibility

Recommended Beast requirements:

- Rarity: Rare or above.
- Complete origin metadata.
- Level 10+ or max level for special mint class, optional.
- Not selected in active Dream run.
- Not in active PvP defense.
- Not locked/favorite unless player confirms unlock.
- Not starter Beast unless special account-bound mint policy exists.

### 5.3. Relic mint eligibility

Recommended Relic requirements:

- Rarity: Rare or above.
- Complete origin metadata.
- Not equipped.
- Not placed on Relic Pedestal.
- Not story-critical account-bound.
- Not consumed/upgrade material.

### 5.4. Building mint eligibility

Recommended Building requirements:

- Rarity: Rare or above.
- Complete origin metadata.
- Not placed in Dreamland, or auto-store before mint.
- Not account-bound story building.
- Not under upgrade.
- Not used as system unlock if transfer would break progression.

### 5.5. Cosmetic mint eligibility

Recommended Cosmetic requirements:

- Owned by player.
- Not temporary.
- Not promotional locked.
- Metadata complete.
- Optional limited edition rules.

### 5.6. Mint eligibility data

```json
{
  "itemId": "BEAST-000123",
  "itemType": "Beast",
  "mintEligible": true,
  "requirements": [
    { "type": "RARITY", "required": "Rare+", "met": true },
    { "type": "METADATA_COMPLETE", "met": true },
    { "type": "NOT_EQUIPPED_OR_ACTIVE", "met": true },
    { "type": "WALLET_LINKED", "met": false }
  ],
  "blockingReason": "Wallet not linked"
}
```

---

## 6. Metadata Philosophy

### 6.1. Metadata layers

Metadata should have three layers:

1. **Identity metadata** — What is this item?
2. **Provenance metadata** — Where did it come from?
3. **Gameplay metadata** — What does it do or represent in game?

### 6.2. Stable vs dynamic metadata

#### Stable metadata

Should not change after mint, except correction.

- Name at mint.
- Template.
- Species/type/category.
- Rarity at birth.
- Origin Dream.
- Origin Seed.
- Origin Realm.
- Origin Ending.
- Key Choice.
- Birth Date.
- Visual traits at mint.
- Lore quote.

#### Dynamic metadata

Can change off-chain/game profile.

- Level.
- EXP.
- Skill levels.
- Equipped Relic.
- Current owner display name.
- PvP rating.
- Dreamland placement.
- Building upgrade level.
- Active bonuses.

### 6.3. Metadata freeze policy

At mint, freeze:

- Provenance.
- Base visual traits.
- Rarity.
- Birth data.
- Lore quote.

Do not freeze:

- Balance values.
- Current combat stats.
- Temporary modifiers.
- Placement.

### 6.4. Metadata update policy

If metadata is on centralized server:

- Can update display fields.
- Must preserve provenance.
- Must log changes.
- Avoid changing rarity/origin after mint.

If metadata is decentralized/IPFS-like:

- Harder to update.
- Best for final/frozen card metadata.
- Dynamic game stats should be separate.

### 6.5. Recommendation

Use hybrid:

- Frozen NFT metadata for provenance.
- Off-chain game API for live gameplay state.

---

## 7. Universal Metadata Schema

### 7.1. Core metadata fields

Every mintable item should include:

```json
{
  "name": "Item Name",
  "description": "Short lore description.",
  "image": "https://...",
  "external_url": "https://...",
  "attributes": [],
  "game": "Myth of Dreams",
  "itemType": "Beast | Relic | Building | Cosmetic",
  "version": "1.0"
}
```

### 7.2. Myth of Dreams custom fields

```json
{
  "mythOfDreams": {
    "itemId": "BEAST-000123",
    "templateId": "abyss_serpent",
    "rarity": "Epic",
    "origin": {
      "dreamTitle": "The Lantern Under the Lake",
      "dreamSeed": "DREAM-2026-05-24-OCEAN-EPIC-001",
      "realm": "Ocean of Memories",
      "ending": "Hidden",
      "keyChoice": "listen_to_song",
      "birthDate": "2026-05-24"
    },
    "loreQuote": "It swims through memories too deep for daylight."
  }
}
```

### 7.3. Attributes format

Attributes should be marketplace-friendly.

```json
[
  { "trait_type": "Item Type", "value": "Beast" },
  { "trait_type": "Rarity", "value": "Epic" },
  { "trait_type": "Origin Realm", "value": "Ocean of Memories" },
  { "trait_type": "Origin Ending", "value": "Hidden" }
]
```

### 7.4. Attribute naming convention

Use consistent trait names:

- Item Type.
- Rarity.
- Origin Realm.
- Origin Dream.
- Origin Ending.
- Species.
- Affinity.
- Damage Type.
- Relic Type.
- Building Category.
- Visual Trait: Body.
- Visual Trait: Aura.
- Birth Date.
- Event.
- Purity State.

### 7.5. Description style

Description should be short, poetic and clear.

Good:

```text
Born from the Hidden Ending of The Lantern Under the Lake, this Abyss Serpent swims through memories too deep for daylight.
```

Bad:

```text
This is an Epic aquatic memory NFT with high stats and future utility.
```

---

## 8. Beast NFT Metadata

### 8.1. Required fields

Beast NFT metadata must include:

- Name.
- Beast template.
- Species.
- Affinity.
- Damage type.
- Rarity.
- Role.
- Origin Dream.
- Origin Seed.
- Origin Realm.
- Origin Ending.
- Key Choice.
- Birth Date.
- Visual traits.
- Lore quote.
- Image.
- Game item ID.
- Metadata version.

### 8.2. Optional fields

- Level at mint.
- Skill names.
- Dreamwalker title of minter.
- Event season.
- Generation.
- Bond level at mint.
- Mint number.
- Collection set.

### 8.3. Beast metadata example

```json
{
  "name": "Moonflare",
  "description": "Born from the Hidden Ending of The Lantern Under the Lake, Moonflare carries dawn across dreams that forgot the sky.",
  "image": "https://cdn.mythofdreams.io/nft/beasts/BEAST-000123.png",
  "external_url": "https://mythofdreams.io/item/BEAST-000123",
  "attributes": [
    { "trait_type": "Item Type", "value": "Beast" },
    { "trait_type": "Species", "value": "Dragon" },
    { "trait_type": "Affinity", "value": "Light" },
    { "trait_type": "Damage Type", "value": "Magic" },
    { "trait_type": "Rarity", "value": "Epic" },
    { "trait_type": "Origin Realm", "value": "Ocean of Memories" },
    { "trait_type": "Origin Ending", "value": "Hidden" },
    { "trait_type": "Body Trait", "value": "Pearl" },
    { "trait_type": "Aura Trait", "value": "Moonlight" }
  ],
  "mythOfDreams": {
    "itemId": "BEAST-000123",
    "templateId": "aurora_wyrm",
    "role": ["Magic Striker", "Support"],
    "origin": {
      "dreamTitle": "The Lantern Under the Lake",
      "dreamSeed": "DREAM-2026-05-24-OCEAN-EPIC-001",
      "realm": "Ocean of Memories",
      "ending": "Hidden",
      "keyChoice": "listen_to_song",
      "birthDate": "2026-05-24"
    },
    "visualTraits": {
      "body": "Pearl",
      "pattern": "Aurora",
      "horn": "Glass",
      "aura": "Moonlight"
    },
    "loreQuote": "It carries dawn across dreams that forgot the sky.",
    "metadataVersion": "1.0"
  }
}
```

### 8.4. Beast live gameplay profile

Live stats should be pulled from game API, not necessarily NFT metadata.

```json
{
  "itemId": "BEAST-000123",
  "level": 20,
  "exp": 12000,
  "skills": {
    "radiant_breath": 3,
    "aurora_wave": 2
  },
  "equippedRelicId": "RELIC-000456",
  "pvpRating": 1240
}
```

### 8.5. Beast transfer behavior

If Beast NFT transfers:

- Backend confirms wallet owner.
- Game item owner updates.
- Beast removed from old owner active loadouts.
- Beast removed from old Dreamland roaming list.
- Relic equipped to Beast must be handled.

Recommendation:

- Require Beast unequipped/no Relic before listing.
- Simpler and safer.

---

## 9. Relic NFT Metadata

### 9.1. Required fields

Relic NFT metadata must include:

- Name.
- Relic type.
- Rarity.
- Affinity.
- Purity state.
- Origin Realm.
- Origin Dream.
- Origin Ending.
- Key Choice.
- Effect summary.
- Lore quote.
- Image.
- Game item ID.
- Metadata version.

### 9.2. Relic metadata example

```json
{
  "name": "Lantern of Forgotten Shores",
  "description": "A lantern born from the Hidden Ending of The Lantern Under the Lake. It lights what still waits below.",
  "image": "https://cdn.mythofdreams.io/nft/relics/RELIC-000123.png",
  "external_url": "https://mythofdreams.io/item/RELIC-000123",
  "attributes": [
    { "trait_type": "Item Type", "value": "Relic" },
    { "trait_type": "Relic Type", "value": "Key Relic" },
    { "trait_type": "Rarity", "value": "Epic" },
    { "trait_type": "Affinity", "value": "Memory" },
    { "trait_type": "Purity State", "value": "Hidden" },
    { "trait_type": "Origin Realm", "value": "Ocean of Memories" },
    { "trait_type": "Origin Ending", "value": "Hidden" }
  ],
  "mythOfDreams": {
    "itemId": "RELIC-000123",
    "templateId": "lantern_of_forgotten_shores",
    "effectSummary": "+10% Memory damage; unlocks certain Ocean hidden paths.",
    "origin": {
      "dreamTitle": "The Lantern Under the Lake",
      "dreamSeed": "DREAM-2026-05-24-OCEAN-EPIC-001",
      "realm": "Ocean of Memories",
      "ending": "Hidden",
      "keyChoice": "listen_to_song",
      "birthDate": "2026-05-24"
    },
    "loreQuote": "It does not light the way forward. It lights what still waits below.",
    "metadataVersion": "1.0"
  }
}
```

### 9.3. Relic transfer behavior

If Relic NFT transfers:

- Must not be equipped.
- Must not be placed on Pedestal.
- Must not be in active run.
- Backend updates owner after confirmation.

---

## 10. Building NFT Metadata

### 10.1. Required fields

Building NFT metadata must include:

- Name.
- Building category.
- Rarity.
- Origin Realm.
- Affinity.
- Size.
- Bonus summary.
- Origin Dream.
- Origin Ending.
- Birth date.
- Visual variant.
- Lore quote.
- Image.
- Game item ID.
- Metadata version.

### 10.2. Building metadata example

```json
{
  "name": "Memory Library",
  "description": "A library that writes only what the heart refuses to forget.",
  "image": "https://cdn.mythofdreams.io/nft/buildings/BUILDING-000123.png",
  "external_url": "https://mythofdreams.io/item/BUILDING-000123",
  "attributes": [
    { "trait_type": "Item Type", "value": "Building" },
    { "trait_type": "Building Category", "value": "Core Utility" },
    { "trait_type": "Rarity", "value": "Rare" },
    { "trait_type": "Origin Realm", "value": "Forest of Lost Voices" },
    { "trait_type": "Origin Ending", "value": "Purify" },
    { "trait_type": "Size", "value": "3x2" }
  ],
  "mythOfDreams": {
    "itemId": "BUILDING-000123",
    "templateId": "memory_library",
    "bonusSummary": "+5% Beast EXP.",
    "origin": {
      "dreamTitle": "The Apology Tree",
      "dreamSeed": "DREAM-2026-05-20-FOREST-RARE-001",
      "realm": "Forest of Lost Voices",
      "ending": "Purify",
      "keyChoice": "spoke_the_lost_name",
      "birthDate": "2026-05-20"
    },
    "visualVariant": {
      "roof": "Blue Ink",
      "windows": "Glowing Pages"
    },
    "loreQuote": "A library that writes only what the heart refuses to forget.",
    "metadataVersion": "1.0"
  }
}
```

### 10.3. Building placement policy

Placement should not be part of NFT metadata.

Reason:

- Placement changes frequently.
- Placement is player layout state.
- NFT should represent object, not current grid coordinate.

### 10.4. Building transfer behavior

If Building NFT transfers:

- Building must be stored before listing.
- Backend removes from seller Dreamland layout.
- Buyer receives Building in inventory.
- Story-critical Buildings should not be tradable.

---

## 11. Cosmetic NFT Metadata

### 11.1. Cosmetic types

- Beast skin.
- Building skin.
- Dreamland aura.
- Profile frame.
- Card background.
- Emote.
- Title badge.
- Seasonal decoration.

### 11.2. Cosmetic metadata fields

- Name.
- Cosmetic type.
- Rarity.
- Event/season.
- Compatible item type.
- Visual theme.
- Lore quote.
- Image.

### 11.3. Cosmetic example

```json
{
  "name": "Festival Lantern Aura",
  "description": "A soft lantern glow from the Festival of Returning Lights.",
  "image": "https://cdn.mythofdreams.io/nft/cosmetics/COS-000123.png",
  "attributes": [
    { "trait_type": "Item Type", "value": "Cosmetic" },
    { "trait_type": "Cosmetic Type", "value": "Dreamland Aura" },
    { "trait_type": "Event", "value": "Festival of Returning Lights" },
    { "trait_type": "Rarity", "value": "Epic" }
  ],
  "mythOfDreams": {
    "itemId": "COS-000123",
    "templateId": "festival_lantern_aura",
    "loreQuote": "For one night, every lost road remembered how to shine.",
    "metadataVersion": "1.0"
  }
}
```

### 11.4. Cosmetic policy

Cosmetics are safest for open marketplace because:

- They do not break combat.
- They support expression.
- They carry event prestige.
- They can be scarce without harming gameplay.

---

## 12. NFT Image & Card System

### 12.1. Purpose

Each NFT needs a visual asset suitable for:

- Marketplace.
- Inventory.
- Social sharing.
- External profile.
- Collection gallery.

### 12.2. NFT image types

| Type | Use |
|---|---|
| Static PNG | MVP/initial |
| Animated GIF/WebM | Epic+ or later |
| Card render | Marketplace-friendly |
| Transparent asset | Game/editor use |
| Full profile image | Showcase |

### 12.3. Card components

NFT card should include:

- Item art.
- Rarity frame.
- Item type icon.
- Realm background.
- Affinity color.
- Origin Ending marker.
- Optional Dream Seed short code.
- Lore quote or short subtitle.

### 12.4. Card generation

Recommended:

- Use deterministic card template.
- Render server-side.
- Store generated image URL.
- Keep source art separate.

### 12.5. Card layout

```text
[ Rarity Frame ]
[ Item Art ]
[ Item Name ]
[ Type • Rarity ]
[ Realm Icon • Ending Icon ]
[ Short Lore Quote ]
```

### 12.6. Rarity frame direction

| Rarity | Frame |
|---|---|
| Common | Plain |
| Rare | Silver/soft glow |
| Epic | Purple/gold animated shine |
| Legendary | Gold/unique ornament |
| Dreamborn/Mythic | Unique cosmic frame |

### 12.7. Realm background direction

| Realm | Background |
|---|---|
| Forest | Misty trees, whisper leaves |
| Ocean | Deep water, lantern glow |
| Playground | Sunset, toys, chalk |
| Clocktower | Gears, broken clock |
| Citadel | Dark halls, crown/thorns |
| Deep Dream | Stars, void, archive light |

---

## 13. Smart Contract Requirements

### 13.1. Contract strategy

#### Option A — Separate contracts by item type

- Beast contract.
- Relic contract.
- Building contract.
- Cosmetic contract.

Pros:

- Clean separation.
- Easier marketplace filtering.
- Different rules per item type.

Cons:

- More deployment/maintenance.

#### Option B — One unified item contract

- One contract for all NFT items.
- itemType stored in metadata.

Pros:

- Simpler deployment.
- Unified collection.

Cons:

- Harder item-specific logic.

#### Recommendation

Start with **one unified contract** for early NFT phase, unless business/marketplace strategy needs separate collections.

### 13.2. Token standard

Use a common NFT standard appropriate for target chain.

If single unique items:

- ERC-721 style.

If multiple editions/cosmetics:

- ERC-1155 style.

Recommendation:

- ERC-721 style for Beast/Relic/Building unique items.
- ERC-1155 style may fit cosmetics/editions.

### 13.3. Contract functions

Minimum:

```text
mint(to, tokenURI)
ownerOf(tokenId)
tokenURI(tokenId)
transferFrom(from, to, tokenId)
safeTransferFrom(from, to, tokenId)
```

Optional:

```text
burn(tokenId)
setTokenURI(tokenId)
freezeMetadata(tokenId)
royaltyInfo(tokenId, salePrice)
```

### 13.4. Metadata mutability

| Policy | Pros | Cons |
|---|---|---|
| Fully mutable | Flexible | Lower trust |
| Frozen at mint | High trust | Less flexibility |
| Hybrid pointer | Balanced | More system complexity |

Recommendation:

- Freeze provenance.
- Keep live gameplay state off-chain.
- Allow image/metadata correction through admin only with audit logs.

### 13.5. Royalty

If royalties are used:

- Keep simple.
- Clearly disclose.
- Do not make game economy dependent on royalties.

### 13.6. Contract admin risk

Admin functions must be protected.

Use:

- Multisig.
- Role-based permissions.
- Audit logs.
- Testnet before mainnet.
- Emergency pause for mint/listing if needed.

---

## 14. Blockchain / Backend Sync

### 14.1. Sync problem

When NFT transfers on-chain, backend must reflect ownership.

### 14.2. Sync methods

| Method | Description |
|---|---|
| Webhook/indexer | Listen to events |
| Polling | Periodic chain check |
| User refresh | User triggers sync |
| Marketplace callback | If marketplace integrated |

Recommendation:

- Use indexer/webhook for production.
- Provide manual refresh for user.

### 14.3. Transfer sync flow

```text
NFT transfer event detected
  ↓
Backend validates tokenId mapping
  ↓
Old owner item removed/locked
  ↓
New wallet owner identified
  ↓
If wallet linked to account, item assigned
  ↓
If wallet unlinked, item in pending claim state
  ↓
Inventory updated
```

### 14.4. Pending claim state

If NFT transferred to wallet not linked to game account:

- Item exists on-chain.
- Backend stores pending owner wallet.
- User must link wallet to claim in game.

### 14.5. Ownership conflict

If off-chain owner and on-chain owner differ:

- On-chain owner should be source of truth for minted NFT.
- Backend should lock item until resolved.
- Provide sync/claim flow.

### 14.6. Active item transfer restriction

Before listing or transfer, item should be inactive:

- Beast not in active run.
- Relic not equipped.
- Building not placed.
- Cosmetic not locked by event.

Marketplace listing should enforce this via backend.

---

## 15. Marketplace Readiness

### 15.1. Marketplace goals

Marketplace should support:

- Viewing NFT item.
- Listing.
- Buying.
- Cancel listing.
- Ownership transfer.
- Metadata display.
- Rarity filtering.
- Origin filtering.

### 15.2. Marketplace filters

Important filters:

- Item Type.
- Rarity.
- Species.
- Affinity.
- Origin Realm.
- Origin Ending.
- Event.
- Visual trait.
- Mint date.
- Price.
- Level at mint, optional.

### 15.3. Marketplace item page

Should show:

- NFT image.
- Name.
- Type.
- Rarity.
- Lore description.
- Origin Dream.
- Origin Ending.
- Key Choice.
- Traits.
- Current live game state, if owner allows.
- Trading restrictions.
- Contract/token ID.

### 15.4. Listing requirements

Item can be listed if:

- Minted.
- Owned by user wallet.
- Not equipped/placed/active.
- Not locked.
- Not account-bound.
- Marketplace enabled.

### 15.5. Buying flow

```text
Buyer purchases NFT
  ↓
On-chain transfer
  ↓
Backend detects transfer
  ↓
Item owner updates
  ↓
Buyer sees item in inventory after wallet sync
```

### 15.6. Marketplace warning

Marketplace should not be required for normal progression.

Core gameplay must remain playable with earned off-chain items.

---

## 16. Pay-to-Win Prevention

### 16.1. Risk areas

NFT can become pay-to-win if:

- Strong combat items are freely tradable.
- PvP uses raw purchased power.
- Marketplace-only items are best-in-slot.
- Building bonuses stack uncapped.
- Rare Beast dominate all content.

### 16.2. Mitigation methods

#### PvP normalization

Normalize:

- Level.
- Stat ranges.
- Skill modifiers.
- Relic effects.

#### Bonus caps

Cap:

- Building reward bonus.
- Relic combat bonus.
- Drop bonus.
- Nightmare reward bonus.

#### Account-bound progression

Keep key progression items account-bound:

- Starter Beast.
- Core story Building.
- Required system unlocks.
- Critical quest Relics.

#### Sidegrade design

NFT items can be different, not strictly better.

#### Cosmetic-first marketplace

Prioritize:

- Skins.
- Frames.
- Auras.
- Dreamland decor.
- Event badges.

### 16.3. PvE fairness

PvE can allow ownership items to be useful, but:

- Content should be completable without marketplace.
- Earned items should remain viable.
- Difficulty scaling should not require NFT power.

### 16.4. PvP fairness

PvP should use:

- Brackets.
- Normalization.
- Restricted Relics.
- Separate PvP modifiers.
- Cosmetic rewards.

### 16.5. Economy fairness

Avoid:

- NFT staking rewards.
- Token yield.
- Paid lootbox advantage.
- Mandatory mint fees for progression.

---

## 17. Metadata Security & Integrity

### 17.1. Metadata integrity goals

Metadata should be:

- Accurate.
- Stable.
- Auditable.
- Hard to fake.
- Linked to real game event.

### 17.2. Origin proof

Each mintable item should link to:

- Internal item ID.
- User ID or creator account.
- Dream Seed ID.
- Run ID.
- Completion timestamp.
- Ending result.
- Reward transaction ID.

### 17.3. Metadata generation flow

```text
Item created in game
  ↓
Origin metadata saved
  ↓
Mint eligibility checked
  ↓
Metadata generated from authoritative DB
  ↓
NFT image generated
  ↓
Metadata URI created
  ↓
Mint transaction uses metadata URI
```

### 17.4. Anti-fraud checks

Before mint:

- Item exists.
- User owns item.
- Item not already minted.
- Metadata complete.
- Reward transaction valid.
- Item not duplicated.
- Item not locked/listed.
- Origin run completed validly.

### 17.5. Audit logs

Log:

- Metadata generation.
- Mint request.
- Mint completion.
- Metadata update.
- Transfer sync.
- Listing.
- Admin override.

### 17.6. Admin correction

If metadata bug occurs:

- Freeze trading if critical.
- Correct off-chain metadata.
- Publish correction log if necessary.
- Avoid changing provenance unless wrong due to bug.

---

## 18. Backend Data Model

### 18.1. nft_items

```sql
nft_item_id
item_id
item_type
owner_id
wallet_address
contract_address
token_id
chain_id
mint_status
metadata_uri
image_uri
metadata_hash
minted_at
listed_at
transferred_at
created_at
updated_at
```

### 18.2. nft_metadata_snapshots

```sql
snapshot_id
item_id
item_type
metadata_json
metadata_hash
image_uri
version
created_at
created_by
```

### 18.3. wallet_links

```sql
wallet_link_id
user_id
wallet_address
chain_id
verified
linked_at
last_synced_at
```

### 18.4. nft_events

```sql
event_id
event_type
item_id
token_id
contract_address
from_wallet
to_wallet
tx_hash
block_number
status
metadata_json
created_at
```

### 18.5. item_lock_states

```sql
item_id
item_type
lock_reason
locked_by
locked_at
expires_at
metadata_json
```

### 18.6. ownership mapping

For minted items:

```text
tokenId ↔ itemId ↔ current owner account/wallet
```

On-chain owner is authoritative for minted NFT ownership.

---

## 19. API Requirements

### 19.1. Wallet APIs

```text
POST /wallet/link
POST /wallet/verify
GET  /wallets
POST /wallet/sync
DELETE /wallet/unlink
```

### 19.2. Mint APIs

```text
GET  /items/{itemId}/mint-eligibility
POST /items/{itemId}/mint-preview
POST /items/{itemId}/mint
GET  /items/{itemId}/mint-status
```

### 19.3. Metadata APIs

```text
GET /metadata/{itemType}/{itemId}
GET /metadata/{itemType}/{itemId}/snapshot
GET /nft/{contractAddress}/{tokenId}/metadata
```

### 19.4. Marketplace APIs

```text
GET  /marketplace/items
GET  /marketplace/items/{tokenId}
POST /marketplace/list
POST /marketplace/cancel-listing
POST /marketplace/sync-purchase
```

### 19.5. Mint eligibility response

```json
{
  "itemId": "BEAST-000123",
  "itemType": "Beast",
  "eligible": false,
  "mintStatus": "NotMinted",
  "requirements": [
    { "name": "Rarity Rare+", "met": true },
    { "name": "Metadata Complete", "met": true },
    { "name": "Wallet Linked", "met": false }
  ],
  "blockingReasons": ["Wallet not linked"]
}
```

### 19.6. Mint preview response

```json
{
  "itemId": "BEAST-000123",
  "metadata": {},
  "imagePreviewUrl": "https://cdn.mythofdreams.io/previews/BEAST-000123.png",
  "estimatedFee": {
    "currency": "native",
    "amount": "0.000"
  },
  "warnings": [
    "Gameplay level changes are not stored directly in NFT metadata."
  ]
}
```

---

## 20. Client UX Requirements

### 20.1. NFT readiness in item profile

Item profile should show:

- Mint status.
- Eligibility.
- Origin metadata.
- NFT preview card.
- Wallet link state.
- Mint button, if available.
- Marketplace state, post-MVP.

### 20.2. Mint eligibility UI

Clear messages:

```text
Mint Eligible
This Beast can be minted as an NFT.
```

Or:

```text
Not Eligible
Reason: This Beast is currently equipped in an active Dream run.
```

### 20.3. Mint preview UI

Show:

- NFT card.
- Metadata summary.
- What is frozen.
- What remains dynamic.
- Fees/warnings.
- Confirm button.

### 20.4. Wallet linking UX

Must be simple:

1. Connect wallet.
2. Sign message.
3. Wallet linked.
4. Sync NFTs.

### 20.5. Marketplace UX

Item listing should show warning:

```text
Listed items cannot be used in Dream runs until listing is canceled.
```

### 20.6. Transfer UX

If player receives NFT:

```text
New NFT detected.
Claim it into your Dreamland inventory?
```

### 20.7. Avoid crypto jargon

Use player-friendly language.

Instead of:

```text
Your token metadata URI has been generated.
```

Use:

```text
Your item’s ownership record is ready.
```

---

## 21. NFT Analytics

### 21.1. Required events

```text
wallet_link_started
wallet_link_completed
wallet_sync_started
wallet_sync_completed
mint_eligibility_viewed
mint_preview_viewed
mint_started
mint_completed
mint_failed
metadata_generated
metadata_snapshot_created
nft_listed
nft_listing_cancelled
nft_transfer_detected
nft_claimed_to_account
marketplace_item_viewed
```

### 21.2. Event properties

```json
{
  "userId": "USER-001",
  "itemId": "BEAST-000123",
  "itemType": "Beast",
  "rarity": "Epic",
  "originRealm": "Ocean of Memories",
  "originEnding": "Hidden",
  "mintStatus": "Minted",
  "walletLinked": true,
  "chainId": "target-chain"
}
```

### 21.3. Key metrics

- Wallet link conversion.
- Mint eligibility rate.
- Mint conversion rate.
- Mint failure rate.
- Most minted item type.
- Minted rarity distribution.
- Marketplace listing rate.
- Transfer sync errors.
- NFT owner retention.
- NFT vs non-NFT player progression delta.
- Marketplace-driven power concentration.

### 21.4. Economy health metrics

Track:

- % high rarity items minted.
- % traded items used in PvP.
- Marketplace concentration by whale accounts.
- Price distribution.
- NFT items with high win-rate.
- Bonus cap effectiveness.

---

## 22. QA Test Plan

### 22.1. Metadata tests

- Beast metadata complete.
- Relic metadata complete.
- Building metadata complete.
- Attributes correct.
- Origin Seed correct.
- Ending correct.
- Key Choice correct.
- Lore quote correct.
- Image URL valid.
- Metadata version included.

### 22.2. Mint eligibility tests

- Eligible item passes.
- Missing metadata fails.
- Equipped Beast fails.
- Placed Building fails.
- Equipped Relic fails.
- Story-bound item fails.
- Already minted item fails.
- Wallet not linked fails.

### 22.3. Mint flow tests

- Mint preview generated.
- Metadata snapshot saved.
- Mint status becomes MintPending.
- Mint success updates token ID.
- Mint failure returns to safe state.
- Duplicate mint request rejected.
- Transaction hash stored.

### 22.4. Wallet tests

- Wallet link success.
- Wallet signature verification.
- Wallet unlink rules.
- Sync minted NFTs.
- Pending claim works.
- Wrong wallet cannot claim.

### 22.5. Transfer tests

- On-chain transfer updates backend.
- Old owner loses game access.
- New owner gains access.
- Unlinked wallet creates pending claim.
- Listed item cannot be used.
- Transferred Beast removed from loadout.

### 22.6. Marketplace tests

- Item listing works.
- Listing locked item fails.
- Listing equipped item fails.
- Cancel listing works.
- Purchase sync works.
- Metadata displayed correctly.

### 22.7. Security tests

- Cannot mint unowned item.
- Cannot spoof metadata.
- Cannot mint duplicate token for same item.
- Cannot bypass lock state.
- Cannot claim NFT without wallet ownership.
- Admin correction logged.

---

## 23. Security & Compliance Considerations

### 23.1. User safety

Avoid presenting NFT as investment.

Do not promise:

- Profit.
- Yield.
- Appreciation.
- Guaranteed resale.
- Play-to-earn income.

### 23.2. Product messaging

Use language:

- Ownership.
- Provenance.
- Collectibility.
- Optional mint.
- Digital collectible.

Avoid:

- Investment.
- Passive income.
- Earn money.
- Financial return.

### 23.3. Age/platform policy

NFT features may affect platform approval.

Recommendations:

- Keep NFT optional.
- Allow gameplay without wallet.
- Hide or disable NFT features on platforms where required.
- Provide web-based wallet/marketplace if app store rules require.

### 23.4. Regional compliance

NFT/marketplace availability may depend on region.

Need:

- Feature flags.
- Terms of service.
- Tax/legal review.
- Marketplace compliance review.

### 23.5. Custodial vs non-custodial

Decision required:

- Non-custodial wallet connection.
- Custodial wallet account.
- Hybrid.

MVP can avoid this by not minting.

---

## 24. MVP Implementation Plan

### Sprint 1 — Metadata Foundation

Deliver:

- Universal metadata schema.
- Origin metadata for Beast/Relic/Building.
- Metadata preview endpoint.

### Sprint 2 — Mint Status Fields

Deliver:

- mintStatus in Beast/Relic/Building.
- Mint eligibility placeholder.
- Item profile display.

### Sprint 3 — NFT Card Preview

Deliver:

- Card layout.
- Static image preview.
- Rarity frame.
- Realm background.
- Metadata summary.

### Sprint 4 — Eligibility Logic

Deliver:

- Eligibility requirements.
- Lock state checks.
- Wallet placeholder state.
- Blocking reasons.

### Sprint 5 — Wallet Prep

Deliver:

- Wallet link mock flow.
- Wallet table.
- Signature verification design.
- No real mint needed.

### Sprint 6 — Metadata Snapshot

Deliver:

- Snapshot table.
- Metadata hash.
- Metadata versioning.
- Audit log.

### Sprint 7 — Testnet Mint Optional

Deliver if ready:

- Test contract.
- Mint pending flow.
- Token ID mapping.
- Sync event.

### Sprint 8 — Marketplace Readiness

Deliver:

- Listing state model.
- Transfer sync design.
- Marketplace item page mock.
- No real trading required yet.

---

## 25. Open Design Questions

1. Should Beast, Relic and Building use one contract or separate contracts?
2. Should metadata be fully frozen at mint or hybrid dynamic?
3. Should starter Beast be mintable?
4. Should story-critical Buildings be tradable?
5. Should Relics be unequipped before mint/listing?
6. Should Building placement be included in NFT metadata?
7. Should PvP allow traded NFT Beast without normalization?
8. Should cosmetic NFTs launch before gameplay NFTs?
9. Should fragments ever be on-chain?
10. Should minting require item level or only rarity?

Recommended answers:

1. Start unified or separate only if marketplace strategy requires.
2. Hybrid: freeze provenance, keep gameplay dynamic.
3. Not initially, unless account-bound commemorative mint.
4. No.
5. Yes.
6. No.
7. No, PvP must normalize.
8. Yes, cosmetics are safest.
9. No for MVP.
10. Require rarity and complete metadata; level requirement optional.

---

## 26. Glossary

| Term | Meaning |
|---|---|
| NFT | Non-fungible token representing digital ownership |
| Mint | Create NFT on-chain |
| Metadata | Data describing NFT |
| Provenance | Origin/history of item |
| Token ID | On-chain identifier |
| Contract | Smart contract managing NFT |
| Wallet | User blockchain account |
| Mint Status | Current NFT state of item |
| Metadata URI | URL pointing to NFT metadata |
| Snapshot | Frozen metadata record |
| Marketplace | Place to list/buy/sell NFT |
| On-chain | Stored/verified on blockchain |
| Off-chain | Stored in game backend |
| Hybrid Metadata | Frozen NFT data + live game data |
| Lock State | Restriction preventing transfer/listing |
| Pending Claim | NFT owned by wallet not linked to game account |

---

## 27. Final NFT Metadata Statement

NFT trong **Myth of Dreams** không nên được xây như một lớp kiếm tiền đặt lên trên game. Nó phải là lớp ghi nhớ.

Một NFT tốt của Myth of Dreams phải trả lời được:

- Nó là gì?
- Nó đến từ giấc mơ nào?
- Người chơi đã chọn gì để tạo ra nó?
- Nó mang cảm xúc gì?
- Vì sao nó đáng được lưu giữ?

Nếu Beast là sinh vật đi cùng người chơi, Relic là ký ức người chơi mang theo, Building là nơi ký ức ấy ở lại, thì NFT là chứng nhận rằng:

> Giấc mơ đó đã từng tồn tại, và người chơi này là người đã mang nó trở về.\n