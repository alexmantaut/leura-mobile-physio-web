import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // LMP Branding Colors
        sage: {
          50: '#f6f8f6',
          100: '#e8ebe8',
          200: '#d0d7d0',
          300: '#b8c3b8',
          400: '#a0afa0',
          500: '#88a088', // Primary sage green
          600: '#7a9170',
          700: '#6c8258',
          800: '#5a7148',
          900: '#48603a',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff7e0',
          200: '#ffed99',
          300: '#ffe699',
          400: '#ffde66',
          500: '#d4a651', // Primary golden yellow
          600: '#c9943f',
          700: '#b8832d',
          800: '#a77220',
          900: '#8b5a10',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Georgia', ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
