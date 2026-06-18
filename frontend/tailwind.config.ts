import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF1FB",
          100: "#D6E4F7",
          300: "#7FA8E0",
          500: "#1B4D8C",
          600: "#143C70",
          700: "#0F2E57",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
