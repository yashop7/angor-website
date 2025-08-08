/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {

        //darkmode
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
        quoteIconColor: "rgb(203, 221, 225)",     // Light blue for icons

        //lightmode
        lightprimaryText: "rgb(2, 53, 64)", // Dark teal text
        lightsecondaryText: "rgb(8, 108, 129)", // Blue-green secondary text
        lightbgLight: "rgb(255, 255, 255)", // White background
        lightbgLight2: "rgb(240, 242, 245)", // Light gray background
        lightbgLight3: "rgb(220, 220, 220)", // Lighter gray background
        lightbgLight3Hover: "rgb(200, 200, 200)", // Lighter gray hover effect
        lightmainBorder: "rgba(0, 0, 0, 0.1)", // Light border for light backgrounds
        lightmainBorderDarker: "rgba(0, 0, 0, 0.05)", // Even lighter border

      },     
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "480px", 
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};

