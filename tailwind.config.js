/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to your template files
  ],
  theme: {
    extend: {
      fontSize: {
        'title': '40px',
      },
    },
  },
  plugins: [],
}