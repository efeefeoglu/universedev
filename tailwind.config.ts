import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            primary: "#3b82f6",
            "background-light": "#f3f4f6",
            "background-dark": "#111827",
            "card-light": "#ffffff",
            "card-dark": "#1f2937",
            "border-light": "#e2e8f0",
            "border-dark": "#2d3748",
        },
        fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'],
            display: ["var(--font-space-grotesk)", "sans-serif"],
            serif: ['var(--font-playfair-display)', 'serif'],
            tech: ['var(--font-orbitron)', 'sans-serif'],
            pixel: ['var(--font-vt323)', 'monospace'],
            hand: ['var(--font-architects-daughter)', 'cursive'],
        },
        borderRadius: {
            DEFAULT: "0.5rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            full: "9999px",
        },
    },
  },
  plugins: [],
}
export default config
