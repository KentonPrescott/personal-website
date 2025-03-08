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
        background: "#1A202C",
        foreground: "#E2E8F0",
        accent: "#38B2AC",
        primary: "#63B3ED",
      },
    },
  },
  plugins: [],
};

export default config; 