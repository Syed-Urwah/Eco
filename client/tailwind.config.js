/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'admin-sidebar': '#9ca3af',
        'primary-btn': '#003171'
      },
    }
  },
  plugins: [],
  // important: true,
}