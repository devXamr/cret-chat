/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Pacifico'],
        satoshi : ['Satoshi', 'sans-serif']
      }
    },
  },
  plugins: [],
}

