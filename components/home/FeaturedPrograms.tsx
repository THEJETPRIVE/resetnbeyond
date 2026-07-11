import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ProgramRow } from "@/components/cards/ProgramRow";
import { ButtonLink } from "@/components/ui/Button";
import { programs } from "@/data/programs";

/**
 * FeaturedPrograms — the disciplines as an editorial index. A guest
 * rarely arrives asking for a resort; they arrive with a question. This
 * section answers in the language of the question, not the destination.
 */
const featured = ["longevity", "detox", "executive-reset", "sleep", "womens-health"];

export function FeaturedPrograms() {
  const picks = featured
    .map((slug) => programs.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <Section>
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="By Intention"
            title={
              <>
                Begin with the question, <br className="hidden md:block" />
                not the destination.
              </>
            }
          />
          <div className="shrink-0 md:pb-3">
            <ButtonLink href="/programs" variant="line">
              All Disciplines
            </ButtonLink>
          </div>
        </div>

        <Stagger className="mt-14 border-t border-line">
          {picks.map((program, i) => (
            <StaggerItem key={program.slug}>
              <ProgramRow program={program} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
