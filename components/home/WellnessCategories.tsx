import Link from "next/link";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

/**
 * WellnessCategories — "what brings you here?" The guest's concern in
 * their own words, each routing quietly to the discipline that answers
 * it. A large serif keyword field, not a grid of icon cards.
 */
const concerns: { label: string; href: string }[] = [
  { label: "Burnout", href: "/programs/executive-reset" },
  { label: "Sleep", href: "/programs/sleep" },
  { label: "Longevity", href: "/programs/longevity" },
  { label: "Executive Fatigue", href: "/programs/executive-reset" },
  { label: "Detox", href: "/programs/detox" },
  { label: "Biohacking", href: "/programs/biohacking" },
  { label: "Hormonal Balance", href: "/programs/womens-health" },
  { label: "Recovery", href: "/programs/executive-reset" },
  { label: "Preventive Health", href: "/programs/preventive-health" },
  { label: "Healthy Ageing", href: "/programs/longevity" },
  { label: "Weight Optimisation", href: "/programs/nutrition" },
  { label: "Mental Clarity", href: "/programs/sleep" },
  { label: "Stress", href: "/programs/executive-reset" },
  { label: "Nutrition", href: "/programs/nutrition" },
  { label: "Medical Wellness", href: "/programs/medical-wellness" },
];

export function WellnessCategories() {
  return (
    <Section>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Where to begin</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            lines={["What brings you here?"]}
            className="mt-8 text-display-md font-light"
            lineClassName="text-foreground"
          />
          <Reveal delay={0.1}>
            <p className="prose-luxe mx-auto mt-8 text-center">
              Tell us the concern in your own words. We will translate it into the discipline — and the house — that
              answers it best.
            </p>
          </Reveal>
        </div>

        <Stagger className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center">
          {concerns.map((c) => (
            <StaggerItem key={c.label}>
              <Link
                href={c.href}
                className="group inline-flex items-center gap-3 font-serif text-2xl font-light text-foreground/55 transition-colors duration-500 hover:text-foreground md:text-4xl"
              >
                {c.label}
                <span className="text-base text-gold/40 transition-colors group-hover:text-gold" aria-hidden>
                  ·
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
