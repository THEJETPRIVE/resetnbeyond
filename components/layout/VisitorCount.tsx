"use client";

import { useEffect, useState } from "react";

/**
 * VisitorCount - a real, persistent visit tally in the footer.
 *
 * Counts once per browser session (sessionStorage guard) against the
 * free, anonymous Abacus counter API - no cookies, no personal data,
 * nothing to consent-manage. If the API is unreachable the component
 * renders nothing at all; an empty space is more luxurious than an
 * error. Swap for Vercel KV / Upstash when first-party infra lands.
 */
const NS = "resetnbeyond";
const KEY = "site-visits";

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const counted = sessionStorage.getItem("rb-counted");
    const endpoint = counted
      ? `https://abacus.jasoncameron.dev/get/${NS}/${KEY}`
      : `https://abacus.jasoncameron.dev/hit/${NS}/${KEY}`;

    fetch(endpoint)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { value?: number } | null) => {
        if (typeof data?.value === "number") {
          setCount(data.value);
          if (!counted) sessionStorage.setItem("rb-counted", "1");
        }
      })
      .catch(() => {
        /* silent - the footer simply omits the line */
      });
  }, []);

  if (count === null) return null;

  return (
    <p className="text-xs tracking-wide2 text-ivory/40">
      <span className="text-gold/70">{count.toLocaleString("en-US")}</span> discerning visitors
    </p>
  );
}
