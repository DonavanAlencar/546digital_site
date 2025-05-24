/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-dark-gray': '#3c3744', // Black Coffee
        'brand-blue-intense': '#090c9b', // Duke Blue
        'brand-blue-medium': '#3066be', // True Blue
        'brand-blue-pale': '#b4c5e4', // Pale Blue
        'brand-off-white': '#fbfff1', // Off-white
      }
    },
  },
  plugins: [],
}

