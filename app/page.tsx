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
import { HomeFaq } from "@/components/home/HomeFaq";
import { FinalCTA } from "@/components/home/FinalCTA";

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
export default function HomePage() {
  return (
    <>
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
