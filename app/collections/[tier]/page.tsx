import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StatementHero } from "@/components/layout/PageHeroes";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ResortCard } from "@/components/cards/ResortCard";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd, SITE_URL } from "@/components/seo/JsonLd";
import { resorts } from "@/data/resorts";
import { tiers } from "@/data/tiers";
import type { TierSlug } from "@/data/schema";

/** Pre-render all four collections */
export function generateStaticParams() {
  return tiers.map((t) => ({ tier: t.slug }));
}

export function generateMetadata({ params }: { params: { tier: string } }): Metadata {
  const tier = tiers.find((t) => t.slug === params.tier);
  if (!tier) return {};
  const count = resorts.filter((r) => r.tier === tier.slug).length;
  return {
    title: `${tier.name} - ${count} of the World's Best Luxury Wellness Resorts`,
    description: `${tier.line} ${count} houses, curated, compared and privately reserved by Reset & Beyond.`,
  };
}

/**
 * COLLECTION PAGE - one tier, in full.
 *
 * The index page skims; this page immerses. A typographic opening, then
 * the tier's complete register in the large two-column editorial grid,
 * alternate plates dropped on the diagonal.
 */
export default function CollectionPage({ params }: { params: { tier: string } }) {
  const tier = tiers.find((t) => t.slug === params.tier);
  if (!tier) notFound();

  const houses = resorts.filter((r) => r.tier === (tier.slug as TierSlug));
  const pageUrl = `${SITE_URL}/collections/${tier.slug}`;

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${tier.name} - Reset & Beyond`,
    description: tier.line,
    numberOfItems: houses.length,
    itemListElement: houses.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.name} (${r.country})`,
      url: `${SITE_URL}/resorts/${r.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "The Collection", item: `${SITE_URL}/resorts` },
      { "@type": "ListItem", position: 3, name: tier.name, item: pageUrl },
    ],
  };

  return (
    <>
      <JsonLd data={listSchema} />
      <JsonLd data={breadcrumbSchema} />

      <StatementHero
        eyebrow={`The Collection · ${houses.length} houses`}
        titleLines={tier.name.split(" ").length > 2
          ? [tier.name.split(" ").slice(0, 2).join(" "), tier.name.split(" ").slice(2).join(" ")]
          : [tier.name]}
        standfirst={tier.line}
      />

      <Section className="pt-0">
        <div className="container">
          <Stagger className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
            {houses.map((resort, i) => (
              <StaggerItem key={resort.slug} className={i % 2 === 1 ? "md:mt-28" : ""}>
                <ResortCard resort={resort} aspect="aspect-[3/4]" priority={i < 2} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTASection
        eyebrow={tier.name}
        lines={["Let us match you", "to the right house."]}
        body="Tell us your goals and your calendar; your advisor will return a considered shortlist - with a clear reason for each name on it."
        cta="Speak With an Advisor"
      />
    </>
  );
}
