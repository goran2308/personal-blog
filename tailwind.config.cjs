/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "goran-dark": "#0E273C",
        "goran-dark-hover": "#0A1C2E",
        "goran-dark-light": "#1A3B55",
        "goran-dark-muted": "#334455",
        "goran-dark-muted-darker": "#1F2A3A",
        "goran-dark-muted-darkest": "#17212E",
        "goran-accent": "#0EA5E9",
        "goran-success": "#15803D",
      },
    },
  },
  plugins: [],
};
