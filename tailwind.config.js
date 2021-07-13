module.exports = {
  // JIT mode is in preview, and affects the devtools experience, but it's so fast and you never need to configure
  // what variants are enabled.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
  // We give all utility classes a u- prefix to differentiate between Drupal, custom, or third-party classes.
  prefix: 'u-',
  // Mark all utilities as important to help prevent them being overridden. If this causes issues with
  // overriding inline styles set by JavaScript then see https://tailwindcss.com/docs/configuration#selector-strategy.
  important: true,
  // List all the possible places where a utility could be used to avoid it being purged on prod builds.
  purge: [
    './components/**/*.twig',
    './components/**/*.js',
    './templates/**/*.html.twig',
    '../../../../config/sync/*.yml',
    './gla_accelerator_theme.theme',
    './tokens/*.story.mdx',
  ],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pink: '#e7135d',
      'dark-pink': '#9e0059',
      'grey': '#353d42',
      'dark-grey': '#1a1e21',
      'text-grey': '#333333',
      'off-white': '#efefef',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#007acc',
      'dark-blue': '#00577d',
      'green': '#008743',
      'red': '#eb001b',
      'purple': '#ae4ac6',
      'yellow': '#fff200',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1920px',
      print: { raw: 'print' },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};