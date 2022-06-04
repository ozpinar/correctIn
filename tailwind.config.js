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
        'secondary': '#92BC94',
        'tertiary': "#59344F"
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      backgroundImage: {
        'pattern': 'url("/assets/background.svg")'
      },
      borderRadius: {
        'left' : '9999px 0 0 9999px',
        'right': '0 9999px 9999px 0',
        'chat-received': '0 25px 25px 25px',
        'chat-sent': '25px 0 25px 25px'
      }
    },
  },
  plugins: [],
}