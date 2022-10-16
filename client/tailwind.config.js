/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        132: "34rem",
        140: "40rem",
        150: "50rem",
        180: "90rem",
        container: "1700px",
      },
      fontFamily: {
        clash: "Clash Display",
        array: "Array",
        chillax: "Chillax",
      },
    },
  },
  plugins: [],
};
