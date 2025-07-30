/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        accent: "#00BFFF",
        foreground: "#FFFFFF"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"]
      }
    }
  },
  plugins: []
}
