"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function Products() {
  const [activeTab, setActiveTab] = useState("symple")

  return (
    <section className="w-full py-20 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">메인 프로덕트</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SYMPLE의 혁신적인 디지털 멘탈케어 솔루션을 소개합니다.
          </p>
        </div>

        <Tabs defaultValue="symple" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-12">
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
                <p className="text-xl text-gray-700 italic mb-6">"당신의 마음을 단순하게, 그러나 깊이 있게."</p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">AI 기반 감정 분석</h4>
                    <p className="text-gray-600">
                      일상 대화를 통해 AI가 사용자의 감정 상태를 분석하고, 실시간으로 맞춤형 멘탈 트레이닝을 제공합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">CBT 기반 일일 퀘스트</h4>
                    <p className="text-gray-600">
                      인지행동치료(CBT) 원리를 적용한 일일 퀘스트를 통해 사용자의 심리적 성장을 단계적으로 지원합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">감정 추적 대시보드</h4>
                    <p className="text-gray-600">
                      사용자의 감정 변화를 시각적으로 추적하고, 패턴을 분석하여 자기 이해를 돕습니다.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-symple hover:bg-symple/90 text-white px-6 py-2 rounded-lg">
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
                      src="/images/symple-app-2.png"
                      alt="Symple 앱 화면 - CBT 정보"
                      width={320}
                      height={650}
                      className="rounded-[24px] shadow-xl"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/symple-app-3.png"
                      alt="Symple 앱 화면 - 활력 충전 프로그램"
                      width={320}
                      height={650}
                      className="rounded-[24px] shadow-xl"
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-teal-100 rounded-full p-4 shadow-lg animate-pulse">
                  <span className="text-teal-600 font-bold">NEW</span>
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
                <p className="text-xl text-gray-700 italic mb-6">"청년들의 복잡한 마음을 디지털로 탐험하다."</p>
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
                <div className="mt-8">
                  <Button className="bg-duck hover:bg-duck/90 text-white px-6 py-2 rounded-lg">
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
                <div className="absolute -top-16 -right-16 w-24 h-24">
                  <Image
                    src="/images/duck-dream-logo.png"
                    alt="오리의 꿈 로고"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="relative mx-auto w-[280px] md:w-[320px]">
                  <Image
                    src="/placeholder.svg?height=650&width=320"
                    alt="오리의 꿈 앱 화면"
                    width={320}
                    height={650}
                    className="rounded-[32px] shadow-xl border-8 border-gray-800"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[520px] overflow-hidden rounded-[24px]">
                    <Image
                      src="/placeholder.svg?height=520&width=240"
                      alt="오리의 꿈 앱 인터페이스"
                      width={240}
                      height={520}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-yellow-100 rounded-full p-4 shadow-lg">
                  <span className="text-yellow-600 font-bold">인기</span>
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
                  ? "Symple은 매일 10분으로 정신 건강을 관리할 수 있습니다."
                  : "오리의 꿈은 게임을 통해 자연스럽게 심리 치유를 경험할 수 있습니다."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
