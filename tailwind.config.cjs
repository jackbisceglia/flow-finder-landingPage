/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
  safelist: [
    "opacity-0",
    "opacity-100",
    "duration-1000",
    // {
    //   pattern: /rotate-[0-9]+/,
    //   variants: ["hover"],
    // },
  ],
};
