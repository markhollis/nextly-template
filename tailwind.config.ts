import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: "#721313", // Deep Brick Red
        secondary: "#1E1E1E", // Dark Industrial Black
        accent: "#A67C52", // Warm Wood Tone
        background: "#F5F3EF", // Light Loft-style Neutral
        text: "#222222", // Strong Black for Readability
        muted: "#6B6B6B", // Muted Gray for Subtext
      },
    },
    fontFamily: {
      sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      stock: defaultTheme.fontFamily.sans,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
