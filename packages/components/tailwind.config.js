/** @type {import('tailwindcss').Config} */
const tokensConfig = require('@boombox/tokens/build/tailwind.config');

module.exports = {
  presets: [tokensConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}