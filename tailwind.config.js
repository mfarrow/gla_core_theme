// Use https://chir.ag/projects/name-that-color to name colours.
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  pink: '#e7135d',
  'dark-pink': '#9e0059',
  grey: '#353d42',
  'dark-grey': '#1a1e21',
  'text-grey': '#333333',
  'off-white': '#efefef',
  'wild-sand': '#f5f5f5',
  'mercury': '#e6e6e6',
  white: '#ffffff',
  black: '#000000',
  blue: '#007acc',
  'dark-blue': '#00577d',
  green: '#008743',
  red: '#eb001b',
  purple: '#ae4ac6',
  yellow: '#fff200',
  facebook: '#3b5998',
  linkedin: '#0077b5',
  twitter: '#1da1f2',
  whatsapp: '#25d366',
  youtube: '#ff0000',
};

module.exports = {
  // JIT mode is in preview, and affects the devtools experience, but it's so fast and you never need to configure
  // what variants are enabled.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: 'jit',
  // We give all utility classes a u- prefix to differentiate between Drupal, custom, or third-party classes.
  prefix: 'u-',
  // Mark all utilities as important to help prevent them being overridden. If this causes issues with
  // overriding inline styles set by JavaScript then see https://tailwindcss.com/docs/configuration#selector-strategy.
  important: true,
  // List all the possible places where a utility could be used to avoid it being purged on prod builds.
  purge: [
    './components/**/*.twig',
    './components/**/*.js',
    './components/**/*.story.js',
    './templates/**/*.html.twig',
    '../../../../config/sync/*.yml',
    './gla_core_theme.theme',
    './tokens/*.story.mdx',
    // For classes added by Storybook decorators:
    './storybook/.storybook/preview.js',
  ],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      // aliases
      primary: colors.pink,
      assembly: colors['dark-blue'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1920px',
      print: { raw: 'print' },
    },
    borderRadius: {
      none: '0',
      DEFAULT: '4px',
      6: '6px',
    },
    fontSize: {
      sm: [
        '16px',
        {
          lineHeight: '19px',
        },
      ],
      base: [
        '18px',
        {
          lineHeight: '30px',
        },
      ],
      lg: [
        '20px',
        {
          lineHeight: '30px',
        },
      ],
      xl: [
        '22px',
        {
          lineHeight: '25px',
          letterSpacing: '0.25px',
        },
      ],
      xxl: [
        '22px',
        {
          lineHeight: '32px',
          letterSpacing: '0.25px',
        },
      ],
      '2xl': [
        '25px',
        {
          lineHeight: '35px',
          letterSpacing: '0.25px',
        },
      ],
      '3xl': [
        '30px',
        {
          lineHeight: '35px',
          letterSpacing: '0.25px',
        },
      ],
      '4xl': [
        '40px',
        {
          lineHeight: '40px',
          letterSpacing: '0.25px',
        },
      ],
      '5xl': [
        '50px',
        {
          lineHeight: '50px',
          letterSpacing: '0.25px',
        },
      ],
      '6xl': [
        '70px',
        {
          lineHeight: '70px',
          letterSpacing: '0.25px',
        },
      ],
      '7xl': [
        '100px',
        {
          lineHeight: '100px',
          letterSpacing: '0.25px',
        },
      ],
      '8xl': [
        '120px',
        {
          lineHeight: '120px',
          letterSpacing: '0.25px',
        },
      ],
      '9xl': [
        '140px',
        {
          lineHeight: '140px',
          letterSpacing: '0.25px',
        },
      ],
    },
    extend: {
      spacing: {
        'bs-grid': '15px',
      },
      margin: {
        '-bs-grid': '-15px'
      },
      typography: require('./components/01-atoms/rich-text/tailwind-typography-config'),
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/typography')({
      // Disable modifiers as we will handle different sizes etc ourselves in our own SCSS.
      modifiers: [],
    }),
  ],
};
