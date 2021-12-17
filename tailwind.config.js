const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    colors: {
      transparent: 'transparent',
      black: {
        DEFAULT: colors.black,
        50: '#00000080'
      },
      white: colors.white,
      red: {
        DEFAULT: '#FF4D59',
      },
      green: {
        DEFAULT: '#11C04C',
      },
      yellow: {
        DEFAULT: '#FFFF00',
        50: '#FFFF0080',
      },
      blue: {
        DEFAULT: '#6195ED',
        50: '#6195ED80'
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '40px': '40px 40px',
    },
    backgroundImage: {
      'diagonals-pattern': "url('/images/diagonales_pattern_grey.svg')",
    }
  },
  variants: {
    extend: {
      textColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover::before',
        'hover::after',
        'focus::before',
      ],
      display: ['before', 'after'],
      textColor: ['before', 'after'],
      fontSize: ['before', 'after'],
      backgroundColor: ['before', 'after'],
      backgroundImage: ['before', 'after'],
      backgroundSize: ['before', 'after'],
      zIndex: ['before', 'after'],
      margin: ['before', 'after'],
      position: ['before', 'after'],
      height: ['before', 'after'],
      width: ['before', 'after'],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements')({
      customPseudoClasses: ['foo'],
      customPseudoElements: ['bar'],
      contentUtilities: true,
      emptyContent: true,
      classNameReplacer: {
        'hover:before:text-black': 'hbt',
      },
    }),
  ],
}