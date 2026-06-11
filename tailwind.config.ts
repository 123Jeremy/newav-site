import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: "#8BA888",
        anthracite: "#2D2D2D",
        bone: "#F5F0EB",
        teslaBlue: "#3457dc",
        cardBg: "#F4F4F2",
        sectionGray: "#F0F0EE",
      },
      fontFamily: {
        display: ["var(--font-pj-sans)", "Plus Jakarta Sans", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
