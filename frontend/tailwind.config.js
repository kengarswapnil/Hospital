const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust based on your project structure
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"

      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }

    },
  },
  plugins: [],
}
