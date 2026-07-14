/**
 * DESTINATIONS - the geographic browsing axis.
 *
 * Guests think in places as often as in disciplines: "a wellness resort
 * in the Alps", "a retreat in Bali". Each destination gathers houses by
 * country and stands as its own landing page.
 */

export interface Destination {
  slug: string;
  name: string;
  line: string;
  countries: string[];
}

export const destinations: Destination[] = [
  {
    slug: "alps-and-italy",
    name: "The Alps & Italy",
    line: "Clinical precision at altitude - the lake clinics of Switzerland, the Tyrol, Baden-Baden and Italy from the Dolomites to Fiuggi.",
    countries: ["Switzerland", "Austria", "Germany", "Italy"],
  },
  {
    slug: "iberia-and-atlantic",
    name: "Iberia & the Atlantic",
    line: "Integrative medicine in southern light - Spain's clinical pioneers and Portugal's river valleys and ocean coves.",
    countries: ["Spain", "Portugal"],
  },
  {
    slug: "asia-and-indian-ocean",
    name: "Asia & the Indian Ocean",
    line: "The great holistic traditions at the source - Thailand, Bali, the Himalayas, the Philippines, Arabia and the atolls of the Maldives.",
    countries: ["Thailand", "Indonesia", "Philippines", "India", "Maldives", "Qatar"],
  },
  {
    slug: "japan",
    name: "Japan",
    line: "The bathing tradition perfected - onsen, gardens and a national genius for quiet.",
    countries: ["Japan"],
  },
  {
    slug: "north-america",
    name: "North America",
    line: "The American originals - desert sanctuaries of the Southwest, California's coached estates, Hawaii's data-guided island.",
    countries: ["United States"],
  },
  {
    slug: "latin-america-caribbean",
    name: "Latin America & the Caribbean",
    line: "Jungle, cenote and reef - Mexico's healing estates, Costa Rica's green heights and the islands beyond.",
    countries: ["Mexico", "Costa Rica", "Saint Lucia"],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
