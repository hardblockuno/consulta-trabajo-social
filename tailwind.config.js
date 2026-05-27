/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf7fb',
          100: '#d6edf5',
          500: '#16779b',
          600: '#0f6788',
          700: '#0b5270',
          900: '#11384a',
        },
        trust: {
          50: '#eef9f5',
          500: '#1f9a7a',
          700: '#14745e',
        },
        civic: {
          50: '#fff7ed',
          500: '#d97706',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 35, 50, 0.10)',
      },
    },
  },
  plugins: [],
}
