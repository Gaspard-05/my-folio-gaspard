/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#eef0fa',
          100: '#dce1f5',
          200: '#b9c4eb',
          300: '#8fa0de',
          400: '#5a73c8',
          500: '#1d3bb3',
          600: '#17309a',
          700: '#122780',
          800: '#0e1e66',
          900: '#0b1850',
          950: '#060d2e',
        },
      },
    },
  },
  plugins: [],
}