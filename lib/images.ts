import { imageIdMap } from "./imageMap";

/**
 * IMAGES - provisional photography, resolved from the `tone` seed.
 *
 * Every tone maps to an explicit, verified photograph in lib/imageMap.ts
 * (generated): card and hero images are globally unique across the whole
 * site, and gallery images never repeat within a page. Unmapped tones
 * intentionally return undefined so the art-directed duotone placeholder
 * shows instead of a randomly repeated photo.
 *
 * AT LAUNCH: replace entries in imageMap.ts with the properties' own
 * photography as partner assets arrive - the AI prompt and stock
 * keywords for every slot live beside each entry in the data files.
 */
const P = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Resolve a photograph URL for a tone seed, or undefined for the duotone. */
export function imageForTone(tone: string, width?: number): string | undefined {
  const id = imageIdMap[tone];
  return id ? P(id, width) : undefined;
}
