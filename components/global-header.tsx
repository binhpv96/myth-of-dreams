"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, User, Globe, Menu, X, Settings, FileText, Home } from "lucide-react"
import { Input } from "@/components/ui/input"

export function GlobalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-8">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-900 shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MoD</span>
            </div>
            <span className="text-xl font-bold text-gray-100">Myth of Dreams</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/docs"
              className="flex items-center space-x-2 text-sm font-medium text-gray-300 transition-colors hover:text-teal-400"
            >
              <FileText className="h-4 w-4" />
              <span>Docs</span>
            </Link>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Searching . . ."
              className="w-64 bg-gray-900 border-gray-700 pl-10 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-gray-100 hover:bg-gray-800">
                <Globe className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">VI</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800 hover:text-gray-100">
                🇻🇳 Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800 hover:text-gray-100">
                🇺🇸 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-gray-100 hover:bg-gray-800">
                <User className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">Sign In</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800 hover:text-gray-100">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800 hover:text-gray-100">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300 hover:text-gray-100 hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-800 bg-gray-950 md:hidden">
          <div className="space-y-1 px-6 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Searching . . ."
                className="w-full bg-gray-900 border-gray-700 pl-10 text-gray-100 placeholder:text-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Mobile Navigation */}
            <Link
              href="/"
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/docs"
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              <span>Docs</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
