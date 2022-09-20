/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        'border-color': '#707070',
        danger: '#e51d50',
        'danger-200': '#d43074',
        'danger-300': '#ff385c',
        secondary: '#f7f7f7'
      },
      minWidth: {
        25: '100px',
        43: '172px',
        50: '200px',
        63: '252px',
        142: '568px'
      },
      fontSize: {
        10: '10px'
      },
      zIndex: {
        1030: 1030
      }
    }
  },
  plugins: []
}
