export interface MarketplaceItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category:
    | "nft-land"
    | "nft-building"
    | "nft-decoration"
    | "nft-blueprint"
    | "nft-memory"
    | "nft-character"
    | "token"
    | "item-common"
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic"
  seller: string
  createdAt: string
  views: number
  likes: number
}

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: "1",
    name: "Floating Dream Island",
    description: "Một hòn đảo nổi tuyệt đẹp với khả năng tạo ra 50 ARCH/giờ. Có thể xây dựng tối đa 10 công trình.",
    price: 1250,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-land",
    rarity: "legendary",
    seller: "DreamBuilder",
    createdAt: "2024-01-15T10:30:00Z",
    views: 1247,
    likes: 89,
  },
  {
    id: "2",
    name: "Crystal Palace",
    description:
      "Cung điện pha lê tuyệt đẹp với hiệu ứng ánh sáng ma thuật. Tăng 200% thu nhập từ các công trình lân cận.",
    price: 890,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-building",
    rarity: "epic",
    seller: "ArchitectMaster",
    createdAt: "2024-01-14T15:45:00Z",
    views: 892,
    likes: 67,
  },
  {
    id: "3",
    name: "Rainbow Fountain",
    description:
      "Đài phun nước cầu vồng mang lại may mắn. Tăng 15% cơ hội nhận được items hiếm khi hoàn thành nhiệm vụ.",
    price: 340,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-decoration",
    rarity: "rare",
    seller: "LuckyCharm",
    createdAt: "2024-01-13T09:20:00Z",
    views: 567,
    likes: 43,
  },
  {
    id: "4",
    name: "Ancient Temple Blueprint",
    description:
      "Bản thiết kế đền cổ cho phép xây dựng công trình tạo ra 100 ARCH/giờ và có khả năng triệu hồi spirit guardians.",
    price: 2100,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-blueprint",
    rarity: "mythic",
    seller: "AncientWisdom",
    createdAt: "2024-01-12T14:10:00Z",
    views: 2341,
    likes: 156,
  },
  {
    id: "5",
    name: "First Dream Memory",
    description: "Ký ức giấc mơ đầu tiên của game, không thể tái tạo. Chỉ có 100 NFT này tồn tại trong toàn bộ game.",
    price: 5000,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-memory",
    rarity: "mythic",
    seller: "Genesis",
    createdAt: "2024-01-10T12:00:00Z",
    views: 4567,
    likes: 234,
  },
  {
    id: "6",
    name: "Master Architect",
    description:
      "Kiến trúc sư bậc thầy với khả năng giảm 50% thời gian xây dựng và tăng 25% hiệu quả của tất cả công trình.",
    price: 1680,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-character",
    rarity: "legendary",
    seller: "CharacterForge",
    createdAt: "2024-01-11T16:30:00Z",
    views: 1123,
    likes: 78,
  },
  {
    id: "7",
    name: "ARCH Token Pack",
    description: "Gói 1000 ARCH token để sử dụng trong game. Có thể dùng để craft, nâng cấp và mua items.",
    price: 1000,
    image: "/placeholder.svg?height=400&width=400",
    category: "token",
    rarity: "common",
    seller: "TokenVault",
    createdAt: "2024-01-16T08:00:00Z",
    views: 234,
    likes: 12,
  },
  {
    id: "8",
    name: "Magic Building Materials",
    description: "Bộ nguyên liệu xây dựng ma thuật gồm 50 Crystal Stones, 30 Mystic Woods và 20 Star Dust.",
    price: 150,
    image: "/placeholder.svg?height=400&width=400",
    category: "item-common",
    rarity: "uncommon",
    seller: "MaterialSupply",
    createdAt: "2024-01-15T20:15:00Z",
    views: 445,
    likes: 23,
  },
  {
    id: "9",
    name: "Enchanted Garden",
    description: "Khu vườn phép thuật với các loài hoa hiếm, tự động tạo ra 25 ARCH/giờ và có cơ hội spawn rare seeds.",
    price: 720,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-decoration",
    rarity: "epic",
    seller: "GardenMaster",
    createdAt: "2024-01-14T11:45:00Z",
    views: 678,
    likes: 54,
  },
  {
    id: "10",
    name: "Sky Castle",
    description:
      "Lâu đài trên không với khả năng bay, có thể di chuyển giữa các vùng đất khác nhau. Tạo ra 75 ARCH/giờ.",
    price: 1950,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-building",
    rarity: "legendary",
    seller: "SkyLord",
    createdAt: "2024-01-13T13:20:00Z",
    views: 1567,
    likes: 112,
  },
  {
    id: "11",
    name: "Mystic Forest Land",
    description:
      "Vùng đất rừng thần bí với khả năng tự nhiên tạo ra magical resources. Có thể xây dựng tối đa 8 công trình.",
    price: 980,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-land",
    rarity: "rare",
    seller: "ForestKeeper",
    createdAt: "2024-01-12T17:30:00Z",
    views: 789,
    likes: 65,
  },
  {
    id: "12",
    name: "Dragon Statue",
    description:
      "Tượng rồng cổ đại mang lại sức mạnh bảo vệ. Tăng 30% khả năng phòng thủ cho tất cả công trình trong bán kính 5 ô.",
    price: 450,
    image: "/placeholder.svg?height=400&width=400",
    category: "nft-decoration",
    rarity: "rare",
    seller: "DragonCraft",
    createdAt: "2024-01-11T09:15:00Z",
    views: 523,
    likes: 41,
  },
]
