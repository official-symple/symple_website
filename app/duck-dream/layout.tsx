import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "오리의꿈 - 멘탈케어 앱서비스",
  description: "마음이 무거울 때 가볍게 팡! 귀여운 오리와 함께하는 마음 치유 여정",
  keywords: ["멘탈케어", "정신건강", "앱서비스", "오리의꿈"],
}

export default function DuckDreamLayout({ children }: { children: ReactNode }) {
  return <div className="duckdream-root">{children}</div>
}
