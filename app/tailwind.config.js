/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: [
    'bg-blue-100',
    'bg-green-100',
    'bg-red-100',
    'bg-purple-100',
    'bg-yellow-100',
    'bg-blue-400',
    'bg-green-400',
    'bg-red-400',
    'bg-purple-400',
    'bg-yellow-400',
    'bg-blue-700',
    'bg-green-700',
    'bg-red-700',
    'bg-yellow-700',
    'bg-purple-700',
    'text-blue-400',
    'text-green-400',
    'text-red-400',
    'text-yellow-400',
    'text-purple-400',
    'border-blue-400',
    'border-green-400',
    'border-red-400',
    'border-yellow-400',
    'border-purple-400',
    'ring-blue-700',
    'ring-green-700',
    'ring-red-700',
    'ring-yellow-700',
    'ring-purple-700'
  ],
  theme: {
    extend: {
      keyframes: {
        user: {
          '0%': {transform: 'translateY(0) translateX(0)'},
          '25%': {transform: 'translateY(-1px) translateX(2px)'},
          '50%': {transform: 'translateY(0) translateX(0)'},
          '75%': {transform: 'translateY(-1px) translateX(-2px)'},
          '100%': {transform: 'translateY(0) translateX(0)'},
        },
        logout: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(2px)'},
        },
        grow: {
          '0%': {transform: 'scale3d(1,1,1)'},
          '30%': {transform: 'scale3d(1.25,.75,1)'},
          '40%': {transform: 'scale3d(.75,1.25,1)'},
          '50%': {transform: 'scale3d(1.15,.85,1)'},
          '65%': {transform: 'scale3d(.95,1.05,1)'},
          '75%': {transform: 'scale3d(1.05,.95,1)'},
        },
        loader: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        },
        rotateright: {
          '0%': {transform: 'rotate(0deg)'},
          '25%': {transform: 'rotate(10deg)'},
          '50%': {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        rotatetr: {
          '0%': {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(20deg)'},
        },
        check: {
          '100%': {strokeDashoffset: 100}
        }
      }, animation: {
        'user': 'user 2s cubic-bezier(0.83, -0.07, 0, 1.04) infinite',
        'logout': 'logout 1s cubic-bezier(1, -0.17, 0.29, 0.99) infinite alternate-reverse ',
        'grow': 'grow 1s infinite',
        'loader': 'loader 1.5s infinite linear',
        'rotate-right': 'rotateright 1s cubic-bezier(1, -0.01, 0.13, 1.15) infinite alternate-reverse',
        'rotate-tr': 'rotatetr 1s cubic-bezier(1,-.28,.01,1.13) infinite alternate',
        'check': 'check 1s cubic-bezier(.99,-.1,.01,1.02) infinite alternate',
      }
    },
  },
  colors: {
    'blue': '#1E90FF'
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [
	  require('tailwindcss-font-inter'),
	  require('@tailwindcss/typography'),
	  require('@tailwindcss/forms')
  ],
}