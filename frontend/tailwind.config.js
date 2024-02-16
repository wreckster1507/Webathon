/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      })
    }, gradientColorStops: theme => theme('colors'),
  },
  variants: {
    extend: {
      backgroundImage: ['responsive', 'hover', 'focus', 'active'],
    },
    plugins: [],
  }
}