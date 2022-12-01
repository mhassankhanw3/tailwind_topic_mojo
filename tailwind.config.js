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
    screens: {
      // 'log': {'max': '760px'},
      'log': {'max': '375px'},
      'mdLog': {'max': '890px'},
      'navimg': {'max': '500px'},
      'mdLogmd': {'max': '640px'},
      'mdLogmdfor': {'max': '470px'},
      'nav': {'max': '900px'},
      'new': {'max': '1235px'},
      'dev': {'max': '1020px'},
      'foot': {'max': '1165px'},
    },
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', 'sans-serif'],
     },
    },
   
   
    extend: {},
    plugins: [],
  }