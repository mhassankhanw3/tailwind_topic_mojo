/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xl: ['34px' , '32px'],
    }, 
    fontFamily: {
     jakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
   
    extend: {},
  },
  plugins: [],
}