/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(2, 53, 64)",          // Angor dark teal
        secondaryColor: "rgb(8, 108, 129)",      // Angor blue-green
        primaryText: "rgb(255, 255, 255)",       // White for text
        secondaryText: "rgb(203, 221, 225)",     // Light blue for secondary text
        bgDark1: "rgb(6, 30, 36)",              // Darker version of #022229
        bgDark2: "rgb(14, 60, 72)",              // Dark teal variation
        bgDark3: "rgb(20, 80, 95)",              // Dark blue-green variation
        bgDark3Hover: "rgb(26, 95, 112)",        // Hover effect with brighter blue-green
        bgDarkTransparent: "rgba(6, 30, 36, 0.7)",  // Transparent dark teal
        bgDarkTransparentDarker: "rgba(2, 53, 64, 0.5)", // Transparent darker teal
        bgDarkTransparentLighter: "rgba(20, 80, 95, 0.7)", // Transparent lighter teal
        mainBorder: "rgba(255, 255, 255, 0.15)", // Light border for dark backgrounds
        mainBorderDarker: "rgba(255, 255, 255, 0.07)", // Even lighter border
        quoteIconColor: "rgb(203, 221, 225)"     // Light blue for icons
      },     
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};

