"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import type Lenis from "lenis";

/**
 * BackToTop - a quiet return, bottom right.
 *
 * Appears only once the guest is ~1.5 screens deep. A thin gold ring
 * traces scroll progress around the circle; pressing it glides back to
 * the top on the site's Lenis easing rather than jumping. Hidden from
 * keyboard/screen-reader users until visible, and honest under
 * reduced motion (instant scroll, no ring animation).
 */
export function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  // Smooth the ring so fast scrolling doesn't make it twitch
  const ring = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > window.innerHeight * 1.5);
  });

  function toTop() {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis && !reduce) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-background/80 text-foreground shadow-none backdrop-blur-md transition-colors duration-300 hover:bg-background md:bottom-8 md:right-8"
        >
          {/* Gold progress ring */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
            <motion.circle
              cx="24"
              cy="24"
              r="22.5"
              fill="none"
              stroke="hsl(var(--gold))"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength: ring }}
            />
          </svg>
          <ArrowUp
            className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
