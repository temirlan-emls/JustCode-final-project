/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        xs: '22rem',
        sm: '32rem',
        md: '46rem',
        lg: '66rem',
        xl: '74rem',
        '2xl': '84rem',
      },
    },
  },
  plugins: [],
};
