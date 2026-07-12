import { Section } from "@/components/ui/Section";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * CTASection - a quiet, reusable invitation for the foot of interior
 * pages. Charcoal ground, one serif line, one act. Distinct from the
 * homepage's cinematic close, but of the same family.
 */
export function CTASection({
  eyebrow = "The Next Step",
  lines,
  body,
  href = "/concierge",
  cta = "Request an Invitation",
}: {
  eyebrow?: string;
  lines: string[];
  body?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <Section tone="ink" className="grain overflow-hidden text-center">
      <div className="container relative z-[2] mx-auto max-w-3xl">
        <Reveal>
          <span className="eyebrow text-ivory/50">{eyebrow}</span>
        </Reveal>
        <TextReveal as="h2" lines={lines} className="mt-8 text-display-md font-normal text-ivory" />
        {body && (
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-ivory/65">{body}</p>
          </Reveal>
        )}
        <Reveal delay={0.25}>
          <div className="mt-12 flex justify-center">
            <Magnetic>
              <ButtonLink href={href} arrow className="bg-ivory text-charcoal hover:bg-sage hover:text-ivory">
                {cta}
              </ButtonLink>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
