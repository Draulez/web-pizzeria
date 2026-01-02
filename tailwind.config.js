/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C89B3C",
          secondary: "#3F5D3A",
          dark: "#2B2B2B",
          color: "#693232",
        },
      },
    },
  },
  plugins: [],
};
