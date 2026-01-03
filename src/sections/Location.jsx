import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function Location() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="winter"
      className="
        relative
        px-[6vw]
        py-[10vh]
      "
    >
      {/* =====================
          コピー（先に現実）
      ===================== */}
      <p
        data-breath
        className="
          text-center
          text-[clamp(0.78rem,1vw,0.9rem)]
          tracking-[0.34em]
          text-[var(--ink-sub-winter)]
          opacity-100
        "
      >
        ここは、旅の続きではない。
      </p>

      {/* =====================
          余白（意味の距離）
      ===================== */}
      <div className="h-[22vh]" />

<div className="overflow-hidden max-w-[880px] mx-auto opacity-50">
  <img
    src="/images/location-exterior.png"
    alt="宿の外観"
    className="
      w-full
      h-auto
      object-cover
      saturate-[0.6]
      contrast-[0.82]
      brightness-[0.85]
      translate-y-[18%]
    "
  />

  {/* 上下フェード（残すなら） */}
  <span
    aria-hidden
    className="
      absolute inset-0
      bg-[linear-gradient(
        to_bottom,
        rgba(255,255,255,0.55),
        rgba(255,255,255,0.0) 35%,
        rgba(255,255,255,0.0) 65%,
        rgba(255,255,255,0.55)
      )]
      pointer-events-none
    "
  />
</div>


    </section>
  );
}
