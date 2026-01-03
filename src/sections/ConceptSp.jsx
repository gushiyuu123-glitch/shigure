import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function ConceptSp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="spring"
      className="
        relative
        flex
        items-center
        justify-center
        px-[7vw]
        py-[18vh]
        pb-[16vh]
      "
    >
      <div className="w-full max-w-[28rem] text-center">

        {/* =====================
            ① 誤解を切る（短く）
        ===================== */}
        <div data-breath className="">
          <p
            className="
              text-[0.95rem]
              leading-[2.1]
              tracking-[0.14em]
              text-[var(--ink-sub-spring)]
            "
          >
            この宿は、
            <br />
            日常から逃げるための場所ではありません。
          </p>
        </div>

        <div className="h-[3.2rem]" />

        {/* =====================
            ② 定義（主軸）
        ===================== */}
        <div data-breath className="">
          <span
            className="
              block
              mb-[1rem]
              text-[0.65rem]
              tracking-[0.3em]
              text-[var(--ink-sub-spring)]
              opacity-60
            "
          >
            考え方
          </span>

          <p
            className="
              text-[0.95rem]
              leading-[2.5]
              tracking-[0.16em]
              text-[var(--ink-sub-spring)]
            "
          >
            旅の途中で、
            <br />
            ほんの少し呼吸を整えるための宿です。
            <br /><br />
            何かを足すのではなく、
            <br />
            何も起こらない時間を、
            <br />
            そのまま受け取る。
          </p>
        </div>

        <div className="h-[3.2rem]" />

        {/* =====================
            ③ 安心（着地）
        ===================== */}
        <div data-breath className="">
          <span
            className="
              block
              mb-[1rem]
              text-[0.65rem]
              tracking-[0.3em]
              text-[var(--ink-sub-spring)]
              opacity-50
            "
          >
            滞在
          </span>

          <p
            className="
              text-[0.9rem]
              leading-[2.4]
              tracking-[0.18em]
              text-[var(--ink-sub-spring)]
              opacity-85
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
