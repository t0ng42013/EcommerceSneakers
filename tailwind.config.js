/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        grayDark: "#273444",
        gray: "#8492a6",
        grayLight: "#d3dce6",
      },
    },
  },
  plugins: [],
};
