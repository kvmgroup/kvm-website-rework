module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/static/images/lance-anderson-f2NKjOg6JBE-unsplash.jpg')"
      }),
      backgroundPosition: {
        initial: 'initial'
      }
    },
  },
  variants: {
    extend: {
      translate: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
