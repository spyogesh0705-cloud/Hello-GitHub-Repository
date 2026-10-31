/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { accent: '#e8702a', ink: '#0a0a0a', char: '#161616' },
    fontFamily: { display: ['"Playfair Display"', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] }
  } },
  plugins: []
}
