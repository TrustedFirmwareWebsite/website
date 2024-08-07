/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    ...defaultTheme,
    extend: {
      colors: {
        secondary: "rgb(87,87,87)",
        light: "rgb(208, 238, 246)",
        customgreen: "#33ab66",
        customturquoise: "#0cb2dd",
        accent: "#0cb2dd",
        accentbg: "#d0eef6",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: { color: theme("colors.red.600") },
            pre: {
              code: { color: "white" },
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ["Lato", "system-ui", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin.cjs"),
    // ...
  ],
};
