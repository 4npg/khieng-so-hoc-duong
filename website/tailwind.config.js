/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0d18',
          card: '#121829',
          border: '#1e293b',
          blue: '#00f0ff',
          neon: '#3b82f6',
          emerald: '#10b981',
          amber: '#f59e0b',
          purple: '#8b5cf6',
          rose: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Be Vietnam Pro', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(0, 240, 255, 0.25)',
        'glow-emerald': '0 0 25px rgba(16, 185, 129, 0.25)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.25)'
      }
    },
  },
  plugins: [],
}
