"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "SYMPLE과 오리의 꿈은 어떻게 다른가요?",
    answer:
      "SYMPLE은 AI 기반 감정 분석과 CBT 기반 일일 퀘스트를 통해 일상 속에서 정신건강을 관리할 수 있는 앱입니다. 반면, 오리의 꿈은 게임 형태로 제공되는 자기주도형 치유 솔루션으로, 디지털 피노타이핑 기술을 활용하여 게임 플레이를 통해 자연스럽게 심리 상태를 탐구하고 개선할 수 있습니다.",
  },
  {
    question: "디지털 피노타이핑 기술이란 무엇인가요?",
    answer:
      "디지털 피노타이핑 기술은 사용자의 디지털 기기 사용 패턴(터치 강도, 스크롤 속도, 앱 사용 시간 등)을 분석하여 정서 상태를 예측하는 기술입니다. SYMPLE은 이 기술을 활용하여 사용자의 심리 상태를 파악하고, 맞춤형 멘탈케어 솔루션을 제공합니다.",
  },
  {
    question: "개인정보는 어떻게 보호되나요?",
    answer:
      "SYMPLE은 사용자의 개인정보 보호를 최우선으로 생각합니다. 모든 데이터는 암호화되어 저장되며, 사용자의 명시적인 동의 없이는 제3자에게 공유되지 않습니다. 또한, 정보보호관리체계(ISMS) 인증을 획득하여 안전한 서비스 운영을 보장합니다.",
  },
  {
    question: "SYMPLE 앱은 어디에서 다운로드할 수 있나요?",
    answer:
      "SYMPLE 앱은 iOS App Store와 Google Play Store에서 무료로 다운로드할 수 있습니다. '심플' 또는 'SYMPLE'로 검색하시면 쉽게 찾을 수 있습니다.",
  },
  {
    question: "서비스 이용 중 기술적인 문제가 발생하면 어떻게 해야 하나요?",
    answer:
      "서비스 이용 중 기술적인 문제가 발생하면 symple.help@gmail.com으로 이메일을 보내주세요. 24시간 이내에 답변 드리겠습니다.",
  },
  {
    question: "SYMPLE은 전문적인 정신건강 치료를 대체할 수 있나요?",
    answer:
      "SYMPLE은 전문적인 정신건강 치료를 대체하기 위한 서비스가 아닙니다. 일상 속에서 정신건강을 관리하고 개선하는 데 도움을 주는 보조 도구로 활용하시기 바랍니다. 심각한 정신건강 문제가 있는 경우, 반드시 전문가와 상담하시기를 권장합니다.",
  },
]

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("faq")

  return (
    <section className="w-full py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQ & 고객 지원</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">자주 묻는 질문과 고객 지원 정보를 확인하세요.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "faq" ? "bg-symple text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              자주 묻는 질문
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "support" ? "bg-symple text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("support")}
            >
              고객 지원
            </button>
          </div>
        </div>

        {activeTab === "faq" && (
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {activeTab === "support" && (
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">이메일 문의</h3>
                <p className="text-gray-600 mb-6">
                  서비스 이용 중 궁금한 점이나 문제가 있으시면 이메일로 문의해주세요. 24시간 이내에 답변 드리겠습니다.
                </p>
                <Button
                  className="w-full bg-symple hover:bg-symple/90 text-white"
                  onClick={() => (window.location.href = "mailto:symple.help@gmail.com?subject=서비스 문의")}
                >
                  symple.help@gmail.com으로 문의하기
                </Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">실시간 채팅</h3>
                <p className="text-gray-600 mb-6">
                  긴급한 문의사항은 실시간 채팅으로 문의해주세요. 평일 오전 9시부터 오후 6시까지 운영됩니다.
                </p>
                <Button className="w-full bg-symple hover:bg-symple/90 text-white">실시간 채팅 시작하기</Button>
              </div>
            </div>

            <div className="mt-8 bg-teal-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">자주 찾는 리소스</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Button variant="outline" className="border-symple text-symple hover:bg-green-50">
                  사용자 가이드
                </Button>
                <Button variant="outline" className="border-symple text-symple hover:bg-green-50">
                  비디오 튜토리얼
                </Button>
                <Button variant="outline" className="border-symple text-symple hover:bg-green-50">
                  문제 해결 팁
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
