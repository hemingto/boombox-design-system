/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/*/src/**/*.{js,ts,jsx,tsx}",
    "./apps/*/src/**/*.{js,ts,jsx,tsx}",
    "./apps/*/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Design tokens will be injected here from @boombox/tokens
    },
  },
  plugins: [],
}
