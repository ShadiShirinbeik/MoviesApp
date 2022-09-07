/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{vue,js}",
    "./components/**/*.{vue,js}",
  ],
  theme: {
    container: {
    //   margin: '208px',
    },
    extend: {
     colors: {
        'primary': '#11B980',
        'secondary': '#E2E2E2',
        'card': '#F1F1F1',
      },
    },
  },
  plugins: [],
}