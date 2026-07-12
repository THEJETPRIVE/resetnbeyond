/**
 * IMAGES — provisional photography, resolved from the `tone` seed.
 *
 * Every EditorialImage carries a unique `tone`. Rather than thread a URL
 * through 30+ data entries during pre-production, we resolve a curated,
 * license-free Unsplash photograph from that seed here. All IDs are
 * verified-permanent; anything unmapped falls back to the toned duotone.
 *
 * AT LAUNCH: replace this resolver with your DAM/CDN — point `src` on the
 * data entries at the real assets (the AI prompt + keywords for each live
 * beside them) and this file can be deleted.
 */

const P = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Verified, subject-grouped pools ------------------------------------------
const mountains = ["1439066615861-d1af74d74000", "1470071459604-3b5ec3a7fe05", "1454496522488-7a8e488e8606", "1518611012118-696072aa579a"];
const lakes = ["1476514525535-07fb3b4ae5f1", "1501785888041-af3ef285b470", "1506905925346-21bda4d32df4", "1470252649378-9c29740c9fa8"];
const forest = ["1518495973542-4542c06a5843", "1447752875215-b2761acb3c5d", "1502082553048-f009c37129b9"];
const tropical = ["1512290923902-8a9f81dc236c", "1583212292454-1fe6229603b7", "1444464666168-49d633b86797"];
const spaInterior = ["1600334089648-b0d9d3028eb2", "1573843981267-be1999ff37cd", "1540555700478-4be289fbecef"];
const therapy = ["1544161515-4ab6ce6db874", "1571896349842-33c89424de2d"];
const food = ["1596178065887-1198b6148b2b", "1512621776951-a57141f2eefd", "1490645935967-10de6ba17061", "1467003909585-2f8a72700288"];
const yoga = ["1506126613408-eca07ce68773", "1545205597-3d9d02c29597", "1544367567-0f2fcb009e0b"];
const calm = ["1465146344425-f00d5f5c8f07", "1490750967868-88aa4486c946", "1519681393784-d120267933ba", "1540206395-68808572332f"];

const generic = [...mountains, ...lakes, ...forest, ...tropical, ...calm];

/** Deterministic index from a seed (no Math.random — stable across renders) */
function pick(pool: string[], seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return pool[h % pool.length];
}

// Explicit map for heroes and named section plates ------------------------
const explicit: Record<string, string> = {
  // Resort heroes
  vana: mountains[0],
  chenot: lakes[0],
  laprairie: lakes[3],
  joali: tropical[0],
  "sha-es": tropical[2],
  "sha-mx": forest[2],
  lanserhof: mountains[2],
  chivasom: tropical[1],
  ananda: mountains[1],
  // Home + page heroes / plates
  "hero-forest-dawn": forest[0],
  "why-advisory-portrait": spaInterior[0],
  "final-cta-horizon": tropical[2],
  "collection-hero": lakes[1],
  "programs-hero": forest[1],
  "journal-hero": spaInterior[1],
  "about-hero": spaInterior[0],
  "about-story": therapy[1],
  "concierge-hero": calm[3],
  "contact-hero": spaInterior[1],
  // Programs
  "prog-longevity": lakes[2],
  "prog-detox": lakes[3],
  "prog-exec": forest[1],
  "prog-womens": calm[1],
  "prog-sleep": calm[2],
  "prog-biohack": mountains[3],
  "prog-nutrition": food[0],
  "prog-preventive": tropical[2],
  "prog-medical": spaInterior[0],
  // Journal
  "j-longevity": lakes[2],
  "j-gut": mountains[2],
  "j-rest": mountains[1],
  "j-discretion": spaInterior[2],
};

/** Resolve a photograph URL for a tone seed, or undefined for pure fallback. */
export function imageForTone(tone: string, width?: number): string | undefined {
  const direct = explicit[tone];
  if (direct) return P(direct, width);

  // Gallery convention: "<resort>-a" interiors, "-b" therapy, "-c" cuisine
  if (tone.endsWith("-a")) return P(pick([...spaInterior, ...yoga], tone), width);
  if (tone.endsWith("-b")) return P(pick(therapy, tone), width);
  if (tone.endsWith("-c")) return P(pick(food, tone), width);

  return P(pick(generic, tone), width);
}
