/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}","./resources/**/*.vue",],
  theme: {
    extend: {
      backgroundColor:{
        'customBlue': 'rgb(2, 20, 49)',
        'customLightBlue': '#f0f6ff',
        'customLightAqua': '#0066ff',
        'customDarkAqua' : '#0069e0',
        'customNavy': '#021431',
        'customNavyLight': '#394e6a',

        
      },
      colors:{
        'customNavyLight': '#394e6a',
        'customNavy': '#021431',
        'customPurbleLight': '#463ab3',
        'customBluefont': '#dbe1ff'

      }
    },
    screens: {

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'lg': {'max': '1200px'},
      // => @media (max-width: 1200px) { ... }

      'md': {'max': '752px'},
      // => @media (max-width: 752px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

    }
  },  
  plugins: [],
}

