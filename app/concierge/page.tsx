import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Private Concierge",
  description:
    "Request an invitation to Reset & Beyond. A private advisor will design a transformational wellness journey around your health, your calendar and your taste — in strict confidence.",
};

const expect = [
  { k: "I", t: "A reply within one business day", b: "A real person, not a portal — usually within hours." },
  { k: "II", t: "A conversation, not a questionnaire", b: "We ask only what helps us serve you well, and nothing more." },
  { k: "III", t: "A shortlist, considered", b: "Two or three houses matched to your goals, each with a reason." },
  { k: "IV", t: "Everything arranged", b: "Programme, suite, transfers and the quiet details — all handled." },
];

/**
 * PRIVATE CONCIERGE — the primary conversion surface. Framed as a private
 * application: what to expect on the left, the form given full breadth,
 * and discreet direct lines for those who prefer to speak.
 */
export default function ConciergePage() {
  return (
    <>
      <PageHero
        eyebrow="By Invitation"
        titleLines={["Begin the", "conversation."]}
        standfirst="Share a little of what you seek. A private advisor will design a journey around your health, your calendar and your taste — discreetly, and without obligation."
        tone="concierge-hero"
        alt="A quiet desk set for a private conversation at dawn"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Concierge", href: "/concierge" }]}
      />

      {/* What to expect */}
      <Section tone="surface">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <Eyebrow>What to Expect</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-4xl font-light text-foreground">The shape of the service.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="prose-luxe mt-8">
                From first message to private transfer, one advisor holds the whole. You are asked to decide, never to
                arrange.
              </p>
            </Reveal>
          </div>
          <Stagger>
            {expect.map((e) => (
              <StaggerItem key={e.k} className="flex items-baseline gap-6 border-t border-line py-8">
                <span className="font-serif text-2xl font-light text-gold">{e.k}</span>
                <div>
                  <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">{e.t}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">{e.b}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* The form */}
      <Section>
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Your Enquiry"
            title="In confidence."
            lede="Every field but the first two is optional. The more you share, the more considered our reply."
          />
          <div className="mt-16">
            <EnquiryForm />
          </div>
        </div>
      </Section>

      {/* Direct lines */}
      <Section tone="ink" className="py-24">
        <div className="container grid gap-10 text-center md:grid-cols-3">
          <Reveal>
            <span className="overline text-ivory/50">Write</span>
            <a href={`mailto:${site.email}`} className="mt-4 block font-serif text-2xl font-light text-ivory transition-colors hover:text-sage">
              {site.email}
            </a>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="overline text-ivory/50">Call</span>
            <a href={site.phoneHref} className="mt-4 block font-serif text-2xl font-light text-ivory transition-colors hover:text-sage">
              {site.phone}
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="overline text-ivory/50">Offices</span>
            <p className="mt-4 font-serif text-2xl font-light text-ivory">{site.offices.join(" · ")}</p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
