import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3F1EC",
          tint: "#EBE8E0",
          card: "#E8E5DC",
        },
        ink: {
          DEFAULT: "#090909",
          muted: "#72706A", // The single authoritative neutral gray
          faint: "#9C988F",
        },
        line: {
          DEFAULT: "#D5D1C6",
          subtle: "#E2DFD7",
        },
        signal: {
          red: "#FF2E2E",
        },
        dark: {
          DEFAULT: "#090909",
          surface: "#111111",
          border: "#222222",
        }
      },
      fontFamily: {
        sans: ["var(--font-display)", "General Sans", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "General Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.045em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.04em",
        widest: "0.14em",
        mono: "0.08em",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      gridTemplateColumns: {
        "12-editorial": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
