import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Download, Users, Trophy, Gamepad2, Star, ArrowRight, Shield, Zap, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-100 sm:text-7xl lg:text-8xl">
              Khám phá thế giới
              <span className="block text-transparent bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text">
                Myth of Dreams
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Myth of Dreams là một tựa game Play-to-Earn tích hợp NFT, nơi người chơi xây dựng thành phố trong giấc mơ và kiếm token từ quá trình phát triển công trình.
            </p>
            <div className="mt-12 flex items-center justify-center space-x-6">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Play Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">1M+</div>
              <div className="text-gray-400 mt-2">Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">99+</div>
              <div className="text-gray-400 mt-2">Levels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">100+</div>
              <div className="text-gray-400 mt-2">Items</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">24/7</div>
              <div className="text-gray-400 mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Tính năng nổi bật</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trải nghiệm những tính năng độc đáo và sáng tạo trong Myth of Dreams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-colors">
              <CardHeader className="text-center p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10">
                  <Gamepad2 className="h-8 w-8 text-teal-400" />
                </div>
                <CardTitle className="text-2xl text-gray-100 mb-4">Gameplay sáng tạo</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Hệ thống gameplay độc đáo với cơ chế chiến đấu mới lạ và khả năng tùy chỉnh cao.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-colors">
              <CardHeader className="text-center p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10">
                  <Users className="h-8 w-8 text-teal-400" />
                </div>
                <CardTitle className="text-2xl text-gray-100 mb-4">Cộng đồng sôi động</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Tham gia cộng đồng hàng triệu người chơi với các sự kiện và giải đấu hấp dẫn.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-colors">
              <CardHeader className="text-center p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10">
                  <Trophy className="h-8 w-8 text-teal-400" />
                </div>
                <CardTitle className="text-2xl text-gray-100 mb-4">Hệ thống thành tựu</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Mở khóa hàng trăm thành tựu và phần thưởng độc quyền khi hoàn thành thử thách.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Truy cập nhanh</h2>
            <p className="text-xl text-gray-400">Tìm hiểu thêm về game và quản lý tài khoản</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-all group">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                    <Shield className="h-6 w-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-100">ABC</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-base leading-relaxed mb-6">
                  contentABC.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                >
                  <Link href="/">
                    contentABC
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-all group">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                    <Zap className="h-6 w-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-100">ABC</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-base leading-relaxed mb-6">
                 contentABC.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                >
                  <Link href="/">
                    contentABC
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-all group">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                    <Globe className="h-6 w-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-100">Community</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-base leading-relaxed mb-6">
                  Join Discord, Social media channels of Myth of Dreams.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500/50 text-teal-400 hover:bg-blue-500/10 bg-transparent"
                >
                  <Link href="/https://discord.gg/9SKbtEhg">
                    Join Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-900 shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MoD</span>
              </div>
              <span className="text-xl font-bold text-gray-100">Myth of Dreams</span>
            </div>
            <p className="text-gray-400 mb-6">© 2024 Myth of Dreams. Tất cả quyền được bảo lưu.</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="hover:text-gray-300">
                Điều khoản sử dụng
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
