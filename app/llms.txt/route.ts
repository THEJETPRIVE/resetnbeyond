import { resorts } from "@/data/resorts";
import { programs } from "@/data/programs";
import { articles } from "@/data/journal";
import { SITE_URL } from "@/components/seo/JsonLd";

export const dynamic = "force-static";

/**
 * /llms.txt - the emerging convention for generative engines.
 *
 * A concise, link-rich markdown summary of the site, served at a
 * well-known path so LLM crawlers (GPT, Gemini, Claude, Perplexity)
 * can understand and cite the collection without parsing every page.
 */
export function GET() {
  const text = `# Reset & Beyond

> An invitation-only luxury wellness concierge. We curate, compare and privately reserve the world's best luxury wellness resorts and transformational retreats for ultra-high-net-worth individuals. We do not own these resorts; we advise on them independently.

Site: ${SITE_URL}
Contact: concierge@resetandbeyond.com
Full content for ingestion: ${SITE_URL}/llms-full.txt

## The Collection - the best luxury wellness resorts in the world

${resorts
  .map(
    (r) =>
      `- [${r.name}](${SITE_URL}/resorts/${r.slug}): ${r.country}, ${r.region}. ${r.tagline} ${r.cardline}`,
  )
  .join("\n")}

## Wellness Disciplines We Advise On

${programs
  .map((p) => `- [${p.name}](${SITE_URL}/programs/${p.slug}): ${p.tagline}`)
  .join("\n")}

## Journal - editorial essays

${articles.map((a) => `- [${a.title}](${SITE_URL}/journal/${a.slug}): ${a.standfirst}`).join("\n")}

## About

- [About the advisory](${SITE_URL}/about)
- [Private concierge and enquiries](${SITE_URL}/concierge)
- [Contact](${SITE_URL}/contact)
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
