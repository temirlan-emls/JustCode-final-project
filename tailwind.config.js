/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '700px',
        lg: '900px',
        xl: '1100px',
        '2xl': '1300px',
      },
    },
    extend: {},
  },
  plugins: [],
};
