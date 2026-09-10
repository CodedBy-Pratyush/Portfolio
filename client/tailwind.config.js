/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07121D",
        cyan: "#10C6D1",
        cyanLight: "#DDF9FB",
        cream: "#F8F4EC",
        paper: "#FFFFFF",
        lime: "#D7FF00",
        muted: "#657080",
        border: "#C8D0D8",
        soft: "#F4F5F6",
      },
      fontFamily: {
        display: ["Inter", "Arial", "Helvetica", "sans-serif"],
        body: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        block: "22px",
      },
    },
  },
  plugins: [],
};
