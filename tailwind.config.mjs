/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9fffe",
          100: "#c9fffe",
          200: "#99ffff",
          300: "#54fbff",
          400: "#07edff",
          500: "#00cfef",
          600: "#00a4c9",
          700: "#0082a1",
          800: "#086882",
          900: "#0c556d",
          950: "#00171f",
        },
        accent: {
          50: "#eff9ff",
          100: "#def3ff",
          200: "#b6e9ff",
          300: "#75daff",
          400: "#2cc8ff",
          500: "#00b7ff",
          600: "#008ed4",
          700: "#0071ab",
          800: "#005f8d",
          900: "#064f74",
          950: "#04324d",
        },
      },
    },
  },
  plugins: [],
};
