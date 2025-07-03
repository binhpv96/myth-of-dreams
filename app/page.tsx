import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllDocs } from "@/lib/markdown"

export default async function HomePage() {
  const docs = await getAllDocs()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tài liệu</h1>

        {docs.length === 0 ? (
          <p>Chưa có tài liệu nào. Thêm file .md vào thư mục documentations.</p>
        ) : (
          <div className="space-y-4">
            {docs.map((doc) => (
              <Card key={doc.slug}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/docs/${doc.slug}`} className="hover:underline">
                      {doc.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                {doc.description && (
                  <CardContent>
                    <p className="text-muted-foreground">{doc.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
