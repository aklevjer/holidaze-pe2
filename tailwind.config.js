import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        teal: {
          700: "#254e58",
          900: "#1d282e",
        },
        slate: {
          500: "#586470",
          700: "#373c44",
        },
        amber: {
          400: "#f3ae54",
          600: "#e09347",
        },
        sky: {
          50: "#e9f5f6",
          100: "#badee9",
        },
        red: {
          50: "#fef2f2",
          700: "#b50000",
          800: "#991b1b",
        },
        green: {
          50: "#f0fdf4",
          700: "#166534",
        },
      },
      fontFamily: {
        sans: ["Work Sans", ...fontFamily.sans],
      },
      fontSize: {
        sm: "0.875rem",
        m: "0.9375rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1150px",
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
        card: "auto 1fr",
      },
      gridTemplateColumns: {
        list: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))",
        table: "220px 1fr 150px 95px",
        "table-sm": "240px 1fr 95px",
        venue: "minmax(auto, 525px) 350px",
      },
      backgroundImage: {
        hero: "url('/images/hero-bg.jpg')",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "5/2": "5 / 2",
      },
      maxWidth: {
        prose: "50ch",
      },
      boxShadow: {
        elevated: "0px 10px 30px 0px rgba(153, 153, 153, 0.3)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".word-spacing-normal": {
          wordSpacing: "normal",
        },
        ".word-spacing-tight": {
          wordSpacing: "-0.1rem",
        },
        ".overflow-wrap-anywhere": {
          overflowWrap: "anywhere",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        },
      });
    },
  ],
};
