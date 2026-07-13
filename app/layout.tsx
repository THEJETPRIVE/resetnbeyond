import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { display, body } from "@/lib/fonts";
import { ThemeProvider, themeInitScript } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, organizationSchema, websiteSchema, SITE_URL } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Relative canonical resolves per-route - every page declares itself
  // the canonical version of its own URL.
  alternates: { canonical: "./" },
  title: {
    default: "Reset & Beyond | Luxury Wellness Resorts & Retreats, Curated",
    template: "%s | Reset & Beyond",
  },
  description:
    "The private concierge for the world's best luxury wellness resorts and transformational retreats. We curate, compare and reserve Chenot Palace, Clinique La Prairie, SHA, Lanserhof, JOALI BEING, Six Senses Vana, Ananda and Chiva-Som.",
  keywords: [
    "luxury wellness resort",
    "luxury wellness retreat",
    "best luxury wellness resorts",
    "best wellness retreats in the world",
    "luxury wellness concierge",
    "transformational retreats",
    "longevity clinic",
    "medical wellness resort",
    "detox retreat",
    "executive burnout retreat",
    "luxury spa resort",
    "private wellness advisor",
  ],
  authors: [{ name: "Reset & Beyond" }],
  category: "Travel & Wellness",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Reset & Beyond | Luxury Wellness Resorts & Retreats, Curated",
    description:
      "An invitation-only concierge curating the world's best luxury wellness resorts and transformational retreats.",
    siteName: "Reset & Beyond",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Reset & Beyond - luxury wellness resorts, curated",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reset & Beyond | Luxury Wellness Resorts & Retreats, Curated",
    description:
      "An invitation-only concierge curating the world's best luxury wellness resorts and transformational retreats.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Set palette before first paint - no flash of the wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Warm up the image CDN before the hero requests its plate (LCP) */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Who we are, for search engines and generative engines alike */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            {/* Skip link - accessibility first, always */}
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
        {/* Privacy-friendly, cookieless analytics + Core Web Vitals RUM */}
        <Analytics />
        <SpeedInsights />
        {/* GA4 - only if NEXT_PUBLIC_GA_ID is configured */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
