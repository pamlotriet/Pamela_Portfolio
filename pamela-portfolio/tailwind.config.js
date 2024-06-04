/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#0F0E3E",
    },
    extend: {
      width: {
        635: "635px",
        40: "40%",
        50: "50%"
      },
      height: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
