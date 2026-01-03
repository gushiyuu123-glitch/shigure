export default function SeasonBackgroundSp({ season }) {
  const images = {
    spring: "/images/spring2.png",
    summer: "/images/summer2.png",
    autumn: "/images/autumn.png",
    winter: "/images/winter.png",
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <img
        src={images[season]}
        alt=""
        className="
          w-full h-full object-cover
          opacity-[0.45]
          brightness-[0.98]
          transition-opacity duration-[800ms]
        "
      />

      {/* 空気色だけ残す */}
      <span
        aria-hidden
        className="
          absolute inset-0
          bg-[rgba(255,255,255,0.06)]
          pointer-events-none
        "
      />
    </div>
  );
}
