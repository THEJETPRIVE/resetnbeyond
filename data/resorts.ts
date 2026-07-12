/**
 * RESORTS - the curated collection.
 *
 * Reset & Beyond does not own these houses; it curates them. Every word
 * here is written fresh in an editorial register (Monocle / Kinfolk),
 * informed by each property's real disciplines but never lifted from
 * their marketing. `tone` seeds the placeholder art-direction; `image`
 * fields carry the AI prompt + library keywords for the asset team.
 */

export interface ImageBrief {
  /** Seed string → deterministic warm duotone placeholder */
  tone: string;
  alt: string;
  /** Generative brief for the art team (Midjourney / Firefly) */
  aiPrompt: string;
  /** Stock library search terms (Unsplash / Pexels) */
  keywords: string;
  /** Optional real source; falls back to the toned placeholder */
  src?: string;
}

export interface ResortFAQ {
  q: string;
  a: string;
}

export interface Resort {
  slug: string;
  name: string;
  shortName: string;
  country: string;
  region: string;
  /** [lat, lng] for the interactive world map */
  coordinates: [number, number];
  established?: string;
  tagline: string;
  /** One-line positioning used on cards */
  cardline: string;
  categories: string[]; // maps to program slugs
  hero: ImageBrief;
  overview: string[];
  location: string;
  whoFor: string;
  philosophy: string;
  signaturePrograms: { name: string; duration: string; summary: string }[];
  medicalExpertise: string[];
  accommodation: string;
  cuisine: string;
  gallery: ImageBrief[];
  experiences: string[];
  pricingGuidance: string;
  faq: ResortFAQ[];
  related: string[]; // slugs
}

export const resorts: Resort[] = [
  {
    slug: "six-senses-vana",
    name: "Six Senses Vana",
    shortName: "Vana",
    country: "India",
    region: "Dehradun, Himalayan Foothills",
    coordinates: [30.3165, 78.0322],
    established: "2014",
    tagline: "A retreat in the classical sense - a place to withdraw.",
    cardline: "Ancient Indian sciences, held within Sal forest silence.",
    categories: ["detox", "sleep", "preventive-health", "nutrition"],
    hero: {
      tone: "vana",
      alt: "Mist settling over a Sal forest at dawn in the Himalayan foothills",
      aiPrompt:
        "Cinematic wide shot of a serene modern-vernacular wellness sanctuary nestled in a misty Sal forest, Himalayan foothills at dawn, warm ivory architecture, soft diffused morning light, meditative stillness, muted earth palette, editorial photography, 35mm, shallow depth of field",
      keywords: "himalayan forest mist dawn wellness sanctuary meditation",
    },
    overview: [
      "Vana is not a spa and never pretends to be. It is a retreat in the oldest meaning of the word - a considered withdrawal from the noise of an examined life. Set within an ancient Sal forest above Dehradun, it gathers Ayurveda, Tibetan medicine, Yoga and natural healing under a single, unhurried roof.",
      "Guests arrive with intention and leave on a rhythm. There are no televisions in the rooms, no rush in the corridors, and no menu of indulgences - only a curated path, drawn with a physician, that asks something of you and gives more in return.",
    ],
    location:
      "Ninety minutes by helicopter from Delhi, then a gentle ascent into the Doon Valley. The estate sits at the meeting point of the Ganges plains and the first Himalayan ridgelines - thin air, long views, and the particular quiet that only forests keep.",
    whoFor:
      "For those who have optimised everything except stillness. Founders and principals between quarters; individuals recovering their sleep, their digestion, or their sense of proportion. Vana rewards commitment - it is chosen by people ready to be led.",
    philosophy:
      "Healing as return, not repair. Vana treats the guest as a whole system, restoring the body's own intelligence through disciplines that predate the wellness industry by several thousand years.",
    signaturePrograms: [
      { name: "Ayurveda Panchakarma", duration: "7–21 nights", summary: "A physician-led purification and rebuilding of the body's core, sequenced across weeks, not days." },
      { name: "Sleep & Circadian Restoration", duration: "7–14 nights", summary: "Chronobiology, Yoga Nidra and Tibetan therapies to rebuild the architecture of deep sleep." },
      { name: "Vana Reset", duration: "5–7 nights", summary: "An introductory recalibration for the time-poor - the essential Vana, distilled." },
    ],
    medicalExpertise: [
      "Resident Ayurvedic physicians (Vaidyas) and Tibetan doctors (Amchi)",
      "Panchakarma suites with classical therapies",
      "Integrated Yoga and pranayama faculty",
      "Nutrition rooted in Ayurvedic constitution (dosha) assessment",
    ],
    accommodation:
      "Rooms and suites face either the Sal forest or the estate's meditation courtyards. Interiors are quiet to the point of monastic - natural linen, hand-thrown ceramics, no visual noise. The wardrobe is a kurta pyjama; the dress code is ease.",
    cuisine:
      "A single, seasonal kitchen cooks to your programme, not your cravings. Plant-forward, largely from the estate, occasionally austere - and, within its discipline, quietly delicious.",
    gallery: [
      { tone: "vana-a", alt: "Forest meditation courtyard", aiPrompt: "Minimal open-air meditation courtyard, ivory stone, morning mist, single figure in white seated in stillness, editorial", keywords: "meditation courtyard minimal stone mist" },
      { tone: "vana-b", alt: "Ayurvedic therapy room", aiPrompt: "Warm-lit Ayurvedic treatment room, wooden Panchakarma table, brass vessels, oil lamps, soft shadows, luxury", keywords: "ayurveda treatment room brass oil warm" },
      { tone: "vana-c", alt: "Plant-forward tasting plate", aiPrompt: "Overhead of a spare, elegant plant-based tasting plate on handmade ceramic, natural light, kinfolk styling", keywords: "plant based plating ceramic natural light" },
    ],
    experiences: [
      "Sunrise walking meditation through the Sal forest",
      "Private consultation with a resident Vaidya",
      "Sound healing beneath the estate's central dome",
      "Tibetan Ku Nye massage in candlelight",
    ],
    pricingGuidance:
      "All-inclusive residencies from approximately €1,100 per night, minimum five nights, with medical programmes quoted on consultation. Helicopter transfer from Delhi arranged privately.",
    faq: [
      { q: "Is a medical consultation required?", a: "Yes. Every residency begins with a physician consultation that shapes your entire stay. This is not a resort one simply books; it is a programme one enters." },
      { q: "Can I stay connected?", a: "You may, though Vana is designed for the opposite. Rooms omit televisions by intention; discreet connectivity exists for those who need it." },
    ],
    related: ["ananda-himalayas", "chiva-som", "joali-being"],
  },
  {
    slug: "chenot-palace-weggis",
    name: "Chenot Palace Weggis",
    shortName: "Chenot",
    country: "Switzerland",
    region: "Lake Lucerne",
    coordinates: [47.0345, 8.4331],
    established: "2020",
    tagline: "The science of prevention, on the shore of Lake Lucerne.",
    cardline: "Henri Chenot's method, rendered in Swiss precision and data.",
    categories: ["detox", "longevity", "medical-wellness", "preventive-health", "biohacking"],
    hero: {
      tone: "chenot",
      alt: "Lake Lucerne at first light with alpine peaks and a modern lakeside clinic",
      aiPrompt:
        "Cinematic dawn over Lake Lucerne, mirror-still water, alpine peaks, a discreet modern lakeside wellness palace in pale stone and glass, cool morning light warming to gold, Swiss precision, architectural photography, editorial",
      keywords: "lake lucerne alps dawn modern architecture calm",
    },
    overview: [
      "Chenot Palace Weggis is the definitive expression of the Chenot Method - a fusion of detoxification, energetic medicine and advanced diagnostics that has quietly guided the world's most examined bodies for four decades.",
      "Here, prevention is not a philosophy but a protocol. Each stay opens with a comprehensive health assessment and closes with a measurable delta: sleep, metabolism, biological age. The lake does the rest.",
    ],
    location:
      "On the Weggis shoreline of Lake Lucerne, forty minutes from Zurich. A landscape of water, cloud and mountain that has drawn convalescents and thinkers for two centuries - Mark Twain among them.",
    whoFor:
      "For the diagnostically curious. Executives who measure everything and wish to measure the things that matter. Those managing stress load, metabolic drift or the early questions of longevity, who want answers rendered in data rather than reassurance.",
    philosophy:
      "The body accumulates; the method releases. Chenot combines deep detoxification with precision diagnostics so that prevention becomes something you can see on a chart, not merely feel.",
    signaturePrograms: [
      { name: "Advanced Detox Programme", duration: "7 nights", summary: "The flagship. Hydro-aromatherapy, phytotherapy and energetic treatments sequenced against daily biomarkers." },
      { name: "Recover & Energise", duration: "5–7 nights", summary: "For depleted nervous systems - a rebuild of energy, sleep and stress resilience." },
      { name: "Longevity & Prevention", duration: "7 nights", summary: "Comprehensive screening, biological-age assessment and a forward protocol to take home." },
    ],
    medicalExpertise: [
      "On-site medical team and advanced diagnostic laboratory",
      "Bio-energetic and cardiovascular assessment",
      "Genetic and biomarker analysis",
      "Chenot hydro-aromatherapy and phyto-mud treatments",
    ],
    accommodation:
      "Rooms and suites face the lake or the alpine gardens, finished in a restrained palette of pale oak, stone and glass. The design vocabulary is clinical only in its precision - everywhere else it is warm, still and Swiss.",
    cuisine:
      "The Chenot diet is calorically precise and nutritionally complete - a controlled, plant-led cuisine engineered to support detoxification without ever feeling like deprivation. Presentation is worthy of any Michelin room.",
    gallery: [
      { tone: "chenot-a", alt: "Indoor thermal pool facing the lake", aiPrompt: "Minimalist indoor thermal pool, floor-to-ceiling glass onto Lake Lucerne, still water, pale stone, cool serene light", keywords: "indoor thermal pool glass lake minimal" },
      { tone: "chenot-b", alt: "Diagnostic suite", aiPrompt: "Clean modern medical diagnostic suite, warm minimal design, soft daylight, sense of precision and calm, no clutter", keywords: "modern medical diagnostic minimal calm" },
      { tone: "chenot-c", alt: "Precision plated cuisine", aiPrompt: "Elegant plant-led plate, precise portions, fine ceramic, natural light, health-forward fine dining", keywords: "healthy fine dining plating precise" },
    ],
    experiences: [
      "Biological-age assessment and consultation",
      "Hydro-aromatherapy in the Chenot spa",
      "Lakeside cold-water immersion",
      "Guided alpine walks above Weggis",
    ],
    pricingGuidance:
      "Seven-night programmes from approximately CHF 8,500 per person including accommodation, all treatments, diagnostics and cuisine. Private transfer from Zurich arranged on request.",
    faq: [
      { q: "Is Chenot a medical facility?", a: "It is a medical wellness clinic - a rare hybrid of five-star hospitality and genuine clinical diagnostics, staffed by physicians and equipped accordingly." },
      { q: "How quickly will I see results?", a: "Most guests leave a seven-night stay with measurable improvements in sleep, energy and select biomarkers, alongside a protocol to sustain them." },
    ],
    related: ["clinique-la-prairie", "lanserhof-lans", "sha-wellness-spain"],
  },
  {
    slug: "clinique-la-prairie",
    name: "Clinique La Prairie",
    shortName: "La Prairie",
    country: "Switzerland",
    region: "Montreux, Lake Geneva",
    coordinates: [46.4312, 6.9107],
    established: "1931",
    tagline: "Ninety years of longevity science, above Lake Geneva.",
    cardline: "The original longevity clinic - medicine, refined into ritual.",
    categories: ["longevity", "medical-wellness", "preventive-health", "healthy-aging"],
    hero: {
      tone: "laprairie",
      alt: "Lake Geneva and the Alps seen from a historic clinic on the Montreux hillside",
      aiPrompt:
        "Cinematic view over Lake Geneva from a hillside above Montreux, Belle Époque clinic architecture meeting contemporary glass, alpine light, vineyards descending to the water, timeless Swiss luxury, editorial",
      keywords: "lake geneva montreux alps clinic vineyard light",
    },
    overview: [
      "Founded in 1931, Clinique La Prairie is where the modern science of longevity began. Its pioneering cellular therapy drew heads of state and screen legends long before 'wellness' entered the lexicon - and its research continues to define the field.",
      "Today it operates as a medical clinic, a wellness sanctuary and a hotel of genuine distinction, holding all three in a single, seamless standard. Prevention here is a nine-decade discipline, not a trend.",
    ],
    location:
      "Perched above Montreux with Lake Geneva below and the Alps beyond, amid the terraced vineyards of the Lavaux. Twenty minutes from Montreux, an hour from Geneva.",
    whoFor:
      "For those investing in decades, not weeks. Individuals and couples pursuing healthy longevity, immune resilience and the science of ageing well - who expect their wellness to be underwritten by real medicine.",
    philosophy:
      "Longevity is built, cell by cell. La Prairie's four pillars - medical, nutrition, movement and wellbeing - are sequenced by physicians into a single revitalising arc.",
    signaturePrograms: [
      { name: "Revitalisation", duration: "7 nights", summary: "The legendary flagship - cellular therapy and comprehensive medical assessment to restore vitality at the source." },
      { name: "Longevity", duration: "7 nights", summary: "A forward-looking programme of screening, epigenetic insight and a personalised protocol for the years ahead." },
      { name: "Master Detox", duration: "7 nights", summary: "A medically supervised cleanse to reset metabolism, digestion and energy." },
    ],
    medicalExpertise: [
      "Full medical clinic with 50+ specialists on site",
      "Cellular therapy and immune revitalisation",
      "Epigenetic and longevity diagnostics",
      "Genetic screening and preventive cardiology",
    ],
    accommodation:
      "Suites in the historic and contemporary wings alike face the lake, appointed with the quiet grandeur of a grand Swiss hotel - because that, in part, is what it is.",
    cuisine:
      "A nutrition philosophy translated by chefs into cuisine you would order for pleasure. Longevity-led, lake-fresh, and served with the ceremony of fine dining.",
    gallery: [
      { tone: "laprairie-a", alt: "Lake-facing suite", aiPrompt: "Elegant Swiss suite with panoramic Lake Geneva view, warm neutral palette, timeless luxury, soft daylight", keywords: "lake geneva suite luxury hotel warm" },
      { tone: "laprairie-b", alt: "Medical longevity assessment", aiPrompt: "Refined medical consultation setting, physician and guest, warm minimal interior, sense of trust and science", keywords: "medical consultation longevity refined" },
      { tone: "laprairie-c", alt: "Spa relaxation gallery", aiPrompt: "Serene spa relaxation gallery, loungers facing alpine lake through glass, soft light, understated luxury", keywords: "spa relaxation alpine lake glass serene" },
    ],
    experiences: [
      "Cellular revitalisation consultation",
      "Epigenetic age assessment",
      "Lavaux vineyard walks",
      "Private hydrotherapy circuit",
    ],
    pricingGuidance:
      "Seven-night signature programmes from approximately CHF 30,000 per person, all-inclusive of medical, accommodation and cuisine. Bespoke longevity protocols quoted individually.",
    faq: [
      { q: "What is cellular therapy?", a: "The revitalisation science La Prairie pioneered - a proprietary approach to restoring cellular vitality, refined across ninety years of clinical practice and research." },
      { q: "Is it suitable for couples?", a: "Entirely. Many guests attend as couples, each following an individually prescribed programme within a shared stay." },
    ],
    related: ["chenot-palace-weggis", "lanserhof-lans", "sha-wellness-spain"],
  },
  {
    slug: "joali-being",
    name: "JOALI BEING",
    shortName: "JOALI BEING",
    country: "Maldives",
    region: "Bodufushi, Raa Atoll",
    coordinates: [5.6167, 72.9333],
    established: "2021",
    tagline: "The Maldives' first dedicated wellbeing island.",
    cardline: "Transformation, staged across an entire private island.",
    categories: ["detox", "sleep", "womens-health", "nutrition", "biohacking"],
    hero: {
      tone: "joali",
      alt: "Aerial of a private Maldivian island wrapped in turquoise lagoon at golden hour",
      aiPrompt:
        "Aerial cinematic view of a lush private Maldivian island encircled by turquoise lagoon and coral reef, overwater architecture in natural timber, golden-hour light, serene and pristine, luxury wellbeing retreat, editorial",
      keywords: "maldives private island aerial turquoise lagoon overwater",
    },
    overview: [
      "JOALI BEING is the Maldives reimagined as a place of transformation rather than escape. The archipelago's first wellbeing island organises the whole of Bodufushi around four pillars - Mind, Skin, Microbiome and Energy - into a single immersive journey.",
      "Nature is the medium. Treatments unfold in overwater pavilions and forest clearings; the ocean is both diagnostic and remedy. It is wellness on the scale of a landscape.",
    ],
    location:
      "In the Raa Atoll, a scenic 40-minute seaplane flight from Malé across an unbroken field of blue. A private island given wholly to one purpose.",
    whoFor:
      "For those who want their transformation to feel like paradise, not privation. Individuals and couples addressing sleep, stress and vitality who wish to do so surrounded by extraordinary natural beauty.",
    philosophy:
      "Wellbeing is a state of coherence between mind, body and nature. JOALI BEING dissolves the wall between clinic and island so that healing and place become one.",
    signaturePrograms: [
      { name: "AquaCentric Transformation", duration: "7 nights", summary: "A water-led journey through hydrotherapy, sound and breath, tuned to your individual assessment." },
      { name: "Rebalance & Reset", duration: "5–7 nights", summary: "Microbiome, sleep and nervous-system recalibration for the depleted." },
      { name: "Mindful Living", duration: "7 nights", summary: "Cognitive and emotional wellbeing through meditation, sound therapy and nutrition." },
    ],
    medicalExpertise: [
      "Integrative wellbeing team and visiting practitioners",
      "Four-pillar assessment: Mind, Skin, Microbiome, Energy",
      "Hydrotherapy hall and overwater treatment pavilions",
      "Sound therapy and vibrational healing programme",
    ],
    accommodation:
      "Beach and overwater villas of considerable scale, each with private pool, crafted in natural timber and stone. Architecture that frames the ocean rather than competing with it.",
    cuisine:
      "'Anti-inflammatory gastronomy' - cuisine built around the microbiome and served with genuine culinary ambition across earth-to-table venues. Nutrition you would choose for taste alone.",
    gallery: [
      { tone: "joali-a", alt: "Overwater treatment pavilion", aiPrompt: "Overwater wellness pavilion above a Maldivian lagoon, natural timber, gauze curtains, turquoise water below, serene", keywords: "overwater pavilion maldives spa timber lagoon" },
      { tone: "joali-b", alt: "Hydrotherapy hall", aiPrompt: "Elegant hydrotherapy hall, vitality pools, natural materials, soft daylight, tranquil luxury wellness", keywords: "hydrotherapy pool wellness natural light luxury" },
      { tone: "joali-c", alt: "Beach villa at golden hour", aiPrompt: "Private Maldivian beach villa with pool at golden hour, natural timber architecture, ocean beyond, editorial luxury", keywords: "maldives beach villa pool golden hour" },
    ],
    experiences: [
      "Sunrise ocean immersion and breathwork",
      "Sound-healing dome session",
      "Reef snorkelling with a marine biologist",
      "Private overwater hydrotherapy",
    ],
    pricingGuidance:
      "Villa residencies with wellbeing programmes from approximately US$2,500 per night, minimum seven nights. Seaplane transfer from Malé arranged privately.",
    faq: [
      { q: "Is this a clinic or a resort?", a: "It is a wellbeing island - the diagnostic rigour of a clinic set within the beauty and freedom of a private-island resort." },
      { q: "Can programmes be tailored for couples?", a: "Yes. Each guest is individually assessed, and couples frequently pursue complementary journeys side by side." },
    ],
    related: ["chiva-som", "six-senses-vana", "sha-wellness-mexico"],
  },
  {
    slug: "sha-wellness-spain",
    name: "SHA Wellness Clinic",
    shortName: "SHA Spain",
    country: "Spain",
    region: "Alicante, Costa Blanca",
    coordinates: [38.5411, -0.1225],
    established: "2008",
    tagline: "Where macrobiotic nutrition meets Western medicine.",
    cardline: "Integrative medicine on a Mediterranean hillside.",
    categories: ["longevity", "detox", "weight-optimization", "medical-wellness", "preventive-health"],
    hero: {
      tone: "sha-es",
      alt: "White terraced clinic on a Mediterranean hillside overlooking the sea",
      aiPrompt:
        "Cinematic view of a striking white terraced wellness clinic on a Mediterranean hillside above the sea, Alicante coastline, warm southern light, cypress and olive, contemporary architecture, editorial luxury",
      keywords: "mediterranean white clinic hillside sea alicante architecture",
    },
    overview: [
      "SHA pioneered the marriage of ancient Eastern disciplines with the most advanced Western medicine - a genuinely integrative model that has since been widely imitated and rarely matched.",
      "From its terraced white campus above the Sierra Helada, SHA delivers longevity, detox and metabolic programmes with clinical seriousness, then wraps them in the light and ease of the Mediterranean.",
    ],
    location:
      "Above the marine nature reserve of Sierra Helada, near Alicante, with the Mediterranean spread below. Forty-five minutes from Alicante airport, three hours of sunlight more than most of Europe.",
    whoFor:
      "For those seeking medical substance without clinical coldness. Guests pursuing weight and metabolic optimisation, longevity, or a genuine detox, who want it delivered by physicians in a place that feels like the south.",
    philosophy:
      "East and West are not rivals but complements. SHA's integrative method draws on macrobiotic nutrition, traditional medicine and cutting-edge diagnostics in equal, evidence-led measure.",
    signaturePrograms: [
      { name: "Rebalance", duration: "7 nights", summary: "Detoxification, digestive health and metabolic reset built on macrobiotic nutrition." },
      { name: "Advanced Longevity", duration: "7–14 nights", summary: "Genetic and biomarker-led programme to extend healthspan, not merely lifespan." },
      { name: "Healthy Weight", duration: "7–14 nights", summary: "A medically supervised, sustainable approach to metabolic and weight optimisation." },
    ],
    medicalExpertise: [
      "Integrative medical unit and diagnostic laboratory",
      "Genetic and epigenetic longevity testing",
      "Macrobiotic and therapeutic nutrition faculty",
      "Aesthetic, dental and cognitive health units",
    ],
    accommodation:
      "Bright, contemporary suites in luminous white and warm wood, each with a terrace to the sea or the mountains. Southern light is the defining material.",
    cuisine:
      "SHA is where macrobiotic cuisine became genuinely desirable - two menus, one therapeutic and one gastronomic, both grounded in the same nutritional science.",
    gallery: [
      { tone: "sha-es-a", alt: "Sea-view suite terrace", aiPrompt: "Bright white Mediterranean suite terrace overlooking the sea, warm wood, southern light, contemporary luxury", keywords: "white suite terrace sea mediterranean light" },
      { tone: "sha-es-b", alt: "Macrobiotic tasting plate", aiPrompt: "Beautiful macrobiotic tasting plate, colourful vegetables, fine ceramic, natural light, health-forward gastronomy", keywords: "macrobiotic cuisine plating colourful healthy" },
      { tone: "sha-es-c", alt: "Hydrotherapy circuit", aiPrompt: "Modern white hydrotherapy circuit, thermal pools, Mediterranean light, serene minimal wellness", keywords: "hydrotherapy thermal circuit white minimal" },
    ],
    experiences: [
      "Genetic and biological-age testing",
      "Macrobiotic cooking session",
      "Sierra Helada guided hikes",
      "Cognitive-health assessment",
    ],
    pricingGuidance:
      "Seven-night programmes from approximately €6,500 per person including accommodation, medical consultations and cuisine. Suites and villas quoted by category.",
    faq: [
      { q: "What makes SHA integrative?", a: "It combines evidence-based Western diagnostics with Eastern disciplines and macrobiotic nutrition under one medical roof - not as alternatives, but as a single method." },
      { q: "Is macrobiotic food restrictive?", a: "SHA offers both a therapeutic and a gastronomic menu, so nutritional discipline and genuine pleasure at the table are never in conflict." },
    ],
    related: ["sha-wellness-mexico", "clinique-la-prairie", "chenot-palace-weggis"],
  },
  {
    slug: "sha-wellness-mexico",
    name: "SHA Wellness Clinic",
    shortName: "SHA Mexico",
    country: "Mexico",
    region: "Riviera Maya, Yucatán",
    coordinates: [20.5083, -87.2377],
    established: "2024",
    tagline: "The SHA method, reborn on the Caribbean coast.",
    cardline: "Integrative longevity, framed by jungle and sea.",
    categories: ["longevity", "detox", "biohacking", "medical-wellness", "womens-health"],
    hero: {
      tone: "sha-mx",
      alt: "Contemporary wellness clinic between Yucatán jungle and Caribbean sea",
      aiPrompt:
        "Cinematic view of a contemporary white wellness clinic set between lush Yucatán jungle and the turquoise Caribbean, warm tropical light, sculptural architecture, serene and pristine, editorial luxury",
      keywords: "riviera maya jungle caribbean modern clinic architecture",
    },
    overview: [
      "SHA's first venture beyond Spain transplants its integrative method to the Riviera Maya, where jungle meets the Caribbean. The science is unchanged; the setting is transformed.",
      "Longevity, detox and biohacking programmes are delivered here with the same clinical authority as in Alicante, now amid cenotes, mangroves and an ocean the colour of glass.",
    ],
    location:
      "On the coast south of Cancún, between the Sian Ka'an biosphere and the sea. Under an hour from Cancún International; a world away in atmosphere.",
    whoFor:
      "For clients in the Americas seeking SHA's proven method closer to home - and for anyone who wishes their longevity programme to come with warm water and jungle air.",
    philosophy:
      "Place amplifies medicine. The same integrative rigour, now infused with the restorative energy of one of the planet's most biodiverse coastlines.",
    signaturePrograms: [
      { name: "Advanced Longevity", duration: "7–14 nights", summary: "Genetic, epigenetic and biomarker-led healthspan extension, SHA's most advanced protocol." },
      { name: "Deep Detox", duration: "7 nights", summary: "Macrobiotic-led purification and metabolic reset in a tropical setting." },
      { name: "Executive Recovery", duration: "7 nights", summary: "Stress, sleep and cognitive restoration for depleted high performers." },
    ],
    medicalExpertise: [
      "Integrative medical unit mirroring SHA Spain",
      "Advanced longevity and regenerative diagnostics",
      "Macrobiotic nutrition faculty",
      "Cognitive and emotional-health programmes",
    ],
    accommodation:
      "Sculptural suites open to jungle or sea, in a palette of warm limestone, pale wood and linen. Indoor and outdoor dissolve into one another.",
    cuisine:
      "SHA's celebrated macrobiotic gastronomy, reinterpreted with the produce and spirit of the Yucatán - therapeutic precision meeting Latin warmth.",
    gallery: [
      { tone: "sha-mx-a", alt: "Jungle-facing suite", aiPrompt: "Sculptural suite opening to Yucatán jungle, warm limestone and linen, dappled tropical light, serene luxury", keywords: "jungle suite limestone linen tropical light" },
      { tone: "sha-mx-b", alt: "Cenote wellness ritual", aiPrompt: "Serene cenote wellness ritual, turquoise water in limestone cavern, soft light shaft, meditative luxury", keywords: "cenote wellness ritual turquoise limestone" },
      { tone: "sha-mx-c", alt: "Oceanfront movement deck", aiPrompt: "Yoga and movement deck facing the Caribbean at dawn, natural timber, soft light, tranquil", keywords: "yoga deck caribbean dawn timber" },
    ],
    experiences: [
      "Cenote immersion and breathwork",
      "Regenerative-medicine consultation",
      "Sian Ka'an biosphere excursion",
      "Sunrise oceanfront movement",
    ],
    pricingGuidance:
      "Seven-night programmes from approximately US$7,500 per person all-inclusive of medical, accommodation and cuisine. Private transfer from Cancún arranged.",
    faq: [
      { q: "Is the method identical to SHA Spain?", a: "The medical method and standards are shared across both clinics; the Mexican setting adds the restorative influence of jungle and Caribbean." },
      { q: "How do I choose between the two?", a: "Largely geography and atmosphere. Your concierge will advise based on your itinerary, timing and the specific programme you seek." },
    ],
    related: ["sha-wellness-spain", "joali-being", "clinique-la-prairie"],
  },
  {
    slug: "lanserhof-lans",
    name: "Lanserhof Lans",
    shortName: "Lanserhof",
    country: "Austria",
    region: "Tyrol, near Innsbruck",
    coordinates: [47.2192, 11.4265],
    established: "1984",
    tagline: "The gut is the root. The Alps are the medicine.",
    cardline: "Modern Mayr medicine, at Tyrolean altitude.",
    categories: ["detox", "medical-wellness", "preventive-health", "executive-reset", "nutrition"],
    hero: {
      tone: "lanserhof",
      alt: "Modern clinic on a Tyrolean alpine plateau with mountains behind",
      aiPrompt:
        "Cinematic view of a sleek modern medical clinic on a Tyrolean alpine plateau, clean architecture in wood and glass, snow-dusted peaks behind, crisp mountain light, Austrian precision, editorial",
      keywords: "tyrol alps modern clinic plateau mountains crisp light",
    },
    overview: [
      "Lanserhof is the standard-bearer of Modern Mayr Medicine - a rigorous, physician-led approach that begins where much of health quietly ends: the gut. Digestion, it holds, is the foundation of energy, immunity and clarity.",
      "The regime is honest and, at first, demanding. Chewing is retaught, the diet pared back, the body's systems recalibrated under close medical supervision. Guests leave lighter in every sense.",
    ],
    location:
      "On the sunny Lans plateau above Innsbruck, at the threshold of the Tyrolean Alps. Fifteen minutes from Innsbruck; a clean, high, restorative air throughout.",
    whoFor:
      "For the committed. High performers carrying digestive strain, inflammation, poor sleep or executive fatigue, who want a genuine medical reset rather than a soft spa week - and are willing to earn it.",
    philosophy:
      "Health begins in the gut. The Mayr method restores digestion first, trusting that energy, immunity and mental clarity follow from a well-ordered core.",
    signaturePrograms: [
      { name: "Classic Cure", duration: "7–14 nights", summary: "The foundational Mayr programme - diagnostics, therapeutic fasting and gut restoration under daily medical care." },
      { name: "Energy Medicine", duration: "7–14 nights", summary: "Targeted at depletion and burnout, rebuilding cellular energy and resilience." },
      { name: "Executive Reset", duration: "7 nights", summary: "A concentrated recalibration for the time-constrained leader." },
    ],
    medicalExpertise: [
      "Physician-led Modern Mayr Medicine",
      "Advanced diagnostics and functional testing",
      "Cryotherapy, altitude training and physiotherapy",
      "Dental and postural units (the Lanserhof concept treats the whole)",
    ],
    accommodation:
      "Rooms and suites of quiet Austrian modernism - pale timber, clean lines, generous glazing onto the peaks. Restraint as luxury.",
    cuisine:
      "The Mayr diet is deliberately spare, then rebuilt with sophistication: alkaline, seasonal and, by the end of a cure, quietly revelatory. You relearn how to eat.",
    gallery: [
      { tone: "lanserhof-a", alt: "Alpine-view treatment suite", aiPrompt: "Minimalist alpine treatment suite, pale timber, floor-to-ceiling glass onto snowy peaks, crisp light, Austrian design", keywords: "alpine suite timber glass mountains minimal" },
      { tone: "lanserhof-b", alt: "Modern Mayr dining", aiPrompt: "Spare, elegant Mayr diet plate, alkaline seasonal food, fine ceramic, natural light, refined restraint", keywords: "mayr diet plate alkaline minimal refined" },
      { tone: "lanserhof-c", alt: "Cryotherapy and movement", aiPrompt: "Modern medical movement and cryotherapy space, clean architecture, alpine light, precise and calm", keywords: "cryotherapy movement clinic modern alpine" },
    ],
    experiences: [
      "Modern Mayr diagnostic consultation",
      "Alpine plateau walking therapy",
      "Cryotherapy and altitude sessions",
      "Mindful-eating re-education",
    ],
    pricingGuidance:
      "Seven-night cures from approximately €4,500 per person plus accommodation and medical services quoted individually. Innsbruck transfer arranged.",
    faq: [
      { q: "Is the Mayr cure difficult?", a: "It asks something of you - particularly in diet and pace - but is fully physician-supervised and calibrated to your capacity. The rewards are proportionate to the commitment." },
      { q: "Who should not attend?", a: "Your concierge and the Lanserhof medical team will assess suitability in advance; the programme is intensive and medically directed." },
    ],
    related: ["chenot-palace-weggis", "clinique-la-prairie", "sha-wellness-spain"],
  },
  {
    slug: "chiva-som",
    name: "Chiva-Som",
    shortName: "Chiva-Som",
    country: "Thailand",
    region: "Hua Hin, Gulf of Thailand",
    coordinates: [12.5411, 99.9581],
    established: "1995",
    tagline: "The original beachfront wellness sanctuary.",
    cardline: "Three decades of holistic mastery, by the Gulf of Thailand.",
    categories: ["detox", "sleep", "executive-reset", "nutrition", "preventive-health"],
    hero: {
      tone: "chivasom",
      alt: "Tropical garden pavilions beside a calm beach on the Gulf of Thailand",
      aiPrompt:
        "Cinematic view of a lush tropical wellness sanctuary of Thai pavilions beside a calm golden beach, Gulf of Thailand, warm morning light, frangipani and palm, serene holistic retreat, editorial luxury",
      keywords: "thailand beach pavilion tropical garden wellness calm",
    },
    overview: [
      "Chiva-Som invented the destination wellness resort as we know it. For three decades this beachfront sanctuary in Hua Hin has quietly set the standard, blending Eastern and Western therapies with a warmth entirely its own.",
      "The approach is holistic and personal - a health-and-wellness consultation shapes each stay across fitness, spa, nutrition, aesthetics and mind. Few places balance rigour and generosity so gracefully.",
    ],
    location:
      "On the beach at Hua Hin, the royal Thai resort town on the Gulf of Thailand. A gentle three-hour drive or short flight from Bangkok, into a softer, slower register.",
    whoFor:
      "For those seeking a complete, holistic reset delivered with Thai grace. Guests managing stress, sleep and executive fatigue who want breadth - fitness, spa, nutrition and mind - rather than a single clinical protocol.",
    philosophy:
      "The haven of life. Chiva-Som treats wellbeing as an ecosystem of body, mind and spirit, tended by a large multidisciplinary team with unusual patience.",
    signaturePrograms: [
      { name: "Optimal Performance", duration: "7–10 nights", summary: "For the depleted high achiever - fitness, recovery and stress physiology brought back into balance." },
      { name: "Cleanse & Detox", duration: "5–7 nights", summary: "A gentle yet thorough purification across nutrition, hydrotherapy and holistic spa." },
      { name: "Sleep Enhancement", duration: "7 nights", summary: "A dedicated programme to rebuild restorative sleep through therapy, nutrition and mind practices." },
    ],
    medicalExpertise: [
      "Health-and-wellness consultation and naturopathy",
      "Physiotherapy and fitness science",
      "Holistic and traditional Thai therapies",
      "Nutrition, aesthetics and dental wellness units",
    ],
    accommodation:
      "Thai-pavilion and ocean-view rooms set in mature tropical gardens, a short barefoot walk from the sea. Understated, garden-cooled, deeply calm.",
    cuisine:
      "Cuisine that proves healthy eating need never be dull - balanced, flavourful, and drawn largely from the resort's own organic garden.",
    gallery: [
      { tone: "chivasom-a", alt: "Beachfront at dawn", aiPrompt: "Calm golden beach at dawn with tropical pavilions and palms, soft light, serene Thai wellness sanctuary, editorial", keywords: "thailand beach dawn pavilion palm calm" },
      { tone: "chivasom-b", alt: "Traditional Thai therapy", aiPrompt: "Serene traditional Thai massage pavilion, warm wood, gauze, soft light, holistic luxury spa", keywords: "thai massage pavilion wood serene spa" },
      { tone: "chivasom-c", alt: "Organic garden cuisine", aiPrompt: "Vibrant healthy Thai-inspired plate from an organic garden, fine ceramic, natural light, flavourful and fresh", keywords: "healthy thai cuisine organic garden fresh" },
    ],
    experiences: [
      "Holistic health consultation",
      "Traditional Thai therapy",
      "Gulf-side tai chi at sunrise",
      "Organic-garden nutrition session",
    ],
    pricingGuidance:
      "Wellness residencies from approximately US$700 per night including accommodation, consultation, cuisine and daily treatments; minimum three nights.",
    faq: [
      { q: "Is Chiva-Som medical or holistic?", a: "Primarily holistic, with genuine clinical depth in areas such as physiotherapy, naturopathy and nutrition - a broad, integrated approach rather than a single medical protocol." },
      { q: "How long should I stay?", a: "Most guests find seven to ten nights allows a programme to take real effect, though shorter resets are available." },
    ],
    related: ["six-senses-vana", "joali-being", "ananda-himalayas"],
  },
  {
    slug: "ananda-himalayas",
    name: "Ananda in the Himalayas",
    shortName: "Ananda",
    country: "India",
    region: "Narendra Nagar, Himalayan Foothills",
    coordinates: [30.1637, 78.3009],
    established: "2000",
    tagline: "A Maharaja's palace estate, given to Ayurveda.",
    cardline: "Himalayan Ayurveda and Yoga, above the Ganges.",
    categories: ["detox", "sleep", "womens-health", "preventive-health", "nutrition"],
    hero: {
      tone: "ananda",
      alt: "Palace estate above the Ganges valley amid Himalayan forest",
      aiPrompt:
        "Cinematic view of a heritage Maharaja's palace estate on a forested Himalayan ridge above the Ganges valley, dawn mist, warm colonial-Indian architecture, timeless serenity, editorial luxury wellness",
      keywords: "himalayas palace estate ganges forest mist heritage",
    },
    overview: [
      "Ananda occupies a Maharaja's palace estate on a forested Himalayan ridge above Rishikesh, the birthplace of Yoga. Here, authentic Ayurveda, Yoga and Vedanta are practised with heritage-house grace and genuine spiritual depth.",
      "Set against the Ganges valley, it holds a rare balance - the seriousness of a traditional healing tradition within the comfort of a grand palace hotel.",
    ],
    location:
      "Above Rishikesh and the Ganges, in the Garhwal Himalayan foothills. An hour from Dehradun airport, ascending into forest, temple bells and thin, clear air.",
    whoFor:
      "For those drawn to depth and lineage. Guests seeking authentic Ayurveda and Yoga, stress and sleep restoration, or simply the spiritual altitude of the Himalayas, within surroundings of real grandeur.",
    philosophy:
      "Ananda means bliss. The estate unites Ayurveda, Yoga and Vedantic philosophy so that physical healing and inner stillness advance together.",
    signaturePrograms: [
      { name: "Ayurvedic Rejuvenation", duration: "7–21 nights", summary: "Classical Panchakarma and Ayurvedic therapy, physician-prescribed and deeply restorative." },
      { name: "Dhyana Meditation Retreat", duration: "7 nights", summary: "A guided descent into meditation and Vedantic practice above the Ganges." },
      { name: "Sleep Recovery", duration: "7 nights", summary: "Ayurveda, Yoga Nidra and lifestyle re-ordering to restore deep, natural sleep." },
    ],
    medicalExpertise: [
      "Resident Ayurvedic physicians and Panchakarma therapists",
      "Yoga, pranayama and meditation faculty",
      "Vedanta and philosophy sessions",
      "Emotional-healing and stress-management programmes",
    ],
    accommodation:
      "Palace rooms, valley-view rooms and private villas across the heritage estate, blending Raj-era grandeur with serene contemporary calm.",
    cuisine:
      "Ayurvedic cuisine tailored to your constitution and programme - subtle, restorative, and drawn from Himalayan produce, with fine-dining polish where the programme allows.",
    gallery: [
      { tone: "ananda-a", alt: "Palace courtyard", aiPrompt: "Heritage Indian palace courtyard at golden hour, Raj-era architecture, forest beyond, serene luxury wellness estate", keywords: "indian palace courtyard heritage golden hour" },
      { tone: "ananda-b", alt: "Ayurvedic therapy ritual", aiPrompt: "Warm Ayurvedic Shirodhara therapy, oil stream, brass vessel, candlelight, deeply serene luxury spa", keywords: "ayurveda shirodhara therapy brass candlelight" },
      { tone: "ananda-c", alt: "Yoga above the valley", aiPrompt: "Sunrise yoga pavilion overlooking the Ganges valley and Himalayan forest, mist, soft golden light, tranquil", keywords: "yoga pavilion himalayas ganges sunrise mist" },
    ],
    experiences: [
      "Ganges Aarti ceremony at Rishikesh",
      "Private Ayurvedic consultation and Shirodhara",
      "Himalayan sunrise Yoga",
      "Vedanta philosophy session",
    ],
    pricingGuidance:
      "All-inclusive wellness residencies from approximately US$650 per night, minimum three nights; Ayurvedic programmes quoted on consultation.",
    faq: [
      { q: "Is Ananda spiritual or medical?", a: "Both, in the Indian tradition - authentic Ayurvedic medicine practised alongside Yoga and Vedantic philosophy, within a grand heritage estate." },
      { q: "Do I need Yoga experience?", a: "None at all. Practice is tailored to every level, from first breath to advanced, always under expert guidance." },
    ],
    related: ["six-senses-vana", "chiva-som", "joali-being"],
  },
];

export const getResort = (slug: string) => resorts.find((r) => r.slug === slug);
export const resortSlugs = resorts.map((r) => r.slug);
