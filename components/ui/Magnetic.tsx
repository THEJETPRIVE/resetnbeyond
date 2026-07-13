"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Magnetic - an element that leans, gently, toward the cursor.
 * The effect is deliberately small (a few pixels). Used only on the
 * primary CTAs, never everywhere. Disabled under reduced-motion and
 * on touch, where there is no cursor to court.
 */
const MAX_SHIFT = 6; // px - a lean, never a lunge

export function Magnetic({
  children,
  strength = 0.08,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 18, mass: 0.4 });

  const clamp = (v: number) => Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, v));

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(clamp((e.clientX - (rect.left + rect.width / 2)) * strength));
    y.set(clamp((e.clientY - (rect.top + rect.height / 2)) * strength));
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
