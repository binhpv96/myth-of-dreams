import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCategories } from "@/lib/markdown"
import { Clock, ArrowRight } from "lucide-react"

export default async function DocsHomePage() {
  const categories = await getCategories()

  return (
    <div className="px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center space-x-2 text-sm text-gray-500">
        <span>Tài liệu</span>
      </div>

      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-gray-100">Tài liệu</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          Khám phá tài liệu hướng dẫn và thông tin chi tiết về dự án của chúng tôi. Tìm hiểu cách sử dụng, tích hợp và
          tối ưu hóa sản phẩm.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((category) => (
          <Card
            key={category.slug}
            className="group relative overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-200"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-semibold text-gray-100">{category.name}</CardTitle>
                <ArrowRight className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-teal-400" />
              </div>
              <CardDescription className="text-gray-400 text-base leading-relaxed">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.docs.slice(0, 3).map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="block space-y-2 rounded-lg p-4 hover:bg-gray-800 transition-colors"
                >
                  <div className="font-medium text-gray-200">{doc.title}</div>
                  {doc.description && (
                    <div className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{doc.description}</div>
                  )}
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{doc.readTime} phút đọc</span>
                  </div>
                </Link>
              ))}
              {category.docs.length > 3 && (
                <div className="px-4 text-sm text-gray-500">+{category.docs.length - 3} tài liệu khác</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-16">
          <div className="mx-auto max-w-md">
            <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
              <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-300 mb-2">Chưa có tài liệu nào</h2>
            <p className="text-gray-500">Thêm các file .md vào thư mục documentations để bắt đầu</p>
          </div>
        </div>
      )}
    </div>
  )
}
