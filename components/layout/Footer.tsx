import Link from "next/link";
import { footerNav, site } from "@/data/site";
import { Wordmark } from "@/components/layout/Wordmark";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { VisitorCount } from "@/components/layout/VisitorCount";

/**
 * Footer - the long exhale. A final, unhurried invitation followed by a
 * quiet directory. Set on charcoal so the site closes in the nocturne
 * regardless of theme - a considered full stop.
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory dark:bg-ink">
      {/* Closing invitation */}
      <div className="container border-b border-ivory/10 py-section">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow text-ivory/50">
              <span className="mr-3 inline-block h-px w-12 bg-gold/70 align-middle" />
              An invitation
            </span>
            <TextReveal
              as="h2"
              lines={["Some journeys begin", "with a conversation."]}
              className="mt-8 text-display-md font-normal text-ivory"
            />
          </div>
          <Reveal delay={0.1} className="lg:pb-3">
            <p className="max-w-measure text-ivory/60">
              Membership is by introduction. Share a little of what you seek, and a private advisor will reply within one
              business day - discreetly, and without obligation.
            </p>
            <div className="mt-8">
              <ButtonLink href="/concierge" arrow className="bg-ivory text-charcoal hover:bg-sage hover:text-ivory">
                Request an Invitation
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Directory */}
      <div className="container grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-6">
          <Wordmark className="text-ivory" />
          <p className="max-w-xs text-sm leading-relaxed text-ivory/50">{site.tagline}</p>
          <p className="text-sm text-ivory/50">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-ivory">
              {site.email}
            </a>
          </p>
        </div>

        {Object.values(footerNav).map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow text-ivory/40">{col.title}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Baseline */}
      <div className="container flex flex-col gap-4 border-t border-ivory/10 py-8 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. A private wellness advisory.</p>
        <p className="tracking-wide2">{site.offices.join("  ·  ")}</p>
        <VisitorCount />
        <div className="flex gap-6">
          <Link href="/contact" className="transition-colors hover:text-ivory">Contact</Link>
          <span className="transition-colors hover:text-ivory">Privacy</span>
          <span className="transition-colors hover:text-ivory">Terms</span>
        </div>
      </div>
    </footer>
  );
}
