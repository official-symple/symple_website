"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "디지털 페노타이핑이 정신건강에 미치는 영향",
    excerpt: "스마트폰 사용 패턴 분석을 통한 정신건강 관리의 새로운 패러다임을 소개합니다.",
    date: "2025.04.28",
    category: "기술",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Z세대의 정신건강: 디지털 네이티브를 위한 솔루션",
    excerpt: "디지털 환경에서 자란 Z세대의 정신건강 특성과 효과적인 관리 방법을 알아봅니다.",
    date: "2025.04.15",
    category: "트렌드",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "게이미피케이션을 활용한 CBT의 효과성 연구 결과",
    excerpt: "게임 요소를 활용한 인지행동치료의 효과성에 대한 최신 연구 결과를 공유합니다.",
    date: "2025.04.02",
    category: "연구",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "SYMPLE 사용자 인터뷰: '오리의 꿈'이 바꾼 일상",
    excerpt: "오리의 꿈을 통해 정신건강 관리에 성공한 사용자들의 생생한 이야기를 들어봅니다.",
    date: "2025.03.20",
    category: "사용자 스토리",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const mediaAppearances = [
  {
    id: 1,
    title: "SYMPLE, 혁신적인 디지털 멘탈케어 솔루션으로 주목받다",
    outlet: "테크 인사이트",
    date: "2025.04.10",
    link: "#",
  },
  {
    id: 2,
    title: "청년 정신건강 위기, SYMPLE이 제시하는 새로운 해법",
    outlet: "헬스 투데이",
    date: "2025.03.25",
    link: "#",
  },
  {
    id: 3,
    title: "디지털 페노타이핑 기술의 선두주자, SYMPLE 인터뷰",
    outlet: "디지털 타임즈",
    date: "2025.03.12",
    link: "#",
  },
]

export default function Blog() {
  const [activeTab, setActiveTab] = useState("blog")

  return (
    <section className="w-full py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">블로그 & 미디어</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">SYMPLE의 이야기와 최신 소식을 확인하세요.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "blog" ? "bg-symple text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("blog")}
            >
              블로그
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "media" ? "bg-symple text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("media")}
            >
              미디어 출연
            </button>
          </div>
        </div>

        {activeTab === "blog" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-symple text-white text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-symple hover:text-symple/80">
                    자세히 보기 →
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "media" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {mediaAppearances.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full mr-2">
                        {item.outlet}
                      </span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0 border-symple text-symple hover:bg-green-50">
                    기사 보기
                  </Button>
                </div>
              </div>
            ))}

            <div className="mt-8 bg-green-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-symple mb-4">미디어 문의</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                SYMPLE에 대한 인터뷰 및 취재 요청은 아래 이메일로 문의해주세요. 24시간 이내에 답변 드리겠습니다.
              </p>
              <Button className="bg-symple hover:bg-symple/90 text-white">pr@symple.kr로 문의하기</Button>
            </div>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-symple text-symple hover:bg-green-50">
            모든 {activeTab === "blog" ? "블로그 포스트" : "미디어 출연"} 보기 →
          </Button>
        </div>
      </div>
    </section>
  )
}
