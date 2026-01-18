import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#615EFC",
      },
      fontFamily: {
        primary: ["var(--font-manrope)", "sans-serif"],
        secondary: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
};

export default config;
