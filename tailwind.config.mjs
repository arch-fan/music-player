/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#13598b",
          50: "#f2f8fd",
          100: "#e3f0fb",
          200: "#c1e1f6",
          300: "#8ac8ef",
          400: "#4cace4",
          500: "#2591d2",
          600: "#1773b2",
          700: "#13598b",
          800: "#144f78",
          900: "#164264",
          950: "#0f2b42",
        },
      },
    },
  },
  plugins: [],
};
