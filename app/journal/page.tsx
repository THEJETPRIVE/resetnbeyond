import type { Metadata } from "next";
import { MastheadHero } from "@/components/layout/PageHeroes";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTASection } from "@/components/shared/CTASection";
import { articles } from "@/data/journal";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Considered essays on longevity, medical wellness, sleep and the art of the reset - in the register of Monocle and Kinfolk, never a sales pitch.",
};

/**
 * JOURNAL INDEX - the editorial voice. A lead essay, then the archive in
 * a calm three-column rhythm.
 */
export default function JournalPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <MastheadHero
        eyebrow="The Journal"
        titleLines={["On the art", "of the reset."]}
        standfirst="Long-form thinking on longevity, sleep, medical wellness and discretion - written for the long view, and never to sell."
      />

      <Section>
        <div className="container">
          <Reveal>
            <ArticleCard article={lead} variant="feature" />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" className="pt-0">
        <div className="container">
          <Stagger className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <StaggerItem key={a.slug}>
                <ArticleCard article={a} variant="row" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTASection
        eyebrow="Beyond the page"
        lines={["Reading is one thing.", "Arriving is another."]}
        body="When you are ready to turn thought into a journey, a private advisor is here to help you begin."
        cta="Request an Invitation"
      />
    </>
  );
}
