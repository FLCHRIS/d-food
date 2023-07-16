/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        Black: '#0F0F0F',
        White: '#EEEEEE',
        WhiteLight: '#8E98A6'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
