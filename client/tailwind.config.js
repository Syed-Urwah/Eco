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
      },
    }
  },
  plugins: [],
  // important: true,
}