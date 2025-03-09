/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Habilita el modo oscuro
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4200BD",
        gray: "#8B8D98",
        background: "#111111",
      },
    },
  },
  plugins: [],
};
