import type React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import { getCategories } from "@/lib/markdown"

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex">
          <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-gray-800 bg-gray-950 md:block">
            <DocsSidebar categories={categories} />
          </aside>
          <main className="flex-1 md:ml-72">
            <div className="mx-auto max-w-4xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
