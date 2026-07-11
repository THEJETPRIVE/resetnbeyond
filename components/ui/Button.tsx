import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Button / CTA — the site's call to action.
 *
 * Two registers only: `solid` (charcoal pill, for the primary act of
 * enquiry) and `line` (a quiet underlined link with a rising arrow, for
 * everything else). No third option — restraint is the brand.
 */
type Variant = "solid" | "line" | "outline";

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}

const base =
  "group/btn inline-flex items-center gap-2 font-sans text-sm tracking-wide2 transition-all duration-500 ease-luxe focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  solid:
    "rounded-full bg-charcoal px-8 py-4 text-ivory hover:bg-sage-deep dark:bg-ivory dark:text-charcoal dark:hover:bg-sage",
  outline:
    "rounded-full border border-line px-8 py-4 text-foreground hover:border-foreground hover:bg-foreground/[0.03]",
  line: "pb-1 text-foreground uppercase",
};

function Inner({ children, arrow, variant }: { children: React.ReactNode; arrow?: boolean; variant: Variant }) {
  return (
    <>
      {variant === "line" ? (
        <span className="relative">
          {children}
          {/* Underline sweeps in from the left on hover */}
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-luxe group-hover/btn:origin-left group-hover/btn:scale-x-100" />
        </span>
      ) : (
        children
      )}
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          strokeWidth={1.5}
        />
      )}
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  arrow,
  ...rest
}: BaseProps & { href: string } & React.ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      <Inner variant={variant} arrow={arrow}>
        {children}
      </Inner>
    </Link>
  );
}

export function Button({
  children,
  variant = "solid",
  className,
  arrow,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <Inner variant={variant} arrow={arrow}>
        {children}
      </Inner>
    </button>
  );
}
