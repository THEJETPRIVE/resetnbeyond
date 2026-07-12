import { EditorialImage } from "@/components/media/EditorialImage";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * FinalCTA - the cinematic close before the footer. A full-bleed plate
 * under a charcoal wash, a single serif invitation, one button. The last
 * frame should feel like a held breath.
 */
export function FinalCTA() {
  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <EditorialImage
          tone="final-cta-horizon"
          alt="A calm horizon at first light"
          className="h-full w-full"
          parallax
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/55" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: "linear-gradient(180deg, hsl(30 8% 9% / 0.4), transparent 40%, hsl(30 8% 9% / 0.55))" }}
        />
      </div>

      <div className="container relative z-10 text-center">
        <Reveal>
          <span className="eyebrow text-ivory/60">Your invitation awaits</span>
        </Reveal>
        <TextReveal
          as="h2"
          lines={["Every reset begins", "with a single conversation."]}
          className="mx-auto mt-8 max-w-4xl text-display-lg font-normal text-ivory"
          delay={0.05}
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-ivory/70">
            Share a little of what you seek. A private advisor will reply within one business day - discreetly, and
            without obligation.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Magnetic>
              <ButtonLink href="/concierge" arrow className="bg-ivory text-charcoal hover:bg-sage hover:text-ivory">
                Request an Invitation
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/contact" variant="line" className="text-ivory/90">
              Speak With Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
