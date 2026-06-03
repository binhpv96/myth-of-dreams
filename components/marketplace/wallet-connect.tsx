"use client"

import { Wallet, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface WalletConnectProps {
  isConnected: boolean
  onConnect: () => void
}

export function WalletConnect({ isConnected, onConnect }: WalletConnectProps) {
  if (!isConnected) {
    return (
      <Button onClick={onConnect} className="bg-teal-600 hover:bg-teal-700">
        <Wallet className="w-4 h-4 mr-2" />
        Kết nối ví
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-gray-700 text-gray-100 bg-transparent">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full"></div>
            <div className="text-left">
              <p className="text-sm font-medium">0x1234...5678</p>
              <p className="text-xs text-gray-400">1,234 ARCH • 56 DREAM</p>
            </div>
            <ChevronDown className="w-4 h-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700 w-64">
        <div className="p-3 border-b border-gray-700">
          <p className="font-medium text-gray-100">Ví của tôi</p>
          <p className="text-sm text-gray-400">0x1234...5678</p>
        </div>
        <div className="p-3 border-b border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">ARCH Token</span>
            <span className="font-medium text-gray-100">1,234.56</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">DREAM Token</span>
            <span className="font-medium text-gray-100">56.78</span>
          </div>
        </div>
        <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">Xem ví</DropdownMenuItem>
        <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">Lịch sử giao dịch</DropdownMenuItem>
        <DropdownMenuItem className="text-gray-300 hover:bg-gray-800" onClick={onConnect}>
          Ngắt kết nối
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
