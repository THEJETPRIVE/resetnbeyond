import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StatementHero } from "@/components/layout/PageHeroes";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ResortCard } from "@/components/cards/ResortCard";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd, SITE_URL } from "@/components/seo/JsonLd";
import { resorts } from "@/data/resorts";
import { destinations, getDestination } from "@/data/destinations";

/** Pre-render all destinations */
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dest = getDestination(params.slug);
  if (!dest) return {};
  const count = resorts.filter((r) => dest.countries.includes(r.country)).length;
  return {
    title: `${dest.name} - The Best Luxury Wellness Resorts & Retreats`,
    description: `${dest.line} ${count} houses, curated, compared and privately reserved by Reset & Beyond.`,
  };
}

/**
 * DESTINATION PAGE - the collection, read geographically.
 * A typographic opening, then every house in the region in the large
 * editorial grid. The third browsing axis beside Collection and Program.
 */
export default function DestinationPage({ params }: { params: { slug: string } }) {
  const dest = getDestination(params.slug);
  if (!dest) notFound();

  const houses = resorts.filter((r) => dest.countries.includes(r.country));
  const pageUrl = `${SITE_URL}/destinations/${dest.slug}`;

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `The best luxury wellness resorts in ${dest.name} - Reset & Beyond`,
    description: dest.line,
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
      { "@type": "ListItem", position: 3, name: dest.name, item: pageUrl },
    ],
  };

  return (
    <>
      <JsonLd data={listSchema} />
      <JsonLd data={breadcrumbSchema} />

      <StatementHero
        eyebrow={`Destinations · ${houses.length} houses`}
        titleLines={
          dest.name.length > 16 && dest.name.includes(" & ")
            ? [dest.name.split(" & ")[0] + " &", dest.name.split(" & ")[1] + "."]
            : [dest.name + "."]
        }
        standfirst={dest.line}
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
        eyebrow={dest.name}
        lines={["Let us match you", "to the right house."]}
        body="Tell us your goals and your calendar; your advisor will return a considered shortlist - with a clear reason for each name on it."
        cta="Speak With an Advisor"
      />
    </>
  );
}
