/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kanverse: {
          bg: "#FAF9F5",
          card: "#F4F2EB",
          text: "#1C1B1A",
          muted: "#75736E",
          subtle: "#9E9C96",
          border: "#EAE6DF",
          accent: "#2D2A26",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        superwide: "0.35em",
      },
    },
  },
  plugins: [],
};
