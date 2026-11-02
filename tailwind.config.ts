import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#174B35",
          dark: "#0F3023",
          deep: "#082116",
        },
        botanical: {
          DEFAULT: "#315E3D",
          light: "#42623D",
        },
        sage: {
          DEFAULT: "#8DAF75",
          light: "#B8CDB0",
        },
        pale: "#DCE8D4",
        paper: "#F8F8F2",
        surface: "#FFFFFF",
        earth: "#A58B69",
        ink: {
          DEFAULT: "#202820",
          muted: "#747B70",
          subtle: "#949D90",
        },
        borderLight: "#DFE4D8",
      },
      fontFamily: {
        sans: ["DM Sans", "var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
