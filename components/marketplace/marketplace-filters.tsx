"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

interface MarketplaceFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedRarity: string
  onRarityChange: (rarity: string) => void
  priceRange: number[]
  onPriceRangeChange: (range: number[]) => void
}

const categories = [
  { id: "all", name: "Tất cả", count: 1247 },
  { id: "nft-land", name: "Đất NFT", count: 234 },
  { id: "nft-building", name: "Công trình NFT", count: 456 },
  { id: "nft-decoration", name: "Trang trí NFT", count: 123 },
  { id: "nft-blueprint", name: "Blueprint", count: 67 },
  { id: "nft-memory", name: "Dream Memory", count: 23 },
  { id: "nft-character", name: "Nhân vật NFT", count: 89 },
  { id: "token", name: "Token", count: 2 },
  { id: "item-common", name: "Items thường", count: 253 },
]

const rarities = [
  { id: "all", name: "Tất cả", color: "gray" },
  { id: "common", name: "Common", color: "gray" },
  { id: "uncommon", name: "Uncommon", color: "green" },
  { id: "rare", name: "Rare", color: "blue" },
  { id: "epic", name: "Epic", color: "teal" },
  { id: "legendary", name: "Legendary", color: "orange" },
  { id: "mythic", name: "Mythic", color: "red" },
]

export function MarketplaceFilters({
  selectedCategory,
  onCategoryChange,
  selectedRarity,
  onRarityChange,
  priceRange,
  onPriceRangeChange,
}: MarketplaceFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-gray-100">Danh mục</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                selectedCategory === category.id
                  ? "bg-teal-500/20 text-teal-400 border border-teal-500/50"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="bg-gray-800 text-gray-400">
                {category.count}
              </Badge>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Rarity */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-gray-100">Độ hiếm</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {rarities.map((rarity) => (
            <button
              key={rarity.id}
              onClick={() => onRarityChange(rarity.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                selectedRarity === rarity.id
                  ? "bg-teal-500/20 text-teal-400 border border-teal-500/50"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full bg-${rarity.color}-400`}></div>
                <span>{rarity.name}</span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-gray-100">Khoảng giá (ARCH)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={onPriceRangeChange}
              max={10000}
              min={0}
              step={100}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{priceRange[0]} ARCH</span>
            <span>{priceRange[1]} ARCH</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Filters */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-gray-100">Bộ lọc nhanh</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <button className="w-full p-3 text-left text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            🔥 Hot items
          </button>
          <button className="w-full p-3 text-left text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            ⭐ Được yêu thích
          </button>
          <button className="w-full p-3 text-left text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            💎 Giá tốt
          </button>
          <button className="w-full p-3 text-left text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            🆕 Mới đăng bán
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
