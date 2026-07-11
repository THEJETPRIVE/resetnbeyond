"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * TextReveal — the signature headline entrance. Each line sits behind a
 * mask and lifts into view in sequence, the way a curtain is drawn.
 *
 * Implementation note: we drive the animation from a single `useInView`
 * on the heading container and toggle the child lines with the `animate`
 * prop, rather than a per-line `whileInView`. This resolves the percentage
 * transform reliably — including for headings already in view at mount
 * (the hero) — where a per-element `whileInView` can fail to fire.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export function TextReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.12,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const MotionTag = motion[Tag] as typeof motion.h2;

  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className={cn("block", lineClassName)}>
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <MotionTag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "115%" }}
            animate={inView ? { y: "0%" } : { y: "115%" }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
