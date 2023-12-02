/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#004fff',
          secondary: '#006dff',
          accent: '#88b900',
          neutral: '#181818',
          'base-100': '#1d2c2b',
          info: '#00ceff',
          success: '#3b8900',
          warning: '#ffac00',
          error: '#c81f41',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
