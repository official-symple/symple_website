"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const teamMembers = [
  { name: "김민수", role: "CEO", image: "/images/team/민수.png" },
  { name: "이주원", role: "CPO", image: "/images/team/주원.png" },
  { name: "김도솔", role: "AI 개발자", image: "/images/team/도솔.png" },
  { name: "박영아", role: "프로덕트 기획자", image: "/images/team/영아.png" },
  { name: "강민규", role: "리드 개발자" },
  { name: "신지원", role: "프로덕트 디자이너" },
  { name: "김희진", role: "백엔드 개발자" },
  { name: "고준표", role: "마케터" },
  { name: "임설", role: "콘텐츠 디자이너" },
]

const partnerLogos = [
  { name: "연세대학교", logo: "/images/partners/연세대학교.png" },
  { name: "보건복지부", logo: "/images/partners/보건복지부.png" },
  { name: "국립정신건강센터", logo: "/images/partners/국립정신건강센터.png" },
  { name: "멘탈헬스코리아", logo: "/images/partners/멘탈헬스코리아.png" },
  { name: "대한디지털치료학회", logo: "/images/partners/대한디지털치료학회.png" },
  { name: "Digital Healthcare Partners", logo: "/placeholder.svg?height=40&width=120&text=DHP" },
]

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full py-20 bg-white" id="partners" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">회사 소개 & 파트너십</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">SYMPLE과 함께 정신건강의 미래를 만들어가세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">SYMPLE 팀 소개</h3>
            <p className="text-gray-700 mb-8">
              SYMPLE은 심리적 어려움을 직접 겪어본 청년들이 나와 비슷한 이들을 돕자는 생각으로 함께 혁신을 만들어가고
              있습니다.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-3">
                    <Image
                      src={member.image || `/placeholder.svg?height=96&width=96&text=${member.name}`}
                      alt={`${member.name} - ${member.role}`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">회사의 비전과 목표</h4>
              <div className="relative h-40 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=600&text=SYMPLE+비전과+목표+시각화"
                  alt="SYMPLE 비전과 목표"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-gray-700">
                SYMPLE은 디지털 기술을 통해 정신건강 관리의 접근성을 높이고, 모든 사람이 자신의 감정을 이해하고 관리할
                수 있는 세상을 만들어가고자 합니다.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">파트너십</h3>
            <p className="text-gray-700 mb-8">
              SYMPLE은 다양한 기관 및 기업과의 협력을 통해 더 많은 사람들에게 혁신적인 멘탈케어 솔루션을 제공하고자
              합니다.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">협력 모델</h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 21H21M3 18H21M8 12H16M6 6H18"
                        stroke="#0D9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">B2G</h5>
                    <p className="text-sm text-gray-600">공공기관 및 정부 협력 프로그램</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z"
                        stroke="#0D9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                        stroke="#0D9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 18C17 15.7909 14.7614 14 12 14C9.23858 14 7 15.7909 7 18"
                        stroke="#0D9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">B2C</h5>
                    <p className="text-sm text-gray-600">청년들의 일상 속 우울/불안 해소 프로그램</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#0D9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8V16"
                        stroke="#0D9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 12H16"
                        stroke="#0D9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">교육기관</h5>
                    <p className="text-sm text-gray-600">학교 및 교육기관 학생 지원 프로그램</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-6">
              <h4 className="font-semibold text-teal-800 mb-4">파트너십 신청</h4>
              <p className="text-teal-700 mb-6">
                SYMPLE과 함께 정신건강의 미래를 만들어가고 싶으신가요? 아래 버튼을 통해 파트너십 신청을 해주세요.
              </p>
              <Button
                className="w-full bg-symple hover:bg-symple/90 text-white"
                onClick={() => (window.location.href = "mailto:symple.help@gmail.com?subject=파트너십 문의")}
              >
                파트너십 신청하기
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">함께하는 파트너사</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} 로고`}
                  width={120}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
