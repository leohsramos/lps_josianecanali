/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'DM Sans', 'sans-serif'],
                display: ['Montserrat', 'Poppins', 'sans-serif'],
            },
            colors: {
                rose: {
                    50: '#fdf2f3',
                    100: '#fbe6e8',
                    200: '#f6ced2',
                    300: '#eeb0b5',
                    400: '#DD878D',
                    500: '#CA4A54',
                    600: '#b03540',
                    700: '#CA4A54',
                    800: '#7d242d',
                    900: '#6a2129',
                    950: '#3b0e13',
                },
                stone: {
                    850: '#1c1917',
                    900: '#1c1917',
                    950: '#0c0a09',
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 3s ease-in-out infinite alternate',
                'glow-text': 'glow-text 5s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px -10px rgba(202, 74, 84, 0.5)' },
                    '100%': { boxShadow: '0 0 50px 0px rgba(202, 74, 84, 0.8)' },
                },
                'glow-text': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            }
        }
    },
    plugins: [],
}
