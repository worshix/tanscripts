/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        main:{
          50:'#e585ff',
          100:'#da55ff',
          200:'#c800ff',
          300:'#ac11d6',
          400:'#931ab4',
          500:'#7b1697',
          600:'#5A3066',
          700:'#4b2755',
          800:'#3f2147',
          900:'#351e3b',
          950:'#221325',
        },
        main2:'#FF7F00',
        app:'#3DD877'
      },
      screens:{
        'xs':'400px'
      }
    },
  },
  plugins: [],
};
