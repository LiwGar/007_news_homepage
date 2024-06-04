/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js}',
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'], 
      },
      colors: {
        primary: {
          softOrange: 'hsl(35, 77%, 62%)',
          softRed: 'hsl(5, 85%, 63%)',
        },
        neutral: {
          offWhite: 'hsl(36, 100%, 99%)',
          grayIsHBlue: 'hsl(233, 8%, 79%)',
          darkGrayIsHBlue: 'hsl(236, 13%, 42%)',
          veryDarkBlue: 'hsl(240, 100%, 5%)',
        },
      },
    },
  },
  plugins: [],
}


