import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function Concept() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="spring"
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        justify-center
        px-[8vw]
        py-[24vh]
        pb-[20vh]

        /* 白を塗らない春の空気 */
        bg-[linear-gradient(
          to_bottom,
          rgba(240,238,232,0.65),
          rgba(240,238,232,0.45) 40%,
          rgba(240,238,232,0.65)
        )]
      "
    >
      <div className="relative max-w-[42rem] text-center">

        {/* ===== 全体の空気にじみ（面を作らない） ===== */}
        <span
          aria-hidden
          className="
            absolute
            inset-[-6rem]
            bg-[radial-gradient(
              ellipse_at_center,
              rgba(255,255,255,0.35) 0%,
              rgba(255,255,255,0.15) 45%,
              rgba(255,255,255,0.0) 70%
            )]
            blur-[40px]
            -z-10
          "
        />

        {/* === ① 誤解を切る === */}
        <div data-breath className="">
          <p
            className="
              text-[clamp(1.05rem,1.7vw,1.25rem)]
              leading-[2.4]
              tracking-[0.16em]
              text-[rgba(60,58,52,0.78)]
            "
          >
            この宿は、日常から逃げるための場所ではありません。
          </p>
        </div>

        <div className="h-[4.5rem]" />

        {/* === ② 定義 === */}
        <div data-breath className="mb-[4.5rem]">
          <span
            className="
              block
              mb-[1.2rem]
              text-[0.7rem]
              tracking-[0.32em]
              text-[rgba(60,58,52,0.6)]
            "
          >
            考え方
          </span>

          <p
            className="
              text-[clamp(0.95rem,1.4vw,1.1rem)]
              leading-[2.7]
              tracking-[0.16em]
              text-[rgba(60,58,52,0.78)]
            "
          >
            旅の途中で、<br />
            ほんの少し呼吸を整えるための宿です。
            <br /><br />
            何かを足すのではなく、<br />
            何も起こらない時間を、そのまま受け取る。
          </p>
        </div>

        <div className="h-[4.5rem]" />

        {/* === ③ 安心 === */}
        <div data-breath className="">
          <span
            className="
              block
              mb-[1.2rem]
              text-[0.7rem]
              tracking-[0.32em]
              text-[rgba(60,58,52,0.55)]
            "
          >
            滞在
          </span>

          <p
            className="
              text-[clamp(0.9rem,1.3vw,1.05rem)]
              leading-[2.7]
              tracking-[0.18em]
              text-[rgba(60,58,52,0.75)]
            "
          >
            ひとりでも、誰かとでも。
            <br />
            役割を脱いで、
            <br />
            いつもの自分に戻っていくための、
            <br />
            静かな居場所を用意しています。
          </p>
        </div>

      </div>
    </section>
  );
}
