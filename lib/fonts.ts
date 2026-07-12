import localFont from "next/font/local";
import { Inter } from "next/font/google";

/**
 * Display serif — Boska (Fontshare).
 * A high-contrast, characterful display serif used across every heading.
 * Loaded from the self-hosted variable woff2 (weights 200–900, upright +
 * italic) via next/font/local — fast, no layout shift, no external request.
 */
export const display = localFont({
  src: [
    { path: "../fonts/Boska-Variable.woff2", weight: "200 900", style: "normal" },
    { path: "../fonts/Boska-VariableItalic.woff2", weight: "200 900", style: "italic" },
  ],
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
