"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Statistics() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            데이터로 보는 <span className="text-symple">SYMPLE</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SYMPLE은 사용자의 감정 데이터를 시각화하여 자신의 정신 건강 상태를 쉽게 파악할 수 있도록 도와줍니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">감정 추적 캘린더</h3>
              <p className="text-gray-700 mb-4">
                매일의 감정 상태를 기록하고 추적하여 자신의 감정 패턴을 파악할 수 있습니다. 색상별로 구분된 감정
                아이콘을 통해 한눈에 감정 변화를 확인할 수 있습니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
                  <span className="text-gray-600">긍정적 감정 (기쁨, 만족, 평온)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  <span className="text-gray-600">중립적 감정 (보통, 무덤덤)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                  <span className="text-gray-600">부정적 감정 (슬픔, 불안, 분노)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">주간 감정 변화 그래프</h3>
              <p className="text-gray-700">
                일주일 동안의 감정 변화를 그래프로 시각화하여 자신의 감정 패턴을 더 쉽게 이해할 수 있습니다. 이를 통해
                특정 요일이나 상황에서의 감정 변화를 파악하고 대응 전략을 세울 수 있습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative">
              <Image
                src="/images/symple-app-5.png"
                alt="감정 추적 캘린더"
                width={320}
                height={650}
                className="rounded-[24px] shadow-xl"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/symple-app-6.png"
                alt="감정 통계 대시보드"
                width={320}
                height={650}
                className="rounded-[24px] shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
