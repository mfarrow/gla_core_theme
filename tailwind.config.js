const plugin = require('tailwindcss/plugin');

// Use https://chir.ag/projects/name-that-color to name colours.
const colors = {
  transparent: 'rgba(255, 255, 255, 0)',
  current: 'currentColor',
  pink: '#e7135d',
  'pink-dark': '#9e0059',
  grey: '#353d42',
  vulcan: '#111827',
  'dark-grey': '#1a1e21',
  'text-grey': '#333333',
  'off-white': '#efefef',
  'wild-sand': '#f5f5f5',
  mercury: '#e6e6e6',
  white: '#ffffff',
  black: '#000000',
  blue: '#007acc',
  'blue-dark': '#00577d',
  'blue-darker': '#1d3f4d',
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
  // JIT mode is in preview, and affects the devtools experience, but it's fast and you never need to configure
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
    './includes/*.inc',
    './includes/**/*.inc',
    './gla_core_theme.theme',
    './tokens/*.story.mdx',
    './storybook/.storybook/preview.js',
    '../../../../config/sync/*.yml',
    '../../../modules/**/*.module',
    '../../../modules/**/*.php',
  ],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      // These colours can be used to swap between Mayoral and Assembly branding:
      primary: 'var(--theme-primary)',
      'primary-dark': 'var(--theme-primary-dark)',
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
      9: '9px',
      full: '9999px',
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
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    lineHeight: {
      // Replace the Tailwind scale with a more simple one from the designs. We don't have a comprehensive list of
      // all the line heights used in the designs so we name the scale literally rather than trying to do sm, md, lg
      // etc and then end up with sm, verysmall, extrasmall, notassmallastheothers, etc…
      19: '19px',
      20: '20px',
      21: '21px',
      26: '26px',
      28: '28px',
      30: '30px',
      35: '35px',
    },
    extend: {
      spacing: {
        'grid-gutter': '15px',
      },
      margin: {
        '-bs-grid': '-15px',
      },
      fill: {
        pink: colors.pink,
        primary: colors.primary,
        'primary-dark': colors['primary-dark'],
      },
      letterSpacing: {
        '-0.5': '-0.5px',
        0.25: '0.25px',
        0.75: '0.75px',
      },
      maxWidth: {
        'rich-text': '73ch',
      },
      transitionDuration: {
        DEFAULT: '100ms',
      },
    },
    zIndex: {
      1: 1,
      10: 10,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      501: 501, // Drupal Contextual Links are 500
      1251: 1251, // Drupal admin toolbar is 1250
      auto: 'auto',
    },
  },
  variants: {
    extend: {
      textColor: ['hocus'],
      translate: ['group-hover', 'group-focus-within'],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line import/no-unresolved,global-require
    require('@tailwindcss/line-clamp'),
    // eslint-disable-next-line import/no-unresolved,global-require
    require('tailwindcss-interaction-variants'),
    // eslint-disable-next-line import/no-unresolved,global-require
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, e, theme, variants }) => {
      addUtilities({
        '.flex-gap-wrapper': {
          overflow: 'auto',
        },
        '[class*="flex-gap-"]:not([class*="flex-gap-wrapper"]):not([class*="flex-gap-x-"]):not([class*="flex-gap-y-"])': {
          margin: 'calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap))',
          '& > *': {
            margin: 'calc(var(--gap)) 0 0 calc(var(--gap))',
          },
        },
        '[class*="flex-gap-x-"]': {
          margin:
            '0 calc(-1 * calc(var(--gap) / 2)) 0 calc(-1 * calc(var(--gap) / 2))',
          '& > *': {
            margin: '0 calc(calc(var(--gap) / 2)) 0 calc(calc(var(--gap) / 2))',
          },
        },
        '[class*="flex-gap-y-"]': {
          margin:
            'calc(-1 * calc(var(--gap) / 2)) 0 calc(-1 * calc(var(--gap) / 2)) 0',
          '& > *': {
            margin: 'calc(calc(var(--gap) / 2)) 0 calc(calc(var(--gap) / 2)) 0',
          },
        },
      });

      Object.entries(theme('gap')).forEach(([key, value]) => {
        addUtilities(
          {
            [`.flex-gap-${e(key)}`]: {
              '--gap': value,
            },
            [`.flex-gap-x-${e(key)}`]: {
              '--gap': value,
            },
            [`.flex-gap-y-${e(key)}`]: {
              '--gap': value,
            },
          },
          variants('gap'),
        );
      });
    }),
  ],
};
