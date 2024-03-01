/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono, monospace"],
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
