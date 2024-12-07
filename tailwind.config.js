/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['Playwrite HR Lijeva', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        chakra: ['Chakra Petch', 'sans-serif'],
      }
    },
  },
  plugins: [],
}