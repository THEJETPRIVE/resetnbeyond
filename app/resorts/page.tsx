import type { Metadata } from "next";
import { IndexHero } from "@/components/layout/PageHeroes";
import { TierRow } from "@/components/collection/TierRow";
import { CTASection } from "@/components/shared/CTASection";
import { resorts } from "@/data/resorts";
import { tiers } from "@/data/tiers";

export const metadata: Metadata = {
  title: "The Collection - The World's Best Luxury Wellness Resorts, in Four Tiers",
  description:
    "Thirty-nine houses across four collections - from the clinical pinnacle of Clinique La Prairie and Chenot to the world's most remarkable wellness escapes. Curated, compared and privately reserved.",
};

/**
 * RESORTS INDEX - the collection at a glance.
 *
 * Four compact bands, one per tier: header + View All right-aligned,
 * then a single row of four houses (the full tier swipes on mobile and
 * lives on its own /collections page). The index skims; the tier pages
 * immerse.
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
          href: `/collections/${t.slug}`,
        }))}
      />

      {tiers.map((tier, i) => (
        <TierRow
          key={tier.slug}
          tier={tier}
          houses={resorts.filter((r) => r.tier === tier.slug)}
          index={i}
          tone={i % 2 === 1 ? "surface" : "default"}
        />
      ))}

      <CTASection
        eyebrow="Uncertain where to begin?"
        lines={["Let us shortlist", "the right house for you."]}
        body="Tell us your goals and your calendar; we will return two or three houses matched to both - with a clear reason for each."
        cta="Speak With an Advisor"
      />
    </>
  );
}
