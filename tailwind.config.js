/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./imports/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '588px',
        'lg': '768px',
        'xl': '1024px',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}