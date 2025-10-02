/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:  {
      'mono': ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      'orbitron': ['Orbitron', 'sans-serif'],
      'cinzel': ['Cinzel', 'serif'],
      'tech': ['Share Tech Mono', 'monospace'],
    },
      colors: {
        terminal: {
          bg: {
            light: '#f8f8f2',
            dark: '#282a36'
          },
          text: {
            light: '#44475a',
            dark: '#f8f8f2'
          },
          accent: {
            green: '#50fa7b',
            cyan: '#8be9fd',
            purple: '#bd93f9',
            pink: '#ff79c6',
            yellow: '#f1fa8c',
            orange: '#ffb86c',
            red: '#ff5555'
          }
        }
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s infinite',
        'matrix-drop': 'matrix-drop 3s linear infinite',
        'type-writer': 'type-writer 2s steps(40) 1s forwards',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'matrix-drop': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'type-writer': {
          'to': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}