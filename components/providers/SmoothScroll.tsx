"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — the single source of momentum for the whole site.
 *
 * Lenis intercepts wheel/touch input and interpolates the scroll
 * position on a custom easing curve, giving every page that weighted,
 * "heavy glass" glide. It bows out entirely for users who prefer
 * reduced motion, handing control back to the native scroller.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      // A long, luxurious deceleration — never abrupt.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    // Expose for in-page anchor navigation (e.g. "scroll to enquiry").
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
