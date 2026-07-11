import { Cormorant_Garamond, Inter } from "next/font/google";

/**
 * Display serif — Cormorant Garamond.
 * High-contrast, thin, and quietly aristocratic. Loaded across the
 * lighter weights only; luxury type is never bold.
 */
export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Body grotesque — Inter.
 * A near-invisible workhorse for prose, labels and UI. It exists to
 * disappear so the serif and the imagery can speak.
 */
export const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});
