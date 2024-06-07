/** @type {import('tailwindcss').Config} */
export default {
  // Những file extension cần chuyển về tailwind
  content: ["./src/**/*.{html,tsx,jsx}"],
  theme: {
    screens: {
      sm: "320px",
      xsm:"380px",
      ssm: "400px",
      ssm2 : '428px',
      "2sm": "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",

      // devCuong
      mobile: "375px",
      mobilePlus: "414px",
      ipad: "768px",
      ipadPro: '1024px',
      desktop: "1200px",
      desktopPlus: "1400px",
      desktopMax: '1920px'
    },
  },
  plugins: [],
};
