"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type Lenis from "lenis";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

/**
 * ReserveHouse - the in-place reservation.
 *
 * "Reserve This House" no longer sends the guest away to the concierge
 * page; it opens the private enquiry as a calm dialog right where they
 * stand, pre-filled with the house in question. Escape, the close
 * button or the backdrop dismiss it; page scroll pauses underneath.
 *
 * The dialog is PORTALED to <body>: the trigger lives inside a Reveal
 * (scroll-entrance) wrapper whose opacity/transform would otherwise be
 * inherited - an ancestor transform even re-anchors position:fixed.
 */
export function ReserveHouse({ resortName }: { resortName: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Pause the page beneath the dialog (Lenis + native fallback)
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Trigger - same quiet underline register as the site's line CTAs */}
      <button
        onClick={() => setOpen(true)}
        className="group mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-wide2 text-foreground"
      >
        <span className="relative">
          Reserve This House
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-luxe group-hover:origin-left group-hover:scale-x-100" />
        </span>
      </button>

      {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            key="reserve-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <button
              aria-label="Close reservation dialog"
              onClick={() => setOpen(false)}
              className="absolute inset-0 cursor-default bg-charcoal/70 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Reserve ${resortName}`}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              data-lenis-prevent
              className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[2px] bg-background p-7 shadow-2xl md:p-12"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>

              <span className="eyebrow text-muted">Private Reservation</span>
              <h2 className="mt-4 font-serif text-3xl font-normal text-foreground md:text-4xl">
                Begin the conversation.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                Share your dates and intentions; your advisor will confirm the programme, the suite and every detail in
                between - in confidence.
              </p>

              <div className="mt-10">
                <EnquiryForm presetResort={resortName} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body)}
    </>
  );
}
