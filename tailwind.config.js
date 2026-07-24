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
          bg: "#EBE9E1",
          text: "#33312E",
          muted: "#6A675F",
          subtle: "#A39F97",
          border: "#D1CEC4",
          accent: "#4A463F",
          card: "#E5E2D9",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
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
