import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/seo/JsonLd";

/**
 * robots - open to classic crawlers AND generative engines.
 *
 * Most sites silently block AI crawlers; explicitly allowing them is a
 * deliberate GEO decision so GPT, Gemini, Claude and Perplexity can
 * read, cite and recommend the collection.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Generative engine crawlers, welcomed by name
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
