import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fusionPixel = localFont({
  src: "../public/fonts/fusion-pixel.ttf",
  variable: "--font-pixel",
  display: "swap",
  fallback: ["Press Start 2P", "Courier New", "monospace"],
})

export const metadata: Metadata = {
  title: "The Matrix - 独立游戏",
  description: "在赛博世界中编程改变现实",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${fusionPixel.variable} font-pixel antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
