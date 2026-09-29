import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F0",
        ink: "#1A1A1A",
        muted: "#8A8578",
        terracotta: "#B85C38",
        positive: "#4A7C59",
        negative: "#A83232",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-source-serif)", "Georgia", "serif"],
        mono: ["var(--font-ibm-mono)", "Menlo", "monospace"],
      },
      maxWidth: {
        prose: "62ch",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wideMono: "0.08em",
      },
      lineHeight: {
        headline: "1.05",
        subhead: "1.15",
        editorial: "1.6",
      },
    },
  },
  plugins: [],
};

export default config;
