import { useEffect, useState } from "react";

export default function SeasonBackground({ season, hideOnHero }) {
  const images = {
    spring: "/images/spring2.png",
    summer: "/images/summer2.png",
    autumn: "/images/autumn.png",
    winter: "/images/winter.png",
  };

  /**
   * 季節の空気色
   * ※ 白に寄せない / 写真の色域を邪魔しない
   */
  const seasonTint = {
    spring: `
      linear-gradient(
        to bottom,
        rgba(240,220,200,0.10),
        rgba(240,220,200,0.02)
      ),
      radial-gradient(
        ellipse_at_center,
        rgba(255,255,255,0.06) 0%,
        rgba(230,200,180,0.05) 50%,
        rgba(200,170,150,0.03) 75%
      )
    `,
    summer: `
      linear-gradient(
        to bottom,
        rgba(200,220,245,0.10),
        rgba(200,220,245,0.02)
      ),
      radial-gradient(
        ellipse_at_center,
        rgba(255,255,255,0.06) 0%,
        rgba(190,215,240,0.05) 50%,
        rgba(170,200,225,0.03) 75%
      )
    `,
    autumn: `
      linear-gradient(
        to bottom,
        rgba(235,205,175,0.12),
        rgba(235,205,175,0.03)
      ),
      radial-gradient(
        ellipse_at_center,
        rgba(255,255,255,0.05) 0%,
        rgba(210,170,130,0.06) 50%,
        rgba(175,135,95,0.04) 75%
      )
    `,
    winter: `
      linear-gradient(
        to bottom,
        rgba(210,225,235,0.12),
        rgba(210,225,235,0.03)
      ),
      radial-gradient(
        ellipse_at_center,
        rgba(255,255,255,0.05) 0%,
        rgba(190,205,215,0.06) 50%,
        rgba(165,180,190,0.04) 75%
      )
    `,
  };

  const [visible, setVisible] = useState(!hideOnHero);

  useEffect(() => {
    if (!hideOnHero) return;

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnHero]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* =====================
          背景写真（存在を残す）
      ===================== */}
      <img
        key={season}
        src={images[season]}
        alt=""
        className="
          w-full h-full object-cover
          opacity-[0.55]
          saturate-[0.9]
          contrast-[0.92]
          brightness-[0.965]
          scale-[1.015]
          blur-[0.5px]
          transition-all duration-[1200ms] ease-out
        "
      />

      {/* =====================
          季節の空気色
      ===================== */}
      <span
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: seasonTint[season] }}
      />

      {/* =====================
          深度（白を足さない）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-0
          pointer-events-none
          bg-[radial-gradient(
            ellipse_at_center,
            rgba(0,0,0,0.18) 0%,
            rgba(0,0,0,0.34) 55%,
            rgba(0,0,0,0.52) 100%
          )]
        "
      />

      {/* =====================
          粒度（控えめ）
      ===================== */}
      <span
        aria-hidden
        className="
          absolute inset-0
          bg-[url('/images/noise.png')]
          opacity-[0.02]
          mix-blend-soft-light
          pointer-events-none
        "
      />
    </div>
  );
}
