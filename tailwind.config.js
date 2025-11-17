/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BE1687',
        secondary: '#661E78',
        third: '#390027',
        white: '#FFFFFF',
        black: '#1E1E1E',
        grey: '#F9F9FF',
        lightGrey: '#FEFEFEE5',
      },
      maxWidth: {
        '1200': 1180,
        '1000': 1040,
        '900': 920,
        '800': 820,
      },
      boxShadow: {
        nav: '-9px -4px 38px rgba(0, 0, 0, 0.15)',
        card: '1px 1px 25px rgba(0, 0, 0, 0.15)',
        detailcard: '1px 1px 25px rgba(102, 30, 120, 0.15)',
      },
      gridTemplateColumns: {
        'auto-5' : 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-4' : 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-4-200' : 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-3' : 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-3-250' : 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-3-280' : 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-3-150' : 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-150' : 'repeat(auto-fit, minmax(165px, 1fr))',
      },
      screens: {
        'x-sm': '390px',
        'review': '575px',
        '1000': '1000px',
        '1200': '1200px',
      }
    },
  },
  plugins: [],
}
