import { useEffect } from "react";

export default function useSeason(setSeason) {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-season]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const season = entry.target.getAttribute("data-season");
            if (season) setSeason(season);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setSeason]);
}
