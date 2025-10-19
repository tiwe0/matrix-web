import { GameHero } from "@/components/game-hero"
import { GameFeatures } from "@/components/game-features"
import { GameGallery } from "@/components/game-gallery"
import { GameFooter } from "@/components/game-footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary text-xs matrix-rain font-mono"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + i * 0.5}s`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j}>{String.fromCharCode(0x30a0 + Math.random() * 96)}</div>
            ))}
          </div>
        ))}
      </div>

      <GameHero />
      <GameFeatures />
      <GameGallery />
      <GameFooter />
    </main>
  )
}
