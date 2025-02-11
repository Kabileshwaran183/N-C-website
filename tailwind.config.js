/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        textShadow: {
          sm: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          lg: "4px 4px 8px rgba(0, 0, 0, 0.7)",
          glow: "0 0 8px #ff00ff",
        },
      },
    },
    plugins: [],
  };
  