import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ResortCard } from "@/components/cards/ResortCard";
import { ButtonLink } from "@/components/ui/Button";
import type { Resort } from "@/data/resorts";
import type { Tier } from "@/data/tiers";

/**
 * TierRow - one collection as a single compact band.
 *
 * Desktop: the first four houses in one row, with a quiet "View All"
 * aligned to the row's right edge - the full tier lives on its own
 * collection page. Mobile: the entire tier becomes an edge-peek
 * horizontal swipe, so the page stays short on every device.
 */
const ROMAN = ["I", "II", "III", "IV"];

export function TierRow({
  tier,
  houses,
  index,
  tone = "default",
}: {
  tier: Tier;
  houses: Resort[];
  index: number;
  tone?: "default" | "surface";
}) {
  const featured = houses.slice(0, 4);

  return (
    <Section id={tier.slug} tone={tone}>
      <div className="container">
        {/* Header - tier identity left, View All above the 4th card */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <Reveal>
              <Eyebrow>Collection {ROMAN[index] ?? String(index + 1)}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-3xl font-normal text-foreground md:text-4xl">{tier.name}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{tier.line}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="hidden shrink-0 pb-1 sm:block">
            <ButtonLink href={`/collections/${tier.slug}`} variant="line">
              View All {houses.length}
            </ButtonLink>
          </Reveal>
        </div>

        {/* Desktop: four across */}
        <Stagger className="mt-10 hidden gap-7 lg:grid lg:grid-cols-4">
          {featured.map((resort, i) => (
            <StaggerItem key={resort.slug}>
              <ResortCard resort={resort} compact aspect="aspect-[3/4]" priority={index === 0 && i < 2} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Mobile / tablet: the whole tier, edge-peek swipe */}
        <div
          className="-mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={`${tier.name} - swipe to browse`}
        >
          {houses.map((resort) => (
            <div key={resort.slug} className="w-[76%] shrink-0 snap-start sm:w-[46%]">
              <ResortCard resort={resort} compact aspect="aspect-[3/4]" />
            </div>
          ))}
        </div>

        {/* Mobile View All - below the swipe row */}
        <Reveal className="mt-8 sm:hidden">
          <ButtonLink href={`/collections/${tier.slug}`} variant="line">
            View All {houses.length}
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  );
}
