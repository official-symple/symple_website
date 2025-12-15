import React from "react";

type StoreButtonProps = {
  label: string;
  icon: "apple" | "google";
  href?: string;
  className?: string;
};

const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const icons: Record<StoreButtonProps["icon"], string> = {
  apple: `${ASSET_PREFIX}/assets/icon-apple.svg`,
  google: `${ASSET_PREFIX}/assets/icon-google-play.svg`,
};

export function StoreButton({
  label,
  icon,
  href = "#",
  className = "",
}: StoreButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-[57px] min-w-[168px] items-center gap-3 rounded-[10px] border-[3px] border-[#a5c48f] bg-[#779966] px-5 text-[18px] font-medium text-white shadow-[0_12px_28px_rgba(52,74,41,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(52,74,41,0.22)] ${className}`}
    >
      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10">
        <img
          src={icons[icon]}
          alt={`${label} 로고`}
          className="h-[20px] w-[20px] object-contain"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </span>
      <span>{label}</span>
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-[15px] ${className}`}>
      <StoreButton label="App Store" icon="apple" />
      <StoreButton label="Google Play" icon="google" />
    </div>
  );
}

export default StoreButtons;
