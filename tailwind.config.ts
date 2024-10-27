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
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        dark: {
          100: "#121212",
          200: "#282828",
          300: "#3f3f3f",
          400: "#575757",
          500: "#717171",
          600: "#8b8b8b",
        },
        light: {
          100: "#f7f7f7",
          200: "#f0f0f0",
          300: "#e9e9e9",
          400: "#e2e2e2",
          500: "#dbdbdb",
          600: "#d4d4d4",
        },
        primary: {
          100: "#dfb0f3",
          200: "#d69df0",
          300: "#cd8aee",
          400: "#c477eb",
          500: "#bb64e9",
          600: "#b251e6",
        },
      },
      fontFamily: {
        sans: ["var(--StretchPro)"],
      },
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        gradient: "gradient 8s linear infinite",
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
