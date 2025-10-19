import { Terminal, Cpu, Users, Puzzle } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Terminal,
    title: "编程即游戏",
    description: "使用真实的编程逻辑破解游戏世界中的每一个对象。修改NPC行为，重写物理规则。",
  },
  {
    icon: Cpu,
    title: "赛博朋克世界",
    description: "探索一个被AI控制的反乌托邦城市。揭开隐藏在代码背后的真相。",
  },
  {
    icon: Puzzle,
    title: "非线性叙事",
    description: "你的每一个选择都会影响故事走向。12个不同的结局等待你去发现。",
  },
  {
    icon: Users,
    title: "像素艺术风格",
    description: "精美的像素画面，致敬经典游戏的同时融入现代赛博美学。",
  },
]

export function GameFeatures() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary text-sm">
            {">"} FEATURES.EXE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">游戏特色</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            一款融合编程解谜、角色扮演和叙事探索的独特体验
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 border-2 border-primary bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
