import { StoreButtons } from "@/components/duck-dream/common/StoreButtons";

const HERO_PHONE = "/assets/hero-phone.png";
const HERO_DUCKS = "/assets/hero-ducks.png";

export default function Hero() {
  return (
    <div
      className="relative size-full overflow-hidden"
      data-name="Wireframe - 6"
      data-node-id="6492:876"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 25%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%), radial-gradient(circle at 80% 15%, rgba(210,237,213,0.45) 0%, rgba(210,237,213,0) 42%), linear-gradient(120deg, #f8ecde 0%, #eaf6e9 42%, #d9f0f6 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-6%] right-[-6%] bottom-[-14%] max-w-none"
          style={{ aspectRatio: "1383 / 266" }}
        >
          <svg
            viewBox="0 0 1383 266"
            aria-hidden
            className="h-full w-full"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M1407 272H0C475.207 50.4134 1136 -1.63531 1407 0.0386943V272Z"
              fill="#779966"
            />
          </svg>
        </div>
        <div className="absolute bottom-[-6%] right-[-4%] w-[720px] max-w-[62vw]">
          <img
            src={HERO_DUCKS}
            alt=""
            className="block h-auto w-full select-none drop-shadow-[0_28px_60px_rgba(0,0,0,0.18)]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 py-14 md:px-10 lg:px-14">
        <div className="grid h-full grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_1fr]">
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={HERO_PHONE}
              alt="오리의꿈 앱 화면"
              width={840}
              height={630}
              className="relative z-10 w-[760px] max-w-none drop-shadow-[0_32px_80px_rgba(0,0,0,0.22)] lg:w-[840px]"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </div>

          <div className="relative z-10 flex max-w-[560px] flex-col gap-6 text-[#2f4226]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[18px] font-medium text-[#344a29] shadow-[0_8px_20px_rgba(52,74,41,0.12)]">
              멘탈케어 앱서비스, 오리의꿈
            </span>
            <h1 className="font-tmoney text-[78px] leading-[1.02] tracking-[-0.02em] md:text-[90px]">
              마음이 무거울 때 <br className="hidden sm:block" />
              가볍게 팡 !
            </h1>
            <p className="text-[34px] font-semibold text-[#4e6d3f] md:text-[36px]">
              오리와 함께하는 마음 치유 여정
            </p>
            <StoreButtons className="pt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
