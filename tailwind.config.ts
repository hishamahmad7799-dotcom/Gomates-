import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0C0E',
          surface: '#131519',
          elevated: '#1A1D24',
          border: '#262933',
          borderHover: '#373C4B',
        },
        accent: {
          primary: '#DA1526',     // Gomates Brand Red
          secondary: '#B8101E',   // Deep Crimson Red
          emerald: '#2A9D8F',     // Included / Active accent
          sand: '#E9C46A',
        },
        gray: {
          light: '#F3F4F6',
          muted: '#9CA3AF',
          dark: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(218, 21, 38, 0.45)',
        'glow-emerald': '0 0 25px -5px rgba(42, 157, 143, 0.25)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #DA1526 0%, #E63946 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(11, 12, 14, 0) 0%, rgba(11, 12, 14, 0.9) 80%, #0B0C0E 100%)',
        'gradient-hero': 'radial-gradient(ellipse at top, rgba(218, 21, 38, 0.25) 0%, rgba(11, 12, 14, 0) 70%)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
