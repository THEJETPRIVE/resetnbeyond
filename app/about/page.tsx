import type { Metadata } from "next";
import { OffsetHero } from "@/components/layout/PageHeroes";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { EditorialImage } from "@/components/media/EditorialImage";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Reset & Beyond is an invitation-only wellness advisory for the world's most discerning few - independent, discreet, and intimately acquainted with the finest houses on earth.",
};

const standards = [
  { k: "Independence", body: "We own nothing we recommend. Our counsel is unbought and, when it needs to be, unflattering." },
  { k: "Intimacy", body: "We know these houses in person - their physicians, their strengths, their limits. Nothing here is second-hand." },
  { k: "Discretion", body: "Every enquiry is held with the confidentiality of a family office. Privacy is the service, not a clause." },
  { k: "Continuity", body: "One advisor, one thread - from the first question to the reset after the reset." },
];

const measures = [
  { figure: "9", label: "Houses, hand-chosen" },
  { figure: "4", label: "Continents" },
  { figure: "24h", label: "To a considered reply" },
  { figure: "1", label: "Advisor, always" },
];

/**
 * ABOUT - the advisory, in its own words. Statement of intent, belief,
 * the standards we hold, and the shape of the work - closing on the
 * quiet numbers that matter.
 */
export default function AboutPage() {
  return (
    <>
      <OffsetHero
        eyebrow="The Advisory"
        titleLines={["A quiet hand", "behind great", "journeys."]}
        standfirst="Reset & Beyond exists for those who no longer compare prices, only experiences. We are the advisor between you and the finest wellness houses on earth."
        tone="about-hero"
        alt="A serene, considered interior in warm morning light"
      />

      {/* Belief */}
      <Section className="text-center">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow className="justify-center">Our Belief</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            lines={["The rarest luxury is not", "a suite or a jet.", "It is a body, and a mind,", "restored."]}
            className="mt-10 text-display-md font-normal"
            lineClassName="text-foreground"
          />
        </div>
      </Section>

      {/* Story */}
      <Section tone="surface">
        <div className="container grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <EditorialImage tone="about-story" alt="The atmosphere of the advisory" className="aspect-[4/5] w-full" parallax sizes="(max-width:1024px) 100vw, 50vw" />
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-4xl font-normal text-foreground">Born of a simple frustration.</h2>
            </Reveal>
            <div className="mt-8 flex flex-col gap-6 prose-luxe">
              <Reveal delay={0.1}>
                <p>
                  Our clients had access to everything and clarity about none of it. They could reserve any suite in the
                  world, yet no one could tell them, honestly, which clinic would actually resolve their sleep, their
                  fatigue, their questions about ageing.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  So we built the advisor we wished existed - independent of the houses, intimate with each, and bound to
                  a single loyalty: <strong>the person in front of us.</strong> Not a booking engine. A confidant with a
                  passport and a physician's address book.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Standards */}
      <Section>
        <div className="container">
          <SectionHeader eyebrow="What We Hold To" title="Four standards, without exception." className="max-w-3xl" />
          <Stagger className="mt-16 grid gap-x-12 gap-y-4 md:grid-cols-2">
            {standards.map((s, i) => (
              <StaggerItem key={s.k} className="flex gap-6 border-t border-line py-10">
                <span className="font-serif text-lg font-normal text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-3xl font-normal text-foreground">{s.k}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Measures */}
      <Section tone="ink">
        <div className="container grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {measures.map((m) => (
            <Reveal key={m.label} className="text-center">
              <div className="font-serif text-6xl font-normal text-ivory md:text-7xl">{m.figure}</div>
              <div className="mt-4 eyebrow text-ivory/50">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        lines={["Discretion begins", "with an introduction."]}
        body="Membership is by introduction or quiet application. Tell us a little of what you seek, and we will take it from there."
        cta="Request an Invitation"
      />
    </>
  );
}
