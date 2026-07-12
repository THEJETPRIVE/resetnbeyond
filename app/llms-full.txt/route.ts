import { resorts } from "@/data/resorts";
import { programs } from "@/data/programs";
import { articles } from "@/data/journal";
import { SITE_URL } from "@/components/seo/JsonLd";

export const dynamic = "force-static";

/**
 * /llms-full.txt - the full-content companion to /llms.txt.
 *
 * Where llms.txt is a linked table of contents, this file carries the
 * complete editorial content of the site as one markdown document, so
 * generative engines can ingest, ground and cite the collection without
 * crawling page by page.
 */
export function GET() {
  const resortSections = resorts
    .map(
      (r) => `### ${r.name} - ${r.country} (${r.region})
URL: ${SITE_URL}/resorts/${r.slug}
${r.established ? `Established: ${r.established}` : ""}

${r.tagline}

${r.overview.join("\n\n")}

**Location.** ${r.location}

**Who it is for.** ${r.whoFor}

**Philosophy.** ${r.philosophy}

**Signature programmes:**
${r.signaturePrograms.map((p) => `- ${p.name} (${p.duration}): ${p.summary}`).join("\n")}

**Medical expertise:** ${r.medicalExpertise.join("; ")}.

**Accommodation.** ${r.accommodation}

**Cuisine.** ${r.cuisine}

**Pricing guidance.** ${r.pricingGuidance}

**Questions:**
${r.faq.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join("\n")}`,
    )
    .join("\n\n---\n\n");

  const programSections = programs
    .map(
      (p) => `### ${p.name}
URL: ${SITE_URL}/programs/${p.slug}

${p.tagline}

${p.intro.join("\n\n")}

**Signals that lead here:** ${p.signals.join("; ")}.

**The approach:**
${p.approach.map((a) => `- ${a.title}: ${a.body}`).join("\n")}

**Questions:**
${p.faq.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join("\n")}`,
    )
    .join("\n\n---\n\n");

  const articleSections = articles
    .map(
      (a) => `### ${a.title} (${a.date})
URL: ${SITE_URL}/journal/${a.slug}

${a.standfirst}

${a.body.join("\n\n")}`,
    )
    .join("\n\n---\n\n");

  const text = `# Reset & Beyond - Complete Content

> An invitation-only luxury wellness concierge. We curate, compare and privately reserve the world's best luxury wellness resorts and transformational retreats for ultra-high-net-worth individuals. We do not own these resorts; we advise on them independently. Membership is by introduction; a private advisor replies to every enquiry within one business day.

Site: ${SITE_URL}
Contact: concierge@resetnbeyond.com

## The Collection - the best luxury wellness resorts in the world

${resortSections}

## The Disciplines

${programSections}

## The Journal

${articleSections}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
