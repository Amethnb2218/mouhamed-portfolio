/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
        inter: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: { 900: '#030014', 800: '#050520', 700: '#0a0a2e', 600: '#0f0f3a', 500: '#1a1a4a' },
        accent: { DEFAULT: '#7c3aed', light: '#a855f7', lighter: '#c084fc' },
        cyan: { DEFAULT: '#06b6d4', light: '#22d3ee' },
        gold: '#f59e0b',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        pulseGlow: { '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.6)' } },
        shimmer: { to: { backgroundPosition: '200% center' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
