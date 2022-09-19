/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      VeryDarkGray: "hsl(0, 0%, 17%)",
      DarkGray: "hsl(0, 0%, 59%)",
    },
    fontSize: {
      "text-input": "1.8rem",
    },
    fontFamily: {
      body: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
