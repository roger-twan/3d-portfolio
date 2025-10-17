/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        'focus-in-contract': {
          '0%': {
            'letter-spacing': '1em',
            filter: 'blur(12px)',
            opacity: 0,
          },
          '100%': {
            filter: 'blur(0px)',
            opacity: 1,
          },
        },
        'blur-out-expand': {
          '0%': {
            filter: 'blur(0.01)',
          },
          '100%': {
            'letter-spacing': '0.5em',
            filter: 'blur(12px) opacity(0%)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'background-animation': {
          from: {
            'background-position': '0 0',
          },
          to: {
            'background-position': '-100% 0',
          },
        },
      },
      animation: {
        'focus-in-contract': 'focus-in-contract 0.5s both',
        'blur-out-expand': 'blur-out-expand 0.3s both',
        'fade-in': 'fade-in 5s both',
        'scale-in': 'scale-in 0.5s both',
        'background-animation':
          'background-animation 3s alternate infinite linear',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
