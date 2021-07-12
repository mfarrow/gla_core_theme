const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config.js');
const _ = require('lodash');

// Grab just the theme data from the Tailwind config.
const { theme } = resolveConfig(tailwindConfig);

// Create an empty object to hold our transformed tokens data.
const tokens = {};

// A helper function that uses Lodash's setWidth method to
// insert things into an object at the right point in the
// structure, and to create the right structure for us
// if it doesn't already exist.
const addToTokensObject = function (position, value) {
  _.setWith(tokens, position, { value: value }, Object);
};

// Loop over the theme data…
_.forEach(theme, function (value, key) {
  switch (key) {
    case 'fontFamily':
      // Font family data is in an array, so we use join to
      // turn the font families into a single string.
      _.forEach(theme['fontFamily'], function (value, key) {
        addToTokensObject(
          ['fontFamily', key],
          theme['fontFamily'][key].join(',')
        );
      });
      break;

    case 'fontSize':
      // Font size data contains both the font size (makes
      // sense!) but also a recommended line-length, so we
      // create two tokens for every font size, one for the
      // font-size value and one for the line-height.
      _.forEach(theme['fontSize'], function (value, key) {
        addToTokensObject(['fontSize', key], value[0]);
        addToTokensObject(
          ['fontSize', `${key}--lineHeight`],
          value[1]['lineHeight']
        );
      });
      break;

    default:
      _.forEach(value, function (value, secondLevelKey) {
        if (!_.isObject(value)) {
          // For non-objects (simple key/value pairs) we can
          // add them straight into our tokens object.
          addToTokensObject([key, secondLevelKey], value);
        } else {
          // For objects (like color shades) we need to do a
          // final forOwn loop to make sure we add everything
          // in the right format.
          _.forEach(value, function (value, thirdLevelKey) {
            addToTokensObject([key, secondLevelKey, thirdLevelKey], value);
          });
        }
      });
      break;
  }
});

const tokenPrefix = 't-';

const limitedFilter = (token) =>
  ['colors', 'spacing', 'fontFamily'].includes(token.attributes.category);

const fullFilter = (token) =>
  [
    'screens',
    'colors',
    'spacing',
    'opacity',
    'borderRadius',
    'borderWidth',
    'boxShadow',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'maxWidth',
    'zIndex',
    'scale',
    'transitionProperty',
    'transitionTimingFunction',
    'transitionDuration',
    'transitionDelay',
    'animation',
  ].includes(token.attributes.category);

const StyleDictionary = require('style-dictionary').extend({
  tokens,
  platforms: {
    scss: {
      transformGroup: 'scss',
      prefix: tokenPrefix,
      buildPath: './tokens/',
      files: [
        {
          format: 'scss/variables',
          destination: 'tokens.scss',
          filter: fullFilter,
        },
      ],
    },
    css: {
      transformGroup: 'css',
      prefix: tokenPrefix,
      buildPath: './tokens/',
      files: [
        {
          format: 'css/variables',
          destination: 'tokens.css',
          filter: limitedFilter,
        },
      ],
    },
    js: {
      transformGroup: 'js',
      prefix: tokenPrefix,
      buildPath: './tokens/',
      files: [
        {
          format: 'javascript/module',
          destination: 'tokens.js',
          filter: fullFilter,
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
