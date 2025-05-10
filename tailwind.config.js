/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'], // or your file path
  safelist: [
    {
      pattern: /.*/, // match all classes
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
