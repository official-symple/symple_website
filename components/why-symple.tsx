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
            청년들의 정신건강 문제는 지속적으로 증가하고 있으며, 기존의 상담 서비스만으로는 접근성이 낮습니다. SYMPLE은
            이 문제를 혁신적인 방법으로 해결합니다.
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
            <div className="bg-red-50 rounded-2xl p-8 mb-8">
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
            <div className="relative h-64 w-full">
              <svg viewBox="0 0 800 400" className="w-full h-full rounded-2xl" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="400" fill="#f9f0f0" rx="12" />

                {/* 배경 요소 */}
                <circle cx="150" cy="80" r="40" fill="#ffcdd2" opacity="0.6" />
                <circle cx="650" cy="320" r="60" fill="#e1bee7" opacity="0.5" />
                <circle cx="720" cy="100" r="30" fill="#c5cae9" opacity="0.7" />

                {/* 접근성 부족 시각화 */}
                <g transform="translate(120, 200)">
                  <rect x="0" y="0" width="160" height="120" rx="10" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="2" />
                  <text x="80" y="30" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#424242">
                    정신건강 서비스
                  </text>
                  <line x1="80" x2="80" y1="50" y2="100" stroke="#e57373" strokeWidth="3" strokeDasharray="5,5" />
                  <circle cx="80" cy="140" r="20" fill="#ef5350" />
                  <text x="80" y="145" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">
                    ?
                  </text>
                  <text x="80" y="180" fontSize="14" textAnchor="middle" fill="#616161">
                    접근성 부족
                  </text>
                </g>

                {/* 표현의 어려움 시각화 */}
                <g transform="translate(320, 200)">
                  <circle cx="80" cy="60" r="50" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="2" />
                  <path d="M60,70 Q80,90 100,70" stroke="#616161" strokeWidth="2" fill="none" />
                  <circle cx="65" cy="50" r="5" fill="#616161" />
                  <circle cx="95" cy="50" r="5" fill="#616161" />
                  <rect x="50" y="20" width="60" height="40" rx="5" fill="#ffecb3" opacity="0.8" />
                  <text x="80" y="40" fontSize="10" textAnchor="middle" fill="#424242">
                    실제 감정
                  </text>
                  <rect x="50" y="0" width="60" height="20" rx="5" fill="#e0e0e0" opacity="0.8" />
                  <text x="80" y="14" fontSize="10" textAnchor="middle" fill="#424242">
                    표현된 감정
                  </text>
                  <text x="80" y="130" fontSize="14" textAnchor="middle" fill="#616161">
                    표현의 어려움
                  </text>
                </g>

                {/* 지속적 관리 부재 시각화 */}
                <g transform="translate(520, 200)">
                  <rect x="10" y="0" width="30" height="100" rx="5" fill="#e0e0e0" />
                  <rect x="50" y="70" width="30" height="30" rx="5" fill="#81c784" />
                  <rect x="90" y="40" width="30" height="60" rx="5" fill="#e0e0e0" />
                  <rect x="130" y="60" width="30" height="40" rx="5" fill="#e0e0e0" />
                  <line x1="0" x2="170" y1="100" y2="100" stroke="#9e9e9e" strokeWidth="2" />
                  <text x="80" y="130" fontSize="14" textAnchor="middle" fill="#616161">
                    지속적 관리 부재
                  </text>
                </g>

                {/* 제목 */}
                <text x="400" y="50" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#d32f2f">
                  청년 정신건강 문제
                </text>
              </svg>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative h-64 w-full mb-8">
              <Image
                src="/placeholder.svg?height=300&width=500&text=SYMPLE+솔루션+시각화"
                alt="SYMPLE 솔루션"
                fill
                className="rounded-2xl object-cover"
              />
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
          <div className="inline-block bg-gray-100 rounded-full px-6 py-3">
            <p className="text-gray-700 font-medium">
              SYMPLE은 <span className="text-symple font-bold">83%</span>의 사용자가 4주 사용 후
              <span className="text-symple font-bold"> 정서적 안정감</span>을 느꼈다고 보고했습니다.
            </p>
          </div>
          <div className="inline-block bg-gray-100 rounded-full px-6 py-3">
            <p className="text-gray-700 font-medium">
              오리의 꿈은 <span className="text-duck font-bold">91%</span>의 사용자가 2주 사용 후
              <span className="text-duck font-bold"> 우울이 완화</span>되었다고 보고했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
