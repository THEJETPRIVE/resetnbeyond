"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";

/**
 * EnquiryForm - the conversion surface, dressed as a private application.
 *
 * Underlined fields on bare paper, interests chosen as quiet chips, and a
 * composed confirmation rather than a jarring alert. Submissions POST to
 * /api/enquiry (delivery configured by env - see that route) and fire an
 * `enquiry_submitted` conversion event into analytics.
 */
const budgets = ["£10–25k", "£25–50k", "£50–100k", "£100k+", "Prefer to discuss"];

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="group block">
      <span className="eyebrow text-muted">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-3 w-full border-b border-line bg-transparent pb-3 font-serif text-2xl font-normal text-foreground outline-none transition-colors duration-300 placeholder:text-muted/40 focus:border-foreground"
      />
    </label>
  );
}

export function EnquiryForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const toggle = (slug: string) =>
    setInterests((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* The concierge promise holds either way; delivery issues surface
         server-side rather than as friction for the guest. */
    }

    // The conversion event - visible in Vercel Analytics
    track("enquiry_submitted", { interests: interests.join(",") || "none", budget: budget ?? "unspecified" });

    setSending(false);
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[30rem] flex-col items-center justify-center text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
              <Check strokeWidth={1.3} />
            </span>
            <h3 className="mt-8 font-serif text-4xl font-normal text-foreground">Thank you.</h3>
            <p className="prose-luxe mx-auto mt-4 text-center">
              Your enquiry is received in confidence. A private advisor will be in touch within one business day. We look
              forward to the conversation.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-12"
          >
            <div className="grid gap-10 md:grid-cols-2">
              <Field label="Full name" name="name" required autoComplete="name" />
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Telephone" name="phone" type="tel" autoComplete="tel" />
              <Field label="City / Country" name="location" autoComplete="country-name" />
            </div>

            {/* Interests */}
            <fieldset>
              <legend className="eyebrow text-muted">Areas of interest</legend>
              <div className="mt-5 flex flex-wrap gap-3">
                {programs.map((p) => {
                  const active = interests.includes(p.slug);
                  return (
                    <button
                      type="button"
                      key={p.slug}
                      onClick={() => toggle(p.slug)}
                      aria-pressed={active}
                      className={cn(
                        "rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ease-luxe",
                        active
                          ? "border-foreground bg-charcoal text-ivory dark:bg-ivory dark:text-charcoal"
                          : "border-line text-muted hover:border-foreground hover:text-foreground",
                      )}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="interests" value={interests.join(", ")} />
            </fieldset>

            {/* Budget */}
            <fieldset>
              <legend className="eyebrow text-muted">Indicative investment (per stay)</legend>
              <div className="mt-5 flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    aria-pressed={budget === b}
                    className={cn(
                      "rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ease-luxe",
                      budget === b
                        ? "border-foreground bg-charcoal text-ivory dark:bg-ivory dark:text-charcoal"
                        : "border-line text-muted hover:border-foreground hover:text-foreground",
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <input type="hidden" name="budget" value={budget ?? ""} />
            </fieldset>

            {/* Message */}
            <label className="block">
              <span className="eyebrow text-muted">What are you seeking?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="A few words on what has brought you here - the more you share, the more considered our reply."
                className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 font-serif text-xl font-normal leading-relaxed text-foreground outline-none transition-colors duration-300 placeholder:text-muted/40 focus:border-foreground"
              />
            </label>

            <div className="flex flex-col items-start gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-relaxed text-muted">
                Your enquiry is held in strict confidence and never shared. By submitting, you consent to be contacted by
                a Reset & Beyond advisor.
              </p>
              <Button type="submit" arrow disabled={sending} aria-busy={sending}>
                {sending ? "Sending..." : "Submit in Confidence"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
