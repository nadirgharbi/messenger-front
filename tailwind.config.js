/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    keyframes: {
      slideInRight: {
        '0%': {
          transform: 'translateX(10%)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: 1,
        },
      },
      slideInLeft: {
        '0%': {
          transform: 'translateX(0%)',
          opacity: 1,
        },
        '100%': {
          transform: 'translateX(10%)',
          opacity: 0,
        },
      },
      shake: {
        '0%': {
          transform: 'translateX(0%)',
        },
        '25%': {
          transform: 'translateX(0.5%)',
        },
        '50%': {
          transform: 'translateX(0%)',
        },
        '75%': {
          transform: 'translateX(-0.5%)',
        },
        '100%': {
          transform: 'translateX(0%)',
        },
      },
    },
    animation: {
      slideInRight: 'slideInRight 0.3s ease-out',
      slideInLeft: 'slideInLeft 0.3s ease-out',
      shake: 'shake 0.2s ease-out',
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],

}