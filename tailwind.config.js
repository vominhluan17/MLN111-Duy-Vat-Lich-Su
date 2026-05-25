/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Futuristic dark philosophy theme
        dark: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#ececec',
          300: '#d9d9d9',
          400: '#a6a6a6',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2d2d2d',
          900: '#1a1a1a',
          950: '#0f0f0f',
        },
        'marx-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#d32f2f',
          700: '#b71c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#4c0519',
        },
        // Custom glow colors
        'glow': {
          red: '#ff1744',
          'red-dark': '#c41c3b',
          'red-light': '#ff5f7f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-light': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-dark-red': 'linear-gradient(135deg, #1a1a1a 0%, #2d1010 100%)',
      },
      boxShadow: {
        'glow-red': '0 0 20px 0 rgba(255, 23, 68, 0.5)',
        'glow-red-lg': '0 0 40px 0 rgba(255, 23, 68, 0.4)',
        'glow-red-xl': '0 0 60px 0 rgba(255, 23, 68, 0.3)',
        'neon-red': '0 0 10px rgba(211, 47, 47, 0.8), inset 0 0 10px rgba(211, 47, 47, 0.2)',
        'neon-red-lg': '0 0 20px rgba(211, 47, 47, 0.8), inset 0 0 20px rgba(211, 47, 47, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 20s linear infinite',
        'drift-reversed': 'drift 25s linear infinite reverse',
        'shimmer': 'shimmer 2s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px 0 rgba(255, 23, 68, 0.3)' },
          '50%': { boxShadow: '0 0 40px 0 rgba(255, 23, 68, 0.6)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(400px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      opacity: {
        '10': '0.1',
        '15': '0.15',
      },
    },
  },
  plugins: [],
}
