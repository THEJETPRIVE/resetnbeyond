/**
 * SITE — navigation, identity and contact.
 * A single source of truth for structural content shared across the shell.
 */

export const site = {
  name: "Reset & Beyond",
  tagline: "Beyond Wellness. Beyond Luxury.",
  email: "concierge@resetandbeyond.com",
  phone: "+41 22 000 0000",
  phoneHref: "tel:+41220000000",
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
      { label: "Six Senses Vana", href: "/resorts/six-senses-vana", note: "India · Himalayas" },
      { label: "Chenot Palace Weggis", href: "/resorts/chenot-palace-weggis", note: "Switzerland" },
      { label: "Clinique La Prairie", href: "/resorts/clinique-la-prairie", note: "Switzerland" },
      { label: "JOALI BEING", href: "/resorts/joali-being", note: "Maldives" },
      { label: "Lanserhof Lans", href: "/resorts/lanserhof-lans", note: "Austria" },
      { label: "View all houses", href: "/resorts", note: "The full collection" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Longevity", href: "/programs/longevity" },
      { label: "Detox", href: "/programs/detox" },
      { label: "Executive Reset", href: "/programs/executive-reset" },
      { label: "Sleep", href: "/programs/sleep" },
      { label: "Women's Health", href: "/programs/womens-health" },
      { label: "All disciplines", href: "/programs" },
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
      { label: "All Houses", href: "/resorts" },
      { label: "Switzerland", href: "/resorts" },
      { label: "Maldives", href: "/resorts" },
      { label: "India", href: "/resorts" },
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
