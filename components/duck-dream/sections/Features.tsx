import { StoreButtons } from "@/components/duck-dream/common/StoreButtons";

const FEATURE_PHONE = "/assets/feature-phone.png";

export default function Features() {
  return (
    <div
      className="relative size-full overflow-hidden"
      data-name="1"
      data-node-id="6497:913"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%), radial-gradient(circle at 80% 10%, rgba(200,230,170,0.35) 0%, rgba(200,230,170,0) 40%), linear-gradient(120deg, #f6e4d7 0%, #e8f4e2 45%, #cde7b7 100%)",
      }}
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-12 md:px-10 lg:px-14">
        <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6 text-[#2f4226]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#779966] bg-white/80 px-5 py-2 text-[18px] font-medium text-[#344a29] shadow-[0_6px_18px_rgba(52,74,41,0.12)]">
              멘탈케어 앱서비스, 오리의꿈
            </span>
            <h2 className="font-tmoney text-[72px] leading-[1.05] tracking-tight md:text-[80px]">
              마음이 무거울 때 <br />
              가볍게 팡 !
            </h2>
            <p className="text-[32px] font-semibold text-[#a4a8a2]">
              오리와 함께하는 마음 치유 여정
            </p>
            <StoreButtons />
          </div>

          <div className="flex justify-center">
            <img
              src={FEATURE_PHONE}
              alt="오리의꿈 홈 화면"
              className="w-[460px] max-w-full drop-shadow-[0_26px_60px_rgba(0,0,0,0.18)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
