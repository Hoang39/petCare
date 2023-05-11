/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#de8ebe',
        hover_primary_color: '#ca76aa'
      },
      fontFamily: {
        primary: ["Coiny", "cursive"]
      },
    },
  },
  plugins: [],
}