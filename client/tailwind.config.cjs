/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: '#0000ff',
          secondary: '#00cbff',
          accent: '#002aff',
          neutral: '#1b1b1b',
          'base-100': '#fff4f2',
          info: '#00dbff',
          success: '#00fe78',
          warning: '#ce4e00',
          error: '#ff2354',
        },
        darkTheme: {
          primary: '#8a00ff',
          secondary: '#00da00',
          accent: '#00cfff',
          neutral: '#050609',
          'base-100': '#31252a',
          info: '#00a1c9',
          success: '#4d9000',
          warning: '#de7500',
          error: '#ff8185',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
