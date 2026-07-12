import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Resort } from "@/data/resorts";
import { EditorialImage } from "@/components/media/EditorialImage";
import { cn } from "@/lib/utils";

/**
 * ResortCard - a house, framed like a magazine plate. The image drifts on
 * scroll and lifts a touch on hover; the type sits beneath in a calm
 * cluster. No borders, no shadows - the photograph does the work.
 */
export function ResortCard({
  resort,
  priority = false,
  className,
  aspect = "aspect-[4/5]",
}: {
  resort: Resort;
  priority?: boolean;
  className?: string;
  aspect?: string;
}) {
  return (
    <Link href={`/resorts/${resort.slug}`} className={cn("group block", className)}>
      <div className={cn("relative overflow-hidden rounded-[2px]", aspect)}>
        <div className="h-full w-full transition-transform duration-1200 ease-luxe group-hover:scale-[1.04]">
          <EditorialImage
            tone={resort.hero.tone}
            src={resort.hero.src}
            alt={resort.hero.alt}
            className="h-full w-full"
            parallax
            scrim="bottom"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={priority}
          />
        </div>
        {/* Corner index arrow - appears on hover */}
        <div className="absolute right-4 top-4 z-[3] flex h-11 w-11 items-center justify-center rounded-full bg-ivory/0 text-ivory opacity-0 backdrop-blur-md transition-all duration-500 ease-luxe group-hover:bg-ivory/15 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.4} />
        </div>
        {/* Location, laid over the scrim */}
        <span className="absolute bottom-4 left-4 z-[3] eyebrow text-ivory/80">{resort.country}</span>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-3xl font-normal text-foreground transition-colors group-hover:text-sage-deep dark:group-hover:text-sage">
            {resort.name}
          </h3>
        </div>
        <p className="text-sm text-muted">{resort.region}</p>
        <p className="mt-1 max-w-sm text-[0.95rem] leading-relaxed text-muted">{resort.cardline}</p>
      </div>
    </Link>
  );
}
