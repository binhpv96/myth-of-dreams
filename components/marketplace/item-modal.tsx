"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Heart, Share2, Flag, Eye, Zap, User, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { MarketplaceItem } from "@/lib/marketplace-data"

interface ItemModalProps {
  item: MarketplaceItem
  isOpen: boolean
  onClose: () => void
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

export function ItemModal({ item, isOpen, onClose, isWalletConnected }: ItemModalProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [quantity, setQuantity] = useState(1)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex h-full">
          {/* Left side - Image */}
          <div className="w-1/2 relative bg-gray-800">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            <div
              className={`absolute top-4 right-4 w-6 h-6 rounded-full ${rarityColors[item.rarity]} ring-2 ring-gray-900`}
            ></div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Right side - Details */}
          <div className="w-1/2 flex flex-col">
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-100 mb-2">{item.name}</h1>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-gray-800 text-gray-400 capitalize">
                      {item.rarity}
                    </Badge>
                    <Badge variant="outline" className="border-teal-500 text-teal-400">
                      {item.category.replace("nft-", "").replace("item-", "")}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views} lượt xem</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes} lượt thích</span>
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-400" : "text-gray-400"}
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Price and Buy */}
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Giá hiện tại</p>
                    <div className="text-3xl font-bold text-gray-100">
                      {item.price} <span className="text-lg text-teal-400">ARCH</span>
                    </div>
                    <p className="text-sm text-gray-500">≈ $24.50 USD</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 mb-1">Số lượng</p>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center text-gray-100">{quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1 bg-teal-600 hover:bg-teal-700" disabled={!isWalletConnected}>
                    <Zap className="w-4 h-4 mr-2" />
                    Mua ngay
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Đặt giá
                  </Button>
                </div>

                {!isWalletConnected && (
                  <p className="text-sm text-yellow-400 mt-2 text-center">Kết nối ví để mua item này</p>
                )}
              </div>

              {/* Seller Info */}
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-800 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-100">{item.seller}</p>
                  <p className="text-sm text-gray-400">Người bán</p>
                </div>
                <div className="flex items-center space-x-1 text-green-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Đã xác minh</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex-1 overflow-y-auto">
              <Tabs defaultValue="details" className="h-full">
                <TabsList className="w-full bg-gray-800 border-b border-gray-700">
                  <TabsTrigger value="details" className="flex-1">
                    Chi tiết
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex-1">
                    Lịch sử
                  </TabsTrigger>
                  <TabsTrigger value="offers" className="flex-1">
                    Đề xuất
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-100 mb-2">Mô tả</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-100 mb-2">Thuộc tính</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm text-gray-400">Độ hiếm</p>
                        <p className="font-medium text-gray-100 capitalize">{item.rarity}</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm text-gray-400">Loại</p>
                        <p className="font-medium text-gray-100">{item.category}</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm text-gray-400">Ngày tạo</p>
                        <p className="font-medium text-gray-100">
                          {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm text-gray-400">Token ID</p>
                        <p className="font-medium text-gray-100 font-mono">#{item.id}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="history" className="p-6">
                  <div className="space-y-3">
                    {[
                      { action: "Đăng bán", price: item.price, user: item.seller, time: "2 giờ trước" },
                      { action: "Chuyển nhượng", price: null, user: "user123", time: "1 ngày trước" },
                      { action: "Mua", price: item.price - 50, user: "buyer456", time: "3 ngày trước" },
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-100">{event.action}</p>
                            <p className="text-sm text-gray-400">bởi {event.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {event.price && <p className="font-medium text-gray-100">{event.price} ARCH</p>}
                          <p className="text-sm text-gray-400">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="offers" className="p-6">
                  <div className="text-center py-8">
                    <p className="text-gray-400">Chưa có đề xuất nào</p>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      Đặt giá đề xuất
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
