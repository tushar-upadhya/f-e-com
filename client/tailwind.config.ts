import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "320px",
        md: "375px",
        lg: "768px",
        xl: "1080px",
      },
    },
    backgroundImage: {
      hero: 'url("/assets/hero/bg.jpg")',
    },
    fontFamily: {
      primary: "var(--font-marcellus)",
      secondary: "var(--font-urbanist)",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#292836",
          hover: "#3e3d4a",
        },
        secondary: {
          DEFAULT: "#6b6a71",
        },
        accent: {
          DEFAULT: "#e85f4c",
          hover: "#ea6f5e",
        },
        tertiary: {
          DEFAULT: "#faf5ef",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
