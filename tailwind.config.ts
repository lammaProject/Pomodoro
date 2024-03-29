/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      custom: ["SFUIDisplay", "sans-serif"],
    },
    colors: {
      'customGray999': '#999999',
      'customGrayLite': '#d9d9d9',
      'customGray': "#C4C4C4",
      'customRed': '#DC3E22',
      'customGreenDark': "#899441",
      'customGreenLite': '#A8B64F',
      'customMarker': '#B7280F',
      'customBlack': '#333333',
    },
  },
  plugins: [],
};
