"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { primaryNav } from "@/data/site";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Wordmark } from "@/components/layout/Wordmark";
import { cn } from "@/lib/utils";

/**
 * Navbar — the threshold.
 *
 * Every page opens on a dark hero band, so at the top the bar is
 * transparent with ivory type. After a short scroll it condenses into a
 * blurred ivory rail with charcoal type and a hairline base. Flyouts
 * reveal the collection and the disciplines; a theme toggle offers the
 * nocturne. On small screens the whole thing becomes a calm full-height
 * overlay.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [openFlyout, setOpenFlyout] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 48));

  const light = !condensed && !mobileOpen; // ivory type over the hero

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-luxe",
          condensed
            ? "border-b border-line bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
        onMouseLeave={() => setOpenFlyout(null)}
      >
        <div className="container flex h-20 items-center justify-between md:h-24">
          {/* Wordmark */}
          <Link href="/" aria-label="Reset & Beyond — home" className="relative z-10">
            <Wordmark className={cn("transition-colors duration-500", light ? "text-ivory" : "text-foreground")} />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenFlyout(item.children ? item.label : null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative py-2 font-sans text-[0.8rem] uppercase tracking-wide2 transition-colors duration-500",
                    light ? "text-ivory/85 hover:text-ivory" : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-luxe group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              </div>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-5">
            <button
              onClick={toggle}
              aria-label={theme === "light" ? "Switch to nocturne theme" : "Switch to day theme"}
              className={cn(
                "hidden h-9 w-9 items-center justify-center rounded-full transition-colors duration-500 sm:flex",
                light ? "text-ivory/80 hover:bg-ivory/10" : "text-foreground/70 hover:bg-foreground/[0.06]",
              )}
            >
              {theme === "light" ? <Moon className="h-[18px] w-[18px]" strokeWidth={1.4} /> : <Sun className="h-[18px] w-[18px]" strokeWidth={1.4} />}
            </button>

            <Link
              href="/concierge"
              className={cn(
                "hidden rounded-full border px-6 py-2.5 font-sans text-[0.8rem] uppercase tracking-wide2 transition-all duration-500 ease-luxe sm:inline-flex",
                light
                  ? "border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal"
                  : "border-foreground/25 text-foreground hover:bg-charcoal hover:text-ivory dark:hover:bg-ivory dark:hover:text-charcoal",
              )}
            >
              Request Invitation
            </Link>

            {/* Mobile trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn("lg:hidden", light ? "text-ivory" : "text-foreground")}
            >
              <Menu strokeWidth={1.4} />
            </button>
          </div>
        </div>

        {/* Flyout mega-menus */}
        <AnimatePresence>
          {openFlyout && (
            <motion.div
              key={openFlyout}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-background/95 backdrop-blur-xl lg:block"
            >
              <div className="container grid grid-cols-2 gap-x-12 gap-y-2 py-10">
                {primaryNav
                  .find((n) => n.label === openFlyout)
                  ?.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenFlyout(null)}
                      className="group flex items-baseline justify-between border-b border-line/60 py-3 transition-colors hover:border-foreground"
                    >
                      <span className="font-serif text-2xl font-light text-foreground">{child.label}</span>
                      {child.note && <span className="overline text-muted">{child.note}</span>}
                    </Link>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="container flex h-20 items-center justify-between">
              <Wordmark className="text-foreground" />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-foreground">
                <X strokeWidth={1.4} />
              </button>
            </div>
            <nav className="container mt-8 flex flex-col" aria-label="Mobile">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-line py-5 font-serif text-4xl font-light text-foreground"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container mt-10 flex items-center justify-between">
              <Link
                href="/concierge"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-charcoal px-7 py-4 text-sm uppercase tracking-wide2 text-ivory dark:bg-ivory dark:text-charcoal"
              >
                Request Invitation
              </Link>
              <button onClick={toggle} aria-label="Toggle theme" className="text-foreground/70">
                {theme === "light" ? <Moon strokeWidth={1.4} /> : <Sun strokeWidth={1.4} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
