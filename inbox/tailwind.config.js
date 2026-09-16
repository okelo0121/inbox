/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090B0E',
        surface: '#12151D',
        'surface-elevated': '#111827',
        'surface-muted': '#171F31',
        border: '#26324A',
        'border-strong': '#3A4866',
        'text-primary': '#F7F8FF',
        'text-secondary': '#A9B2C7',
        'text-muted': '#6F7890',
        primary: '#5146FF',
        'primary-strong': '#6B5CFF',
        'primary-soft': '#27245F',
        success: '#45D39C',
        danger: '#FF647C',
      },
      fontFamily: {
        sans: ['System'],
        display: ['System'],
        mono: ['SpaceMono'],
      },
      fontSize: {
        display: ['34px', { lineHeight: '40px', fontWeight: '800' }],
        title: ['24px', { lineHeight: '30px', fontWeight: '700' }],
        heading: ['18px', { lineHeight: '24px', fontWeight: '700' }],
        body: ['15px', { lineHeight: '21px', fontWeight: '400' }],
        label: ['13px', { lineHeight: '18px', fontWeight: '600' }],
        caption: ['11px', { lineHeight: '15px', fontWeight: '500' }],
      },
      borderRadius: {
        control: '12px',
        card: '16px',
        'card-large': '20px',
        pill: '9999px',
      },
      boxShadow: {
        glow: '0 0 24px rgba(81, 70, 255, 0.28)',
        card: '0 12px 32px rgba(0, 0, 0, 0.24)',
      },
    },
  },
}