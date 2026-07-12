import type { Metadata } from "next";
import { IndexHero } from "@/components/layout/PageHeroes";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ResortCard } from "@/components/cards/ResortCard";
import { CTASection } from "@/components/shared/CTASection";
import { resorts } from "@/data/resorts";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Nine houses, chosen for one reason each: they do one thing better than anywhere on earth. Explore the Reset & Beyond collection of transformational wellness retreats.",
};

/**
 * RESORTS INDEX - the collection.
 *
 * Opens as an editorial index: display type beside a numbered register
 * of all nine houses, like a table of contents. The grid below reads
 * like a portfolio, not a search result.
 */
export default function ResortsPage() {
  return (
    <>
      <IndexHero
        eyebrow="The Collection"
        titleLines={["Nine houses.", "No compromises."]}
        standfirst="We curate a small collection rather than a large catalogue. Each house earns its place by doing one thing - longevity, detox, sleep, medical wellness - better than anywhere else on earth."
        items={resorts.map((r) => ({
          name: r.name,
          note: r.country,
          href: `/resorts/${r.slug}`,
        }))}
      />

      <Section>
        <div className="container">
          <SectionHeader
            eyebrow="The Houses"
            title={<>Chosen in person, <br className="hidden md:block" />never from a brochure.</>}
            className="max-w-3xl"
          />

          <Stagger className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
            {resorts.map((resort, i) => (
              <StaggerItem key={resort.slug} className={i % 2 === 1 ? "md:mt-28" : ""}>
                <ResortCard resort={resort} aspect="aspect-[3/4]" priority={i < 2} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTASection
        eyebrow="Uncertain where to begin?"
        lines={["Let us shortlist", "the right house for you."]}
        body="Tell us your goals and your calendar; we will return two or three houses matched to both - with a clear reason for each."
        cta="Speak With an Advisor"
      />
    </>
  );
}
