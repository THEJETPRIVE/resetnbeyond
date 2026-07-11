import { Section, Eyebrow } from "@/components/ui/Section";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

/**
 * OpeningStatement — the first exhale after the hero. A single, unhurried
 * paragraph of positioning, set large, with acres of space around it.
 * This is where the guest decides they are in the right place.
 */
export function OpeningStatement() {
  return (
    <Section className="text-center">
      <div className="container flex flex-col items-center">
        <Reveal>
          <Eyebrow>The Advisory</Eyebrow>
        </Reveal>
        <TextReveal
          as="h2"
          lines={[
            "We do not sell wellness.",
            "We curate the few places",
            "capable of changing a life.",
          ]}
          className="mt-10 max-w-5xl text-display-md font-light text-balance"
          lineClassName="text-foreground"
        />
        <Reveal delay={0.2}>
          <p className="prose-luxe mx-auto mt-12 text-center">
            Reset & Beyond is a private advisory for those who no longer compare prices, only experiences. We know these
            houses intimately — their physicians, their disciplines, their quiet flaws — and we match a person to a
            programme with the discretion of a family office and the taste of a great concierge.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
