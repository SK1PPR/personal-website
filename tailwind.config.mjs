/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f4',
          100: '#e9e8e2',
          200: '#cdcbc0',
          500: '#717063',
          700: '#3e3e36',
          900: '#171713',
          950: '#0d0e0b'
        },
        signal: {
          400: '#22c55e',
          500: '#16a34a'
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      maxWidth: {
        page: '72rem',
        reading: '44rem'
      }
    }
  },
  plugins: []
};
