/**
 * RESORTS - the curated collection, in four tiers.
 *
 * Reset & Beyond does not own these houses; it curates them as their
 * partner. Every word is written fresh in an editorial register
 * (Monocle / Kinfolk), informed by each property's real disciplines but
 * never lifted from their marketing.
 *
 * The collection lives in four tier files under ./collections; this
 * module combines them and remains the single import surface for the
 * rest of the app. Tier definitions live in ./tiers.
 */

export type { Resort, ImageBrief, ResortFAQ, TierSlug } from "./schema";
import type { Resort } from "./schema";

import { pinnacleResorts } from "./collections/pinnacle";
import { signatureResorts } from "./collections/signature";
import { curatedResorts } from "./collections/curated";
import { exceptionalResorts } from "./collections/exceptional";

/** All houses, ordered Pinnacle → Signature → Curated → Exceptional */
export const resorts: Resort[] = [
  ...pinnacleResorts,
  ...signatureResorts,
  ...curatedResorts,
  ...exceptionalResorts,
];

export const getResort = (slug: string) => resorts.find((r) => r.slug === slug);
export const resortSlugs = resorts.map((r) => r.slug);
