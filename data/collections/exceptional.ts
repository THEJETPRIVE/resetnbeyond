/**
 * EXCEPTIONAL - the fourth tier of the collection.
 *
 * Houses of genuine distinction whose wellness credentials are woven into
 * hospitality of the first rank. Written fresh in the house editorial
 * register (Monocle / Kinfolk); never lifted from marketing copy.
 */

import type { Resort } from "../schema";

export const exceptionalResorts: Resort[] = [
  {
    slug: "six-senses-douro-valley",
    name: "Six Senses Douro Valley",
    shortName: "Douro Valley",
    tier: "exceptional",
    country: "Portugal",
    region: "Lamego, Douro Wine Region",
    coordinates: [41.13, -7.79],
    established: "2015",
    tagline: "A nineteenth-century manor, restored to slowness.",
    cardline: "Six Senses spa science among the terraced vineyards of the Douro.",
    categories: ["sleep", "detox", "nutrition", "preventive-health"],
    hero: {
      tone: "six-senses-douro-valley",
      alt: "Historic manor house above the Douro river surrounded by terraced vineyards at dawn",
      aiPrompt:
        "Cinematic dawn over the Douro river valley, a restored 19th-century Portuguese quinta manor on a vineyard hillside, terraced vines descending to still water, low golden mist, warm stone and painted shutters, timeless editorial luxury, 35mm",
      keywords: "douro valley vineyard manor river terraces dawn mist portugal",
    },
    overview: [
      "The Douro moves at the pace of its river, and Six Senses has had the good judgement not to hurry it. A nineteenth-century quinta manor above the water has been restored with real restraint, then given the group's full wellness intelligence - screenings, sleep science and a spa that takes its brief seriously.",
      "The result is a rare register: a working wine landscape, a UNESCO valley, and a wellness programme that measures before it prescribes. Guests taste, walk, sleep and recalibrate, in roughly that order.",
    ],
    location:
      "Above the Douro river near Lamego, ninety minutes east of Porto by road, deep in the world's oldest demarcated wine region. Terraced vineyards on every horizon, and a river that has organised life here for centuries.",
    whoFor:
      "For those who want their reset with a sense of place - and, occasionally, a glass in hand. Couples and solo travellers rebuilding sleep and equilibrium who prefer a valley to a clinic, and depth without dogma.",
    philosophy:
      "Wellness as reconnection, not correction. Six Senses pairs high-tech screening with high-touch therapy, trusting the landscape to do the quiet, essential work between sessions.",
    signaturePrograms: [
      { name: "Sleep & Resilience", duration: "3-7 nights", summary: "Sleep tracking, yogic breathwork and circadian coaching to rebuild rest from its foundations." },
      { name: "Detox & Digestive Health", duration: "5-7 nights", summary: "A plant-led cleanse with wellness-screening data, massage therapy and the valley's slow rhythm." },
      { name: "Discover Douro Wellness", duration: "3-5 nights", summary: "The estate in essence - screening, daily treatments and guided time among the vines." },
    ],
    medicalExpertise: [
      "Six Senses wellness screening and biomarker snapshot on arrival",
      "Resident wellness practitioners; visiting specialists in sleep and Ayurveda",
      "Alchemy Bar and apothecary for personalised botanical blends",
      "Holistic rather than clinical - guests needing medical protocols are referred to partner clinics",
    ],
    accommodation:
      "Rooms, suites and quintas across the manor and its modern wings, dressed in oak, linen and the muted greens of the valley. The best rooms hold the river in their windows all day.",
    cuisine:
      "Farm-to-fork Portuguese cooking from the organic garden, tuned to each programme yet unafraid of pleasure - this is, after all, a wine valley. The cellar is treated as part of the culture, not a contradiction.",
    gallery: [
      { tone: "six-senses-douro-valley-a", alt: "Indoor pool in the restored manor spa", aiPrompt: "Serene indoor spa pool in a restored Portuguese manor, stone arches and warm timber, soft window light on still water, editorial luxury", keywords: "spa indoor pool manor stone warm light portugal" },
      { tone: "six-senses-douro-valley-b", alt: "Massage therapy overlooking the vineyards", aiPrompt: "Quiet treatment room with a view over terraced Douro vineyards, therapist's hands, natural linen, dusk light, understated luxury spa", keywords: "massage treatment room vineyard view linen dusk" },
      { tone: "six-senses-douro-valley-c", alt: "Garden-to-table Portuguese plate", aiPrompt: "Elegant farm-to-fork Portuguese plate on handmade ceramic, garden vegetables, olive oil, natural side light, kinfolk styling", keywords: "portuguese cuisine garden vegetables ceramic natural light" },
    ],
    experiences: [
      "Sunrise walk through the estate's terraced vines",
      "Wellness screening and personalised programme design",
      "Wine tasting with the resident sommelier",
      "Yoga in the manor's riverside gardens",
    ],
    pricingGuidance:
      "Rooms from approximately €700 per night with breakfast; wellness programmes and multi-day spa journeys quoted individually on consultation. Private transfer from Porto arranged.",
    faq: [
      { q: "Can wellness and wine coexist here?", a: "Deliberately so. Programmes are calibrated to your goals - some guests abstain entirely, others let the valley's culture in by measured degrees. Neither choice is judged." },
      { q: "How structured are the programmes?", a: "As structured as you wish. A screening on arrival shapes a daily rhythm of treatments and movement, but the valley rewards unscheduled hours too." },
    ],
    related: ["vilalara-algarve", "villa-stephanie", "aman-kyoto"],
  },
  {
    slug: "burgenstock",
    name: "Bürgenstock Resort & Alpine Spa",
    shortName: "Bürgenstock",
    tier: "exceptional",
    country: "Switzerland",
    region: "Bürgenstock Ridge, Lake Lucerne",
    coordinates: [46.9975, 8.3796],
    established: "2017",
    tagline: "A village of wellbeing, five hundred metres above the lake.",
    cardline: "Ten thousand square metres of Alpine Spa on a legendary Swiss ridge.",
    categories: ["medical-wellness", "executive-reset", "preventive-health", "longevity"],
    hero: {
      tone: "burgenstock",
      alt: "Infinity pool on a mountain ridge overlooking Lake Lucerne at dusk",
      aiPrompt:
        "Cinematic dusk view from an infinity-edge pool on the Bürgenstock ridge, Lake Lucerne five hundred metres below, alpine peaks in evening light, glass and stone architecture, Swiss precision luxury, editorial photography",
      keywords: "burgenstock lake lucerne infinity pool ridge alps dusk",
    },
    overview: [
      "The Bürgenstock has drawn the discreetly famous since the age of the grand hotel - Audrey Hepburn married here - and its twenty-first-century reincarnation is Switzerland's most ambitious resort estate. At its heart sits the 10,000-square-metre Alpine Spa, whose infinity edge appears to pour directly into Lake Lucerne.",
      "What elevates it beyond spectacle is the Waldhotel, the estate's dedicated house of medical wellness, where physicians run genuine diagnostic, rehabilitation and weight-management programmes amid the pines. Grandeur and clinical substance, on one private ridge.",
    ],
    location:
      "On the Bürgenstock ridge, five hundred metres above Lake Lucerne, reached by road, boat and the estate's own funicular. An hour from Zurich; a century from its pace.",
    whoFor:
      "For those who want scale, spectacle and the option of real medicine in a single address. Executives decompressing between quarters, couples pairing spa days with alpine air, and guests entering supervised programmes at the Waldhotel.",
    philosophy:
      "Altitude as therapy. The estate holds hospitality and health medicine side by side, letting each guest set the dial between indulgence and intervention.",
    signaturePrograms: [
      { name: "Waldhotel Medical Check-Up", duration: "2-4 nights", summary: "Physician-led diagnostics - cardiology, metabolism, movement analysis - with a forward protocol to take home." },
      { name: "Weight Management & Metabolism", duration: "7-14 nights", summary: "A medically supervised recalibration of nutrition, movement and habit at the Waldhotel." },
      { name: "Alpine Reset", duration: "3-5 nights", summary: "The Alpine Spa in full - thermal circuit, lake-view therapies and guided ridge walks for the time-poor." },
    ],
    medicalExpertise: [
      "Waldhotel medical team with resident physicians and physiotherapists",
      "Diagnostic check-ups, cardiology and metabolic assessment",
      "Post-operative rehabilitation and dedicated healthy-nutrition kitchen",
      "Alpine Spa therapies are hospitality-led; clinical work is concentrated at the Waldhotel",
    ],
    accommodation:
      "Four hotels across the estate, from the flagship Bürgenstock Hotel's lake-view suites to the Waldhotel's calm, timber-lined rooms among the trees. All share the ridge, the funicular and the view.",
    cuisine:
      "A dozen venues spanning Michelin-level dining to the Waldhotel's Verbena, where calorie-conscious cuisine is composed with genuine culinary intent. The healthy kitchen is a discipline here, not an afterthought.",
    gallery: [
      { tone: "burgenstock-a", alt: "Alpine Spa thermal pools with lake view", aiPrompt: "Vast alpine spa interior, thermal pools in stone and glass, panoramic windows onto Lake Lucerne far below, steam and soft light, Swiss luxury", keywords: "alpine spa thermal pool glass lake lucerne panorama" },
      { tone: "burgenstock-b", alt: "Waldhotel medical consultation room", aiPrompt: "Calm modern medical consultation room in warm timber, forest light through large windows, precise and reassuring, Swiss medical wellness", keywords: "medical consultation timber forest modern swiss" },
      { tone: "burgenstock-c", alt: "Calorie-conscious fine dining plate", aiPrompt: "Refined health-forward plate at a Swiss resort restaurant, precise plating, alpine herbs, evening light, editorial food photography", keywords: "healthy fine dining plate alpine herbs precise" },
    ],
    experiences: [
      "Infinity-edge bathing five hundred metres above the lake",
      "Medical check-up at the Waldhotel",
      "Cliff path walk along the Hammetschwand",
      "Private boat transfer across Lake Lucerne",
    ],
    pricingGuidance:
      "Rooms from approximately CHF 800 per night; Waldhotel medical programmes from approximately CHF 3,500 plus accommodation, quoted on consultation.",
    faq: [
      { q: "Is the Alpine Spa open to all guests?", a: "Yes - the 10,000-square-metre spa belongs to the whole estate, while the Waldhotel's medical facilities operate as a dedicated clinic within it." },
      { q: "Do I need a programme to stay?", a: "Not at all. Many guests come purely for the ridge, the spa and the table, adding medical elements only if and when they wish." },
    ],
    related: ["villa-stephanie", "six-senses-douro-valley", "chenot-palace-weggis"],
  },
  {
    slug: "villa-stephanie",
    name: "Villa Stéphanie at Brenners Park-Hotel",
    shortName: "Villa Stéphanie",
    tier: "exceptional",
    country: "Germany",
    region: "Baden-Baden, Black Forest",
    coordinates: [48.758, 8.235],
    established: "2015",
    tagline: "A grand hotel's entire house, given to health.",
    cardline: "European spa tradition with a physician's floor - and an off switch.",
    categories: ["medical-wellness", "detox", "preventive-health", "executive-reset", "sleep"],
    hero: {
      tone: "villa-stephanie",
      alt: "Elegant Belle Epoque villa amid park trees in Baden-Baden",
      aiPrompt:
        "Cinematic view of an elegant Belle Epoque villa in a manicured park in Baden-Baden, morning light through old trees, cream facades and tall windows, quiet grandeur, German spa-town heritage, editorial luxury",
      keywords: "baden-baden villa belle epoque park trees heritage spa town",
    },
    overview: [
      "Baden-Baden has been Europe's cure town for two centuries, and Brenners Park-Hotel its most polished address. Villa Stéphanie is the hotel's decisive gesture: an entire five-storey house on the Lichtentaler Allee given wholly to health, with just fifteen rooms above a serious spa.",
      "Next door, Haus Julius supplies the medicine - physicians, diagnostics and specialists on call - while each bedroom carries the villa's most quietly radical feature: a switch that severs the room's electronic signals entirely. Digital detox here is wiring, not wishful thinking.",
    ],
    location:
      "On the Lichtentaler Allee in Baden-Baden, at the edge of the Black Forest. Ninety minutes from Frankfurt, forty from Strasbourg, and steps from the parkland promenade that made the town famous.",
    whoFor:
      "For those who want the intimacy of a private house with the depth of a medical address. Guests pursuing detox, sleep repair or a preventive check-up, delivered with old-European discretion and a staff that remembers everything.",
    philosophy:
      "The cure, modernised. Villa Stéphanie takes the nineteenth-century spa-town tradition - rest, water, walking, restraint - and underwrites it with contemporary medicine one door away.",
    signaturePrograms: [
      { name: "Detox & Depuration", duration: "7-14 nights", summary: "A physician-guided cleanse pairing therapeutic fasting principles with daily spa therapy and Allee walks." },
      { name: "Medical Check-Up", duration: "2-4 nights", summary: "Comprehensive diagnostics at Haus Julius, from cardiology to dermatology, in complete privacy." },
      { name: "Digital Detox & Sleep", duration: "5-7 nights", summary: "Rooms hard-wired for silence, sleep coaching and a deliberate re-ordering of attention." },
    ],
    medicalExpertise: [
      "Haus Julius medical practice adjoining the villa, with physicians and visiting specialists",
      "Diagnostics spanning internal medicine, dermatology and dental aesthetics",
      "Physiotherapy, personal training and nutrition counselling on site",
      "A rare hybrid - hotel spa intimacy with genuine clinical infrastructure next door",
    ],
    accommodation:
      "Twelve rooms and three suites, each connected by lift to the spa in a robe if one wishes. Interiors are classic Brenners - parquet, silk, park views - with that copper-lined switch beside every bed.",
    cuisine:
      "Nutrition plans are drawn by the villa's specialists and executed by Brenners' kitchens, from therapeutic menus to the park-side restaurant's full repertoire. Discipline and Kaffeehaus grace, held in balance.",
    gallery: [
      { tone: "villa-stephanie-a", alt: "Private spa pool in the villa", aiPrompt: "Intimate private spa pool in an elegant European villa, marble and warm wood, tall windows onto parkland, still water, heritage luxury", keywords: "private spa pool villa marble park windows elegant" },
      { tone: "villa-stephanie-b", alt: "Physician consultation at Haus Julius", aiPrompt: "Discreet, refined medical consultation room in a German heritage building, warm minimal interior, daylight, sense of trust and precision", keywords: "medical consultation refined heritage daylight germany" },
      { tone: "villa-stephanie-c", alt: "Therapeutic cuisine at Brenners", aiPrompt: "Elegant light therapeutic plate in a grand hotel dining room, fine porcelain, park light through tall windows, quiet European luxury", keywords: "therapeutic cuisine fine porcelain grand hotel light" },
    ],
    experiences: [
      "Morning walks on the Lichtentaler Allee",
      "Full diagnostic day at Haus Julius",
      "Sauna ritual in the villa's two-storey spa",
      "An evening entirely off-grid, by design",
    ],
    pricingGuidance:
      "Rooms from approximately €950 per night; medical programmes and Haus Julius diagnostics quoted individually on consultation.",
    faq: [
      { q: "What exactly is the digital detox switch?", a: "Each bedroom is lined to block signals and fitted with a switch that cuts the room's electronic activity at the wall - disconnection as architecture rather than willpower." },
      { q: "Is Villa Stéphanie separate from Brenners?", a: "It is Brenners' dedicated house of health - a private villa within the estate, sharing the hotel's service and kitchens while keeping its own spa, medicine and hush." },
    ],
    related: ["burgenstock", "six-senses-douro-valley", "cal-a-vie"],
  },
  {
    slug: "vilalara-algarve",
    name: "Vilalara Longevity Thalassa & Nature",
    shortName: "Vilalara",
    tier: "exceptional",
    country: "Portugal",
    region: "Porches, Algarve",
    coordinates: [37.098, -8.392],
    tagline: "The sea, prescribed.",
    cardline: "Thalassotherapy authority in clifftop gardens above Atlantic coves.",
    categories: ["longevity", "detox", "medical-wellness", "nutrition", "sleep"],
    hero: {
      tone: "vilalara-algarve",
      alt: "Clifftop gardens descending to a turquoise Atlantic cove on the Algarve",
      aiPrompt:
        "Cinematic view of lush subtropical clifftop gardens descending to a golden-cliff Atlantic cove, Algarve coastline, turquoise water, low-rise white resort among bougainvillea, warm evening light, editorial luxury",
      keywords: "algarve cliff cove gardens turquoise atlantic bougainvillea",
    },
    overview: [
      "Vilalara has practised thalassotherapy - the clinical use of seawater, marine climate and algae - for decades, and remains one of the discipline's most complete addresses anywhere. Heated seawater pools, hydro-massage circuits and marine treatments are run with a therapist's seriousness, not a spa menu's looseness.",
      "The Longevity partnership adds contemporary medicine to the marine tradition: health screenings, detox and healthy-ageing programmes delivered amid eleven hectares of clifftop gardens above some of the Algarve's most photographed coves.",
    ],
    location:
      "On the cliffs at Porches, between Albufeira and Portimão on the central Algarve. Forty-five minutes from Faro airport; direct garden paths descend to a near-private cove beach.",
    whoFor:
      "For those who trust the sea more than the syringe. Guests pursuing joint and circulatory relief, genuine detox or a measured longevity programme, who want their therapy delivered in salt water and southern light.",
    philosophy:
      "The ocean is the oldest clinic. Vilalara pairs the physiological depth of thalassotherapy with modern screening and nutrition, letting marine biology and medicine reinforce one another.",
    signaturePrograms: [
      { name: "Thalasso Vitality", duration: "5-7 nights", summary: "The classical cure - daily seawater hydrotherapy, algae applications and marine-climate rest, therapist-sequenced." },
      { name: "Longevity Detox", duration: "7-14 nights", summary: "Health screening, supervised nutrition and thalasso therapy combined into a measurable cleanse." },
      { name: "Healthy Ageing Reset", duration: "7 nights", summary: "Biomarker assessment, movement and marine therapy aimed at extending healthspan, gently." },
    ],
    medicalExpertise: [
      "One of Europe's most complete thalassotherapy centres, with heated seawater pools and marine treatment suites",
      "Longevity medical partnership providing screenings and healthy-ageing diagnostics",
      "Nutrition and detox programmes supervised by health professionals",
      "Marine-led rather than hospital-grade - complex clinical cases are referred to partner facilities",
    ],
    accommodation:
      "Low-rise suites and apartments dispersed through the gardens, in whitewash, terracotta and Atlantic blue. Most terraces hold either the ocean or the scent of the grounds; several hold both.",
    cuisine:
      "Pescatarian-leaning Algarve cooking built on the morning's catch and the region's produce, with therapeutic menus running quietly alongside the main kitchen. The grilled fish alone justifies the coastline.",
    gallery: [
      { tone: "vilalara-algarve-a", alt: "Heated seawater thalassotherapy pool", aiPrompt: "Serene heated seawater therapy pool with hydro-massage stations, garden light through glass, calm clinical elegance, Algarve resort spa", keywords: "thalassotherapy seawater pool hydrotherapy garden light" },
      { tone: "vilalara-algarve-b", alt: "Marine algae therapy treatment", aiPrompt: "Quiet marine therapy room, algae wrap treatment on warm table, soft coastal light, therapist's care, understated luxury", keywords: "algae wrap marine therapy treatment coastal light" },
      { tone: "vilalara-algarve-c", alt: "Grilled Atlantic fish with garden produce", aiPrompt: "Simple elegant plate of grilled Atlantic fish with Algarve garden vegetables, ceramic, warm natural light, honest Mediterranean styling", keywords: "grilled fish algarve vegetables ceramic natural light" },
    ],
    experiences: [
      "Full thalassotherapy circuit in heated seawater",
      "Longevity health screening and consultation",
      "Cliff-path walk to the Senhora da Rocha chapel",
      "Sunset swim in the garden cove",
    ],
    pricingGuidance:
      "Suites from approximately €450 per night in season; five to fourteen-night thalasso and longevity programmes quoted on consultation.",
    faq: [
      { q: "What is thalassotherapy, precisely?", a: "The supervised therapeutic use of seawater, marine algae and coastal climate - heated pools, hydro-massage and wraps sequenced to aid circulation, joints, recovery and deep rest." },
      { q: "Is this a clinic or a resort?", a: "A resort with a clinic's spine. The gardens, coves and kitchens are pure Algarve pleasure; the thalasso centre and longevity programmes carry genuine therapeutic rigour." },
    ],
    related: ["six-senses-douro-valley", "villa-stephanie", "bodyholiday"],
  },
  {
    slug: "bodyholiday",
    name: "BodyHoliday Saint Lucia",
    shortName: "BodyHoliday",
    tier: "exceptional",
    country: "Saint Lucia",
    region: "Cariblue Bay, Cap Estate",
    coordinates: [14.093, -60.947],
    established: "1988",
    tagline: "Give us your body for a week, and we'll give you back your mind.",
    cardline: "The Caribbean's original wellbeing resort - a daily treatment included, always.",
    categories: ["executive-reset", "nutrition", "sleep", "detox"],
    hero: {
      tone: "bodyholiday",
      alt: "Crescent Caribbean bay with palms and a wellness resort at golden hour",
      aiPrompt:
        "Cinematic golden-hour view of a crescent Caribbean bay in northern Saint Lucia, calm turquoise water, palms leaning over pale sand, a low resort woven into tropical hillside, warm inviting light, editorial travel photography",
      keywords: "saint lucia caribbean bay palms golden hour turquoise resort",
    },
    overview: [
      "Decades before wellness became an industry, this corner of Cariblue Bay made a simple, radical promise: give us your body for a week, and we'll give you back your mind. BodyHoliday still keeps it - every guest, every day, receives a spa treatment as part of the rate, no negotiation required.",
      "Around that daily ritual runs the WellFit engine: archery to ocean swimming, spinning to sunrise tai chi, all-inclusive and entirely optional. It is wellbeing with the top button undone - energetic, sociable and unembarrassed about fun.",
    ],
    location:
      "On Cariblue Bay at Cap Estate, the green northern tip of Saint Lucia. Ninety minutes from Hewanorra International or twenty from Vigie, with the bay's calm water as the resort's front lawn.",
    whoFor:
      "For the depleted who still like people. First-time wellness travellers, solo guests (October's Solos month is a quiet institution), and executives who want movement, massage and Caribbean ease without a clinical bone in sight.",
    philosophy:
      "Wellbeing should feel like a holiday, or it will not last. BodyHoliday builds health through daily treatment, joyful movement and good company, trusting pleasure as the most sustainable protocol.",
    signaturePrograms: [
      { name: "The BodyHoliday Week", duration: "7 nights", summary: "The classic - a daily 50-minute treatment, full WellFit access and all-inclusive dining, personalised on arrival." },
      { name: "BodyScience Personalised", duration: "5-7 nights", summary: "A deeper tier - assessment-led nutrition, treatments and training built around your individual profile." },
      { name: "Quadrathlon & WellFit Intensive", duration: "7 nights", summary: "For the fit and competitive - swim, run, bike and kayak coaching woven into the resort week." },
    ],
    medicalExpertise: [
      "BodyScience clinic offering wellness assessments and personalised nutrition planning",
      "Ayurvedic practitioners and a dedicated Ayurvedic temple within the spa",
      "Large therapist team delivering the included daily treatments",
      "A wellbeing resort, not a medical facility - clinical diagnostics are limited by design",
    ],
    accommodation:
      "Rooms and suites climb the hillside garden from the beach, breezy and unfussy in white and rattan. The point here is how little time you spend in them.",
    cuisine:
      "All-inclusive across four restaurants, from raw and vegan at the I-TAL rooftop to seafood grills on the sand, with juice bars threaded through the day. Indulgence and discipline share every menu.",
    gallery: [
      { tone: "bodyholiday-a", alt: "Wellness centre colonnade above the bay", aiPrompt: "Elegant colonnaded wellness centre on a tropical hillside above a turquoise Caribbean bay, white architecture, palms, soft morning light, editorial", keywords: "wellness centre colonnade caribbean hillside white palms" },
      { tone: "bodyholiday-b", alt: "Open-air massage by the sea", aiPrompt: "Open-air massage pavilion steps from a calm Caribbean sea, white linen, dappled palm light, therapist at work, serene tropical spa", keywords: "open air massage pavilion sea palm light tropical" },
      { tone: "bodyholiday-c", alt: "Fresh Caribbean wellness plate", aiPrompt: "Colourful fresh Caribbean plate, grilled fish, tropical fruit and greens, natural light, vibrant healthy resort dining", keywords: "caribbean healthy plate fish tropical fruit fresh" },
    ],
    experiences: [
      "Your included daily spa treatment, every day",
      "Sunrise tai chi on the beach",
      "Ocean swimming and sailing off Cariblue Bay",
      "Archery and WellFit classes across the estate",
    ],
    pricingGuidance:
      "All-inclusive from approximately US$700 per person per night including daily treatment, dining and WellFit programme; suites and BodyScience upgrades quoted by season.",
    faq: [
      { q: "Is the daily spa treatment really included?", a: "It is the founding promise - one 50-minute treatment per guest per day is built into every stay, with longer and specialist therapies available beyond it." },
      { q: "Is BodyHoliday suitable for solo travellers?", a: "Famously. The communal tables, group classes and dedicated solo seasons make it one of the easiest places in the Caribbean to arrive alone." },
    ],
    related: ["bawah-reserve", "the-retreat-costa-rica", "cal-a-vie"],
  },
  {
    slug: "the-retreat-costa-rica",
    name: "The Retreat Costa Rica",
    shortName: "The Retreat",
    tier: "exceptional",
    country: "Costa Rica",
    region: "Atenas, Central Valley",
    coordinates: [9.97, -84.4],
    tagline: "A boutique sanctuary on a mountain of quartz.",
    cardline: "Diana Stobo's plant-rich vision, above Costa Rica's Central Valley.",
    categories: ["detox", "nutrition", "womens-health", "sleep"],
    hero: {
      tone: "the-retreat-costa-rica",
      alt: "White boutique retreat on a green Costa Rican mountaintop above the Central Valley",
      aiPrompt:
        "Cinematic view of an intimate white boutique wellness retreat crowning a lush green Costa Rican mountaintop, Central Valley and distant Pacific haze below, tropical gardens, soft golden light, serene editorial luxury",
      keywords: "costa rica mountaintop retreat white boutique valley tropical gardens",
    },
    overview: [
      "The Retreat sits on a mountain the locals have long held to be special - a ridge of crystal quartz above Atenas, in a valley National Geographic once ranked among the world's best climates. Founder Diana Stobo, a wellness author who rebuilt her own health through food, designed the property as the cure she had needed.",
      "The result is small, warm and intentional: a boutique hotel, a Vida Mía healing spa, and a kitchen where plant-rich cuisine is the medicine of first resort. Guests come for days and tend to change something permanent.",
    ],
    location:
      "Above the town of Atenas in Costa Rica's Central Valley, forty minutes from San José's international airport. Pacific light in the afternoons, birdsong at all hours, and the famous spring-like climate year round.",
    whoFor:
      "For those at a turning point. Women navigating transition, professionals recovering from burnout, and anyone drawn to a smaller, more personal room - the property holds few enough guests that the staff learn your story by breakfast.",
    philosophy:
      "Food is the first medicine; place is the second. Stobo's approach pairs plant-rich nourishment with the mountain's stillness, trusting small-scale care to reach what larger institutions cannot.",
    signaturePrograms: [
      { name: "Signature Wellness Journey", duration: "4-7 nights", summary: "Spa therapies, plant-rich cuisine, yoga and coaching composed into a personal arc on arrival." },
      { name: "Detox & Renewal", duration: "5-7 nights", summary: "A food-led cleanse - juices, broths and living plates - supported by bodywork and rest." },
      { name: "Women's Transformation Retreat", duration: "5-7 nights", summary: "Hormone-aware nutrition, healing therapies and guided inner work in intimate company." },
    ],
    medicalExpertise: [
      "Vida Mía healing spa with hydrotherapy circuit and energy-work practitioners",
      "Nutrition philosophy authored by founder Diana Stobo, applied kitchen-wide",
      "Visiting practitioners in massage, acupuncture and holistic therapy",
      "A holistic boutique retreat - medical diagnostics are not the offer, and are referred out when needed",
    ],
    accommodation:
      "A handful of rooms and suites in the whitewashed main house and garden wings, romantic rather than minimal - canopy beds, valley views, and verandas built for long silences.",
    cuisine:
      "Plant-rich, largely organic and quietly indulgent - Stobo's recipes lean on the valley's farms, raw preparations and slow broths, proving that cleansing food can still feel like hospitality.",
    gallery: [
      { tone: "the-retreat-costa-rica-a", alt: "Hydrotherapy pool at the Vida Mia spa", aiPrompt: "Intimate spa hydrotherapy pool in white stone, tropical garden light, orchids, serene boutique wellness, Costa Rica", keywords: "boutique spa hydrotherapy pool tropical garden white" },
      { tone: "the-retreat-costa-rica-b", alt: "Healing bodywork session", aiPrompt: "Serene healing bodywork session in a softly lit treatment room, white linen, warm hands, tropical foliage beyond the window, intimate luxury", keywords: "healing massage treatment room linen tropical intimate" },
      { tone: "the-retreat-costa-rica-c", alt: "Plant-rich Costa Rican plate", aiPrompt: "Vibrant plant-rich plate on handmade ceramic, tropical produce, edible flowers, natural side light, kinfolk food styling", keywords: "plant based plate tropical produce flowers ceramic" },
    ],
    experiences: [
      "Sunrise yoga above the Central Valley",
      "Guided meditation on the quartz ridge",
      "Plant-based cooking class with the kitchen team",
      "Waterfall and coffee-farm excursions from the mountain",
    ],
    pricingGuidance:
      "Rooms from approximately US$600 per night including plant-rich meals; multi-night wellness journeys quoted on consultation.",
    faq: [
      { q: "What is the significance of the quartz mountain?", a: "The ridge the retreat crowns is laced with crystal quartz, long considered energetically restorative - guests may take the tradition literally or simply enjoy the stillness it names." },
      { q: "Is the cuisine entirely plant-based?", a: "Plant-rich rather than dogmatic - menus centre on organic produce and living foods, with the kitchen adapting to individual needs and programmes." },
    ],
    related: ["bodyholiday", "cal-a-vie", "sha-wellness-mexico"],
  },
  {
    slug: "bawah-reserve",
    name: "Bawah Reserve",
    shortName: "Bawah",
    tier: "exceptional",
    country: "Indonesia",
    region: "Anambas Islands, South China Sea",
    coordinates: [2.52, 106.05],
    established: "2018",
    tagline: "Six islands, three lagoons, one seaplane.",
    cardline: "A private island reserve where daily spa care is simply the rhythm.",
    categories: ["detox", "sleep", "executive-reset", "nutrition"],
    hero: {
      tone: "bawah-reserve",
      alt: "Aerial of six forested private islands and turquoise lagoons in the Anambas archipelago",
      aiPrompt:
        "Aerial cinematic view of six emerald forested islands ringed by white sand and three turquoise lagoons in the remote Anambas archipelago, coral reef visible through clear water, a seaplane's shadow crossing the shallows, pristine editorial luxury",
      keywords: "anambas private islands aerial lagoon turquoise seaplane reef",
    },
    overview: [
      "Bawah is what remoteness looks like when it is done with care: six private islands and three lagoons in the Anambas archipelago, reached only by the reserve's own seaplane, built almost entirely by hand to spare the reef and forest. Anchors, jet skis and hurry are all absent by policy.",
      "Wellbeing is woven into the rate rather than sold beside it - a daily spa treatment is included for every guest, as are meals, activities and the Aura wellness centre's classes. The reserve calls it 'elevated simplicity'; guests mostly call it the reset they didn't know how to ask for.",
    ],
    location:
      "In the Anambas Islands between the Malay Peninsula and Borneo - a ferry from Singapore to Batam, then eighty minutes by private seaplane over open sea to the reserve's lagoon.",
    whoFor:
      "For those whose scarcest resource is distance. Founders and families seeking a total signal break, couples marking something, and travellers who want barefoot sustainability with genuinely high thread counts.",
    philosophy:
      "Luxury as restraint. Bawah holds that an untouched reef, a hand-built villa and an unscheduled afternoon restore more than any machine - and prices the spa into daily life so care becomes habit, not treat.",
    signaturePrograms: [
      { name: "Island Wellbeing Rhythm", duration: "4-7 nights", summary: "The included daily treatment, morning movement and lagoon time, gently sequenced by the Aura team." },
      { name: "Deep Rest & Sleep", duration: "5-7 nights", summary: "Massage, breathwork and screen-light discipline aimed at rebuilding sleep far from any network." },
      { name: "Ocean Reset", duration: "5-7 nights", summary: "Freediving breath coaching, reef swims and paddling paired with restorative bodywork." },
    ],
    medicalExpertise: [
      "Aura wellness centre with a resident team of therapists and yoga instructors",
      "Daily massage or treatment included for every guest throughout the stay",
      "Breathwork, meditation and movement faculty; visiting specialist practitioners",
      "A nature reserve, not a clinic - guests requiring medical oversight should plan accordingly",
    ],
    accommodation:
      "Overwater bungalows, beach suites and garden lodges crafted from bamboo, driftwood and recycled copper - hand-built, fan-cooled where possible, and open to the lagoon's every shade of blue.",
    cuisine:
      "All meals included, from the treehouse restaurant's Asian-accented menus to barbecues on the sand - garden-grown greens, just-caught fish and a kitchen that treats abundance and lightness as compatible.",
    gallery: [
      { tone: "bawah-reserve-a", alt: "Bamboo spa pavilion over the lagoon", aiPrompt: "Handcrafted bamboo spa pavilion above a turquoise lagoon, gauze curtains moving in sea breeze, natural materials, serene barefoot luxury, editorial", keywords: "bamboo spa pavilion lagoon overwater natural breeze" },
      { tone: "bawah-reserve-b", alt: "Massage in an open-air island treatment room", aiPrompt: "Open-air island massage in dappled jungle light, natural timber deck, therapist at work, ocean glimpsed through palms, tranquil luxury", keywords: "island massage open air jungle timber ocean" },
      { tone: "bawah-reserve-c", alt: "Just-caught fish and garden greens at the treehouse restaurant", aiPrompt: "Elegant plate of just-caught fish and island garden greens in a treehouse restaurant, warm evening light, natural styling, editorial food photography", keywords: "island cuisine fish garden greens treehouse evening" },
    ],
    experiences: [
      "Seaplane arrival across the Anambas blue",
      "Snorkelling the house reef's coral gardens",
      "Sunset paddle between the six islands",
      "Jungle hike to the reserve's highest lookout",
    ],
    pricingGuidance:
      "All-inclusive from approximately US$1,980 per night for two, covering meals, daily spa treatment and most activities; seaplane transfers from Batam charged separately.",
    faq: [
      { q: "How do I get there?", a: "Via Singapore and a short ferry to Batam, where the reserve's seaplane takes over - eighty minutes over open water to the lagoon. The journey is part of the decompression." },
      { q: "What does all-inclusive cover?", a: "Accommodation, all meals and most drinks, a daily spa treatment per guest, and the island's activities - diving, seaplane transfers and premium extras are quoted separately." },
    ],
    related: ["joali-being", "bodyholiday", "aman-kyoto"],
  },
  {
    slug: "sha-wellness-mexico",
    name: "SHA Wellness Clinic",
    shortName: "SHA Mexico",
    tier: "exceptional",
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
      { name: "Advanced Longevity", duration: "7-14 nights", summary: "Genetic, epigenetic and biomarker-led healthspan extension, SHA's most advanced protocol." },
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
    related: ["the-retreat-costa-rica", "cal-a-vie", "bodyholiday"],
  },
  {
    slug: "cal-a-vie",
    name: "Cal-a-Vie Health Spa",
    shortName: "Cal-a-Vie",
    tier: "exceptional",
    country: "United States",
    region: "Vista, Southern California",
    coordinates: [33.21, -117.22],
    established: "1986",
    tagline: "A French château estate, thirty-two guests at a time.",
    cardline: "Provence in California - five staff to every guest, and no shortcuts.",
    categories: ["nutrition", "detox", "womens-health", "executive-reset", "preventive-health"],
    hero: {
      tone: "cal-a-vie",
      alt: "French chateau-style estate amid Southern California hills and vineyards at golden hour",
      aiPrompt:
        "Cinematic golden-hour view of a French Provencal chateau estate set in rolling Southern California hills, lavender and vineyard rows, honeyed stone and terracotta roofs, warm evening light, timeless editorial luxury",
      keywords: "french chateau california hills lavender vineyard golden hour estate",
    },
    overview: [
      "Cal-a-Vie is what happens when a family transplants Provence to a private Southern California valley and refuses to compromise on anything: honeyed stone, genuine European antiques, a centuries-old chapel shipped from France, and never more than thirty-two guests on two hundred acres.",
      "Behind the romance runs one of America's most disciplined spa regimes. A staff ratio of roughly five to one means fitness, treatments and nutrition are delivered with near-private attention - mornings earn their indulgent afternoons.",
    ],
    location:
      "In a private valley at Vista, north San Diego County, forty minutes from San Diego's airport. Coastal light, chaparral hills and a microclimate that flatters both vines and early hikes.",
    whoFor:
      "For those who want transformation with a concierge's precision. Guests marking a milestone, resetting habits or simply exhausted by decision-making - the estate's small census and vast staff remove every excuse and most of the friction.",
    philosophy:
      "Intimacy is the method. With thirty-two guests and a village of practitioners, Cal-a-Vie individualises everything - the workout, the plate, the treatment - until change stops feeling like effort.",
    signaturePrograms: [
      { name: "The Classic Week", duration: "7 nights", summary: "The full estate rhythm - morning hikes, tailored fitness, daily spa therapies and gourmet spa cuisine, all-inclusive." },
      { name: "Reset in Brief", duration: "3-4 nights", summary: "The Cal-a-Vie formula compressed for tight calendars, without diluting the attention." },
      { name: "Fitness & Nutrition Immersion", duration: "7 nights", summary: "Assessment-led training and dietitian-guided eating, designed to travel home with you." },
    ],
    medicalExpertise: [
      "Fitness assessments, body-composition analysis and personal training faculty",
      "Registered dietitian consultations and take-home nutrition planning",
      "Extensive therapeutic spa menu delivered by a large resident team",
      "A destination spa rather than a medical clinic - physician services are referred out",
    ],
    accommodation:
      "Thirty-two Provencal villas and suites dressed in French antiques, toile and garden views - single-occupancy friendly by design, with the hush of a private hamlet.",
    cuisine:
      "Gourmet spa cuisine from the estate's gardens and vineyard - calorie-aware, portion-honest and plated like the south of France. Cooking demonstrations send the method home.",
    gallery: [
      { tone: "cal-a-vie-a", alt: "Provencal spa interior with antiques", aiPrompt: "Elegant Provencal spa interior, honeyed stone, French antiques, soft natural light through shuttered windows, refined intimate luxury", keywords: "provencal spa interior antiques stone soft light" },
      { tone: "cal-a-vie-b", alt: "One-to-one fitness session on the estate", aiPrompt: "Private one-to-one fitness training on a chateau estate terrace, morning California light, rolling hills beyond, focused and serene", keywords: "personal training terrace estate morning hills" },
      { tone: "cal-a-vie-c", alt: "Gourmet spa cuisine plate", aiPrompt: "Refined gourmet spa cuisine plate, garden vegetables and herbs, French plating on fine ceramic, natural light, editorial food photography", keywords: "gourmet spa cuisine french plating garden herbs" },
    ],
    experiences: [
      "Sunrise hikes through the estate's private hills",
      "Daily spa therapies from an extensive menu",
      "Wine tasting from the estate vineyard",
      "Evening lectures and cooking demonstrations",
    ],
    pricingGuidance:
      "All-inclusive stays of three, four or seven nights; seven nights from approximately US$12,000 per person covering accommodation, fitness, treatments and cuisine.",
    faq: [
      { q: "How individual is the programme?", a: "With at most thirty-two guests and roughly five staff to each, schedules, training and treatments are composed around you daily - closer to private care than a resort timetable." },
      { q: "Is Cal-a-Vie suitable for solo guests?", a: "Ideally so. Many guests come alone; the shared tables, small census and single-friendly villas make solitude social exactly when you want it to be." },
    ],
    related: ["the-retreat-costa-rica", "bodyholiday", "sha-wellness-mexico"],
  },
  {
    slug: "aman-kyoto",
    name: "Aman Kyoto",
    shortName: "Aman Kyoto",
    tier: "exceptional",
    country: "Japan",
    region: "Takagamine, Kyoto",
    coordinates: [35.052, 135.729],
    established: "2019",
    tagline: "A secret garden, kept by the forest.",
    cardline: "Onsen bathing and profound quiet, minutes from the Golden Pavilion.",
    categories: ["sleep", "executive-reset", "nutrition"],
    hero: {
      tone: "aman-kyoto",
      alt: "Minimalist pavilions in a moss and maple forest garden in northern Kyoto",
      aiPrompt:
        "Cinematic view of minimalist dark-timber pavilions set in a hidden moss garden among cedar and maple forest, northern Kyoto, stone pathways glistening after rain, soft grey-green light, profound Japanese stillness, editorial luxury",
      keywords: "kyoto forest garden moss pavilion maple stone path minimal japan",
    },
    overview: [
      "In the forested hills of Takagamine, near the Golden Pavilion of Kinkaku-ji, lies a garden that waited decades for a purpose - stone paths, moss and maple assembled by a textile magnate, never built upon. Aman set its pavilions into this secret clearing so lightly they seem to have grown there.",
      "The offer is Kyoto's rarest commodity: silence. Onsen bathing in the Aman Spa, kaiseki composed from the hills' own produce, and a garden that turns a walk into a practice. Nothing here raises its voice, including the architecture.",
    ],
    location:
      "In Takagamine at Kyoto's northern edge, wrapped in forest yet twenty minutes from the city's heart and a short walk from Kinkaku-ji. Arrival is by lantern-lit path; the city simply falls away.",
    whoFor:
      "For those for whom quiet is the treatment. Executives between continents, couples seeking Japan's aesthetic depth without its crowds, and travellers who understand that a hot spring, a garden and an early night can outperform most protocols.",
    philosophy:
      "Restoration through subtraction. Aman Kyoto pares the stay to forest, water, food and rest, trusting the Japanese arts of bathing and seasonality to do quietly what programmes elsewhere announce.",
    signaturePrograms: [
      { name: "Onsen & Forest Ritual", duration: "2-4 nights", summary: "Daily hot-spring bathing, forest walks and Aman Spa bodywork arranged around the garden's rhythm." },
      { name: "Kyoto Mindfulness Journey", duration: "3-5 nights", summary: "Zazen meditation with temple monks, tea ceremony and spa therapy in private sequence." },
      { name: "Seasonal Kaiseki Immersion", duration: "2-3 nights", summary: "The kitchen's seasonal discipline as a wellness practice - eating precisely, slowly and well." },
    ],
    medicalExpertise: [
      "Aman Spa with natural hot-spring onsen bathing and signature bodywork",
      "Therapists trained in Japanese and Aman treatment traditions",
      "Meditation, forest-bathing and movement guides on request",
      "A sanctuary rather than a clinic - no medical diagnostics are offered on site",
    ],
    accommodation:
      "Rooms and pavilions in dark timber and washi light, each a modern ryokan essay - tokonoma alcoves, deep tubs and windows composed like scrolls onto moss and maple.",
    cuisine:
      "Kaiseki that answers the hills season by season - mountain vegetables, charcoal, dashi of real depth - alongside a lighter living cuisine. Breakfast alone rewards the early bath.",
    gallery: [
      { tone: "aman-kyoto-a", alt: "Onsen bath in the forest spa", aiPrompt: "Steaming natural onsen bath in dark stone, floor-to-ceiling glass onto cedar forest, rising mist, contemplative Japanese luxury, editorial", keywords: "onsen hot spring bath stone forest steam japan" },
      { tone: "aman-kyoto-b", alt: "Bodywork in a tatami treatment room", aiPrompt: "Serene Japanese treatment room with tatami and washi light, therapist performing quiet bodywork, garden glimpsed beyond, understated luxury", keywords: "japanese treatment room tatami washi bodywork calm" },
      { tone: "aman-kyoto-c", alt: "Seasonal kaiseki course", aiPrompt: "Exquisite seasonal kaiseki course on lacquer and ceramic, maple leaf garnish, soft natural light, precise Japanese food styling, editorial", keywords: "kaiseki japanese cuisine lacquer ceramic seasonal" },
    ],
    experiences: [
      "Dawn visit to Kinkaku-ji before the crowds",
      "Private onsen bathing ritual",
      "Zazen meditation with a temple monk",
      "Forest walk through the hidden garden",
    ],
    pricingGuidance:
      "Rooms from approximately US$1,800 per night; spa journeys, private temple experiences and kaiseki dining quoted separately.",
    faq: [
      { q: "Is Aman Kyoto a wellness resort?", a: "It is a sanctuary with a serious spa - onsen bathing, bodywork and meditation woven into a place built for stillness, rather than a programme-driven clinic." },
      { q: "How close is the city?", a: "Twenty minutes to central Kyoto and a short walk to Kinkaku-ji - near enough for temples at dawn, far enough that the forest keeps the evenings." },
    ],
    related: ["bawah-reserve", "six-senses-douro-valley", "burgenstock"],
  },
];
