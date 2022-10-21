/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx}"],
  content: [],
  important: true,
  theme: {
    extend: {
      textColor: {
        primary: '#E71316',
        secondary: '#1E8AE7',
        gray: '#7F7F7F',
      },
      borderColor: {
        primary: '#DCDCDC',
        secondary: '#1E8AE7',
        gray: '#EEEEEE',
      },
      backgroundColor: {
        primary: '#F7F7F7',
        gray: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
