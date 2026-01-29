/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0A1D56',   // Navy Blue
          accent: '#FFD700',    // Yellow Gold
          dark: '#0F172A',      // Optional: Deep black-blue
          light: '#F5F5F5',     // Optional: Light background
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Add custom fonts if needed
        },
        borderRadius: {
          xl: '1rem',
          '2xl': '1.5rem',
        },
      },
    },
    plugins: [],
  }
  