/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#161A30",
        gray: "#31304D",
        "light-gray": "#B6BBC4",
        white: "#F0ECE5",
      },
    },
  },
  plugins: [],
};
