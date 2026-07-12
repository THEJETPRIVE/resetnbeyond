import type { Config } from "tailwindcss";

/**
 * RESET & BEYOND — Design System
 * ------------------------------------------------------------------
 * Colours are declared as HSL channel triplets in globals.css and
 * consumed here via `hsl(var(--token))`. This lets a single [data-theme]
 * switch flip the entire site between the warm-ivory "day" palette and
 * the deep-charcoal "nocturne" palette without touching component code.
 *
 * The scale is deliberately narrow: two families of neutrals (ink + paper),
 * one botanical accent (sage), and one metallic reserved for hairlines.
 */
const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    // A calm, generous container. Content never sprawls edge-to-edge.
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        // Paper — warm ivory backgrounds
        ivory: "hsl(var(--ivory) / <alpha-value>)",
        stone: "hsl(var(--stone) / <alpha-value>)",
        sand: "hsl(var(--sand) / <alpha-value>)",
        // Ink — charcoal text and deep surfaces
        charcoal: "hsl(var(--charcoal) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        // Botanical accent — used sparingly for interaction
        sage: "hsl(var(--sage) / <alpha-value>)",
        "sage-deep": "hsl(var(--sage-deep) / <alpha-value>)",
        // Metallic — hairlines and the smallest luxury details only
        gold: "hsl(var(--gold) / <alpha-value>)",

        // Semantic aliases (theme-aware) used throughout components
        background: "hsl(var(--background) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        // Boska — high-contrast display serif used across all headings
        serif: ["var(--font-display)", "Boska", "serif"],
        // Inter — quiet grotesque for body, labels and UI
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial display scale — large, airy, confident
        "display-xl": ["clamp(3.5rem, 9vw, 9rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.005em" }],
        // Overline / eyebrow labels
        overline: ["0.75rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      letterSpacing: {
        luxe: "0.22em",
        wide2: "0.16em",
      },
      spacing: {
        // Cinematic vertical rhythm between sections
        section: "clamp(6rem, 14vh, 12rem)",
        "section-lg": "clamp(8rem, 20vh, 16rem)",
      },
      maxWidth: {
        prose: "62ch",
        measure: "38rem",
      },
      transitionTimingFunction: {
        // The house easing — slow start, graceful settle
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
        "luxe-in": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
      transitionDuration: {
        700: "700ms",
        900: "900ms",
        1200: "1200ms",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "kenburns": {
          from: { transform: "scale(1.05)" },
          to: { transform: "scale(1.14)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s var(--ease-luxe, cubic-bezier(0.22,1,0.36,1)) forwards",
        kenburns: "kenburns 18s ease-out forwards",
        marquee: "marquee 42s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
