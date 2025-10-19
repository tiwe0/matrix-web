import { Button } from "@/components/ui/button"
import { Terminal, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function PlayPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary bg-card/50 backdrop-blur-sm">
          <Terminal className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm text-primary tracking-wider">GAME.STATUS</span>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            <span className="text-primary glitch">游戏开发中</span>
          </h1>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">The Matrix 正在紧张开发中...</p>
            <p>
              正在精心打造每一行代码，每一个像素。
              <br />
              敬请期待这场赛博世界的编程冒险。
            </p>
          </div>

          {/* Progress indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            {[
              { label: "核心系统", progress: "75%" },
              { label: "关卡设计", progress: "60%" },
              { label: "美术资源", progress: "80%" },
            ].map((item) => (
              <div key={item.label} className="border-2 border-border bg-card/30 backdrop-blur-sm p-4 space-y-2">
                <div className="text-sm text-muted-foreground">{item.label}</div>
                <div className="text-2xl font-bold text-primary">{item.progress}</div>
                <div className="h-2 bg-muted border border-border">
                  <div className="h-full bg-primary" style={{ width: item.progress }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 font-bold tracking-wide bg-transparent"
            >
              返回首页
            </Button>
          </Link>
          <Button
            size="lg"
            disabled
            className="w-full sm:w-auto bg-muted text-muted-foreground font-bold tracking-wide cursor-not-allowed"
          >
            <Gamepad2 className="w-5 h-5 mr-2" />
            即将推出
          </Button>
        </div>

      </div>
    </main>
  )
}
