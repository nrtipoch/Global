/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
      colors: {
        'dashboard-purple': '#667eea',
        'dashboard-blue': '#764ba2',
        'dashboard-teal': '#4ECDC4',
        'dashboard-green': '#44A08D',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
