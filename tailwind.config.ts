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
        'figma-primary': '#5570f1',
        'figma-text-dark': '#1f3161',
        'figma-gray': '#8b8d97',
        'figma-bg': '#fafafa',
        'figma-accent-orange': '#ffcc91',
        'figma-accent-red': '#ff4e3d',
        'figma-accent-green': '#00c853',
      },
      fontFamily: {
        sans: ['Poppins', 'Nunito', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'figma-card': '0px 4px 17px #0000001f',
        'figma-soft': '0px 15px 29px #090f250a',
        'figma-btn': '0px 4px 10px #5570f14d',
      }
    },
  },
  plugins: [],
}
export default config
