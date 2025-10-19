import { Card } from "@/components/ui/card"
import Link from "next/link"

export function GameGallery() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-secondary text-secondary text-sm">
            {">"} GALLERY.LOAD
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">游戏画面</h2>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "赛博城市",
              description: "探索霓虹闪烁的数字都市",
              query: "cyberpunk pixel art city with neon lights and digital rain",
            },
            {
              title: "编程界面",
              description: "使用代码改变世界",
              query: "retro computer terminal with green text and code on black screen pixel art",
            },
            {
              title: "角色互动",
              description: "与NPC建立联系或破解他们",
              query: "pixel art character in cyberpunk setting with dialogue box",
            },
            {
              title: "解谜场景",
              description: "破解复杂的数字谜题",
              query: "pixel art puzzle game interface with matrix style elements",
            },
          ].map((item, index) => (
            <Link key={index} href="/gallery">
              <Card className="overflow-hidden border-2 border-border hover:border-secondary transition-all duration-300 group bg-card/50 backdrop-blur-sm cursor-pointer">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={`/.jpg?height=400&width=600&query=${encodeURIComponent(item.query)}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
