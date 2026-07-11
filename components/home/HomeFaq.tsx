import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Accordion, type QA } from "@/components/ui/Accordion";

/**
 * HomeFaq — the questions a serious guest actually has, answered plainly.
 * Heading held to the left, the accordion given room on the right.
 */
const faqs: QA[] = [
  {
    q: "Is Reset & Beyond a booking website?",
    a: "No. We are a private advisory. We do not own the houses we recommend, and we are not a reservation engine. We understand these clinics intimately and match a person to the right programme — then arrange every detail on their behalf.",
  },
  {
    q: "How does membership work?",
    a: "Membership is by introduction or application. Once welcomed, you gain a single private advisor and access to the full collection, including houses and rates not published publicly.",
  },
  {
    q: "What does the service cost?",
    a: "For most clients our advisory is complimentary; we are compensated by the houses at no premium to you. Bespoke, multi-house or ongoing longevity mandates are quoted privately. In every case, our counsel remains independent.",
  },
  {
    q: "How is my privacy protected?",
    a: "Absolutely. Enquiries are handled with the confidentiality of a family office. Nothing is shared with third parties, and your interest is never traceable. Discretion is the foundation of everything we do.",
  },
  {
    q: "Do you arrange medical programmes?",
    a: "Yes. Many of our houses are genuine medical clinics. We coordinate consultations, share findings with your own physicians where you wish, and ensure continuity of care between your reset and your life at home.",
  },
];

export function HomeFaq() {
  return (
    <Section>
      <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <Eyebrow>Enquiries</Eyebrow>
          </Reveal>
          <TextReveal as="h2" lines={["Questions,", "answered plainly."]} className="mt-8 text-display-md font-light" />
          <Reveal delay={0.1}>
            <p className="prose-luxe mt-8">
              And anything else, in conversation. Your advisor is a message away.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </Section>
  );
}
