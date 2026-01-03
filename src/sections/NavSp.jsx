import { useEffect, useState } from "react";

export default function NavSp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.1);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed
        inset-x-0
        bottom-0
        z-[90]
        flex
        justify-center
        transition-all
        duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[24px]"}
      `}
    >
      <div
        className="
          mb-[2vh]
          px-[2.6rem]
          py-[0.8rem]
          rounded-full

          bg-[rgba(255,255,255,0.22)]
          backdrop-blur-[2px]

          border
          border-[rgba(0,0,0,0.14)]

          shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        "
      >
        <a
          href="/reserve"
          className="
            block
            text-center
            text-[0.78rem]
            tracking-[0.32em]
            text-[rgba(40,40,40,0.75)]
            active:scale-[0.98]
          "
        >
          予約する
        </a>
      </div>
    </nav>
  );
}
