export default function SectionSpacer({
  title,
  variant = "normal",
  direction = "vertical",
}) {
  const isStrong = variant === "strong";
  const isHorizontal = direction === "horizontal";

  return (
    <section
      className={`
        relative
        flex
        items-center
        justify-center
        ${isStrong ? "min-h-[36vh]" : "min-h-[28vh]"}
        pointer-events-none
        overflow-hidden
      `}
    >
      {/* =====================
          背景レイヤー（強のみ）
      ===================== */}
      {isStrong && (
        <>
          {/* ① 空気を沈めるベース（存在感を出さない） */}
          <span
            aria-hidden
            className="
              absolute inset-0
              bg-[rgba(0,0,0,0.14)]
              backdrop-blur-[3px]
              pointer-events-none
            "
          />

          {/* ② 和紙テクスチャ（主役・でも読ませない） */}
          <span
            aria-hidden
            className="
              absolute inset-[-4%]
              bg-[url('/images/washi-texture.png')]
              bg-repeat
              opacity-[0.14]
              mix-blend-soft-light
              blur-[2px]
              pointer-events-none
            "
          />

          {/* ③ 境界を消すための縁（線ではなく“気配”） */}
          <span
            aria-hidden
            className="
              absolute inset-0
              shadow-[inset_0_0.5px_0_rgba(255,255,255,0.03),inset_0_-0.5px_0_rgba(0,0,0,0.10)]
              pointer-events-none
            "
          />

          {/* ④ 下方向フェード（次セクションへ溶かす） */}
          <span
            aria-hidden
            className="
              absolute
              inset-x-0
              bottom-[-8%]
              h-[55%]
              bg-[linear-gradient(
                to_bottom,
                rgba(0,0,0,0.00) 0%,
                rgba(0,0,0,0.10) 45%,
                rgba(0,0,0,0.20) 100%
              )]
              blur-[18px]
              pointer-events-none
            "
          />
        </>
      )}

      {/* =====================
          タイトル
      ===================== */}
      <span
        className={`
          relative
          font-serif
          tracking-[0.32em]
          ${isHorizontal ? "writing-horizontal" : "writing-vertical"}
          ${
            isStrong
              ? "text-[clamp(1.4rem,2.6vw,2rem)] text-white opacity-95 drop-shadow-[0_4px_18px_rgba(0,0,0,0.38)]"
              : "text-[clamp(0.9rem,1.6vw,1.1rem)] opacity-45"
          }
        `}
      >
        {title}
      </span>
    </section>
  );
}
