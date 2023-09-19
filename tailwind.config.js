// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'calculator': '#0f0f0f',
        'calculator-light-bg': '#fff',
        'btn-green': '#6FB988',
        'btn-grey': '#282828',
        'btn-navy-blue': '#0F141F',
      },
    },
  },
  plugins: [],
}

