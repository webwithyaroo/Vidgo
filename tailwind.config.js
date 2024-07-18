/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgAccent: "#031639",
        bgContrast: " rgba(0, 0, 0, 0.15)",
      },
      //rgb(112, 108, 235)
      fontSize: {
        xs: "0.875rem", //14 px
        sm: "1rem", //16px
        " base": "1.125rem", //18 px
        lg: "1.75rem", //28 px
        "2xl": "2.125rem", //38 px
        "3xl": "2.375rem", //38 px
        "4xl": "2.5rem", //40 px
        "5xl": "2.875rem", //46 px
        "6xl": ["4.125rem", "1"], //66 px
      },
      fontFamily: {
        fontSpace: "Space Grotesk",
        fontPoppin: "Poppins",
      },
    },
  },
  plugins: [],
};
