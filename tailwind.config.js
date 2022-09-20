/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      VeryDarkGray: "hsl(0, 0%, 17%)",
      DarkGray: "hsl(0, 0%, 59%)",
      whiteColor: "hsl(100, 1000%, 100%)",
      borderColor: "lightgray",
    },
    fontSize: {
      "text-input": "1.8rem",
    },
    fontFamily: {
      display: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "top-pattern": "url('/images/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
