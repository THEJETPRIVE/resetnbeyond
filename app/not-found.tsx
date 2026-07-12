import { ButtonLink } from "@/components/ui/Button";

/**
 * 404 - even the wrong turn should feel composed. A calm ivory field, a
 * serif apology, and two ways home.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center justify-center">
      <div className="container text-center">
        <span className="eyebrow text-muted">Error 404</span>
        <h1 className="mt-8 font-serif text-display-md font-normal text-foreground">
          This path has not <br className="hidden md:block" /> been curated.
        </h1>
        <p className="prose-luxe mx-auto mt-8 text-center">
          The page you sought does not exist - or, perhaps, is reserved. Let us guide you somewhere considered.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <ButtonLink href="/" arrow>
            Return Home
          </ButtonLink>
          <ButtonLink href="/resorts" variant="line">
            Explore the Collection
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
