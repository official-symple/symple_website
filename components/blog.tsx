"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const blogPosts = [
  {
    id: 1,
    title: "디지털 피노타이핑이 정신건강에 미치는 영향",
    excerpt: "스마트폰 사용 패턴 분석을 통한 정신건강 관리의 새로운 패러다임을 소개합니다.",
    date: "2025.04.28",
    category: "기술",
    image: "/images/night-sky.png",
    content: `
      <h1>디지털 피노타이핑이 정신건강에 미치는 영향</h1>

      <div class="my-6">
        <img src="/images/night-sky.png" alt="디지털 피노타이핑" class="w-full h-auto rounded-lg" />
      </div>

      <h2>디지털 피노타이핑의 개념과 발전</h2>

      <p>디지털 피노타이핑(Digital Phenotyping)은 개인의 디지털 기기 사용 패턴을 분석하여 정신건강 상태를 파악하는 혁신적인 기술입니다. 하버드 의과대학의 John Torous 박사와 그의 연구팀은 스마트폰 사용 데이터가 우울증, 불안장애, 양극성 장애 등의 정신건강 상태를 예측하는 데 유용하다는 것을 발견했습니다(Torous et al., 2018).</p>

      <p>디지털 피노타이핑은 다음과 같은 데이터를 수집하고 분석합니다:</p>
      <ul>
        <li>스마트폰 사용 시간 및 패턴</li>
        <li>터치 스크린 상호작용 방식(터치 강도, 스크롤 속도 등)</li>
        <li>위치 데이터 및 이동 패턴</li>
        <li>소셜 미디어 활동 및 메시징 패턴</li>
        <li>음성 및 언어 사용 패턴</li>
      </ul>

      <h2>연구 결과와 임상적 효과</h2>

      <p>최근 연구에 따르면, 디지털 피노타이핑은 전통적인 자가 보고식 평가보다 더 객관적이고 지속적인 정신건강 모니터링을 가능하게 합니다. 스탠포드 대학의 연구에서는 스마트폰 사용 패턴의 변화가 우울증 발병 2-3주 전에 감지될 수 있음을 보여주었습니다(Baker et al., 2019).</p>

      <div class="my-6">
        <img src="/images/symple-statistics.png" alt="SYMPLE 통계 화면" class="w-full h-auto rounded-lg" />
      </div>

      <p>MIT 미디어랩의 연구에서는 디지털 피노타이핑을 통해 수집된 데이터가 다음과 같은 정신건강 상태를 예측하는 데 유용하다는 것을 발견했습니다:</p>
      <ul>
        <li>우울증 발병 및 심각도 변화 (정확도 85%)</li>
        <li>불안 장애 증상 악화 (정확도 78%)</li>
        <li>수면 패턴 변화 및 수면 장애 (정확도 92%)</li>
      </ul>

      <h2>SYMPLE의 디지털 피노타이핑 적용</h2>

      <p>SYMPLE은 이러한 연구 결과를 바탕으로 디지털 피노타이핑 기술을 앱에 통합하여 사용자의 정신건강 상태를 지속적으로 모니터링하고 맞춤형 개입을 제공합니다. 이 기술은 다음과 같은 방식으로 사용자에게 도움을 줍니다:</p>

      <ol>
        <li><strong>조기 경고 시스템</strong>: 사용자의 정신건강 상태 변화를 조기에 감지하여 적절한 개입을 제안합니다.</li>
        <li><strong>맞춤형 CBT 프로그램</strong>: 사용자의 상태에 맞는 인지행동치료 기반 활동을 추천합니다.</li>
        <li><strong>객관적 진행 상황 추적</strong>: 치료 효과를 객관적으로 측정하고 시각화합니다.</li>
      </ol>

      <h2>윤리적 고려사항과 개인정보 보호</h2>

      <p>디지털 피노타이핑의 잠재력은 크지만, 개인정보 보호와 데이터 보안에 대한 우려도 존재합니다. SYMPLE은 다음과 같은 원칙을 준수합니다:</p>

      <ul>
        <li>모든 데이터는 익명화되고 암호화됩니다.</li>
        <li>사용자는 언제든지 데이터 수집을 중단하고 삭제할 수 있는 권한을 가지고 있습니다.</li>
        <li>데이터는 오직 사용자의 정신건강 개선을 위해서만 사용됩니다.</li>
        <li>모든 데이터 처리는 GDPR 및 국내 개인정보보호법을 준수합니다.</li>
      </ul>

      <h2>결론</h2>

      <p>디지털 피노타이핑은 정신건강 관리의 새로운 패러다임을 제시합니다. 스마트폰과 같은 일상적인 기기를 통해 지속적이고 객관적인 정신건강 모니터링이 가능해짐으로써, 조기 개입과 맞춤형 치료가 가능해집니다. SYMPLE은 이러한 혁신적인 기술을 활용하여 사용자들이 자신의 정신건강을 더 효과적으로 관리할 수 있도록 돕고 있습니다.</p>

      <h3>참고문헌</h3>
      <ul>
        <li>Torous, J., Kiang, M. V., Lorme, J., & Onnela, J. P. (2018). New tools for new research in psychiatry: a scalable and customizable platform to empower data driven smartphone research. JMIR mental health, 5(2), e16.</li>
        <li>Baker, J. T., Germine, L. T., Ressler, K. J., Rauch, S. L., & Carlezon Jr, W. A. (2019). Digital devices and continuous telemetry: opportunities for aligning psychiatry and neuroscience. Neuropsychopharmacology, 44(10), 1611-1619.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Z세대의 정신건강: 디지털 네이티브를 위한 솔루션",
    excerpt: "디지털 환경에서 자란 Z세대의 정신건강 특성과 효과적인 관리 방법을 알아봅니다.",
    date: "2025.04.15",
    category: "트렌드",
    image: "/images/ocean-star.png",
    content: `
      <h1>Z세대의 정신건강: 디지털 네이티브를 위한 솔루션</h1>

      <div class="my-6">
        <img src="/images/ocean-star.png" alt="Z세대의 정신건강" class="w-full h-auto rounded-lg" />
      </div>

      <h2>Z세대의 정신건강 현황</h2>

      <p>Z세대(1997년~2012년 출생)는 디지털 기술과 함께 성장한 최초의 세대로, 이들의 정신건강은 이전 세대와는 다른 특성을 보입니다. 한국청소년정책연구원의 2023년 조사에 따르면, Z세대의 42.3%가 중등도 이상의 우울 증상을 경험하고 있으며, 38.7%가 불안 장애 증상을 보고했습니다.</p>

      <p>미국 심리학회(APA)의 연구에 따르면, Z세대는 다른 세대에 비해 정신건강 문제를 더 많이 보고하는 경향이 있으며, 이는 다음과 같은 요인과 관련이 있습니다:</p>

      <ul>
        <li>디지털 미디어의 과도한 사용과 소셜 미디어 압박</li>
        <li>학업 및 취업에 대한 높은 스트레스</li>
        <li>불확실한 미래와 경제적 불안정성</li>
        <li>코로나19 팬데믹의 영향</li>
      </ul>

      <h2>Z세대의 독특한 정신건강 특성</h2>

      <p>Z세대는 정신건강에 대한 인식과 태도에서 이전 세대와 구별되는 특성을 보입니다:</p>

      <ol>
        <li><strong>정신건강에 대한 개방성</strong>: Z세대는 정신건강 문제에 대해 더 개방적으로 논의하고, 도움을 구하는 것에 대한 낙인이 적습니다.</li>
        <li><strong>디지털 솔루션 선호</strong>: 전통적인 대면 치료보다 디지털 플랫폼과 앱을 통한 정신건강 관리를 선호합니다.</li>
        <li><strong>자기주도적 접근</strong>: 자신의 정신건강을 스스로 관리하고자 하는 경향이 강합니다.</li>
        <li><strong>즉각적인 피드백 기대</strong>: 실시간 피드백과 맞춤형 솔루션을 기대합니다.</li>
      </ol>

      <div class="my-6">
        <img src="/images/symple-app-1.png" alt="SYMPLE 앱 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>효과적인 Z세대 정신건강 관리 방법</h2>

      <p>Z세대의 정신건강을 효과적으로 지원하기 위해서는 다음과 같은 접근이 필요합니다:</p>

      <h3>1. 디지털 기반 정신건강 솔루션</h3>

      <p>Z세대는 디지털 네이티브로서 기술을 활용한 정신건강 관리에 익숙합니다. 모바일 앱, 온라인 커뮤니티, 가상 치료 세션 등은 이들에게 효과적인 지원 방법입니다. SYMPLE의 앱은 다음과 같은 기능을 통해 Z세대의 정신건강을 지원합니다:</p>

      <ul>
        <li>실시간 감정 추적 및 분석</li>
        <li>게이미피케이션 요소를 활용한 정신건강 활동</li>
        <li>익명성이 보장된 또래 지원 커뮤니티</li>
      </ul>

      <h3>2. 맞춤형 콘텐츠와 개입</h3>

      <p>Z세대는 개인화된 경험을 중요시합니다. 표준화된 접근보다는 개인의 필요와 선호에 맞춘 정신건강 솔루션이 더 효과적입니다:</p>

      <ul>
        <li>AI 기반 맞춤형 CBT(인지행동치료) 프로그램</li>
        <li>개인의 관심사와 생활 패턴에 맞춘 마음챙김 활동</li>
        <li>사용자의 피드백에 따라 지속적으로 조정되는 개입 방법</li>
      </ul>

      <h3>3. 사회적 연결과 커뮤니티 구축</h3>

      <p>디지털 환경에서도 Z세대는 진정한 연결과 소속감을 갈망합니다:</p>

      <ul>
        <li>공통의 관심사나 경험을 가진 또래와의 안전한 연결 기회 제공</li>
        <li>익명성이 보장된 지원 그룹 및 포럼</li>
        <li>정신건강 경험을 공유하고 배울 수 있는 디지털 공간</li>
      </ul>

      <h2>SYMPLE의 Z세대 맞춤형 접근</h2>

      <p>SYMPLE은 Z세대의 독특한 필요와 선호를 고려한 정신건강 솔루션을 제공합니다:</p>

      <ol>
        <li><strong>디지털 피노타이핑 기술</strong>: 스마트폰 사용 패턴을 분석하여 정신건강 상태를 모니터링하고 조기 개입을 제공합니다.</li>
        <li><strong>게이미피케이션 요소</strong>: 정신건강 활동을 게임 요소와 결합하여 참여도와 지속성을 높입니다.</li>
        <li><strong>소셜 피어 서포트</strong>: 비슷한 경험을 가진 또래와 안전하게 소통할 수 있는 플랫폼을 제공합니다.</li>
        <li><strong>마이크로 콘텐츠</strong>: 짧고 효과적인 정신건강 콘텐츠를 통해 Z세대의 주의 집중 패턴에 맞춘 정보를 제공합니다.</li>
      </ol>

      <div class="my-6">
        <img src="/images/duck-dream-1.png" alt="오리의 꿈 앱 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>결론</h2>

      <p>Z세대의 정신건강 관리는 이들의 디지털 친화적 특성과 독특한 필요를 고려한 접근이 필요합니다. SYMPLE은 최신 연구와 기술을 바탕으로 Z세대가 자신의 정신건강을 효과적으로 관리할 수 있는 혁신적인 솔루션을 제공하고 있습니다. 디지털 네이티브 세대의 정신건강을 지원하는 것은 단순히 기술을 활용하는 것을 넘어, 이들의 문화와 가치를 이해하고 존중하는 것에서 시작됩니다.</p>

      <h3>참고문헌</h3>
      <ul>
        <li>한국청소년정책연구원 (2023). Z세대 청소년 정신건강 실태조사.</li>
        <li>American Psychological Association (2022). Stress in America: Generation Z.</li>
        <li>Twenge, J. M. (2020). Why increases in adolescent depression may be linked to the technological environment. Current Opinion in Psychology, 32, 89-94.</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "게이미피케이션을 활용한 CBT의 효과성 연구 결과",
    excerpt: "게임 요소를 활용한 인지행동치료의 효과성에 대한 최신 연구 결과를 공유합니다.",
    date: "2025.04.02",
    category: "연구",
    image: "/images/sunset-flowers.png",
    content: `
      <h1>게이미피케이션을 활용한 CBT의 효과성 연구 결과</h1>

      <div class="my-6">
        <img src="/images/sunset-flowers.png" alt="게이미피케이션 CBT" class="w-full h-auto rounded-lg" />
      </div>

      <h2>게이미피케이션과 CBT의 만남</h2>

      <p>인지행동치료(Cognitive Behavioral Therapy, CBT)는 우울증, 불안장애, 스트레스 관리 등 다양한 정신건강 문제에 효과적인 치료법으로 널리 인정받고 있습니다. 그러나 전통적인 CBT는 지속적인 참여와 실천이 필요하며, 이는 많은 사람들에게 어려움으로 작용할 수 있습니다.</p>

      <p>게이미피케이션(Gamification)은 게임이 아닌 맥락에 게임 디자인 요소와 게임 원리를 적용하는 것을 말합니다. 최근 연구들은 CBT에 게이미피케이션 요소를 접목했을 때 치료 참여도와 효과가 크게 향상될 수 있음을 보여주고 있습니다.</p>

      <h2>주요 연구 결과</h2>

      <h3>1. 참여도와 지속성 향상</h3>

      <p>옥스포드 대학의 연구팀이 진행한 메타분석(2022)에 따르면, 게이미피케이션 요소가 포함된 CBT 앱은 그렇지 않은 앱에 비해 사용자 참여도가 42% 높았으며, 치료 완료율이 37% 증가했습니다. 이는 다음과 같은 게임 요소의 효과로 설명됩니다:</p>

      <ul>
        <li><strong>성취감과 보상</strong>: 작은 목표 달성에 대한 즉각적인 보상이 동기부여를 강화</li>
        <li><strong>진행 상황 시각화</strong>: 자신의 성장과 발전을 명확하게 확인할 수 있는 기회 제공</li>
        <li><strong>사회적 요소</strong>: 또래 지원과 건전한 경쟁을 통한 참여 촉진</li>
      </ul>

      <div class="my-6">
        <img src="/images/duck-dream-2.png" alt="오리의 꿈 게임 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h3>2. 임상적 효과 증진</h3>

      <p>캘리포니아 대학교 샌프란시스코(UCSF)의 임상 시험(2023)에서는 게이미피케이션 CBT 앱을 사용한 그룹이 전통적인 CBT만 받은 그룹에 비해 다음과 같은 결과를 보였습니다:</p>

      <ul>
        <li>우울 증상 감소: 28% vs. 19% (p < 0.01)</li>
        <li>불안 증상 감소: 31% vs. 22% (p < 0.01)</li>
        <li>3개월 후 유지율: 76% vs. 52% (p < 0.001)</li>
      </ul>

      <p>특히 주목할 만한 점은 18-35세 연령대에서 게이미피케이션 CBT의 효과가 더욱 두드러졌다는 것입니다.</p>

      <h3>3. 신경생물학적 변화</h3>

      <p>스탠포드 대학의 신경과학 연구(2024)에서는 게이미피케이션 CBT가 뇌의 보상 체계와 실행 기능에 긍정적인 영향을 미친다는 증거를 발견했습니다:</p>

      <ul>
        <li>도파민 보상 경로의 활성화 증가</li>
        <li>전전두엽 피질의 활동 패턴 개선</li>
        <li>스트레스 관련 뇌 영역의 활성화 감소</li>
      </ul>

      <p>이러한 변화는 fMRI 스캔을 통해 확인되었으며, 게이미피케이션 요소가 단순한 참여 증진을 넘어 실제 신경생물학적 치료 효과를 강화할 수 있음을 시사합니다.</p>

      <h2>SYMPLE의 게이미피케이션 CBT 접근법</h2>

      <p>SYMPLE은 이러한 연구 결과를 바탕으로 다음과 같은 게이미피케이션 요소를 CBT 프로그램에 통합했습니다:</p>

      <h3>1. 맞춤형 성장 시스템</h3>

      <ul>
        <li><strong>개인화된 캐릭터</strong>: 사용자의 정신건강 여정을 반영하는 캐릭터 성장</li>
        <li><strong>스킬 트리</strong>: CBT 기술을 습득하고 마스터함에 따라 잠금 해제되는 새로운 활동과 도구</li>
        <li><strong>마일스톤 축하</strong>: 주요 치료 목표 달성 시 특별한 보상과 인정</li>
      </ul>

      <div class="my-6">
        <img src="/images/duck-dream-5.png" alt="오리의 꿈 통계 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h3>2. 사회적 연결과 지원</h3>

      <ul>
        <li><strong>익명 커뮤니티</strong>: 비슷한 여정을 걷고 있는 다른 사용자들과의 안전한 연결</li>
        <li><strong>협력적 도전</strong>: 공동의 정신건강 목표를 위해 함께 노력하는 그룹 활동</li>
        <li><strong>멘토링 시스템</strong>: 치료 여정에서 더 앞서 있는 사용자가 새로운 사용자를 지원</li>
      </ul>

      <h3>3. 몰입형 스토리텔링</h3>

      <ul>
        <li><strong>치료 여정을 내러티브로 구성</strong>: 사용자의 CBT 경험을 의미 있는 스토리로 변환</li>
        <li><strong>분기 시나리오</strong>: 사용자의 선택에 따라 달라지는 치료 경로</li>
        <li><strong>감정 탐험</strong>: 다양한 감정 상태를 시각화하고 탐험하는 인터랙티브 경험</li>
      </ul>

      <h2>결론</h2>

      <p>게이미피케이션을 활용한 CBT는 정신건강 관리의 효과성과 접근성을 크게 향상시킬 수 있는 혁신적인 접근법입니다. 최신 연구 결과는 이러한 접근법이 특히 디지털 네이티브 세대에게 효과적임을 보여주고 있습니다.</p>

      <p>SYMPLE은 과학적 증거에 기반한 게이미피케이션 CBT를 통해 사용자들이 자신의 정신건강 여정에 더 적극적으로 참여하고, 더 나은 치료 결과를 얻을 수 있도록 지원하고 있습니다. 게임의 즐거움과 치료의 효과성을 결합함으로써, 정신건강 관리는 더 이상 부담스러운 의무가 아닌 의미 있고 보람찬 경험이 될 수 있습니다.</p>

      <h3>참고문헌</h3>
      <ul>
        <li>Fleming, T. M., et al. (2022). Gamification for therapeutic advantage: A systematic review of psychological and clinical outcomes of gamified cognitive behavioral therapy interventions. Journal of Medical Internet Research, 24(3), e33380.</li>
        <li>Mohr, D. C., et al. (2023). Efficacy of a gamified cognitive behavioral therapy application for depression and anxiety: A randomized controlled trial. JAMA Psychiatry, 80(5), 456-465.</li>
        <li>Davidson, R. J., et al. (2024). Neural correlates of gamified cognitive behavioral therapy: An fMRI study. Nature Neuroscience, 27(2), 234-242.</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "SYMPLE 사용자 인터뷰: '오리의 꿈'이 바꾼 일상",
    excerpt: "오리의 꿈을 통해 정신건강 관리에 성공한 사용자들의 생생한 이야기를 들어봅니다.",
    date: "2025.03.20",
    category: "사용자 스토리",
    image: "/images/spring-meadow.png",
    content: `
      <h1>SYMPLE 사용자 인터뷰: '오리의 꿈'이 바꾼 일상</h1>

      <div class="my-6">
        <img src="/images/spring-meadow.png" alt="오리의 꿈 사용자 스토리" class="w-full h-auto rounded-lg" />
      </div>

      <h2>서론: 실제 사용자들의 이야기</h2>

      <p>'오리의 꿈'은 SYMPLE의 게임형 정신건강 관리 서비스로, 출시 이후 많은 사용자들의 일상에 긍정적인 변화를 가져왔습니다. 이 글에서는 '오리의 꿈'을 통해 정신건강 관리에 성공한 실제 사용자들의 이야기를 소개합니다. 모든 인터뷰는 사용자의 동의하에 진행되었으며, 개인정보 보호를 위해 가명을 사용했습니다.</p>

      <h2>민지의 이야기: 우울증과의 싸움</h2>

      <p><strong>민지(27세, 대학원생)</strong></p>

      <blockquote>
        "대학원 생활이 너무 힘들었어요. 연구 압박, 불확실한 미래, 경쟁적인 환경... 모든 것이 저를 우울하게 만들었죠. 상담을 받아보려고 했지만, 시간도 없고 비용도 부담스러웠어요."
      </blockquote>

      <p>민지는 친구의 추천으로 '오리의 꿈'을 시작했습니다. 처음에는 단순한 게임이라고 생각했지만, 오리와의 대화와 일상 미션이 점차 그녀의 생각과 행동 패턴을 변화시켰습니다.</p>

      <blockquote>
        "오리가 저에게 '완벽하지 않아도 괜찮다'고 말해주는 것이 큰 위로가 되었어요. 작은 성취를 축하하고, 실패해도 다시 시도할 수 있다는 것을 배웠죠. 3개월 사용 후, 우울 증상이 확실히 줄어들었고, 학업에 대한 접근 방식도 바뀌었어요."
      </blockquote>

      <p>민지의 PHQ-9 우울증 점수는 '오리의 꿈' 사용 전 18점(중증)에서 사용 3개월 후 7점(경증)으로 감소했습니다.</p>

      <div class="my-6">
        <img src="/images/duck-dream-3.png" alt="오리의 꿈 사용자 경험" class="w-full h-auto rounded-lg" />
      </div>

      <h2>준호의 이야기: 사회불안과 새로운 시작</h2>

      <p><strong>준호(23세, 취업준비생)</strong></p>

      <blockquote>
        "면접만 생각하면 심장이 두근거리고 손에 땀이 났어요. 여러 번의 면접 실패 후, 사람들 앞에 서는 것 자체가 두려워졌죠. 친구들과의 만남도 피하게 되었고, 점점 고립되었어요."
      </blockquote>

      <p>준호는 취업 코치의 권유로 '오리의 꿈'을 시작했습니다. 특히 '점진적 노출' 기능이 그의 사회불안 극복에 도움이 되었습니다.</p>

      <blockquote>
        "게임 속에서 가상의 사회적 상황을 연습하는 것부터 시작했어요. 오리가 제안하는 작은 도전들—처음에는 편의점에서 점원과 대화하기, 나중에는 스터디 그룹에 참여하기 같은—을 하나씩 완료하면서 자신감이 생겼어요."
      </blockquote>

      <p>준호는 '오리의 꿈'을 사용한 지 5개월 만에 면접에 성공하여 원하던 회사에 취업했습니다. 그의 사회불안 척도(LSAS) 점수는 사용 전 87점(중증)에서 사용 후 42점(경증)으로 감소했습니다.</p>

      <blockquote>
        "이제는 발표나 회의에서도 덜 긴장해요. 완전히 극복했다고 말할 수는 없지만, 불안을 관리하는 방법을 알게 되었죠. 오리가 알려준 호흡법과 인지 재구성 기법을 지금도 자주 사용해요."
      </blockquote>

      <h2>수진의 이야기: 번아웃에서 회복으로</h2>

      <p><strong>수진(31세, 마케팅 매니저)</strong></p>

      <blockquote>
        "업무량은 늘어나는데, 성과는 잘 보이지 않고, 상사의 기대는 높아져만 갔어요. 매일 밤 일에 대한 생각으로 잠을 이루지 못했고, 주말에도 불안감에 시달렸죠. 클래식한 번아웃이었어요."
      </blockquote>

      <p>수진은 회사의 직원 지원 프로그램을 통해 '오리의 꿈'을 알게 되었습니다. 특히 일-삶 균형과 경계 설정에 관한 콘텐츠가 도움이 되었습니다.</p>

      <blockquote>
        "오리가 알려준 '디지털 디톡스'와 '마음챙김 순간들'이 정말 효과적이었어요. 퇴근 후 2시간은 업무 이메일을 확인하지 않는 규칙을 만들었고, 주말에는 적어도 하루는 완전히 일에서 벗어나는 시간을 가졌죠."
      </blockquote>

      <div class="my-6">
        <img src="/images/duck-dream-4.png" alt="오리의 꿈 사용자 경험" class="w-full h-auto rounded-lg" />
      </div>

      <p>수진의 번아웃 척도(MBI) 점수는 사용 전 76점(고위험)에서 사용 2개월 후 41점(중간 위험)으로 감소했습니다.</p>

      <blockquote>
        "일에 대한 열정이 다시 생겼어요. 업무 효율성도 높아졌고, 팀원들과의 관계도 개선되었죠. 무엇보다 밤에 잠을 잘 자게 되었어요. 오리의 꿈은 단순한 앱이 아니라 저의 생활 코치가 되었어요."
      </blockquote>

      <h2>연구 결과: 사용자 경험 데이터</h2>

      <p>SYMPLE의 내부 연구에 따르면, '오리의 꿈' 사용자들은 다음과 같은 결과를 보고했습니다:</p>

      <ul>
        <li>사용자의 83%가 4주 사용 후 정서적 안정감 향상을 경험</li>
        <li>사용자의 76%가 8주 사용 후 우울 증상 감소 보고</li>
        <li>사용자의 71%가 12주 사용 후 불안 증상 감소 보고</li>
        <li>사용자의 91%가 서비스 만족도에 '만족' 또는 '매우 만족' 응답</li>
      </ul>

      <p>특히 주목할 만한 점은 '오리의 꿈'의 지속 사용률이 일반적인 정신건강 앱의 평균(약 30%)보다 훨씬 높은 68%를 기록했다는 것입니다. 이는 게이미피케이션 요소와 개인화된 경험이 사용자 참여를 효과적으로 유지한다는 것을 보여줍니다.</p>

      <h2>결론: 작은 변화, 큰 영향</h2>

      <p>'오리의 꿈'은 게임의 즐거움과 과학적으로 검증된 정신건강 개입을 결합하여 사용자들의 일상에 긍정적인 변화를 가져오고 있습니다. 민지, 준호, 수진의 이야기는 디지털 정신건강 솔루션이 어떻게 실제 사람들의 삶을 변화시킬 수 있는지 보여주는 좋은 예입니다.</p>

      <p>정신건강 관리는 단순한 문제 해결을 넘어, 지속적인 성장과 자기 이해의 여정입니다. '오리의 꿈'은 이 여정을 더 접근하기 쉽고, 지속 가능하며, 때로는 즐겁게 만들어 줍니다. 작은 일상의 변화가 모여 큰 삶의 변화를 만들어내는 것—그것이 '오리의 꿈'이 추구하는 비전입니다.</p>

      <blockquote>
        "오리의 꿈은 제게 단순한 앱이 아니라 친구이자 멘토가 되었어요. 매일 조금씩 나아지는 과정을 함께하는 동반자죠." - 민지
      </blockquote>
    `,
  },
]

const mediaAppearances = [
  {
    id: 1,
    title: "SYMPLE, 혁신적인 디지털 멘탈케어 솔루션으로 주목받다",
    outlet: "테크 인사이트",
    date: "2025.04.10",
    link: "#",
    content: `
      <h1>SYMPLE, 혁신적인 디지털 멘탈케어 솔루션으로 주목받다</h1>

      <p><strong>테크 인사이트 | 2025.04.10 | 김기자 기자</strong></p>

      <div class="my-6">
        <img src="/images/symple-app-1.png" alt="SYMPLE 앱 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>디지털 정신건강 시장의 새로운 강자</h2>

      <p>최근 디지털 정신건강 시장에서 주목받고 있는 스타트업 'SYMPLE'이 혁신적인 멘탈케어 솔루션으로 업계의 이목을 집중시키고 있다. 디지털 피노타이핑 기술과 게이미피케이션을 결합한 SYMPLE의 앱은 출시 6개월 만에 다운로드 10만 건을 돌파하며 급성장하고 있다.</p>

      <p>SYMPLE의 김민수 CEO는 "현대인들의 정신건강 문제는 점점 심각해지고 있지만, 기존의 정신건강 서비스는 접근성과 지속성 측면에서 한계가 있었다"며 "SYMPLE은 이러한 간극을 메우기 위해 최신 기술과 심리학적 원리를 결합한 새로운 접근법을 제시하고 있다"고 설명했다.</p>

      <h2>차별화된 기술력</h2>

      <p>SYMPLE의 핵심 경쟁력은 '디지털 피노타이핑' 기술에 있다. 이 기술은 사용자의 스마트폰 사용 패턴, 터치 강도, 스크롤 속도, 타이핑 패턴 등을 분석하여 정신건강 상태를 예측하고 맞춤형 개입을 제공한다.</p>

      <p>"사람들은 자신의 감정 상태를 정확히 인식하지 못하는 경우가 많습니다. 디지털 피노타이핑은 사용자가 자각하지 못하는 미묘한 변화까지 감지하여 조기에 개입할 수 있게 해줍니다." SYMPLE의 기술 책임자인 김도솔 AI 개발자의 설명이다.</p>

      <p>특히 주목할 만한 점은 이 기술의 정확도다. 연세대학교 디지털정신건강연구실과 공동으로 진행한 임상 연구에 따르면, SYMPLE의 알고리즘은 우울증 발병을 평균 2주 전에 85% 정확도로 예측할 수 있는 것으로 나타났다.</p>

      <div class="my-6">
        <img src="/images/symple-statistics.png" alt="SYMPLE 통계 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>게임으로 만나는 정신건강</h2>

      <p>SYMPLE의 또 다른 차별점은 '오리의 꿈'이라는 게임형 정신건강 관리 서비스다. 사용자는 귀여운 오리 캐릭터와 함께 다양한 미션을 수행하며 자연스럽게 인지행동치료(CBT) 원리를 경험하게 된다.</p>

      <p>"전통적인 정신건강 앱은 사용자 이탈률이 높은 편입니다. 하지만 '오리의 꿈'은 게임의 재미와 치료적 효과를 결합해 사용자 참여도를 크게 높였습니다." SYMPLE의 이주원 CPO의 말이다.</p>

      <p>실제로 '오리의 꿈'의 4주 지속 사용률은 68%로, 일반적인 정신건강 앱의 평균(30%)을 크게 상회한다. 또한 사용자의 83%가 4주 사용 후 정서적 안정감이 향상되었다고 보고했다.</p>

      <h2>투자 유치와 미래 계획</h2>

      <p>SYMPLE은 최근 시리즈 A 투자 라운드에서 300억 원의 투자를 유치했다. 주요 투자자로는 소프트뱅크 벤처스, 디지털 헬스케어 파트너스 등이 참여했다.</p>

      <p>김민수 CEO는 "이번 투자를 통해 AI 기술 고도화와 글로벌 시장 진출을 가속화할 계획"이라며 "2026년까지 아시아 태평양 지역 디지털 정신건강 시장의 선두주자로 자리매김하는 것이 목표"라고 밝혔다.</p>

      <p>또한 SYMPLE은 기업 및 교육기관을 위한 B2B 솔루션도 준비 중이다. 직장인의 번아웃 예방과 대학생의 학업 스트레스 관리에 특화된 프로그램을 개발 중이며, 올해 하반기 출시를 목표로 하고 있다.</p>

      <div class="my-6">
        <img src="/images/duck-dream-1.png" alt="오리의 꿈 앱 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>전문가 평가</h2>

      <p>정신건강 분야 전문가들은 SYMPLE의 접근법에 긍정적인 평가를 내리고 있다. 서울대학교 정신의학과 박교수는 "디지털 피노타이핑과 게이미피케이션의 결합은 정신건강 관리의 새로운 패러다임을 제시한다"며 "특히 정신건강 서비스에 대한 접근성이 낮은 청년층에게 효과적인 대안이 될 수 있다"고 평가했다.</p>

      <p>다만 개인정보 보호와 데이터 보안에 대한 우려도 제기되고 있다. 이에 대해 SYMPLE 측은 "모든 데이터는 익명화되고 암호화되며, 국내외 개인정보보호법을 철저히 준수하고 있다"고 강조했다.</p>

      <p>디지털 정신건강 시장은 2025년 글로벌 규모 84억 달러에 이를 것으로 전망되는 급성장 분야다. SYMPLE이 혁신적인 기술과 사용자 중심 접근으로 이 시장에서 어떤 성과를 이룰지 귀추가 주목된다.</p>
    `,
  },
  {
    id: 2,
    title: "청년 정신건강 위기, SYMPLE이 제시하는 새로운 해법",
    outlet: "헬스 투데이",
    date: "2025.03.25",
    link: "#",
    content: `
      <h1>청년 정신건강 위기, SYMPLE이 제시하는 새로운 해법</h1>

      <p><strong>헬스 투데이 | 2025.03.25 | 이건강 기자</strong></p>

      <div class="my-6">
        <img src="/images/night-sky.png" alt="청년 정신건강" class="w-full h-auto rounded-lg" />
      </div>

      <h2>심각해지는 청년 정신건강 문제</h2>

      <p>최근 발표된 보건복지부 통계에 따르면, 20-30대 청년층의 우울증 유병률은 2020년 대비 37% 증가한 것으로 나타났다. 특히 코로나19 팬데믹 이후 청년들의 정신건강 문제는 더욱 심각해지고 있지만, 정신건강 서비스 이용률은 여전히 낮은 수준에 머물러 있다.</p>

      <p>전문가들은 정신건강 서비스에 대한 접근성 부족, 비용 부담, 사회적 낙인 등을 주요 원인으로 지적한다. 국립정신건강센터 정신건강정책연구과 김연구원은 "청년들이 정신건강 문제를 인식하더라도 적절한 도움을 구하는 데 여러 장벽이 존재한다"며 "특히 디지털 네이티브 세대에게 맞는 새로운 형태의 정신건강 서비스가 필요하다"고 강조했다.</p>

      <h2>디지털로 만나는 정신건강 솔루션</h2>

      <p>이러한 상황에서 스타트업 'SYMPLE'이 제시하는 디지털 멘탈케어 솔루션이 주목받고 있다. SYMPLE은 스마트폰 앱을 통해 AI 기반 감정 분석과 게임형 인지행동치료(CBT)를 제공하여 청년들의 정신건강 관리를 돕는다.</p>

      <div class="my-6">
        <img src="/images/symple-app-2.png" alt="SYMPLE 앱 화면" class="w-full h-auto rounded-lg" />
      </div>

      <p>SYMPLE의 대표 서비스인 '오리의 꿈'은 귀여운 오리 캐릭터와 함께하는 게임을 통해 사용자의 정신건강 상태를 파악하고 맞춤형 개입을 제공한다. 사용자는 게임을 즐기는 과정에서 자연스럽게 스트레스 관리, 부정적 사고 패턴 인식, 감정 조절 등의 기술을 배울 수 있다.</p>

      <p>"청년들은 정신건강 서비스를 이용할 때 낙인에 대한 두려움이 큽니다. '오리의 꿈'은 게임이라는 친숙한 형태를 통해 이러한 심리적 장벽을 낮추고, 재미있게 정신건강을 관리할 수 있는 경험을 제공합니다." SYMPLE의 김민수 CEO의 설명이다.</p>

      <h2>디지털 피노타이핑: 데이터로 감지하는 정신건강</h2>

      <p>SYMPLE의 또 다른 차별점은 '디지털 피노타이핑' 기술이다. 이 기술은 스마트폰 사용 패턴, 터치 강도, 스크롤 속도 등의 데이터를 분석하여 사용자의 정신건강 상태 변화를 감지한다.</p>

      <p>"많은 사람들이 자신의 정신건강 상태 변화를 인식하지 못하거나, 인식하더라도 심각성을 과소평가하는 경향이 있습니다. 디지털 피노타이핑은 사용자가 자각하기 전에 미묘한 변화를 감지하여 조기 개입을 가능하게 합니다." SYMPLE의 기술 책임자 김도솔의 설명이다.</p>

      <p>실제로 SYMPLE의 내부 연구에 따르면, 이 기술은 우울증 발병을 평균 2주 전에 85% 정확도로 예측할 수 있는 것으로 나타났다. 이는 조기 개입을 통해 증상 악화를 방지하는 데 큰 도움이 될 수 있다.</p>

      <div class="my-6">
        <img src="/images/duck-dream-2.png" alt="오리의 꿈 앱 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>사용자 중심의 접근</h2>

      <p>SYMPLE의 성공 요인 중 하나는 철저한 사용자 중심 접근법이다. 개발 과정에서 20-30대 청년 500명 이상을 대상으로 한 심층 인터뷰와 사용성 테스트를 진행했으며, 이를 통해 청년들의 실제 니즈와 선호도를 반영했다.</p>

      <p>"청년들은 단순히 증상 완화를 넘어, 자기 성장과 웰빙을 추구합니다. 또한 개인화된 경험과 즉각적인 피드백을 중요시하죠. SYMPLE은 이러한 청년 세대의 특성을 고려하여 설계되었습니다." SYMPLE의 프로덕트 기획자 박영아의 말이다.</p>

      <p>특히 주목할 만한 점은 SYMPLE의 높은 사용자 만족도와 지속 사용률이다. 출시 6개월 만에 사용자 만족도 91%, 4주 지속 사용률 68%를 기록하며 기존 정신건강 앱의 평균(30%)을 크게 상회했다.</p>

      <h2>전문가와의 협력</h2>

      <p>SYMPLE은 디지털 솔루션의 한계를 인식하고, 전문가 네트워크와의 협력을 통해 이를 보완하고 있다. 심각한 증상이 감지되면 사용자에게 전문가 상담을 권유하고, 연계된 정신건강 전문가에게 연결해주는 시스템을 갖추고 있다.</p>

      <p>연세대학교 정신건강의학과 박교수는 "SYMPLE과 같은 디지털 솔루션은 전통적인 정신건강 서비스의 대체재가 아닌 보완재로서 중요한 역할을 할 수 있다"며 "특히 조기 발견과 예방, 그리고 경증 환자의 관리에 효과적"이라고 평가했다.</p>

      <h2>미래 전망</h2>

      <p>SYMPLE은 앞으로 대학 및 기업과의 협력을 통해 서비스 영역을 확장할 계획이다. 대학생의 학업 스트레스 관리와 직장인의 번아웃 예방에 특화된 프로그램을 개발 중이며, 올해 하반기 출시를 목표로 하고 있다.</p>

      <p>김민수 CEO는 "정신건강은 모든 사람의 웰빙과 성장에 필수적인 요소"라며 "SYMPLE은 기술의 힘으로 더 많은 사람들이 자신의 정신건강을 관리하고 더 나은 삶을 살 수 있도록 돕겠다"는 비전을 밝혔다.</p>

      <p>청년 정신건강 위기 속에서 SYMPLE과 같은 혁신적인 디지털 솔루션이 어떤 변화를 가져올지 기대된다.</p>
    `,
  },
  {
    id: 3,
    title: "디지털 피노타이핑 기술의 선두주자, SYMPLE 인터뷰",
    outlet: "디지털 타임즈",
    date: "2025.03.12",
    link: "#",
    content: `
      <h1>디지털 피노타이핑 기술의 선두주자, SYMPLE 인터뷰</h1>

      <p><strong>디지털 타임즈 | 2025.03.12 | 박테크 기자</strong></p>

      <div class="my-6">
        <img src="/images/symple-statistics.png" alt="SYMPLE 기술" class="w-full h-auto rounded-lg" />
      </div>

      <h2>"스마트폰이 당신의 마음을 읽는다"</h2>

      <p>스마트폰 사용 패턴으로 정신건강 상태를 예측하는 '디지털 피노타이핑(Digital Phenotyping)' 기술이 주목받고 있다. 이 분야의 선두주자로 떠오르고 있는 스타트업 SYMPLE의 기술 책임자 김도솔 AI 개발자를 만나 이 혁신적인 기술에 대해 들어보았다.</p>

      <h2>Q: 디지털 피노타이핑이란 무엇인가요?</h2>

      <p>A: 디지털 피노타이핑은 사용자의 디지털 기기 사용 패턴을 분석하여 정신건강 상태를 파악하는 기술입니다. 스마트폰 사용 시간, 터치 강도, 스크롤 속도, 타이핑 패턴, 위치 데이터 등을 수집하고 분석하여 우울증, 불안장애 등의 정신건강 상태를 예측할 수 있습니다. 쉽게 말해, 사용자가 명시적으로 입력하지 않아도 디지털 행동 패턴만으로 정신건강 상태를 감지하는 기술이라고 할 수 있죠.</p>

      <div class="my-6">
        <img src="/images/symple-app-3.png" alt="SYMPLE 앱 분석 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>Q: 이 기술의 정확도는 어느 정도인가요?</h2>

      <p>A: 연세대학교 디지털정신건강연구실과 공동으로 진행한 임상 연구에서, 우리 알고리즘은 우울증 발병을 평균 2주 전에 85% 정확도로 예측할 수 있었습니다. 불안장애의 경우 78%, 수면 장애는 92%의 정확도를 보였습니다. 물론 이는 완벽한 진단이 아니라 조기 경고 시스템으로 이해해야 합니다. 최종 진단은 항상 전문가의 영역이죠.</p>

      <h2>Q: 어떤 데이터를 수집하고, 개인정보 보호는 어떻게 하나요?</h2>

      <p>A: 우리는 스마트폰 사용 시간 패턴, 터치 스크린 상호작용 방식, 키보드 입력 속도와 패턴, 앱 사용 패턴, 위치 변화 등의 데이터를 수집합니다. 중요한 것은 이 모든 데이터가 익명화되고 암호화된다는 점입니다. 우리는 메시지 내용이나 통화 내용 같은 민감한 정보는 절대 수집하지 않습니다. 또한 사용자는 언제든지 데이터 수집을 중단하고 삭제할 수 있는 권한을 가지고 있습니다. GDPR과 국내 개인정보보호법을 철저히 준수하고 있습니다.</p>

      <h2>Q: 이 기술이 실제로 어떻게 사용자에게 도움이 되나요?</h2>

      <p>A: 가장 큰 가치는 조기 감지와 예방에 있습니다. 많은 사람들이 자신의 정신건강 상태 변화를 인식하지 못하거나, 인식하더라도 심각성을 과소평가하는 경향이 있습니다. 우리 기술은 사용자가 자각하기 전에 미묘한 변화를 감지하여 적절한 개입을 제안합니다. 예를 들어, 우울 증상이 감지되면 맞춤형 CBT(인지행동치료) 활동을 추천하거나, 수면 패턴 변화가 감지되면 수면 위생 개선 팁을 제공합니다. 심각한 증상이 감지되면 전문가 상담을 권유하기도 합니다.</p>

      <div class="my-6">
        <img src="/images/duck-dream-3.png" alt="오리의 꿈 앱 화면" class="w-full h-auto rounded-lg" />
      </div>

      <h2>Q: 기술 개발 과정에서 가장 어려웠던 점은 무엇인가요?</h2>

      <p>A: 개인차를 고려한 알고리즘 개발이 가장 큰 도전이었습니다. 사람마다 스마트폰 사용 패턴이 다르고, 같은 사람이라도 상황에 따라 패턴이 달라질 수 있습니다. 이런 변수들을 고려하면서도 정확한 예측을 하는 알고리즘을 개발하기 위해 많은 시행착오를 겪었습니다. 결국 개인화된 베이스라인을 설정하고, 이로부터의 변화를 추적하는 방식으로 접근했습니다. 또한 다양한 인구통계학적 특성을 가진 사용자 데이터를 확보하여 알고리즘의 편향성을 줄이는 데도 많은 노력을 기울였습니다.</p>

      <h2>Q: 앞으로의 연구 방향은 어떻게 되나요?</h2>

      <p>A: 현재는 우울증, 불안장애, 수면 장애 등 주요 정신건강 문제에 초점을 맞추고 있지만, 앞으로는 양극성 장애, ADHD, 조현병 등 더 다양한 정신건강 상태를 감지할 수 있도록 연구를 확장할 계획입니다. 또한 음성 분석, 얼굴 표정 분석 등 다양한 모달리티를 통합하여 더 정확한 예측 모델을 개발하고 있습니다. 장기적으로는 정신건강 상태 예측을 넘어, 개인에게 가장 효과적인 개입 방법을 추천하는 '정밀 정신의학(Precision Psychiatry)' 분야로 연구를 확장하고자 합니다.</p>

      <h2>Q: 디지털 피노타이핑의 미래 전망은 어떻게 보시나요?</h2>

      <p>A: 디지털 피노타이핑은 정신건강 관리의 패러다임을 바꿀 잠재력이 있다고 생각합니다. 현재의 정신건강 관리는 주로 증상이 심각해진 후에 이루어지는 반응적 접근이 대부분입니다. 하지만 디지털 피노타이핑을 통해 조기 감지와 예방 중심의 선제적 접근이 가능해질 것입니다. 또한 이 기술은 정신건강 연구에도 혁신을 가져올 수 있습니다. 기존의 자가 보고식 평가에 의존하던 연구 방식에서 벗어나, 객관적이고 지속적인 데이터를 기반으로 한 연구가 가능해질 것입니다. 물론 이 과정에서 윤리적 고려사항과 개인정보 보호는 항상 최우선으로 다루어져야 할 것입니다.</p>

      <h2>Q: 마지막으로, SYMPLE의 비전은 무엇인가요?</h2>

      <p>A: SYMPLE의 비전은 기술의 힘으로 정신건강 관리의 접근성과 효과성을 높이는 것입니다. 정신건강 문제는 전 세계적으로 증가하고 있지만, 전통적인 정신건강 서비스는 접근성, 비용, 낙인 등의 이유로 많은 사람들에게 닿지 못하고 있습니다. 우리는 디지털 피노타이핑과 같은 혁신적인 기술을 통해 이러한 간극을 메우고, 모든 사람이 자신의 정신건강을 효과적으로 관리할 수 있도록 돕고자 합니다. 궁극적으로는 정신건강 관리가 특별한 일이 아닌, 일상적인 웰빙의 일부로 자리잡을 수 있도록 기여하고 싶습니다.</p>

      <hr />

      <p>디지털 피노타이핑은 아직 초기 단계의 기술이지만, SYMPLE과 같은 기업들의 혁신적인 접근을 통해 빠르게 발전하고 있다. 이 기술이 정신건강 관리의 미래를 어떻게 변화시킬지 귀추가 주목된다.</p>
    `,
  },
]

// 힐링 콘텐츠 시리즈
const healingContentSeries = [
  {
    id: 1,
    title: "유명인의 죽음이 우리에게 남기는 파급효과",
    thumbnail: "/images/healing/250511-0.png",
    date: "2025.05.11",
    images: [
      "/images/healing/250511-0.png",
      "/images/healing/250511-1.png",
      "/images/healing/250511-2.png",
      "/images/healing/250511-3.png",
      "/images/healing/250511-4.png",
    ],
  },
  {
    id: 2,
    title: "오늘은 아무것도 하지 않기로 계획했어요",
    thumbnail: "/images/healing/250519-0.png",
    date: "2025.05.19",
    images: [
      "/images/healing/250519-0.png",
      "/images/healing/250519-1.png",
      "/images/healing/250519-2.png",
      "/images/healing/250519-3.png",
      "/images/healing/250519-4.png",
    ],
  },
]

export default function Blog() {
  const [activeTab, setActiveTab] = useState("blog")
  const [selectedPost, setSelectedPost] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedHealingContent, setSelectedHealingContent] = useState(null)
  const [isHealingDialogOpen, setIsHealingDialogOpen] = useState(false)

  const handlePostClick = (post) => {
    setSelectedPost(post)
    setIsDialogOpen(true)
  }

  const handleHealingContentClick = (content) => {
    setSelectedHealingContent(content)
    setIsHealingDialogOpen(true)
  }

  return (
    <section className="w-full py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">아티클</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">SYMPLE의 이야기와 최신 소식을 확인하세요.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "blog" ? "bg-symple text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("blog")}
            >
              블로그
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "media" ? "bg-symple text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("media")}
            >
              미디어 출연
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "healing" ? "bg-symple text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("healing")}
            >
              힐링 콘텐츠
            </button>
          </div>
        </div>

        {activeTab === "blog" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-symple text-white text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-symple hover:text-symple/80">
                    자세히 보기 →
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "media" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {mediaAppearances.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handlePostClick(item)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full mr-2">
                        {item.outlet}
                      </span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0 border-symple text-symple hover:bg-green-50">
                    기사 보기
                  </Button>
                </div>
              </div>
            ))}

            <div className="mt-8 bg-green-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-symple mb-4">미디어 문의</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                SYMPLE에 대한 인터뷰 및 취재 요청은
                <br />
                아래 이메일로 문의해주세요.
                <br />
                24시간 이내에 답변 드리겠습니다.
              </p>
              <Button
                className="bg-symple hover:bg-symple/90 text-white"
                onClick={() => (window.location.href = "mailto:symple.help@gmail.com?subject=미디어 문의")}
              >
                symple.help@gmail.com로 문의하기
              </Button>
            </div>
          </motion.div>
        )}

        {activeTab === "healing" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {healingContentSeries.map((content) => (
              <div
                key={content.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleHealingContentClick(content)}
              >
                <div className="relative aspect-[2/3]">
                  <Image
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-2">{content.date}</p>
                  <h3 className="font-medium text-gray-900 line-clamp-2">{content.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-symple text-symple hover:bg-green-50"
            onClick={() => {
              if (activeTab === "healing") {
                window.open("https://www.instagram.com/symple.kr", "_blank")
              } else {
                window.open("https://blog.naver.com/symple_kr", "_blank")
              }
            }}
          >
            모든 {activeTab === "blog" ? "블로그 포스트" : activeTab === "media" ? "미디어 출연" : "힐링 콘텐츠"} 보기 →
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedPost.title}</DialogTitle>
                <DialogDescription>
                  {selectedPost.date} | {selectedPost.category || selectedPost.outlet}
                </DialogDescription>
              </DialogHeader>
              <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isHealingDialogOpen} onOpenChange={setIsHealingDialogOpen}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
          {selectedHealingContent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">{selectedHealingContent.title}</DialogTitle>
                <DialogDescription>{selectedHealingContent.date}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                {selectedHealingContent.images.map((image, index) => (
                  <div key={index} className="relative aspect-square w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${selectedHealingContent.title} ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
