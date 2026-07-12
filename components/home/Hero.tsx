"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EditorialImage } from "@/components/media/EditorialImage";
import { TextReveal } from "@/components/motion/TextReveal";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * Hero - the arrival.
 *
 * A full-bleed cinematic still under a warm charcoal wash, a two-line
 * serif proclamation drawn up from behind a mask, and two quiet calls to
 * act. The whole plate drifts and fades as the guest begins to scroll,
 * so leaving the hero feels like stepping through a doorway.
 *
 * ART DIRECTION - replace the toned placeholder with a slow cinemagraph
 * or 4–6s silent loop (mist moving through a Himalayan forest at dawn).
 * See ASSETS.md for the AI prompt and stock keywords.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "26%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Cinematic backplate */}
      <div className="absolute inset-0">
        <EditorialImage
          tone="hero-forest-dawn"
          alt="Dawn mist drifting through a Himalayan Sal forest"
          className="h-full w-full"
          kenBurns
          priority
          sizes="100vw"
        />
        {/* Legibility washes - cinematic and text-aware. A gentle overall
            darken, a stronger wash from the left (where the headline sits)
            and from the base (sub-copy + scroll cue), leaving the upper-
            right of the photograph open to breathe. */}
        <div className="absolute inset-0 bg-charcoal/20" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(90deg, hsl(30 8% 9% / 0.72) 0%, hsl(30 8% 9% / 0.4) 34%, transparent 66%), linear-gradient(180deg, hsl(30 8% 9% / 0.4) 0%, transparent 24%, transparent 46%, hsl(30 8% 9% / 0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 flex h-full flex-col justify-center"
      >
        <div className="container">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mb-8 eyebrow text-ivory/70"
          >
            By Invitation · Private Wellness Advisory
          </motion.p>

          <TextReveal
            as="h1"
            lines={["Beyond Wellness.", "Beyond Luxury."]}
            delay={0.35}
            className="max-w-5xl text-display-xl font-normal text-ivory"
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-ivory/75"
          >
            An invitation-only concierge for the world's most discerning few - curating, comparing and reserving the
            finest transformational retreats on earth.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <Magnetic>
              <ButtonLink href="/concierge" arrow className="bg-ivory text-charcoal hover:bg-sage hover:text-ivory">
                Begin the Conversation
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/resorts" variant="line" className="text-ivory/90">
              Explore the Collection
            </ButtonLink>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="eyebrow text-ivory/50">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-ivory/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-ivory/80"
            animate={reduce ? {} : { y: ["-100%", "300%"] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          />
        </span>
      </motion.div>
    </section>
  );
}
