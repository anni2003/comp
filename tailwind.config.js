/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* npx tailwindcss -i ./docs/input.css -o ./dist/output.css --watch */