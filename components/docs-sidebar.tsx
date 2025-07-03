"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import type { Category } from "@/lib/markdown"
import { useState } from "react"

interface DocsSidebarProps {
  categories: Category[]
  className?: string
}

export function DocsSidebar({ categories, className }: DocsSidebarProps) {
  const pathname = usePathname()
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(categories.map((cat) => cat.slug)))

  const toggleCategory = (categorySlug: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categorySlug)) {
      newExpanded.delete(categorySlug)
    } else {
      newExpanded.add(categorySlug)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <div className={cn("h-full overflow-y-auto pb-8", className)}>
      <div className="space-y-6 px-3 py-6">
        <div>
          <h4 className="mb-3 px-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">Getting started</h4>
          <div className="space-y-1">
            <Link
              href="/docs"
              className={cn(
                "flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === "/docs"
                  ? "bg-teal-500/10 text-teal-400 border-l-2 border-teal-400"
                  : "text-gray-300 hover:bg-gray-800 hover:text-gray-100",
              )}
            >
              Introduction
            </Link>
          </div>
        </div>

        {categories.map((category) => (
          <div key={category.slug}>
            <button
              onClick={() => toggleCategory(category.slug)}
              className="mb-3 flex w-full items-center justify-between px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
            >
              <span>{category.name}</span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  expandedCategories.has(category.slug) && "rotate-90",
                )}
              />
            </button>

            {expandedCategories.has(category.slug) && (
              <div className="space-y-1 pb-2">
                {category.docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className={cn(
                      "flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      pathname === `/docs/${doc.slug}`
                        ? "bg-teal-500/10 text-teal-400 border-l-2 border-teal-400"
                        : "text-gray-300 hover:bg-gray-800 hover:text-gray-100",
                    )}
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
