"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

interface DocsTableOfContentsProps {
  content: string
}

export function DocsTableOfContents({ content }: DocsTableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      if (level <= 3) {
        headings.push({ id, text, level })
      }
    }

    setToc(headings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    const headingElements = document.querySelectorAll("h1, h2, h3")
    headingElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  if (toc.length === 0) return null

  return (
    <div className="space-y-4">
      <p className="font-semibold text-gray-200 text-sm uppercase tracking-wider">Trên trang này</p>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li key={item.id} className={cn("", item.level === 3 && "ml-4")}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-sm transition-colors hover:text-teal-400 py-1",
                item.level === 1 && "font-medium",
                activeId === item.id ? "font-medium text-teal-400" : "text-gray-400",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
