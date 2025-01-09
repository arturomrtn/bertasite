/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
      colors: {
        primary: "#4A90E2",
        secondary: "#F5A623",
      },
    },
  },
  plugins: [],
};