import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
          './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
          './src/components/**/*.{js,ts,jsx,tsx,mdx}',
          './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
    theme: {
          extend: {
                  colors: {
                            'et-black': '#171615',
                            'et-charcoal': '#1a1918',
                            'et-dark': '#222120',
                            'et-accent': '#C9A961',
                            'et-gold': '#C9A961',
                  },
                  fontFamily: {
                            sans: ['var(--font-geist-sans)'],
                            mono: ['var(--font-geist-mono)'],
                  },
          },
    },
    plugins: [],
}
export default config
