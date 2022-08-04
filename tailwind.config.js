const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xxs: "390px",
      xs: "400px",
      base: "500px",
      ...defaultTheme.screens,
      "2md": "950px",
      "2xl": "1350px",
    },
    extend: {
      colors: {
        secondary: "#FF8A00",
        primary: "#005ECD",
        dark: "#333333",
        accent: "#5D2A42",
        hover: {
          blue: "rgba(217, 231, 248, 0.3)",
          orange: "rgba(255, 195, 129, 0.2)",
        },
      },
      fontFamily: {
        montMedium: "medium",
        montLight: "light",
        montSemiBold: "semibold",
        catalina: "catalina",
      },
    },
  },
  plugins: [],
};
