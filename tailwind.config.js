/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spacegray-500': '#334155',
        'spacegray-600': '#020617',
        'spaceblue-500': '#99F3FF'
      },
      boxShadow: {
        spacex: '0 12px 0px',
        'spacex-sm': '0 8px 0px'
      }
    }
  },
  plugins: []
}
