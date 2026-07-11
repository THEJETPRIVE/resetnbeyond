"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * EditorialImage — the site's single image primitive.
 *
 * It ALWAYS paints a warm, deterministic duotone beneath the photograph,
 * so a section never shows an empty frame while assets are in production
 * (or offline). When a real `src` is supplied it fades in over the tone.
 *
 * Options:
 *  - parallax : slow vertical drift tied to scroll (the cinematic default)
 *  - kenBurns : a very slow scale, for hero stills
 *  - scrim    : a legibility gradient for overlaid text
 */
export interface EditorialImageProps {
  tone: string;
  alt: string;
  src?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  kenBurns?: boolean;
  scrim?: "none" | "top" | "bottom" | "full";
  rounded?: boolean;
}

/** Deterministic hue in the warm/botanical band from a seed string */
function toneToGradient(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  // Bias toward warm sand → sage; keep it muted and low-chroma.
  const base = 28 + (h % 22); // 28–50deg, warm
  const accent = 96 + ((h >> 3) % 40); // 96–136deg, sage-adjacent
  const c1 = `hsl(${base} 24% 82%)`;
  const c2 = `hsl(${base + 6} 20% 72%)`;
  const c3 = `hsl(${accent} 14% 66%)`;
  return `radial-gradient(120% 120% at 25% 20%, ${c1} 0%, ${c2} 48%, ${c3} 100%)`;
}

export function EditorialImage({
  tone,
  alt,
  src,
  className,
  sizes = "100vw",
  priority = false,
  parallax = false,
  kenBurns = false,
  scrim = "none",
  rounded = false,
}: EditorialImageProps) {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // A restrained ±8% drift — presence, not spectacle.
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const scrimClass =
    scrim === "top"
      ? "scrim-top"
      : scrim === "bottom"
        ? "scrim-bottom"
        : scrim === "full"
          ? "bg-[linear-gradient(180deg,hsl(0_0%_0%/0.35),transparent_35%,transparent_60%,hsl(0_0%_0%/0.45))]"
          : "";

  const doParallax = parallax && !reduce;

  return (
    <div
      ref={ref}
      className={cn(
        "grain relative overflow-hidden bg-sand",
        rounded && "rounded-[2px]",
        className,
      )}
    >
      {/* Toned base — always present, the art-directed fallback */}
      <div className="absolute inset-0" style={{ backgroundImage: toneToGradient(tone) }} aria-hidden />

      <motion.div
        className="absolute inset-0"
        style={doParallax ? { y, scale: 1.16 } : kenBurns && !reduce ? { scale: 1 } : undefined}
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            onLoad={() => setLoaded(true)}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-luxe drag-none",
              loaded ? "opacity-100" : "opacity-0",
              kenBurns && !reduce && "motion-safe:animate-kenburns",
            )}
          />
        )}
      </motion.div>

      {scrim !== "none" && <div className={cn("pointer-events-none absolute inset-0 z-[2]", scrimClass)} aria-hidden />}
    </div>
  );
}
