/**
 * PROGRAMS - the disciplines we curate for.
 *
 * A guest rarely arrives asking for a resort; they arrive with a
 * question - about sleep, longevity, burnout. Programs are the lens
 * through which the collection is organised around those questions.
 */

import { resorts, type Resort } from "./resorts";

export interface Program {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  intro: string[];
  /** The signals that bring a guest to this discipline */
  signals: string[];
  /** What a considered programme tends to include */
  approach: { title: string; body: string }[];
  /** Conversational questions, answered plainly - rendered on-page and
      mirrored into FAQPage schema for search and generative engines */
  faq: { q: string; a: string }[];
  image: { tone: string; alt: string; aiPrompt: string; keywords: string; src?: string };
}

export const programs: Program[] = [
  {
    slug: "longevity",
    name: "Longevity",
    eyebrow: "Healthspan",
    tagline: "Add life to years, not merely years to life.",
    intro: [
      "Longevity is no longer a question of lifespan but of healthspan - the number of years lived in full vigour. The finest clinics now measure biological age, epigenetic markers and cellular vitality, then act on them.",
      "We match you to the houses defining this frontier, where longevity is a physician-led protocol rather than a supplement shelf.",
    ],
    signals: [
      "A wish to understand your true biological age",
      "Family history you intend to outmanoeuvre",
      "Early markers of metabolic or cardiovascular drift",
      "A decades-long horizon and the resources to invest in it",
    ],
    approach: [
      { title: "Diagnose deeply", body: "Comprehensive screening - genetic, epigenetic and cardiovascular - to establish a true baseline." },
      { title: "Intervene precisely", body: "Cellular, nutritional and regenerative protocols calibrated to your biology, not a template." },
      { title: "Sustain at home", body: "A forward protocol and cadence of review so gains compound long after departure." },
    ],
    faq: [
      {
        q: "What is the best longevity clinic in the world?",
        a: "Clinique La Prairie, above Lake Geneva, is widely regarded as the original and most complete longevity clinic - ninety years of cellular science under one roof. Chenot Palace Weggis and SHA Wellness Clinic (Spain and Mexico) are its closest peers. We match you to the house that fits your biology, your goals and your calendar.",
      },
      {
        q: "How long should a longevity programme be?",
        a: "Seven nights is the meaningful minimum - enough for full diagnostics, intervention and a forward protocol. The most committed guests return annually, treating the programme as a standing appointment with their future self.",
      },
      {
        q: "What does a luxury longevity retreat cost?",
        a: "Expect from approximately CHF 30,000 per person for seven nights at Clinique La Prairie, from CHF 8,500 at Chenot Palace Weggis, and from €6,500 at SHA Spain - each all-inclusive of medical assessment, accommodation and cuisine.",
      },
    ],
    image: { tone: "prog-longevity", alt: "Still alpine lake at first light", aiPrompt: "Serene alpine lake at first light, mirror-still, soft mist, sense of time and permanence, muted palette, editorial", keywords: "alpine lake dawn still mist calm" },
  },
  {
    slug: "detox",
    name: "Detox",
    eyebrow: "Purification",
    tagline: "Subtract, and let the body remember itself.",
    intro: [
      "A true detox is a medical process, not a juice. The leading clinics guide the body's own elimination systems - hepatic, digestive, lymphatic - through supervised protocols that leave metabolism reset and energy restored.",
      "We reserve programmes that are rigorous, physician-supervised and, crucially, kind to the guest who must return to a demanding life.",
    ],
    signals: [
      "Persistent fatigue that sleep no longer resolves",
      "Digestive strain, inflammation or metabolic fog",
      "A season of excess to properly close",
      "The wish to begin a longevity path from a clean baseline",
    ],
    approach: [
      { title: "Assess and prepare", body: "Diagnostics and a gentle ramp so the body detoxifies safely and without crisis." },
      { title: "Guide elimination", body: "Hydro-, phyto- and nutritional therapies that support the organs of elimination." },
      { title: "Rebuild", body: "A structured return to nourishment that consolidates the reset rather than undoing it." },
    ],
    faq: [
      {
        q: "What is the best luxury detox retreat in the world?",
        a: "Chenot Palace Weggis on Lake Lucerne defines the modern medical detox; Lanserhof Lans in the Tyrol is the benchmark for gut-first Mayr medicine. For a warmer setting, SHA Wellness Clinic and Chiva-Som in Thailand deliver rigorous cleanses with more sun. The right answer depends on how demanding a programme you want.",
      },
      {
        q: "Is a medical detox safe?",
        a: "At the houses we curate, yes - every programme is physician-designed and supervised daily, beginning with diagnostics and calibrated to your capacity. This is precisely what separates a clinic from a juice retreat.",
      },
      {
        q: "How many days do you need for a proper detox?",
        a: "Seven nights is the honest minimum for a metabolic reset; ten to fourteen consolidates it. Shorter stays refresh, but they do not transform.",
      },
    ],
    image: { tone: "prog-detox", alt: "Water surface in soft light", aiPrompt: "Abstract clear water surface in soft light, gentle ripples, purity and clarity, muted cool palette, editorial minimal", keywords: "clear water ripple light purity minimal" },
  },
  {
    slug: "executive-reset",
    name: "Executive Reset",
    eyebrow: "Performance",
    tagline: "For the mind that cannot afford to stop - and must.",
    intro: [
      "The cost of sustained performance is rarely visible until it is acute. An executive reset intervenes before that point, restoring sleep, stress physiology and cognitive clarity in a concentrated, results-led window.",
      "We curate the programmes built for the time-poor principal - measurable, discreet, and calibrated to a life that will not pause for long.",
    ],
    signals: [
      "Burnout, or its early warning signs",
      "Sleep that has quietly deteriorated",
      "Decision fatigue and diminished clarity",
      "A narrow window and a need for real return on it",
    ],
    approach: [
      { title: "Measure the load", body: "Stress physiology, sleep architecture and recovery capacity, assessed objectively." },
      { title: "Restore the system", body: "Nervous-system regulation, sleep restoration and targeted physical recovery." },
      { title: "Re-enter deliberately", body: "Habits and protocols engineered to survive contact with your calendar." },
    ],
    faq: [
      {
        q: "What is the best retreat for burnout and executive fatigue?",
        a: "Lanserhof Lans's Executive Reset and Chenot Palace Weggis's Recover & Energise are engineered specifically for depleted leaders - measurable, medical and discreet. Chiva-Som's Optimal Performance suits those who want the same rigour wrapped in Thai warmth.",
      },
      {
        q: "How quickly can an executive reset show results?",
        a: "Most guests report restored sleep and clarity within a seven-night programme, with objective markers - stress physiology, recovery capacity - improving alongside. The protocols are designed to survive contact with your calendar afterwards.",
      },
      {
        q: "Can a reset be kept completely private?",
        a: "Yes. Discretion is the baseline at every house we work with, and your enquiry is handled with the confidentiality of a family office. Several houses can arrange entirely private arrival, dining and treatment schedules.",
      },
    ],
    image: { tone: "prog-exec", alt: "Quiet mountain path at dawn", aiPrompt: "A single quiet mountain path at dawn, solitary and still, soft light, sense of clarity and pause, muted palette, editorial", keywords: "mountain path dawn solitude clarity calm" },
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    eyebrow: "Balance",
    tagline: "Care attuned to the female body, across every chapter.",
    intro: [
      "From hormonal balance to perimenopause, fertility to bone and cardiovascular health, women's physiology deserves programmes designed for it - not adapted from a male default.",
      "We curate clinics with genuine expertise in the female body, delivered with the discretion and depth the subject warrants.",
    ],
    signals: [
      "Hormonal changes seeking expert navigation",
      "Perimenopause or menopause managed proactively",
      "Fertility, recovery or postnatal restoration",
      "Long-term bone, heart and metabolic health",
    ],
    approach: [
      { title: "Understand the terrain", body: "Hormonal, metabolic and bone-health diagnostics specific to the female body." },
      { title: "Balance and support", body: "Nutritional, medical and mind-body protocols attuned to your chapter of life." },
      { title: "Plan the long arc", body: "A programme that anticipates the transitions ahead, not merely the present." },
    ],
    faq: [
      {
        q: "What is the best wellness retreat for women's health and hormonal balance?",
        a: "SHA Wellness Clinic and Clinique La Prairie both run dedicated women's health programmes with genuine hormonal and metabolic expertise; JOALI BEING in the Maldives offers a gentler, nature-led approach to the same questions. We advise based on your chapter of life and what you want measured.",
      },
      {
        q: "Are there luxury retreats for menopause and perimenopause?",
        a: "Yes - this is one of the fastest-maturing disciplines in medical wellness. The leading clinics now treat perimenopause proactively, with hormonal diagnostics, nutrition and bone-health protocols designed for the female body rather than adapted from a male default.",
      },
    ],
    image: { tone: "prog-womens", alt: "Soft light through linen", aiPrompt: "Soft natural light through linen curtain, warm serene interior, sense of calm and care, muted warm palette, editorial", keywords: "soft light linen warm calm serene interior" },
  },
  {
    slug: "sleep",
    name: "Sleep",
    eyebrow: "Restoration",
    tagline: "Rebuild the most valuable performance asset of all.",
    intro: [
      "Sleep is the foundation beneath every other intervention. When it fails, cognition, mood, metabolism and immunity follow. The leading clinics now treat sleep as a discipline in its own right - measurable, and recoverable.",
      "We match you to programmes that rebuild the architecture of deep sleep through chronobiology, environment and mind-body practice.",
    ],
    signals: [
      "Sleep that no longer restores, however long",
      "Frequent waking, or a mind that will not settle",
      "Travel and time-zones that have broken your rhythm",
      "Daytime fatigue undermining performance",
    ],
    approach: [
      { title: "Map your sleep", body: "Objective assessment of sleep architecture, circadian rhythm and contributing factors." },
      { title: "Rebuild the night", body: "Chronobiology, light, temperature and mind-body therapies to restore deep and REM sleep." },
      { title: "Protect the gain", body: "An environment and routine designed to hold, translated for home and travel." },
    ],
    faq: [
      {
        q: "What is the best sleep retreat in the world?",
        a: "Chiva-Som's Sleep Enhancement programme in Thailand and Ananda's Sleep Recovery in the Himalayas lead the field, with classical Ayurveda and Yoga Nidra; SHA Wellness Clinic adds clinical sleep-medicine diagnostics, and Sensei Lanai pairs rest with data-guided precision. Where geography itself is part of the medicine, we weigh the setting as carefully as the protocol.",
      },
      {
        q: "Can a retreat genuinely fix broken sleep?",
        a: "When sleep is assessed objectively and rebuilt through chronobiology, environment and practice - rather than treated with a pillow menu - the gains are real and measurable. The best programmes also hand you a routine designed to hold at home and through travel.",
      },
    ],
    image: { tone: "prog-sleep", alt: "Moonlit calm water at night", aiPrompt: "Calm dark water under moonlight, deep blue and silver, profound stillness and rest, editorial minimal nightscape", keywords: "moonlight water night calm stillness rest" },
  },
  {
    slug: "biohacking",
    name: "Biohacking",
    eyebrow: "Optimisation",
    tagline: "The measurable pursuit of your own upper limit.",
    intro: [
      "Biohacking, done seriously, is data-driven self-optimisation - cryotherapy, hyperbaric oxygen, red light, IV protocols and continuous biomarkers, deployed with clinical judgement rather than gadget enthusiasm.",
      "We curate the clinics where these tools are wielded by physicians, integrated into a coherent programme rather than sold à la carte.",
    ],
    signals: [
      "A drive to optimise performance and recovery",
      "Comfort with data, wearables and biomarkers",
      "Interest in regenerative and cellular therapies",
      "A wish for cutting-edge tools under expert supervision",
    ],
    approach: [
      { title: "Quantify", body: "Comprehensive biomarker and performance testing to establish what to optimise." },
      { title: "Augment", body: "Cryo, hyperbaric, photobiomodulation and IV protocols, selected for your goals." },
      { title: "Iterate", body: "A measurable feedback loop that continues, with guidance, beyond your stay." },
    ],
    faq: [
      {
        q: "What is the best biohacking retreat or clinic?",
        a: "SHA Wellness Clinic Mexico brings the full toolkit - cryotherapy, hyperbaric oxygen, IV protocols - under physician direction; Chenot Palace Weggis pairs comparable technology with the deepest diagnostics in the Alps. The difference from a gadget spa is that here the data leads and the tools follow.",
      },
      {
        q: "Is biohacking at these clinics evidence-based?",
        a: "The houses we curate deploy these modalities under medical supervision, calibrated against your own biomarkers - a feedback loop, not a menu of experiences. Anything that cannot be measured is treated as theatre.",
      },
    ],
    image: { tone: "prog-biohack", alt: "Cool geometric light study", aiPrompt: "Abstract cool geometric light study, clean lines, precision and technology rendered calm, muted palette, editorial minimal", keywords: "abstract light geometry precision cool minimal" },
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    eyebrow: "Nourishment",
    tagline: "Food as the first and most enduring medicine.",
    intro: [
      "Every serious wellness programme rests on nutrition - from macrobiotic and Ayurvedic traditions to microbiome science and metabolic testing. The best clinics make therapeutic eating genuinely desirable.",
      "We curate the houses where nutrition is both clinically precise and a pleasure at the table, and where you relearn how to eat for the decades ahead.",
    ],
    signals: [
      "Metabolic or digestive concerns to resolve",
      "A wish to eat for longevity and performance",
      "Interest in the microbiome and personalised nutrition",
      "The desire to change habits, sustainably",
    ],
    approach: [
      { title: "Test and understand", body: "Metabolic, microbiome and nutritional assessment to personalise your plan." },
      { title: "Learn by doing", body: "Therapeutic cuisine, cooking sessions and re-education in how and what to eat." },
      { title: "Carry it home", body: "Principles and habits designed to outlast the stay and travel with you." },
    ],
    faq: [
      {
        q: "What is the best retreat for weight loss and metabolic health?",
        a: "SHA Wellness Clinic's Healthy Weight programme is the most complete - macrobiotic nutrition under genuine medical supervision - while Lanserhof's Mayr cure resets metabolism from the gut outward. Both aim at sustainable change rather than a number on departure day.",
      },
      {
        q: "Will I actually enjoy the food at a nutrition retreat?",
        a: "At these houses, yes - SHA made macrobiotic cuisine genuinely desirable, and Chiva-Som's kitchen proves healthy eating need never be dull. Discipline and pleasure at the table are not in conflict when the chef is as serious as the physician.",
      },
    ],
    image: { tone: "prog-nutrition", alt: "Seasonal produce, still life", aiPrompt: "Elegant still life of seasonal produce and herbs on linen, natural light, kinfolk styling, muted warm palette, editorial", keywords: "seasonal produce still life linen natural light" },
  },
  {
    slug: "preventive-health",
    name: "Preventive Health",
    eyebrow: "Foresight",
    tagline: "The most sophisticated medicine is the kind you never need.",
    intro: [
      "Preventive health is the discipline of finding what has not yet declared itself - through comprehensive screening, biomarkers and imaging - and acting while action is still elective.",
      "We curate clinics that pair genuine diagnostic depth with the hospitality to make an annual health investment something you anticipate rather than endure.",
    ],
    signals: [
      "A wish for a truly comprehensive health baseline",
      "Family history you intend to stay ahead of",
      "A demanding life that leaves health un-examined",
      "The preference to prevent rather than to treat",
    ],
    approach: [
      { title: "Screen comprehensively", body: "Full diagnostics - bloodwork, imaging, cardiovascular and metabolic - in a single considered stay." },
      { title: "Interpret expertly", body: "Physician-led interpretation that turns data into a clear, prioritised plan." },
      { title: "Act early", body: "Interventions and monitoring that address risk while it remains elective." },
    ],
    faq: [
      {
        q: "Where can I get a comprehensive executive health check in luxury surroundings?",
        a: "Clinique La Prairie, Chenot Palace Weggis and Lanserhof Lans all pair hospital-grade diagnostics - bloodwork, imaging, cardiovascular and metabolic screening - with the comfort of a grand hotel. One considered week replaces a year of fragmented appointments.",
      },
      {
        q: "How often should preventive screening be repeated?",
        a: "Annually, for most of our clients - the value compounds when results are tracked year over year by the same clinical team. We hold that thread between visits so nothing is lost.",
      },
    ],
    image: { tone: "prog-preventive", alt: "Calm horizon at dawn", aiPrompt: "Wide calm horizon at dawn, sea meeting sky, sense of foresight and clarity, muted palette, editorial minimal", keywords: "horizon dawn sea sky calm foresight minimal" },
  },
  {
    slug: "medical-wellness",
    name: "Medical Wellness",
    eyebrow: "Rigour",
    tagline: "Where five-star hospitality meets genuine medicine.",
    intro: [
      "Medical wellness is the rare hybrid the finest clinics have perfected - real diagnostics, physicians and clinical protocols, delivered with the grace of a grand hotel. Neither hospital nor spa, but the best of both.",
      "We curate the houses that never ask you to choose between clinical seriousness and true comfort.",
    ],
    signals: [
      "A desire for medical substance, not spa theatre",
      "Specific conditions to address under expert care",
      "The wish for diagnostics you can act upon",
      "An expectation of both rigour and refinement",
    ],
    approach: [
      { title: "Clinical foundation", body: "On-site physicians, diagnostics and evidence-led protocols underpin the entire stay." },
      { title: "Hospitality equal to it", body: "The comfort, cuisine and discretion of a grand hotel, without compromise." },
      { title: "Continuity of care", body: "Findings and protocols that connect to your physicians and your life at home." },
    ],
    faq: [
      {
        q: "What is the best medical wellness clinic in the world?",
        a: "Clinique La Prairie in Montreux, Lanserhof Lans in Austria, Chenot Palace Weggis on Lake Lucerne and SHA Wellness Clinic in Spain and Mexico form the recognised first rank - real physicians and diagnostics, delivered with grand-hotel hospitality. Which is best depends entirely on what you need treated, measured or prevented.",
      },
      {
        q: "What makes a medical wellness clinic different from a spa?",
        a: "Physicians, diagnostics and evidence-led protocols underpin the entire stay - the spa is in service of the medicine, not the other way around. If nothing is measured on arrival and departure, it is a spa.",
      },
    ],
    image: { tone: "prog-medical", alt: "Refined clinical interior in warm light", aiPrompt: "Refined modern clinical interior bathed in warm light, minimal and precise yet inviting, muted palette, editorial", keywords: "modern clinical interior warm minimal refined" },
  },
  {
    slug: "mind-wellbeing",
    name: "Mind & Emotional Wellbeing",
    eyebrow: "Stillness",
    tagline: "The quietest luxury is a settled mind.",
    intro: [
      "Stress, anxiety and emotional depletion now bring as many guests to the world's great retreats as any physical concern. The finest houses treat the mind with the same seriousness as the body - through mindfulness, therapy, breathwork and traditions that predate the term wellbeing by centuries.",
      "We curate the sanctuaries where emotional work is done with depth and discretion - places built for the guest who appears fine and is quietly running on empty.",
    ],
    signals: [
      "Stress that rest alone no longer resolves",
      "Anxiety, low mood or emotional exhaustion",
      "A major transition - loss, change, reinvention",
      "The wish to build a durable inner practice",
    ],
    approach: [
      { title: "Be heard first", body: "Unhurried consultations with psychologists, counsellors or masters of contemplative traditions before any programme is set." },
      { title: "Practice daily", body: "Meditation, breathwork, movement and therapy sequenced into a rhythm the nervous system can trust." },
      { title: "Leave with a practice", body: "A personal, portable discipline - not a memory of calm, but the means to return to it." },
    ],
    faq: [
      {
        q: "What is the best luxury retreat for stress and mental wellbeing?",
        a: "Kamalaya Koh Samui and Miraval Arizona are the acknowledged leaders - decades of genuine emotional-wellbeing practice each. COMO Shambhala Estate, Mii amo and Fivelements offer comparable depth in Bali and Sedona; Sensei Lanai adds a data-guided approach. We match the house to the nature of what you are carrying.",
      },
      {
        q: "Is this therapy or a holiday?",
        a: "Both, held in careful balance. Expect real practitioners - psychologists, mindfulness teachers, traditional healers - inside a stay that still feels like the finest travel of your year.",
      },
    ],
    image: { tone: "prog-mind", alt: "A still zen garden in soft light", aiPrompt: "Serene Japanese zen garden in soft morning light, raked gravel, profound stillness, muted editorial palette", keywords: "zen garden stillness calm meditation" },
  },
  {
    slug: "weight-optimisation",
    name: "Weight Optimisation",
    eyebrow: "Recomposition",
    tagline: "Sustainable change, medically led - never a bootcamp.",
    intro: [
      "The finest weight programmes are not about deprivation but recalibration - metabolic testing, medical supervision, precise nutrition and movement, sequenced so the change endures after departure.",
      "We curate the clinics where weight is treated as physiology rather than willpower, and where the table remains a pleasure even under discipline.",
    ],
    signals: [
      "Weight that no longer responds to effort",
      "Metabolic drift - energy, sleep and appetite out of rhythm",
      "A medical reason to change, stated plainly by your physician",
      "The wish for a result that survives re-entry",
    ],
    approach: [
      { title: "Measure the metabolism", body: "Body composition, metabolic and hormonal testing establish why - before any programme prescribes what." },
      { title: "Recompose, not restrict", body: "Medical nutrition, strength and movement calibrated to preserve muscle and reset appetite signalling." },
      { title: "Engineer the return", body: "Habits, follow-up and physician handover designed for the first ninety days at home, where results are truly decided." },
    ],
    faq: [
      {
        q: "What is the best luxury weight loss retreat in the world?",
        a: "SHA Wellness Clinic in Spain and Mexico leads for medical weight programmes; Lanserhof Lans resets metabolism from the gut outward; The Farm at San Benito, Cal-a-Vie, Golden Door and Canyon Ranch offer immersive, coached transformation in remarkable settings. The right choice depends on how medical you want the journey to be.",
      },
      {
        q: "How much weight change is realistic in one stay?",
        a: "A medically honest programme optimises for composition and metabolic reset rather than a scale number - typically visible, sustainable change within two weeks, engineered to continue at home rather than rebound.",
      },
    ],
    image: { tone: "prog-weight", alt: "Morning light across a calm landscape", aiPrompt: "Calm dawn landscape, long soft light, sense of renewal and discipline, muted editorial palette", keywords: "dawn landscape renewal calm discipline" },
  },
  {
    slug: "fitness-performance",
    name: "Fitness & Performance",
    eyebrow: "Vitality",
    tagline: "Strength, capacity and recovery, coached at the highest level.",
    intro: [
      "A distinct discipline from the medical reset: the pursuit of physical capacity itself. The best houses pair elite coaching and sports science with recovery therapies that professional athletes would recognise.",
      "We curate the resorts where training is joyful, precisely measured and matched by world-class recovery - so you leave fitter than you have been in years, not merely rested.",
    ],
    signals: [
      "Fitness that has plateaued despite effort",
      "An event, expedition or season to prepare for",
      "The wish to train seriously without training alone",
      "Recovery that no longer keeps pace with output",
    ],
    approach: [
      { title: "Test capacity", body: "Movement screening, VO2 and strength baselines - training built on measurement, not guesswork." },
      { title: "Train with intent", body: "Daily coached sessions across strength, endurance and mobility, scaled to your level and goals." },
      { title: "Recover like a professional", body: "Physiotherapy, cold and heat, sleep and nutrition treated as part of the training, not a reward for it." },
    ],
    faq: [
      {
        q: "What is the best luxury fitness retreat?",
        a: "BodyHoliday Saint Lucia built its entire island around this question; Chiva-Som's Optimal Performance and Canyon Ranch's sports-science depth lead in Asia and America; RAKxa and Sensei Lanai add clinical-grade testing. Golden Door remains the definitive coached week.",
      },
      {
        q: "Do I need to be fit already?",
        a: "No. Every house we curate scales from returning-to-movement to genuinely athletic - the constant is expert coaching and honest assessment, not a required standard on arrival.",
      },
    ],
    image: { tone: "prog-fitness", alt: "First light over open terrain", aiPrompt: "Athlete-less landscape at first light, open terrain, energy and possibility, muted editorial palette", keywords: "dawn terrain energy movement" },
  },
  {
    slug: "traditional-healing",
    name: "Ancient & Traditional Healing",
    eyebrow: "Lineage",
    tagline: "Medicine measured in millennia, practised without dilution.",
    intro: [
      "Long before the wellness industry, there were the great healing traditions - Ayurveda, classical Chinese medicine, Balinese healing, Mayan ritual, Traditional Arabic and Islamic Medicine, the Japanese onsen. The finest houses practise them with lineage and rigour, not as spa theatre.",
      "We curate the places where these traditions are held by genuine masters - and where a sceptical, modern guest discovers why they endured.",
    ],
    signals: [
      "The sense that conventional approaches have reached their limit",
      "A wish to be treated as a whole system, not a symptom",
      "Curiosity about a tradition, pursued at the source",
      "The desire for healing with cultural and spiritual depth",
    ],
    approach: [
      { title: "Begin with the tradition's own diagnosis", body: "Pulse, tongue, constitution, energy - each lineage reads the body in its own language before treating it." },
      { title: "Submit to the sequence", body: "Traditional protocols unfold in ordered stages across days or weeks; the discipline is the medicine." },
      { title: "Integrate, do not appropriate", body: "The best houses pair tradition with modern medical oversight, so depth never comes at the cost of safety." },
    ],
    faq: [
      {
        q: "Where is the best authentic Ayurveda or traditional healing retreat?",
        a: "Ananda in the Himalayas for classical Ayurveda above the Ganges; Kamalaya and Fivelements for Asian healing traditions; both Lefay resorts for classical Chinese medicine in Italy; Zulal for Traditional Arabic and Islamic Medicine; Chable for Mayan ritual; Amanemu and Aman Kyoto for the Japanese bathing tradition.",
      },
      {
        q: "Do these traditions work alongside modern medicine?",
        a: "At the houses we curate, yes - programmes are medically supervised, findings are shared with your physicians where you wish, and tradition is treated as a complement to modern care, never a replacement for it.",
      },
    ],
    image: { tone: "prog-traditional", alt: "Ritual vessels in warm candlelight", aiPrompt: "Traditional healing vessels, brass and ceramic, warm candlelight, sense of lineage and ceremony, editorial", keywords: "ritual brass candlelight tradition ceremony" },
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
export const programSlugs = programs.map((p) => p.slug);

/** Resorts whose disciplines include this program */
export const resortsForProgram = (slug: string): Resort[] =>
  resorts.filter((r) => r.categories.includes(slug));
