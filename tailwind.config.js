/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif']
      },
      colors: {
        grey: {
          100: '#131923'
        },
        green: {
          10: '#EDFFF6',
          30: '#0B9D58'
        },
        white: {
          10: '#ffffff',
          20: '#CCD9FF',
          30: '#4C78BC'
        },
        red: {
          10: '#E74436'
        },
        yellow: {
          10: '#F6B819'
        }
      },
      backgroundImage: {
        'backone': "url('../images/bg1.png')"
      },
      backgroundPosition: {
        'left-right': 'right center, left center'
      },
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-105%)'}
        },
        scrollphone: {
          '0%': {transform: 'translateX(50%)'},
          '100%': {transform: 'translateX(-105%)'}
        }
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
        scrollp: 'scrollphone 25s linear infinite'
      }
    },
  },
  plugins: [],
}

