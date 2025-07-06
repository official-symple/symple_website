import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SYMPLE - 복잡한 마음을 SYMPLE하게",
  description:
    "AI 기반 맞춤형 멘탈케어 플랫폼. 디지털 페노타이핑 기술로 청년들의 정신 건강을 지키고, 일상 속에서 자신의 감정을 이해하고 관리할 수 있도록 돕습니다.",
  generator: "v0.dev",
}

// Google Analytics 스크립트를 별도 컴포넌트로 분리
function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SQYW1GF30T" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SQYW1GF30T');
          `,
        }}
      />
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
