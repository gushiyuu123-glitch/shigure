import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function OnsenSp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="autumn"
      className="
        relative
        min-h-[110svh]
        flex
        items-center
        justify-center
        overflow-hidden
        isolate
      "
    >
      {/* =====================
          背景：温泉（静止）
          ※ silent scroll は使わない
      ===================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/onsen.png"
          alt="温泉"
          className="
            w-full h-full
            object-cover
            scale-[1.04]
          "
        />

        {/* 空気沈み（SP軽量） */}
        <span
          aria-hidden
          className="
            absolute inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              rgba(255,255,255,0.18) 0%,
              rgba(0,0,0,0.45) 100%
            )]
          "
        />
      </div>

      {/* =====================
          湯気（単層・弱）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-[-12%]
          z-10
          bg-[radial-gradient(
            ellipse_at_50%_45%,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0.0) 65%
          )]
          blur-[36px]
          opacity-45
          animate-onsen-smoke-slow
        "
      />

      {/* =====================
          メインコピー（感情ピーク）
      ===================== */}
      <p
        data-breath
        className="
          relative z-20
          mt-[8vh]
          text-[clamp(1.4rem,6vw,1.8rem)]
          leading-[2.2]
          tracking-[0.26em]
          text-[rgba(255,255,255,0.96)]
          drop-shadow-[0_10px_32px_rgba(0,0,0,0.55)]
          text-center
        "
      >
        湯に、
        <br />
        身を預ける。
      </p>

      {/* =====================
          余韻（下部・短く）
      ===================== */}
      <p
        data-breath
        className="
          absolute bottom-[22vh]
          z-20
          text-[0.8rem]
          tracking-[0.32em]
          text-white/70
          text-center
        "
      >
        夜が、深くなる。
      </p>

      {/* =====================
          フェードアウト
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-x-0 bottom-0
          h-[40%]
          z-30
          bg-[linear-gradient(
            to_bottom,
            rgba(0,0,0,0.0),
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.85)
          )]
          pointer-events-none
        "
      />
    </section>
  );
}
