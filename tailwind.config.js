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
    '../../../../config/sync/*.yml',s
    './gla_accelerator_theme.theme',
  ],
  darkMode: false,
  theme: {
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
