/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./pages/**/*.js', './styles/**/*.css'],

  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 5px 10px #aba6a6, -5px -5px 10px #c5bebe',
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
