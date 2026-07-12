import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ProgramRow } from "@/components/cards/ProgramRow";
import { CTASection } from "@/components/shared/CTASection";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Longevity, detox, executive reset, sleep, women's health, biohacking, nutrition, preventive and medical wellness - the disciplines we curate for, and the houses that master each.",
};

/**
 * PROGRAMS INDEX - the disciplines, as an editorial index. A guest arrives
 * with a question; this is the page that speaks its language.
 */
export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Disciplines"
        titleLines={["Begin with", "the question."]}
        standfirst="Nine disciplines, each a lens onto the collection. Choose the one that names what you are seeking, and we will show you where it is done best."
        tone="programs-hero"
        alt="A calm path leading toward the mountains"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }]}
      />

      <Section>
        <div className="container">
          <SectionHeader
            eyebrow="All Disciplines"
            title={<>The concern, in <br className="hidden md:block" />its own words.</>}
            className="max-w-3xl"
          />
          <Stagger className="mt-14 border-t border-line">
            {programs.map((program, i) => (
              <StaggerItem key={program.slug}>
                <ProgramRow program={program} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTASection
        lines={["Not sure which", "discipline you need?"]}
        body="Most guests arrive with a feeling rather than a diagnosis. A short conversation is often all it takes to name it - and to know where to go."
        cta="Speak With an Advisor"
      />
    </>
  );
}
