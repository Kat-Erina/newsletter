/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#36384D",
        "dark-navy": "#242742",
        orange: "#FF6A3A",
        pink: "#FF527B",
        warning: "#FF6155",
        "light-grey": "rgba(25, 24, 43, 0.25)",
        "light-warning": " rgba(255, 97, 85, 0.15);",
      },

      // backgroundImage: {
      //   laptop: "url('./assets/Group34.png')",
      //   "image-94": "url('/img/./assets/Group37.png')",
      // },
      borderRadius: {
        large: "16px",
      },
    },
  },
  plugins: [],
};
