"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-symple to-symple/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              복잡한 마음을 <span className="text-yellow-300">SYMPLE</span>하게
            </h2>
            <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              지금 바로 SYMPLE과 함께 정신건강 관리를 시작하세요. 당신의 마음이 더 단순하고 행복해질 수 있도록
              도와드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-white text-symple hover:bg-green-100 px-8 py-6 rounded-lg text-lg">
                Symple 앱 다운로드
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-symple/80 px-8 py-6 rounded-lg text-lg"
              >
                오리의 꿈 체험하기
              </Button>
            </div>

            <div className="flex justify-center flex-wrap gap-8 mb-12">
              <div className="flex flex-col items-center bg-white/20 rounded-xl p-4 min-w-[120px]">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-teal-100">활성 사용자</div>
              </div>
              <div className="flex flex-col items-center bg-white/20 rounded-xl p-4 min-w-[120px]">
                <div className="text-4xl font-bold mb-2">83%</div>
                <div className="text-teal-100">만족도</div>
              </div>
              <div className="flex flex-col items-center bg-white/20 rounded-xl p-4 min-w-[120px]">
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="text-teal-100">앱 평점</div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Image
              src="/placeholder.svg?height=50&width=160&text=App+Store"
              alt="App Store"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
            <Image
              src="/placeholder.svg?height=50&width=160&text=Google+Play"
              alt="Google Play"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
