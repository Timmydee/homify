module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/Bestcrib.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}