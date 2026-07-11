import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ButtonLink } from "@/components/ui/Button";

/**
 * ConciergeProcess — sticky storytelling. The heading holds its place on
 * the left while four movements of the service scroll past on the right,
 * each surfacing in turn. Calm choreography, no scroll-jacking.
 */
const steps = [
  {
    k: "I",
    title: "The Conversation",
    body: "A private consultation — by voice or in person — to understand your health, your calendar and what you are truly seeking. No forms, no funnels. A conversation between confidants.",
  },
  {
    k: "II",
    title: "The Curation",
    body: "A considered shortlist, never a catalogue. Two or three houses matched to your physiology, your goals and your taste, each with a clear rationale for why it belongs on your list.",
  },
  {
    k: "III",
    title: "The Arrangement",
    body: "Everything reserved and orchestrated — the medical programme, the suite, the private transfer, the quiet requests you would rather not repeat. You decide; we arrange.",
  },
  {
    k: "IV",
    title: "The Return",
    body: "The value compounds at home. We carry your protocols back to your physicians and hold the thread for the next reset — so progress is continuous, not occasional.",
  },
];

export function ConciergeProcess() {
  return (
    <Section>
      <div className="container grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Sticky heading */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <Eyebrow>The Concierge</Eyebrow>
          </Reveal>
          <TextReveal as="h2" lines={["A service", "measured in", "consequence."]} className="mt-8 text-display-md font-light" />
          <Reveal delay={0.15}>
            <p className="prose-luxe mt-8">
              The finest service is the kind you never have to notice. Four movements, one point of contact, and the
              distinct sense of being expected.
            </p>
            <div className="mt-10">
              <ButtonLink href="/concierge" arrow>
                Meet Your Advisor
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* Steps */}
        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.k} delay={i * 0.04} className="border-t border-line py-12 first:pt-0 first:border-t-0">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-2xl font-light text-gold">{step.k}</span>
                <div>
                  <h3 className="font-serif text-4xl font-light text-foreground md:text-5xl">{step.title}</h3>
                  <p className="mt-5 max-w-lg leading-relaxed text-muted">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
