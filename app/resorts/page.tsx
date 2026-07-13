import type { Metadata } from "next";
import { IndexHero } from "@/components/layout/PageHeroes";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ResortCard } from "@/components/cards/ResortCard";
import { CTASection } from "@/components/shared/CTASection";
import { resorts } from "@/data/resorts";
import { tiers } from "@/data/tiers";

export const metadata: Metadata = {
  title: "The Collection - The World's Best Luxury Wellness Resorts, in Four Tiers",
  description:
    "Thirty-nine houses across four collections - from the clinical pinnacle of Clinique La Prairie and Chenot to the world's most remarkable wellness escapes. Curated, compared and privately reserved.",
};

/**
 * RESORTS INDEX - the collection, in four tiers.
 *
 * The hero indexes the four collections; each tier then unfolds as its
 * own editorially-paced section, Pinnacle first. Alternate cards drop
 * on a gentle diagonal so each tier reads as a portfolio, not a grid.
 */
export default function ResortsPage() {
  return (
    <>
      <IndexHero
        eyebrow="The Collection"
        titleLines={["Four collections.", "One standard."]}
        standfirst="Thirty-nine houses, each earning its place by doing one thing - longevity, detox, sleep, medical wellness - better than almost anywhere on earth. Arranged in four tiers, from the clinical pinnacle to the world's most remarkable escapes."
        items={tiers.map((t) => ({
          name: t.name,
          note: `${resorts.filter((r) => r.tier === t.slug).length} houses`,
          href: `/resorts#${t.slug}`,
        }))}
      />

      {tiers.map((tier, tierIndex) => {
        const houses = resorts.filter((r) => r.tier === tier.slug);
        return (
          <Section key={tier.slug} id={tier.slug} tone={tierIndex % 2 === 1 ? "surface" : "default"}>
            <div className="container">
              <SectionHeader
                eyebrow={`Collection ${["I", "II", "III", "IV"][tierIndex]}`}
                title={tier.name}
                lede={tier.line}
                className="max-w-3xl"
              />

              <Stagger className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
                {houses.map((resort, i) => (
                  <StaggerItem key={resort.slug} className={i % 2 === 1 ? "md:mt-28" : ""}>
                    <ResortCard resort={resort} aspect="aspect-[3/4]" priority={tierIndex === 0 && i < 2} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Section>
        );
      })}

      <CTASection
        eyebrow="Uncertain where to begin?"
        lines={["Let us shortlist", "the right house for you."]}
        body="Tell us your goals and your calendar; we will return two or three houses matched to both - with a clear reason for each."
        cta="Speak With an Advisor"
      />
    </>
  );
}
