/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f6f4',
          100: '#dfe8e2',
          500: '#4f6f62',
          600: '#3f5f53',
          700: '#2b4640',
          900: '#172823',
        },
        trust: {
          50: '#fbf4e8',
          500: '#b7791f',
          700: '#805316',
        },
        civic: {
          50: '#eef3ef',
          500: '#5f7d6c',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 40, 35, 0.12)',
      },
    },
  },
  plugins: [],
}
