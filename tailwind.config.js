/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Bao gồm tất cả file JS/TS/JSX/TSX trong thư mục src
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}", // Nếu bạn có thư mục components
  ],
  theme: {
    extend: {
      animationDelay: {
        '200': '0.2s',
        '400': '0.4s',
        '600': '0.6s',
        '800': '0.8s',
        '1000': '1.0s',
        '1200': '1.2s',
        '1400': '1.4s',
        '1600': '1.6s',
        '1800': '1.8s',
        '2000': '2.0s',
        '3000': '3.0s',
      },
    },
  },
  plugins: [],
};