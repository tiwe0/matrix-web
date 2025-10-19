import { Button } from "@/components/ui/button"
import { Play, ArrowLeft, Youtube } from "lucide-react"
import Link from "next/link"

export default function TrailerPage() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-secondary bg-card/50 backdrop-blur-sm">
            <Play className="w-5 h-5 text-secondary" />
            <span className="text-sm text-secondary tracking-wider">TRAILER.LOAD</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            <span className="text-secondary glitch">游戏预告</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">一窥 The Matrix 的赛博世界</p>
        </div>

        {/* Video placeholder */}
        <div className="border-2 border-border bg-card/30 backdrop-blur-sm overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center relative group">
            <img
              src="/.jpg?height=720&width=1280&query=cyberpunk pixel art game screenshot with matrix code and hacking interface"
              alt="Game Trailer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 border-4 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-primary ml-1" />
              </div>
              <p className="text-lg text-muted-foreground">预告片即将发布</p>
            </div>
          </div>
        </div>

        {/* Trailer info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-border bg-card/30 backdrop-blur-sm p-6 space-y-4">
            <h3 className="text-xl font-bold text-primary">开发日志</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">{">"}</span>
                <span>核心编程机制演示</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">{">"}</span>
                <span>赛博城市探索片段</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">{">"}</span>
                <span>角色互动系统展示</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">{">"}</span>
                <span>像素艺术风格预览</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-border bg-card/30 backdrop-blur-sm p-6 space-y-4">
            <h3 className="text-xl font-bold text-secondary">关注更新</h3>
            <p className="text-muted-foreground leading-relaxed">
              我会定期发布开发进度和游戏片段。关注我的社交媒体，不要错过任何精彩内容。
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-2 border-border hover:border-primary hover:bg-primary/10 bg-transparent"
              >
                <Youtube className="w-5 h-5 mr-2" />
                YouTube
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-border hover:border-primary hover:bg-primary/10 bg-transparent"
              >
                订阅更新
              </Button>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center pt-8">
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-bold tracking-wide bg-transparent"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回首页
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
