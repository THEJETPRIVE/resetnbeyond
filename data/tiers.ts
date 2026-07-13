import type { TierSlug } from "./schema";

/**
 * TIERS - the four collections.
 *
 * The register is deliberate: Pinnacle is clinical-grade medicine in
 * five-star form; Signature is destination wellness of the first rank;
 * Curated is depth of practice and character; Exceptional is wellness
 * inseparable from an extraordinary place.
 */
export interface Tier {
  slug: TierSlug;
  name: string;
  line: string;
}

export const tiers: Tier[] = [
  {
    slug: "pinnacle",
    name: "The Pinnacle Collection",
    line: "The definitive medical and clinical wellness houses on earth - physician-led, diagnostics-deep, without compromise.",
  },
  {
    slug: "signature",
    name: "Signature Collection",
    line: "Destination wellness of the first rank - holistic mastery practised in extraordinary settings.",
  },
  {
    slug: "curated",
    name: "Curated Luxury Retreats",
    line: "Immersive retreats chosen for character, setting and genuine depth of practice.",
  },
  {
    slug: "exceptional",
    name: "Exceptional Wellness Escapes",
    line: "Remarkable escapes where wellness and place are inseparable - from alpine ridgelines to private atolls.",
  },
];

export const getTier = (slug: TierSlug) => tiers.find((t) => t.slug === slug)!;
