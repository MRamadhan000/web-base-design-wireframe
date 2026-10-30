import { useState, useEffect } from "react";

// features/hero/hooks/useHeroSlider.ts
export function useHeroSlider(imageCount: number, intervalMs: number, paused: boolean) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const isPaused = paused || prefersReducedMotion;

  useEffect(() => {
    if (isPaused) return;
    const t = setTimeout(() => setCurrentIndex((p) => (p + 1) % imageCount), intervalMs);
    return () => clearTimeout(t);
  }, [currentIndex, isPaused, imageCount, intervalMs]);

  return { currentIndex, goTo: setCurrentIndex };
}