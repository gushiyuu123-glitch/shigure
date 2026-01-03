// src/app/useSilentScroll.js
import { useEffect } from "react";

export default function useSilentScroll(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const target = section.querySelector("[data-silent-layer]");
    if (!target) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // セクション中央付近だけ有効
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - vh / 2);
      const active = distance < vh * 0.45;

      if (!active) {
        target.style.transform = "";
        return;
      }

      // 視覚的な「重さ」
      const strength = 1 - distance / (vh * 0.45);
      const y = strength * 14; // px

      target.style.transform = `translateY(${y}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionRef]);
}
