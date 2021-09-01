module.exports = {
  mode: 'normal',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/static/images/lance-anderson-f2NKjOg6JBE-unsplash.jpg')",
        'team': "url('/static/images/david-becker-gnOkAODKedI-unsplash.jpg')"
      }),
      backgroundPosition: {
        initial: 'initial'
      },
      animation: {
        'marquee-a-left': 'marquee-a-left 60s linear infinite',
        'marquee-b-left': 'marquee-b-left 60s linear infinite',
      },
      keyframes: {
        'marquee-a-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-b-left': {
          '0%': { transform: 'translateX(100%)' },
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
