import { cn } from "@/lib/utils";

/**
 * Marquee — a slow, endless horizontal drift. Used for the register of
 * houses and provenance. Pure CSS (see `animate-marquee`), duplicated
 * once for a seamless loop, paused on hover for the curious reader.
 */
export function Marquee({
  items,
  className,
  separator = "·",
}: {
  items: string[];
  className?: string;
  separator?: string;
}) {
  const Row = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-16">
          <span className="whitespace-nowrap font-serif text-2xl font-light text-foreground/70 md:text-3xl">
            {item}
          </span>
          <span className="text-gold/60" aria-hidden>
            {separator}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
