"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Accordion - the FAQ, kept quiet. A hairline-ruled list that opens with
 * a soft height ease and a rotating plus. Accessible: real buttons,
 * aria-expanded, region association.
 */
export interface QA {
  q: string;
  a: string;
}

export function Accordion({ items, className }: { items: QA[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="font-serif text-xl font-normal text-foreground md:text-2xl">{item.q}</span>
              <Plus
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform duration-500 ease-luxe",
                  isOpen && "rotate-45 text-foreground",
                )}
                strokeWidth={1.4}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-prose pb-8 pr-10 leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
