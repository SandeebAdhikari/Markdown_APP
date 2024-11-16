/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      fontSize: {
        h1: ["32px", { fontFamily: "roboto-slab", fontWeight: "bold" }],
        h2: ["28px", { fontFamily: "roboto-slab", fontWeight: "300" }],
        h3: ["24px", { fontFamily: "roboto-slab", fontWeight: "bold" }],
        h4: ["20px", { fontFamily: "roboto-slab", fontWeight: "bold" }],
        h5: ["16px", { fontFamily: "roboto-slab", fontWeight: "bold" }],
        h6: ["14px", { fontFamily: "roboto-slab", fontWeight: "bold" }],
        "body-s": [
          "14px",
          { fontFamily: "roboto", fontWeight: "400", letterSpacing: "0.125em" },
        ],
        "body-m": ["15px", { fontFamily: "roboto", fontWeight: "400" }],
        paragraph: [
          "13px",
          { fontFamily: "roboto", fontWeight: "300", lineHeight: "24px" },
        ],
      },
      lineHeight: {
        tight: "1.2",
        normal: "1.5",
        loose: "2",
        custom: "24px",
      },
      letterSpacing: {
        wide: "0.125em",
        wider: "0.2em",
      },

      colors: {
        1000: "#151619",
        900: "#1D1F22",
        800: "#2B2D31",
        700: "#35393F",
        600: "#5A6069",
        500: "#7C8187",
        400: "#C1C4CB",
        300: "#E4E4E4",
        200: "#F5F5F5",
        100: "#FFFFFF",
        orange: "#E46643",
        orangeHover: "#F39765",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
