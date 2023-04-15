// tailwind.config.js

module.exports = {
  content: [],
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primario: "rgba(238, 238, 238, 1)",
        secundario: "rgba(2, 48, 71, 1)",
        acento: "rgba(251, 133, 0, 1)",
        counter: "rgba(2, 48, 71, 0.26)",
        grayApp: "rgba(117, 117, 117, 1)",
      },
      fonts: {
        titulo: 24,
        secundario: 16,
      },
    },
  },
  plugins: [],
};
