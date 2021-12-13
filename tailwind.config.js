const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  purge: [
    './packages/skint-2022/src/**/*.html',
    './packages/skint-2022/src/**/*.js',
    './packages/skint-2022/src/**/*.jsx',
  ],
  content: [
      './packages/skint-2022/src/**/*.html',
      './packages/skint-2022/src/**/*.js',
      './packages/skint-2022/src/**/*.jsx',
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'skintRed': '#b8263c'
      }
    }
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus']
    },
  },
  plugins: [
    typography,
    forms,
    lineClamp,
    aspectRatio,
  ],
};
