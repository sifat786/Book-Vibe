/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    

    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'play': ['Playfair Display', 'serif'],
    },
    
    container: {
      center: true,
    },
    screens: {
      'sm': '380px',
      'md': '700px',
      'lg': '1170px',
    },

    extend: {},
  },


  plugins: [
    require("daisyui"),
  ],

}