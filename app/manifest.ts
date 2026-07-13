import type { MetadataRoute } from "next";

/** Web app manifest - completes the technical-SEO/PWA checklist */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reset & Beyond - Luxury Wellness Resorts, Curated",
    short_name: "Reset & Beyond",
    description:
      "An invitation-only concierge curating the world's best luxury wellness resorts and transformational retreats.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F4EE",
    theme_color: "#26241F",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
