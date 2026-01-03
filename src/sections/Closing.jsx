import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function Closing() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-season="winter"
      className="
        relative
        min-h-[100svh]
        px-[6vw]
        flex
        items-center
        justify-center
      "
    >
      <div className="text-center max-w-[720px]">

        {/* 空白で心拍を落とす */}
        <div className="h-[18vh]" />

        {/* Closing メイン */}
        <p
          data-breath
          className="
            text-[clamp(0.95rem,1.2vw,1.05rem)]
            tracking-[0.34em]
            text-[var(--ink-main-winter)]
            opacity-75
            leading-[2.6]
          "
        >
          何もしない時間を、  
          予定に入れてもいいと思えたら、<br />
          それで十分です。
        </p>

        <div className="h-[18vh]" />

        {/* 最後の一行 */}
        <p
          data-breath
          className="
            text-[clamp(0.75rem,0.9vw,0.85rem)]
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
