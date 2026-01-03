import { useEffect } from "react";
import gsap from "gsap";

export default function useBreath(ref, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-breath]");
    if (!items.length) return;

    // ===== デフォルト（世界観基準）=====
    const {
      threshold = 0.25,
      from = { opacity: 0, y: 2 },
      to = {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power1.out",
        stagger: 0.12,
      },
      delay = 0,
    } = options;

    // 初期状態（視覚に触れない）
    gsap.set(items, from);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          gsap.to(entry.target, {
            ...to,
            delay,
          });

          io.unobserve(entry.target);
        });
      },
      { threshold }
    );

    items.forEach((item) => io.observe(item));

    return () => io.disconnect();
  }, [ref, options]);
}
