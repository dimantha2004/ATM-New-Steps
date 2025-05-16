/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'boc-yellow': '#ffd200',
        'boc-black': '#000000',
      },
    },
  },
  plugins: [],
};