/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Neue Montreal Mono', 'monospace'],
      },
      colors: {
        dark: {
          DEFAULT: '#121212',
          lighter: '#1e1e1e',
        },
        light: {
          DEFAULT: '#e8e8e8',
          darker: '#d8d8d8',
        },
      },
    },
  },
  plugins: [],
};