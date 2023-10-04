/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    ...defaultTheme,
    extend: {
      colors: {
        secondary: "rgb(87,87,87)",
        light: "rgb(208, 238, 246)",
        customgreen: "#33ab66",
        customturquoise: "#0cb2dd",
      },
    },
    fontFamily: {
      sans: ["Lato", "system-ui", ...defaultTheme.fontFamily.sans],
    },
    transitionProperty: {
      maxHeight: "max-height",
      spacing: "margin, padding",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
