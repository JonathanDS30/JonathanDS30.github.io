import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#b6e4ff',
          300: '#87d1ff',
          400: '#58bdff',
          500: '#2aa6ff',
          600: '#168be6',
          700: '#0e6fbf',
          800: '#0c5899',
          900: '#0b4a80',
        },
      },
      backdropBlur: {
        xs: '2px',
        glass: '12px',
        'glass-lg': '20px',
      },
      boxShadow: {
        'soft': '0 10px 30px -15px rgba(2,6,23,.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-glow': '0 0 20px rgba(22, 139, 230, 0.3)',
        'glass-glow-lg': '0 0 40px rgba(22, 139, 230, 0.4)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-brand': 'linear-gradient(135deg, #168be6 0%, #2aa6ff 50%, #58bdff 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(22, 139, 230, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(42, 166, 255, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(14, 111, 191, 0.1) 0px, transparent 50%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(22, 139, 230, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(22, 139, 230, 0.5)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
