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
      animation: {
        "bounce-slow": "bounce-slow 1s ease-in-out infinite",
        movebg: "20s linear infinite alternate",
        fadein: "fadein 5.25s",
        "fadein-02": "fadein 7s",
        "fadein-03": "fadein 9s",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, .5, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic - bezier(0, 0, 0.1, 1)",
          },
        },
        fadein: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fadein-02": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fadein-03": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
