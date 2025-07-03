import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface DocsBreadcrumbProps {
  items: Array<{
    label: string
    href?: string
  }>
}

export function DocsBreadcrumb({ items }: DocsBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <Link href="/" className="flex items-center hover:text-gray-900 dark:hover:text-gray-200">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-900 dark:hover:text-gray-200">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-gray-200 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
