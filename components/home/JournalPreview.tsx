import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { ButtonLink } from "@/components/ui/Button";
import { articles } from "@/data/journal";

/**
 * JournalPreview — the editorial voice. A lead essay beside a stack of
 * three, positioning Reset & Beyond as an authority rather than a
 * salesperson. This is the section that earns the trust the enquiry needs.
 */
export function JournalPreview() {
  const [lead, ...rest] = articles;

  return (
    <Section tone="surface">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader eyebrow="The Journal" title={<>Considered reading, <br className="hidden md:block" />for the long view.</>} />
          <div className="shrink-0 md:pb-3">
            <ButtonLink href="/journal" variant="line">
              All Essays
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ArticleCard article={lead} variant="feature" />
          </Reveal>
          <div className="flex flex-col">
            {rest.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.05}>
                <ArticleCard article={a} variant="row" className={i === 0 ? "border-t-0 pt-0 lg:border-t lg:pt-8" : ""} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
