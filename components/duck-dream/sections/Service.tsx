const LEVELUP_IMG = "/assets/levelup.png";
const STORE_IMG = "/assets/store.png";

export default function Service() {
  return (
    <div
      className="relative size-full overflow-hidden bg-[#f1f9eb]"
      data-name="3"
      data-node-id="6503:1306"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[48%] top-[10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(167,212,146,0.3)_0%,_rgba(167,212,146,0)_60%)] blur-3xl" />
      </div>

      <div className="absolute left-1/2 top-14 -translate-x-1/2 text-[24px] font-semibold text-[#4e6d3f]">
        Service
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-16 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-4 text-[#2f2f2f]">
            <div className="flex items-center gap-3 text-[#779966]">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/90 shadow-sm">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-[#779966]"
                >
                  <path d="M12 3 3 11h2v8h5v-5h4v5h5v-8h2z" />
                </svg>
              </span>
              <span className="text-[20px] font-bold tracking-[-0.02em]">홈</span>
            </div>
            <h2 className="font-tmoney text-[48px] leading-tight md:text-[52px]">
              나만의 오리를 레벨업시키고
              <br />
              꾸며보아요!
            </h2>
            <p className="text-[22px] leading-relaxed text-[#888888]">
              깃털을 모아 오리를 키우고 스토어에서 직접 구매한 아이템드로
              마음껏 꾸밀 수 있어요.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="h-[540px] w-[249px] rounded-[20px] border-[6px] border-white bg-white/40 shadow-[0_20px_50px_rgba(52,74,41,0.14)]">
              <img
                src={LEVELUP_IMG}
                alt="레벨업 화면"
                className="h-full w-full rounded-[14px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-[540px] w-[249px] rounded-[20px] border-[6px] border-white bg-white/40 shadow-[0_20px_50px_rgba(52,74,41,0.14)]">
              <img
                src={STORE_IMG}
                alt="스토어 화면"
                className="h-full w-full rounded-[14px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
