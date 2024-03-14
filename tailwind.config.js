/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },

    colors: {
      primary: "#D60000",
    },
  },
  plugins: [],
}

