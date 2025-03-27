/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx}",
    "./client/*.html",
  ],
  theme: {
    extend: {
      screens: {
        'custom-xl': '401px', 
      }
    },
  },
  plugins: [],
}
