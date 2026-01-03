import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function LocationSp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="winter"
      className="
        relative
        px-[7vw]
        py-[12vh]
      "
    >
      {/* =====================
          コピー（現実に戻す）
      ===================== */}
      <p
        data-breath
        className="
          text-center
          text-[0.78rem]
          tracking-[0.34em]
          text-[var(--ink-sub-winter)]
          opacity-95
        "
      >
        ここは、旅の続きではない。
      </p>

      {/* =====================
          間（短く）
      ===================== */}
      <div className="h-[12vh]" />

      {/* =====================
          外観（近づける）
      ===================== */}
      <div className="relative overflow-hidden max-w-[92vw] mx-auto opacity-55">
        <img
          src="/images/location-exterior.png"
          alt="宿の外観"
          className="
            w-full
            h-auto
            object-cover
            saturate-[0.6]
            contrast-[0.82]
            brightness-[0.86]
            translate-y-[10%]
          "
        />

        {/* 上下フェード（SP弱） */}
        <span
          aria-hidden
          className="
            absolute inset-0
            bg-[linear-gradient(
              to_bottom,
              rgba(255,255,255,0.45),
              rgba(255,255,255,0.0) 35%,
              rgba(255,255,255,0.0) 65%,
              rgba(255,255,255,0.45)
            )]
            pointer-events-none
          "
        />
      </div>

      {/* =====================
          余白（次章へ）
      ===================== */}
      <div className="h-[10vh]" />
    </section>
  );
}
