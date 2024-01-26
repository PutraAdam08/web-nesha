/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '192': '48rem',
        '46' : '11.5em'
      },
      aspectRatio: {
        '71/100': '71 / 100',
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}

