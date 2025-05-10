/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        creme: '#fefae0',
        ivoire: '#fffaf0',
        beige: '#f5f5dc',
        lin: '#eae0d5',
        sable: '#fdf6e3',
      },
      /* Animations réutilisables ------------------------------------------ */
      animation: {
        'fade-in': 'fadeIn 2.8s ease-out forwards', // ↑ fondu simple
        'slide-in': 'slideIn 0.3s ease-out forwards', // menu mobile, etc.
      },

      /* Keyframes ---------------------------------------------------------- */
      keyframes: {
        /* Fondu uniquement (plus de translation verticale) */
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        /* Conserve le slide‑in pour d’autres éléments (burger menu) */
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
