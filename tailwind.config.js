module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Tangerine"', 'cursive'], // or any cursive font you prefer
      },
      colors: {
        accent: {
          light: '#3b82f6', // Light blue
          DEFAULT: '#f87171', // Light red
        },
      },
    },
  },
  plugins: [],
}