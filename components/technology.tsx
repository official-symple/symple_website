"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Technology() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section className="w-full py-20 bg-gray-900 text-white" id="technology" ref={ref}>
      <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">기술력 & 연구 기반</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">SYMPLE의 혁신적인 기술과 연구를 소개합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-8">SYMPLE의 기술력</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-teal-900 p-3 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="#00BF7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12H7M17 12H21"
                      stroke="#00BF7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3V7M12 17V21"
                      stroke="#00BF7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">AI 감정 분석</h4>
                  <p className="text-gray-300">
                    자연어 처리 기술을 활용하여 사용자의 텍스트 입력과 대화 패턴을 분석하고, 실시간으로 감정 상태를
                    추적합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-900 p-3 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H15M9 3V5M15 3H19C20.1046 3 21 3.89543 21 5V9M15 3V5M3 9V15M3 9H5M21 9V15M21 9H19M3 15V19C3 20.1046 3.89543 21 5 21H9M3 15H5M21 15V19C21 20.1046 20.1046 21 19 21H15M21 15H19M9 21H15M9 21V19M15 21V19M5 5V9H9V5H5ZM15 5V9H19V5H15ZM5 15V19H9V15H5ZM15 15V19H19V15H15Z"
                      stroke="#00BF7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">디지털 페노타이핑</h4>
                  <p className="text-gray-300">
                    사용자의 앱 사용 패턴, 터치 강도, 스크롤 속도 등의 행동 데이터를 분석하여 정서 상태를 예측하고
                    맞춤형 솔루션을 제공합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-900 p-3 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15"
                      stroke="#00BF7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 7V17" stroke="#00BF7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#00BF7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">CBT 게이미피케이션</h4>
                  <p className="text-gray-300">
                    인지행동치료(CBT) 원리를 게임 요소와 결합하여, 사용자가 재미있게 참여하면서 심리적 성장을 이룰 수
                    있도록 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-8">연구 기반</h3>
            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">임상적 효과 검증</h4>
              <p className="text-gray-300 mb-4">
                SYMPLE의 디지털 치료제(DTx)와 페노타이핑 기술은 다양한 임상 연구를 통해 효과가 검증되었습니다.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-symple mb-2">78%</p>
                  <p className="text-sm text-gray-300">불안 감소 효과</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-symple mb-2">83%</p>
                  <p className="text-sm text-gray-300">정서적 안정감 향상</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-symple mb-2">65%</p>
                  <p className="text-sm text-gray-300">스트레스 감소</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-symple mb-2">91%</p>
                  <p className="text-sm text-gray-300">사용자 만족도</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">학계 협업</h4>
              <p className="text-gray-300 mb-4">
                국내외 유수의 대학 및 연구기관과 협력하여 지속적인 연구와 서비스 개선을 진행하고 있습니다.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">서울대학교</div>
                <div className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">KAIST</div>
                <div className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">Stanford University</div>
                <div className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">MIT Media Lab</div>
                <div className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">한국심리학회</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-gray-800 rounded-full px-8 py-4 inline-block">
            <p className="text-gray-300">
              <span className="text-symple font-bold">10,000+</span> 명의 사용자가 SYMPLE과 함께
              <span className="text-symple font-bold"> 정신 건강</span>을 관리하고 있습니다.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
