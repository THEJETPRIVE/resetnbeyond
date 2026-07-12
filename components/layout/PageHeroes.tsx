import Link from "next/link";
import { EditorialImage } from "@/components/media/EditorialImage";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Wordmark } from "@/components/layout/Wordmark";

/**
 * PAGE HEROES - the differentiated opening system.
 *
 * Every page type opens with its own compositional archetype, so no two
 * sections of the site feel templated. The immersive full-bleed hero
 * (PageHero.tsx) is reserved for resort detail pages, where the place
 * itself is the subject. Everything else opens on paper.
 *
 *  - IndexHero      : Collection - type left, numbered index of houses right
 *  - StatementHero  : Programs - oversized typographic statement, no image
 *  - SplitHero      : Program detail - text left, framed plate right
 *  - OffsetHero     : About - headline overlapping an inset portrait
 *  - MastheadHero   : Journal - centered magazine nameplate
 *  - ArticleHero    : Journal article - centered opening, framed image below
 *  - InvitationHero : Concierge - charcoal invitation card
 *  - MinimalHero    : Contact - compact and quiet
 *
 * All of these open on the ivory ground, so the navbar renders charcoal
 * text at the top of these routes (see Navbar's route-aware theming).
 */

/* ------------------------------------------------------------------ */
/* IndexHero - the collection as a table of contents                   */
/* ------------------------------------------------------------------ */
export function IndexHero({
  eyebrow,
  titleLines,
  standfirst,
  items,
}: {
  eyebrow: string;
  titleLines: string[];
  standfirst?: string;
  items: { name: string; note: string; href: string }[];
}) {
  return (
    <section className="bg-background pb-8 pt-36 md:pt-44">
      <div className="container grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <TextReveal as="h1" lines={titleLines} delay={0.08} className="mt-8 text-display-lg font-normal" />
          {standfirst && (
            <Reveal delay={0.2}>
              <p className="prose-luxe mt-8">{standfirst}</p>
            </Reveal>
          )}
        </div>

        {/* The numbered register - a quiet table of contents */}
        <Reveal delay={0.15}>
          <ol>
            {items.map((it, i) => (
              <li key={it.href} className="border-b border-line first:border-t">
                <Link href={it.href} className="group flex items-baseline gap-5 py-3.5">
                  <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-xl text-foreground transition-transform duration-500 ease-luxe group-hover:translate-x-1.5">
                    {it.name}
                  </span>
                  <span className="ml-auto shrink-0 text-[0.65rem] uppercase tracking-wide2 text-muted">{it.note}</span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* StatementHero - pure typography at display-xl scale                 */
/* ------------------------------------------------------------------ */
export function StatementHero({
  eyebrow,
  titleLines,
  standfirst,
}: {
  eyebrow: string;
  titleLines: string[];
  standfirst?: string;
}) {
  return (
    <section className="bg-background pb-10 pt-36 md:pb-16 md:pt-48">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <TextReveal as="h1" lines={titleLines} delay={0.08} className="mt-8 max-w-6xl text-display-xl font-normal" />
        {standfirst && (
          <Reveal delay={0.25}>
            <p className="prose-luxe mt-10">{standfirst}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SplitHero - text beside a framed editorial plate                    */
/* ------------------------------------------------------------------ */
export function SplitHero({
  eyebrow,
  title,
  standfirst,
  tone,
  alt,
}: {
  eyebrow: string;
  title: string;
  standfirst?: string;
  tone: string;
  alt: string;
}) {
  return (
    <section className="bg-background pb-12 pt-32 md:pt-40">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div>
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <TextReveal as="h1" lines={[title]} delay={0.08} className="mt-8 text-display-lg font-normal" />
          {standfirst && (
            <Reveal delay={0.2}>
              <p className="prose-luxe mt-8">{standfirst}</p>
            </Reveal>
          )}
        </div>
        <Reveal delay={0.12}>
          <EditorialImage
            tone={tone}
            alt={alt}
            className="aspect-[4/5] w-full"
            parallax
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* OffsetHero - headline crossing an inset portrait plate              */
/* ------------------------------------------------------------------ */
export function OffsetHero({
  eyebrow,
  titleLines,
  standfirst,
  tone,
  alt,
}: {
  eyebrow: string;
  titleLines: string[];
  standfirst?: string;
  tone: string;
  alt: string;
}) {
  return (
    <section className="overflow-hidden bg-background pb-12 pt-36 md:pt-44">
      <div className="container">
        <div className="lg:grid lg:grid-cols-12">
          {/* The image sits back and to the right... */}
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            <Reveal delay={0.1}>
              <EditorialImage tone={tone} alt={alt} className="aspect-[3/4] w-full" parallax priority sizes="42vw" />
            </Reveal>
          </div>

          {/* ...and the headline crosses into it */}
          <div className="relative z-10 lg:col-span-9 lg:col-start-1 lg:row-start-1 lg:self-center">
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <TextReveal as="h1" lines={titleLines} delay={0.08} className="mt-8 text-display-lg font-normal" />
            {standfirst && (
              <Reveal delay={0.25}>
                <p className="prose-luxe mt-10 max-w-xl">{standfirst}</p>
              </Reveal>
            )}
          </div>
        </div>

        {/* Mobile: plate below the text */}
        <Reveal className="mt-12 lg:hidden">
          <EditorialImage tone={tone} alt={alt} className="aspect-[4/3] w-full" parallax sizes="100vw" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* MastheadHero - a centered magazine nameplate                        */
/* ------------------------------------------------------------------ */
export function MastheadHero({
  eyebrow,
  titleLines,
  standfirst,
}: {
  eyebrow: string;
  titleLines: string[];
  standfirst?: string;
}) {
  return (
    <section className="bg-background pb-6 pt-36 text-center md:pt-44">
      <div className="container flex flex-col items-center">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <TextReveal as="h1" lines={titleLines} delay={0.08} className="mt-8 max-w-4xl text-display-lg font-normal" />
        {standfirst && (
          <Reveal delay={0.22}>
            <p className="prose-luxe mx-auto mt-8 text-center font-serif text-xl italic">{standfirst}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ArticleHero - a magazine article opening                            */
/* ------------------------------------------------------------------ */
export function ArticleHero({
  category,
  readTime,
  title,
  standfirst,
  tone,
  alt,
}: {
  category: string;
  readTime: string;
  title: string;
  standfirst?: string;
  tone: string;
  alt: string;
}) {
  return (
    <section className="bg-background pt-36 md:pt-44">
      <div className="container flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow">
            {category} · {readTime}
          </span>
        </Reveal>
        <TextReveal as="h1" lines={[title]} delay={0.08} className="mt-8 max-w-4xl text-display-md font-normal" />
        {standfirst && (
          <Reveal delay={0.2}>
            <p className="prose-luxe mx-auto mt-8 text-center">{standfirst}</p>
          </Reveal>
        )}
      </div>
      {/* Framed plate - inset, never full-bleed */}
      <div className="container mt-14">
        <Reveal delay={0.1}>
          <EditorialImage tone={tone} alt={alt} className="aspect-[21/9] w-full" parallax priority sizes="92vw" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* InvitationHero - a formal card on charcoal                          */
/* ------------------------------------------------------------------ */
export function InvitationHero({
  eyebrow,
  titleLines,
  standfirst,
}: {
  eyebrow: string;
  titleLines: string[];
  standfirst?: string;
}) {
  return (
    <section className="grain relative flex min-h-[82svh] items-center justify-center overflow-hidden bg-charcoal text-center dark:bg-ink">
      <div className="container relative z-[2] max-w-3xl py-40">
        <Reveal>
          <Wordmark compact className="text-ivory/90" />
        </Reveal>
        <Reveal delay={0.08}>
          <span className="eyebrow mt-10 block text-ivory/60">{eyebrow}</span>
        </Reveal>
        <TextReveal as="h1" lines={titleLines} delay={0.15} className="mt-8 text-display-lg font-normal text-ivory" />
        {standfirst && (
          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ivory/70">{standfirst}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* MinimalHero - compact, for functional pages                         */
/* ------------------------------------------------------------------ */
export function MinimalHero({
  eyebrow,
  title,
  standfirst,
}: {
  eyebrow: string;
  title: string;
  standfirst?: string;
}) {
  return (
    <section className="bg-background pb-6 pt-36 md:pt-44">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <TextReveal as="h1" lines={[title]} delay={0.08} className="mt-8 text-display-md font-normal" />
        {standfirst && (
          <Reveal delay={0.15}>
            <p className="prose-luxe mt-6">{standfirst}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
