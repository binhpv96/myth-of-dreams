import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GlobalHeader } from "@/components/global-header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Myth of Dreams - Home",
  description: "abc",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        <GlobalHeader />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  )
}
