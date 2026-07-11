import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResort, resortSlugs, resorts } from "@/data/resorts";
import { programs } from "@/data/programs";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Accordion } from "@/components/ui/Accordion";
import { Gallery } from "@/components/resort/Gallery";
import { ResortCard } from "@/components/cards/ResortCard";
import { CTASection } from "@/components/shared/CTASection";

/** Pre-render every house at build time */
export function generateStaticParams() {
  return resortSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const resort = getResort(params.slug);
  if (!resort) return {};
  return {
    title: `${resort.name} — ${resort.country}`,
    description: resort.tagline,
  };
}

const programName = (slug: string) => programs.find((p) => p.slug === slug)?.name ?? slug;

/**
 * RESORT DETAIL — the house, in full.
 *
 * A long, editorial descent: arrival → the essentials → philosophy →
 * who it serves → its signature programmes and medical depth → how one
 * lives and dines → the gallery → experiences and guidance → questions →
 * kindred houses → the invitation. Facts sit in a quiet sidebar; the prose
 * carries the romance.
 */
export default function ResortDetailPage({ params }: { params: { slug: string } }) {
  const resort = getResort(params.slug);
  if (!resort) notFound();

  const related = resort.related
    .map((slug) => resorts.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${resort.country} · ${resort.region.split(",")[0]}`}
        titleLines={[resort.name]}
        standfirst={resort.tagline}
        tone={resort.hero.tone}
        src={resort.hero.src}
        alt={resort.hero.alt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Collection", href: "/resorts" },
          { label: resort.shortName, href: `/resorts/${resort.slug}` },
        ]}
      />

      {/* Overview + facts */}
      <Section>
        <div className="container grid gap-16 lg:grid-cols-[1.5fr_0.5fr]">
          <div>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
            </Reveal>
            <div className="mt-8 flex flex-col gap-6">
              {resort.overview.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-xl font-light leading-relaxed text-foreground/85 md:text-2xl md:leading-relaxed">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Facts */}
          <Reveal delay={0.1}>
            <dl className="flex flex-col gap-6 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {[
                ["Location", resort.region],
                ["Country", resort.country],
                ["Established", resort.established ?? "—"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="overline text-muted">{k}</dt>
                  <dd className="mt-2 font-serif text-xl font-light text-foreground">{v}</dd>
                </div>
              ))}
              <div>
                <dt className="overline text-muted">Best for</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {resort.categories.map((c) => (
                    <Link
                      key={c}
                      href={`/programs/${c}`}
                      className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {programName(c)}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Philosophy */}
      <Section tone="ink" className="text-center">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow className="justify-center text-ivory/50">Wellness Philosophy</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 font-serif text-3xl font-light italic leading-[1.4] text-ivory md:text-[2.6rem]">
              “{resort.philosophy}”
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Location + Who it's for */}
      <Section>
        <div className="container grid gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>The Setting</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl font-light text-foreground">Where it stands</h2>
            <p className="mt-6 prose-luxe">{resort.location}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow>Who It Is For</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl font-light text-foreground">A guest in mind</h2>
            <p className="mt-6 prose-luxe">{resort.whoFor}</p>
          </Reveal>
        </div>
      </Section>

      {/* Signature programmes */}
      <Section tone="surface">
        <div className="container">
          <SectionHeader eyebrow="Signature Programmes" title="The disciplines this house is chosen for." className="max-w-3xl" />
          <Stagger className="mt-14 border-t border-line">
            {resort.signaturePrograms.map((sp) => (
              <StaggerItem
                key={sp.name}
                className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_auto_1.4fr] md:items-baseline md:gap-10"
              >
                <h3 className="font-serif text-3xl font-light text-foreground md:text-4xl">{sp.name}</h3>
                <span className="overline text-gold">{sp.duration}</span>
                <p className="leading-relaxed text-muted">{sp.summary}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Medical expertise */}
      <Section>
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Medical Expertise</Eyebrow>
            <TextReveal as="h2" lines={["Substance", "beneath the", "serenity."]} className="mt-6 text-display-sm font-light" />
          </Reveal>
          <Stagger className="grid gap-x-10 sm:grid-cols-2">
            {resort.medicalExpertise.map((m, i) => (
              <StaggerItem key={i} className="flex gap-5 border-t border-line py-6">
                <span className="font-serif text-lg font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="leading-relaxed text-foreground/85">{m}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Accommodation & Cuisine */}
      <Section tone="surface">
        <div className="container flex flex-col gap-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <EditorialImage tone={resort.gallery[0]?.tone ?? resort.hero.tone} src={resort.gallery[0]?.src} alt={`${resort.name} accommodation`} className="aspect-[4/3] w-full" parallax sizes="(max-width:1024px) 100vw, 50vw" />
            </Reveal>
            <Reveal delay={0.08}>
              <Eyebrow>Accommodation</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl font-light text-foreground">Where you rest</h2>
              <p className="mt-6 prose-luxe">{resort.accommodation}</p>
            </Reveal>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={0.08} className="lg:order-2">
              <EditorialImage tone={resort.gallery[2]?.tone ?? resort.hero.tone} src={resort.gallery[2]?.src} alt={`${resort.name} cuisine`} className="aspect-[4/3] w-full" parallax sizes="(max-width:1024px) 100vw, 50vw" />
            </Reveal>
            <Reveal className="lg:order-1">
              <Eyebrow>Cuisine</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl font-light text-foreground">What nourishes you</h2>
              <p className="mt-6 prose-luxe">{resort.cuisine}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <div className="container">
          <SectionHeader eyebrow="The Gallery" title="A few frames." className="max-w-2xl" />
          <Stagger className="mt-14">
            <Gallery images={resort.gallery} />
          </Stagger>
        </div>
      </Section>

      {/* Experiences + Pricing */}
      <Section tone="surface">
        <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>Experiences</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl font-light text-foreground">Beyond the programme</h2>
            </Reveal>
            <Stagger className="mt-10 border-t border-line">
              {resort.experiences.map((e, i) => (
                <StaggerItem key={i} className="flex items-baseline gap-5 border-b border-line py-5">
                  <span className="text-gold">—</span>
                  <p className="text-lg font-light text-foreground/85">{e}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-[2px] border border-line bg-background p-10">
              <Eyebrow>Pricing Guidance</Eyebrow>
              <p className="mt-6 leading-relaxed text-muted">{resort.pricingGuidance}</p>
              <p className="mt-8 text-sm text-muted/80">
                All figures are indicative and arranged privately. Your advisor will confirm current programmes, suites
                and availability on enquiry.
              </p>
              <Link
                href="/concierge"
                className="group mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-wide2 text-foreground"
              >
                <span className="relative">
                  Reserve This House
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-luxe group-hover:origin-left group-hover:scale-x-100" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <Eyebrow>Good to Know</Eyebrow>
            </Reveal>
            <TextReveal as="h2" lines={["Before", "you go."]} className="mt-6 text-display-sm font-light" />
          </div>
          <Reveal delay={0.1}>
            <Accordion items={resort.faq} />
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section tone="surface">
          <div className="container">
            <SectionHeader eyebrow="Kindred Houses" title="You may also consider." className="max-w-2xl" />
            <Stagger className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <ResortCard resort={r} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>
      )}

      <CTASection
        eyebrow="Reserve"
        lines={[`Begin your stay`, `at ${resort.shortName}.`]}
        body="Share your dates and intentions; your advisor will confirm the programme, the suite and every detail in between — in confidence."
        cta="Enquire Privately"
      />
    </>
  );
}
