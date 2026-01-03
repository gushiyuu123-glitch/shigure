import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function ClosingSp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="winter"
      className="
        relative
        px-[7vw]
        py-[20vh]
        flex
        items-center
        justify-center
      "
    >
      <div className="text-center max-w-[26rem]">

        {/* =====================
            心拍を落とす間
        ===================== */}
        <div className="h-[10vh]" />

        {/* メインメッセージ */}
        <p
          data-breath
          className="
            text-[0.95rem]
            leading-[2.4]
            tracking-[0.32em]
            text-[var(--ink-main-winter)]
            opacity-80
          "
        >
          何もしない時間を、<br />
          予定に入れてもいいと思えたら、
          <br />
          それで十分です。
        </p>

        {/* =====================
            余韻
        ===================== */}
        <div className="h-[10vh]" />

        {/* 最後の一行 */}
        <p
          data-breath
          className="
            text-[0.75rem]
            tracking-[0.3em]
            text-[var(--ink-sub-winter)]
            opacity-100
          "
        >
          この宿は、そのための場所です。
        </p>

      </div>
    </section>
  );
}
