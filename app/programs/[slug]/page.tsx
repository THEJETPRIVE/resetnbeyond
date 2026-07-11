import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgram, programSlugs, resortsForProgram } from "@/data/programs";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ResortCard } from "@/components/cards/ResortCard";
import { CTASection } from "@/components/shared/CTASection";

export function generateStaticParams() {
  return programSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const program = getProgram(params.slug);
  if (!program) return {};
  return { title: program.name, description: program.tagline };
}

/**
 * PROGRAM DETAIL — a discipline explained, then matched to houses.
 * Intro → the signals that bring a guest here → how a considered
 * programme unfolds → the houses that master it → the invitation.
 */
export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const houses = resortsForProgram(program.slug);

  return (
    <>
      <PageHero
        eyebrow={program.eyebrow}
        titleLines={[program.name]}
        standfirst={program.tagline}
        tone={program.image.tone}
        src={program.image.src}
        alt={program.image.alt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: program.name, href: `/programs/${program.slug}` },
        ]}
      />

      {/* Intro */}
      <Section>
        <div className="container max-w-4xl">
          <Reveal>
            <Eyebrow>The Discipline</Eyebrow>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6">
            {program.intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-xl font-light leading-relaxed text-foreground/85 md:text-2xl md:leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Signals */}
      <Section tone="surface">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <Eyebrow>Is this you?</Eyebrow>
            </Reveal>
            <TextReveal as="h2" lines={["The signals", "that lead", "here."]} className="mt-6 text-display-sm font-light" />
          </div>
          <Stagger>
            {program.signals.map((s, i) => (
              <StaggerItem key={i} className="flex items-baseline gap-6 border-t border-line py-7">
                <span className="font-serif text-lg font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-xl font-light text-foreground/85">{s}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="container">
          <SectionHeader eyebrow="The Approach" title="How a considered programme unfolds." className="max-w-3xl" />
          <Stagger className="mt-16 grid gap-10 md:grid-cols-3">
            {program.approach.map((a, i) => (
              <StaggerItem key={i} className="border-t border-line pt-8">
                <span className="font-serif text-2xl font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-2xl font-light text-foreground">{a.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{a.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Houses */}
      {houses.length > 0 && (
        <Section tone="surface">
          <div className="container">
            <SectionHeader
              eyebrow="Where It Is Done Best"
              title={<>Houses that master <br className="hidden md:block" />{program.name.toLowerCase()}.</>}
              className="max-w-3xl"
            />
            <Stagger className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
              {houses.slice(0, 6).map((r) => (
                <StaggerItem key={r.slug}>
                  <ResortCard resort={r} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>
      )}

      <CTASection
        lines={["Let us design", `your ${program.name.toLowerCase()} reset.`]}
        body="Every programme we arrange is personal. Share your goals, and your advisor will match you to the right house — and the right physician."
        cta="Begin the Conversation"
      />
    </>
  );
}
