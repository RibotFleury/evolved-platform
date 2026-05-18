import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        blue: {
          primary: '#145DA1',
          dark: '#0d3f6e',
          light: '#1e7acc',
          xl: '#e8f3fb',
        },
        orange: {
          primary: '#F97316',
          dark: '#d45f0a',
        },
        dark: {
          DEFAULT: '#0F172A',
          2: '#1e293b',
          3: '#334155',
        },
      },
    },
  },
  plugins: [],
}
export default config
