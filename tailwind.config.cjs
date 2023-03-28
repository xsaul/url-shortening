/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "short-desktop": "url('../src/assets/images/bg-shorten-desktop.svg')"
      }
    },
  },
  plugins: [],
}