/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fiber-blue': {
          DEFAULT: '#1B3A6B',
          dark: '#122850',
          light: '#2A5298',
          subtle: '#EDF1F7',
        },
        midnight: '#111C2E',
        'signal-green': {
          DEFAULT: '#F47B20',
          dark: '#D4660E',
          light: '#F9A040',
          subtle: '#FEF3E8',
        },
        amber: {
          DEFAULT: '#F47B20',
          dark: '#D4660E',
          light: '#F9A040',
          subtle: '#FEF3E8',
        },
        slate: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          700: '#44403C',
          900: '#1C1917',
        },
      },
      fontFamily: {
        display: ['Source Sans 3', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};
