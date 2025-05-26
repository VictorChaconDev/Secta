/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'secta-light-green': '#a9eb8d',   // Azul personalizado
        'secta-brown': '#574647',  // Verde personalizado
        'secta-green': '#317f54',
        // Rojo personalizado
      },
      fontFamily: {
        now: ['Now', 'sans-serif'],
        wc: ['WCManoNegra', 'cursive'],
      },
    },
  },
  plugins: [],
}
