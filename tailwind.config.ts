import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'sm': '320px', // For screens >= 320px
        //'md': '786px', // for screens >= 786px
        'lg': '1152px',
        'x': '1440px',
        '2xl': '1536px',

      },
    },
  },
  plugins: [],
};
export default config;
