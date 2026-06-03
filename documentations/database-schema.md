---
title: "Database Schema"
description: "Myth of Dreams - Database Schema"
date: "2026-06-03"
category: "technical"
order: 62
tags: ["technical","database"]
---

**Version:** 1.0  
**Status:** Working Draft  
**Dùng cho:** Backend / Database / ERD / Spring Boot Implementation  
**Database:** PostgreSQL  
**Backend target:** Java + Spring Boot  

---

## 2. Quy ước chung

## 2.1. Naming convention

Dùng:

```text
snake_case
```

Ví dụ:

```text
user_id
dream_seed_id
created_at
metadata_json
```

---

## 2.2. Primary key

Khuyến nghị dùng UUID cho hầu hết bảng:

```sql
id UUID PRIMARY KEY
```

Nhưng để dễ đọc và rõ domain, mỗi bảng nên đặt tên PK theo entity:

```text
user_id
run_id
beast_id
relic_id
building_id
```

---

## 2.3. Timestamp field

Hầu hết bảng nên có:

| Field | Type | Ghi chú |
|---|---|---|
| created_at | timestamptz | Thời điểm tạo |
| updated_at | timestamptz | Thời điểm cập nhật |
| deleted_at | timestamptz nullable | Optional soft delete |

MVP có thể chưa cần `deleted_at` cho mọi bảng.

---

## 2.4. Status field

Các bảng runtime hoặc content thường có `status`.

Ví dụ:

```text
active
disabled
draft
expired
completed
failed
abandoned
```

---

## 2.5. JSONB

Dùng JSONB cho data linh hoạt:

- Node states.
- Dream flags.
- Choices.
- Metadata.
- Config.
- Drop table entries.
- Skill effects.
- Boss phases.
- Visual traits.

Không nên dùng JSONB cho field cần query nhiều như:

- user_id.
- status.
- rarity.
- realm_id.
- item_type.
- created_at.

---


---

## 3.1. `users`

Lưu account chính của người chơi.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| user_id | uuid | PK | ID người chơi |
| auth_provider | varchar(32) |  | guest, email, google, a  pple |
| provider_user_id | varchar(255) |  | ID từ device/provider |
| email | varchar(255) nullable |  | Sau này bind email |
| status | varchar(32) |  | active, banned, deleted |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
users.user_id → user_profiles.user_id
users.user_id → dreamlands.user_id
users.user_id → dream_runs.user_id
users.user_id → dream_history.user_id
users.user_id → inventory_materials.user_id
users.user_id → user_beasts.user_id
users.user_id → user_relics.user_id
users.user_id → user_buildings.user_id
users.user_id → economy_transactions.user_id
users.user_id → item_metadata.user_id
```

### Index / Constraint

```text
PK: users(user_id)
UNIQUE: users(auth_provider, provider_user_id)
INDEX: users(email)
INDEX: users(status)
```

---

## 3.2. `user_profiles`

Thông tin profile trong game.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| user_id | uuid | PK, FK | FK → users.user_id |
| display_name | varchar(64) |  | Tên hiển thị |
| avatar_id | varchar(128) nullable |  | Avatar hiện tại |
| dreamwalker_rank | int |  | Rank/progression tổng |
| purity | int |  | Tổng Purity |
| corruption | int |  | Tổng Corruption |
| hidden_knowledge | int |  | Tổng HiddenKnowledge |
| last_login_at | timestamptz nullable |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
user_profiles.user_id → users.user_id
```

### Index / Constraint

```text
PK: user_profiles(user_id)
FK: user_profiles.user_id → users.user_id
```

---


---

## 4.1. `realms`

Lưu các Realm chính.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| realm_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | forest_lost_voices |
| name | varchar(128) |  | Forest of Lost Voices |
| description | text nullable |  | Mô tả lore |
| primary_affinity | varchar(64) nullable |  | Memory, Light... |
| visual_theme_json | jsonb nullable |  | Color/motif |
| audio_theme_json | jsonb nullable |  | Audio motif |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
realms.realm_id → dream_templates.realm_id
realms.realm_id → dream_map_templates.realm_id
realms.realm_id → dream_seeds.realm_id
realms.realm_id → enemy_templates.realm_id
realms.realm_id → boss_templates.realm_id
realms.realm_id → beast_templates.realm_id
realms.realm_id → relic_templates.realm_id
realms.realm_id → building_templates.realm_id
realms.realm_id → material_templates.realm_id
```

### Index / Constraint

```text
PK: realms(realm_id)
UNIQUE: realms(code)
INDEX: realms(status)
```

---

## 4.2. `dream_templates`

Template gốc của một Dream.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| dream_template_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | ocean_lantern_01 |
| title | varchar(255) |  | Tên Dream |
| realm_id | uuid | FK | FK → realms.realm_id |
| rarity | varchar(32) |  | Common, Rare, Epic... |
| emotional_theme | varchar(128) nullable |  | longing, regret... |
| intro_text | text nullable |  | Intro text |
| dream_tags_json | jsonb nullable |  | Tags |
| status | varchar(32) |  | draft, active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
dream_templates.realm_id → realms.realm_id
dream_templates.dream_template_id → dream_seeds.dream_template_id
```

### Index / Constraint

```text
PK: dream_templates(dream_template_id)
UNIQUE: dream_templates(code)
INDEX: dream_templates(realm_id)
INDEX: dream_templates(status)
INDEX: dream_templates(rarity)
```

---

## 4.3. `dream_map_templates`

Lưu node map template.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| map_template_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | ocean_lantern_map_01 |
| realm_id | uuid | FK | FK → realms.realm_id |
| nodes_json | jsonb |  | List node |
| edges_json | jsonb |  | Kết nối node |
| initial_nodes_json | jsonb nullable |  | Node mở đầu |
| version | varchar(64) |  | Config version |
| status | varchar(32) |  | draft, active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
dream_map_templates.realm_id → realms.realm_id
dream_map_templates.map_template_id → dream_seeds.map_template_id
```

### Index / Constraint

```text
PK: dream_map_templates(map_template_id)
UNIQUE: dream_map_templates(code)
INDEX: dream_map_templates(realm_id)
INDEX: dream_map_templates(status)
```

### Ghi chú

MVP nên lưu map bằng JSONB để dễ iterate:

```text
nodes_json
edges_json
```

Sau MVP nếu cần query node nhiều hơn thì tách thành:

```text
dream_node_templates
dream_map_edges
```

---

## 4.4. `ending_rule_sets`

Luật xác định ending.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| ending_rule_set_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | ocean_lantern_endings_01 |
| rules_json | jsonb |  | Rule + priority |
| version | varchar(64) |  |  |
| status | varchar(32) |  | draft, active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
ending_rule_sets.ending_rule_set_id → dream_seeds.ending_rule_set_id
```

### Index / Constraint

```text
PK: ending_rule_sets(ending_rule_set_id)
UNIQUE: ending_rule_sets(code)
INDEX: ending_rule_sets(status)
```

### Ví dụ `rules_json`

```json
[
  {
    "ending": "Hidden",
    "priority": 100,
    "requirements": [
      { "type": "FLAG", "key": "heard_lantern_song" },
      { "type": "FLAG", "key": "boss_spared" }
    ]
  },
  {
    "ending": "Corrupt",
    "priority": 50,
    "requirements": [
      { "type": "CORRUPTION_DELTA_AT_LEAST", "value": 5 }
    ]
  }
]
```

---


---

## 5.1. `dream_seeds`

Lưu Daily Dream được publish mỗi ngày.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| dream_seed_id | uuid | PK | ID Daily Dream |
| dream_template_id | uuid | FK | FK → dream_templates.dream_template_id |
| date_key | date |  | Ngày active |
| title | varchar(255) |  | Snapshot title |
| realm_id | uuid | FK | FK → realms.realm_id |
| rarity | varchar(32) |  | Common, Rare, Epic... |
| map_template_id | uuid | FK | FK → dream_map_templates.map_template_id |
| enemy_pool_id | uuid nullable |  | Optional, nếu có enemy_pools |
| boss_template_id | uuid nullable | FK | FK → boss_templates.boss_template_id |
| ending_rule_set_id | uuid | FK | FK → ending_rule_sets.ending_rule_set_id |
| loot_table_id | uuid | FK | FK → drop_tables.drop_table_id |
| status | varchar(32) |  | draft, active, expired, disabled |
| starts_at | timestamptz |  |  |
| expires_at | timestamptz |  |  |
| metadata_json | jsonb nullable |  | Tags, recommended affinity |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
dream_seeds.dream_template_id → dream_templates.dream_template_id
dream_seeds.realm_id → realms.realm_id
dream_seeds.map_template_id → dream_map_templates.map_template_id
dream_seeds.boss_template_id → boss_templates.boss_template_id
dream_seeds.ending_rule_set_id → ending_rule_sets.ending_rule_set_id
dream_seeds.loot_table_id → drop_tables.drop_table_id
dream_seeds.dream_seed_id → dream_runs.dream_seed_id
dream_seeds.dream_seed_id → dream_history.dream_seed_id
```

### Index / Constraint

```text
PK: dream_seeds(dream_seed_id)
INDEX: dream_seeds(date_key)
INDEX: dream_seeds(status)
INDEX: dream_seeds(realm_id)
INDEX: dream_seeds(rarity)
INDEX: dream_seeds(starts_at, expires_at)
```

Nếu mỗi ngày chỉ có 1 Daily Dream active global:

```text
PARTIAL UNIQUE INDEX: dream_seeds(date_key) WHERE status = 'active'
```

---

## 5.2. `dream_runs`

Lưu một lần người chơi bước vào Dream.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| run_id | uuid | PK |  |
| user_id | uuid | FK | FK → users.user_id |
| dream_seed_id | uuid | FK | FK → dream_seeds.dream_seed_id |
| selected_beast_id | uuid | FK | FK → user_beasts.beast_id |
| status | varchar(32) |  | in_progress, completed, failed, abandoned |
| current_node_id | varchar(128) nullable |  | Node hiện tại |
| node_states_json | jsonb |  | Trạng thái từng node |
| flags_json | jsonb |  | Flag đã set |
| choices_json | jsonb |  | Choice đã chọn |
| staged_rewards_json | jsonb nullable |  | Reward tạm |
| purity_delta | int |  | Tăng trong run |
| corruption_delta | int |  | Tăng trong run |
| hidden_knowledge_delta | int |  | Tăng trong run |
| ending | varchar(32) nullable |  | Purify, Corrupt, Hidden |
| started_at | timestamptz |  |  |
| completed_at | timestamptz nullable |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
dream_runs.user_id → users.user_id
dream_runs.dream_seed_id → dream_seeds.dream_seed_id
dream_runs.selected_beast_id → user_beasts.beast_id
dream_runs.run_id → exploration_actions.run_id
dream_runs.run_id → battle_instances.run_id
dream_runs.run_id → dream_history.run_id
dream_runs.run_id → item_metadata.origin_run_id
```

### Index / Constraint

```text
PK: dream_runs(run_id)
INDEX: dream_runs(user_id)
INDEX: dream_runs(dream_seed_id)
INDEX: dream_runs(status)
INDEX: dream_runs(user_id, status)
INDEX: dream_runs(created_at)
```

Có thể thêm rule tránh nhiều active run cùng Dream:

```text
UNIQUE(user_id, dream_seed_id) WHERE status = 'in_progress'
```

---

## 5.3. `exploration_actions`

Log từng action người chơi làm trong Dream.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| action_id | uuid | PK |  |
| run_id | uuid | FK | FK → dream_runs.run_id |
| user_id | uuid | FK | FK → users.user_id |
| node_id | varchar(128) |  | Node ID trong map config |
| action_type | varchar(64) |  | enter_node, choice, puzzle, reward |
| choice_id | varchar(128) nullable |  | Nếu action là choice |
| result_json | jsonb nullable |  | Kết quả action |
| created_at | timestamptz |  |  |

### Quan hệ

```text
exploration_actions.run_id → dream_runs.run_id
exploration_actions.user_id → users.user_id
```

### Index / Constraint

```text
PK: exploration_actions(action_id)
INDEX: exploration_actions(run_id)
INDEX: exploration_actions(user_id)
INDEX: exploration_actions(node_id)
INDEX: exploration_actions(created_at)
```

---

## 5.4. `dream_history`

Lưu lịch sử Dream đã hoàn thành.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| dream_history_id | uuid | PK |  |
| user_id | uuid | FK | FK → users.user_id |
| run_id | uuid | FK | FK → dream_runs.run_id |
| dream_seed_id | uuid | FK | FK → dream_seeds.dream_seed_id |
| dream_title | varchar(255) |  | Snapshot title |
| realm_id | uuid | FK | FK → realms.realm_id |
| rarity | varchar(32) |  | Snapshot rarity |
| ending | varchar(32) |  | Purify, Corrupt, Hidden |
| key_choice | varchar(128) nullable |  | Choice quan trọng |
| hidden_discovered | boolean |  |  |
| reward_summary_json | jsonb nullable |  | Reward đã nhận |
| completed_at | timestamptz |  |  |
| created_at | timestamptz |  |  |

### Quan hệ

```text
dream_history.user_id → users.user_id
dream_history.run_id → dream_runs.run_id
dream_history.dream_seed_id → dream_seeds.dream_seed_id
dream_history.realm_id → realms.realm_id
```

### Index / Constraint

```text
PK: dream_history(dream_history_id)
UNIQUE: dream_history(run_id)
INDEX: dream_history(user_id)
INDEX: dream_history(dream_seed_id)
INDEX: dream_history(realm_id)
INDEX: dream_history(ending)
INDEX: dream_history(completed_at)
```

---


---

## 6.1. `skill_templates`

Template skill dùng cho Beast/enemy.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| skill_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | light_spark |
| name | varchar(128) |  |  |
| description | text nullable |  |  |
| affinity | varchar(64) nullable |  | Light, Memory... |
| damage_type | varchar(32) |  | physical, magic, true |
| target_type | varchar(32) |  | single, all, self |
| effect_json | jsonb |  | Damage/effect formula |
| cooldown | int |  |  |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

Skill thường được tham chiếu trong JSON:

```text
beast_templates.skill_ids_json
enemy_templates.skill_ids_json
```

MVP không bắt buộc tạo bảng join.

### Index / Constraint

```text
PK: skill_templates(skill_id)
UNIQUE: skill_templates(code)
INDEX: skill_templates(status)
INDEX: skill_templates(affinity)
```

---

## 6.2. `enemy_templates`

Template enemy.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| enemy_template_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | drowned_echo |
| name | varchar(128) |  |  |
| realm_id | uuid | FK | FK → realms.realm_id |
| affinity | varchar(64) |  | Memory, Shadow... |
| role | varchar(64) |  | attacker, defender, disruptor |
| rarity | varchar(32) |  |  |
| base_stats_json | jsonb |  | HP, ATK, DEF... |
| skill_ids_json | jsonb |  | List skill |
| behavior_json | jsonb nullable |  | AI behavior |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
enemy_templates.realm_id → realms.realm_id
```

### Index / Constraint

```text
PK: enemy_templates(enemy_template_id)
UNIQUE: enemy_templates(code)
INDEX: enemy_templates(realm_id)
INDEX: enemy_templates(affinity)
INDEX: enemy_templates(role)
INDEX: enemy_templates(status)
```

---

## 6.3. `boss_templates`

Template boss.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| boss_template_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | abyss_lantern_keeper |
| name | varchar(128) |  |  |
| realm_id | uuid | FK | FK → realms.realm_id |
| affinity | varchar(64) |  |  |
| role | varchar(64) |  | boss |
| base_stats_json | jsonb |  |  |
| phases_json | jsonb |  | Boss phase |
| hidden_hooks_json | jsonb nullable |  | Hidden combat hook |
| dialogue_json | jsonb nullable |  | Intro/phase/defeat lines |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
boss_templates.realm_id → realms.realm_id
boss_templates.boss_template_id → dream_seeds.boss_template_id
```

### Index / Constraint

```text
PK: boss_templates(boss_template_id)
UNIQUE: boss_templates(code)
INDEX: boss_templates(realm_id)
INDEX: boss_templates(affinity)
INDEX: boss_templates(status)
```

---

## 6.4. `battle_instances`

Một battle cụ thể trong Dream Run.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| battle_id | uuid | PK |  |
| run_id | uuid | FK | FK → dream_runs.run_id |
| user_id | uuid | FK | FK → users.user_id |
| node_id | varchar(128) |  | Combat node |
| battle_type | varchar(32) |  | normal, elite, boss |
| battle_seed | bigint |  | Seed để validate |
| player_snapshot_json | jsonb |  | Beast stat snapshot |
| enemy_snapshot_json | jsonb |  | Enemy snapshot |
| status | varchar(32) |  | started, completed, failed |
| result | varchar(32) nullable |  | victory, defeat |
| result_json | jsonb nullable |  | Submit result |
| started_at | timestamptz |  |  |
| completed_at | timestamptz nullable |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
battle_instances.run_id → dream_runs.run_id
battle_instances.user_id → users.user_id
```

### Index / Constraint

```text
PK: battle_instances(battle_id)
INDEX: battle_instances(run_id)
INDEX: battle_instances(user_id)
INDEX: battle_instances(status)
INDEX: battle_instances(node_id)
INDEX: battle_instances(created_at)
```

Có thể chống battle trùng trong cùng node:

```text
UNIQUE(run_id, node_id) WHERE status IN ('started', 'completed')
```

---


---

## 7.1. `beast_templates`

Template Beast.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| beast_template_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | abyss_serpent |
| name | varchar(128) |  |  |
| species | varchar(64) |  | serpent, fox, dragon... |
| realm_id | uuid nullable | FK | FK → realms.realm_id |
| affinity | varchar(64) |  | Light, Memory... |
| damage_type | varchar(32) |  | physical, magic |
| role_json | jsonb |  | striker, support... |
| rarity | varchar(32) |  | Common/Rare/Epic |
| base_stats_json | jsonb |  |  |
| growth_json | jsonb nullable |  | Stat growth |
| skill_ids_json | jsonb |  | List skill |
| visual_traits_json | jsonb nullable |  | Trait pool |
| lore_text | text nullable |  |  |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
beast_templates.realm_id → realms.realm_id
beast_templates.beast_template_id → user_beasts.beast_template_id
```

### Index / Constraint

```text
PK: beast_templates(beast_template_id)
UNIQUE: beast_templates(code)
INDEX: beast_templates(realm_id)
INDEX: beast_templates(affinity)
INDEX: beast_templates(rarity)
INDEX: beast_templates(status)
```

---

## 7.2. `user_beasts`

Beast mà người chơi sở hữu.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| beast_id | uuid | PK | Instance ID |
| user_id | uuid | FK | FK → users.user_id |
| beast_template_id | uuid | FK | FK → beast_templates.beast_template_id |
| name | varchar(128) |  | Custom name |
| level | int |  |  |
| exp | bigint |  |  |
| rarity | varchar(32) |  | Snapshot rarity |
| current_hp | int nullable |  | Nếu cần persistence |
| stat_snapshot_json | jsonb nullable |  | Optional cached stats |
| skill_levels_json | jsonb nullable |  | Skill level |
| equipped_relic_id | uuid nullable | FK | FK → user_relics.relic_id, optional |
| origin_metadata_id | uuid nullable | FK | FK → item_metadata.metadata_id |
| mint_status | varchar(32) |  | not_minted, eligible, minted |
| locked | boolean |  | Không cho transfer/craft/sell |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
user_beasts.user_id → users.user_id
user_beasts.beast_template_id → beast_templates.beast_template_id
user_beasts.equipped_relic_id → user_relics.relic_id
user_beasts.origin_metadata_id → item_metadata.metadata_id
user_beasts.beast_id → dream_runs.selected_beast_id
```

### Index / Constraint

```text
PK: user_beasts(beast_id)
INDEX: user_beasts(user_id)
INDEX: user_beasts(beast_template_id)
INDEX: user_beasts(rarity)
INDEX: user_beasts(mint_status)
INDEX: user_beasts(origin_metadata_id)
```

### Ghi chú

Quan hệ Beast ↔ Relic có thể gây vòng FK.  
Khi implement thực tế, có thể chỉ lưu FK ở một bên:

- Option A: `user_beasts.equipped_relic_id`
- Option B: `user_relics.equipped_by_beast_id`

MVP nên chọn **một bên duy nhất** để tránh phức tạp.

Khuyến nghị:

```text
Dùng user_relics.equipped_by_beast_id
```

Vậy field `user_beasts.equipped_relic_id` có thể bỏ khỏi migration thật.

---


---

## 8.1. `relic_templates`

Template Relic.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| relic_template_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | lantern_forgotten_shores |
| name | varchar(128) |  |  |
| realm_id | uuid nullable | FK | FK → realms.realm_id |
| relic_type | varchar(64) |  | combat, key, utility |
| affinity | varchar(64) nullable |  |  |
| rarity | varchar(32) |  |  |
| effect_json | jsonb |  | Stat/effect |
| hidden_tags_json | jsonb nullable |  | Tag mở hidden path |
| lore_text | text nullable |  |  |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
relic_templates.realm_id → realms.realm_id
relic_templates.relic_template_id → user_relics.relic_template_id
```

### Index / Constraint

```text
PK: relic_templates(relic_template_id)
UNIQUE: relic_templates(code)
INDEX: relic_templates(realm_id)
INDEX: relic_templates(relic_type)
INDEX: relic_templates(rarity)
INDEX: relic_templates(status)
```

---

## 8.2. `user_relics`

Relic người chơi sở hữu.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| relic_id | uuid | PK | Instance ID |
| user_id | uuid | FK | FK → users.user_id |
| relic_template_id | uuid | FK | FK → relic_templates.relic_template_id |
| rarity | varchar(32) |  | Snapshot |
| level | int |  | MVP có thể để 1 |
| equipped_by_beast_id | uuid nullable | FK | FK → user_beasts.beast_id |
| origin_metadata_id | uuid nullable | FK | FK → item_metadata.metadata_id |
| mint_status | varchar(32) |  | not_minted, eligible, minted |
| locked | boolean |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
user_relics.user_id → users.user_id
user_relics.relic_template_id → relic_templates.relic_template_id
user_relics.equipped_by_beast_id → user_beasts.beast_id
user_relics.origin_metadata_id → item_metadata.metadata_id
```

### Index / Constraint

```text
PK: user_relics(relic_id)
INDEX: user_relics(user_id)
INDEX: user_relics(relic_template_id)
INDEX: user_relics(equipped_by_beast_id)
INDEX: user_relics(rarity)
INDEX: user_relics(mint_status)
INDEX: user_relics(origin_metadata_id)
```

Có thể đảm bảo 1 Beast chỉ equip 1 Relic:

```text
UNIQUE(equipped_by_beast_id) WHERE equipped_by_beast_id IS NOT NULL
```

---


---

## 9.1. `building_templates`

Template Building.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| building_template_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | memory_library |
| name | varchar(128) |  |  |
| realm_id | uuid nullable | FK | FK → realms.realm_id |
| category | varchar(64) |  | core, utility, decorative |
| rarity | varchar(32) |  |  |
| size_width | int |  | Grid width |
| size_height | int |  | Grid height |
| bonus_json | jsonb nullable |  | Bonus effect |
| visual_json | jsonb nullable |  | Visual variants |
| lore_text | text nullable |  |  |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
building_templates.realm_id → realms.realm_id
building_templates.building_template_id → user_buildings.building_template_id
```

### Index / Constraint

```text
PK: building_templates(building_template_id)
UNIQUE: building_templates(code)
INDEX: building_templates(realm_id)
INDEX: building_templates(category)
INDEX: building_templates(rarity)
INDEX: building_templates(status)
```

---

## 9.2. `user_buildings`

Building người chơi sở hữu.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| building_id | uuid | PK | Instance ID |
| user_id | uuid | FK | FK → users.user_id |
| building_template_id | uuid | FK | FK → building_templates.building_template_id |
| rarity | varchar(32) |  | Snapshot |
| level | int |  | MVP có thể để 1 |
| state | varchar(32) |  | stored, placed |
| placed_x | int nullable |  | Vị trí trong Dreamland |
| placed_y | int nullable |  |  |
| rotation | int |  | 0, 90, 180, 270 |
| origin_metadata_id | uuid nullable | FK | FK → item_metadata.metadata_id |
| mint_status | varchar(32) |  | not_minted, eligible, minted |
| locked | boolean |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
user_buildings.user_id → users.user_id
user_buildings.building_template_id → building_templates.building_template_id
user_buildings.origin_metadata_id → item_metadata.metadata_id
```

### Index / Constraint

```text
PK: user_buildings(building_id)
INDEX: user_buildings(user_id)
INDEX: user_buildings(building_template_id)
INDEX: user_buildings(state)
INDEX: user_buildings(rarity)
INDEX: user_buildings(mint_status)
INDEX: user_buildings(origin_metadata_id)
```

Có thể thêm index cho placement:

```text
INDEX: user_buildings(user_id, state)
INDEX: user_buildings(user_id, placed_x, placed_y)
```

---

## 9.3. `dreamlands`

Dreamland chính của user.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| dreamland_id | uuid | PK |  |
| user_id | uuid | FK, UNIQUE | FK → users.user_id |
| name | varchar(128) |  |  |
| level | int |  |  |
| mood | varchar(32) |  | neutral, pure, corrupt |
| grid_width | int |  |  |
| grid_height | int |  |  |
| layout_json | jsonb nullable |  | Cache layout |
| roaming_beasts_json | jsonb nullable |  | Beast roaming anchors |
| active_bonuses_json | jsonb nullable |  | Cached bonuses |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
dreamlands.user_id → users.user_id
user_buildings.user_id → dreamlands.user_id
```

### Index / Constraint

```text
PK: dreamlands(dreamland_id)
UNIQUE: dreamlands(user_id)
INDEX: dreamlands(mood)
```

### Ghi chú

Nguồn thật của placement nên là:

```text
user_buildings.state
user_buildings.placed_x
user_buildings.placed_y
user_buildings.rotation
```

`dreamlands.layout_json` chỉ là cache để Unity load nhanh.

---


---

## 10.1. `material_templates`

Template material/fragment.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| material_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | memory_fragment |
| name | varchar(128) |  |  |
| category | varchar(64) |  | dream, realm, beast, relic, building |
| rarity | varchar(32) |  |  |
| realm_id | uuid nullable | FK | FK → realms.realm_id |
| description | text nullable |  |  |
| icon_key | varchar(128) nullable |  |  |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
material_templates.realm_id → realms.realm_id
material_templates.material_id → inventory_materials.material_id
```

### Index / Constraint

```text
PK: material_templates(material_id)
UNIQUE: material_templates(code)
INDEX: material_templates(category)
INDEX: material_templates(rarity)
INDEX: material_templates(realm_id)
INDEX: material_templates(status)
```

---

## 10.2. `inventory_materials`

Số lượng material user sở hữu.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| user_id | uuid | PK, FK | FK → users.user_id |
| material_id | uuid | PK, FK | FK → material_templates.material_id |
| quantity | bigint |  | Số lượng hiện có |
| updated_at | timestamptz |  |  |

### Primary key

```text
(user_id, material_id)
```

### Quan hệ

```text
inventory_materials.user_id → users.user_id
inventory_materials.material_id → material_templates.material_id
```

### Index / Constraint

```text
PK: inventory_materials(user_id, material_id)
INDEX: inventory_materials(material_id)
CHECK: quantity >= 0
```

### Ghi chú

Khi craft/reward, cần lock row này:

```sql
SELECT * FROM inventory_materials
WHERE user_id = ? AND material_id = ?
FOR UPDATE;
```

---

## 10.3. `drop_tables`

Drop/reward table.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| drop_table_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | ocean_lantern_hidden_rewards |
| table_type | varchar(64) |  | dream, combat, boss, event |
| rarity | varchar(32) nullable |  |  |
| realm_id | uuid nullable | FK | FK → realms.realm_id |
| entries_json | jsonb |  | Reward entries |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
drop_tables.realm_id → realms.realm_id
drop_tables.drop_table_id → dream_seeds.loot_table_id
```

### Index / Constraint

```text
PK: drop_tables(drop_table_id)
UNIQUE: drop_tables(code)
INDEX: drop_tables(table_type)
INDEX: drop_tables(realm_id)
INDEX: drop_tables(status)
```

### Ví dụ `entries_json`

```json
[
  {
    "rewardType": "Material",
    "materialCode": "memory_fragment",
    "min": 3,
    "max": 6,
    "chance": 1.0
  },
  {
    "rewardType": "BeastFragment",
    "materialCode": "abyss_serpent_fragment",
    "min": 1,
    "max": 2,
    "chance": 0.25
  }
]
```

---

## 10.4. `crafting_recipes`

Recipe craft Beast/Relic/Building.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| recipe_id | uuid | PK |  |
| code | varchar(128) | UNIQUE | craft_abyss_serpent |
| category | varchar(64) |  | beast, relic, building |
| output_type | varchar(32) |  | Beast, Relic, Building |
| output_template_id | uuid |  | Template ID theo output_type |
| rarity | varchar(32) |  |  |
| requirements_json | jsonb |  | Material cost |
| unlock_conditions_json | jsonb nullable |  | Optional |
| status | varchar(32) |  | active, disabled |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

`output_template_id` có thể trỏ tới một trong ba bảng:

```text
beast_templates.beast_template_id
relic_templates.relic_template_id
building_templates.building_template_id
```

### Ghi chú quan trọng

Đây là quan hệ polymorphic, PostgreSQL không enforce FK trực tiếp nếu dùng một cột chung.

Backend service phải validate:

```text
Nếu output_type = Beast → output_template_id phải tồn tại trong beast_templates
Nếu output_type = Relic → output_template_id phải tồn tại trong relic_templates
Nếu output_type = Building → output_template_id phải tồn tại trong building_templates
```

### Index / Constraint

```text
PK: crafting_recipes(recipe_id)
UNIQUE: crafting_recipes(code)
INDEX: crafting_recipes(category)
INDEX: crafting_recipes(output_type)
INDEX: crafting_recipes(status)
```

### Ví dụ `requirements_json`

```json
[
  {
    "materialCode": "abyss_serpent_fragment",
    "quantity": 40
  },
  {
    "materialCode": "ocean_fragment",
    "quantity": 5
  }
]
```

---

## 10.5. `economy_transactions`

Log mọi thay đổi economy.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| transaction_id | uuid | PK |  |
| user_id | uuid | FK | FK → users.user_id |
| transaction_type | varchar(64) |  | reward, craft, admin_grant, consume |
| source_type | varchar(64) |  | dream_run, battle, crafting, admin |
| source_id | uuid nullable |  | run_id, battle_id, recipe_id... |
| idempotency_key | varchar(128) nullable |  | Chống duplicate |
| items_added_json | jsonb nullable |  | Materials/items added |
| items_removed_json | jsonb nullable |  | Materials/items removed |
| balance_after_json | jsonb nullable |  | Optional |
| metadata_json | jsonb nullable |  | Debug info |
| created_at | timestamptz |  |  |

### Quan hệ

```text
economy_transactions.user_id → users.user_id
economy_transactions.transaction_id → reward_claims.transaction_id
```

### Index / Constraint

```text
PK: economy_transactions(transaction_id)
INDEX: economy_transactions(user_id)
INDEX: economy_transactions(transaction_type)
INDEX: economy_transactions(source_type, source_id)
INDEX: economy_transactions(created_at)
UNIQUE: economy_transactions(idempotency_key) WHERE idempotency_key IS NOT NULL
```

### Ghi chú

Mọi thay đổi inventory phải có log ở bảng này.

Không nên cộng/trừ material trực tiếp mà không tạo transaction.

---

## 10.6. `reward_claims`

Nếu muốn tách complete Dream và claim reward.

MVP có thể bỏ bảng này nếu reward được grant ngay trong complete flow.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| reward_claim_id | uuid | PK |  |
| user_id | uuid | FK | FK → users.user_id |
| source_type | varchar(64) |  | dream_run, battle, event |
| source_id | uuid |  | ID nguồn reward |
| status | varchar(32) |  | pending, claimed, expired |
| reward_json | jsonb |  | Reward sẽ claim |
| transaction_id | uuid nullable | FK | FK → economy_transactions.transaction_id |
| claimed_at | timestamptz nullable |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
reward_claims.user_id → users.user_id
reward_claims.transaction_id → economy_transactions.transaction_id
```

### Index / Constraint

```text
PK: reward_claims(reward_claim_id)
INDEX: reward_claims(user_id)
INDEX: reward_claims(status)
INDEX: reward_claims(source_type, source_id)
UNIQUE: reward_claims(source_type, source_id)
```

---


---

## 11.1. `item_metadata`

Metadata origin của Beast/Relic/Building.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| metadata_id | uuid | PK |  |
| item_id | uuid |  | beast_id/relic_id/building_id |
| item_type | varchar(32) |  | Beast, Relic, Building |
| user_id | uuid | FK | FK → users.user_id |
| origin_dream_seed_id | uuid nullable | FK | FK → dream_seeds.dream_seed_id |
| origin_run_id | uuid nullable | FK | FK → dream_runs.run_id |
| origin_realm_id | uuid nullable | FK | FK → realms.realm_id |
| origin_ending | varchar(32) nullable |  | Purify/Corrupt/Hidden |
| key_choice | varchar(128) nullable |  |  |
| birth_date | date |  |  |
| lore_quote | text nullable |  |  |
| metadata_json | jsonb |  | Full metadata |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
item_metadata.user_id → users.user_id
item_metadata.origin_dream_seed_id → dream_seeds.dream_seed_id
item_metadata.origin_run_id → dream_runs.run_id
item_metadata.origin_realm_id → realms.realm_id
item_metadata.metadata_id → user_beasts.origin_metadata_id
item_metadata.metadata_id → user_relics.origin_metadata_id
item_metadata.metadata_id → user_buildings.origin_metadata_id
item_metadata.metadata_id → nft_items.metadata_id
```

### Index / Constraint

```text
PK: item_metadata(metadata_id)
INDEX: item_metadata(user_id)
INDEX: item_metadata(item_id, item_type)
INDEX: item_metadata(origin_dream_seed_id)
INDEX: item_metadata(origin_run_id)
INDEX: item_metadata(origin_realm_id)
INDEX: item_metadata(origin_ending)
UNIQUE: item_metadata(item_id, item_type)
```

### Ghi chú

Đây là bảng chung cho:

```text
Beast
Relic
Building
```

Không nên duplicate quá nhiều origin fields trong từng bảng item.

---

## 11.2. `nft_items`

Placeholder cho post-MVP NFT.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| nft_item_id | uuid | PK |  |
| item_id | uuid |  | Beast/Relic/Building instance ID |
| item_type | varchar(32) |  | Beast, Relic, Building |
| user_id | uuid | FK | FK → users.user_id |
| metadata_id | uuid | FK | FK → item_metadata.metadata_id |
| mint_status | varchar(32) |  | not_minted, eligible, pending, minted |
| chain_id | varchar(64) nullable |  | Post-MVP |
| contract_address | varchar(255) nullable |  | Post-MVP |
| token_id | varchar(128) nullable |  | Post-MVP |
| wallet_address | varchar(255) nullable |  | Post-MVP |
| metadata_uri | text nullable |  |  |
| image_uri | text nullable |  |  |
| metadata_hash | varchar(255) nullable |  |  |
| minted_at | timestamptz nullable |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
nft_items.user_id → users.user_id
nft_items.metadata_id → item_metadata.metadata_id
```

### Index / Constraint

```text
PK: nft_items(nft_item_id)
UNIQUE: nft_items(item_id, item_type)
INDEX: nft_items(user_id)
INDEX: nft_items(metadata_id)
INDEX: nft_items(mint_status)
INDEX: nft_items(wallet_address)
INDEX: nft_items(contract_address, token_id)
```

### MVP note

MVP có thể chưa cần bảng này nếu chỉ dùng:

```text
mint_status trong user_beasts/user_relics/user_buildings
item_metadata
```

Nếu muốn chuẩn bị NFT-ready sạch hơn thì tạo bảng này sớm cũng được.

---


---

## 12.1. `idempotency_keys`

Chống request quan trọng bị chạy nhiều lần.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| idempotency_key | varchar(128) | PK | Key từ client |
| user_id | uuid | FK | FK → users.user_id |
| operation | varchar(64) |  | craft, complete_dream... |
| request_hash | varchar(255) |  | Hash body |
| response_json | jsonb nullable |  | Response đã trả |
| status | varchar(32) |  | processing, completed, failed |
| expires_at | timestamptz |  |  |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Quan hệ

```text
idempotency_keys.user_id → users.user_id
```

### Index / Constraint

```text
PK: idempotency_keys(idempotency_key)
INDEX: idempotency_keys(user_id)
INDEX: idempotency_keys(operation)
INDEX: idempotency_keys(status)
INDEX: idempotency_keys(expires_at)
```

### Dùng cho

```text
POST /dream/start
POST /dream/runs/{runId}/complete
POST /battle/result
POST /crafting/craft
POST /buildings/{buildingId}/place
POST /rewards/claim
```

---

## 12.2. `feature_flags`

Bật/tắt feature.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| flag_id | uuid | PK |  |
| key | varchar(128) | UNIQUE | nft_preview |
| enabled | boolean |  |  |
| config_json | jsonb nullable |  | Optional |
| created_at | timestamptz |  |  |
| updated_at | timestamptz |  |  |

### Index / Constraint

```text
PK: feature_flags(flag_id)
UNIQUE: feature_flags(key)
INDEX: feature_flags(enabled)
```

---

## 12.3. `analytics_events`

Nếu chưa dùng service ngoài, có thể lưu tạm event.

### Fields

| Field | Type | Key | Ghi chú |
|---|---|---|---|
| event_id | uuid | PK |  |
| user_id | uuid nullable | FK | FK → users.user_id |
| event_name | varchar(128) |  | dream_started |
| event_time | timestamptz |  |  |
| properties_json | jsonb nullable |  |  |
| created_at | timestamptz |  |  |

### Quan hệ

```text
analytics_events.user_id → users.user_id
```

### Index / Constraint

```text
PK: analytics_events(event_id)
INDEX: analytics_events(user_id)
INDEX: analytics_events(event_name)
INDEX: analytics_events(event_time)
```

### MVP note

Nếu dùng PostHog/Segment/Firebase thì bảng này không bắt buộc.

---


## 13.1. User ownership

```text
users
  ├─ user_profiles
  ├─ dreamlands
  ├─ dream_runs
  ├─ dream_history
  ├─ inventory_materials
  ├─ user_beasts
  ├─ user_relics
  ├─ user_buildings
  ├─ economy_transactions
  ├─ item_metadata
  ├─ idempotency_keys
  └─ analytics_events
```

---

## 13.2. Daily Dream

```text
realms
  └─ dream_templates
      └─ dream_seeds
          └─ dream_runs
              ├─ exploration_actions
              ├─ battle_instances
              └─ dream_history
```

Ngoài ra:

```text
dream_seeds
  ├─ dream_map_templates
  ├─ ending_rule_sets
  ├─ boss_templates
  └─ drop_tables
```

---

## 13.3. Combat

```text
skill_templates
  ├─ beast_templates.skill_ids_json
  └─ enemy_templates.skill_ids_json

dream_runs
  └─ battle_instances
```

---

## 13.4. Beast / Relic / Building

```text
realms
  ├─ beast_templates
  │   └─ user_beasts
  ├─ relic_templates
  │   └─ user_relics
  └─ building_templates
      └─ user_buildings
```

---

## 13.5. Inventory / Economy

```text
material_templates
  └─ inventory_materials

drop_tables
  └─ reward service
      └─ economy_transactions

crafting_recipes
  └─ crafting service
      ├─ inventory_materials
      ├─ user_beasts / user_relics / user_buildings
      └─ economy_transactions
```

---

## 13.6. Metadata / NFT

```text
user_beasts
user_relics
user_buildings
  └─ item_metadata
      └─ nft_items
```

---


Nếu cần bắt đầu migration thật, ưu tiên các bảng này.

## 14.1. Core bắt buộc

```text
users
user_profiles
dreamlands

realms
dream_templates
dream_map_templates
ending_rule_sets
dream_seeds
dream_runs
dream_history
exploration_actions

skill_templates
enemy_templates
boss_templates
battle_instances

beast_templates
user_beasts
relic_templates
user_relics
building_templates
user_buildings

material_templates
inventory_materials
drop_tables
crafting_recipes
economy_transactions
item_metadata
idempotency_keys
```

---

## 14.2. Có thể để sau

```text
reward_claims
nft_items
feature_flags
analytics_events
admin_logs
wallet_links
marketplace_listings
```

---


## Step 1 — User foundation

```text
users
user_profiles
dreamlands
```

---

## Step 2 — Static content

```text
realms
skill_templates
enemy_templates
boss_templates
beast_templates
relic_templates
building_templates
material_templates
drop_tables
crafting_recipes
dream_templates
dream_map_templates
ending_rule_sets
```

---

## Step 3 — Player inventory

```text
inventory_materials
user_beasts
user_relics
user_buildings
```

---

## Step 4 — Dream runtime

```text
dream_seeds
dream_runs
exploration_actions
battle_instances
dream_history
```

---

## Step 5 — Economy safety

```text
economy_transactions
idempotency_keys
reward_claims optional
```

---

## Step 6 — Metadata / NFT-ready

```text
item_metadata
nft_items optional
```

---


Nên có index cho các field:

```text
users(auth_provider, provider_user_id)
users(status)

dream_seeds(date_key)
dream_seeds(status)
dream_seeds(realm_id)
dream_seeds(starts_at, expires_at)

dream_runs(user_id)
dream_runs(dream_seed_id)
dream_runs(status)
dream_runs(user_id, status)

dream_history(user_id)
dream_history(completed_at)

battle_instances(run_id)
battle_instances(user_id)
battle_instances(status)

inventory_materials(user_id, material_id)

user_beasts(user_id)
user_relics(user_id)
user_buildings(user_id)

economy_transactions(user_id)
economy_transactions(source_type, source_id)
economy_transactions(created_at)

item_metadata(item_id, item_type)
item_metadata(user_id)

idempotency_keys(user_id)
idempotency_keys(expires_at)
```

---


```text
users(auth_provider, provider_user_id) UNIQUE
user_profiles(user_id) PK/FK
dreamlands(user_id) UNIQUE
realms(code) UNIQUE
dream_templates(code) UNIQUE
dream_map_templates(code) UNIQUE
ending_rule_sets(code) UNIQUE
skill_templates(code) UNIQUE
enemy_templates(code) UNIQUE
boss_templates(code) UNIQUE
beast_templates(code) UNIQUE
relic_templates(code) UNIQUE
building_templates(code) UNIQUE
material_templates(code) UNIQUE
drop_tables(code) UNIQUE
crafting_recipes(code) UNIQUE
inventory_materials(user_id, material_id) PK
item_metadata(item_id, item_type) UNIQUE
nft_items(item_id, item_type) UNIQUE
idempotency_keys(idempotency_key) PK
```

---


## 18.1. Không cần vẽ mọi JSONB chi tiết

Trong ERD chỉ cần ghi:

```text
nodes_json
flags_json
metadata_json
effect_json
```

Chi tiết bên trong JSONB nên để trong docs riêng hoặc config sample.

---

## 18.2. Polymorphic relation cần ghi chú

Các bảng sau có quan hệ polymorphic:

```text
crafting_recipes.output_template_id
item_metadata.item_id + item_type
nft_items.item_id + item_type
economy_transactions.source_id + source_type
```

Khi vẽ ERD, có thể dùng note thay vì FK cứng.

---

## 18.3. Beast ↔ Relic nên chọn một chiều

Khuyến nghị ERD:

```text
user_relics.equipped_by_beast_id → user_beasts.beast_id
```

Không cần vẽ thêm:

```text
user_beasts.equipped_relic_id
```

để tránh vòng quan hệ.

---

## 18.4. Dreamland placement

Có hai cách biểu diễn:

### Cách MVP khuyến nghị

```text
user_buildings
  ├ state
  ├ placed_x
  ├ placed_y
  └ rotation
```

`dreamlands.layout_json` chỉ là cache.

### Cách nâng cao

Tách bảng:

```text
dreamland_placements
```

MVP chưa cần.

---


## 19.1. `wallet_links`

Dùng khi thêm wallet/NFT thật.

```text
wallet_link_id
user_id
wallet_address
chain_id
verified
linked_at
last_synced_at
```

---

## 19.2. `marketplace_listings`

Dùng khi thêm marketplace.

```text
listing_id
nft_item_id
seller_user_id
price
currency
status
listed_at
sold_at
cancelled_at
```

---

## 19.3. `admin_logs`

Dùng để audit admin/support action.

```text
admin_log_id
admin_user_id
action_type
target_user_id
payload_json
created_at
```

---

## 19.4. `localization_entries`

Nếu muốn quản lý localization trong DB.

```text
key
locale
text
updated_at
```

MVP có thể để localization trong file.

---\n