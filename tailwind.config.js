module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#FF5154',
      'secondary': '#606D5D',
      'tertiory' : '#1A181B',
      'white': '#F7F7FF'
      }),
      textColor:{
        'primary': '#1A181B',
        'secondary': '#7E8D85',
        'tertiory' : '#3C493F',
        'white': '#F7F7FF',
        'danger': 'rgb(236 70 70)',
        'watermark': '#464646'
      },

      fontFamily:{
        'montserrat': ['"Montserrat"'],
        // 'oswald': ['"Oswald"']
      }
    },
    extend: {
    },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}
