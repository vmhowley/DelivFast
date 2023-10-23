/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'press-start': ["urbanist"],
    },
  },
  plugins: [],
}

