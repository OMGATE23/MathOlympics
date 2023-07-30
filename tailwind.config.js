/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      lato: ['Lato'],
      },
    screens: {
      xl: '1400px',
      ml: '900px',
      tb: '480px',
    },
    extend: {},
  },
  plugins: [],
}

