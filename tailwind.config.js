/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#f96162',
        grade1: '#99ff33',
        grade2: '#ffff00',
        grade3: '#ffcc00',
        grade4: '#ff9900',
        grade5: '#ff0000',
      },
      backgroundImage: {
        banner: `url('../public/images/banner1.jpg')`,
      },
    },
  },
  plugins: [],
};
