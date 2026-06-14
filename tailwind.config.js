/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono:                   ['Neue Montreal Mono', 'monospace'],
        pp_neue_montrealthin:   ['pp_neue_montrealthin',   'sans-serif'],
        pp_neue_montrealbook:   ['pp_neue_montrealbook',   'sans-serif'],
        pp_neue_montrealmedium: ['pp_neue_montrealmedium', 'sans-serif'],
        pp_neue_montrealbold:   ['pp_neue_montrealbold',   'sans-serif'],
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