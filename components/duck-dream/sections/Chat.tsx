const CHAT_PICK = "/assets/chat-pick.png";
const CHAT_CONVERSATION = "/assets/chat-conversation.png";

export default function Chat() {
  return (
    <div
      className="relative size-full overflow-hidden bg-[#f1f9eb]"
      data-name="4"
      data-node-id="6503:1504"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-18%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(188,230,174,0.32)_0%,_rgba(188,230,174,0)_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-16 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="h-[516px] w-[238px] rounded-[30px] border-[6px] border-white bg-white/50 shadow-[0_20px_50px_rgba(52,74,41,0.14)]">
              <img
                src={CHAT_PICK}
                alt="성격 선택 화면"
                className="h-full w-full rounded-[24px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-[516px] w-[238px] rounded-[30px] border-[6px] border-white bg-white/50 shadow-[0_20px_50px_rgba(52,74,41,0.14)]">
              <img
                src={CHAT_CONVERSATION}
                alt="대화 화면"
                className="h-full w-full rounded-[24px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 text-[#2f2f2f]">
            <div className="flex items-center gap-3 text-[#779966]">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/90 shadow-sm">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-[#779966]"
                >
                  <path d="M4 4h16v10H5.17L4 15.17V4zm2 4v2h8V8H6zm0-2h12V6H6zm0 6h6v-2H6z" />
                </svg>
              </span>
              <span className="text-[20px] font-bold">꽥톡 챗봇</span>
            </div>
            <h2 className="font-tmoney text-[44px] leading-tight md:text-[48px]">
              귀여운 오리와 대화하며
              <br />
              마음에 평화를 찾아보아요!
            </h2>
            <p className="text-[22px] leading-relaxed text-[#888888]">
              내가 마음에 드는성격의 오리와 가볍게 대화하고 맞춤형 미션을
              해결해보아요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
