"use client"

import Image from "next/image"
import { Heart, Eye, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { MarketplaceItem } from "@/lib/marketplace-data"

interface ItemCardProps {
  item: MarketplaceItem
  viewMode: "grid" | "list"
  onSelect: () => void
  isWalletConnected: boolean
}

const rarityColors = {
  common: "bg-gray-500",
  uncommon: "bg-green-500",
  rare: "bg-blue-500",
  epic: "bg-teal-500",
  legendary: "bg-orange-500",
  mythic: "bg-red-500",
}

const categoryIcons = {
  "nft-land": "🏞️",
  "nft-building": "🏗️",
  "nft-decoration": "🎨",
  "nft-blueprint": "📋",
  "nft-memory": "💭",
  "nft-character": "👤",
  token: "🪙",
  "item-common": "📦",
}

export function ItemCard({ item, viewMode, onSelect, isWalletConnected }: ItemCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-800">
              <Image src={item.image || "/rabbit.svg"} alt={item.name} fill className="object-cover" />
              <div className={`absolute top-1 right-1 w-3 h-3 rounded-full ${rarityColors[item.rarity]}`}></div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg">{categoryIcons[item.category]}</span>
                <h3 className="font-semibold text-gray-100 truncate">{item.name}</h3>
                <Badge variant="secondary" className="bg-gray-800 text-gray-400 text-xs">
                  {item.rarity}
                </Badge>
              </div>
              <p className="text-sm text-gray-400 line-clamp-1 mb-2">{item.description}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{item.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>{item.likes}</span>
                </span>
                <span>by {item.seller}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-gray-100 mb-1">
                {item.price} <span className="text-sm text-teal-400">ARCH</span>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={onSelect}>
                  Xem
                </Button>
                <Button size="sm" disabled={!isWalletConnected} className="bg-teal-600 hover:bg-teal-740">
                  <Zap className="w-3 h-3 mr-1" />
                  Mua
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-200 group cursor-pointer"
      onClick={onSelect}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square rounded-t-lg overflow-hidden bg-gray-800">
          <Image
            src={item.image || "/rabbit.svg"}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div
            className={`absolute top-2 right-2 w-4 h-4 rounded-full ${rarityColors[item.rarity]} ring-2 ring-gray-900`}
          ></div>
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-black/50 text-white text-xs">
              {categoryIcons[item.category]} {item.category.replace("nft-", "").replace("item-", "")}
            </Badge>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
              <Eye className="w-4 h-4 mr-2" />
              Xem chi tiết
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-100 truncate">{item.name}</h3>
            <Badge variant="secondary" className="bg-gray-800 text-gray-400 text-xs capitalize">
              {item.rarity}
            </Badge>
          </div>

          <p className="text-sm text-gray-400 line-clamp-2 mb-3">{item.description}</p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{item.views}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Heart className="w-3 h-3" />
                <span>{item.likes}</span>
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{new Date(item.createdAt).toLocaleDateString("vi-VN")}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-gray-100">
                {item.price} <span className="text-sm text-teal-400">ARCH</span>
              </div>
              <div className="text-xs text-gray-500">by {item.seller}</div>
            </div>
            <Button
              size="sm"
              disabled={!isWalletConnected}
              className="bg-teal-400 hover:bg-teal-700"
              onClick={(e) => {
                e.stopPropagation()
                // Handle buy logic
              }}
            >
              <Zap className="w-3 h-3 mr-1" />
              Mua
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
