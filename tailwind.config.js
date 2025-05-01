const mtConfig = require("@material-tailwind/react").mtConfig;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      bold: "700",
      black: "900",
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
      },
    },
  },
  plugins: [mtConfig],
};
