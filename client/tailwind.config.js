/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        parisienne: ["Parisienne", "cursive"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#e6f3ff",
        yellow: "#ad9551",
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem",
          sm: "3rem",
        },
        screens: {
          xs: { max: '639px' }, // Custom breakpoint for extra small screens below 640px
          sm: '640px',
          md: '768px',
          lg: '1024px',
        },
        boxShadow: {
          custom: 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;'
      },
      spacing: {
        'xs-mt': '50%', // Adjust as needed
      },

      },
    },
  },
  plugins: [],
};
