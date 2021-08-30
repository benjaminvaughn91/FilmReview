module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'brdr-pattern': "url('../src/static/img/roll_border.png')",
       })
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
