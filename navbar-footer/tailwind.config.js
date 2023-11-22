/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-theme": "#0B8FAC",
        "blue-theme-hover": "#0A6D83",
        "blue-theme-transparant": "#0b8faca2",
        "green-theme": "#5AAE73",
        "green-background": "#E3FFEC",
        "green-bg-active-dm": "#BBDCC5",
        "gray-non-active": "#6C6C6C",
        "gray-bg-non-active": "#D8F6E1",
      },
      boxShadow: {
        md: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
