/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: '#4CD264',
        dark: '#121212',
        anthracite: '#1d1d1f',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

