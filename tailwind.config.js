/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6f7',
          100: '#d7ebee',
          500: '#0E7C86',
          600: '#0b6670',
          700: '#074f59',
          900: '#0D1F3D',
        },
        trust: {
          50: '#f1f8f9',
          500: '#6FA7AF',
          700: '#3f7f88',
        },
        civic: {
          50: '#f4f6f7',
          100: '#e3e7ea',
          500: '#C7CCD1',
        },
      },
      boxShadow: {
        soft: '0 22px 55px rgba(13, 31, 61, 0.12)',
      },
    },
  },
  plugins: [],
}
