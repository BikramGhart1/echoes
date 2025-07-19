import lineClamp from '@tailwindcss/line-clamp'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#F55600',
        // primaryColor: '#F87171',
      },
    },
  },
  plugins: [],
}

