/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thai: {
          gold: '#FFD700',
          red: '#DA291C',
          blue: '#2E3192',
        }
      }
    },
  },
  plugins: [],
}
