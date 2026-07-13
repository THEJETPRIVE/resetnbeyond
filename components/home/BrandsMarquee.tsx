import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { resorts } from "@/data/resorts";

/**
 * BrandsMarquee - provenance, drifting slowly. The register of houses we
 * curate, set as a wordmark procession. No logos, no clutter - names in
 * the display serif carry more authority than any badge.
 */
export function BrandsMarquee() {
  // The Pinnacle houses only - the marquee is provenance, not inventory
  const names = resorts.filter((r) => r.tier === "pinnacle").map((r) => r.name);

  return (
    <Section className="py-24">
      <div className="container mb-14 text-center">
        <Reveal>
          <Eyebrow className="justify-center">The Houses We Curate</Eyebrow>
        </Reveal>
      </div>
      <Reveal>
        <Marquee items={names} />
      </Reveal>
    </Section>
  );
}
