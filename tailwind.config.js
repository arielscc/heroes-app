const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    mode: 'layers',
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
  },
  darkMode: false,
  theme: {},
  variants: {
    extend: {
      translate: ['active', 'group-hover', 'hover'],
      inset: ['hover'],
    },
  },
  plugins: [],
};
