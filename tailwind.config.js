/** @type {import('tailwindcss').Config} */
export default {
  // Những file extension cần chuyển về tailwind
  content: ["./src/**/*.{html,tsx,jsx}"],
  theme: {
    screens: {
      sm: "320px",
      ssm: "400px",
      "2sm": "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",

      // devCuong
      mobile: "375px",
      mobilePlus: "414px",
      ipad: "768px",
      desktop: "1200px",
      desktopPlus: "1400px",
    },
  },
  plugins: [],
};
