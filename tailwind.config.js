/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#150016",
        secondary: "#29104A",
        tertiary: "#522c5d",
        quaternary: "#845162",
        quinary: "#e3b6b1",
        senary: "#ffe3d8",
      },
      screens: {
        md1: "890px",
        lg1: "1250px",
        lg2: "1400px",
      },
      gridTemplateColumns: {
        "auto-fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      backgroundColor: (theme) => theme("colors"),
      textColor: (theme) => theme("colors"),
      borderColor: (theme) => theme("colors"),
    },
  },
  plugins: [],
};
