"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "AI 기반 맞춤형 멘탈케어 플랫폼",
    heading: "복잡한 마음을 SYMPLE하게 하다",
    description:
      "맞춤형 4주 인지행동치료 프로그램으로 청년들의 정신 건강을 지키고, 일상 속에서 자신의 감정을 이해하고 관리할 수 있도록 돕습니다.",
    images: ["/images/symple-app-1.png", "/images/symple-app-2.png"],
    color: "symple",
    buttonText: "SYMPLE 앱 다운로드",
  },
  {
    id: 2,
    title: "디지털 피노타이핑 기반 멘탈케어 게임",
    heading: (
      <>
        미운 오리 새끼같은 나,
        <br />
        나도 멋진 사람이 될 수 있을까?
        <br />
        <span className="text-duck font-bold">오리의 꿈</span>
      </>
    ),
    description:
      "디지털 피노타이핑 기술을 활용해 나도 몰랐던 나의 마음 상태를 알려주고, 게임 및 오리와의 대화를 통해 재밌게 우울과 불안을 해소할 수 있도록 돕습니다.",
    images: ["/images/duck-dream-2.png", "/images/duck-dream-4.png"],
    color: "duck",
    buttonText: "오리의 꿈 다운로드",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useMobile()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className={`inline-block bg-${currentSlideData.color}/20 text-${currentSlideData.color}-800 px-4 py-1 rounded-full text-sm font-medium mb-6`}
          >
            {currentSlideData.title}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {typeof currentSlideData.heading === "string" ? currentSlideData.heading : currentSlideData.heading}
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">{currentSlideData.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              className={`bg-${currentSlideData.color} hover:bg-${currentSlideData.color}/90 text-white px-8 py-6 rounded-lg text-lg`}
            >
              {currentSlideData.buttonText}
            </Button>
            <Button
              variant="outline"
              className={`border-${currentSlideData.color} text-${currentSlideData.color} hover:bg-${currentSlideData.color}/10 px-8 py-6 rounded-lg text-lg`}
            >
              서비스 알아보기
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          key={`images-${currentSlide}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {currentSlideData.images.map((image, index) => (
              <div key={index} className="relative w-[140px] md:w-[160px] mx-auto">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${currentSlideData.id === 1 ? "SYMPLE" : "오리의 꿈"} 앱 화면 ${index + 1}`}
                  width={320}
                  height={650}
                  className="rounded-[24px] shadow-xl"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? `bg-${slides[index].color} w-6` : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-gray-800 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-gray-800 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  )
}
