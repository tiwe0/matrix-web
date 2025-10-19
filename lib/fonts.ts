// 如果你有多个字体文件，可以这样配置：
import localFont from "next/font/local"

const fusionPixel = localFont({
  src: [
    {
      path: "../public/fonts/fusion-pixel.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/fusion-pixel-bold.ttf", // 如果有粗体版本
      weight: "700", 
      style: "normal",
    },
  ],
  variable: "--font-pixel",
  display: "swap",
  fallback: ["Press Start 2P", "Courier New", "monospace"],
})

export { fusionPixel }
