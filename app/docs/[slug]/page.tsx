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
    <div className="relative">
      <div className="px-8 py-12">
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
          <h1 className="text-5xl font-bold tracking-tight text-gray-100 leading-tight">{doc.title}</h1>
          {doc.description && <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">{doc.description}</p>}

          {/* Meta info */}
          <div className="flex items-center space-x-6 text-sm text-gray-500 pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(doc.date).toLocaleDateString("vi-VN")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{doc.readTime} minutes</span>
            </div>
            {doc.tags && doc.tags.length > 0 && (
              <div className="flex space-x-2">
                {doc.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="prose prose-lg prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:leading-8 prose-p:text-gray-300 prose-strong:text-gray-100 prose-code:text-teal-400 prose-code:bg-gray-900 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                table: ({ children }) => (
                  <div className="my-8 w-full overflow-x-auto rounded-lg border border-gray-800">
                    <table className="w-full border-collapse">{children}</table>
                  </div>
                ),
                thead: ({ children }) => <thead className="bg-gray-900">{children}</thead>,
                th: ({ children }) => (
                  <th className="border-b border-gray-800 px-6 py-4 text-left font-semibold text-gray-100">
                    {children}
                  </th>
                ),
                td: ({ children }) => <td className="border-b border-gray-800 px-6 py-4 text-gray-300">{children}</td>,
                h1: ({ children, ...props }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")
                  return (
                    <h1 id={id} className="text-4xl font-bold mt-16 mb-8 text-gray-100 first:mt-0" {...props}>
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
                    <h2 id={id} className="text-3xl font-semibold mt-12 mb-6 text-gray-100" {...props}>
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
                    <h3 id={id} className="text-2xl font-medium mt-10 mb-4 text-gray-100" {...props}>
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
                    <h4 id={id} className="text-xl font-medium mt-8 mb-3 text-gray-200" {...props}>
                      {children}
                    </h4>
                  )
                },
                p: ({ children }) => <p className="mb-6 leading-8 text-gray-300">{children}</p>,
                ul: ({ children }) => <ul className="mb-6 space-y-2 text-gray-300">{children}</ul>,
                ol: ({ children }) => <ol className="mb-6 space-y-2 text-gray-300">{children}</ol>,
                li: ({ children }) => <li className="leading-7">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="my-8 border-l-4 border-teal-500 bg-teal-500/5 pl-6 py-4 rounded-r-lg">
                    <div className="text-gray-200">{children}</div>
                  </blockquote>
                ),
                code: ({ children, className }) => {
                  if (className) {
                    return (
                      <code className="block bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm text-gray-100 overflow-x-auto">
                        {children}
                      </code>
                    )
                  }
                  return (
                    <code className="bg-gray-800 text-teal-400 px-2 py-1 rounded text-sm font-mono">{children}</code>
                  )
                },
              }}
            >
              {doc.content}
            </ReactMarkdown>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-800">
            {prevDoc ? (
              <Link
                href={`/docs/${prevDoc.slug}`}
                className="flex items-center space-x-3 rounded-lg border border-gray-800 bg-gray-900 px-6 py-4 transition-colors hover:border-gray-700 hover:bg-gray-800"
              >
                <ArrowLeft className="h-4 w-4 text-gray-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Before</div>
                  <div className="font-medium text-gray-200">{prevDoc.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextDoc && (
              <Link
                href={`/docs/${nextDoc.slug}`}
                className="flex items-center space-x-3 rounded-lg border border-gray-800 bg-gray-900 px-6 py-4 transition-colors hover:border-gray-700 hover:bg-gray-800"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next</div>
                  <div className="font-medium text-gray-200">{nextDoc.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="fixed right-8 top-32 hidden w-64 xl:block">
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
          <DocsTableOfContents content={doc.content} />
        </div>
      </div>
    </div>
  )
}
