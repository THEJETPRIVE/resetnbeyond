/**
 * SIGNATURE COLLECTION - the established masters.
 *
 * Ten houses that define destination wellness in its mature form:
 * decades-deep methods, resident experts, and settings chosen as
 * carefully as the medicine. Written fresh in the house register
 * (Monocle / Kinfolk); never lifted from any property's marketing.
 */

import type { Resort } from "../schema";

export const signatureResorts: Resort[] = [
  {
    slug: "ananda-himalayas",
    name: "Ananda in the Himalayas",
    shortName: "Ananda",
    tier: "signature",
    country: "India",
    region: "Narendra Nagar, Himalayan Foothills",
    coordinates: [30.1637, 78.3009],
    established: "2000",
    tagline: "A Maharaja's palace estate, given to Ayurveda.",
    cardline: "Himalayan Ayurveda and Yoga, above the Ganges.",
    categories: ["detox", "sleep", "womens-health", "preventive-health", "nutrition", "traditional-healing"],
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
      { name: "Ayurvedic Rejuvenation", duration: "7-21 nights", summary: "Classical Panchakarma and Ayurvedic therapy, physician-prescribed and deeply restorative." },
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
    related: ["chiva-som", "kamalaya", "como-shambhala-estate"],
  },
  {
    slug: "chiva-som",
    name: "Chiva-Som",
    shortName: "Chiva-Som",
    tier: "signature",
    country: "Thailand",
    region: "Hua Hin, Gulf of Thailand",
    coordinates: [12.5411, 99.9581],
    established: "1995",
    tagline: "The original beachfront wellness sanctuary.",
    cardline: "Three decades of holistic mastery, by the Gulf of Thailand.",
    categories: ["detox", "sleep", "executive-reset", "nutrition", "preventive-health", "fitness-performance"],
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
      { name: "Optimal Performance", duration: "7-10 nights", summary: "For the depleted high achiever - fitness, recovery and stress physiology brought back into balance." },
      { name: "Cleanse & Detox", duration: "5-7 nights", summary: "A gentle yet thorough purification across nutrition, hydrotherapy and holistic spa." },
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
    related: ["ananda-himalayas", "kamalaya", "rakxa"],
  },
  {
    slug: "kamalaya",
    name: "Kamalaya Koh Samui",
    shortName: "Kamalaya",
    tier: "signature",
    country: "Thailand",
    region: "Laem Set, Koh Samui",
    coordinates: [9.4265, 100.0384],
    established: "2005",
    tagline: "A sanctuary grown around a monks' cave.",
    cardline: "Holistic healing with an emotional intelligence all its own.",
    categories: ["detox", "sleep", "executive-reset", "nutrition", "womens-health", "mind-wellbeing", "traditional-healing"],
    hero: {
      tone: "kamalaya",
      alt: "Hillside wellness sanctuary descending through tropical forest to the sea on Koh Samui",
      aiPrompt:
        "Cinematic view of a hillside wellness sanctuary on Koh Samui, granite boulders and tropical canopy descending to a quiet sea, lotus ponds, warm humid morning light, contemplative Asian architecture, editorial luxury",
      keywords: "koh samui hillside sanctuary tropical forest sea boulders",
    },
    overview: [
      "Kamalaya grew around a cave once used by Buddhist monks for meditation, and that origin still sets its temperature. Founded by John and Karina Stewart - one shaped by years in a Himalayan ashram, the other a doctor of Traditional Chinese Medicine - it treats healing as something the whole person does, not something done to the body alone.",
      "The result is Asia's most emotionally literate wellness sanctuary. Detox, stress and burnout are addressed with genuine therapeutic depth, yet the register is gentle - naturopaths, TCM practitioners and life-enhancement mentors working in quiet concert on a forested hillside above the sea.",
    ],
    location:
      "On the quiet southern coast of Koh Samui at Laem Set, an hour's flight from Bangkok and twenty minutes from Samui airport. The sanctuary steps down a boulder-strewn hillside through old-growth trees to its own stretch of shoreline.",
    whoFor:
      "For those whose depletion is as much emotional as physical. Executives past the edge of burnout, guests navigating transition or loss, and anyone seeking a detox that treats the nervous system with the same care as the liver.",
    philosophy:
      "Healing happens when body, mind and spirit are addressed together. Kamalaya draws on Eastern healing traditions and Western naturopathy, held within a place whose spiritual origins predate the resort itself.",
    signaturePrograms: [
      { name: "Comprehensive Detox", duration: "7-14 nights", summary: "A naturopath-guided cleanse of considerable depth - herbal support, bio-impedance analysis and daily therapies, without harshness." },
      { name: "Embracing Change", duration: "5-9 nights", summary: "Kamalaya's signature emotional-wellbeing programme, pairing life-enhancement mentors with bodywork to steady guests through transition." },
      { name: "Asian Bliss", duration: "3-7 nights", summary: "An introductory immersion in the sanctuary's Eastern therapies - the essential Kamalaya, gently dosed." },
    ],
    medicalExpertise: [
      "Naturopathic physicians and Traditional Chinese Medicine practitioners",
      "Life-enhancement mentors for emotional wellbeing and stress",
      "Bio-impedance analysis and functional wellness screening",
      "Ayurvedic, Thai and Chinese therapy faculty",
    ],
    accommodation:
      "Rooms, suites and villas thread between granite boulders and canopy, many with sea views, all in a warm Asian vernacular of timber, stone and open air. Nothing interrupts the hillside's own architecture.",
    cuisine:
      "Detox menus and a broader wellness cuisine share one kitchen and one philosophy - nutritionally intentional, Asian-accented, and generous enough that discipline never feels like penance.",
    gallery: [
      { tone: "kamalaya-a", alt: "Meditation cave shrine", aiPrompt: "Ancient granite meditation cave with simple Buddhist shrine, candlelight, tropical forest at the entrance, contemplative stillness, editorial", keywords: "meditation cave shrine buddhist candlelight forest" },
      { tone: "kamalaya-b", alt: "Open-air therapy sala", aiPrompt: "Open-air Thai therapy sala among granite boulders and tropical canopy, warm timber, soft filtered light, holistic luxury spa", keywords: "thai therapy sala boulders canopy timber" },
      { tone: "kamalaya-c", alt: "Detox cuisine by the sea", aiPrompt: "Elegant detox plate of vibrant Asian vegetables on handmade ceramic, sea light, kinfolk styling, natural and fresh", keywords: "detox cuisine asian vegetables ceramic sea light" },
    ],
    experiences: [
      "Meditation in the monks' cave at the sanctuary's heart",
      "Personal session with a life-enhancement mentor",
      "Traditional Chinese Medicine consultation",
      "Sunrise swim from the sanctuary's own shoreline",
    ],
    pricingGuidance:
      "Programme residencies from approximately US$500 per night including accommodation, programme therapies and wellness cuisine; minimum three nights, with detox programmes quoted on consultation.",
    faq: [
      { q: "What makes Kamalaya different from other detox resorts?", a: "Its emotional depth. The detox is rigorous, but it sits within a broader practice of mentoring and Eastern therapy that addresses why depletion happened in the first place." },
      { q: "Is the setting religious?", a: "No. The monks' cave lends the place its contemplative character, but programmes are secular and guests of every background settle in quickly." },
    ],
    related: ["chiva-som", "como-shambhala-estate", "the-farm-san-benito"],
  },
  {
    slug: "como-shambhala-estate",
    name: "COMO Shambhala Estate",
    shortName: "COMO Shambhala",
    tier: "signature",
    country: "Indonesia",
    region: "Ubud, Bali",
    coordinates: [-8.4728, 115.2547],
    established: "2005",
    tagline: "An estate for change, above the Ayung River.",
    cardline: "Residential health retreat in Bali's sacred river valley.",
    categories: ["detox", "executive-reset", "sleep", "nutrition", "preventive-health", "mind-wellbeing"],
    hero: {
      tone: "como-shambhala-estate",
      alt: "Jungle estate pavilions above the Ayung River gorge near Ubud",
      aiPrompt:
        "Cinematic view of an elegant tropical estate of timber and stone pavilions perched above a jungle river gorge in Bali, morning mist rising from the Ayung River, ancient trees, spring water pools, serene editorial luxury",
      keywords: "bali ubud jungle estate river gorge mist pavilion",
    },
    overview: [
      "COMO Shambhala Estate calls itself an estate for change, and the phrase is precise. This is not a hotel with a spa but a residential health retreat - a collection of residences and villas folded into old-growth jungle above the Ayung River, where each stay is built around a consultation and carried by resident experts.",
      "The Balinese setting does half the work. Sacred spring water rises on the property, the gorge holds its own cool climate, and the estate's yoga teachers, Ayurvedic doctor and nutritionists do the rest - quietly, personally, and at a pace the river seems to set.",
    ],
    location:
      "Twenty minutes north of Ubud in Bali's interior, above the Ayung River gorge. Roughly ninety minutes by car from Ngurah Rai International Airport, climbing from the coast into rice terraces and jungle.",
    whoFor:
      "For those who want their reset shaped by people rather than machines. Guests recovering from overwork, rebuilding fitness or sleep, or beginning a longer change of direction, who value daily contact with genuine experts in an extraordinary landscape.",
    philosophy:
      "Change is residential. Shambhala holds that transformation takes root when expert guidance, sacred landscape and unhurried time are allowed to work on a guest together.",
    signaturePrograms: [
      { name: "Cleanse", duration: "5-7 nights", summary: "A nutritionist-led detoxification built on the estate's kitchen and hydrotherapy, calibrated to constitution rather than dogma." },
      { name: "Ayurvedic Programme", duration: "7-14 nights", summary: "Consultation, treatment and diet prescribed by the resident Ayurvedic doctor, sequenced across the stay." },
      { name: "Bespoke Wellness", duration: "5-10 nights", summary: "The estate's core offering - a personal programme drawn from yoga, fitness, therapies and nutrition after an arrival consultation." },
    ],
    medicalExpertise: [
      "Resident Ayurvedic doctor and consultation-led programming",
      "Dedicated yoga and Pilates faculty in residence",
      "Nutritionists working directly with the estate kitchen",
      "Hydrotherapy, massage and movement therapy specialists",
    ],
    accommodation:
      "Suites within five shared residences, each with its own character and butler, plus private retreat villas with pools. Interiors are COMO's known register - teak, linen, white space - opened wide to the jungle.",
    cuisine:
      "COMO Shambhala Cuisine, the group's founding food philosophy - raw-leaning, enzyme-rich and built on the estate's spring water and local organic produce, alongside a fuller menu for those not on programme.",
    gallery: [
      { tone: "como-shambhala-estate-a", alt: "Spring-fed estate pool", aiPrompt: "Serene spring-fed swimming pool wrapped in Balinese jungle, natural stone, morning light through canopy, quiet luxury, editorial", keywords: "bali jungle pool spring stone canopy" },
      { tone: "como-shambhala-estate-b", alt: "Riverside yoga pavilion", aiPrompt: "Open timber yoga pavilion above a jungle river gorge, single practitioner at dawn, mist, soft golden light, tranquil editorial", keywords: "yoga pavilion jungle river dawn mist bali" },
      { tone: "como-shambhala-estate-c", alt: "COMO Shambhala cuisine", aiPrompt: "Vibrant raw-leaning wellness plate on handmade ceramic, tropical produce, natural light, kinfolk styling, fresh and precise", keywords: "raw wellness cuisine tropical ceramic natural light" },
    ],
    experiences: [
      "Dawn yoga above the Ayung gorge",
      "Consultation with the resident Ayurvedic doctor",
      "Guided walk to the estate's sacred spring",
      "White-water rafting on the Ayung for the restless",
    ],
    pricingGuidance:
      "Residences from approximately US$800 per night including daily activities and one wellness consultation; structured programmes quoted on consultation.",
    faq: [
      { q: "Is a structured programme compulsory?", a: "No. Some guests follow a full programme; others simply live on the estate, joining classes and treatments as inclination dictates. The experts are there either way." },
      { q: "How does it differ from a COMO hotel?", a: "The estate is residential and purpose-built for change - consultations, resident experts and programming sit at its centre, with hospitality arranged around them rather than the reverse." },
    ],
    related: ["kamalaya", "ananda-himalayas", "chiva-som"],
  },
  {
    slug: "rakxa",
    name: "RAKxa Integrative Wellness",
    shortName: "RAKxa",
    tier: "signature",
    country: "Thailand",
    region: "Bang Krachao, Bangkok",
    coordinates: [13.6781, 100.5646],
    established: "2020",
    tagline: "Hospital-grade wellness in Bangkok's green lung.",
    cardline: "Fully integrative medical wellness, minutes from the capital.",
    categories: ["medical-wellness", "preventive-health", "detox", "biohacking", "executive-reset", "fitness-performance", "traditional-healing"],
    hero: {
      tone: "rakxa",
      alt: "Contemporary wellness villas amid dense greenery on Bangkok's Bang Krachao peninsula",
      aiPrompt:
        "Cinematic view of contemporary Thai wellness villas set in the dense green jungle of Bang Krachao, river peninsula, humid golden morning light, clean modern architecture among banana palms, editorial luxury",
      keywords: "bang krachao bangkok green jungle modern villas river",
    },
    overview: [
      "RAKxa occupies an improbable geography: Bang Krachao, the forested river peninsula Bangkok calls its green lung, minutes from the city yet sealed from it by the Chao Phraya. On this quiet island of orchards and mangroves it has built Thailand's most complete medical wellness retreat.",
      "The model is fully integrative in the strict sense. A partnership with VitalLife, the scientific wellness arm of Bumrungrad International Hospital, supplies genuine clinical diagnostics; Thai traditional medicine, a medical gym and an energy-medicine spa supply the rest. Doctors write the programme; the peninsula softens it.",
    ],
    location:
      "On Bang Krachao, the protected green peninsula in a bend of the Chao Phraya River. Under an hour from Suvarnabhumi Airport and central Bangkok, then a short boat crossing into orchards, birdsong and still air.",
    whoFor:
      "For the clinically minded who cannot spare a flight to the Alps. Executives and frequent visitors to Bangkok seeking hospital-grade diagnostics, targeted recovery or a supervised detox, delivered with Thai warmth and immediate proximity to the city.",
    philosophy:
      "Ancient wisdom, defended by modern medicine. RAKxa sequences hospital-grade diagnostics, traditional Thai therapy and performance science into one continuous protocol, so nothing is prescribed on faith alone.",
    signaturePrograms: [
      { name: "De-Stress & Burnout Recovery", duration: "5-7 nights", summary: "Nervous-system diagnostics, sleep therapy and traditional Thai medicine to rebuild a depleted system from the data up." },
      { name: "Detox Programme", duration: "7-14 nights", summary: "A physician-supervised cleanse pairing functional testing with colon hydrotherapy, herbal medicine and the medical gym." },
      { name: "Optimal Fitness", duration: "5-7 nights", summary: "VO2, movement and body-composition analysis translated into a precise performance rebuild by sports scientists." },
    ],
    medicalExpertise: [
      "Clinical diagnostics via VitalLife, the wellness arm of Bumrungrad International Hospital",
      "Medical gym with sports scientists and physiotherapists",
      "Traditional Thai and Chinese medicine faculty",
      "Hydrotherapy suites, cryotherapy and IV therapy under physician oversight",
    ],
    accommodation:
      "Garden and pool villas in a restrained contemporary Thai idiom - dark timber, clean lines, deep verandas onto tropical planting. Quiet enough to forget the city across the water.",
    cuisine:
      "Doctor-informed Thai and international cuisine, portioned and composed to each guest's programme - anti-inflammatory by design, and considerably more pleasurable than the phrase suggests.",
    gallery: [
      { tone: "rakxa-a", alt: "Hydrotherapy suite", aiPrompt: "Sleek modern hydrotherapy suite with vitality pools, dark stone and warm timber, soft light, clinical precision meeting Thai serenity, editorial", keywords: "hydrotherapy suite modern pool stone timber" },
      { tone: "rakxa-b", alt: "Medical gym assessment", aiPrompt: "Contemporary medical gym, athlete on performance-testing equipment with clinician, clean architecture, natural light, precise and calm", keywords: "medical gym performance testing modern clinic" },
      { tone: "rakxa-c", alt: "Programme cuisine", aiPrompt: "Refined anti-inflammatory Thai wellness plate, precise portions, fine ceramic, soft natural light, health-forward fine dining", keywords: "thai wellness cuisine anti-inflammatory plating refined" },
    ],
    experiences: [
      "Full diagnostic assessment with VitalLife physicians",
      "Cycling the elevated jungle paths of Bang Krachao",
      "Traditional Thai medicine consultation",
      "Cryotherapy and recovery circuit in the medical gym",
    ],
    pricingGuidance:
      "Programme residencies from approximately US$1,000 per night including villa, full board and programme treatments; advanced diagnostic packages quoted on consultation.",
    faq: [
      { q: "How medical is RAKxa really?", a: "Genuinely so. Diagnostics are run with VitalLife, Bumrungrad International Hospital's scientific wellness centre, and every programme is physician-directed rather than spa-led." },
      { q: "Is it too close to Bangkok to feel like a retreat?", a: "Bang Krachao is a protected green peninsula ringed by the river; crossing to it feels like leaving the city entirely, which is precisely the point." },
    ],
    related: ["chiva-som", "kamalaya", "the-farm-san-benito"],
  },
  {
    slug: "lefay-lago-di-garda",
    name: "Lefay Resort & SPA Lago di Garda",
    shortName: "Lefay Garda",
    tier: "signature",
    country: "Italy",
    region: "Gargnano, Lake Garda",
    coordinates: [45.6906, 10.6549],
    established: "2008",
    tagline: "Chinese medicine, Italian light.",
    cardline: "The Lefay SPA Method, terraced above Lake Garda.",
    categories: ["detox", "sleep", "preventive-health", "executive-reset", "nutrition", "traditional-healing"],
    hero: {
      tone: "lefay-lago-di-garda",
      alt: "Eco-luxury resort terraced into olive groves above Lake Garda",
      aiPrompt:
        "Cinematic view of an elegant eco-resort terraced into olive groves and lemon gardens on a hillside high above Lake Garda, infinity pool mirroring the lake, warm Italian afternoon light, Mediterranean serenity, editorial luxury",
      keywords: "lake garda hillside olive groves infinity pool italian light",
    },
    overview: [
      "Lefay built its own school of wellness rather than borrowing one. The Lefay SPA Method - developed with a scientific committee - reads the guest through classical Chinese medicine, then treats what it finds with Western therapeutic rigour, all on a hillside of olive and lemon above Lake Garda.",
      "The family-owned resort was conceived as eco-luxury before the term hardened into cliche: energy from renewable sources, architecture folded into the terraces, and a five-thousand-square-metre spa that feels less like a facility than a landscape of water, salt and silence.",
    ],
    location:
      "Above Gargnano on the quieter western shore of Lake Garda, amid eleven hectares of parkland, olive groves and woodland. Roughly two hours from Milan and ninety minutes from Verona, climbing from the lake road into stillness.",
    whoFor:
      "For those who want method with their Mediterranean. Guests addressing stress, sleep or metabolic drift who prefer their programme grounded in an actual therapeutic system - and their evenings grounded in Italian food and lake light.",
    philosophy:
      "Energy precedes symptom. The Lefay SPA Method uses the meridians and diagnostics of classical Chinese medicine to find imbalance early, then corrects it with a Western-calibrated programme of therapy, movement and nutrition.",
    signaturePrograms: [
      { name: "Rebalancing & Antistress", duration: "5-7 nights", summary: "The method's core - energy assessment, meridian-based treatments and breathing practice to bring a taxed system back to centre." },
      { name: "Sleep Wellbeing", duration: "5-7 nights", summary: "Chinese-medicine diagnostics applied to disturbed sleep, with acupuncture, phytotherapy and evening rituals to rebuild the night." },
      { name: "Weight & Detox", duration: "7-14 nights", summary: "A physician-supported metabolic programme pairing energy treatments with Lefay's calibrated Mediterranean cuisine." },
    ],
    medicalExpertise: [
      "Lefay SPA Method developed with a scientific committee of physicians",
      "Classical Chinese medicine diagnostics and acupuncture",
      "Phytotherapy and energy-based treatment protocols",
      "Medical check-ups, physiotherapy and postural analysis",
    ],
    accommodation:
      "Suites only, each facing the lake, in a warm Italian modernism of walnut, travertine and linen. The resort's certified sustainability is worn lightly - felt in the silence, not announced in the lobby.",
    cuisine:
      "Mediterranean cuisine graded to the guest: a full gourmet register on one side, the lighter Lefay Vital Gourmet on the other, both built on olive oil from the estate's own groves and the lake's uncommon produce.",
    gallery: [
      { tone: "lefay-lago-di-garda-a", alt: "Infinity pool over the lake", aiPrompt: "Serene infinity pool merging with Lake Garda far below, olive terraces, warm afternoon light, minimal Italian elegance, editorial", keywords: "infinity pool lake garda terraces afternoon light" },
      { tone: "lefay-lago-di-garda-b", alt: "Energy therapy suite", aiPrompt: "Warm minimal treatment suite for Chinese-medicine therapy, natural stone and walnut, soft light, quiet precision, luxury spa editorial", keywords: "treatment suite stone walnut chinese medicine spa" },
      { tone: "lefay-lago-di-garda-c", alt: "Vital Gourmet cuisine", aiPrompt: "Elegant light Mediterranean plate with estate olive oil, fine ceramic, Italian natural light, health-forward fine dining, editorial", keywords: "mediterranean cuisine olive oil plating fine dining" },
    ],
    experiences: [
      "Energy assessment with the Lefay medical team",
      "Salt-water lake and grotto circuit in the spa",
      "Trekking the energy-therapy trail through the estate's woods",
      "Private olive-grove tasting of the estate's oil",
    ],
    pricingGuidance:
      "Suites from approximately €700 per night; five-night SPA Method programmes from approximately €2,500 per person in addition to accommodation, quoted precisely on consultation.",
    faq: [
      { q: "Do I need to believe in Chinese medicine?", a: "No. The method uses its diagnostic lens, but treatments are delivered within a Western therapeutic framework and results are assessed in plainly measurable terms." },
      { q: "Is Lefay suitable for a partner not on a programme?", a: "Entirely. The resort is a destination in its own right - one guest may follow the method in full while the other simply enjoys the lake, the spa and the table." },
    ],
    related: ["lefay-dolomiti", "villa-eden", "rakxa"],
  },
  {
    slug: "lefay-dolomiti",
    name: "Lefay Resort & SPA Dolomiti",
    shortName: "Lefay Dolomiti",
    tier: "signature",
    country: "Italy",
    region: "Pinzolo, Trentino",
    coordinates: [46.1616, 10.7654],
    established: "2019",
    tagline: "The Lefay method, carried to altitude.",
    cardline: "Alpine wellness where the pistes meet the SPA Method.",
    categories: ["sleep", "detox", "executive-reset", "preventive-health", "longevity", "traditional-healing"],
    hero: {
      tone: "lefay-dolomiti",
      alt: "Contemporary alpine resort in larch and stone beneath the Brenta Dolomites",
      aiPrompt:
        "Cinematic view of a contemporary alpine wellness resort in larch wood and local stone beneath the jagged peaks of the Brenta Dolomites, snow dusting the forest, crisp golden mountain light, Italian alpine modernism, editorial luxury",
      keywords: "dolomites alpine resort larch stone snow peaks",
    },
    overview: [
      "Lefay's alpine house takes the method proven on Lake Garda and transposes it a kilometre higher, into the Brenta Dolomites. The same classical Chinese medicine, the same scientific committee, the same graded cuisine - now answered by thin air, larch forest and some of Italy's finest skiing at the door.",
      "Pinzolo gives the resort its double life. In winter it is the rare place where a morning on the Madonna di Campiglio pistes ends in an energy treatment rather than apres-ski; in summer the same slopes become the method's walking therapy, at altitude and in silence.",
    ],
    location:
      "At Pinzolo in Trentino's Val Rendena, directly beside the cable car into the Madonna di Campiglio ski area, with the Brenta Dolomites above. Around two and a half hours by car from Verona or Milan.",
    whoFor:
      "For those who want their reset to move. Skiers, hikers and altitude-lovers addressing sleep, stress or recovery, who prefer the discipline of the Lefay SPA Method wrapped in a genuinely sporting alpine season.",
    philosophy:
      "The mountain is part of the protocol. Lefay Dolomiti applies the SPA Method's Chinese-medicine diagnostics and Western rigour, then lets altitude, cold and forest complete what the treatment rooms begin.",
    signaturePrograms: [
      { name: "Rebalancing & Antistress", duration: "5-7 nights", summary: "The method's flagship at altitude - energy assessment and meridian-based therapy, sharpened by mountain air." },
      { name: "Sports Recovery & Performance", duration: "5-7 nights", summary: "Physiotherapy, movement analysis and energy treatments arranged around days on piste or trail." },
      { name: "Deep Sleep at Altitude", duration: "5-7 nights", summary: "Chinese-medicine sleep diagnostics paired with the mountain's natural circadian discipline of cold, light and exertion." },
    ],
    medicalExpertise: [
      "Lefay SPA Method under the group's scientific committee",
      "Classical Chinese medicine diagnostics and acupuncture",
      "Sports physiotherapy and alpine recovery protocols",
      "Medical consultations, postural and body-composition analysis",
    ],
    accommodation:
      "Suites and residences in larch, stone and wool flannel, every window framing the Brenta massif. Alpine warmth rendered with the family's usual restraint - closer to a mountain house than a grand hotel.",
    cuisine:
      "The two-register Lefay table translated to Trentino - Vital Gourmet lightness alongside a fuller alpine-Italian menu, built on mountain cheese, lake fish and the region's orchards, portioned to programme.",
    gallery: [
      { tone: "lefay-dolomiti-a", alt: "Indoor-outdoor pool beneath the peaks", aiPrompt: "Steaming indoor-outdoor pool facing snow-covered Brenta Dolomites, larch architecture, winter dusk light, serene alpine luxury, editorial", keywords: "alpine pool dolomites snow steam dusk" },
      { tone: "lefay-dolomiti-b", alt: "Alpine treatment suite", aiPrompt: "Warm minimal alpine treatment room in larch and stone, soft lamplight, wool textiles, quiet precision, luxury spa editorial", keywords: "alpine treatment room larch stone wool spa" },
      { tone: "lefay-dolomiti-c", alt: "Trentino wellness cuisine", aiPrompt: "Refined light alpine-Italian plate, mountain herbs, fine ceramic, crisp natural window light, health-forward fine dining, editorial", keywords: "alpine italian cuisine herbs plating refined" },
    ],
    experiences: [
      "Ski-in access to the Madonna di Campiglio area",
      "Energy assessment with the Lefay medical team",
      "Snowshoe walking therapy through larch forest",
      "Salt lake and alpine sauna circuit in the spa",
    ],
    pricingGuidance:
      "Suites from approximately €600 per night; SPA Method programmes from approximately €2,200 per person over five nights in addition to accommodation, quoted on consultation.",
    faq: [
      { q: "How does it differ from Lefay Lago di Garda?", a: "The method is identical; the medium changes. Garda offers Mediterranean softness and the lake; the Dolomiti house adds altitude, sport and the sharper discipline of the mountain seasons." },
      { q: "Can I combine skiing with a programme?", a: "That is largely the design. Treatments and consultations are scheduled around mornings on the piste, and the recovery programmes assume you will use them." },
    ],
    related: ["lefay-lago-di-garda", "villa-eden", "chiva-som"],
  },
  {
    slug: "villa-eden",
    name: "Villa Eden Leading Park Retreat",
    shortName: "Villa Eden",
    tier: "signature",
    country: "Italy",
    region: "Merano, South Tyrol",
    coordinates: [46.6621, 11.1521],
    established: "1983",
    tagline: "Longevity, practised at a domestic scale.",
    cardline: "An intimate medical-aesthetic retreat in Merano's gardens.",
    categories: ["longevity", "medical-wellness", "preventive-health", "detox", "womens-health"],
    hero: {
      tone: "villa-eden",
      alt: "Elegant villa retreat amid mature gardens with South Tyrolean mountains beyond",
      aiPrompt:
        "Cinematic view of an elegant historic villa retreat set in mature Mediterranean-alpine gardens in Merano, palm trees against snow-capped South Tyrolean peaks, soft golden light, intimate Italian refinement, editorial luxury",
      keywords: "merano villa gardens south tyrol palms mountains",
    },
    overview: [
      "Villa Eden has been refining one idea for four decades: that serious longevity and aesthetic medicine work best at a domestic scale. With only a few dozen guests in residence, the Merano retreat runs less like a clinic than a private house whose staff happen to include physicians.",
      "The setting compounds the effect. Merano's odd, fortunate microclimate - palms against snow peaks - made it a cure town for Habsburg Europe, and Villa Eden continues that lineage with personalised programmes in detox, longevity and medical aesthetics, written for each guest and adjusted daily.",
    ],
    location:
      "On the garden slopes of Merano in South Tyrol, where alpine and Mediterranean climates overlap. Around two hours from Verona and under an hour from Bolzano, in Italy's most quietly Austrian corner.",
    whoFor:
      "For those who find large wellness campuses defeating. Guests pursuing longevity, weight or aesthetic goals who want a physician's sustained personal attention, a familiar table, and the discretion of a house rather than the anonymity of a resort.",
    philosophy:
      "Health, beauty and longevity are one continuous discipline. Villa Eden pairs medical assessment with aesthetic science and daily personal adjustment, on the conviction that small numbers make deep care possible.",
    signaturePrograms: [
      { name: "Longevity Programme", duration: "7-14 nights", summary: "Medical assessment, epigenetic insight and a personalised anti-ageing protocol, followed beyond departure." },
      { name: "Detox & Metabolic Reset", duration: "7 nights", summary: "A physician-supervised purification pairing calibrated nutrition with the retreat's therapeutic spa." },
      { name: "Beauty & Regeneration", duration: "5-7 nights", summary: "Medical-aesthetic treatments woven into a wellness stay - results-led, never theatrical." },
    ],
    medicalExpertise: [
      "Resident medical team with four decades of programme heritage",
      "Longevity diagnostics and anti-ageing protocols",
      "Medical-aesthetic and dermatological treatments",
      "Personalised nutrition and metabolic assessment",
    ],
    accommodation:
      "A small number of rooms and suites across the villa and its garden wings, furnished with residential warmth - antiques, fresh flowers, mountain light. Guests are known by name within a day.",
    cuisine:
      "A personalised table rather than a menu - calorically and nutritionally prescribed to each programme, cooked with South Tyrolean produce and an Italian refusal to equate discipline with dullness.",
    gallery: [
      { tone: "villa-eden-a", alt: "Garden terrace at the villa", aiPrompt: "Elegant villa garden terrace in Merano, wrought iron and white linen, palms and snow peaks beyond, soft morning light, intimate luxury, editorial", keywords: "villa garden terrace merano palms peaks" },
      { tone: "villa-eden-b", alt: "Medical-aesthetic consultation", aiPrompt: "Refined private medical consultation room, physician and guest, warm residential interior, sense of discretion and long acquaintance, editorial", keywords: "private medical consultation refined residential" },
      { tone: "villa-eden-c", alt: "Prescribed cuisine", aiPrompt: "Delicate personalised wellness plate, South Tyrolean produce, fine porcelain, garden light through tall windows, editorial fine dining", keywords: "wellness cuisine south tyrol porcelain garden light" },
    ],
    experiences: [
      "Personal longevity consultation with the medical director",
      "Walks on Merano's Tappeiner promenade",
      "Therapeutic spa and beauty ateliers",
      "Vineyard excursions through South Tyrol",
    ],
    pricingGuidance:
      "Programme stays from approximately €900 per night including accommodation, prescribed cuisine and core treatments; medical and aesthetic protocols quoted on consultation.",
    faq: [
      { q: "How small is Villa Eden, really?", a: "A few dozen guests at capacity - deliberately. The scale is the method; it allows the medical team to adjust each programme daily and personally." },
      { q: "Are aesthetic treatments obligatory?", a: "Not at all. Many guests come purely for longevity or detox; the medical-aesthetic unit is simply there, and discreetly excellent, for those who want it." },
    ],
    related: ["lefay-lago-di-garda", "lefay-dolomiti", "clinique-la-prairie"],
  },
  {
    slug: "naviva",
    name: "Naviva, A Four Seasons Resort",
    shortName: "Naviva",
    tier: "signature",
    country: "Mexico",
    region: "Punta Mita, Riviera Nayarit",
    coordinates: [20.7726, -105.5215],
    established: "2022",
    tagline: "Fifteen tents, one jungle, no itinerary but yours.",
    cardline: "Adults-only luxury tents above the Pacific, deeply personalised.",
    categories: ["executive-reset", "sleep", "nutrition", "preventive-health"],
    hero: {
      tone: "naviva",
      alt: "Luxury canvas tent suspended in jungle canopy above the Pacific at Punta Mita",
      aiPrompt:
        "Cinematic view of a sculptural luxury tented villa perched in dense jungle canopy above the Pacific coast of Punta Mita, warm dusk light, canvas and timber architecture dissolving into forest, ocean glimmering below, editorial luxury",
      keywords: "punta mita jungle tent canopy pacific dusk luxury",
    },
    overview: [
      "Naviva is Four Seasons at its most radical: fifteen tents in the jungle above Punta Mita's Pacific shore, adults only, all-inclusive, and organised around a single question asked of each guest - what do you actually need? The answer, drawn out by a personal guide, becomes the stay.",
      "There is no spa menu, no schedule pinned to a door. Wellness here is woven through the enclave - temazcal fire rituals, breathwork on the point, bodywork in open-air palapas - and everything bends to the individual. It is the rare luxury retreat where personalisation is the architecture, not the brochure.",
    ],
    location:
      "Within the Punta Mita peninsula on Mexico's Riviera Nayarit, folded into forty-eight acres of jungle above the Pacific. Forty-five minutes from Puerto Vallarta's international airport, then a world quieter.",
    whoFor:
      "For couples and solo travellers exhausted by choice itself. High performers who want a reset shaped entirely around them - without programmes to select, decisions to make, or another guest's children at breakfast.",
    philosophy:
      "Listening is the treatment plan. Naviva pairs each guest with a personal guide who composes the stay in real time, trusting that transformation follows attention more reliably than protocol.",
    signaturePrograms: [
      { name: "Personal Reset", duration: "3-7 nights", summary: "The house mode - a guide-composed journey of bodywork, breath, ocean and fire, adjusted daily to what emerges." },
      { name: "Couples Reconnection", duration: "4-7 nights", summary: "Shared rituals and private experiences designed to return a couple to each other, jungle enforcing the quiet." },
      { name: "Sleep & Nervous-System Restoration", duration: "5-7 nights", summary: "Circadian-minded days of movement, temazcal heat, cold water and darkness, built to rebuild rest." },
    ],
    medicalExpertise: [
      "Personal wellness guides composing each stay individually",
      "Temazcal ceremonies led by traditional practitioners",
      "Bodywork, breathwork and sound therapy faculty",
      "Nutrition-led all-inclusive kitchen tuned to each guest",
    ],
    accommodation:
      "Fifteen tented villas of canvas, timber and stone suspended in the canopy, each with plunge pool and ocean or jungle outlook. The engineering is exact; the effect is of sleeping inside the forest.",
    cuisine:
      "A single open kitchen cooking Mexican coastal food to each guest's constitution and inclination - wood fire, local boats, jungle fruit - with the all-inclusive freedom to ask for anything, anywhere on the property.",
    gallery: [
      { tone: "naviva-a", alt: "Tented villa plunge pool", aiPrompt: "Luxury tented villa with plunge pool cantilevered into jungle canopy, Pacific beyond, warm dusk light, canvas and timber, editorial", keywords: "tent villa plunge pool jungle canopy pacific" },
      { tone: "naviva-b", alt: "Temazcal fire ritual", aiPrompt: "Traditional temazcal dome at night, firelight and steam, jungle darkness around, ceremonial and intimate, editorial photography", keywords: "temazcal fire ritual steam night jungle" },
      { tone: "naviva-c", alt: "Open-fire coastal cuisine", aiPrompt: "Mexican coastal dish cooked over wood fire, handmade ceramics, jungle-shaded outdoor table, warm natural light, kinfolk styling", keywords: "mexican coastal cuisine wood fire ceramics outdoor" },
    ],
    experiences: [
      "Temazcal ceremony with a traditional practitioner",
      "Dawn breathwork on the ocean point",
      "Jungle bathing walk with your personal guide",
      "Private bodywork in an open-air palapa",
    ],
    pricingGuidance:
      "All-inclusive tented villas from approximately US$3,500 per night for two, covering dining, experiences and a personal guide; minimum stays apply in high season.",
    faq: [
      { q: "Is Naviva a wellness clinic?", a: "No - and deliberately. It is a deeply personalised retreat; there are no diagnostics or medical protocols, only expert practitioners and a stay composed entirely around you." },
      { q: "What does all-inclusive cover?", a: "Effectively everything on the property - dining, beverages, experiences, most wellness sessions and your personal guide - so the stay unfolds without a single transaction." },
    ],
    related: ["como-shambhala-estate", "kamalaya", "chiva-som"],
  },
  {
    slug: "the-farm-san-benito",
    name: "The Farm at San Benito",
    shortName: "The Farm",
    tier: "signature",
    country: "Philippines",
    region: "Lipa, Batangas",
    coordinates: [13.9411, 121.1786],
    established: "2002",
    tagline: "A medical wellness farm beneath Mount Malarayat.",
    cardline: "Functional medicine and plant-based cuisine on a Philippine estate.",
    categories: ["medical-wellness", "detox", "nutrition", "preventive-health", "longevity", "weight-optimisation", "fitness-performance"],
    hero: {
      tone: "the-farm-san-benito",
      alt: "Tropical estate of coconut palms and pavilions beneath Mount Malarayat",
      aiPrompt:
        "Cinematic view of a lush tropical healing estate of coconut palms, ponds and open pavilions beneath the green ridges of Mount Malarayat, Philippines, soft humid morning light, peacocks on a lawn, serene editorial luxury",
      keywords: "philippines tropical estate coconut palms mountain pavilion",
    },
    overview: [
      "The Farm at San Benito takes its name literally. This is a working holistic sanctuary on a tropical estate below Mount Malarayat, where licensed physicians practise functional and integrative medicine, and where much of what heals the guest - the vegetables, the coconuts, the herbs - is grown within sight of the table.",
      "The model joins two things rarely found together: genuine medical supervision, including laboratory diagnostics and nurse-supported programmes, and a wholly plant-based kitchen that has made the estate a pilgrimage for those reversing lifestyle disease. Guests arrive for detox or recovery; many leave having rewritten how they eat.",
    ],
    location:
      "On a private estate at Lipa in Batangas province, beneath the forested slopes of Mount Malarayat. Around two hours' drive south of Manila, climbing into cooler air and coconut country.",
    whoFor:
      "For those whose wellness questions are really medical ones. Guests managing metabolic conditions, digestive disorders or post-illness recovery who want physician-led care, and anyone ready to test what a fully plant-based month can do.",
    philosophy:
      "Food, environment and medicine are one system. The Farm treats disease at its lifestyle roots, pairing functional diagnostics with living food and the estate's own unhurried tropical rhythm.",
    signaturePrograms: [
      { name: "Holistic Detox & Cleanse", duration: "7-14 nights", summary: "Physician-supervised purification with colon hydrotherapy, living food and daily monitoring by the medical team." },
      { name: "Diabetes & Metabolic Recovery", duration: "14-28 nights", summary: "A functional-medicine programme addressing metabolic disease through diagnostics, plant-based nutrition and movement." },
      { name: "Immune Recovery & Restoration", duration: "7-14 nights", summary: "Post-illness rebuilding through IV support, nutrition therapy and the estate's restorative environment." },
    ],
    medicalExpertise: [
      "Licensed integrative and functional-medicine physicians",
      "On-site laboratory diagnostics and nurse-supported care",
      "Colon hydrotherapy, IV therapy and detoxification suites",
      "Nutrition faculty behind a fully plant-based culinary programme",
    ],
    accommodation:
      "Villas, suites and traditional-inflected pavilions scattered through the palms, from garden rooms to pool villas of considerable privacy. The register is tropical-estate rather than resort - lawns, ponds, resident peacocks.",
    cuisine:
      "Plant-based cuisine of real ambition - much of it raw, nearly all of it grown on or near the estate - proving daily that therapeutic food and celebratory food can be the same plate.",
    gallery: [
      { tone: "the-farm-san-benito-a", alt: "Estate pool among the palms", aiPrompt: "Serene freeform pool wrapped in coconut palms and tropical planting, mountain ridge beyond, soft humid light, Philippine estate luxury, editorial", keywords: "tropical pool palms philippines estate mountain" },
      { tone: "the-farm-san-benito-b", alt: "Integrative medical consultation", aiPrompt: "Calm integrative medicine consultation room in tropical pavilion, physician and guest, natural materials, soft daylight, trust and care, editorial", keywords: "integrative medicine consultation tropical pavilion calm" },
      { tone: "the-farm-san-benito-c", alt: "Living food cuisine", aiPrompt: "Vibrant raw plant-based dish on handmade ceramic, tropical produce and edible flowers, natural light, kinfolk styling, editorial", keywords: "raw vegan cuisine tropical produce ceramic vibrant" },
    ],
    experiences: [
      "Functional-medicine consultation and laboratory assessment",
      "Living-food culinary class in the estate kitchen",
      "Sunrise yoga beneath Mount Malarayat",
      "Guided walk through the estate's organic gardens",
    ],
    pricingGuidance:
      "Programme stays from approximately US$450 per night including accommodation, plant-based full board and core medical services; multi-week medical programmes quoted on consultation.",
    faq: [
      { q: "Is the plant-based diet compulsory?", a: "The estate's kitchens are entirely plant-based, and the cuisine is central to the medicine. Most guests find it a revelation rather than a restriction." },
      { q: "Can The Farm support serious medical conditions?", a: "Within clear limits, yes - licensed physicians, diagnostics and nursing support allow genuinely medical programmes, with suitability assessed before arrival." },
    ],
    related: ["kamalaya", "chiva-som", "rakxa"],
  },
];
