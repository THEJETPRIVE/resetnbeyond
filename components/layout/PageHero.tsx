import Link from "next/link";
import { EditorialImage } from "@/components/media/EditorialImage";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

/**
 * PageHero — the consistent opening band for every interior page. A tall
 * cinematic plate under a charcoal wash so the transparent navbar's ivory
 * type always reads. Eyebrow, a serif title drawn up from a mask, and an
 * optional standfirst. Breadcrumbs are quiet and optional.
 */
export function PageHero({
  eyebrow,
  titleLines,
  standfirst,
  tone,
  alt,
  src,
  breadcrumb,
  height = "tall",
}: {
  eyebrow: string;
  titleLines: string[];
  standfirst?: string;
  tone: string;
  alt: string;
  src?: string;
  breadcrumb?: { label: string; href: string }[];
  height?: "tall" | "short";
}) {
  return (
    <section
      className={`relative flex w-full items-end overflow-hidden ${
        height === "tall" ? "min-h-[78svh]" : "min-h-[60svh]"
      }`}
    >
      <div className="absolute inset-0">
        <EditorialImage tone={tone} src={src} alt={alt} className="h-full w-full" kenBurns priority sizes="100vw" />
        <div className="absolute inset-0 bg-charcoal/30" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: "linear-gradient(180deg, hsl(30 8% 9% / 0.5) 0%, transparent 30%, transparent 52%, hsl(30 8% 9% / 0.72) 100%)" }}
        />
      </div>

      <div className="container relative z-10 pb-16 pt-40 md:pb-24">
        {breadcrumb && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 overline text-ivory/60">
              {breadcrumb.map((b, i) => (
                <span key={b.href} className="flex items-center gap-2">
                  <Link href={b.href} className="transition-colors hover:text-ivory">
                    {b.label}
                  </Link>
                  {i < breadcrumb.length - 1 && <span className="text-ivory/30">/</span>}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <Reveal>
          <span className="flex items-center gap-4 overline text-ivory/70">
            <span className="h-px w-12 bg-gold/70" />
            {eyebrow}
          </span>
        </Reveal>

        <TextReveal
          as="h1"
          lines={titleLines}
          delay={0.1}
          className="mt-8 max-w-5xl text-display-lg font-light text-ivory"
        />

        {standfirst && (
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">{standfirst}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
