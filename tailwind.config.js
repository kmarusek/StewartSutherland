module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        dark: 'var(--dark)',
        'dark-light': 'var(--dark-light)',
      },
    },
    container: {
      center: true,
    },
    borderWidth: {
      default: '1px',
      '3/2': '1.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
    },
  },
  variants: {},
  plugins: [],
}
