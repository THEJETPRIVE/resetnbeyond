/**
 * JOURNAL - editorial, in the register of Monocle and Kinfolk.
 * Long-form thinking that positions Reset & Beyond as an authority,
 * never a salesperson. Bodies are abbreviated here to lede + standfirst;
 * full essays live in the CMS.
 */

export interface Article {
  slug: string;
  title: string;
  standfirst: string;
  category: string;
  readTime: string;
  date: string;
  /** ISO publication date for Article schema (freshness signal) */
  isoDate: string;
  author: string;
  image: { tone: string; alt: string; aiPrompt: string; keywords: string; src?: string };
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "the-new-arithmetic-of-longevity",
    title: "The New Arithmetic of Longevity",
    standfirst:
      "Biological age has quietly replaced the birthday as the measure that matters. What the world's leading clinics now know - and how they act on it.",
    category: "Longevity",
    readTime: "8 min",
    date: "June 2026",
    isoDate: "2026-06-05",
    author: "The Editors",
    image: { tone: "j-longevity", alt: "Still lake and mountains at dawn", aiPrompt: "Timeless still alpine lake at dawn, mountains reflected, sense of permanence and time, muted editorial palette", keywords: "alpine lake dawn reflection time calm" },
    body: [
      "For most of medical history, age was a number you were handed at birth and could do nothing about. That era is ending. The clinics defining the frontier of longevity now measure a different figure entirely - your biological age, read from the epigenome, the cardiovascular system and the metabolism.",
      "The distinction is not academic. Two individuals of the same chronological age can differ by two decades in biological terms, and it is the biological figure that predicts how the coming years will feel. The good news, and the reason this field has drawn such serious investment, is that biological age responds to intervention.",
      "What separates a credible longevity programme from a fashionable one is rigour: a true baseline, precise intervention, and a protocol that continues after departure. The rest is theatre.",
    ],
  },
  {
    slug: "the-gut-first-doctrine",
    title: "The Gut-First Doctrine",
    standfirst:
      "Why the most demanding clinics in the Alps begin not with the mind or the muscles, but with digestion.",
    category: "Medical Wellness",
    readTime: "6 min",
    date: "May 2026",
    isoDate: "2026-05-10",
    author: "The Editors",
    image: { tone: "j-gut", alt: "Crisp alpine morning", aiPrompt: "Crisp alpine morning, clean air and light, sense of renewal and rigour, muted editorial palette, minimal", keywords: "alpine morning crisp light renewal minimal" },
    body: [
      "It can be disarming, on arrival at one of the great Mayr clinics, to be taught how to chew. Yet this small discipline is the visible edge of a serious doctrine: that digestion is the foundation on which energy, immunity and clarity are built.",
      "The gut-first approach is neither fringe nor fashionable. It is a rigorous, physician-led method with a long clinical lineage, and its results - in inflammation, sleep and cognitive clarity - have made converts of the most sceptical high performers.",
      "The demand it makes is real. But so, our clients report, is the return.",
    ],
  },
  {
    slug: "the-geography-of-rest",
    title: "The Geography of Rest",
    standfirst:
      "From the Sal forests of the Himalayas to the stillness of Lake Lucerne - how place itself becomes part of the medicine.",
    category: "Sleep",
    readTime: "7 min",
    date: "April 2026",
    isoDate: "2026-04-14",
    author: "The Editors",
    image: { tone: "j-rest", alt: "Misty forest at dawn", aiPrompt: "Misty Sal forest at dawn, soft light through trees, deep quiet and rest, muted green editorial palette", keywords: "forest mist dawn quiet rest green calm" },
    body: [
      "There is a reason the finest sleep programmes are not found in cities. Place is not a backdrop to rest but an active ingredient - the altitude, the light, the quality of silence all act upon the nervous system before a single treatment begins.",
      "The clinics that understand this treat geography as pharmacology. A forest at dawn, thin mountain air, the mirror-stillness of an alpine lake: each is prescribed as deliberately as any therapy.",
      "To choose where to rest, then, is already to begin resting well.",
    ],
  },
  {
    slug: "discretion-as-a-service",
    title: "Discretion as a Service",
    standfirst:
      "For those whose privacy is not a preference but a necessity, the quiet handling of every detail is the luxury that matters most.",
    category: "The House",
    readTime: "5 min",
    date: "March 2026",
    isoDate: "2026-03-09",
    author: "The Editors",
    image: { tone: "j-discretion", alt: "Soft light on stone architecture", aiPrompt: "Soft light on minimal stone architecture, empty and serene, sense of privacy and calm, muted editorial palette", keywords: "minimal architecture stone light privacy serene" },
    body: [
      "For a certain guest, the measure of a service is what is never mentioned. The transfer that materialises without a call, the programme adjusted before a concern is voiced, the absence of any trace afterward.",
      "Discretion, at this level, is not a feature but the foundation. It shapes how we work, whom we work with, and why our clients rarely need to ask twice.",
      "The finest hospitality, in the end, is the kind you never have to notice.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articleSlugs = articles.map((a) => a.slug);
