type PhoneMockProps = {
  gradient: string;
  accent?: string;
  badge?: string;
  headline: string;
  subline?: string;
  checklist?: string[];
  footerLabel?: string;
  statLabel?: string;
  statValue?: string;
  className?: string;
};

/**
 * Lightweight phone mock that mirrors the rounded cards and gradients from the Figma shots.
 * It is intentionally abstract so we do not depend on external image servers.
 */
export function PhoneMock({
  gradient,
  accent = "#779966",
  badge = "오늘의 루틴",
  headline,
  subline = "오늘의 기분을 기록했어요",
  checklist = ["감정 기록", "마음 온도 체크", "1분 명상"],
  footerLabel = "오늘의 점수",
  statLabel = "Live",
  statValue = "76%",
  className = "",
}: PhoneMockProps) {
  return (
    <div
      className={`relative h-[520px] w-[260px] overflow-hidden rounded-[30px] border-[6px] border-white shadow-[0_24px_80px_rgba(52,74,41,0.18)] ${className}`}
    >
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/0 to-black/10" />
      <div className="relative z-10 flex h-full flex-col gap-4 p-5 text-white">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.08em]">
          <span className="rounded-full bg-white/20 px-3 py-1 font-semibold">
            {badge}
          </span>
          <span className="rounded-full bg-black/20 px-2 py-1">{statLabel}</span>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-white/80">{subline}</p>
          <p className="text-2xl font-semibold leading-tight">{headline}</p>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl bg-black/10 p-3 backdrop-blur-sm">
          {checklist.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2"
            >
              <span className="text-sm font-medium">{item}</span>
              <span
                aria-hidden
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: accent }}
              />
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between rounded-2xl bg-white/15 px-3 py-3 backdrop-blur">
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-white/70">{footerLabel}</span>
            <span className="text-lg font-semibold">{statValue}</span>
          </div>
          <button
            className="rounded-full bg-white/80 px-3 py-2 text-[11px] font-semibold text-[#2f4226] shadow-sm transition hover:bg-white"
            style={{ color: "#2f4226" }}
          >
            기록하기
          </button>
        </div>
      </div>
    </div>
  );
}
