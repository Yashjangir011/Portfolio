/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./index.html", "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['Playwrite HR Lijeva', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        chakra: ['Chakra Petch', 'sans-serif'],
        bodoni :[ 'Bodoni Moda' , 'serif'],
        doto :['Doto', 'serif' ]
      }
    },
  },
  plugins: [],
}