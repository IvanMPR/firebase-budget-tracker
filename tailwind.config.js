/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   blue: "#209CEE",
    //   "blue-dark": "#1D8ACB",
    //   purple: "#7e5bef",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   "yellow-400": "#FFCC00",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    //   white: "#fff",
    //   dark: "#123456",
    // },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      sans: "Roboto Mono, monospace",
    },
    extend: {
      ringOffsetWidth: {
        3: "3px",
        6: "6px",
        10: "10px",
      },
      ringWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
// no male user by Suncheli Project from <a href="https://thenounproject.com/browse/icons/term/no-male-user/" target="_blank" title="no male user Icons">Noun Project</a> (CC BY 3.0)
