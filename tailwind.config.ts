import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '880px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#9F9F9F',
        background: '#FCFCFC',
        surface: '#0B0B0B',
        'text-primary': '#0B0B0B',
        'text-secondary': '#6D6D6D',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '58px' }],
        'h2': ['32px', { lineHeight: '39px' }],
        'h3': ['24px', { lineHeight: '29px' }],
        'body-lg': ['20px', { lineHeight: '25px' }],
        'btn': ['16px', { lineHeight: '20px' }],
      },
      spacing: {
        'section-y': '96px',
        'section-x': '96px',
        'card-p': '32px',
        'card-gap': '16px',
        'nav-gap': '24px',
        'btn-y': '10px',
        'btn-x': '24px',
      },
      borderRadius: {
        'btn': '20px',
        'card': '12px',
      },
    },
  },
  plugins: [],
}

export default config
