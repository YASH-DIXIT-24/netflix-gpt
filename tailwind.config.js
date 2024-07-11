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
    },
  },
  plugins: [],
}