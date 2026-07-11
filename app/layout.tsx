import type { Metadata } from "next";
import { display, body } from "@/lib/fonts";
import { ThemeProvider, themeInitScript } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = "https://resetandbeyond.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reset & Beyond — Beyond Wellness. Beyond Luxury.",
    template: "%s — Reset & Beyond",
  },
  description:
    "An invitation-only wellness concierge for the world's most discerning few. We curate, compare and reserve the finest transformational retreats — from Chenot to Clinique La Prairie, JOALI BEING to Ananda.",
  keywords: [
    "luxury wellness concierge",
    "transformational retreats",
    "longevity clinics",
    "UHNI wellness",
    "medical wellness",
    "private wellness advisor",
  ],
  authors: [{ name: "Reset & Beyond" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Reset & Beyond — Beyond Wellness. Beyond Luxury.",
    description:
      "An invitation-only wellness concierge for the world's most discerning few.",
    siteName: "Reset & Beyond",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reset & Beyond — Beyond Wellness. Beyond Luxury.",
    description:
      "An invitation-only wellness concierge for the world's most discerning few.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Set palette before first paint — no flash of the wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            {/* Skip link — accessibility first, always */}
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
      </body>
    </html>
  );
}
