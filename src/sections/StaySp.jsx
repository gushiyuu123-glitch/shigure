import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function StaySp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  /**
   * AirPlate（SP）
   * 面を作らず、文字を浮かせる
   */
  const AirPlate = ({ children }) => (
    <div
      className="
        relative
        inline-block
        px-[1.8rem]
        py-[1.2rem]
        text-center
      "
    >
      <span
        aria-hidden
        className="
          absolute inset-0
          bg-transparent
          backdrop-blur-[0.5px]
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
        px-[7vw]
        py-[16vh]
      "
    >
      {/* =====================
          BLOCK A
      ===================== */}
      <div className="text-center">
        <div data-breath>
          <AirPlate>
            <p
              className="
                text-[0.95rem]
                leading-[2.4]
                tracking-[0.14em]
                text-[rgba(70,70,70,0.78)]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.26)]
              "
            >
              部屋は、
              <br />
              過ごすための場所です。
              <br /><br />
              畳の部屋と、床の部屋。
              <br />
              大きさも、向きも、
              <br />
              すべて同じではありません。
            </p>
          </AirPlate>
        </div>

        <div data-breath className="mt-[5vh]">
          <img
            src="/images/stay.png"
            alt="客室全体の様子"
            className="
              block w-full
              max-w-[92vw]
              mx-auto
              saturate-[0.9]
              contrast-[0.95]
              brightness-[0.95]
            "
          />
        </div>
      </div>

      {/* =====================
          BLOCK B
      ===================== */}
      <div className="mt-[18vh] text-center">
        <div data-breath>
          <AirPlate>
            <p
              className="
                text-[0.9rem]
                leading-[2.4]
                tracking-[0.14em]
                text-[rgba(70,70,70,0.78)]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.26)]
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

        <div data-breath className="mt-[5vh]">
          <img
            src="/images/stay3.png"
            alt="光の入る客室"
            className="
              block w-full
              max-w-[88vw]
              mx-auto
              saturate-[0.9]
              contrast-[0.95]
              brightness-[0.95]
            "
          />
        </div>
      </div>

      {/* =====================
          BLOCK C
      ===================== */}
      <div className="mt-[20vh] text-center">
        <div data-breath>
          <AirPlate>
            <p
              className="
                text-[0.9rem]
                leading-[2.4]
                tracking-[0.16em]
                text-[rgba(70,70,70,0.78)]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.26)]
              "
            >
              朝も、夜も、
              <br />
              同じ部屋です。
            </p>
          </AirPlate>
        </div>

        <div data-breath className="mt-[5vh]">
          <img
            src="/images/stay4.png"
            alt="静かな余白のある客室"
            className="
              block w-full
              max-w-[90vw]
              mx-auto
              saturate-[0.9]
              contrast-[0.95]
              brightness-[0.95]
            "
          />
        </div>
      </div>

      {/* =====================
          現実の入口
      ===================== */}
      <div className="mt-[18vh] flex justify-center">
        <a
          href="#rooms"
          className="
            relative
            px-[1.2rem]
            py-[0.6rem]
            text-[0.75rem]
            tracking-[0.32em]
            text-[var(--ink-sub-summer)]
            opacity-80
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]
            transition-all

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
