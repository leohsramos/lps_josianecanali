/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carvao: '#14100D',
        ebano: '#1F1811',
        dourado: {
          DEFAULT: '#C9A15C',
          soft: '#D9B87C',
        },
        champagne: '#E8DCC8',
        terracota: '#B98165',
        creme: '#FAF6F0',
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1FAF57',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      keyframes: {
        driftSlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'drift-slow': 'driftSlow 42s linear infinite',
        breathe: 'breathe 9s ease-in-out infinite',
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
};
