/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "half-main-height": "calc((100vh - 100px) / 2)",
        "main-height": "calc(100vh - 100px)",
      },
    },
  },
  plugins: [],
};
