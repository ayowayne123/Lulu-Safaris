import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#152654",
      blackAlt: "#231F20",
      gold: "#C29D44",
      black: "#000000",
      lightBlue: "#87A0D8",
      yellow: "#F4D658",
      grey: "#D9D9D9",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "750px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
export default config;
