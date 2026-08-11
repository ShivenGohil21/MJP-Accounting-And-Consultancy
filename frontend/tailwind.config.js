/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2e3152",
          dark: "#1c1e36",
          light: "#3e426e",
          container: "#e0e1f3",
          "on-container": "#11143b",
        },
        secondary: {
          DEFAULT: "#5e5e6e",
          light: "#7a7a8c",
          dark: "#3f3f4c",
          container: "#e4e4f0",
          "on-container": "#1a1a26",
        },
        tertiary: {
          DEFAULT: "#de3b40",
          hover: "#c82d32",
          light: "#fce8e8",
          dark: "#b52025",
        },
        accent: {
          red: "#de3b40",
          coral: "#e65a5a",
          emerald: "#059669",
          gold: "#d4af37",
        },
        background: "#f7f9fb",
        "on-background": "#1b1c20",
        surface: {
          DEFAULT: "#f7f9fb",
          variant: "#e1e2ec",
          container: "#ecedf0",
          "container-low": "#f2f4f6",
          "container-lowest": "#ffffff",
          "container-high": "#e7e8eb",
          "container-highest": "#e1e2e5",
        },
        "on-surface": "#1b1c20",
        "on-surface-variant": "#44464f",
        outline: "#757780",
        "outline-variant": "#c5c6d0",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1.25rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        base: "8px",
        "container-max": "1280px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        body: ["Public Sans", "sans-serif"],
        heading: ["Public Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(46, 49, 82, 0.08)",
        hover: "0 10px 30px rgba(46, 49, 82, 0.12)",
        premium: "0 4px 24px rgba(46, 49, 82, 0.08)",
      },
    },
  },
  plugins: [],
}
