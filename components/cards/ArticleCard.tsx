import Link from "next/link";
import type { Article } from "@/data/journal";
import { EditorialImage } from "@/components/media/EditorialImage";
import { cn } from "@/lib/utils";

/**
 * ArticleCard - a journal entry as a magazine opening. Two sizes: a
 * `feature` lead and a compact `row` for the secondary stack.
 */
export function ArticleCard({
  article,
  variant = "feature",
  className,
}: {
  article: Article;
  variant?: "feature" | "row";
  className?: string;
}) {
  if (variant === "row") {
    return (
      <Link href={`/journal/${article.slug}`} className={cn("group flex flex-col gap-4 border-t border-line py-8", className)}>
        <div className="flex items-center gap-4 eyebrow text-muted">
          <span>{article.category}</span>
          <span className="h-px w-6 bg-line" />
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-serif text-2xl font-normal text-foreground transition-colors group-hover:text-sage-deep dark:group-hover:text-sage md:text-3xl">
          {article.title}
        </h3>
        <p className="max-w-xl text-sm leading-relaxed text-muted">{article.standfirst}</p>
      </Link>
    );
  }

  return (
    <Link href={`/journal/${article.slug}`} className={cn("group flex flex-col", className)}>
      <div className="overflow-hidden rounded-[2px]">
        <div className="transition-transform duration-1200 ease-luxe group-hover:scale-[1.04]">
          <EditorialImage
            tone={article.image.tone}
            src={article.image.src}
            alt={article.image.alt}
            className="aspect-[3/2] w-full"
            parallax
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
      <div className="mt-7 flex items-center gap-4 eyebrow text-muted">
        <span>{article.category}</span>
        <span className="h-px w-6 bg-line" />
        <span>{article.readTime}</span>
      </div>
      <h3 className="mt-5 max-w-2xl font-serif text-3xl font-normal text-foreground transition-colors group-hover:text-sage-deep dark:group-hover:text-sage md:text-4xl">
        {article.title}
      </h3>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">{article.standfirst}</p>
    </Link>
  );
}
