import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ResortCard } from "@/components/cards/ResortCard";
import { ButtonLink } from "@/components/ui/Button";
import { resorts } from "@/data/resorts";

/**
 * FeaturedDestinations - three houses, shown as magazine plates on a
 * gentle diagonal so the eye travels rather than scans. Deliberately not
 * the full nine; scarcity is the point, and the full collection is one
 * quiet line away.
 */
const featured = ["six-senses-vana", "chenot-palace-weggis", "joali-being"];

export function FeaturedDestinations() {
  const picks = featured
    .map((slug) => resorts.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <Section tone="surface">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Featured Houses"
            title={
              <>
                A curated few, <br className="hidden md:block" />
                never a directory.
              </>
            }
          />
          <div className="shrink-0 md:pb-3">
            <ButtonLink href="/resorts" variant="line">
              All Nine Houses
            </ButtonLink>
          </div>
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          {picks.map((resort, i) => (
            <StaggerItem
              key={resort.slug}
              // The middle plate sits lower - an editorial diagonal
              className={i === 1 ? "md:mt-24" : ""}
            >
              <ResortCard resort={resort} priority={i === 0} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
