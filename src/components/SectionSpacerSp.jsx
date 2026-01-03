export default function SectionSpacerSp({ title }) {
  return (
    <section
      className="
        relative
        flex
        items-center
        justify-center
        min-h-[18vh]
        pointer-events-none
        overflow-hidden
      "
    >
      {/* =====================
          背景（空気だけ）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-0
          bg-[rgba(0,0,0,0.12)]
          pointer-events-none
        "
      />

      {/* =====================
          タイトル（横書き固定）
      ===================== */}
      <span
        className="
          relative
          font-serif
          text-[0.95rem]
          tracking-[0.28em]
          text-white
          opacity-90
          drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]
        "
      >
        {title}
      </span>

      {/* =====================
          下方向フェード（次へ流す）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute
          inset-x-0
          bottom-[-12%]
          h-[50%]
          bg-[linear-gradient(
            to_bottom,
            rgba(0,0,0,0.00) 0%,
            rgba(0,0,0,0.18) 55%,
            rgba(0,0,0,0.32) 100%
          )]
          blur-[16px]
          pointer-events-none
        "
      />
    </section>
  );
}
