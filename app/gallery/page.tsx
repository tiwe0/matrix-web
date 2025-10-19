"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const galleryImages = [
  {
    title: "赛博城市",
    description: "探索霓虹闪烁的数字都市，每个建筑都可以被破解和重构",
    query: "cyberpunk pixel art city with neon lights and digital rain",
  },
  {
    title: "编程界面",
    description: "使用代码改变世界，编写脚本来操控游戏中的一切对象",
    query: "retro computer terminal with green text and code on black screen pixel art",
  },
  {
    title: "角色互动",
    description: "与NPC建立联系或破解他们的行为模式，改变他们的命运",
    query: "pixel art character in cyberpunk setting with dialogue box",
  },
  {
    title: "解谜场景",
    description: "破解复杂的数字谜题，揭开矩阵背后的真相",
    query: "pixel art puzzle game interface with matrix style elements",
  },
  {
    title: "黑客空间",
    description: "进入虚拟空间，可视化数据流和系统架构",
    query: "pixel art cyberspace with data streams and network nodes",
  },
  {
    title: "战斗系统",
    description: "通过编程战斗，用代码击败敌人的防火墙",
    query: "pixel art combat scene with code and digital effects",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            <span className="text-primary">{">"}</span> GALLERY.VIEW
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">游戏画面展示</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            探索 The Matrix 的像素世界，每一帧都充满了赛博朋克的魅力
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden border-2 border-border hover:border-secondary transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={`/.jpg?height=400&width=600&query=${encodeURIComponent(item.query)}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </div>
              <div className="p-4 text-left space-y-1">
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 border-2 border-border hover:border-primary bg-card hover:bg-primary/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 p-3 border-2 border-border hover:border-primary bg-card hover:bg-primary/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 p-3 border-2 border-border hover:border-primary bg-card hover:bg-primary/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full space-y-6">
            <div className="relative aspect-video bg-muted border-2 border-border overflow-hidden">
              <img
                src={`/.jpg?height=800&width=1200&query=${encodeURIComponent(galleryImages[selectedImage].query)}`}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center space-y-2 bg-card/50 backdrop-blur-sm border-2 border-border p-6">
              <h2 className="text-2xl md:text-3xl font-bold">{galleryImages[selectedImage].title}</h2>
              <p className="text-muted-foreground">{galleryImages[selectedImage].description}</p>
              <div className="text-sm text-muted-foreground pt-2">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
