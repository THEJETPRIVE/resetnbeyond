import type { MetadataRoute } from "next";
import { resortSlugs } from "@/data/resorts";
import { programSlugs } from "@/data/programs";
import { articleSlugs } from "@/data/journal";
import { SITE_URL } from "@/components/seo/JsonLd";

const base = SITE_URL;

/** Static + data-driven routes for search engines. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/resorts", "/programs", "/journal", "/contact", "/concierge"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const collectionRoutes = ["pinnacle", "signature", "curated", "exceptional"].map((tier) => ({
    url: `${base}/collections/${tier}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const resortRoutes = resortSlugs.map((slug) => ({
    url: `${base}/resorts/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const programRoutes = programSlugs.map((slug) => ({
    url: `${base}/programs/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalRoutes = articleSlugs.map((slug) => ({
    url: `${base}/journal/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...collectionRoutes, ...resortRoutes, ...programRoutes, ...journalRoutes];
}
