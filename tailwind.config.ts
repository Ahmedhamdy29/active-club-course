import type { Config } from "tailwindcss";

// Palette taken from the The Active Club logo / slides:
// charcoal panel, bright yellow (#FFD500), white, neutral grays.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#2B2B2B", deep: "#1F1F1F", soft: "#3A3A3A" },
        brand: { DEFAULT: "#FFD500", dark: "#E6BF00" },
        chalk: { DEFAULT: "#F3F3F1", line: "#DDDDD9" },
        steel: "#8C8C88",
      },
      fontFamily: { sans: ["var(--font-arabic)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
