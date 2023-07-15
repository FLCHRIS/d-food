/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        Black: '#0f0f0f',
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
