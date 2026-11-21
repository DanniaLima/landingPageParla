/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        verde: { DEFAULT: "#0f7b3f", light: "#e8f5ee" },
        vermelho: { DEFAULT: "#d62828" },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        display: ["Baloo 2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
