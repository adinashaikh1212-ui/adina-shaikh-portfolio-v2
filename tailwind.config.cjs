/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        nb: {
          // Main surfaces
          white: '#F7F9FC',
          gray: '#EEF3F6',
          'gray-mid': '#D4DEE5',

          // Typography and structural lines
          black: '#0B1F33',
          muted: '#526372',

          // Primary marine accent
          yellow: '#DCEEF3',
          'yellow-hover': '#C7E3EA',
          blue: '#176B87',

          // Secondary restrained accents
          green: '#2F7D6D',
          red: '#A85D3B'
        },

        marine: {
          50: '#F2F8FA',
          100: '#DCEEF3',
          200: '#B9DCE5',
          300: '#87C1D0',
          400: '#4D9CB2',
          500: '#267C96',
          600: '#176B87',
          700: '#15556B',
          800: '#164758',
          900: '#153C4A'
        },

        navy: {
          50: '#F3F6F8',
          100: '#E2E8ED',
          200: '#C8D3DC',
          300: '#A0B3C2',
          400: '#718DA2',
          500: '#526F84',
          600: '#40596C',
          700: '#344959',
          800: '#293B49',
          900: '#0B1F33'
        }
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },

      fontSize: {
        'clamp-sm': 'clamp(0.875rem, 1vw, 1rem)',
        'clamp-base': 'clamp(1rem, 1.2vw, 1.125rem)',
        'clamp-lg': 'clamp(1.125rem, 1.5vw, 1.25rem)',
        'clamp-xl': 'clamp(1.25rem, 2vw, 1.5rem)',
        'clamp-2xl': 'clamp(1.5rem, 3vw, 2rem)',
        'clamp-3xl': 'clamp(2rem, 4vw, 3rem)',
        'clamp-4xl': 'clamp(2.5rem, 5vw, 4rem)',
        'clamp-5xl': 'clamp(3rem, 8vw, 5.5rem)'
      },

      boxShadow: {
        brutal: '0 4px 16px rgba(11, 31, 51, 0.08)',
        'brutal-sm': '0 2px 8px rgba(11, 31, 51, 0.07)',
        'brutal-lg': '0 8px 24px rgba(11, 31, 51, 0.10)',
        'brutal-xl': '0 14px 36px rgba(11, 31, 51, 0.12)',
        'brutal-yellow': '0 6px 20px rgba(23, 107, 135, 0.14)',
        'brutal-red': '0 6px 20px rgba(168, 93, 59, 0.14)'
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        ticker: 'ticker 30s linear infinite',
        'ticker-fast': 'ticker 15s linear infinite',
        'ticker-rev': 'ticker 22s linear infinite reverse'
      },

      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },

        slideUp: {
          '0%': {
            transform: 'translateY(16px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },

        ticker: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        }
      }
    }
  },

  plugins: []
};