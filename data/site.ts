/**
 * SITE - navigation, identity and contact.
 * A single source of truth for structural content shared across the shell.
 */

export const site = {
  name: "Reset & Beyond",
  tagline: "Beyond Wellness. Beyond Luxury.",
  email: "concierge@resetnbeyond.com",
  phone: "+91 98 00000 147",
  phoneHref: "tel:+919800000147",
  offices: ["Geneva", "London", "Singapore", "Dubai"],
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** Optional flyout children */
  children?: { label: string; href: string; note?: string }[];
}

export const primaryNav: NavItem[] = [
  {
    label: "Collection",
    href: "/resorts",
    children: [
      { label: "The Pinnacle Collection", href: "/collections/pinnacle", note: "9 houses" },
      { label: "Signature Collection", href: "/collections/signature", note: "10 houses" },
      { label: "Curated Luxury Retreats", href: "/collections/curated", note: "10 houses" },
      { label: "Exceptional Wellness Escapes", href: "/collections/exceptional", note: "10 houses" },
    ],
  },
  {
    label: "Destinations",
    href: "/resorts",
    children: [
      { label: "The Alps & Italy", href: "/destinations/alps-and-italy", note: "9 houses" },
      { label: "Iberia & the Atlantic", href: "/destinations/iberia-and-atlantic", note: "4 houses" },
      { label: "Asia & the Indian Ocean", href: "/destinations/asia-and-indian-ocean", note: "11 houses" },
      { label: "Japan", href: "/destinations/japan", note: "2 houses" },
      { label: "North America", href: "/destinations/north-america", note: "7 houses" },
      { label: "Latin America & the Caribbean", href: "/destinations/latin-america-caribbean", note: "6 houses" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Longevity", href: "/programs/longevity" },
      { label: "Detox", href: "/programs/detox" },
      { label: "Mind & Emotional Wellbeing", href: "/programs/mind-wellbeing" },
      { label: "Weight Optimisation", href: "/programs/weight-optimisation" },
      { label: "Ancient & Traditional Healing", href: "/programs/traditional-healing" },
      { label: "All 13 disciplines", href: "/programs" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Concierge", href: "/concierge" },
];

export const footerNav = {
  collection: {
    title: "The Collection",
    links: [
      { label: "The Pinnacle Collection", href: "/collections/pinnacle" },
      { label: "Signature Collection", href: "/collections/signature" },
      { label: "Curated Luxury Retreats", href: "/collections/curated" },
      { label: "Exceptional Wellness Escapes", href: "/collections/exceptional" },
    ],
  },
  programs: {
    title: "Programs",
    links: [
      { label: "Longevity", href: "/programs/longevity" },
      { label: "Detox", href: "/programs/detox" },
      { label: "Executive Reset", href: "/programs/executive-reset" },
      { label: "Medical Wellness", href: "/programs/medical-wellness" },
    ],
  },
  house: {
    title: "The House",
    links: [
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Private Concierge", href: "/concierge" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
