"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// SYMPLE 앱 이미지 배열 추가
const sympleImages = [
  "/images/symple-app-1.png",
  "/images/symple-app-2.png",
  "/images/symple-app-3.png",
  "/images/symple-app-4.png",
  "/images/symple-app-5.png",
  "/images/symple-statistics.png",
]

// 오리의 꿈 앱 이미지 배열 추가
const duckImages = [
  "/images/duck-dream-1.png",
  "/images/duck-dream-2.png",
  "/images/duck-dream-3.png",
  "/images/duck-dream-4.png",
  "/images/duck-dream-5.png",
  "/images/duck-dream-6.png",
  "/images/duck-dream-7.png",
  "/images/duck-dream-8.png",
  "/images/duck-dream-9.png",
  "/images/duck-dream-10.png",
]

export default function Products() {
  const [activeTab, setActiveTab] = useState("symple")
  const [currentSympleIndex, setCurrentSympleIndex] = useState(0)
  const [currentDuckIndex, setCurrentDuckIndex] = useState(0)
  const sympleIntervalRef = useRef(null)
  const duckIntervalRef = useRef(null)

  // SYMPLE 이미지 자동 슬라이드 효과
  useEffect(() => {
    sympleIntervalRef.current = setInterval(() => {
      setCurrentSympleIndex((prev) => (prev + 1) % sympleImages.length)
    }, 3000)

    return () => {
      if (sympleIntervalRef.current) {
        clearInterval(sympleIntervalRef.current)
      }
    }
  }, [])

  // 오리의 꿈 이미지 자동 슬라이드 효과
  useEffect(() => {
    duckIntervalRef.current = setInterval(() => {
      setCurrentDuckIndex((prev) => (prev + 1) % duckImages.length)
    }, 3000)

    return () => {
      if (duckIntervalRef.current) {
        clearInterval(duckIntervalRef.current)
      }
    }
  }, [])

  return (
    <section className="w-full py-20 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">서비스</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SYMPLE의 혁신적인
            <br />
            디지털 멘탈케어 솔루션을 소개합니다.
          </p>
        </div>

        <Tabs defaultValue="symple" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-12 h-16">
            <TabsTrigger
              value="symple"
              className="text-lg py-4 data-[state=active]:bg-symple data-[state=active]:text-white"
            >
              Symple
            </TabsTrigger>
            <TabsTrigger
              value="duck"
              className="text-lg py-4 data-[state=active]:bg-duck data-[state=active]:text-white"
            >
              오리의 꿈
            </TabsTrigger>
          </TabsList>

          <TabsContent value="symple" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <h3 className="text-2xl font-bold text-symple mb-2">Symple</h3>
                <p className="text-xl text-gray-700 italic mb-6">당신의 마음을 단순하게, 그러나 깊이 있게.</p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">AI 기반 감정 분석</h4>
                    <p className="text-gray-600">
                      심리 검사와 감정 기록을 통해 AI가 사용자의 감정 상태를 분석하고, 실시간으로 맞춤형 멘탈 트레이닝
                      프로그램을 제공합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">CBT 기반 일일 미션</h4>
                    <p className="text-gray-600">
                      인지행동치료(CBT) 원리를 적용한 일일 미션을 통해 잦은 성취감을 느끼도록 돕고, 심리적 성장을
                      단계적으로 지원합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">감정 추적 대시보드</h4>
                    <p className="text-gray-600">
                      사용자의 감정 변화를 시각적으로 추적하고, 패턴을 분석하여 자기 이해를 돕습니다.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center md:justify-start">
                  <Button
                    className="bg-symple hover:bg-symple/90 text-white px-6 py-2 rounded-lg"
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/kr/app/%EC%8B%AC%ED%94%8C-symple-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%A7%88%EC%9D%8C-%EA%B1%B4%EA%B0%95-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%84%88/id6738629592",
                        "_blank",
                      )
                    }
                  >
                    Symple 앱 다운로드
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2 relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Image
                      src={sympleImages[currentSympleIndex] || "/placeholder.svg"}
                      alt={`Symple 앱 화면 ${currentSympleIndex + 1}`}
                      width={320}
                      height={650}
                      className="rounded-[10px] shadow-xl transition-opacity duration-500"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={sympleImages[(currentSympleIndex + 1) % sympleImages.length] || "/placeholder.svg"}
                      alt={`Symple 앱 화면 ${((currentSympleIndex + 1) % sympleImages.length) + 1}`}
                      width={320}
                      height={650}
                      className="rounded-[10px] shadow-xl transition-opacity duration-500"
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-teal-100 rounded-full p-4 shadow-lg animate-pulse">
                  <span className="text-teal-600 font-bold">NEW</span>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {sympleImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentSympleIndex ? "bg-symple" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="duck" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <h3 className="text-2xl font-bold text-duck mb-2">오리의 꿈</h3>
                <p className="text-xl text-gray-700 italic mb-6">나만의 귀여운 오리와 함께하는 우울 해소 여정</p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">디지털 피노타이핑 기술</h4>
                    <p className="text-gray-600">
                      사용자의 게임 플레이 패턴을 분석하여 심리 상태를 파악하고, 맞춤형 멘탈케어 솔루션을 제공합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">자기주도형 치유 게임</h4>
                    <p className="text-gray-600">
                      게임 속에서 자신의 심리적 상태를 탐구하고, 스스로 개선해 나가는 자기주도형 치유 경험을 제공합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">커뮤니티 기반 성장</h4>
                    <p className="text-gray-600">
                      비슷한 경험을 가진 사용자들과 익명으로 소통하며, 함께 성장할 수 있는 커뮤니티를 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center md:justify-start">
                  <Button
                    className="bg-duck hover:bg-duck/90 text-white px-6 py-2 rounded-lg"
                    onClick={() =>
                      window.open(
                        "https://www.figma.com/proto/gRgVJp4n2mzlqcV2boQNyk/%EC%98%A4%EB%A6%AC%EC%9D%98-%EA%BF%88--Copy-?page-id=2011%3A8516&node-id=2119-7832&viewport=-3038%2C-1008%2C0.32&t=4xpa7RlcHmmAW5U1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2119%3A7832&show-proto-sidebar=1",
                        "_blank",
                      )
                    }
                  >
                    오리의 꿈 체험하기
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2 relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Image
                      src={duckImages[currentDuckIndex] || "/placeholder.svg"}
                      alt={`오리의 꿈 앱 화면 ${currentDuckIndex + 1}`}
                      width={320}
                      height={650}
                      className="rounded-[10px] shadow-xl transition-opacity duration-500"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={duckImages[(currentDuckIndex + 1) % duckImages.length] || "/placeholder.svg"}
                      alt={`오리의 꿈 앱 화면 ${((currentDuckIndex + 1) % duckImages.length) + 1}`}
                      width={320}
                      height={650}
                      className="rounded-[10px] shadow-xl transition-opacity duration-500"
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-yellow-100 rounded-full p-4 shadow-lg">
                  <span className="text-yellow-600 font-bold">인기</span>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {duckImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentDuckIndex ? "bg-duck" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-gray-200 rounded-full">
            <div
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeTab === "symple" ? "bg-symple text-white" : "bg-duck text-white"}`}
            >
              <p className="font-medium">
                {activeTab === "symple"
                  ? "Symple은 매일 10분으로\n정신 건강을 관리할 수 있습니다."
                  : "오리의 꿈은 게임을 통해 자연스럽게\n심리 치유를 경험할 수 있습니다."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
