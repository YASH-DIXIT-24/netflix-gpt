/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgb(229, 9, 20)',
        'lightBlack': '#333333'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0))',
      },
    },
  },
  plugins: [],
}