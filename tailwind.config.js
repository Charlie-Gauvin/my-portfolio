/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A', // Couleur de fond du site
        primary: '#FFFFFF', // Blanc
        secondary: '#8C8C8C', // Gris
        btn: '#0E0E0F', // Couleur de fond du bouton
        orange: '#FF9143', // Couleur de la marque
        footer: '#131313', // Couleur du footer
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}