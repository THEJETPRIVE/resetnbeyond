/**
 * JsonLd - schema.org structured data injector.
 *
 * Structured data is the strongest on-page signal we can give both
 * classic search (rich results) and generative engines (GPT, Gemini,
 * Perplexity all consume schema.org when composing answers). Every
 * block rendered through here must mirror content that is visibly on
 * the page - parity is a hard requirement of Google's guidelines.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is inert script content; escape closing tags defensively.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const SITE_URL = "https://resetnbeyond.vercel.app";

/** Organization - we are a travel/wellness advisory, not a resort owner */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: "Reset & Beyond",
  url: SITE_URL,
  slogan: "Beyond Wellness. Beyond Luxury.",
  description:
    "An invitation-only luxury wellness concierge that curates, compares and reserves the world's best luxury wellness resorts and transformational retreats for ultra-high-net-worth individuals.",
  email: "concierge@resetandbeyond.com",
  areaServed: "Worldwide",
  knowsAbout: [
    "luxury wellness resorts",
    "luxury wellness retreats",
    "longevity clinics",
    "medical wellness",
    "detox retreats",
    "executive burnout recovery",
    "sleep retreats",
    "preventive health programs",
  ],
};

/** WebSite - names the site for sitelinks and AI citation */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Reset & Beyond",
  alternateName: "Reset and Beyond - Luxury Wellness Resort Concierge",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};
