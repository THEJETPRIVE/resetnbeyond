/**
 * SCHEMA - shared types for the collection.
 *
 * The collection is organised into four tiers. Every resort carries a
 * `tier`; the tier definitions themselves live in data/tiers.ts.
 */

export type TierSlug = "pinnacle" | "signature" | "curated" | "exceptional";

export interface ImageBrief {
  /** Seed string → deterministic warm duotone placeholder + photo pick */
  tone: string;
  alt: string;
  /** Generative brief for the art team (Midjourney / Firefly) */
  aiPrompt: string;
  /** Stock library search terms (Unsplash / Pexels) */
  keywords: string;
  /** Optional real source; falls back to the toned placeholder */
  src?: string;
}

export interface ResortFAQ {
  q: string;
  a: string;
}

export interface Resort {
  slug: string;
  name: string;
  shortName: string;
  tier: TierSlug;
  country: string;
  region: string;
  /** [lat, lng] for the interactive world map */
  coordinates: [number, number];
  established?: string;
  tagline: string;
  /** One-line positioning used on cards */
  cardline: string;
  categories: string[]; // maps to program slugs
  hero: ImageBrief;
  overview: string[];
  location: string;
  whoFor: string;
  philosophy: string;
  signaturePrograms: { name: string; duration: string; summary: string }[];
  medicalExpertise: string[];
  accommodation: string;
  cuisine: string;
  gallery: ImageBrief[];
  experiences: string[];
  pricingGuidance: string;
  faq: ResortFAQ[];
  related: string[]; // slugs
}
