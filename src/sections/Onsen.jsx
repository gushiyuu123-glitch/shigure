import { useRef } from "react";
import useBreath from "../app/useBreath";
import useSilentScroll from "../app/useSilentScroll";

export default function Onsen() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);
  useSilentScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="autumn"
      className="
        relative
        min-h-[130svh]
        flex
        items-center
        justify-center
        overflow-hidden
        isolate
      "
    >
      {/* =====================
          背景：温泉（静止）
      ===================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/onsen.png"
          alt="温泉"
          data-silent-layer
          className="
            w-full h-full
            object-cover
            scale-[1.06]
            absolute inset-0
            transition-transform duration-300
          "
        />

        {/* 空気沈み（奥行き） */}
        <span
          aria-hidden
          className="
            absolute inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              rgba(255,255,255,0.22) 0%,
              rgba(0,0,0,0.32) 100%
            )]
            backdrop-blur-[2px]
          "
        />
      </div>

      {/* =====================
          湯気（遠）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-[-15%]
          z-10
          bg-[radial-gradient(
            ellipse_at_30%_40%,
            rgba(255,255,255,0.22) 0%,
            rgba(255,255,255,0.08) 45%,
            rgba(255,255,255,0.0) 70%
          )]
          blur-[42px]
          opacity-60
          animate-onsen-smoke
        "
      />

      {/* =====================
          湯気（近）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-[-10%]
          z-20
          bg-[radial-gradient(
            ellipse_at_65%_60%,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0.0) 65%
          )]
          blur-[56px]
          opacity-45
          animate-onsen-smoke-slow
        "
      />

      {/* =====================
          湯面の光（錯覚レイヤー）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-0
          z-15
          bg-[radial-gradient(
            ellipse_at_50%_55%,
            rgba(255,255,255,0.06) 0%,
            rgba(255,255,255,0.0) 60%
          )]
          pointer-events-none
        "
      />

      {/* =====================
          メインコピー（静止）
      ===================== */}
      <p
        data-breath
        className="
          relative z-30
          mt-[10vh]
          text-[clamp(1.5rem,2.8vw,2.2rem)]
          leading-[2.3]
          tracking-[0.24em]
          text-[rgba(255,255,255,0.96)]
          drop-shadow-[0_12px_36px_rgba(0,0,0,0.5)]
          text-center
        "
      >
        湯に、
        <br />
        身を預ける。
      </p>

      {/* =====================
          時間の余韻（後半）
      ===================== */}
      <p
        data-breath
        className="
          absolute bottom-[28vh]
          z-30
          text-[0.85rem]
          tracking-[0.32em]
          text-white/70
          text-center
        "
      >
        夜が、深くなる。
      </p>

      {/* =====================
          フェードアウト（次章へ）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-x-0 bottom-0
          h-[45%]
          z-40
          bg-[linear-gradient(
            to_bottom,
            rgba(0,0,0,0.0),
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.9)
          )]
          pointer-events-none
        "
      />
    </section>
  );
}
