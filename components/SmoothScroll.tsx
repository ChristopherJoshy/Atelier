"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.45,
      syncTouch: false,
      infinite: false,
    });

    // Expose for other scroll-driven components if needed
    (window as unknown as { lenis: typeof lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Pause on prefers-reduced-motion change
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      }
    };
    media.addEventListener?.("change", onChange);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      media.removeEventListener?.("change", onChange);
    };
  }, []);

  return null;
}
