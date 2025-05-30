/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar'
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar
  ],
}

