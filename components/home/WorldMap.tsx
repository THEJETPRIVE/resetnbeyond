"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { resorts } from "@/data/resorts";
import { worldLandPath } from "@/data/worldPath";

/**
 * WorldMap - a private atlas.
 *
 * Rather than clip-art continents, houses are plotted by their true
 * coordinates onto a refined equirectangular graticule and faint
 * landmass silhouette. Selecting a plot reveals the house in a side
 * panel. Bespoke, quiet, and unmistakably not a template.
 */
const W = 1000;
const H = 500;

// Equirectangular projection → SVG space
const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * W,
  y: ((90 - lat) / 180) * H,
});

const regionLabels = [
  { label: "Europe", lat: 54, lng: 12 },
  { label: "Asia", lat: 46, lng: 90 },
  { label: "Indian Ocean", lat: -8, lng: 74 },
  { label: "Americas", lat: 34, lng: -100 },
];

export function WorldMap() {
  const [active, setActive] = useState(resorts[0].slug);
  const selected = resorts.find((r) => r.slug === active) ?? resorts[0];

  return (
    <Section tone="surface">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>The Atlas</Eyebrow>
            </Reveal>
            <TextReveal as="h2" lines={["Nine houses.", "Four continents."]} className="mt-8 text-display-md font-normal" />
          </div>
          <Reveal delay={0.1}>
            <p className="prose-luxe md:pb-2">
              From the Swiss Alps to the Maldivian atolls, a small collection chosen for one reason only: each does one
              thing better than anywhere else on earth.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          {/* Map */}
          <Reveal>
            <div className="relative">
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="World map of the collection">
                {/* Faded land silhouette - equirectangular, aligned to the plots */}
                <path d={worldLandPath} className="fill-foreground" opacity={0.08} />

                {/* Graticule */}
                <g stroke="hsl(var(--line))" strokeWidth="0.6" opacity="0.35">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <line key={`v${i}`} x1={(i / 10) * W} y1={0} x2={(i / 10) * W} y2={H} />
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <line key={`h${i}`} x1={0} y1={((i + 1) / 6) * H} x2={W} y2={((i + 1) / 6) * H} />
                  ))}
                </g>

                {/* Region labels */}
                {regionLabels.map((r) => {
                  const p = project(r.lat, r.lng);
                  return (
                    <text
                      key={r.label}
                      x={p.x}
                      y={p.y}
                      textAnchor="middle"
                      className="fill-muted"
                      style={{ fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.5 }}
                    >
                      {r.label}
                    </text>
                  );
                })}

                {/* Plots */}
                {resorts.map((r) => {
                  const p = project(r.coordinates[0], r.coordinates[1]);
                  const isActive = r.slug === active;
                  return (
                    <g
                      key={r.slug}
                      transform={`translate(${p.x} ${p.y})`}
                      className="cursor-pointer"
                      onMouseEnter={() => setActive(r.slug)}
                      onClick={() => setActive(r.slug)}
                      role="button"
                      aria-label={`${r.name}, ${r.country}`}
                    >
                      {/* Halo */}
                      <circle r={isActive ? 16 : 0} className="fill-sage/20 transition-all duration-500" />
                      {isActive && (
                        <circle r={10} fill="none" stroke="hsl(var(--gold))" strokeWidth={1} className="opacity-80" />
                      )}
                      <circle
                        r={isActive ? 5 : 3.5}
                        className={isActive ? "fill-gold" : "fill-foreground/60"}
                        style={{ transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)" }}
                      />
                      {/* Gentle pulse on the active plot */}
                      {isActive && (
                        <circle r={5} fill="none" stroke="hsl(var(--gold))" strokeWidth={1}>
                          <animate attributeName="r" from="5" to="20" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </Reveal>

          {/* Detail panel */}
          <div className="lg:pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="eyebrow text-muted">
                  {selected.country} · {selected.region.split(",")[0]}
                </span>
                <h3 className="mt-4 font-serif text-4xl font-normal text-foreground md:text-5xl">{selected.name}</h3>
                <p className="mt-5 max-w-sm leading-relaxed text-muted">{selected.cardline}</p>
                <Link
                  href={`/resorts/${selected.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wide2 text-foreground"
                >
                  <span className="relative">
                    Discover the House
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-luxe group-hover:origin-left group-hover:scale-x-100" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Quick index */}
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-8">
              {resorts.map((r) => (
                <button
                  key={r.slug}
                  onMouseEnter={() => setActive(r.slug)}
                  onClick={() => setActive(r.slug)}
                  className={`text-sm transition-colors duration-300 ${
                    r.slug === active ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {r.shortName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
