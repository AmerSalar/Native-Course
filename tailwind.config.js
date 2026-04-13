import { colors } from "./consts/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        pill: colors.pill,
        background: colors.background,
        card: colors.card,
        muted: colors.muted,
        mutedForeground: colors.mutedForeground,
        border: colors.border,
        subscription: colors.subscription,
      },
      fontFamily: {
        "sans-regular": ["sans-regular"],
        "sans-bold": ["sans-bold"],
        "sans-medium": ["sans-medium"],
        "sans-semibold": ["sans-semibold"],
        "sans-extrabold": ["sans-extrabold"],
        "sans-light": ["sans-light"],
      },
    },
  },
  plugins: [],
};
