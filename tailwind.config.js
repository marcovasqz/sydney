/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ede9dc',
        primary: '#615d57',
        accent: '#d3c5b6',  // Changed to a darker warm tone for better contrast
      },
    },
  },
  plugins: [],
};