import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/data/programs";
import { cn } from "@/lib/utils";

/**
 * ProgramRow - disciplines as an editorial index, not a grid of cards.
 * A numbered, hairline-ruled list where the whole row is the target and
 * the serif name slides gently to greet the cursor.
 */
export function ProgramRow({
  program,
  index,
  className,
}: {
  program: Program;
  index: number;
  className?: string;
}) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className={cn(
        "group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line py-8 md:gap-10 md:py-10",
        className,
      )}
    >
      <span className="font-serif text-lg font-normal text-muted md:text-xl">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
        <h3 className="font-serif text-3xl font-normal text-foreground transition-transform duration-500 ease-luxe group-hover:translate-x-2 md:text-5xl">
          {program.name}
        </h3>
        <p className="max-w-md text-sm text-muted md:text-right md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
          {program.tagline}
        </p>
      </div>

      <ArrowUpRight
        className="h-6 w-6 text-muted transition-all duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        strokeWidth={1.2}
      />
    </Link>
  );
}
