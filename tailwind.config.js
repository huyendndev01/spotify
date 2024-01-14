/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "screen-navbar-player": "calc(100vh - 100px - 100px)",
        "screen-navbar-small": "calc(100vh - 70px - 99px)",
      },
    },
  },
  plugins: [],
};
