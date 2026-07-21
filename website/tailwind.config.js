/** @type {import('tailwindcss').Config} */
export default {
  // Explicitly use class-based dark mode (html class="dark" is set in index.html)
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark:    '#0a0d18',
          card:    '#121829',
          border:  '#1e293b',
          blue:    '#00f0ff',
          neon:    '#3b82f6',
          emerald: '#10b981',
          amber:   '#f59e0b',
          purple:  '#8b5cf6',
          rose:    '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Be Vietnam Pro', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue':    '0 0 25px rgba(0, 240, 255, 0.28)',
        'glow-emerald': '0 0 25px rgba(16, 185, 129, 0.28)',
        'glow-purple':  '0 0 25px rgba(139, 92, 246, 0.28)',
      },
      // Custom animation durations used in VideoShowcase (Sparkles spin)
      animationDuration: {
        '3s':  '3s',
        '10s': '10s',
      },
      // Ensure scroll-margin-top utility is available for anchor offsets
      scrollMargin: {
        'nav': '5rem',
      },
    },
  },
  plugins: [],
  // Safelist classes that are constructed dynamically (Tailwind JIT can't
  // detect them via static analysis from className template literals).
  safelist: [
    'text-emerald-400',
    'text-amber-400',
    'text-rose-400',
    'shadow-glow-blue',
    'shadow-glow-emerald',
    'shadow-glow-purple',
  ],
}
