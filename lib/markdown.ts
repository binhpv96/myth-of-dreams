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
  readTime: number
  content: string
}

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

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      description: matterResult.data.description || "",
      tags: matterResult.data.tags || [],
      readTime: 5,
      content: matterResult.content,
    }
  })

  return allDocsData
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

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      description: matterResult.data.description || "",
      tags: matterResult.data.tags || [],
      readTime: 5,
      content: matterResult.content,
    }
  } catch (error) {
    console.error(`Error reading doc ${slug}:`, error)
    return null
  }
}
