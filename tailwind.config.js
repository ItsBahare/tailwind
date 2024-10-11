/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      main:{
        100:"#f1f5f9"
      },
      primary: {
        900: "#4A6DFF"
      },
      secondary: {
        200:"#bfc0cb",
        600:"#6a6c87",
        700: "#555775",
        800: '#3F4264',
        900: '#2A2D53',
      },
      white:"#FFF",
      gray:"#36385380",
      red:"#ff0000cc",
      light:"#dfdfe580",
      yellow:"#ff9900;",
    }, 
    extend: {
      fontFamily: {
        sans: ["Vazirmatn"]
      },

    },
  },
  plugins: [],
}

