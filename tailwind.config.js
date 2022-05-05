module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  fontFamily: {
    noto: ["Noto Sans JP"],
    fancy: ["Dancing Script"],
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'max-xl': {'max': '1279px'},
      'max-lg': {'max': '1023px'},
      'max-md': {'max': '767px'},
      'max-sm': {'max': '639px'},
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse2': 'pulse 3.8s linear infinite',
        'bounce2': 'bounce 2.2s linear infinite'
      }
    },
  },
  plugins: [],
  important: true,
}
