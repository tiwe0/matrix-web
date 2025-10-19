import { Button } from "@/components/ui/button"
import { Terminal, Code2, Zap } from "lucide-react"
import Link from "next/link"

export function GameHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 scanline opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Pixel-style logo placeholder */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary bg-card/50 backdrop-blur-sm">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="text-sm text-primary tracking-wider">SYSTEM.INIT</span>
        </div>

        {/* Main title with glitch effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
          <span className="block text-primary glitch">C O D E</span>
          <span className="block text-foreground">T H E</span>
          <span className="block text-secondary glitch">M A T R I X</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          在赛博世界中编程改变现实。探索、破解、重构这个像素化的数字矩阵。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/play">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide border-2 border-primary shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-all"
            >
              <Zap className="w-5 h-5 mr-2" />
              开发进度
            </Button>
          </Link>
          <Link href="/trailer">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 font-bold tracking-wide bg-transparent"
            >
              <Code2 className="w-5 h-5 mr-2" />
              观看预告
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
          {[
            { label: "代码行数", value: "10K+" },
            { label: "可破解对象", value: "500+" },
            { label: "结局分支", value: "12" },
          ].map((stat) => (
            <div key={stat.label} className="border border-border bg-card/30 backdrop-blur-sm p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
