const cards = [
  {
    title: "마음을 이해하고 다루는 법",
    body: "게임을 통해 내 감정을 관찰하고 다루는 방법을 배워요",
  },
  {
    title: "행동 데이터를 통한 마음 분석",
    body: "센서를 통해 내 마음 상태를 정확하게 판단해요",
  },
  {
    title: "귀여운 캐릭터와 함께하는 즐거운 요소",
    body: "인지행동치료와 퍼즐로 감정을 조절할 수 있어요.",
  },
];

export default function About() {
  return (
    <div
      className="relative size-full overflow-hidden bg-[#f1f9eb]"
      data-name="2"
      data-node-id="6498:1024"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-18%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(167,212,146,0.3)_0%,_rgba(167,212,146,0)_60%)] blur-3xl" />
        <div className="absolute right-[-14%] bottom-[-24%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(87,126,76,0.2)_0%,_rgba(87,126,76,0)_62%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 py-14 text-center md:px-10 lg:px-14">
        <p className="text-[22px] font-semibold text-[#4e6d3f]">About</p>
        <h2 className="mt-4 font-tmoney text-[48px] leading-tight text-[#313330] md:text-[52px]">
          혼자 힘겹게 하루를 버텨가는 당신에게
          <br />
          편한 친구가 되어주고 싶어요
        </h2>
        <p className="mt-4 text-[22px] font-normal leading-relaxed text-[#4a5147]">
          우울할 때마다 감정에 잠식됐던 당신에게
          <br className="hidden md:block" />
          가장 필요한 건 내 마음을 다루는 법을 알려드려요.
        </p>

        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[12px] border-4 border-white bg-white/50 px-8 py-10 text-left shadow-[0_16px_48px_rgba(52,74,41,0.08)] backdrop-blur-sm"
            >
              <h3 className="text-[28px] font-bold leading-snug text-[#1e271a]">
                {card.title}
              </h3>
              <p className="mt-5 text-[18px] leading-relaxed text-[#707070]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
