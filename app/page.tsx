import { Hero } from "@/components/home/Hero";
import { OpeningStatement } from "@/components/home/OpeningStatement";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { WhyResetBeyond } from "@/components/home/WhyResetBeyond";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
import { ConciergeProcess } from "@/components/home/ConciergeProcess";
import { WorldMap } from "@/components/home/WorldMap";
import { WellnessCategories } from "@/components/home/WellnessCategories";
import { Testimonials } from "@/components/home/Testimonials";
import { JournalPreview } from "@/components/home/JournalPreview";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { HomeFaq, homeFaqs } from "@/components/home/HomeFaq";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd, SITE_URL } from "@/components/seo/JsonLd";
import { resorts } from "@/data/resorts";

/**
 * HOME - the flagship.
 *
 * The scroll is composed as a piece of music: a cinematic overture (Hero),
 * a quiet statement of intent, then a slow build through the collection,
 * the disciplines, the service and the atlas - rising to social proof and
 * editorial authority, and resolving on a single, unhurried invitation.
 *
 * Section rhythm alternates paper / surface / ink so the eye is led
 * through contrast without ever being shouted at.
 */
/** FAQPage schema - mirrors the visible accordion word for word */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** ItemList schema - the nine houses, as an answerable "best of" list */
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The best luxury wellness resorts in the world, curated by Reset & Beyond",
  numberOfItems: resorts.length,
  itemListElement: resorts.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${r.name} (${r.country})`,
    url: `${SITE_URL}/resorts/${r.slug}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={collectionSchema} />
      <Hero />
      <OpeningStatement />
      <FeaturedDestinations />
      <WhyResetBeyond />
      <FeaturedPrograms />
      <ConciergeProcess />
      <WorldMap />
      <WellnessCategories />
      <Testimonials />
      <JournalPreview />
      <BrandsMarquee />
      <HomeFaq />
      <FinalCTA />
    </>
  );
}
