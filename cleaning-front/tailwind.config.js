/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        MonAlt: ["Open Sans", "sans-serif"],
      }
    },
    screens: {
      lg: {max: '1500px'},
      lg2: {max: '1100px'},
      lg3: {max: '1060px'},
      md: {max: '950px'},
      sm: {max: '770px'},
      sm2: {max: '590px'},
      xs: {max: '460px'},
    }
  },
  plugins: [],
};
