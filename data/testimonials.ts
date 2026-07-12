/**
 * TESTIMONIALS - voices, kept anonymous by design.
 *
 * Discretion is the product. Our clients are named by their world, never
 * their name. Attributions are deliberately non-identifying.
 */

export interface Testimonial {
  quote: string;
  attribution: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I have stayed everywhere. What I had never been given was a plan - someone who understood the difference between a beautiful hotel and the right clinic for my body. That distinction was worth everything.",
    attribution: "Founder & Chairman",
    context: "Technology · reset at Chenot Palace Weggis",
  },
  {
    quote:
      "They asked three questions no one had thought to ask, and the itinerary that followed changed how I sleep. I no longer travel for wellness without them.",
    attribution: "Managing Partner",
    context: "Private Equity · programme at Lanserhof Lans",
  },
  {
    quote:
      "Absolute discretion, and an understanding that my time is the one thing I cannot buy back. Every detail was handled before I thought to ask.",
    attribution: "Principal, Family Office",
    context: "Longevity assessment · Clinique La Prairie",
  },
  {
    quote:
      "My wife and I each followed a different programme on the same island. That it felt effortless is the entire point. This is what advice should feel like.",
    attribution: "Chief Executive",
    context: "Couple's retreat · JOALI BEING",
  },
];
