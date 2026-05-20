import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        smokeBlack: '#0B0B0F',
        charcoal: '#1A1A1F',
        smokeGray: '#3A3A40',
        metallicGray: '#8A8F98',
        fogWhite: '#F5F5F5',
        umoRed: '#C1121F',
        darkRed: '#7A0C14',
        agriGreen: '#2F7D32',
        techBlue: '#2563EB'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px rgba(0,0,0,0.4)',
        redGlow: '0 10px 30px rgba(193,18,31,0.28)'
      }
    }
  },
  plugins: []
} satisfies Config;
