import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function Stay() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  /**
   * AirPlate
   * 面を作らず、文字に深度だけ与える支持体
   */
  const AirPlate = ({ children, align = "left" }) => (
    <div
      className={`
        relative
        inline-block
        px-[2.4rem]
        py-[1.6rem]
        ${
          align === "right"
            ? "text-right ml-auto"
            : "text-left"
        }
      `}
    >
      {/* 空気のにじみ（夏用・白を抑える） */}
      <span
        aria-hidden
        className="
          absolute inset-[-1.6rem]
          bg-[radial-gradient(
            ellipse_at_center,
            rgba(235,238,236,0.45) 0%,
            rgba(235,238,236,0.25) 45%,
            rgba(235,238,236,0.0) 70%
          )]
          blur-[34px]
          pointer-events-none
        "
      />
      <div className="relative z-10">{children}</div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      data-season="summer"
      className="
        relative
        min-h-[160svh]
        px-[8vw]
        py-[14vh]

        /* 夏の空気（白を薄める） */
        bg-[linear-gradient(
          to_bottom,
          rgba(228,232,235,0.55),
          rgba(228,232,235,0.35) 40%,
          rgba(228,232,235,0.55)
        )]
      "
    >
      {/* =====================
          BLOCK A（右上）
      ===================== */}
      <div className="relative mt-[8vh]">
        <div data-breath className="max-w-[28rem] ml-auto">
          <AirPlate align="right">
            <p
              className="
                text-[clamp(1rem,1.4vw,1.1rem)]
                leading-[2.6]
                tracking-[0.14em]
                text-[rgba(58,62,60,0.78)]
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]
              "
            >
              部屋は、過ごすための場所です。
              <br /><br />
              畳の部屋と、床の部屋。
              <br />
              大きさも、向きも、
              <br />
              すべて同じではありません。
            </p>
          </AirPlate>
        </div>

        <div data-breath className="mt-[6vh] w-[36vw] ml-auto">
          <img
            src="/images/stay.png"
            alt="客室全体の様子"
            className="
              block w-full
              saturate-[0.88]
              contrast-[0.95]
              brightness-[0.94]
            "
          />
        </div>
      </div>

      {/* =====================
          BLOCK B（中央左）
      ===================== */}
      <div className="relative mt-[22vh]">
        <div data-breath className="max-w-[26rem]">
          <AirPlate>
            <p
              className="
                text-[0.9rem]
                leading-[2.4]
                tracking-[0.14em]
                text-[rgba(58,62,60,0.75)]
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]
              "
            >
              旅の途中で、
              <br />
              それぞれが自分に合う距離感を
              <br />
              自然に選べるようにしています。
            </p>
          </AirPlate>
        </div>

        <div data-breath className="mt-[6vh] w-[40vw]">
          <img
            src="/images/stay3.png"
            alt="光の入る客室"
            className="
              block w-full
              saturate-[0.88]
              contrast-[0.95]
              brightness-[0.94]
            "
          />
        </div>
      </div>

      {/* =====================
          BLOCK C（右下）
      ===================== */}
      <div className="relative mt-[24vh]">
        <div data-breath className="max-w-[22rem] ml-auto">
          <AirPlate align="right">
            <p
              className="
                text-[0.9rem]
                leading-[2.4]
                tracking-[0.16em]
                text-[rgba(58,62,60,0.75)]
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]
              "
            >
              朝も、夜も、同じ部屋です。
            </p>
          </AirPlate>
        </div>

        <div data-breath className="mt-[6vh] w-[38vw] ml-auto">
          <img
            src="/images/stay4.png"
            alt="静かな余白のある客室"
            className="
              block w-full
              saturate-[0.88]
              contrast-[0.95]
              brightness-[0.94]
            "
          />
        </div>
      </div>

      {/* =====================
          現実の入口（他の部屋）
      ===================== */}
      <div className="mt-[20vh] flex justify-center">
        <a
          href="#rooms"
          className="
            relative
            px-[1.2rem]
            py-[0.6rem]
            text-[0.75rem]
            tracking-[0.32em]
            text-[rgba(58,62,60,0.75)]
            opacity-80
            transition-all

            drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]

            after:content-['']
            after:absolute
            after:left-1/2
            after:-translate-x-1/2
            after:-bottom-[6px]
            after:w-[1.2rem]
            after:h-[1px]
            after:opacity-40

            hover:opacity-100
            hover:after:opacity-70
          "
        >
          他の部屋を見る
        </a>
      </div>
    </section>
  );
}
