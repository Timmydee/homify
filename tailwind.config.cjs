module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        'hero': "url('assets/Bestcrib.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}