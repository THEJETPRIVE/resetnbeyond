import { cn } from "@/lib/utils";

/**
 * Wordmark - RESET & BEYOND set in the display serif, with a single
 * gilded ampersand. The one place gold is allowed to speak. Two lines
 * stacked tight, tracked wide - a monogram more than a logo.
 */
export function Wordmark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("select-none font-serif leading-[0.9]", className)} aria-hidden={false}>
      {compact ? (
        <span className="text-xl tracking-[0.2em]">
          R<span className="text-gilded">&</span>B
        </span>
      ) : (
        <span className="flex flex-col">
          <span className="text-[0.95rem] font-semibold uppercase tracking-[0.42em]">Reset</span>
          <span className="text-[0.95rem] font-semibold uppercase tracking-[0.28em]">
            <span className="text-gilded">&</span>&nbsp;Beyond
          </span>
        </span>
      )}
    </span>
  );
}
