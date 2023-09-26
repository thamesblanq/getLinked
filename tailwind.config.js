/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ['Clash', 'sans-serif'],
        'montserrat': 'Montserrat',
        'unica': 'Unica\\ One',
      },
      colors: {
        'span': '#D434FE'
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'}
        },
      },
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
    }
  },
  plugins: [],
}

