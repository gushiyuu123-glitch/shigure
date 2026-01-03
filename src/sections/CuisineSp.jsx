import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function CuisineSp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="autumn"
      className="
        relative
        px-[7vw]
        py-[18vh]
      "
    >
      {/* =====================
          思想（先に言語）
      ===================== */}
      <div className="text-center">
        <div data-breath className="text-air max-w-[26rem] mx-auto">
          <p
            className="
              text-[0.95rem]
              leading-[2.5]
              tracking-[0.16em]
              text-[var(--ink-sub-autumn)]
            "
          >
            料理は、滞在の流れを
            <br />
            途切れさせないためのものです。
          </p>
        </div>

        <div className="h-[3.2rem]" />

        <div data-breath className="text-air max-w-[24rem] mx-auto">
          <p
            className="
              text-[0.9rem]
              leading-[2.4]
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
      </div>

      {/* =====================
          主写真
      ===================== */}
      <div data-breath className="mt-[8vh]">
        <img
          src="/images/cuisine-1.png"
          alt="料理の主菜"
          className="
            block w-full
            max-w-[92vw]
            mx-auto
          "
        />
      </div>

      {/* =====================
          余韻（短文）
      ===================== */}
      <div className="mt-[14vh] text-center">
        <div data-breath className="text-air max-w-[20rem] mx-auto">
          <p
            className="
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
          写真②（距離を置く）
      ===================== */}
      <div data-breath className="mt-[6vh]">
        <img
          src="/images/cuisine-2.png"
          alt="食後の余韻"
          className="
            block w-full
            max-w-[88vw]
            mx-auto
          "
        />
      </div>

      {/* =====================
          滞在の終端（締め）
      ===================== */}
      <div className="mt-[20vh]">
        <div
          data-breath
          className="
            relative
            w-full
            h-[46vh]
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

          {/* 和紙にじみ（SPは弱く） */}
          <div
            className="
              absolute inset-0
              pointer-events-none
              bg-repeat
              bg-[length:420px_420px]
              opacity-[0.035]
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
