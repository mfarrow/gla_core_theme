module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'consistent-return': ['off'],
    'no-underscore-dangle': ['off'],
    'max-nested-callbacks': ['warn', 3],
    'import/no-mutable-exports': ['warn'],
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-param-reassign': ['off'],
    'no-prototype-builtins': ['off'],
    'valid-jsdoc': [
      'warn',
      {
        prefer: {
          returns: 'return',
          property: 'prop',
        },
        requireReturn: false,
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore' } },
    ],
    'no-shadow': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'none',
      },
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  globals: {
    Drupal: true,
    drupalSettings: true,
    drupalTranslations: true,
    domready: true,
    jQuery: true,
    loadjs: true,
    matchMedia: true,
    Backbone: true,
    Modernizr: true,
    Popper: true,
    Sortable: true,
    CKEDITOR: true,
    YT: true,
    Foundation: true,
    focusWithin: true,
    Swiper: true,
    stickybits: true,
    Vue: true,
    _: true,
    tippy: true,
    shave: true,
    tinycolor: true,
    SmoothScroll: true,
    AOS: true,
    Vimeo: true,
    Mark: true,
    ReadingPositionIndicator: true,
    bodyScrollLock: true,
    Alpine: true,
    basicScroll: true,
    once: true,
    Cash: true,
  },
};
