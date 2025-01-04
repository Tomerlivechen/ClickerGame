const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'glowPulse': "glowPulse 2s infinite",
        'fastglowPulse': "glowPulseBlue 1s infinite",
      },
      boxShadow: {
        'yelloGlow': '0 0 30px rgba(255, 223, 0, 0.5), 0 0 40px rgba(255, 223, 0, 0.3)',
      },
      keyframes: {
        glowPulse: {
          "0%": { boxShadow: "none" },
          "50%": { boxShadow: "inset 0 0 20px 10px rgba(255, 223, 0, 1)" },
          "100%": { boxShadow: "none" },
        },
        glowPulseBlue: {
          "0%": { boxShadow: "none" },
          "50%": { boxShadow: "inset 0 0 40px 30px rgba(0, 80, 80, 1)" },
          "100%": { boxShadow: "none" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-dark": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(00 80 80) black",
        },
        ".scrollbar-light": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(3 105 161) rgb(224 242 254)",
        },
        ".scrollbar-webkit-dark": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "black",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(00 80 80)",
            borderRadius: "20px",
            border: "1px solid rgb(00 B0 B0)",
          },
        },
        ".scrollbar-webkit-light": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(224 242 254)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(3 105 161)",
            borderRadius: "20px",
            border: "1px solid rgb(224 242 254)",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
