"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function WhySymple() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full py-20 bg-white" id="why-symple">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            왜 <span className="text-symple">SYMPLE</span>이 필요할까요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            청년들의 정신건강 문제는
            <br />
            지속적으로 증가하고 있으며,
            <br />
            기존의 상담 서비스만으로는 접근성이 낮습니다.
            <br />
            SYMPLE은 이 문제를 새로운 방법으로 해결합니다.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative h-64 w-full mb-8">
              <Image
                src="/images/problem-recognition.png"
                alt="청년 정신건강 문제"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4">문제 인식</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <p className="text-gray-700">
                    <strong>접근성 부족</strong> - 많은 청년들이 정신건강 서비스에 접근하기 어려워합니다.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <p className="text-gray-700">
                    <strong>표현의 어려움</strong> - 자신의 정신적 어려움을 솔직하게 표현하지 못하는 경우가 많습니다.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <p className="text-gray-700">
                    <strong>지속적 관리 부재</strong> - 일회성 상담으로는 지속적인 정신건강 관리가 어렵습니다.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative h-64 w-full mb-8">
              <Image src="/images/symple-solution.png" alt="SYMPLE 솔루션" fill className="rounded-2xl object-cover" />
            </div>
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">SYMPLE의 해결책</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <p className="text-gray-700">
                    <strong>디지털 접근성</strong> - 스마트폰을 통해 언제 어디서나 마음을 관리할 수 있습니다.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <p className="text-gray-700">
                    <strong>피노타이핑 기술</strong> - 스마트폰 센서 데이터를 분석하여 맞춤형 멘탈케어 솔루션을
                    제공합니다.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <p className="text-gray-700">
                    <strong>게이미피케이션</strong> - 게임 요소를 통해 자연스럽게 자신의 감정을 표현하고 관리할 수
                    있습니다.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
          <div className="inline-block bg-gray-100 rounded-full px-6 py-3 text-center">
            <p className="text-gray-700 font-medium">
              SYMPLE은 <span className="text-symple font-bold">83%</span>의 사용자가 4주 사용 후<br />
              <span className="text-symple font-bold">정서적 안정감</span>을 느꼈다고 보고했습니다.
            </p>
          </div>
          <div className="inline-block bg-gray-100 rounded-full px-6 py-3 text-center">
            <p className="text-gray-700 font-medium">
              오리의 꿈은 <span className="text-duck font-bold">91%</span>의 사용자가
              <br />
              2주 사용 후 <span className="text-duck font-bold">우울이 완화</span>되었다고 보고했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
