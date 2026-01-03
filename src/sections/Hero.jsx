import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function Hero() {
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
        items-center
      "
    >
      {/* =========================
          LAYER 1｜建築（主役）
      ========================= */}
<img
  src="/images/hero-stay.png"
  alt=""
  className="
    absolute inset-0
    w-[62%] h-full
    object-cover
    pointer-events-none
    scale-[1.03]
  "
/>

<div
  className="
    absolute inset-y-0 right-0
    w-[34%]
    bg-gradient-to-r
    from-[#f3f1ed]/12
    via-[#f3f1ed]/05
    to-transparent
    pointer-events-none
  "
/>

{/* =========================
    SHOP NAME｜左・静かに置く
========================= */}
<div
  className="
    absolute
    left-[6vw]
    bottom-[12vh]
    z-10
  "
>
<h2
  data-breath
  className="
    writing-vertical
    font-serif
    text-[clamp(1.1rem,2vw,1.4rem)]
    tracking-[0.45em]
    text-[#e6dfd2]
    hero-title
    relative
  "
>
  {/* 闇のにじみ（PC用・弱め） */}
  <span
    aria-hidden
    className="
      absolute
      inset-[-1.4rem]
      bg-[radial-gradient(
        ellipse_at_center,
        rgba(0,0,0,0.55) 0%,
        rgba(0,0,0,0.25) 45%,
        rgba(0,0,0,0.0) 70%
      )]
      blur-[26px]
      -z-10
    "
  />
  時雨
</h2>

<span
  className="
    relative
    block
    mt-[1.8rem]
    text-[0.7rem]
    tracking-[0.38em]
    text-[#d2cbbf]/70
    writing-vertical
  "
>
  <span
    aria-hidden
    className="
      absolute
      inset-[-1.2rem]
      bg-[radial-gradient(
        ellipse_at_center,
        rgba(0,0,0,0.45) 0%,
        rgba(0,0,0,0.18) 50%,
        rgba(0,0,0,0.0) 75%
      )]
      blur-[22px]
      -z-10
    "
  />
  旅館
</span>



</div>

      {/* =========================
          LAYER 3｜和紙（空気）
      ========================= */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-[0.08]
          mix-blend-mode-multiply
        "
        style={{
          backgroundImage: "url(/images/washi-texture.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* =========================
          LAYER 2｜外界（記憶）
      ========================= */}
      {/* <img
        src="/images/hero-landscape.png"
        alt=""
        className="
          absolute right-0 top-0
          w-[55%] h-full
          object-cover
          opacity-[0.08]
          blur-[3px]
          pointer-events-none
        "
        style={{
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
        }}
      /> */}

      {/* =========================
          COPY｜右に“置く”
      ========================= */}
      <div
        className="
          relative z-10
          ml-auto
          pr-[10vw]
          flex
          items-center
          text-shadow: 0 2px 12px rgba(0,0,0,0.12);
        "
      >
        <div className="flex gap-[4rem] writing-vertical">
          {/* メインコピー */}
<h1
  data-breath
  className="
    hero-title
    writing-vertical
    font-serif
    text-[clamp(1.5rem,3.1vw,2.5rem)]
    leading-[1.85]
    tracking-[0.22em]
    text-[rgba(26,26,26,0.82)]
  "
>

  時が、<br />
  <span className="jisage">ほどける宿。</span>
</h1>


  <div className="relative inline-block left-[-13em]">
  {/* 縦文字用・空気レイヤー */}
<span
  aria-hidden
  className="
    absolute
    top-[-2rem]
    bottom-[-2rem]
    left-[-1.4rem]
    right-[-1.4rem]
    bg-[linear-gradient(
      to_bottom,
      rgba(245,243,238,0.0) 0%,
      rgba(245,243,238,0.65) 18%,
      rgba(245,243,238,0.9) 35%,
      rgba(245,243,238,0.9) 65%,
      rgba(245,243,238,0.65) 82%,
      rgba(245,243,238,0.0) 100%
    )]
    blur-[22px]
    pointer-events-none
  "
/>


{/* <div className="text-air"> */}
  <p
    data-breath
    className="
      relative
      writing-vertical
      font-serif
      text-[clamp(0.95rem,1.25vw,1.05rem)]
      leading-[2.6]
      tracking-[0.24em]
      text-[rgba(26,26,26,0.55)]
      drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]
      
    "
  >
    
    四季のあいだで、
    お休み。
  </p>
{/* </div> */}

</div>


        </div>
      </div>
    </section>
  );
}
