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
      },
      animation: {
        'marquee-a-left': 'marquee-a-left 60s linear infinite',
        'marquee-b-left': 'marquee-b-left 60s linear infinite',
        'marquee-a-right': 'marquee-a-right 60s linear infinite',
        'marquee-b-right': 'marquee-b-right 60s linear infinite'
      },
      keyframes: {
        'marquee-a-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-b-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'marquee-a-right': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'marquee-b-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
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
