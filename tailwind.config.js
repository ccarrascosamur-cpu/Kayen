/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        crema: '#F5EFE0',
        'crema-dark': '#E8D5B5',
        arena: '#E8D5B5',
        'arena-warm': '#F0E6D3',
        dulce: '#C67B3A',
        'dulce-deep': '#9C5A22',
        siena: '#9C5A22',
        espresso: '#2D1F14',
        'espresso-mid': '#4A3728',
        // Nuevos colores de la marca
        'brand-cream': '#F5EFE0',
        'brand-sand': '#E8D5B5',
        'brand-caramel': '#C67B3A',
        'brand-sienna': '#9C5A22',
        'brand-espresso': '#2D1F14',
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #F5EFE0 0%, #E8D5B5 100%)',
        'gradient-espresso': 'linear-gradient(135deg, #2D1F14 0%, #4A3728 60%, #5C4033 100%)',
      },
      boxShadow: {
        premium: '0 24px 70px rgba(45, 31, 20, 0.14)',
        subtle: '0 10px 30px rgba(45, 31, 20, 0.07)',
      },
    },
  },
  plugins: [],
}
