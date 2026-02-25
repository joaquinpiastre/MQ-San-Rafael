/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mq-black': '#0a0a0a',
        'mq-dark': '#1a1a1a',
        'mq-gray': '#6b7280',
        'mq-light-gray': '#f5f5f5',
        'mq-accent': '#ed1450',
        'mq-accent-soft': '#f5a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


