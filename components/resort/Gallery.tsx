"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ImageBrief } from "@/data/resorts";
import { EditorialImage } from "@/components/media/EditorialImage";
import { StaggerItem } from "@/components/motion/Reveal";

/**
 * Gallery — a considered plate arrangement with a calm lightbox. Three
 * images on a gentle rhythm (the centre one lifted), each opening to a
 * full-bleed view on a dimmed charcoal ground. Escape and click-out close.
 */
export function Gallery({ images }: { images: ImageBrief[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {images.map((img, i) => (
          <StaggerItem key={i} className={i === 1 ? "md:mt-16" : ""}>
            <button
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-[2px] text-left"
              aria-label={`View image: ${img.alt}`}
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-1200 ease-luxe group-hover:scale-[1.05]">
                  <EditorialImage
                    tone={img.tone}
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[4/5] w-full"
                    parallax
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <span className="mt-4 block text-sm text-muted transition-colors group-hover:text-foreground">
                {img.alt}
              </span>
            </button>
          </StaggerItem>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-6 backdrop-blur-sm"
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-6 top-6 text-ivory/70 transition-colors hover:text-ivory"
            >
              <X strokeWidth={1.4} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <EditorialImage
                tone={images[open].tone}
                src={images[open].src}
                alt={images[open].alt}
                className="aspect-[3/2] w-full"
                sizes="90vw"
              />
              <p className="mt-4 text-center text-sm text-ivory/60">{images[open].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
