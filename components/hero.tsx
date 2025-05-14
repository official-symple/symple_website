"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const isMobile = useMobile()
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollY = window.scrollY
        const rotation = scrollY * 0.02
        phoneRef.current.style.transform = `rotate(${rotation}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[10%] w-24 h-24 rounded-full bg-teal-200 opacity-30 animate-float"></div>
        <div className="absolute top-[30%] right-[15%] w-16 h-16 rounded-full bg-emerald-200 opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-full bg-teal-100 opacity-40 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
            AI 기반 맞춤형 멘탈케어 플랫폼
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            복잡한 마음을
            <br />
            <span className="text-symple">SYMPLE</span>하게 하다
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
            디지털 피노타이핑 기술로 청년들의 정신 건강을 지키고, 일상 속에서 자신의 감정을 이해하고 관리할 수 있도록
            돕습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-symple hover:bg-symple/90 text-white px-8 py-6 rounded-lg text-lg">
              Symple 앱 다운로드
            </Button>
            <Button
              variant="outline"
              className="border-symple text-symple hover:bg-green-50 px-8 py-6 rounded-lg text-lg"
            >
              서비스 알아보기
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            ref={phoneRef}
            className="relative mx-auto w-[280px] md:w-[320px] transition-transform duration-300 ease-out"
          >
            <Image
              src="/images/symple-app-1.png"
              alt="Symple 앱 화면"
              width={320}
              height={650}
              className="rounded-[32px] shadow-2xl"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-24 h-24 text-6xl animate-bounce-slow">!</div>
          <div className="absolute -bottom-10 -left-10 transform rotate-45 text-6xl animate-wiggle">✦</div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-symple"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(45deg); }
          50% { transform: rotate(60deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
