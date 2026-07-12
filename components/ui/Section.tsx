import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section - the unit of vertical rhythm. Every section breathes with the
 * same generous cadence so the whole site feels of one considered hand.
 */
export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "surface" | "ink";
}) {
  const toneClass =
    tone === "surface"
      ? "bg-surface"
      : tone === "ink"
        ? "bg-charcoal text-ivory dark:bg-ink"
        : "bg-background";
  return (
    <section id={id} className={cn("relative py-section", toneClass, className)}>
      {children}
    </section>
  );
}

/** Overline / eyebrow label with an optional gold tick */
export function Eyebrow({
  children,
  className,
  tick = true,
}: {
  children: React.ReactNode;
  className?: string;
  tick?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3 eyebrow", className)}>
      {tick && <span className="rule-gold" aria-hidden />}
      {children}
    </span>
  );
}

/**
 * SectionHeader - the recurring "eyebrow + serif heading + lede" cluster.
 * Consistent structure, so composition stays effortless across pages.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="max-w-4xl text-display-md text-balance">{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.1}>
          <p className={cn("prose-luxe", align === "center" && "mx-auto")}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}
