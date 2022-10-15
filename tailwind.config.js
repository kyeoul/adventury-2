/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        font_main: ['Quicksand']
      },

      backgroundImage: {
        'temp-image': "url('/src/res/temp.jpg')",
        'map-image': "url('/src/res/map.jpeg')"
      },

    },
  },
  plugins: [],
}
