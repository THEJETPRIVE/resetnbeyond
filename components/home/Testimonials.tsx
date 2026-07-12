"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";

/**
 * Testimonials - voices, kept anonymous by design. One large quotation at
 * a time, crossfading, attributed only by world and never by name. The
 * restraint is the credibility.
 */
export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <Section tone="ink" className="grain overflow-hidden">
      <div className="container relative z-[2] mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow className="justify-center text-ivory/50">In Confidence</Eyebrow>
        </Reveal>

        <div className="mt-12 min-h-[16rem] md:min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-serif text-[1.75rem] font-normal italic leading-[1.35] text-ivory md:text-4xl md:leading-[1.4]">
                <span className="text-gilded" aria-hidden>
                  “
                </span>
                {t.quote}
                <span className="text-gilded" aria-hidden>
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-10">
                <span className="block font-serif text-xl font-normal text-ivory/90">{t.attribution}</span>
                <span className="mt-1 block text-sm text-ivory/50">{t.context}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`View testimonial ${idx + 1}`}
              className="group p-2"
            >
              <span
                className={`block h-px transition-all duration-500 ease-luxe ${
                  idx === i ? "w-10 bg-gold" : "w-5 bg-ivory/30 group-hover:bg-ivory/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
