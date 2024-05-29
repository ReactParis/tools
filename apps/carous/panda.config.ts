import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "rgb(43,19,90)" },
          secondary: { value: "rgb(86,212,248)" },
          tertiary: { value: "rgb(245, 48, 236)" },
        },
      },
    },

    semanticTokens: {
      colors: {
        text: { value: "{colors.secondary}" },
        textSecondary: { value: "{colors.tertiary}" },
        bg: { value: "{colors.primary}" },
        bg2: { value: "rgb(19,14,50)" },
      },
      sizes: {
        appShellSidebar: {
          width: { value: "250px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  strictTokens: true,
  strictPropertyValues: true,
});
