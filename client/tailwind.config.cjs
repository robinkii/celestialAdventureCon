/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  },
  daisyui: {
    themes: [
      {
        primary: '#190482',
        secondary: '#7752FE',
        accent: '#8E8FFA',
        neutral: '#050609',
        'base-100': '#ffffff',
        info: '#00a1c9',
        success: '#10A19D',
        warning: '#FFBA86',
        error: '#F6635C',
      },
    ],
  },
  plugins: [require('daisyui')],
};
