/**
 * PINNACLE - the summit tier of the collection.
 *
 * Nine houses where medicine, method and place reach their highest
 * combined expression. Written in the house editorial register;
 * never lifted from any property's marketing.
 */

import type { Resort } from "../schema";

export const pinnacleResorts: Resort[] = [
  {
    slug: "clinique-la-prairie",
    name: "Clinique La Prairie",
    shortName: "La Prairie",
    tier: "pinnacle",
    country: "Switzerland",
    region: "Montreux, Lake Geneva",
    coordinates: [46.4312, 6.9107],
    established: "1931",
    tagline: "Ninety years of longevity science, above Lake Geneva.",
    cardline: "The original longevity clinic - medicine, refined into ritual.",
    categories: ["longevity", "medical-wellness", "preventive-health", "womens-health"],
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
    related: ["chenot-palace-weggis", "lanserhof-lans", "tulah-clinical-wellness"],
  },
  {
    slug: "chenot-palace-weggis",
    name: "Chenot Palace Weggis",
    shortName: "Chenot",
    tier: "pinnacle",
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
      { name: "Recover & Energise", duration: "5-7 nights", summary: "For depleted nervous systems - a rebuild of energy, sleep and stress resilience." },
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
    related: ["clinique-la-prairie", "lanserhof-lans", "palazzo-fiuggi"],
  },
  {
    slug: "lanserhof-lans",
    name: "Lanserhof Lans",
    shortName: "Lanserhof",
    tier: "pinnacle",
    country: "Austria",
    region: "Tyrol, near Innsbruck",
    coordinates: [47.2192, 11.4265],
    established: "1984",
    tagline: "The gut is the root. The Alps are the medicine.",
    cardline: "Modern Mayr medicine, at Tyrolean altitude.",
    categories: ["detox", "medical-wellness", "preventive-health", "executive-reset", "nutrition", "weight-optimisation"],
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
      { name: "Classic Cure", duration: "7-14 nights", summary: "The foundational Mayr programme - diagnostics, therapeutic fasting and gut restoration under daily medical care." },
      { name: "Energy Medicine", duration: "7-14 nights", summary: "Targeted at depletion and burnout, rebuilding cellular energy and resilience." },
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
    related: ["chenot-palace-weggis", "clinique-la-prairie", "palazzo-fiuggi"],
  },
  {
    slug: "sha-wellness-spain",
    name: "SHA Wellness Clinic",
    shortName: "SHA Spain",
    tier: "pinnacle",
    country: "Spain",
    region: "Alicante, Costa Blanca",
    coordinates: [38.5411, -0.1225],
    established: "2008",
    tagline: "Where macrobiotic nutrition meets Western medicine.",
    cardline: "Integrative medicine on a Mediterranean hillside.",
    categories: ["longevity", "detox", "weight-optimisation", "medical-wellness", "preventive-health"],
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
      { name: "Advanced Longevity", duration: "7-14 nights", summary: "Genetic and biomarker-led programme to extend healthspan, not merely lifespan." },
      { name: "Healthy Weight", duration: "7-14 nights", summary: "A medically supervised, sustainable approach to metabolic and weight optimisation." },
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
    related: ["tulah-clinical-wellness", "clinique-la-prairie", "chenot-palace-weggis"],
  },
  {
    slug: "joali-being",
    name: "JOALI BEING",
    shortName: "JOALI BEING",
    tier: "pinnacle",
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
      { name: "Rebalance & Reset", duration: "5-7 nights", summary: "Microbiome, sleep and nervous-system recalibration for the depleted." },
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
    related: ["amanemu", "sensei-lanai", "sha-wellness-spain"],
  },
  {
    slug: "tulah-clinical-wellness",
    name: "Tulåh Clinical Wellness",
    shortName: "Tulåh",
    tier: "pinnacle",
    country: "Spain",
    region: "Costa del Sol, Andalusia",
    coordinates: [36.44, -5.27],
    tagline: "Regenerative medicine, in the hills behind the Costa del Sol.",
    cardline: "A new Andalusian clinic where longevity is treated as a specialism.",
    categories: ["longevity", "medical-wellness", "preventive-health", "biohacking", "detox"],
    hero: {
      tone: "tulah-clinical-wellness",
      alt: "Contemporary clinical wellness retreat in the Andalusian hills above the Mediterranean",
      aiPrompt:
        "Cinematic view of a discreet contemporary clinical wellness estate in the Andalusian hills, warm stone and glass architecture among olive and cork oak, the Mediterranean a distant blue line, golden southern light, precise and serene, editorial luxury",
      keywords: "andalusia hills modern clinic olive trees mediterranean light",
    },
    overview: [
      "Tulåh belongs to the newest generation of European health destinations - clinics first, hotels second. In the quiet hills behind the Costa del Sol, it puts regenerative and longevity medicine at the centre of the stay and lets hospitality arrange itself around the science.",
      "The model is deliberate: deep diagnostics on arrival, a physician-built protocol in the days between, and a take-home plan measured rather than promised. Andalusia supplies the light, the produce and the ease; the clinic supplies the evidence.",
    ],
    location:
      "In the foothills of the Sierra Bermeja between Marbella and Casares, with the Mediterranean below and Gibraltar on a clear horizon. Under an hour from Málaga airport; a world quieter than the coast it overlooks.",
    whoFor:
      "For the early adopters of their own health. Guests who read their bloodwork, who want regenerative medicine delivered seriously rather than fashionably, and who prefer their clinic discreet, new-built and Andalusian in temperament.",
    philosophy:
      "Ageing is a process to be managed, not endured. Tulåh treats longevity as a clinical discipline - diagnose precisely, intervene early, regenerate where the science permits, and let the Andalusian setting do its quieter work.",
    signaturePrograms: [
      { name: "Longevity Reset", duration: "7 nights", summary: "Comprehensive diagnostics, biological-age assessment and a physician-sequenced protocol of regenerative and lifestyle medicine." },
      { name: "Cellular Regeneration", duration: "7-14 nights", summary: "The clinic's deepest work - regenerative therapies, IV protocols and recovery science aimed at the cellular level." },
      { name: "Metabolic Recalibration", duration: "5-7 nights", summary: "A data-led reset of metabolism, inflammation and body composition, built on continuous monitoring." },
    ],
    medicalExpertise: [
      "Physician-led longevity and regenerative medicine unit",
      "Advanced diagnostics, imaging and biomarker laboratory",
      "IV therapy, cryotherapy and hyperbaric protocols",
      "Continuous metabolic monitoring and personalised nutrition science",
    ],
    accommodation:
      "A small number of suites in warm stone, oak and linen, opening to the hills or the distant sea. The scale is intentionally intimate - closer to a private estate than a resort, so the clinical programme is never diluted by crowds.",
    cuisine:
      "Andalusian produce put to clinical purpose - a longevity-led kitchen where olive oil, seafood and the region's gardens are portioned and sequenced to each guest's protocol, and taste survives the science intact.",
    gallery: [
      { tone: "tulah-clinical-wellness-a", alt: "Stone and oak suite interior", aiPrompt: "Serene minimal suite interior in warm Andalusian stone and pale oak, linen textures, hillside light through deep windows, quiet contemporary luxury, editorial", keywords: "minimal suite stone oak linen andalusia light" },
      { tone: "tulah-clinical-wellness-b", alt: "Regenerative therapy suite", aiPrompt: "Refined regenerative medicine suite, IV therapy lounge with warm minimal design, soft daylight, precise and calm clinical luxury, no clutter", keywords: "regenerative medicine clinic IV therapy modern calm" },
      { tone: "tulah-clinical-wellness-c", alt: "Longevity-led Andalusian plate", aiPrompt: "Elegant longevity-focused Mediterranean plate, olive oil, vegetables and seafood on fine ceramic, natural southern light, health-forward fine dining, editorial", keywords: "mediterranean healthy cuisine olive oil plating fine dining" },
    ],
    experiences: [
      "Biological-age and full-body diagnostic screening",
      "Cryotherapy and contrast-therapy circuit",
      "Guided hill walks through cork oak and olive country",
      "One-to-one longevity nutrition consultation",
    ],
    pricingGuidance:
      "Programmes quoted on consultation; expect the upper register of European clinical wellness, with seven-night residencies typically from approximately €8,000 per person including diagnostics, treatments and cuisine.",
    faq: [
      { q: "How does Tulåh differ from the established Swiss clinics?", a: "The medicine is comparably serious but the model is newer and smaller - regenerative and longevity science delivered at private-estate scale, with Andalusian light and produce in place of alpine austerity." },
      { q: "Is a medical assessment required before booking?", a: "Yes. Every residency is built from an initial diagnostic consultation, and the clinical team confirms suitability before your programme is finalised." },
    ],
    related: ["sha-wellness-spain", "clinique-la-prairie", "palazzo-fiuggi"],
  },
  {
    slug: "sensei-lanai",
    name: "Sensei Lānaʻi, A Four Seasons Resort",
    shortName: "Sensei Lānaʻi",
    tier: "pinnacle",
    country: "United States",
    region: "Lānaʻi, Hawaii",
    coordinates: [20.8339, -156.9227],
    established: "2019",
    tagline: "Data-driven wellbeing, in the highlands of a private Hawaiian island.",
    cardline: "Larry Ellison's island, Dr David Agus's science, one adults-only sanctuary.",
    categories: ["preventive-health", "sleep", "executive-reset", "nutrition", "biohacking", "mind-wellbeing", "fitness-performance"],
    hero: {
      tone: "sensei-lanai",
      alt: "Serene garden estate in the misty uplands of Lanai with Cook pines",
      aiPrompt:
        "Cinematic view of an elegant garden wellness estate in the cool green uplands of a Hawaiian island, towering Cook pines in soft mist, sculpture gardens and still reflecting ponds, low golden light, hushed and rarefied, editorial luxury",
      keywords: "lanai hawaii highlands cook pines garden estate mist",
    },
    overview: [
      "Sensei Lānaʻi is what happens when a technology founder and a leading physician design a retreat from first principles. Larry Ellison supplied the island; Dr David Agus supplied the science; the result is an adults-only sanctuary in Lānaʻi's cool uplands where wellbeing is measured before it is prescribed.",
      "The method rests on three paths - Move, Nourish, Rest - and on the Sensei Guides who walk them with you. Biometric assessment opens the stay; evidence shapes each day; and the setting, all Cook pines, sculpture gardens and highland mist, keeps the data from ever feeling cold.",
    ],
    location:
      "In the former pineapple town of Kōele, 500 metres up in the gardens of Lānaʻi - a private island reached by a short flight from Honolulu. Cooler and quieter than the coast, with the beach at Mānele a shuttle ride away.",
    whoFor:
      "For the evidence-minded. Executives and founders who want their reset quantified, couples rebuilding sleep and stress resilience, and anyone curious what wellness looks like when a physician, not a brochure, sets the agenda.",
    philosophy:
      "Feel better, with proof. Sensei holds that small, measured changes across movement, nutrition and rest compound into longer, better lives - and that data should guide the way without ever running the day.",
    signaturePrograms: [
      { name: "Optimal Wellbeing Program", duration: "5-7 nights", summary: "The flagship - biometric assessment, one-to-one Guide sessions and private spa hale treatments arranged into a fully personalised itinerary." },
      { name: "Rest & Recovery Retreat", duration: "5 nights", summary: "Sleep science, thermal bathing and nervous-system restoration for the chronically switched-on." },
      { name: "Guided Wellness Experience", duration: "3-5 nights", summary: "A lighter immersion in the Sensei Way - assessment, Guide-led sessions and spa time at your own cadence." },
    ],
    medicalExpertise: [
      "Wellbeing model co-developed with physician-scientist Dr David Agus",
      "Biometric and body-composition assessment on arrival",
      "One-to-one Sensei Guides trained across movement, nutrition and rest",
      "Ten private spa hales, each with its own bath, sauna and garden",
    ],
    accommodation:
      "Garden-view rooms and suites in the serene former Lodge at Kōele, reworked in a calm residential register - and, for treatments, the hales: private free-standing spa houses where an entire session unfolds behind your own walls.",
    cuisine:
      "Sensei by Nobu - the Nourish path rendered as genuinely covetable food, Nobu's Japanese-Peruvian precision tuned to nutritional intent. Restraint has rarely eaten so well.",
    gallery: [
      { tone: "sensei-lanai-a", alt: "Private spa hale interior", aiPrompt: "Interior of a private freestanding spa hale, Japanese-influenced timber architecture, soaking tub facing a walled tropical garden, steam and soft light, hushed luxury, editorial", keywords: "private spa house timber soaking tub garden hawaii" },
      { tone: "sensei-lanai-b", alt: "Guided movement session in the gardens", aiPrompt: "One-to-one guided movement session on a lawn beneath towering Cook pines, morning mist, calm expert instruction, athletic ease, editorial wellness photography", keywords: "personal training garden pines mist wellness hawaii" },
      { tone: "sensei-lanai-c", alt: "Sensei by Nobu plate", aiPrompt: "Exquisite Japanese-Peruvian plate, pristine fish and vegetables on dark ceramic, precise minimal plating, low natural light, fine dining editorial", keywords: "nobu japanese cuisine plating minimal fine dining" },
    ],
    experiences: [
      "Biometric assessment and Guide consultation",
      "Private onsen-style bath and sauna in a spa hale",
      "Sculpture-garden walks among the Cook pines",
      "Archery, horseback riding and upland hikes across the island",
    ],
    pricingGuidance:
      "Retreat rates from approximately US$2,000 per night per person including assessment, Guide sessions, spa treatments and Sensei by Nobu dining; room-only stays from a lower base. Flights from Honolulu arranged privately.",
    faq: [
      { q: "How much data is involved?", a: "As much as is useful and no more - an arrival assessment shapes your itinerary, your Guide translates the numbers, and the days themselves feel like a considered holiday, not a lab visit." },
      { q: "Is the resort adults-only?", a: "Yes. Sensei Lānaʻi is reserved for adult guests, which preserves the particular stillness of the uplands." },
    ],
    related: ["amanemu", "joali-being", "clinique-la-prairie"],
  },
  {
    slug: "palazzo-fiuggi",
    name: "Palazzo Fiuggi Wellness Medical Retreat",
    shortName: "Palazzo Fiuggi",
    tier: "pinnacle",
    country: "Italy",
    region: "Fiuggi, Lazio",
    coordinates: [41.803, 13.221],
    established: "2021",
    tagline: "A grand palazzo, healing waters, and a kitchen run by Heinz Beck.",
    cardline: "Medical rigour in Belle Époque splendour, an hour from Rome.",
    categories: ["detox", "medical-wellness", "longevity", "nutrition", "preventive-health"],
    hero: {
      tone: "palazzo-fiuggi",
      alt: "Belle Epoque palazzo above the town of Fiuggi in the Lazio hills",
      aiPrompt:
        "Cinematic view of a grand Belle Époque Italian palazzo on a hillside above a Lazio spa town, formal gardens and umbrella pines, warm evening light on ochre stone, timeless Italian grandeur meeting modern medical calm, editorial",
      keywords: "italian palazzo belle epoque hillside gardens lazio golden light",
    },
    overview: [
      "Palazzo Fiuggi answers a question few thought to ask: what if a serious medical spa occupied one of Italy's great hotels? The 1913 palazzo above Fiuggi - where popes and Michelangelo once took the waters - now houses full diagnostics, a formidable medical team and Europe's most cinematic setting for a health reset.",
      "The town's oligomineral waters, drunk for centuries for their cleansing effect, remain the quiet constant. Around them the retreat arranges modern medicine, movement science and a food philosophy directed by Heinz Beck, the three-Michelin-starred chef who treats nutrition as a branch of medicine.",
    ],
    location:
      "In the hills of Ciociaria, above the historic spa town of Fiuggi - roughly an hour's drive southeast of Rome. High, green and quietly grand, with the capital close enough for arrival by lunchtime.",
    whoFor:
      "For those who want their medicine with marble. Guests pursuing a genuine detox, weight or longevity programme who will not surrender beauty, ceremony or Italian cooking to get it - and Romans escaping the city for a measurable reason.",
    philosophy:
      "Ancient waters, modern proof. Palazzo Fiuggi joins a centuries-old thermal cure to full contemporary diagnostics, holding that healing works best when science and pleasure stop being opposites.",
    signaturePrograms: [
      { name: "Complete Life Rejuvenation", duration: "7-14 nights", summary: "The flagship - full diagnostics, thermal medicine, movement and Beck's therapeutic kitchen composed into one arc of renewal." },
      { name: "Deep Detox", duration: "7 nights", summary: "A medically supervised purification built around the Fiuggi waters, thermal therapies and a precisely calibrated diet." },
      { name: "Optimal Weight", duration: "7-14 nights", summary: "Metabolic assessment and sustainable recomposition, proving that a weight programme can pass through a three-star kitchen." },
    ],
    medicalExpertise: [
      "Full medical and diagnostic centre with resident physicians",
      "Thermal medicine built on Fiuggi's oligomineral waters",
      "Metabolic, cardiovascular and longevity assessment",
      "Movement laboratory, physiotherapy and thalassotherapy circuit",
    ],
    accommodation:
      "Rooms and suites of genuine palazzo scale - frescoed ceilings, park views and Belle Époque bones, refreshed with contemporary calm. The grandest address in European medical wellness, by some distance.",
    cuisine:
      "Heinz Beck directs every menu, translating each guest's medical protocol into Italian food of three-Michelin-star intent. The therapeutic diet here is not endured; it is anticipated.",
    gallery: [
      { tone: "palazzo-fiuggi-a", alt: "Frescoed palazzo interior", aiPrompt: "Grand Belle Époque Italian palazzo interior, frescoed ceiling, marble columns and contemporary furniture in calm neutrals, soft window light, timeless luxury, editorial", keywords: "palazzo interior fresco marble grand italian luxury" },
      { tone: "palazzo-fiuggi-b", alt: "Thermal water therapy", aiPrompt: "Serene thermal therapy pool in warm stone, steam rising, arched windows onto Italian gardens, soft diffused light, medical spa luxury, editorial", keywords: "thermal pool spa stone steam italian gardens" },
      { tone: "palazzo-fiuggi-c", alt: "Heinz Beck therapeutic plate", aiPrompt: "Refined Italian therapeutic fine-dining plate, vivid vegetables and olive oil on white porcelain, Michelin precision, natural light, editorial food photography", keywords: "italian fine dining healthy plating michelin precision" },
    ],
    experiences: [
      "Morning water ritual at the Fiuggi springs",
      "Full-day diagnostic and longevity assessment",
      "Thalassotherapy and thermal circuit",
      "Guided walks through the Ciociaria hills and gardens",
    ],
    pricingGuidance:
      "Seven-night medical programmes from approximately €9,000 per person including diagnostics, treatments, accommodation and full Heinz Beck board. Rome transfers arranged privately.",
    faq: [
      { q: "What is special about the Fiuggi waters?", a: "They are naturally oligomineral - unusually light and diuretic - and have been taken as a cleansing cure since the Middle Ages. The retreat integrates them into modern, medically supervised protocols." },
      { q: "Will the therapeutic diet feel restrictive?", a: "It is precise, but it is composed by Heinz Beck's kitchen - guests routinely report it as some of the finest food of their year, calibrated portions notwithstanding." },
    ],
    related: ["chenot-palace-weggis", "lanserhof-lans", "sha-wellness-spain"],
  },
  {
    slug: "amanemu",
    name: "Amanemu",
    shortName: "Amanemu",
    tier: "pinnacle",
    country: "Japan",
    region: "Ise-Shima National Park, Mie Prefecture",
    coordinates: [34.284, 136.822],
    established: "2016",
    tagline: "Aman's onsen sanctuary, above the pearl waters of Ago Bay.",
    cardline: "Hot-spring bathing and Aman quietude, in Japan's spiritual heartland.",
    categories: ["sleep", "executive-reset", "detox", "preventive-health", "traditional-healing"],
    hero: {
      tone: "amanemu",
      alt: "Low Japanese pavilions above the still waters of Ago Bay at dusk",
      aiPrompt:
        "Cinematic dusk view of low minimalist Japanese ryokan-style pavilions in dark timber above the still, island-scattered waters of Ago Bay, steam rising from an onsen pool, soft blue-gold light, profound stillness, editorial luxury",
      keywords: "japan ago bay ryokan onsen dusk pavilion stillness",
    },
    overview: [
      "Amanemu is Aman's meditation on the Japanese hot spring - a low, dark-timbered sanctuary in Ise-Shima National Park where every suite and villa draws on the region's mineral-rich thermal waters. The register is ryokan, the execution unmistakably Aman.",
      "Below, Ago Bay scatters its pearl rafts across still water; nearby, Ise Jingu has anchored Shinto pilgrimage for two millennia. Wellness here is less programme than atmosphere - bathing, silence, seasonal food and a spa that treats the onsen as its central instrument.",
    ],
    location:
      "On a ridge above Ago Bay in Ise-Shima National Park, Mie Prefecture - around two hours from Nagoya and within reach of Kyoto and Osaka by road or rail. Pilgrimage country: Ise Jingu, Japan's most venerated shrine, lies close by.",
    whoFor:
      "For the depleted who heal by subtraction. Executives and couples seeking deep rest rather than diagnostics, admirers of Japanese bathing culture, and Aman devotees who want their reset conducted in near-silence.",
    philosophy:
      "Restoration through ritual. Amanemu trusts the old Japanese logic of the onsen - heat, mineral water, season and stillness, repeated until the nervous system remembers itself.",
    signaturePrograms: [
      { name: "Onsen Wellness Immersion", duration: "3-7 nights", summary: "A structured immersion in thermal bathing, spa therapies and seasonal cuisine, paced to restore sleep and calm." },
      { name: "Mind & Body Renewal", duration: "5-7 nights", summary: "Movement, meditation and Aman Spa treatments arranged around daily onsen ritual for the chronically overworked." },
      { name: "Ise Pilgrimage Journey", duration: "3-5 nights", summary: "Guided passage through Ise Jingu and the sacred landscape of Shima, balanced with bathing and rest." },
    ],
    medicalExpertise: [
      "Aman Spa with a 33-metre thermal pool and private onsen pavilions",
      "Watsu and water-based bodywork in mineral spring water",
      "Traditional Japanese and Aman signature therapies",
      "Wellness immersions tailored by resident spa specialists",
    ],
    accommodation:
      "Twenty-four suites and a handful of multi-bedroom villas, each with its own onsen bath fed by the local spring. Dark timber, paper screens and long low eaves - ryokan grammar spoken with Aman fluency.",
    cuisine:
      "The restaurant looks to Ise-Shima's extraordinary larder - Matsusaka beef, abalone and spiny lobster from the bay, mountain vegetables in season - served washoku-style with quiet precision.",
    gallery: [
      { tone: "amanemu-a", alt: "Private onsen bath at a suite", aiPrompt: "Private stone onsen bath on a suite terrace, steam rising, dark timber and paper screens, view over misty Ago Bay at dawn, profound Japanese serenity, editorial", keywords: "private onsen bath steam timber japan bay dawn" },
      { tone: "amanemu-b", alt: "Watsu therapy in the thermal pool", aiPrompt: "Serene watsu water therapy session in a minimal dark-stone thermal pool, soft low light, gentle movement, Japanese spa tranquility, editorial wellness photography", keywords: "watsu water therapy thermal pool japan spa" },
      { tone: "amanemu-c", alt: "Washoku seasonal course", aiPrompt: "Exquisite Japanese washoku course, seafood and seasonal vegetables on artisan ceramics, restrained composition, soft natural light, editorial food photography", keywords: "washoku japanese cuisine kaiseki ceramics seasonal" },
    ],
    experiences: [
      "Dawn visit to Ise Jingu with a private guide",
      "Watsu session in mineral spring water",
      "Ama pearl-diver encounter on Ago Bay",
      "Evening onsen ritual under the open sky",
    ],
    pricingGuidance:
      "Suites from approximately US$1,500 per night; wellness immersions and villa residencies quoted on consultation. Transfers from Nagoya, Kyoto or Osaka arranged privately.",
    faq: [
      { q: "Is Amanemu a medical facility?", a: "No - it is a restorative onsen sanctuary. Guests seeking diagnostics pair it with a clinical stay elsewhere; those seeking profound rest need nothing more than this." },
      { q: "Do all rooms have private onsen baths?", a: "Yes. Every suite and villa has its own thermal bath fed by the region's spring, alongside the Aman Spa's shared pools and private pavilions." },
    ],
    related: ["sensei-lanai", "joali-being", "chenot-palace-weggis"],
  },
];
