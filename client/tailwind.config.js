/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DeFrance: '#b9a542', // Puedes poner el nombre que prefieras
      },
    },
  },
  plugins: [],
}

