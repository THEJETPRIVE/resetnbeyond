import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticle, articleSlugs, articles } from "@/data/journal";
import { ArticleHero } from "@/components/layout/PageHeroes";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd, SITE_URL } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.standfirst };
}

/**
 * JOURNAL ARTICLE - a reading experience. A centered magazine opening
 * with a framed plate, a narrow, generous measure for the body, and two
 * kindred essays to close.
 */
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  /** Article schema - authorship and publisher for search + AI citation */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.standfirst,
    author: { "@type": "Organization", name: "Reset & Beyond" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/journal/${article.slug}`,
    articleSection: article.category,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <ArticleHero
        category={article.category}
        readTime={article.readTime}
        title={article.title}
        standfirst={article.standfirst}
        tone={article.image.tone}
        alt={article.image.alt}
      />

      <Section>
        <article className="container mx-auto max-w-prose">
          <Reveal>
            <div className="flex items-center justify-between border-b border-line pb-6 text-sm text-muted">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
          </Reveal>

          <div className="mt-12 flex flex-col gap-8">
            {article.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <p
                  className={
                    i === 0
                      ? "font-serif text-2xl font-normal leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.8] first-letter:text-gold md:text-3xl md:leading-relaxed"
                      : "text-lg leading-[1.8] text-foreground/80"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href="/journal"
              className="group mt-16 inline-flex items-center gap-2 text-sm uppercase tracking-wide2 text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.5} />
              All Essays
            </Link>
          </Reveal>
        </article>
      </Section>

      {/* More reading */}
      <Section tone="surface">
        <div className="container">
          <span className="eyebrow text-muted">Continue Reading</span>
          <Stagger className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {more.map((a) => (
              <StaggerItem key={a.slug}>
                <ArticleCard article={a} variant="feature" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTASection
        lines={["From insight", "to itinerary."]}
        body="When thought becomes intention, we are here to arrange the rest."
        cta="Speak With Us"
      />
    </>
  );
}
