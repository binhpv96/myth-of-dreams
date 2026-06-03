"use client"

import { useState, useMemo } from "react"
import { Search, Grid, List, Wallet, TrendingUp, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MarketplaceFilters } from "@/components/marketplace/marketplace-filters"
import { ItemCard } from "@/components/marketplace/item-card"
import { ItemModal } from "@/components/marketplace/item-modal"
import { WalletConnect } from "@/components/marketplace/wallet-connect"
import { marketplaceItems, type MarketplaceItem } from "@/lib/marketplace-data"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedRarity, setSelectedRarity] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const filteredItems = useMemo(() => {
    const filtered = marketplaceItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
      const matchesRarity = selectedRarity === "all" || item.rarity === selectedRarity
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesRarity && matchesPrice
    })

    // Sort items
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "popular":
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case "newest":
      default:
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, selectedRarity, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950/95 backdrop-blur">
        <div className="mx-auto max-w-screen-2xl px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-100 mb-2">Marketplace</h1>
              <p className="text-gray-400">Giao dịch NFT, Token và Items trong game</p>
            </div>
            <WalletConnect isConnected={isWalletConnected} onConnect={() => setIsWalletConnected(!isWalletConnected)} />
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Tìm kiếm NFT, items..."
                  className="pl-10 bg-gray-900 border-gray-700 text-gray-100"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 rounded-md"
              >
                <option value="newest">Mới nhất</option>
                <option value="price-low">Giá thấp → cao</option>
                <option value="price-high">Giá cao → thấp</option>
                <option value="popular">Phổ biến</option>
              </select>

              <div className="flex border border-gray-700 rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-80 shrink-0">
            <MarketplaceFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedRarity={selectedRarity}
              onRarityChange={setSelectedRarity}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Tổng giao dịch</p>
                      <p className="text-xl font-bold text-gray-100">2,847</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Wallet className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Volume 24h</p>
                      <p className="text-xl font-bold text-gray-100">1,234 ARCH</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <div>
                      <p className="text-sm text-gray-400">Items đang bán</p>
                      <p className="text-xl font-bold text-gray-100">{filteredItems.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Người dùng</p>
                      <p className="text-xl font-bold text-gray-100">15,692</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Items Grid/List */}
            {filteredItems.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                }
              >
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    viewMode={viewMode}
                    onSelect={() => setSelectedItem(item)}
                    isWalletConnected={isWalletConnected}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto max-w-md">
                  <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
                    <Search className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2">Không tìm thấy items</h3>
                  <p className="text-gray-500">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          isWalletConnected={isWalletConnected}
        />
      )}
    </div>
  )
}
