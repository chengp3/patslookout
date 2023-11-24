/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/pages/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        meriweather: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}

