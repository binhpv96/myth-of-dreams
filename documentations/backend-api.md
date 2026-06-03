---
title: "Backend API"
description: "Myth of Dreams - Backend API"
date: "2026-06-03"
category: "technical"
order: 61
tags: ["technical","api"]
---

**Version:** 1.0  
**Status:** Working Draft  
**Dùng cho:** Backend / Unity / QA / Product  
**Backend target:** Java + Spring Boot  
**Related:** Technical_Architecture_Internal_VI.md, MVP_Scope.md, Roadmap_Internal_Clean.md  

---

## 1. File purpose

File này định nghĩa danh sách API backend cần có cho MVP của **Myth of Dreams**.

Tài liệu tập trung vào:

- API endpoint.
- Request/response mẫu.
- Data trả về cho Unity.
- Flow chính.
- Error format.
- Auth.
- Idempotency.
- Quy tắc server-authoritative.

File này không phải OpenAPI spec hoàn chỉnh, nhưng đủ để backend và Unity bắt đầu chia task.

---

## 2. Common conventions

### 2.1. Base URL

```text
/dev:      https://dev-api.mythofdreams.com
/staging:  https://staging-api.mythofdreams.com
/prod:     https://api.mythofdreams.com
```

MVP local:

```text
http://localhost:8080
```

---

## 2.2. API version

Tất cả API MVP dùng prefix:

```text
/api/v1
```

Ví dụ:

```text
GET /api/v1/daily-dream
```

---

## 2.3. Format

Request/response dùng JSON.

Header cơ bản:

```http
Content-Type: application/json
Authorization: Bearer <accessToken>
X-Request-Id: <uuid>
Idempotency-Key: <uuid>   // chỉ dùng cho request quan trọng
```

---

## 2.4. Auth

Các API không cần auth:

```text
POST /api/v1/auth/guest
POST /api/v1/auth/refresh
```

Các API còn lại cần:

```http
Authorization: Bearer <accessToken>
```

---

## 2.5. Idempotency

Các request sau bắt buộc dùng `Idempotency-Key`:

```text
POST /dream/start
POST /dream/runs/{runId}/complete
POST /battle/result
POST /crafting/craft
POST /buildings/{buildingId}/place
POST /rewards/claim
POST /items/{itemId}/mint-preview
POST /items/{itemId}/mint        // post-MVP
```

Mục đích:

- Tránh duplicate reward.
- Tránh craft 2 lần khi client retry.
- Tránh complete Dream nhiều lần.
- Tránh submit battle result nhiều lần.

---

## 2.6. Error format

Tất cả error trả về format thống nhất:

```json
{
  "error": {
    "code": "INSUFFICIENT_MATERIALS",
    "message": "Không đủ nguyên liệu.",
    "details": {
      "materialId": "abyss_serpent_fragment",
      "required": 40,
      "owned": 18
    }
  },
  "requestId": "REQ-123"
}
```

Các error code phổ biến:

| Code | Khi nào dùng |
|---|---|
| UNAUTHORIZED | Chưa đăng nhập hoặc token sai |
| FORBIDDEN | Không có quyền |
| NOT_FOUND | Không tìm thấy resource |
| VALIDATION_ERROR | Request body sai |
| RUN_NOT_ACTIVE | Dream run không còn active |
| NODE_NOT_AVAILABLE | Node chưa thể vào |
| INVALID_CHOICE | Choice không hợp lệ |
| BATTLE_ALREADY_COMPLETED | Battle đã submit result |
| DREAM_ALREADY_COMPLETED | Dream đã hoàn thành |
| REWARD_ALREADY_CLAIMED | Reward đã claim |
| INSUFFICIENT_MATERIALS | Không đủ material |
| ITEM_NOT_OWNED | Không sở hữu item |
| ITEM_LOCKED | Item đang bị lock |
| CONFIG_NOT_FOUND | Thiếu config |
| SERVER_ERROR | Lỗi server |

---

## 2.7. Response wrapper

MVP có thể dùng response trực tiếp, không bắt buộc wrapper.

Khuyến nghị dùng format:

```json
{
  "data": {},
  "requestId": "REQ-123"
}
```

Ví dụ:

```json
{
  "data": {
    "userId": "USER-001",
    "displayName": "Dreamwalker"
  },
  "requestId": "REQ-123"
}
```

---


## 3.1. Guest Login

```http
POST /api/v1/auth/guest
```

Dùng khi user vào game lần đầu hoặc chưa bind account.

### Request

```json
{
  "deviceId": "device-uuid",
  "platform": "android",
  "clientVersion": "0.1.0"
}
```

### Response

```json
{
  "data": {
    "userId": "USER-001",
    "isNewUser": true,
    "accessToken": "jwt-access-token",
    "refreshToken": "jwt-refresh-token",
    "expiresIn": 3600
  },
  "requestId": "REQ-001"
}
```

### Backend notes

- Nếu `deviceId` đã tồn tại, trả user cũ.
- Nếu chưa tồn tại, tạo user mới.
- Không dùng deviceId làm bảo mật duy nhất cho production lâu dài.
- Sau này có thể bind email/social.

---

## 3.2. Refresh Token

```http
POST /api/v1/auth/refresh
```

### Request

```json
{
  "refreshToken": "jwt-refresh-token"
}
```

### Response

```json
{
  "data": {
    "accessToken": "new-access-token",
    "refreshToken": "new-refresh-token",
    "expiresIn": 3600
  },
  "requestId": "REQ-002"
}
```

---

## 3.3. Logout

```http
POST /api/v1/auth/logout
```

### Request

```json
{
  "refreshToken": "jwt-refresh-token"
}
```

### Response

```json
{
  "data": {
    "success": true
  },
  "requestId": "REQ-003"
}
```

---


## 4.1. Get Current User

```http
GET /api/v1/me
```

### Response

```json
{
  "data": {
    "userId": "USER-001",
    "displayName": "Dreamwalker",
    "avatarId": "default_avatar",
    "createdAt": "2026-05-26T10:00:00Z",
    "dreamwalkerRank": 1,
    "purity": 0,
    "corruption": 0,
    "hiddenKnowledge": 0
  },
  "requestId": "REQ-004"
}
```

---

## 4.2. Update Profile

```http
PATCH /api/v1/me
```

### Request

```json
{
  "displayName": "Milo",
  "avatarId": "avatar_luma_01"
}
```

### Response

```json
{
  "data": {
    "userId": "USER-001",
    "displayName": "Milo",
    "avatarId": "avatar_luma_01"
  },
  "requestId": "REQ-005"
}
```

---


## 5.1. Get App Config

```http
GET /api/v1/app/config
```

Unity gọi API này khi boot app.

### Response

```json
{
  "data": {
    "minClientVersion": "0.1.0",
    "latestClientVersion": "0.1.2",
    "contentVersion": "2026.05.26.1",
    "maintenance": false,
    "features": {
      "nftPreview": true,
      "walletLinking": false,
      "marketplace": false,
      "pvp": false
    },
    "serverTime": "2026-05-26T10:00:00Z"
  },
  "requestId": "REQ-006"
}
```

---


## 6.1. Get Daily Dream

```http
GET /api/v1/daily-dream
```

### Response

```json
{
  "data": {
    "dreamSeedId": "DREAM-2026-05-26-OCEAN-RARE-001",
    "title": "The Lantern Under the Lake",
    "realm": {
      "realmId": "ocean_of_memories",
      "name": "Ocean of Memories"
    },
    "rarity": "Rare",
    "recommendedAffinity": ["Light", "Memory"],
    "estimatedDurationMinutes": 10,
    "statusForUser": "Available",
    "alreadyCompleted": false,
    "timeRemainingSeconds": 43200,
    "rewardPreview": [
      {
        "type": "Material",
        "name": "Memory Fragment",
        "rarity": "Common",
        "guaranteed": true
      },
      {
        "type": "RelicFragment",
        "name": "Lantern Relic Fragment",
        "rarity": "Rare",
        "guaranteed": false
      }
    ]
  },
  "requestId": "REQ-007"
}
```

### `statusForUser`

| Value | Ý nghĩa |
|---|---|
| Available | Có thể chơi |
| InProgress | Đang có run |
| Completed | Đã hoàn thành hôm nay |
| Locked | Chưa đủ điều kiện |
| Expired | Dream đã hết thời gian |

---

## 6.2. Get Dream Preview Detail

```http
GET /api/v1/daily-dream/preview
```

### Response

```json
{
  "data": {
    "dreamSeedId": "DREAM-2026-05-26-OCEAN-RARE-001",
    "title": "The Lantern Under the Lake",
    "introText": "Bạn tỉnh dậy dưới một mặt hồ không có mặt nước.",
    "realm": "Ocean of Memories",
    "rarity": "Rare",
    "recommendedPower": 120,
    "recommendedAffinity": ["Light", "Memory"],
    "possibleEndings": ["Purify", "Corrupt", "Hidden"],
    "possibleRewardTypes": [
      "Memory Fragment",
      "Ocean Fragment",
      "Relic Fragment",
      "Aquatic Beast Fragment"
    ]
  },
  "requestId": "REQ-008"
}
```

---


## 7.1. Start Dream Run

```http
POST /api/v1/dream/start
```

### Request

```json
{
  "dreamSeedId": "DREAM-2026-05-26-OCEAN-RARE-001",
  "selectedBeastId": "BEAST-001",
  "equippedRelicIds": ["RELIC-001"]
}
```

### Response

```json
{
  "data": {
    "runId": "RUN-001",
    "dreamSeedId": "DREAM-2026-05-26-OCEAN-RARE-001",
    "status": "InProgress",
    "currentNodeId": "start_01",
    "map": {
      "mapTemplateId": "ocean_lantern_map_01",
      "nodes": [
        {
          "nodeId": "start_01",
          "nodeType": "Start",
          "title": "Beneath the Lake",
          "state": "Available",
          "position": { "x": 0, "y": 0 }
        }
      ],
      "edges": []
    },
    "runState": {
      "flags": [],
      "purityDelta": 0,
      "corruptionDelta": 0,
      "hiddenKnowledgeDelta": 0
    }
  },
  "requestId": "REQ-009"
}
```

### Backend validate

- Dream Seed active.
- User chưa complete Dream này nếu rule chỉ 1 main reward/ngày.
- Beast thuộc user.
- Relic thuộc user.
- Không có active run conflict.

---

## 7.2. Get Dream Run

```http
GET /api/v1/dream/runs/{runId}
```

### Response

```json
{
  "data": {
    "runId": "RUN-001",
    "dreamSeedId": "DREAM-2026-05-26-OCEAN-RARE-001",
    "status": "InProgress",
    "currentNodeId": "choice_lantern_01",
    "selectedBeastId": "BEAST-001",
    "equippedRelicIds": ["RELIC-001"],
    "nodeStates": {
      "start_01": "Completed",
      "story_01": "Completed",
      "choice_lantern_01": "Available",
      "hidden_song_01": "Hidden"
    },
    "flags": [
      "entered_ocean_lantern"
    ],
    "choicesMade": [],
    "stagedRewards": [],
    "purityDelta": 0,
    "corruptionDelta": 0,
    "hiddenKnowledgeDelta": 0
  },
  "requestId": "REQ-010"
}
```

---

## 7.3. Enter Node

```http
POST /api/v1/dream/runs/{runId}/enter-node
```

### Request

```json
{
  "nodeId": "choice_lantern_01"
}
```

### Response

```json
{
  "data": {
    "nodeId": "choice_lantern_01",
    "nodeType": "Choice",
    "title": "The Tangled Lantern",
    "sceneText": "Chiếc đèn lồng mắc trong đám rong đen. Ánh sáng của nó đập như một trái tim mệt mỏi.",
    "visualKey": "ocean_lantern_tangled",
    "audioKey": "ocean_muffled_bell",
    "choices": [
      {
        "choiceId": "untangle_gently",
        "text": "Gỡ đám rong một cách nhẹ nhàng.",
        "tone": "Purify",
        "available": true
      },
      {
        "choiceId": "take_light",
        "text": "Xé rong ra và lấy ánh sáng.",
        "tone": "Corrupt",
        "available": true
      },
      {
        "choiceId": "listen_first",
        "text": "Không làm gì cả. Lắng nghe.",
        "tone": "Hidden",
        "available": true
      }
    ]
  },
  "requestId": "REQ-011"
}
```

---

## 7.4. Submit Node Action / Choice

```http
POST /api/v1/dream/runs/{runId}/node-action
```

### Request

```json
{
  "nodeId": "choice_lantern_01",
  "actionType": "Choice",
  "choiceId": "listen_first"
}
```

### Response

```json
{
  "data": {
    "success": true,
    "nodeStateUpdates": {
      "choice_lantern_01": "Completed",
      "hidden_song_01": "Revealed",
      "npc_shell_child_01": "Available"
    },
    "addedFlags": [
      "heard_lantern_song"
    ],
    "purityDelta": 0,
    "corruptionDelta": 0,
    "hiddenKnowledgeDelta": 1,
    "nextAvailableNodes": [
      "npc_shell_child_01",
      "hidden_song_01"
    ],
    "stagedRewards": []
  },
  "requestId": "REQ-012"
}
```

---

## 7.5. Submit Puzzle Result

```http
POST /api/v1/dream/runs/{runId}/puzzle-submit
```

### Request

```json
{
  "nodeId": "puzzle_shell_song",
  "puzzleId": "shell_song_sequence",
  "answer": {
    "sequence": ["left_shell", "middle_shell", "right_shell"]
  }
}
```

### Response

```json
{
  "data": {
    "success": true,
    "result": "Success",
    "addedFlags": [
      "solved_shell_song",
      "hidden_song_completed"
    ],
    "nodeStateUpdates": {
      "puzzle_shell_song": "Completed",
      "boss_lantern_keeper": "Available"
    },
    "stagedRewards": [
      {
        "type": "Material",
        "materialId": "ocean_fragment",
        "quantity": 2
      }
    ]
  },
  "requestId": "REQ-013"
}
```

---

## 7.6. Complete Dream Run

```http
POST /api/v1/dream/runs/{runId}/complete
```

### Request

```json
{
  "clientSummary": {
    "lastNodeId": "ending_portal",
    "clientDurationSeconds": 720
  }
}
```

### Response

```json
{
  "data": {
    "runId": "RUN-001",
    "status": "Completed",
    "ending": "Hidden",
    "endingTitle": "The Light That Was Not Taken",
    "endingText": "Chiếc đèn không rời khỏi đáy hồ. Nhưng lần đầu tiên, bài hát của nó được nghe thấy.",
    "keyChoice": "listen_first",
    "stateChanges": {
      "purity": 0,
      "corruption": 0,
      "hiddenKnowledge": 1
    },
    "rewardClaimId": "REWARD-CLAIM-001",
    "rewardSummary": {
      "claimRequired": false,
      "items": [
        {
          "type": "Material",
          "materialId": "memory_fragment",
          "name": "Memory Fragment",
          "quantity": 6
        },
        {
          "type": "Material",
          "materialId": "abyss_serpent_fragment",
          "name": "Abyss Serpent Fragment",
          "quantity": 2
        }
      ],
      "loreUnlocked": [
        {
          "loreId": "song_beneath_lake",
          "title": "Song Beneath the Lake"
        }
      ]
    }
  },
  "requestId": "REQ-014"
}
```

### Backend notes

MVP có thể grant reward ngay trong complete flow.  
Nếu muốn tách riêng claim, dùng `/rewards/claim`.

---

## 7.7. Abandon Dream Run

```http
POST /api/v1/dream/runs/{runId}/abandon
```

### Request

```json
{
  "reason": "PlayerQuit"
}
```

### Response

```json
{
  "data": {
    "runId": "RUN-001",
    "status": "Abandoned",
    "rewardGranted": false
  },
  "requestId": "REQ-015"
}
```

---

## 7.8. Dream History

```http
GET /api/v1/dream/history?limit=20&cursor=
```

### Response

```json
{
  "data": {
    "items": [
      {
        "dreamHistoryId": "HIS-001",
        "dreamSeedId": "DREAM-2026-05-26-OCEAN-RARE-001",
        "title": "The Lantern Under the Lake",
        "realm": "Ocean of Memories",
        "rarity": "Rare",
        "ending": "Hidden",
        "keyChoice": "listen_first",
        "completedAt": "2026-05-26T10:30:00Z",
        "hiddenDiscovered": true
      }
    ],
    "nextCursor": null
  },
  "requestId": "REQ-016"
}
```

---


## 8.1. Start Battle

```http
POST /api/v1/battle/start
```

### Request

```json
{
  "runId": "RUN-001",
  "nodeId": "combat_drowned_echo_01"
}
```

### Response

```json
{
  "data": {
    "battleId": "BATTLE-001",
    "runId": "RUN-001",
    "battleSeed": 982133,
    "battleType": "Normal",
    "playerTeam": [
      {
        "beastId": "BEAST-001",
        "name": "Luma",
        "level": 5,
        "hp": 120,
        "maxHp": 120,
        "stats": {
          "atk": 18,
          "matk": 24,
          "def": 12,
          "mdef": 16,
          "spd": 14,
          "luck": 8
        },
        "skills": [
          {
            "skillId": "light_spark",
            "name": "Light Spark",
            "cooldown": 0
          }
        ]
      }
    ],
    "enemies": [
      {
        "enemyInstanceId": "ENEMY-001-A",
        "enemyTemplateId": "drowned_echo",
        "name": "Drowned Echo",
        "level": 5,
        "hp": 90,
        "maxHp": 90,
        "affinity": "Memory"
      }
    ],
    "turnOrder": [
      "BEAST-001",
      "ENEMY-001-A"
    ]
  },
  "requestId": "REQ-017"
}
```

---

## 8.2. Submit Battle Result

```http
POST /api/v1/battle/result
```

### Request

```json
{
  "battleId": "BATTLE-001",
  "runId": "RUN-001",
  "nodeId": "combat_drowned_echo_01",
  "result": "Victory",
  "turnsTaken": 4,
  "durationSeconds": 85,
  "playerRemainingHp": [
    {
      "beastId": "BEAST-001",
      "hp": 84
    }
  ],
  "skillsUsed": [
    {
      "skillId": "light_spark",
      "count": 2
    }
  ],
  "actionLogHash": "sha256-log-hash"
}
```

### Response

```json
{
  "data": {
    "battleId": "BATTLE-001",
    "accepted": true,
    "result": "Victory",
    "nodeStateUpdates": {
      "combat_drowned_echo_01": "Completed",
      "npc_shell_child_01": "Available"
    },
    "addedFlags": [
      "drowned_echo_defeated"
    ],
    "beastExpGained": [
      {
        "beastId": "BEAST-001",
        "exp": 20,
        "levelUp": false
      }
    ],
    "stagedRewards": [
      {
        "type": "Material",
        "materialId": "memory_fragment",
        "quantity": 1
      }
    ]
  },
  "requestId": "REQ-018"
}
```

---


## 9.1. Get Material Inventory

```http
GET /api/v1/inventory/materials
```

### Response

```json
{
  "data": {
    "materials": [
      {
        "materialId": "memory_fragment",
        "name": "Memory Fragment",
        "quantity": 24,
        "rarity": "Common"
      },
      {
        "materialId": "abyss_serpent_fragment",
        "name": "Abyss Serpent Fragment",
        "quantity": 8,
        "rarity": "Rare"
      }
    ]
  },
  "requestId": "REQ-019"
}
```

---

## 9.2. Get Inventory Summary

```http
GET /api/v1/inventory/summary
```

### Response

```json
{
  "data": {
    "materialCount": 12,
    "beastCount": 5,
    "relicCount": 7,
    "buildingCount": 4,
    "craftableRecipes": 3,
    "newItems": 2
  },
  "requestId": "REQ-020"
}
```

---

## 9.3. Get All Items

```http
GET /api/v1/inventory/items?type=Beast&rarity=Rare&limit=20&cursor=
```

### Response

```json
{
  "data": {
    "items": [
      {
        "itemId": "BEAST-001",
        "itemType": "Beast",
        "templateId": "luma",
        "name": "Luma",
        "rarity": "Common",
        "level": 5,
        "origin": {
          "dreamTitle": "First Light",
          "realm": "Dreamland",
          "ending": "Tutorial"
        },
        "new": false
      }
    ],
    "nextCursor": null
  },
  "requestId": "REQ-021"
}
```

---


## 10.1. Get Beasts

```http
GET /api/v1/beasts
```

### Response

```json
{
  "data": {
    "beasts": [
      {
        "beastId": "BEAST-001",
        "templateId": "luma",
        "name": "Luma",
        "species": "Fox",
        "affinity": "Light",
        "rarity": "Common",
        "level": 5,
        "exp": 120,
        "nextLevelExp": 200,
        "combatPower": 145,
        "isStarter": true,
        "equippedRelicId": "RELIC-001"
      }
    ]
  },
  "requestId": "REQ-022"
}
```

---

## 10.2. Get Beast Detail

```http
GET /api/v1/beasts/{beastId}
```

### Response

```json
{
  "data": {
    "beastId": "BEAST-001",
    "templateId": "luma",
    "name": "Luma",
    "species": "Fox",
    "affinity": "Light",
    "damageType": "Magic",
    "role": ["Support", "Magic Striker"],
    "rarity": "Common",
    "level": 5,
    "exp": 120,
    "nextLevelExp": 200,
    "stats": {
      "hp": 120,
      "atk": 18,
      "matk": 24,
      "def": 12,
      "mdef": 16,
      "spd": 14,
      "luck": 8
    },
    "skills": [
      {
        "skillId": "light_spark",
        "name": "Light Spark",
        "level": 1,
        "description": "Gây sát thương Light nhỏ."
      }
    ],
    "equippedRelic": {
      "relicId": "RELIC-001",
      "name": "Small Dawn Bell"
    },
    "origin": {
      "dreamSeedId": "TUTORIAL-DREAM-001",
      "dreamTitle": "First Light",
      "realm": "Dreamland",
      "ending": "Tutorial",
      "birthDate": "2026-05-26",
      "loreQuote": "The first light that answered your name."
    },
    "mintStatus": "NotMinted"
  },
  "requestId": "REQ-023"
}
```

---

## 10.3. Rename Beast

```http
POST /api/v1/beasts/{beastId}/rename
```

### Request

```json
{
  "name": "Moon Luma"
}
```

### Response

```json
{
  "data": {
    "beastId": "BEAST-001",
    "name": "Moon Luma"
  },
  "requestId": "REQ-024"
}
```

---


## 11.1. Get Relics

```http
GET /api/v1/relics
```

### Response

```json
{
  "data": {
    "relics": [
      {
        "relicId": "RELIC-001",
        "templateId": "small_dawn_bell",
        "name": "Small Dawn Bell",
        "rarity": "Common",
        "affinity": "Light",
        "equippedByBeastId": "BEAST-001"
      }
    ]
  },
  "requestId": "REQ-025"
}
```

---

## 11.2. Equip Relic

```http
POST /api/v1/relics/{relicId}/equip
```

### Request

```json
{
  "beastId": "BEAST-001"
}
```

### Response

```json
{
  "data": {
    "relicId": "RELIC-001",
    "equippedByBeastId": "BEAST-001",
    "beastUpdated": {
      "beastId": "BEAST-001",
      "combatPower": 152
    }
  },
  "requestId": "REQ-026"
}
```

---

## 11.3. Unequip Relic

```http
POST /api/v1/relics/{relicId}/unequip
```

### Response

```json
{
  "data": {
    "relicId": "RELIC-001",
    "equippedByBeastId": null
  },
  "requestId": "REQ-027"
}
```

---


## 12.1. Get Dreamland

```http
GET /api/v1/dreamland
```

### Response

```json
{
  "data": {
    "dreamlandId": "DREAMLAND-001",
    "name": "Milo's Dreamland",
    "level": 1,
    "mood": "Neutral",
    "purity": 2,
    "corruption": 0,
    "layout": {
      "gridWidth": 12,
      "gridHeight": 12,
      "placedBuildings": [
        {
          "buildingId": "BUILDING-001",
          "templateId": "memory_library",
          "x": 3,
          "y": 4,
          "rotation": 0
        }
      ]
    },
    "roamingBeasts": [
      {
        "beastId": "BEAST-001",
        "anchorBuildingId": "BUILDING-001"
      }
    ]
  },
  "requestId": "REQ-028"
}
```

---

## 12.2. Get Buildings

```http
GET /api/v1/buildings
```

### Response

```json
{
  "data": {
    "buildings": [
      {
        "buildingId": "BUILDING-001",
        "templateId": "memory_library",
        "name": "Memory Library",
        "rarity": "Rare",
        "state": "Placed",
        "size": {
          "width": 3,
          "height": 2
        },
        "bonusSummary": "+5% Beast EXP",
        "origin": {
          "dreamTitle": "The Apology Tree",
          "realm": "Forest of Lost Voices",
          "ending": "Purify"
        }
      }
    ]
  },
  "requestId": "REQ-029"
}
```

---

## 12.3. Place Building

```http
POST /api/v1/buildings/{buildingId}/place
```

### Request

```json
{
  "x": 3,
  "y": 4,
  "rotation": 0
}
```

### Response

```json
{
  "data": {
    "buildingId": "BUILDING-001",
    "state": "Placed",
    "position": {
      "x": 3,
      "y": 4,
      "rotation": 0
    },
    "activeBonuses": [
      {
        "bonusId": "beast_exp_bonus",
        "description": "+5% Beast EXP"
      }
    ]
  },
  "requestId": "REQ-030"
}
```

---

## 12.4. Move Building

```http
POST /api/v1/buildings/{buildingId}/move
```

### Request

```json
{
  "x": 5,
  "y": 6,
  "rotation": 90
}
```

### Response

```json
{
  "data": {
    "buildingId": "BUILDING-001",
    "position": {
      "x": 5,
      "y": 6,
      "rotation": 90
    }
  },
  "requestId": "REQ-031"
}
```

---

## 12.5. Store Building

```http
POST /api/v1/buildings/{buildingId}/store
```

### Response

```json
{
  "data": {
    "buildingId": "BUILDING-001",
    "state": "Stored"
  },
  "requestId": "REQ-032"
}
```

---

## 12.6. Get Dreamland Bonuses

```http
GET /api/v1/dreamland/bonuses
```

### Response

```json
{
  "data": {
    "bonuses": [
      {
        "bonusId": "beast_exp_bonus",
        "sourceType": "Building",
        "sourceId": "BUILDING-001",
        "description": "+5% Beast EXP",
        "value": 0.05,
        "capApplied": false
      }
    ]
  },
  "requestId": "REQ-033"
}
```

---


## 13.1. Get Crafting Recipes

```http
GET /api/v1/crafting/recipes?category=Beast
```

### Response

```json
{
  "data": {
    "recipes": [
      {
        "recipeId": "craft_abyss_serpent",
        "category": "Beast",
        "output": {
          "type": "Beast",
          "templateId": "abyss_serpent",
          "name": "Abyss Serpent",
          "rarity": "Epic"
        },
        "requirements": [
          {
            "materialId": "abyss_serpent_fragment",
            "name": "Abyss Serpent Fragment",
            "required": 40,
            "owned": 8
          },
          {
            "materialId": "ocean_fragment",
            "name": "Ocean Fragment",
            "required": 5,
            "owned": 12
          }
        ],
        "craftable": false
      }
    ]
  },
  "requestId": "REQ-034"
}
```

---

## 13.2. Craft Preview

```http
GET /api/v1/crafting/preview/{recipeId}
```

### Response

```json
{
  "data": {
    "recipeId": "craft_memory_library",
    "craftable": true,
    "outputPreview": {
      "type": "Building",
      "templateId": "memory_library",
      "name": "Memory Library",
      "rarity": "Rare",
      "bonusSummary": "+5% Beast EXP"
    },
    "willConsume": [
      {
        "materialId": "building_fragment",
        "quantity": 25
      },
      {
        "materialId": "forest_fragment",
        "quantity": 5
      }
    ],
    "originPreview": {
      "source": "Dominant material source",
      "realm": "Forest of Lost Voices"
    }
  },
  "requestId": "REQ-035"
}
```

---

## 13.3. Craft

```http
POST /api/v1/crafting/craft
```

### Request

```json
{
  "recipeId": "craft_memory_library"
}
```

### Response

```json
{
  "data": {
    "success": true,
    "craftedItem": {
      "itemId": "BUILDING-002",
      "itemType": "Building",
      "templateId": "memory_library",
      "name": "Memory Library",
      "rarity": "Rare",
      "origin": {
        "realm": "Forest of Lost Voices",
        "source": "Crafting"
      }
    },
    "consumedMaterials": [
      {
        "materialId": "building_fragment",
        "quantity": 25,
        "balanceAfter": 4
      },
      {
        "materialId": "forest_fragment",
        "quantity": 5,
        "balanceAfter": 2
      }
    ]
  },
  "requestId": "REQ-036"
}
```

---


MVP có thể grant reward trong `/dream/runs/{runId}/complete`.  
Nếu muốn tách riêng claim reward, dùng nhóm API này.

---

## 14.1. Claim Reward

```http
POST /api/v1/rewards/claim
```

### Request

```json
{
  "rewardClaimId": "REWARD-CLAIM-001"
}
```

### Response

```json
{
  "data": {
    "rewardClaimId": "REWARD-CLAIM-001",
    "claimed": true,
    "items": [
      {
        "type": "Material",
        "materialId": "memory_fragment",
        "quantity": 6,
        "balanceAfter": 30
      }
    ],
    "createdItems": [
      {
        "itemType": "Relic",
        "itemId": "RELIC-010",
        "name": "Lantern of Forgotten Shores",
        "rarity": "Epic"
      }
    ]
  },
  "requestId": "REQ-037"
}
```

---

## 14.2. Reward History

```http
GET /api/v1/rewards/history?limit=20&cursor=
```

### Response

```json
{
  "data": {
    "items": [
      {
        "transactionId": "TX-001",
        "sourceType": "DailyDream",
        "sourceId": "RUN-001",
        "summary": "Hidden Ending reward",
        "createdAt": "2026-05-26T10:30:00Z"
      }
    ],
    "nextCursor": null
  },
  "requestId": "REQ-038"
}
```

---


## 15.1. Get Item Metadata

```http
GET /api/v1/items/{itemId}/metadata
```

### Response

```json
{
  "data": {
    "itemId": "BEAST-001",
    "itemType": "Beast",
    "templateId": "luma",
    "name": "Luma",
    "rarity": "Common",
    "origin": {
      "dreamSeedId": "TUTORIAL-DREAM-001",
      "dreamTitle": "First Light",
      "realm": "Dreamland",
      "ending": "Tutorial",
      "keyChoice": "accepted_luma",
      "birthDate": "2026-05-26"
    },
    "loreQuote": "The first light that answered your name.",
    "mintStatus": "NotMinted",
    "nftReady": false
  },
  "requestId": "REQ-039"
}
```

---

## 15.2. Get Mint Eligibility

```http
GET /api/v1/items/{itemId}/mint-eligibility
```

### Response

```json
{
  "data": {
    "itemId": "BEAST-001",
    "itemType": "Beast",
    "mintEligible": false,
    "mintStatus": "NotMinted",
    "requirements": [
      {
        "name": "Rarity Rare+",
        "met": false
      },
      {
        "name": "Metadata complete",
        "met": true
      },
      {
        "name": "Not equipped or active",
        "met": true
      },
      {
        "name": "Wallet linked",
        "met": false
      }
    ],
    "blockingReasons": [
      "Rarity is below Rare",
      "Wallet not linked"
    ]
  },
  "requestId": "REQ-040"
}
```

---

## 15.3. Mint Preview

Post-MVP hoặc NFT-ready prototype.

```http
POST /api/v1/items/{itemId}/mint-preview
```

### Response

```json
{
  "data": {
    "itemId": "BEAST-010",
    "metadataPreview": {
      "name": "Abyss Serpent",
      "description": "Born from the Hidden Ending of The Lantern Under the Lake.",
      "attributes": [
        {
          "trait_type": "Item Type",
          "value": "Beast"
        },
        {
          "trait_type": "Origin Ending",
          "value": "Hidden"
        }
      ]
    },
    "cardPreviewUrl": "https://cdn.mythofdreams.com/previews/BEAST-010.png",
    "warnings": [
      "Gameplay level is not frozen in NFT metadata."
    ]
  },
  "requestId": "REQ-041"
}
```

---


MVP có thể chỉ dùng internal/admin endpoint hoặc import script.

---

## 16.1. Get Content Version

```http
GET /api/v1/content/version
```

### Response

```json
{
  "data": {
    "contentVersion": "2026.05.26.1",
    "dreamConfigVersion": "dreams.001",
    "combatConfigVersion": "combat.001",
    "economyConfigVersion": "economy.001"
  },
  "requestId": "REQ-042"
}
```

---

## 16.2. Admin Import Config

Internal only.

```http
POST /api/v1/admin/content/import
```

### Request

```json
{
  "contentType": "dream_templates",
  "version": "dreams.001",
  "dryRun": true,
  "payload": {}
}
```

### Response

```json
{
  "data": {
    "valid": true,
    "errors": [],
    "warnings": [
      "1 optional hidden node has no reward table."
    ]
  },
  "requestId": "REQ-043"
}
```

---


## 17.1. Send Analytics Events

```http
POST /api/v1/analytics/events
```

### Request

```json
{
  "events": [
    {
      "eventName": "dream_started",
      "timestamp": "2026-05-26T10:00:00Z",
      "properties": {
        "dreamSeedId": "DREAM-2026-05-26-OCEAN-RARE-001",
        "realm": "Ocean of Memories",
        "rarity": "Rare"
      }
    }
  ]
}
```

### Response

```json
{
  "data": {
    "accepted": true,
    "count": 1
  },
  "requestId": "REQ-044"
}
```

---


MVP có thể làm bằng internal script trước, nhưng nếu có admin endpoint thì nên có auth riêng.

---

## 18.1. Get User Debug Summary

Internal only.

```http
GET /api/v1/admin/users/{userId}/summary
```

### Response

```json
{
  "data": {
    "userId": "USER-001",
    "displayName": "Milo",
    "createdAt": "2026-05-26T10:00:00Z",
    "inventorySummary": {
      "materials": 12,
      "beasts": 5,
      "relics": 7,
      "buildings": 4
    },
    "activeRun": {
      "runId": "RUN-001",
      "status": "InProgress"
    }
  },
  "requestId": "REQ-045"
}
```

---

## 18.2. Grant Test Item

Dev/staging only.

```http
POST /api/v1/admin/users/{userId}/grant-test-item
```

### Request

```json
{
  "itemType": "Material",
  "itemId": "memory_fragment",
  "quantity": 100,
  "reason": "QA testing"
}
```

### Response

```json
{
  "data": {
    "success": true,
    "transactionId": "TX-ADMIN-001"
  },
  "requestId": "REQ-046"
}
```

---


## 19.1. Common Response

```java
public record ApiResponse<T>(
    T data,
    String requestId
) {}
```

## 19.2. Error Response

```java
public record ApiErrorResponse(
    ApiError error,
    String requestId
) {}

public record ApiError(
    String code,
    String message,
    Map<String, Object> details
) {}
```

---

## 19.3. Guest Login Request

```java
public record GuestLoginRequest(
    String deviceId,
    String platform,
    String clientVersion
) {}
```

---

## 19.4. Start Dream Request

```java
public record StartDreamRequest(
    String dreamSeedId,
    String selectedBeastId,
    List<String> equippedRelicIds
) {}
```

---

## 19.5. Node Action Request

```java
public record NodeActionRequest(
    String nodeId,
    String actionType,
    String choiceId
) {}
```

---

## 19.6. Craft Request

```java
public record CraftRequest(
    String recipeId
) {}
```

---


```text
auth/AuthController.java
user/UserController.java
dream/DailyDreamController.java
dreamrun/DreamRunController.java
battle/BattleController.java
inventory/InventoryController.java
beast/BeastController.java
relic/RelicController.java
building/BuildingController.java
dreamland/DreamlandController.java
crafting/CraftingController.java
reward/RewardController.java
metadata/MetadataController.java
analytics/AnalyticsController.java
admin/AdminController.java
```

---


```text
AuthService
UserService
DailyDreamService
DreamRunService
NodeActionService
EndingResolutionService
BattleService
BattleValidationService
InventoryService
RewardService
CraftingService
BeastService
RelicService
BuildingService
DreamlandService
MetadataService
AnalyticsService
AdminService
```

---


## Sprint 1 — Foundation

| API | Priority |
|---|---|
| POST /auth/guest | P0 |
| POST /auth/refresh | P0 |
| GET /me | P0 |
| GET /app/config | P0 |

---

## Sprint 2 — Daily Dream

| API | Priority |
|---|---|
| GET /daily-dream | P0 |
| GET /daily-dream/preview | P1 |
| POST /dream/start | P0 |
| GET /dream/runs/{runId} | P0 |

---

## Sprint 3 — Exploration

| API | Priority |
|---|---|
| POST /dream/runs/{runId}/enter-node | P0 |
| POST /dream/runs/{runId}/node-action | P0 |
| POST /dream/runs/{runId}/puzzle-submit | P1 |
| POST /dream/runs/{runId}/complete | P0 |
| POST /dream/runs/{runId}/abandon | P1 |
| GET /dream/history | P1 |

---

## Sprint 4 — Combat

| API | Priority |
|---|---|
| POST /battle/start | P0 |
| POST /battle/result | P0 |

---

## Sprint 5 — Inventory & Reward

| API | Priority |
|---|---|
| GET /inventory/materials | P0 |
| GET /inventory/summary | P0 |
| GET /inventory/items | P1 |
| POST /rewards/claim | P1 |
| GET /rewards/history | P2 |

---

## Sprint 6 — Beast / Relic / Building

| API | Priority |
|---|---|
| GET /beasts | P0 |
| GET /beasts/{beastId} | P0 |
| POST /beasts/{beastId}/rename | P2 |
| GET /relics | P1 |
| POST /relics/{relicId}/equip | P1 |
| POST /relics/{relicId}/unequip | P1 |
| GET /dreamland | P0 |
| GET /buildings | P1 |
| POST /buildings/{buildingId}/place | P0 |
| POST /buildings/{buildingId}/move | P1 |
| POST /buildings/{buildingId}/store | P1 |
| GET /dreamland/bonuses | P1 |

---

## Sprint 7 — Crafting

| API | Priority |
|---|---|
| GET /crafting/recipes | P0 |
| GET /crafting/preview/{recipeId} | P1 |
| POST /crafting/craft | P0 |

---

## Sprint 8 — Metadata / Analytics / Admin

| API | Priority |
|---|---|
| GET /items/{itemId}/metadata | P1 |
| GET /items/{itemId}/mint-eligibility | P2 |
| POST /items/{itemId}/mint-preview | P3 |
| POST /analytics/events | P0 |
| GET /content/version | P1 |
| POST /admin/content/import | P2 |
| GET /admin/users/{userId}/summary | P2 |
| POST /admin/users/{userId}/grant-test-item | P2 |

---


Nếu cần cắt scope mạnh, chỉ giữ nhóm API này:

```text
POST /auth/guest
GET  /me
GET  /daily-dream
POST /dream/start
GET  /dream/runs/{runId}
POST /dream/runs/{runId}/node-action
POST /battle/start
POST /battle/result
POST /dream/runs/{runId}/complete
GET  /inventory/materials
GET  /beasts
GET  /dreamland
POST /crafting/craft
POST /buildings/{buildingId}/place
POST /analytics/events
```

Nhóm này đủ để chạy loop:

```text
Login → Dreamland → Daily Dream → Exploration → Combat → Complete → Reward → Craft/Place
```

---

## 24. Ghi chú triển khai Spring Boot

Khuyến nghị package theo module:

```text
com.mythofdreams.auth
com.mythofdreams.user
com.mythofdreams.dream
com.mythofdreams.dreamrun
com.mythofdreams.battle
com.mythofdreams.inventory
com.mythofdreams.reward
com.mythofdreams.crafting
com.mythofdreams.beast
com.mythofdreams.relic
com.mythofdreams.building
com.mythofdreams.dreamland
com.mythofdreams.metadata
com.mythofdreams.analytics
com.mythofdreams.admin
```

Mỗi module nên có:

```text
controller
service
repository
domain/entity
dto
mapper
```

Ví dụ:

```text
dreamrun
  ├ DreamRunController
  ├ DreamRunService
  ├ DreamRunRepository
  ├ DreamRunEntity
  ├ DreamRunStatus
  ├ NodeActionRequest
  └ DreamRunResponse
```

---

## 25. Kết luận

Backend API của MVP nên ưu tiên:

1. Chạy được core loop.
2. Server bảo vệ reward/economy.
3. API dễ gọi từ Unity.
4. Response đủ dữ liệu cho UI.
5. Không overbuild NFT/marketplace/PvP quá sớm.
6. Có idempotency cho request quan trọng.
7. Có transaction log cho mọi thay đổi inventory/economy.

Nếu backend dùng Java + Spring Boot, API trong file này có thể triển khai trực tiếp theo controller/service/repository.\n