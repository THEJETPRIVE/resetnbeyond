/**
 * CURATED COLLECTION - ten houses of character and depth.
 *
 * Written fresh in the house editorial register (Monocle / Kinfolk),
 * informed by each property's real disciplines but never lifted from
 * their marketing. `tone` seeds the placeholder art-direction; image
 * fields carry the AI prompt + library keywords for the asset team.
 */

import type { Resort } from "../schema";

export const curatedResorts: Resort[] = [
  {
    slug: "revivo",
    name: "REVĪVŌ Wellness Resort",
    shortName: "REVĪVŌ",
    tier: "curated",
    country: "Indonesia",
    region: "Nusa Dua, Bali",
    coordinates: [-8.79, 115.22],
    established: "2018",
    tagline: "Come back to life, quietly, in the Nusa Dua hills.",
    cardline: "Boutique Balinese wellness for the mind that will not switch off.",
    categories: ["sleep", "detox", "nutrition", "executive-reset"],
    hero: {
      tone: "revivo",
      alt: "Teak pavilions of a boutique wellness resort in the forested hills of Nusa Dua at dusk",
      aiPrompt:
        "Cinematic dusk view of an intimate Balinese wellness resort, reclaimed teak pavilions among tropical forest in the Nusa Dua hills, warm lantern light, calm pool reflecting sky, quiet luxury, editorial photography, 35mm",
      keywords: "bali teak pavilion forest dusk boutique wellness resort",
    },
    overview: [
      "REVĪVŌ takes its name from the Latin for 'I come back to life', and runs the idea at a deliberately small scale - a boutique estate folded into three hectares of forest above Nusa Dua, far in spirit from the beach-club coast below. The concern here is the modern nervous system: breath, sleep and emotional balance, addressed with unusual patience.",
      "With only a handful of suites, the resort works at the tempo of a private house. Programmes are shaped in conversation rather than assigned from a menu, and the days move between breathwork, movement and treatment with room left, pointedly, for nothing at all.",
    ],
    location:
      "In the wooded hills of the Bukit Peninsula above Nusa Dua, some forty minutes from Bali's international airport. Close enough for an easy arrival; high and green enough to feel like another island entirely.",
    whoFor:
      "For those whose bodies arrived on holiday weeks before their minds. Founders and professionals carrying anxiety, broken sleep or emotional fatigue, who want intimate scale and real attention rather than the machinery of a large resort.",
    philosophy:
      "The mind leads and the body follows. REVĪVŌ works on breath, sleep and emotional balance first, trusting that vitality returns once the nervous system is persuaded to stand down.",
    signaturePrograms: [
      {
        name: "Sleep Well",
        duration: "4-7 nights",
        summary: "A rebuilding of sleep architecture through breathwork, aromatherapy, nutrition and evening ritual, paced across the week.",
      },
      {
        name: "Emotional Balance",
        duration: "5-7 nights",
        summary: "One-to-one coaching, meditation and bodywork for stress, anxiety and the quieter forms of burnout.",
      },
      {
        name: "Detox & Reset",
        duration: "5-7 nights",
        summary: "A gentle purification of diet and habit, supported by the spa's herbal and water therapies.",
      },
    ],
    medicalExpertise: [
      "Resident wellness consultants who shape each programme individually",
      "Breathwork, meditation and pranayama faculty",
      "Balinese and international bodywork therapists in the REMISSIŌ spa",
      "Nutrition guidance built around anti-inflammatory, low-sugar principles",
    ],
    accommodation:
      "A small collection of suites and pool villas in reclaimed teak and volcanic stone, cooled by forest shade. Interiors are warm rather than minimal - the register of a well-kept Balinese home, not a clinic.",
    cuisine:
      "Dining centres on the Botanist restaurant and its low-sugar, largely organic kitchen - Mediterranean and Indonesian ideas cooked to your programme, with mocktails treated as seriously as any wine list.",
    gallery: [
      {
        tone: "revivo-a",
        alt: "Teak spa relaxation lounge at REVĪVŌ",
        aiPrompt: "Intimate spa relaxation lounge in reclaimed teak, linen daybeds, soft tropical light through shutters, Balinese boutique wellness, editorial",
        keywords: "teak spa lounge linen tropical light boutique",
      },
      {
        tone: "revivo-b",
        alt: "Guided breathwork session in a forest pavilion",
        aiPrompt: "Guided breathwork session in an open forest pavilion, single guest and practitioner, morning light through palms, calm and focused, editorial",
        keywords: "breathwork pavilion forest morning bali wellness",
      },
      {
        tone: "revivo-c",
        alt: "Plant-forward plate at the Botanist restaurant",
        aiPrompt: "Elegant low-sugar plant-forward plate on handmade ceramic, botanical garnish, natural light, kinfolk food styling",
        keywords: "healthy plate ceramic botanical natural light",
      },
    ],
    experiences: [
      "Sunrise breathwork in the forest pavilion",
      "Sound-bowl meditation before sleep",
      "Balinese massage in the REMISSIŌ spa",
      "Mocktail and nutrition session at the Botanist",
    ],
    pricingGuidance:
      "Suite residencies with wellness programmes from approximately US$700 per night, minimum three nights; longer retreat programmes quoted on consultation.",
    faq: [
      {
        q: "How small is REVĪVŌ, really?",
        a: "Intentionally so - a boutique estate of suites and villas measured in the teens, which is precisely what allows programmes to be shaped person by person.",
      },
      {
        q: "Is this a party-free zone?",
        a: "Largely, and by design. The atmosphere is quiet and adult; alcohol exists but the bar's real craft goes into its botanical mocktails.",
      },
    ],
    related: ["fivelements", "zulal", "palmaia"],
  },
  {
    slug: "fivelements",
    name: "Fivelements Retreat Bali",
    shortName: "Fivelements",
    tier: "curated",
    country: "Indonesia",
    region: "Mambal, Ayung River Valley",
    coordinates: [-8.578, 115.207],
    established: "2010",
    tagline: "Balinese healing, practised at the river's own pace.",
    cardline: "Sacred arts and pioneering plant-based cuisine on the Ayung.",
    categories: ["detox", "nutrition", "sleep"],
    hero: {
      tone: "fivelements",
      alt: "Bamboo pavilions above the Ayung River wrapped in jungle at dawn",
      aiPrompt:
        "Cinematic dawn over sculptural bamboo pavilions on the banks of the Ayung River, Bali, jungle mist, river light, sacred and serene atmosphere, organic architecture, editorial photography",
      keywords: "bali bamboo architecture ayung river jungle mist retreat",
    },
    overview: [
      "Fivelements was built as an act of devotion as much as hospitality - a riverside village of sculptural bamboo on the Ayung, where Balinese-Hindu healing traditions are practised by healers born to them rather than trained for a spa menu.",
      "It is also where plant-based cuisine in Bali came of age. Long before the island's raw-food wave, the kitchen here was proving that a healing diet could hold its own as gastronomy. The combination - sacred arts, river, table - remains singular.",
    ],
    location:
      "On a quiet bend of the Ayung River at Mambal, between the rice terraces and Ubud's cultural heartland. Roughly an hour from the airport, and several centuries from its atmosphere.",
    whoFor:
      "For those drawn to authenticity over amenity. Guests seeking genuine Balinese healing, a plant-based reset or simple spiritual quiet, who prefer bamboo and river sound to marble and machinery.",
    philosophy:
      "Healing in harmony with nature, guided by the Balinese-Hindu principle of balance between people, nature and spirit. The healers lead; the resort is built around their work.",
    signaturePrograms: [
      {
        name: "Panca Mahabhuta Journey",
        duration: "3-7 nights",
        summary: "A layered immersion in the five elements through Balinese healing rituals, water blessing and sacred movement.",
      },
      {
        name: "Cuisine for Life",
        duration: "5-7 nights",
        summary: "A plant-based nutritional reset built around the retreat's pioneering living-foods kitchen, with hands-on learning.",
      },
      {
        name: "Tri Kaya Parisudha Retreat",
        duration: "5-7 nights",
        summary: "Aligning thought, speech and action through meditation, mentoring and the sacred arts.",
      },
    ],
    medicalExpertise: [
      "Traditional Balinese healers practising inherited lineages of energy and touch",
      "Water-blessing and fire-ceremony rituals led by local priests",
      "Sacred-arts faculty spanning movement, meditation and sound",
      "Plant-based nutrition team with deep raw and living-foods expertise",
    ],
    accommodation:
      "Riverside suites and villas of bamboo, thatch and stone, open to the sound of the Ayung. Rooms are romantic and elemental - canopied beds, outdoor baths, no urgency anywhere.",
    cuisine:
      "The Sakti Dining Room serves plant-based tasting menus that helped define the genre - raw and gently cooked, drawn from Balinese gardens, and plated with genuine ambition.",
    gallery: [
      {
        tone: "fivelements-a",
        alt: "Sculptural bamboo dining pavilion above the river",
        aiPrompt: "Soaring sculptural bamboo dining pavilion above a jungle river, dappled light, organic architecture, serene luxury retreat, editorial",
        keywords: "bamboo pavilion dining river jungle organic architecture",
      },
      {
        tone: "fivelements-b",
        alt: "Balinese water blessing ritual",
        aiPrompt: "Balinese water blessing ritual beside the Ayung River, healer pouring water, frangipani, incense smoke, reverent soft light, editorial",
        keywords: "balinese water blessing ritual healer frangipani",
      },
      {
        tone: "fivelements-c",
        alt: "Plant-based tasting course at Sakti Dining Room",
        aiPrompt: "Refined plant-based tasting course, raw food artistry, edible flowers, handmade ceramic, natural jungle light, kinfolk styling",
        keywords: "plant based tasting raw food ceramic flowers",
      },
    ],
    experiences: [
      "Water blessing ceremony on the Ayung",
      "Session with a traditional Balinese healer",
      "Sacred dance and movement practice",
      "Living-foods masterclass in the Sakti kitchen",
    ],
    pricingGuidance:
      "Riverside suites from approximately US$450 per night; healing retreat packages inclusive of rituals and plant-based dining quoted on consultation.",
    faq: [
      {
        q: "Are the healers authentic?",
        a: "Yes - this is the retreat's founding premise. Sessions are led by Balinese healers practising inherited traditions, and the programme is built around their guidance rather than a fixed spa menu.",
      },
      {
        q: "Is all the food plant-based?",
        a: "The kitchen is proudly plant-based and has been since opening; most guests find the tasting menus reason enough to come.",
      },
    ],
    related: ["revivo", "palmaia", "chable-yucatan"],
  },
  {
    slug: "zulal",
    name: "Zulal Wellness Resort by Chiva-Som",
    shortName: "Zulal",
    tier: "curated",
    country: "Qatar",
    region: "Khasooma, Northern Qatar",
    coordinates: [26.13, 51.17],
    established: "2022",
    tagline: "Arabian healing traditions, given a modern address.",
    cardline: "The Middle East's largest wellness destination, run on Chiva-Som's method.",
    categories: ["medical-wellness", "preventive-health", "detox", "nutrition", "womens-health"],
    hero: {
      tone: "zulal",
      alt: "Low sand-toned wellness resort on a calm Arabian shoreline at dusk",
      aiPrompt:
        "Cinematic dusk view of a low-slung sand-toned wellness resort on a calm Arabian Gulf shoreline, northern Qatar, lagoon reflections, contemporary Arabic architecture with mashrabiya screens, warm desert light, editorial",
      keywords: "qatar arabian gulf resort desert architecture lagoon dusk",
    },
    overview: [
      "Zulal - the word means pure, clear water - is the largest wellness destination in the Middle East and the first to place Traditional Arabic and Islamic Medicine at its centre. It occupies the remote northern tip of Qatar, where the desert meets a shallow, glassy Gulf.",
      "The operator is Chiva-Som, which brings three decades of Hua Hin discipline to an entirely new canon: herbal pharmacology, cupping, dietetics and the contemplative practices of the region, delivered across two distinct worlds - Serenity, for adults, and Discovery, a dedicated wing where families pursue wellness together.",
    ],
    location:
      "At Khasooma on Qatar's northern tip, roughly ninety minutes' drive from Doha's Hamad International. Flat desert, mangrove shallows and a horizon of sea - a landscape of almost monastic emptiness.",
    whoFor:
      "For guests curious about a healing tradition the wellness world has largely overlooked - and for families, who are welcomed here as participants rather than tolerated as luggage. Equally suited to a serious adult reset in the Serenity wing.",
    philosophy:
      "Traditional Arabic and Islamic Medicine, harmonised with Chiva-Som's integrative method - the conviction that a centuries-old regional canon of herbs, diet and contemplation deserves the same rigour as any Eastern or Western school.",
    signaturePrograms: [
      {
        name: "TAIM Discovery",
        duration: "5-7 nights",
        summary: "An introduction to Traditional Arabic and Islamic Medicine - herbal therapies, cupping and dietetics prescribed after full consultation.",
      },
      {
        name: "Family Wellness Journey",
        duration: "4-7 nights",
        summary: "Parallel programmes for parents, teens and children in the Discovery wing, converging around shared meals and activities.",
      },
      {
        name: "Detox & Purification",
        duration: "7-10 nights",
        summary: "A supervised cleanse pairing Chiva-Som's protocols with TAIM herbal and hydrotherapy traditions.",
      },
    ],
    medicalExpertise: [
      "Physician-led health and wellness consultations on the Chiva-Som model",
      "Traditional Arabic and Islamic Medicine practitioners and herbal dispensary",
      "Hijama (cupping) and regional therapeutic bodywork",
      "Dedicated family-health programming with child and teen specialists",
    ],
    accommodation:
      "Rooms, suites and villas in a contemporary Arabic idiom - sand-toned stone, mashrabiya shade, private terraces onto lagoon or Gulf. Serenity and Discovery keep their own registers: hushed for adults, warmer and livelier for families.",
    cuisine:
      "Wellness cuisine drawing on Middle Eastern foodways - dates, grains, herbs and Gulf seafood - calibrated to each programme by the nutrition team, and proof that a therapeutic table can taste of a place.",
    gallery: [
      {
        tone: "zulal-a",
        alt: "Shaded courtyard pool with mashrabiya screens",
        aiPrompt: "Serene courtyard pool shaded by contemporary mashrabiya screens, sand-toned stone, still water, Arabian light, quiet luxury wellness, editorial",
        keywords: "mashrabiya courtyard pool arabic architecture serene",
      },
      {
        tone: "zulal-b",
        alt: "Traditional Arabic herbal therapy consultation",
        aiPrompt: "Traditional Arabic herbal medicine consultation, apothecary jars of herbs and dates, practitioner and guest, warm low light, sense of heritage and care, editorial",
        keywords: "arabic herbal medicine apothecary consultation heritage",
      },
      {
        tone: "zulal-c",
        alt: "Middle Eastern wellness cuisine plate",
        aiPrompt: "Elegant Middle Eastern wellness plate, grains, herbs, dates and Gulf seafood, fine ceramic, natural light, refined healthy gastronomy",
        keywords: "middle eastern healthy cuisine dates grains plating",
      },
    ],
    experiences: [
      "TAIM consultation and herbal prescription",
      "Hammam and hydrotherapy circuit",
      "Kayaking through the northern mangroves",
      "Desert stargazing meditation",
    ],
    pricingGuidance:
      "Wellness residencies from approximately US$900 per night inclusive of consultation, daily treatments and full-board cuisine; family programmes in the Discovery wing quoted on consultation.",
    faq: [
      {
        q: "What is Traditional Arabic and Islamic Medicine?",
        a: "A centuries-old regional canon spanning herbal pharmacology, cupping, dietetics and contemplative practice. Zulal is the first destination to organise a full wellness resort around it, under Chiva-Som's clinical stewardship.",
      },
      {
        q: "Can I bring children?",
        a: "Yes - uniquely so. The Discovery wing is built for family wellness, with genuine programming for children and teens, while Serenity remains an adults-only sanctuary.",
      },
    ],
    related: ["chiva-som", "revivo", "canyon-ranch"],
  },
  {
    slug: "chable-yucatan",
    name: "Chablé Yucatán",
    shortName: "Chablé",
    tier: "curated",
    country: "Mexico",
    region: "Chocholá, Yucatán",
    coordinates: [20.742, -89.818],
    established: "2016",
    tagline: "A hacienda restored, a cenote at its heart.",
    cardline: "Mayan healing on a nineteenth-century estate near Mérida.",
    categories: ["detox", "executive-reset", "nutrition", "sleep"],
    hero: {
      tone: "chable-yucatan",
      alt: "Restored hacienda facade rising from Yucatán jungle in golden light",
      aiPrompt:
        "Cinematic golden-hour view of a restored 19th-century Yucatán hacienda, weathered pastel facade, tropical gardens and jungle, romantic heritage estate turned wellness resort, editorial photography",
      keywords: "yucatan hacienda heritage facade jungle golden hour",
    },
    overview: [
      "Chablé is a nineteenth-century henequen hacienda outside Mérida, returned to life as one of the Americas' most quietly assured wellness estates. Its centrepiece is not a lobby but a cenote - the spa is arranged around the sacred sinkhole, and Mayan healing runs through everything the house does.",
      "The register is heritage rather than clinic: crumbling walls left honest, casitas hidden in jungle gardens, and a cellar devoted to agave spirits that treats mezcal with a librarian's seriousness. Wellness here is woven into a place, not installed in one.",
    ],
    location:
      "At Chocholá, some forty minutes from Mérida and its airport, on the flat, forested limestone shelf of the Yucatán. Cenotes below, colonial history above, and the Gulf coast within an easy drive.",
    whoFor:
      "For those who want their reset wrapped in atmosphere - couples and solo travellers drawn to Mayan tradition, cenote water and hacienda romance, without giving up a serious spa or a serious table.",
    philosophy:
      "Healing drawn from the land's own tradition. Chablé lets Mayan cosmology - water, plants, ceremony - guide a spa of genuine sophistication, on the belief that place itself is therapeutic.",
    signaturePrograms: [
      {
        name: "Mayan Healing Journey",
        duration: "3-7 nights",
        summary: "Ceremonies and treatments guided by a Mayan shaman and the spa team, sequenced around the cenote's waters.",
      },
      {
        name: "Digital Detox & Rest",
        duration: "4-7 nights",
        summary: "Sleep rituals, temazcal, massage and garden time for the chronically connected.",
      },
      {
        name: "Nourish & Renew",
        duration: "5-7 nights",
        summary: "A nutrition-led renewal built on the estate's Mayan garden and plant-rich Yucatecan kitchen.",
      },
    ],
    medicalExpertise: [
      "Resident Mayan healer (J'men) leading ceremony and consultation",
      "Cenote-side spa with water-based and herbal therapies",
      "Temazcal sweat-lodge rituals conducted traditionally",
      "Nutrition guidance rooted in the estate's own Mayan garden",
    ],
    accommodation:
      "Freestanding casitas and villas threaded through jungle gardens, each with private pool - contemporary glass pavilions set against the hacienda's weathered stone. The presidential villa keeps its own cenote-fed atmosphere of seclusion.",
    cuisine:
      "Yucatecan cooking of real pedigree - garden-driven tasting menus in the estate's showpiece restaurant, village-style dishes elsewhere, and an agave library of tequila and mezcal that rewards slow study.",
    gallery: [
      {
        tone: "chable-yucatan-a",
        alt: "Spa pavilion beside the cenote",
        aiPrompt: "Spa pavilion built around a natural cenote, turquoise water in limestone, hanging vines, shaft of light, sacred serene atmosphere, editorial luxury",
        keywords: "cenote spa limestone turquoise vines light",
      },
      {
        tone: "chable-yucatan-b",
        alt: "Temazcal ceremony at dusk",
        aiPrompt: "Traditional temazcal sweat lodge ceremony at dusk, dome structure, smoke and firelight, Mayan ritual, reverent editorial photography",
        keywords: "temazcal ceremony mayan ritual dusk fire",
      },
      {
        tone: "chable-yucatan-c",
        alt: "Yucatecan tasting course with garden herbs",
        aiPrompt: "Refined Yucatecan tasting course with garden herbs and heirloom maize, handmade ceramic, natural light, heritage gastronomy, kinfolk styling",
        keywords: "yucatecan cuisine maize herbs ceramic tasting",
      },
    ],
    experiences: [
      "Cenote blessing ceremony with the resident healer",
      "Temazcal ritual under the stars",
      "Guided tasting in the agave library",
      "Dawn walk through the Mayan medicinal garden",
    ],
    pricingGuidance:
      "Casitas from approximately US$1,000 per night on a room basis; spa journeys and multi-night healing programmes quoted on consultation.",
    faq: [
      {
        q: "Is the cenote open to guests?",
        a: "The cenote is the spa's sacred centrepiece and is treated accordingly - experienced through ceremonies and guided rituals rather than casual swimming.",
      },
      {
        q: "Is Chablé a dedicated wellness resort?",
        a: "It is a heritage estate with a wellness soul - the spa and Mayan programming are central, but the hacienda also rewards guests who simply come for beauty, food and quiet.",
      },
    ],
    related: ["palmaia", "amangiri", "fivelements"],
  },
  {
    slug: "palmaia",
    name: "Palmaïa The House of AïA",
    shortName: "Palmaïa",
    tier: "curated",
    country: "Mexico",
    region: "Playa del Carmen, Riviera Maya",
    coordinates: [20.599, -87.093],
    established: "2019",
    tagline: "A wellness enclave where the jungle meets the Caribbean.",
    cardline: "Ceremony, plant-forward cuisine and healing arts on the Riviera Maya.",
    categories: ["detox", "nutrition", "sleep", "womens-health"],
    hero: {
      tone: "palmaia",
      alt: "Palm-fringed beachfront wellness enclave on the Riviera Maya at first light",
      aiPrompt:
        "Cinematic first-light view of a serene beachfront wellness enclave on the Riviera Maya, white sand, dense palm jungle behind low contemporary architecture, calm turquoise Caribbean, spiritual and unhurried, editorial",
      keywords: "riviera maya beach palms jungle wellness resort dawn",
    },
    overview: [
      "Palmaïa calls itself the House of AïA, and behaves less like a resort than a gathering place for the healing arts. On a stretch of Riviera Maya beach backed by jungle, it layers ceremony, movement and ritual over the architecture of an all-inclusive - and quietly subverts the genre from within.",
      "The kitchen is plant-forward as a founding conviction, with vegan menus written first and everything else in support. Days are shaped by a changing rhythm of sound journeys, cacao ceremonies and forest rituals led by the house's own healers - taken as deeply, or as lightly, as each guest wishes.",
    ],
    location:
      "On the beach at the southern edge of Playa del Carmen, under an hour from Cancún International. The jungle presses close behind; the Caribbean opens ahead; Tulum's energy is nearby without its crowds.",
    whoFor:
      "For the spiritually curious who still want warm water and a good bed - guests drawn to ceremony and healing arts, plant-based eaters tired of being an afterthought, and travellers wanting a soft entry into ritual without a monastic setting.",
    philosophy:
      "Wellness as ceremony rather than schedule. Palmaïa's healers - its 'architects of life' - hold a daily rhythm of ritual and movement, on the belief that transformation begins with participation, not prescription.",
    signaturePrograms: [
      {
        name: "Rituals of AïA",
        duration: "3-7 nights",
        summary: "A guest-shaped journey through the house's ceremonies - cacao, sound, fire and forest - guided by resident healers.",
      },
      {
        name: "Plant-Based Reset",
        duration: "5-7 nights",
        summary: "A nutritional renewal built on the resort's vegan-first kitchens, with coaching to carry the habit home.",
      },
      {
        name: "Jungle Spa Immersion",
        duration: "4-7 nights",
        summary: "Daily bodywork and water therapy in the jungle spa, paced with meditation and rest.",
      },
    ],
    medicalExpertise: [
      "Resident healers and ceremony leaders spanning sound, breath and ritual",
      "Jungle spa with Mayan-influenced bodywork and hydrotherapy",
      "Plant-based nutrition team writing vegan menus as the house standard",
      "Movement and meditation faculty with daily open practice",
    ],
    accommodation:
      "Oceanfront and jungle-side suites in warm timber and stone, many with plunge pools and swim-up terraces. The mood is barefoot and unhurried - incense at turndown rather than chocolates.",
    cuisine:
      "Several kitchens, one conviction: plant-forward first. Vegan tasting menus lead the offer, with seafood and other options alongside - an inversion of the usual resort hierarchy, executed with genuine craft.",
    gallery: [
      {
        tone: "palmaia-a",
        alt: "Jungle spa treatment suite",
        aiPrompt: "Jungle spa treatment suite open to dense tropical foliage, stone tub, dappled light, incense smoke, serene ritual atmosphere, editorial luxury",
        keywords: "jungle spa treatment stone tub foliage light",
      },
      {
        tone: "palmaia-b",
        alt: "Cacao ceremony on the beach at dusk",
        aiPrompt: "Cacao ceremony circle on a Caribbean beach at dusk, healer pouring cacao, candles and palms, warm reverent light, editorial",
        keywords: "cacao ceremony beach dusk ritual candles",
      },
      {
        tone: "palmaia-c",
        alt: "Vegan tasting dish with jungle botanicals",
        aiPrompt: "Artful vegan tasting dish with jungle botanicals and edible flowers, dark handmade ceramic, natural light, refined plant-based gastronomy",
        keywords: "vegan tasting dish botanicals ceramic refined",
      },
    ],
    experiences: [
      "Cacao ceremony at dusk",
      "Sound-healing journey in the jungle dome",
      "Sunrise beach meditation and movement",
      "Plant-based cooking session with the house chefs",
    ],
    pricingGuidance:
      "All-inclusive residencies from approximately US$900 per night for two, with healing-arts programming included; private ceremonies and extended programmes quoted on consultation.",
    faq: [
      {
        q: "Is the ceremony programme obligatory?",
        a: "Nothing is. The daily rhythm of rituals is open to all and pressed on no one - many guests begin as observers and end the week as participants.",
      },
      {
        q: "Must I eat vegan?",
        a: "No, though you may leave wanting to. Plant-based menus lead every kitchen, with seafood and other choices served alongside without fuss.",
      },
    ],
    related: ["chable-yucatan", "fivelements", "revivo"],
  },
  {
    slug: "amangiri",
    name: "Amangiri",
    shortName: "Amangiri",
    tier: "curated",
    country: "United States",
    region: "Canyon Point, Utah",
    coordinates: [37.02, -111.57],
    established: "2009",
    tagline: "Silence, rendered in stone and desert light.",
    cardline: "Aman's desert masterpiece - stillness as the ultimate therapy.",
    categories: ["executive-reset", "sleep", "preventive-health"],
    hero: {
      tone: "amangiri",
      alt: "Concrete pavilions of a desert resort dissolving into Utah mesas at dusk",
      aiPrompt:
        "Cinematic dusk view of minimalist concrete pavilions merging into a vast Utah desert of mesas and slot canyons, long shadows, apricot light on sandstone, monumental stillness, architectural editorial photography",
      keywords: "utah desert mesa concrete architecture dusk minimal aman",
    },
    overview: [
      "Amangiri is what happens when architecture stops competing with landscape and starts deferring to it. Poured-concrete pavilions the colour of the surrounding sandstone sit within six hundred acres of Utah desert, facing mesas that have not changed expression in millions of years.",
      "The wellness here is elemental rather than programmatic: an Aman Spa built around water, sage and desert minerals, days measured by canyon light, and a silence so complete it functions as treatment. For the over-scheduled, it is the rarest prescription on this list.",
    ],
    location:
      "At Canyon Point in southern Utah, near Lake Powell and the Arizona line - a landscape of slot canyons, buttes and staggering emptiness. Reached via Page, Arizona, itself a short flight from Phoenix or Las Vegas.",
    whoFor:
      "For those whose calendars have metastasised. Principals, founders and creative minds who need not a programme but an absence - of noise, of demands, of anything to optimise. Also, unapologetically, for lovers of great architecture.",
    philosophy:
      "The desert does the work. Amangiri strips away stimulus until what remains is scale, light and breath - trusting that a nervous system placed before deep time will recalibrate itself.",
    signaturePrograms: [
      {
        name: "Desert Restoration",
        duration: "3-5 nights",
        summary: "Aman Spa water rituals, grounding bodywork and guided canyon time, arranged around deliberate emptiness.",
      },
      {
        name: "Sleep in the Silence",
        duration: "4-7 nights",
        summary: "Circadian reset through desert light exposure, evening rituals and the property's near-total quiet.",
      },
      {
        name: "Body & Canyon",
        duration: "4-7 nights",
        summary: "Via ferrata climbs, slot-canyon hikes and recovery therapies, balancing exertion with profound rest.",
      },
    ],
    medicalExpertise: [
      "Aman Spa therapists trained across the group's global bodywork canon",
      "Water-based therapy suites drawing on Navajo-inspired healing traditions",
      "Personal movement, yoga and Pilates instruction",
      "Wellness consultations shaping bespoke, unstructured stays",
    ],
    accommodation:
      "Suites of poured concrete, glass and linen, each framing the desert like a held breath - private terraces, fireplaces and plunge pools facing the mesas. The celebrated central pool wraps a sandstone escarpment left exactly where nature put it.",
    cuisine:
      "A kitchen of quiet American confidence - Southwestern ingredients, open fire, immaculate produce - served in a dining room that keeps its best seat for the view. Wellness menus available; austerity never enforced.",
    gallery: [
      {
        tone: "amangiri-a",
        alt: "Swimming pool wrapping the sandstone escarpment",
        aiPrompt: "Iconic minimalist pool wrapping a natural sandstone escarpment, desert dusk, still turquoise water against ancient rock, architectural editorial",
        keywords: "amangiri pool sandstone escarpment desert dusk",
      },
      {
        tone: "amangiri-b",
        alt: "Desert-view spa treatment room",
        aiPrompt: "Minimalist spa treatment room with floor-to-ceiling glass onto desert mesas, concrete and linen, soft shadow, monumental calm, editorial",
        keywords: "desert spa treatment concrete glass mesa minimal",
      },
      {
        tone: "amangiri-c",
        alt: "Fire-cooked Southwestern dish at dusk",
        aiPrompt: "Refined Southwestern dish cooked over open fire, rustic elegant plating, desert dusk light, warm editorial food photography",
        keywords: "southwestern cuisine fire cooking dusk refined",
      },
    ],
    experiences: [
      "Slot-canyon hike at first light",
      "Via ferrata across the mesa faces",
      "Sage and mineral ritual in the Aman Spa",
      "Stargazing on the desert pavilion",
    ],
    pricingGuidance:
      "Suites from approximately US$3,500 per night on a room basis; spa journeys and private guiding arranged individually. Camp Sarika's tented pavilions are quoted separately.",
    faq: [
      {
        q: "Is Amangiri a wellness resort in the clinical sense?",
        a: "No, and it does not pretend to be. Its therapy is environmental - architecture, silence and desert scale - supported by a serious Aman Spa rather than a medical wing.",
      },
      {
        q: "How far in advance should I book?",
        a: "Months, candidly. The suite count is small and demand global; your concierge will advise on realistic windows and Camp Sarika alternatives.",
      },
    ],
    related: ["mii-amo", "miraval-arizona", "chable-yucatan"],
  },
  {
    slug: "golden-door",
    name: "Golden Door",
    shortName: "Golden Door",
    tier: "curated",
    country: "United States",
    region: "San Marcos, California",
    coordinates: [33.17, -117.15],
    established: "1958",
    tagline: "One week, forty guests, and a door that has changed lives since 1958.",
    cardline: "America's legendary spa ranch - Japanese calm, week-long rigour, profits to charity.",
    categories: ["detox", "nutrition", "womens-health", "executive-reset"],
    hero: {
      tone: "golden-door",
      alt: "Japanese-inspired gate and gardens of a Californian spa ranch in morning light",
      aiPrompt:
        "Cinematic morning view of a Japanese honjin-inspired retreat gate amid Californian gardens, raked gravel, maples and citrus groves, soft golden light, timeless serenity, editorial photography",
      keywords: "japanese garden gate california retreat morning light",
    },
    overview: [
      "The Golden Door has run the same quietly radical experiment since 1958: take roughly forty guests, one week, a Japanese-inspired ranch in the Southern Californian hills, and see what total immersion can do. Alumni describe the week in the language usually reserved for turning points.",
      "The structure is famously complete - dawn mountain hikes, a personal daily schedule, one staff member for every guest, food from its own biodynamic farm - and the ownership famously principled: profits are directed to charities supporting at-risk children and survivors of abuse.",
    ],
    location:
      "In the hills of San Marcos, north of San Diego - some six hundred acres of chaparral, citrus and Japanese gardens, forty minutes from San Diego's airport and a century from its pace.",
    whoFor:
      "For those ready to hand over the controls for a week. Guests seeking a genuine inflection point in fitness, weight, or life direction - many of them women, on the calendar's dedicated weeks - who value structure, intimacy and a house that knows exactly what it is.",
    philosophy:
      "Transformation through immersion. The Door believes a week of total structure - movement, food, rest and attention in the right proportions - can reset habits that decades of good intentions have not.",
    signaturePrograms: [
      {
        name: "The Signature Week",
        duration: "7 nights",
        summary: "The classic Sunday-to-Sunday immersion - dawn hikes, personal training, spa, and a schedule written for you alone.",
      },
      {
        name: "Women's Weeks",
        duration: "7 nights",
        summary: "The founding format - the Door's full curriculum in the company of women, as it has run for decades.",
      },
      {
        name: "Men's & Co-Ed Weeks",
        duration: "7 nights",
        summary: "Selected weeks reserved for men or open to all, with the same one-to-one staffing and rigour.",
      },
    ],
    medicalExpertise: [
      "Near one-to-one staff ratio spanning trainers, therapists and counsellors",
      "Fitness assessment and personal daily programming",
      "Licensed massage and skincare faculty with decades-long tenures",
      "Nutrition built on the estate's own biodynamic farm",
    ],
    accommodation:
      "Forty serene rooms in Japanese ryokan spirit - shoji screens, garden views, no televisions worth mentioning. The point is the week, not the room, and the room understands this.",
    cuisine:
      "Farm-to-table before the phrase existed - the Door's biodynamic farm supplies a spa cuisine that is precise about calories and generous about flavour, with cooking classes to send the method home.",
    gallery: [
      {
        tone: "golden-door-a",
        alt: "Japanese garden courtyard with raked gravel",
        aiPrompt: "Tranquil Japanese garden courtyard, raked gravel, stone lanterns and maples, Californian light, timeless retreat serenity, editorial",
        keywords: "japanese garden courtyard gravel lantern serene",
      },
      {
        tone: "golden-door-b",
        alt: "Dawn hike on chaparral trails",
        aiPrompt: "Small group hiking chaparral hills at dawn, golden mist, Southern California mountains, energetic yet serene, editorial photography",
        keywords: "dawn hike chaparral hills california mist",
      },
      {
        tone: "golden-door-c",
        alt: "Farm-fresh spa cuisine plate",
        aiPrompt: "Elegant farm-to-table spa cuisine plate, biodynamic vegetables, fine ceramic, soft natural light, kinfolk food styling",
        keywords: "farm to table spa cuisine vegetables ceramic",
      },
    ],
    experiences: [
      "Dawn hike through the estate's private trails",
      "Personal training and in-room massage, daily",
      "Cooking class in the Door's teaching kitchen",
      "Archery and labyrinth walking in the gardens",
    ],
    pricingGuidance:
      "The all-inclusive week from approximately US$12,000 per person, Sunday to Sunday, covering accommodation, all classes, daily massage and full board. Waiting lists are common; profits are donated to charity.",
    faq: [
      {
        q: "Can I come for fewer than seven nights?",
        a: "The Door is built around the full week and rarely bends - the format is the therapy. Your concierge can advise on the occasional shorter speciality week.",
      },
      {
        q: "Where do the profits go?",
        a: "To charitable causes - the Door commits its profits to organisations supporting at-risk children and survivors of abuse, a policy central to its ownership.",
      },
    ],
    related: ["canyon-ranch", "miraval-arizona", "mii-amo"],
  },
  {
    slug: "mii-amo",
    name: "Mii amo",
    shortName: "Mii amo",
    tier: "curated",
    country: "United States",
    region: "Sedona, Arizona",
    coordinates: [34.907, -111.85],
    established: "2001",
    tagline: "A journey of intention, walled in by red rock.",
    cardline: "Boynton Canyon's destination spa - crystal grotto, red rock, real depth.",
    categories: ["sleep", "womens-health", "executive-reset", "nutrition"],
    hero: {
      tone: "mii-amo",
      alt: "Adobe spa architecture beneath towering red rock walls in Boynton Canyon",
      aiPrompt:
        "Cinematic view of low adobe destination spa architecture beneath towering red rock canyon walls, Sedona, juniper and light, spiritual desert stillness, warm editorial photography",
      keywords: "sedona red rock canyon adobe spa juniper light",
    },
    overview: [
      "Mii amo sits at the mouth of Boynton Canyon, a place the Yavapai-Apache hold sacred, and takes the setting seriously. This is a true destination spa - all-inclusive, intimate, entered through a stated intention that shapes every session of the stay.",
      "Its symbolic heart is the Crystal Grotto, a domed chamber aligned to the solstice sun where each day begins in ritual. Around it: therapists of unusual calibre, red-rock trails from the door, and a renovation that has kept the soul while refreshing every surface.",
    ],
    location:
      "Deep in Boynton Canyon outside Sedona, Arizona, enclosed on three sides by red rock. Two hours north of Phoenix's airport; a different order of quiet altogether.",
    whoFor:
      "For those at a threshold - a career turn, a loss, a decade's close - who want their spa week to mean something. Also for the simply depleted, who will find the all-inclusive rhythm does the deciding for them.",
    philosophy:
      "Begin with intention. Every Mii amo journey is organised around what the guest names on arrival - the canyon, the grotto and the therapists then work in service of that one sentence.",
    signaturePrograms: [
      {
        name: "Journey of Intention: Rest & Renew",
        duration: "3-7 nights",
        summary: "An all-inclusive journey for depletion - bodywork, canyon time and grotto ritual arranged around deep rest.",
      },
      {
        name: "Journey of Intention: Healthy Transitions",
        duration: "4-7 nights",
        summary: "For life's turning points - counsel, ceremony and movement to cross a threshold deliberately.",
      },
      {
        name: "Journey of Intention: Spiritual Exploration",
        duration: "4-7 nights",
        summary: "Energy work, meditation and Native-inspired ritual for guests drawn by the canyon's older significance.",
      },
    ],
    medicalExpertise: [
      "Senior spa therapists spanning bodywork, energy and skincare disciplines",
      "Psychological and transition counselling within journey programmes",
      "Daily Crystal Grotto rituals led by dedicated practitioners",
      "Movement, yoga and nutrition faculty attached to each journey",
    ],
    accommodation:
      "A small count of casitas and suites in adobe and timber, facing canyon wall or high-desert garden - renewed throughout in warm minimalism, with fireplaces for the cold desert nights.",
    cuisine:
      "An open-kitchen café cooking bright, Southwestern-leaning spa cuisine, included in the journey - juices and broths where wanted, genuine cooking everywhere else.",
    gallery: [
      {
        tone: "mii-amo-a",
        alt: "Crystal Grotto interior with central quartz",
        aiPrompt: "Domed earthen ritual chamber, shaft of sunlight on a central quartz crystal, adobe walls, sacred hush, warm editorial photography",
        keywords: "crystal grotto adobe dome ritual sunlight quartz",
      },
      {
        tone: "mii-amo-b",
        alt: "Massage table facing red rock walls",
        aiPrompt: "Spa treatment room with picture window onto towering red rock, warm neutral interior, soft light, deep serenity, editorial",
        keywords: "spa treatment red rock window sedona serene",
      },
      {
        tone: "mii-amo-c",
        alt: "Southwestern spa cuisine at the open kitchen",
        aiPrompt: "Bright Southwestern spa cuisine plate, corn, chile and garden produce, handmade ceramic, natural desert light, editorial food styling",
        keywords: "southwestern spa cuisine plate fresh desert light",
      },
    ],
    experiences: [
      "Morning ritual in the Crystal Grotto",
      "Guided hike into Boynton Canyon",
      "Blue corn and honey body ritual",
      "Stargazing meditation on the canyon floor",
    ],
    pricingGuidance:
      "All-inclusive journeys from approximately US$2,000 per night, in fixed three, four and seven-night formats covering accommodation, meals, spa services and programming.",
    faq: [
      {
        q: "Can I visit Mii amo without staying?",
        a: "The spa serves resident journey guests first and almost exclusively - the all-inclusive, intention-led format is the product, and it requires being present.",
      },
      {
        q: "Is the spirituality obligatory?",
        a: "Only the intention is asked of you. The grotto and ceremonies are offered, never enforced - sceptics tend to soften somewhere around day two.",
      },
    ],
    related: ["amangiri", "miraval-arizona", "canyon-ranch"],
  },
  {
    slug: "miraval-arizona",
    name: "Miraval Arizona",
    shortName: "Miraval",
    tier: "curated",
    country: "United States",
    region: "Tucson, Arizona",
    coordinates: [32.44, -110.98],
    established: "1995",
    tagline: "Life in balance, one present moment at a time.",
    cardline: "The mindfulness original - equine wisdom and device-free calm in the Sonoran Desert.",
    categories: ["sleep", "executive-reset", "preventive-health", "nutrition"],
    hero: {
      tone: "miraval-arizona",
      alt: "Sonoran Desert resort at dawn with saguaro cacti and the Santa Catalina mountains",
      aiPrompt:
        "Cinematic dawn over a low desert resort among saguaro cacti, Santa Catalina mountains glowing rose behind, Sonoran Desert stillness, warm editorial photography",
      keywords: "sonoran desert saguaro dawn mountains resort calm",
    },
    overview: [
      "Miraval was teaching mindfulness when the word still needed explaining. Since 1995 its Sonoran Desert campus outside Tucson has run on a single idea - life in balance - pursued through hundreds of experiences designed to pull attention back into the present tense.",
      "Its most famous classroom is the stable: the equine programme uses horses as unsparing mirrors of human intention, and has unlocked more executives than most boardroom coaches. Phones live in sleeves here; the resort's device-free ethos is gentle, insistent and transformative.",
    ],
    location:
      "In the Santa Catalina foothills north of Tucson, Arizona, amid four hundred acres of saguaro and mesquite. Under an hour from Tucson's airport, ninety minutes from Phoenix.",
    whoFor:
      "For the perpetually elsewhere. Executives and couples whose attention has been strip-mined by devices, seeking practical mindfulness rather than mysticism - with challenge courses and horses for those who learn by doing.",
    philosophy:
      "Attention is the primary resource. Miraval treats presence as a trainable skill, taught through experience - a horse, a high wire, a silent meal - rather than lecture.",
    signaturePrograms: [
      {
        name: "Mindful Living Immersion",
        duration: "3-7 nights",
        summary: "A guest-composed programme of meditation, movement and experiential workshops, guided by wellbeing counsel.",
      },
      {
        name: "Equine Experience Intensive",
        duration: "3-5 nights",
        summary: "Sessions in the Purple Sage stables using horses to surface habits of intention, communication and trust.",
      },
      {
        name: "Sleep & Restore",
        duration: "4-7 nights",
        summary: "Sleep-focused consultations, spa therapies and evening practice to rebuild rest in a device-quiet setting.",
      },
    ],
    medicalExpertise: [
      "Wellbeing specialists spanning mindfulness, sleep and stress physiology",
      "Pioneering equine-assisted learning faculty",
      "Integrative spa with Eastern and Western bodywork traditions",
      "Nutrition counsel and teaching-kitchen programming",
    ],
    accommodation:
      "Casita-style rooms and villas in desert tones, deliberately screen-light and hushed, with hammocks and terraces facing the Catalinas. The quiet is a policy as much as an atmosphere.",
    cuisine:
      "Generous, produce-driven cooking with the calories quietly managed - plus the conscious-eating exercises that made Miraval famous, including meals taken in attentive silence.",
    gallery: [
      {
        tone: "miraval-arizona-a",
        alt: "Desert casita terrace with hammock at dusk",
        aiPrompt: "Desert casita terrace with hammock at dusk, saguaro silhouettes, warm adobe tones, Catalina mountains behind, serene editorial",
        keywords: "desert casita hammock dusk saguaro adobe",
      },
      {
        tone: "miraval-arizona-b",
        alt: "Equine session in the resort stables",
        aiPrompt: "Quiet equine therapy session, guest grooming a horse in desert stable yard, morning light, emotional connection, editorial photography",
        keywords: "equine therapy horse stable desert morning",
      },
      {
        tone: "miraval-arizona-c",
        alt: "Conscious-eating plate in the desert light",
        aiPrompt: "Simple beautiful produce-driven plate for mindful eating, desert light, handmade ceramic, kinfolk styling, calm and precise",
        keywords: "mindful eating plate produce ceramic desert light",
      },
    ],
    experiences: [
      "Equine session at the Purple Sage stables",
      "Desert sunrise meditation walk",
      "Challenge course above the mesquite",
      "Silent conscious-eating lunch",
    ],
    pricingGuidance:
      "All-inclusive rates from approximately US$800 per person per night, including meals, a nightly resort credit toward spa and experiences, and all open programming.",
    faq: [
      {
        q: "Are phones really forbidden?",
        a: "Not forbidden - retired. Devices are sleeved and public spaces kept screen-free by shared agreement; most guests report the withdrawal lasts a day and the relief a good deal longer.",
      },
      {
        q: "Do I need experience with horses?",
        a: "None. The equine work is about attention and intention rather than riding, and the horses have seen every kind of beginner.",
      },
    ],
    related: ["canyon-ranch", "mii-amo", "golden-door"],
  },
  {
    slug: "canyon-ranch",
    name: "Canyon Ranch Tucson",
    shortName: "Canyon Ranch",
    tier: "curated",
    country: "United States",
    region: "Tucson, Arizona",
    coordinates: [32.3, -110.82],
    established: "1979",
    tagline: "The original American wellness resort, still setting the pace.",
    cardline: "Integrative medicine, fitness science and spirit - united since 1979.",
    categories: ["medical-wellness", "preventive-health", "longevity", "nutrition", "sleep"],
    hero: {
      tone: "canyon-ranch",
      alt: "Adobe wellness campus in the Sonoran Desert with mountain backdrop at golden hour",
      aiPrompt:
        "Cinematic golden-hour view of a sprawling adobe wellness campus in the Sonoran Desert, palo verde and saguaro, Santa Catalina mountains, warm heritage American resort, editorial photography",
      keywords: "tucson adobe wellness campus desert mountains golden hour",
    },
    overview: [
      "Canyon Ranch Tucson is where the American wellness resort was invented. Since 1979 this desert campus has held medicine, fitness and spirit in one integrated practice - physicians, exercise physiologists and spiritual guides sharing a single guest file, decades before 'integrative' became an industry word.",
      "The result is breadth no newcomer has matched: genuine medical consultations beside canyon hikes, sleep labs beside meditation, a health-and-healing faculty numbering in the dozens. It wears its seniority lightly, and keeps renovating both campus and curriculum.",
    ],
    location:
      "At the base of the Santa Catalina mountains on Tucson's desert edge - some one hundred and fifty acres of adobe, palo verde and trail. Thirty minutes from Tucson's airport, in North America's lushest desert.",
    whoFor:
      "For those who want the full instrument panel - medical answers, fitness science and contemplative depth in one stay. First-timers to destination wellness are especially well served; the Ranch has been introducing Americans to the idea for over four decades.",
    philosophy:
      "Whole-person health, taken literally. Canyon Ranch built its model on the conviction that medicine, movement, nutrition and spirit belong in one conversation - and staffed itself accordingly.",
    signaturePrograms: [
      {
        name: "Health & Healing Immersion",
        duration: "4-7 nights",
        summary: "Physician-led assessment across metabolic, sleep and cardiovascular health, translated into a working life plan.",
      },
      {
        name: "Longevity9",
        duration: "5-7 nights",
        summary: "The Ranch's longevity protocol - diagnostics, performance testing and behavioural counsel aimed at healthspan.",
      },
      {
        name: "Fitness & Performance Reset",
        duration: "4-7 nights",
        summary: "Exercise physiology, movement analysis and desert training to rebuild capability at any age.",
      },
    ],
    medicalExpertise: [
      "On-site physicians and integrative medical department",
      "Exercise physiologists and performance-testing laboratory",
      "Sleep, nutrition and behavioural-health specialists",
      "Spiritual wellness and grief-counsel faculty - a Ranch signature",
    ],
    accommodation:
      "Casitas and suites in warm adobe scattered across the campus gardens - comfortable, unshowy American resort rooms that understand the day happens elsewhere.",
    cuisine:
      "Spa cuisine the Ranch effectively codified - precise nutrition served with genuine appetite appeal, teaching kitchens alongside, and every menu annotated for those who want the numbers.",
    gallery: [
      {
        tone: "canyon-ranch-a",
        alt: "Adobe casita gardens at golden hour",
        aiPrompt: "Adobe casita gardens at golden hour, desert plantings, warm American Southwest resort heritage, soft light, editorial",
        keywords: "adobe casita gardens southwest golden hour",
      },
      {
        tone: "canyon-ranch-b",
        alt: "Performance testing in the fitness laboratory",
        aiPrompt: "Modern exercise physiology lab session, VO2 testing, clean bright interior, sense of science and encouragement, editorial",
        keywords: "exercise physiology lab testing fitness science",
      },
      {
        tone: "canyon-ranch-c",
        alt: "Annotated spa cuisine plate",
        aiPrompt: "Colourful precise spa cuisine plate, lean protein and desert-fresh vegetables, elegant simple plating, natural light, editorial food styling",
        keywords: "spa cuisine plate colourful precise healthy",
      },
    ],
    experiences: [
      "Integrative medical consultation",
      "Guided canyon hike in the Catalinas",
      "Sleep assessment and consultation",
      "Metaphysical and spiritual counsel session",
    ],
    pricingGuidance:
      "All-inclusive stays from approximately US$1,100 per person per night, including meals, classes and a services allowance; medical consultations and diagnostics itemised separately.",
    faq: [
      {
        q: "How medical is Canyon Ranch?",
        a: "Substantially - it maintains physicians, physiologists and behavioural specialists on campus - yet the medicine sits inside a resort of genuine warmth rather than a clinic's chill.",
      },
      {
        q: "Is it suited to a first wellness stay?",
        a: "Ideally. The breadth of programming and the unforced pace make it the classic American introduction to destination wellness - which is, historically, exactly what it was.",
      },
    ],
    related: ["miraval-arizona", "golden-door", "mii-amo"],
  },
];
