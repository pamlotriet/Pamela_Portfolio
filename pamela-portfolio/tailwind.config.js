/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#0F0E3E",
      white:"#FFFFFF"
    },
    extend: {
      width: {
        635: "635px",
        40: "40%",
        50: "50%",
        340: '340px',
        285: '285px',
      },
      height: {
        500: "500px",
        591: '591px',
        536: '536px',
      },
      borderRadius: {
        '20px': '20px',
      },
      boxShadow: {
        'custom': '-6px -6px 7px #4644bf, 8px 8px 12px rgba(0, 0, 0, 0.7)',
        'custom-hover': '-2px -2px 4px #4644bf, 2px 2px 4px rgba(0, 0, 0, 0.7)',
        'custom-focus': 'inset 2px 4px 12px rgba(0, 0, 0, 0.7), inset -2px -4px 8px #4644bf',
        'custom-image-container': 'inset 6px 6px 15px rgba(0, 0, 0, 0.8), inset -4px -4px 15px #4644bf'
      },
      fontFamily: {
        bangers: ['Bangers', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
