/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      primary: {
        900: "#4A6DFF"
      },
      secondary: {
        700: "#555775",
        800: '#3F4264',
        900: '#2A2D53',
      },
    },
    extend: {
      fontFamily: {
        sans: ["Vazirmatn"]
      },

    },
  },
  plugins: [],
}

