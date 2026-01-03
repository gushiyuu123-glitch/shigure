import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function HeroSp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        flex
        items-end
      "
    >
      {/* =========================
          LAYER 1｜背景写真
      ========================= */}
      <img
        src="/images/hero-stay.png"
        alt=""
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-[1.06]
          pointer-events-none
        "
      />

      {/* =========================
          LAYER 2｜場の沈み（全体）
      ========================= */}
      <span
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            rgba(0,0,0,0.55) 0%,
            rgba(0,0,0,0.25) 45%,
            rgba(0,0,0,0.0) 72%
          )]
          blur-[28px]
          pointer-events-none
        "
      />

      {/* =========================
          LAYER 3｜和紙（粒度）
      ========================= */}
      <span
        aria-hidden
        className="
          absolute inset-0
          bg-[url('/images/washi-texture.png')]
          bg-cover bg-center
          opacity-[0.06]
          mix-blend-mode-multiply
          pointer-events-none
        "
      />

      {/* =========================
          CONTENT
      ========================= */}
      <div
        className="
          relative z-10
          w-full
          px-[7vw]
          pb-[12vh]
          text-center
        "
      >
       {/* ===== 宿名ブロック ===== */}
<div className="relative -translate-y-[2.2vh] -translate-x-[1.4vh]">
  <h2
    data-breath
    className="
      relative inline-block
      font-serif
      text-[1.3rem]
      tracking-[0.36em]
      text-[#e6dfd2]
      hero-title
    "
  >
    {/* 文字核のにじみ */}
    <span
      aria-hidden
      className="
        absolute inset-[-1.6rem]
        bg-[radial-gradient(
          ellipse_at_center,
          rgba(0,0,0,0.65) 0%,
          rgba(0,0,0,0.35) 45%,
          rgba(0,0,0,0.0) 70%
        )]
        blur-[30px]
        -z-10
      "
    />
    時雨
  </h2>

  <div className="mt-[0.3rem] text-[0.7rem] tracking-[0.3em] text-[#d2cbbf]/70">
    旅館
  </div>
</div>


        {/* ===== メインコピー ===== */}
        <h1
          data-breath
          className="
            mt-[6vh]
            font-serif
            text-[clamp(1.45rem,6.2vw,1.85rem)]
            leading-[1.95]
            tracking-[0.18em]
            text-[#f0eadf]
            hero-title
          "
        >
          時が、
          <br />
          ほどける宿。
        </h1>

        {/* ===== サブコピー ===== */}
        <p
          data-breath
          className="
            mt-[3.5vh]
            font-serif
            text-[0.9rem]
            leading-[2.3]
            tracking-[0.22em]
            text-[#e0d8cc]/75
          "
        >
          四季のあいだで、
          <br />
          お休み。
        </p>

        {/* 無言の余白 */}
        <div className="mt-[6vh] h-[1px] opacity-0" />
      </div>
    </section>
  );
}
