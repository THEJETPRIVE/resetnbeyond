import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with Reset & Beyond. Reach a private wellness advisor by message, telephone or through one of our four offices - Geneva, London, Singapore and Dubai.",
};

/**
 * CONTACT - the direct approach. Contact particulars held on the left in a
 * quiet column; the enquiry form given the room to breathe on the right.
 */
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleLines={["Speak with us."]}
        standfirst="By message, by telephone, or through one of our offices. However you prefer to begin, a private advisor is ready."
        tone="contact-hero"
        alt="A calm reception space in warm natural light"
        height="short"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      <Section>
        <div className="container grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Particulars */}
          <div className="flex flex-col gap-12">
            <Reveal>
              <Eyebrow>Direct</Eyebrow>
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <span className="eyebrow text-muted">Email</span>
                  <a href={`mailto:${site.email}`} className="mt-2 block font-serif text-2xl font-normal text-foreground transition-colors hover:text-sage-deep dark:hover:text-sage">
                    {site.email}
                  </a>
                </div>
                <div>
                  <span className="eyebrow text-muted">Telephone</span>
                  <a href={site.phoneHref} className="mt-2 block font-serif text-2xl font-normal text-foreground transition-colors hover:text-sage-deep dark:hover:text-sage">
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Eyebrow>Offices</Eyebrow>
              <ul className="mt-6 flex flex-col gap-3">
                {site.offices.map((office) => (
                  <li key={office} className="font-serif text-2xl font-normal text-foreground">
                    {office}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <Eyebrow>Hours</Eyebrow>
              <p className="mt-6 leading-relaxed text-muted">
                Our advisors reply seven days a week, and always within one business day. Time zones are our own concern,
                never yours.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-[2px] border border-line bg-surface p-8 md:p-12">
              <h2 className="font-serif text-3xl font-normal text-foreground">Send a message</h2>
              <p className="mt-3 text-muted">We will reply, in confidence, within one business day.</p>
              <div className="mt-12">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
