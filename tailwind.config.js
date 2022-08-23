/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        font_main: ['Amatic SC']
      },

      backgroundImage: {
        'stock-background': "url('./res/placeholder.jpg')"
      },

    },
  },
  plugins: [],
}
