import { useRef } from "react";
import useBreath from "../app/useBreath";

export default function Reservation() {
  const sectionRef = useRef(null);
  useBreath(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        justify-center
      "
    >
      <div
        data-breath
        className="
          text-center
        "
      >
    <a
  href="/reserve"
  className="
    relative
    inline-block
    px-[3rem]
    py-[1.4rem]
    text-[0.8rem]
    tracking-[0.38em]
    text-[rgba(40,40,40,0.85)]
     opacity-90
    transition-all

    bg-[rgba(255,255,255,0.35)]
    backdrop-blur-[2px]

    border
    border-[rgba(0,0,0,0.35)]
    rounded-full
shadow-[0_2px_12px_rgba(0,0,0,0.08)]
    hover:opacity-100
    hover:border-[rgba(0,0,0,0.55)]
  "
>
  予約する
</a>

        {/* 補足（超小声） */}
<p
  className="
    mt-[3.2rem]
    text-[0.75rem]
    tracking-[0.26em]
    text-[rgba(40,40,40,0.7)]
    drop-shadow-[0_1px_6px_rgba(0,0,0,0.15)]
  "
>
  日程を選択すると、料金をご確認いただけます。
</p>


      </div>
    </section>
  );
}
