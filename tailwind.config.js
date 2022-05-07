module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
      boxShadow: {
        'post': '0px 0px 3px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#5C865D',
        'secondary': '#92BC94'
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
}