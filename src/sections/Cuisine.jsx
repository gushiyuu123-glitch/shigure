import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function Cuisine() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="autumn"
      className="
        relative
        min-h-[100svh]
        px-[8vw]
        py-[22vh]
      "
    >


      {/* =====================
          思想 + 写真（横並び）
      ===================== */}
      <div
        className="
          relative
          flex
          items-start
          justify-end
          gap-[15vw]
        "
      >
        {/* テキスト（左） */}
        <div
          className="
            text-air
            max-w-[26rem]
            pt-[6vh]
          "
        >
          {/* 思想 */}
          <p
            data-breath
            className="
              relative
              text-[clamp(1.05rem,1.4vw,1.15rem)]
              leading-[2.6]
              tracking-[0.16em]
              text-[var(--ink-sub-autumn)]
            "
          >
            料理は、滞在の流れを
            <br />
            途切れさせないためのものです。
          </p>

          <div className="h-[8vh]" />

          {/* 具体 */}
          <p
            data-breath
            className="
              relative
              text-[0.95rem]
              leading-[2.5]
              tracking-[0.14em]
              text-[var(--ink-sub-autumn)]
              opacity-85
            "
          >
            地元の食材を中心に、
            <br />
            季節ごとの献立を組み立て、
            <br />
            量と温度を整えます。
          </p>
        </div>

        {/* 主写真（右） */}
        <div
          data-breath
          className="
            max-w-[46vw]
            flex-shrink-0
          "
        >
          <img
            src="/images/cuisine-1.png"
            alt="料理の主菜"
            className="block w-full"
          />
        </div>
      </div>

      {/* =====================
          余韻（短文）
      ===================== */}
   {/* =====================
    余韻（画像左 × テキスト右｜右寄せ）
===================== */}
<div
  className="
    mt-[14vh]
    flex
    items-center
    gap-[15vw]
    ml-auto
    pr-[6vw]
  "
>
  {/* 写真②（左） */}
  <div
    data-breath
    className="
      max-w-[32vw]
      flex-shrink-0
    "
  >
    <img
      src="/images/cuisine-2.png"
      alt="食後の余韻"
      className="block w-full"
    />
  </div>

  {/* 短文（右） */}
  <div className="text-air max-w-[22rem]">
    <p
      data-breath
      className="
        relative
        text-[0.9rem]
        leading-[2.4]
        tracking-[0.14em]
        text-[var(--ink-sub-autumn)]
        opacity-85
      "
    >
      派手な演出は行いません。
    </p>
  </div>
  
</div>
{/* =====================
    滞在の終端（ワイド）
===================== */}
<div className="mt-[22vh]">
  <div
    data-breath
    className="
      relative
      w-full
      h-[60vh]
      overflow-hidden
    "
  >
    <img
      src="/images/cuisine-wide1.png"
      alt="食後の静かな時間"
      className="
        w-full
        h-full
        object-cover
        scale-[1.02]
      "
    />

    {/* 和紙にじみレイヤー */}
    <div
      className="
        absolute inset-0
        pointer-events-none
        bg-repeat
        bg-[length:420px_420px]
        opacity-[0.05]
        filter: contrast(1.03) saturate(0.96);

      "
      style={{
        backgroundImage: "url(/images/washi-texture.png)",
      }}
    />
  </div>
</div>


    </section>
  );
}
