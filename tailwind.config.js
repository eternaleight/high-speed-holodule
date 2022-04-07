module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
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
    extend: {},
  },
  plugins: [],
  important: true,
}
