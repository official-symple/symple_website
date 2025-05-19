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
              복잡한 마음을
              <br />
              <span className="text-blue-900">SYMPLE</span>하게
            </h2>
            <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              지금 바로 SYMPLE과 함께
              <br />
              정신건강 관리를 시작하세요.
              <br />
              당신의 마음이 더 단순하고
              <br />
              행복해질 수 있도록 도와드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                className="bg-white text-symple hover:bg-green-100 px-8 py-6 rounded-lg text-lg"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/kr/app/%EC%8B%AC%ED%94%8C-symple-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%A7%88%EC%9D%8C-%EA%B1%B4%EA%B0%95-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%84%88/id6738629592",
                    "_blank",
                  )
                }
              >
                Symple 앱 다운로드
              </Button>
              <Button
                variant="outline"
                className="border-white text-duck hover:bg-symple/80 px-8 py-6 rounded-lg text-lg"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/proto/gRgVJp4n2mzlqcV2boQNyk/%EC%98%A4%EB%A6%AC%EC%9D%98-%EA%BF%88--Copy-?page-id=2011%3A8516&node-id=2119-7832&viewport=-3038%2C-1008%2C0.32&t=4xpa7RlcHmmAW5U1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2119%3A7832&show-proto-sidebar=1",
                    "_blank",
                  )
                }
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

            <div className="flex justify-center gap-8 mt-8">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/duck-mascot.png"
                  alt="오리의 꿈 마스코트"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24">
                <Image
                  src="/images/white-clover.png"
                  alt="화이트 클로버"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
