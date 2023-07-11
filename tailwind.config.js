/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./pages/**/*.js', './styles/**/*.css', './components/**/*.js'],

  theme: {
    extend: {
      boxShadow: {
        'custom': '3px 3px 3px #aba6a6, -3px -3px 3px #c5bebe',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my-bg-image': 'url(/images/bgmain.jpg)',
      },
    },
  },
  plugins: [],
}
