import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Badge } from "@/components/ui/badge"
import { DocsTableOfContents } from "@/components/docs-toc"
import { getDocBySlug, getAllDocs, getCategories } from "@/lib/markdown"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

interface BlogdocPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const docs = await getAllDocs()
  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: BlogdocPageProps) {
  const { slug } = await params
  const doc = await getDocBySlug(slug)

  if (!doc) {
    return {
      title: "Tài liệu không tồn tại",
    }
  }

  return {
    title: `${doc.title} | Tài liệu`,
    description: doc.description,
  }
}

export default async function BlogdocPage({ params }: BlogdocPageProps) {
  const { slug } = await params
  const doc = await getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  const categories = await getCategories()
  const currentCategory = categories.find((cat) => cat.docs.some((d) => d.slug === slug))
  const categoryDocs = currentCategory?.docs || []
  const currentIndex = categoryDocs.findIndex((d) => d.slug === slug)
  const prevDoc = currentIndex > 0 ? categoryDocs[currentIndex - 1] : null
  const nextDoc = currentIndex < categoryDocs.length - 1 ? categoryDocs[currentIndex + 1] : null

  return (
    <div className="flex flex-col xl:flex-row xl:items-start xl:gap-8 px-4 md:px-8 py-12 mx-auto max-w-5xl xl:max-w-7xl">
      <div className="flex-1 min-w-0 w-full">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/docs" className="hover:text-teal-400 transition-colors">
            Docs
          </Link>
          {currentCategory && (
            <>
              <span>/</span>
              <span className="text-gray-400">{currentCategory.name}</span>
            </>
          )}
        </div>

        {/* Header */}
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-100 leading-tight">{doc.title}</h1>
          {doc.description && <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">{doc.description}</p>}

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 md:space-x-6 text-sm text-gray-500 pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(doc.date).toLocaleDateString("vi-VN")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{doc.readTime} phút đọc</span>
            </div>
            {doc.tags && doc.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {doc.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* TOC for Mobile & Tablet */}
        <div className="xl:hidden mb-10">
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
            <DocsTableOfContents content={doc.content} />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="prose prose-base md:prose-lg prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-2xl md:prose-h2:text-3xl prose-h3:text-xl md:prose-h3:text-2xl prose-h4:text-lg md:prose-h4:text-xl prose-p:leading-8 prose-p:text-gray-300 prose-strong:text-gray-100 prose-code:text-teal-400 prose-code:bg-gray-900/80 prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-800 prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 prose-li:marker:text-teal-400">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                table: ({ children }) => (
                  <div className="my-8 w-full overflow-x-auto rounded-lg border border-gray-800">
                    <table className="w-full border-collapse text-sm md:text-base min-w-[600px]">{children}</table>
                  </div>
                ),
                thead: ({ children }) => <thead className="bg-gray-900/80">{children}</thead>,
                th: ({ children }) => (
                  <th className="border-b border-gray-800 px-4 md:px-6 py-4 text-left font-semibold text-gray-100">
                    {children}
                  </th>
                ),
                td: ({ children }) => <td className="border-b border-gray-800 px-4 md:px-6 py-4 text-gray-300">{children}</td>,
                h1: ({ children, ...props }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")
                  return (
                    <h1 id={id} className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-gray-100 first:mt-0" {...props}>
                      {children}
                    </h1>
                  )
                },
                h2: ({ children, ...props }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")
                  return (
                    <h2 id={id} className="text-2xl md:text-3xl font-semibold mt-12 mb-6 text-gray-100" {...props}>
                      {children}
                    </h2>
                  )
                },
                h3: ({ children, ...props }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")
                  return (
                    <h3 id={id} className="text-xl md:text-2xl font-medium mt-10 mb-4 text-gray-100" {...props}>
                      {children}
                    </h3>
                  )
                },
                h4: ({ children, ...props }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")
                  return (
                    <h4 id={id} className="text-lg md:text-xl font-medium mt-8 mb-3 text-gray-200" {...props}>
                      {children}
                    </h4>
                  )
                },
                p: ({ children }) => <p className="mb-6 leading-8 text-gray-300">{children}</p>,
                ul: ({ children }) => (
                  <ul className="mb-6 space-y-3 text-gray-300 list-disc list-outside ml-6 marker:text-teal-400">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 space-y-3 text-gray-300 list-decimal list-outside ml-6 marker:text-teal-400 marker:font-semibold">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="leading-7 pl-2">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="my-8 border-l-4 border-teal-500 bg-teal-500/10 pl-6 py-4 rounded-r-lg italic">
                    <div className="text-gray-200">{children}</div>
                  </blockquote>
                ),
                strong: ({ children }) => <strong className="font-bold text-gray-100">{children}</strong>,
                em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
                pre: ({ children }) => (
                  <div className="my-6 rounded-lg border border-gray-800 bg-gray-900/80">
                    <pre className="overflow-x-auto p-4">
                      {children}
                    </pre>
                  </div>
                ),
                code: ({ children, className }) => {
                  if (className?.includes("language-")) {
                    return <code className="text-sm text-gray-100 block min-w-max">{children}</code>
                  }
                  return <code className="bg-gray-800/80 text-teal-400 px-1.5 py-0.5 rounded-md text-sm font-mono mx-1">{children}</code>
                },
                // Custom component for better emoji and special character handling
                text: ({ children }) => {
                  if (typeof children === "string") {
                    return <span>{children}</span>
                  }
                  return children
                },
              }}
            >
              {doc.content}
            </ReactMarkdown>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-16 pt-8 border-t border-gray-800 gap-4">
            {prevDoc ? (
              <Link
                href={`/docs/${prevDoc.slug}`}
                className="flex flex-1 items-center space-x-3 rounded-lg border border-gray-800 bg-gray-900/50 px-6 py-4 transition-colors hover:border-gray-700 hover:bg-gray-800"
              >
                <ArrowLeft className="h-4 w-4 text-gray-400 shrink-0" />
                <div className="text-left min-w-0">
                  <div className="text-sm text-gray-500">Bài trước</div>
                  <div className="font-medium text-gray-200 truncate">{prevDoc.title}</div>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}

            {nextDoc && (
              <Link
                href={`/docs/${nextDoc.slug}`}
                className="flex flex-1 items-center justify-end space-x-3 rounded-lg border border-gray-800 bg-gray-900/50 px-6 py-4 transition-colors hover:border-gray-700 hover:bg-gray-800"
              >
                <div className="text-right min-w-0">
                  <div className="text-sm text-gray-500">Bài tiếp theo</div>
                  <div className="font-medium text-gray-200 truncate">{nextDoc.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Table of Contents Desktop */}
      <div className="hidden xl:block w-64 shrink-0 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-8">
        <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-5">
          <DocsTableOfContents content={doc.content} />
        </div>
      </div>
    </div>
  )
}
