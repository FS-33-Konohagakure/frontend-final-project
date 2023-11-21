/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-theme': '#0B8FAC',
        'blue-theme-transparant': '#0b8faca2',
      },
    },
  },
  plugins: [],
}