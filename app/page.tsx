import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Download, ArrowRight, Compass, Sparkles, Trophy, BookOpen, ShoppingBag, Users } from "lucide-react"

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
              Myth of Dreams là hành trình bước vào Dreamland - vùng mộng ảo nơi bạn đồng hành cùng những linh thú (Beasts), khám phá các cõi mơ kỳ bí, chiến đấu chống lại thế lực ác mộng (Nightmare) để phục dựng lại thánh địa của riêng mình.
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
              <div className="text-4xl font-bold text-teal-400">6+</div>
              <div className="text-gray-400 mt-2">Dream Realms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">30+</div>
              <div className="text-gray-400 mt-2">Mythical Beasts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">50+</div>
              <div className="text-gray-400 mt-2">Ancient Relics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">Daily</div>
              <div className="text-gray-400 mt-2">Dream Runs</div>
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
              Trải nghiệm những tính năng độc đáo và kỳ ảo trong thế giới Myth of Dreams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-colors">
              <CardHeader className="text-center p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10">
                  <Compass className="h-8 w-8 text-teal-400" />
                </div>
                <CardTitle className="text-2xl text-gray-100 mb-4">Khám phá Cõi Mơ</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Hành trình phiêu lưu qua Khu rừng Thầm thì, Đại dương Phát sáng hay Tháp đồng hồ Thời gian để tìm kiếm những mảnh ký ức bị lãng quên.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-colors">
              <CardHeader className="text-center p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10">
                  <Sparkles className="h-8 w-8 text-teal-400" />
                </div>
                <CardTitle className="text-2xl text-gray-100 mb-4">Linh thú & Cổ vật</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Gặp gỡ và thuần phục các sinh vật mộng giới, thu thập cổ vật (Relics) mang sức mạnh cổ xưa trợ lực trong các cuộc chiến turn-based side-view.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-colors">
              <CardHeader className="text-center p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10">
                  <Trophy className="h-8 w-8 text-teal-400" />
                </div>
                <CardTitle className="text-2xl text-gray-100 mb-4">Xây dựng Thánh địa</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Phục dựng lại các công trình như Giếng Mộng (Dreamwell), Thư viện Ký ức (Memory Library) để gia tăng sức mạnh cho vương quốc trong mơ của bạn.
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
            <p className="text-xl text-gray-400">Khám phá thế giới, giao dịch vật phẩm và tham gia cộng đồng người mơ</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-all group">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                    <BookOpen className="h-6 w-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-100">Đọc Lore & Wiki</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-base leading-relaxed mb-6">
                  Tìm hiểu truyền thuyết về các vùng đất, thông số linh thú và các cơ chế gameplay chiều sâu của Myth of Dreams.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                >
                  <Link href="/docs">
                    Xem tài liệu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-all group">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                    <ShoppingBag className="h-6 w-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-100">Marketplace</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-base leading-relaxed mb-6">
                  Giao dịch, mua bán và săn tìm những linh thú hiếm có, cổ vật mạnh mẽ cùng vật phẩm xây dựng đảo mộng.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                >
                  <Link href="/marketplace">
                    Vào chợ game
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-all group">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                    <Users className="h-6 w-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-100">Cộng đồng</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-base leading-relaxed mb-6">
                  Tham gia máy chủ Discord chính thức của Myth of Dreams để giao lưu và đóng góp ý kiến phát triển game.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500/50 text-teal-400 hover:bg-blue-500/10 bg-transparent"
                >
                  <Link href="https://discord.gg/9SKbtEhg" target="_blank" rel="noopener noreferrer">
                    Tham gia ngay
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
