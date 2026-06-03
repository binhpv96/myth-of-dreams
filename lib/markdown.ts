import fs from "fs"
import path from "path"
import matter from "gray-matter"

const docsDirectory = path.join(process.cwd(), "documentations")

export interface Doc {
  slug: string
  title: string
  description?: string
  date: string
  tags?: string[]
  category?: string
  order?: number
  readTime: number
  content: string
}

export interface Category {
  name: string
  slug: string
  description?: string
  docs: Doc[]
}

// Server-only functions
export async function getAllDocs(): Promise<Doc[]> {
  if (!fs.existsSync(docsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(docsDirectory)
  const markdownFiles = fileNames.filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))

  const allDocsData: Doc[] = markdownFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "")
    const fullPath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    // Calculate read time
    const wordsPerMinute = 200
    const words = matterResult.content.split(/\s+/).length
    const readTime = Math.ceil(words / wordsPerMinute)

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      description: matterResult.data.description || "",
      tags: matterResult.data.tags || [],
      category: matterResult.data.category || "overview",
      order: matterResult.data.order || 0,
      readTime,
      content: matterResult.content,
    }
  })

  return allDocsData.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
  if (!fs.existsSync(docsDirectory)) {
    return null
  }

  try {
    const mdPath = path.join(docsDirectory, `${slug}.md`)
    const mdxPath = path.join(docsDirectory, `${slug}.mdx`)

    let fullPath: string
    if (fs.existsSync(mdPath)) {
      fullPath = mdPath
    } else if (fs.existsSync(mdxPath)) {
      fullPath = mdxPath
    } else {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    const wordsPerMinute = 200
    const words = matterResult.content.split(/\s+/).length
    const readTime = Math.ceil(words / wordsPerMinute)

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      description: matterResult.data.description || "",
      tags: matterResult.data.tags || [],
      category: matterResult.data.category || "overview",
      order: matterResult.data.order || 0,
      readTime,
      content: matterResult.content,
    }
  } catch (error) {
    console.error(`Error reading doc ${slug}:`, error)
    return null
  }
}

export async function getCategories(): Promise<Category[]> {
  const docs = await getAllDocs()
  const categoryMap = new Map<string, Doc[]>()

  docs.forEach((doc) => {
    const category = doc.category || "overview"
    if (!categoryMap.has(category)) {
      categoryMap.set(category, [])
    }
    categoryMap.get(category)!.push(doc)
  })

  const categories: Category[] = []
  categoryMap.forEach((docs, categoryName) => {
    categories.push({
      name: getCategoryName(categoryName),
      slug: categoryName,
      description: getCategoryDescription(categoryName),
      docs: docs.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    })
  })

  const categoryOrder = ["overview", "game-design", "worldbuilding", "visual", "technical", "production"]
  return categories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.slug)
    const indexB = categoryOrder.indexOf(b.slug)
    return (indexA !== -1 ? indexA : 99) - (indexB !== -1 ? indexB : 99)
  })
}

function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    "overview": "Tổng quan",
    "game-design": "Game Design",
    "worldbuilding": "Worldbuilding",
    "technical": "Technical",
    "visual": "Visual",
    "production": "Production",
  }
  return names[category] || (category.charAt(0).toUpperCase() + category.slice(1))
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    "overview": "Tổng quan dự án, tầm nhìn và lộ trình phát triển",
    "game-design": "Tài liệu thiết kế hệ thống, cơ chế gameplay",
    "worldbuilding": "Cốt truyện, tiểu sử và xây dựng thế giới",
    "technical": "Kiến trúc hệ thống, API, cơ sở dữ liệu",
    "visual": "Định hướng nghệ thuật, phong cách UI/UX",
    "production": "Quy trình, biểu mẫu và kế hoạch sản xuất",
  }
  return descriptions[category] || "Tài liệu chuyên môn"
}

export async function getDocsByCategory(category: string): Promise<Doc[]> {
  const docs = await getAllDocs()
  return docs.filter((doc) => doc.category === category).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}
