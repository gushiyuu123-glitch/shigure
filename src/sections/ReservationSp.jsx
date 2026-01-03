import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function ReservationSp() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        px-[7vw]
        py-[18vh]
        flex
        items-center
        justify-center
      "
    >
      <div
        data-breath
        className="text-center w-full max-w-[22rem]"
      >
        {/* =====================
            予約ボタン（主役だが静か）
        ===================== */}
        <a
          href="/reserve"
          className="
            relative
            inline-block
            px-[2.6rem]
            py-[1.25rem]
            text-[0.82rem]
            tracking-[0.32em]
            text-[rgba(40,40,40,0.78)]
            transition-all

            bg-[rgba(255,255,255,0.32)]
            backdrop-blur-[2px]

            border
            border-[rgba(0,0,0,0.28)]
            rounded-full

            shadow-[0_2px_10px_rgba(0,0,0,0.10)]

            active:scale-[0.98]
          "
        >
          日程を確認する
        </a>

        {/* =====================
            補足（超小声）
        ===================== */}
        <p
          className="
            mt-[2.4rem]
            text-[0.7rem]
            tracking-[0.26em]
            text-[rgba(40,40,40,0.65)]
          "
        >
          日程を選択すると、料金をご確認いただけます。
        </p>
      </div>
    </section>
  );
}
