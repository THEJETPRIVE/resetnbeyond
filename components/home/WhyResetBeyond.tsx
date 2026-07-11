import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { EditorialImage } from "@/components/media/EditorialImage";

/**
 * WhyResetBeyond — the case for an advisor, made quietly. A treated
 * portrait plate on the left holds the eye; four principles on the right
 * distinguish an independent advisory from a booking engine.
 */
const principles = [
  {
    title: "On your side, not the house's.",
    body: "We own none of these properties. We are paid to know them, to compare them honestly, and to place your interest above every other.",
  },
  {
    title: "Known in person, not from a brochure.",
    body: "We have walked these estates and met their physicians. Our counsel is first-hand, current, and candid about what each house does — and does not — do well.",
  },
  {
    title: "Discretion as the default.",
    body: "Your enquiry is held with the confidentiality of a family office. Nothing is shared, listed or traced. Privacy is not a feature here; it is the foundation.",
  },
  {
    title: "One advisor, every detail.",
    body: "From the first question to the private transfer, a single point of contact orchestrates the whole. You are asked to decide, never to arrange.",
  },
];

export function WhyResetBeyond() {
  return (
    <Section tone="ink" className="overflow-hidden">
      <div className="container grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Plate */}
        <Reveal className="order-2 lg:order-1">
          <EditorialImage
            tone="why-advisory-portrait"
            alt="A quiet study — the atmosphere of a private advisory"
            className="aspect-[4/5] w-full"
            parallax
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>

        {/* Principles */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow className="text-ivory/50">Why Reset & Beyond</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            lines={["The difference between", "a booking and", "an introduction."]}
            className="mt-8 text-display-md font-light text-ivory"
          />

          <Stagger className="mt-14 flex flex-col">
            {principles.map((p, i) => (
              <StaggerItem
                key={p.title}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-ivory/10 py-8"
              >
                <span className="font-serif text-lg font-light text-gold/80">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-2xl font-light text-ivory">{p.title}</h3>
                  <p className="mt-3 max-w-md text-ivory/60">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
