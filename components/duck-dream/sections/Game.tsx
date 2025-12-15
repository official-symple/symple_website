const GAME_PLAY = "/assets/game-play.png";
const GAME_RESULT = "/assets/game-result.png";

export default function Game() {
  return (
    <div
      className="relative size-full overflow-hidden bg-[#f1f9eb]"
      data-name="5"
      data-node-id="6503:79564"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[50%] top-[12%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(188,230,174,0.32)_0%,_rgba(188,230,174,0)_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-16 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-5 text-[#2f4226]">
            <div className="flex items-center gap-3 text-[#779966]">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/90 shadow-sm">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-[#779966]"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-[18px] font-bold">꽥팡 게임</span>
            </div>
            <h2 className="font-tmoney text-[44px] leading-tight md:text-[48px]">
              불안 및 스트레스는
              <br />
              게임으로 잠시 잊어요!
            </h2>
            <p className="text-[22px] leading-relaxed text-[#888888]">
              전략형 퍼즐게임은 우울한 생각에 매몰되는 것을 막아주고, 정서를
              조절하는 데 효과적이에요.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="h-[516px] w-[238px] rounded-[30px] border-[6px] border-white bg-white/50 shadow-[0_20px_50px_rgba(52,74,41,0.14)]">
              <img
                src={GAME_PLAY}
                alt="게임 플레이 화면"
                className="h-full w-full rounded-[24px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-[516px] w-[238px] rounded-[20px] border-[6px] border-white bg-white/50 shadow-[0_20px_50px_rgba(52,74,41,0.14)]">
              <img
                src={GAME_RESULT}
                alt="게임 결과 화면"
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
