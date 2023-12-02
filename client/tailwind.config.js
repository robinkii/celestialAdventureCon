import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
