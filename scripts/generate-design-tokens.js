const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config.js');
const _ = require('lodash');
const { fileHeader } = require('style-dictionary/lib/common/formatHelpers');

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
          theme['fontFamily'][key].join(','),
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
          value[1]['lineHeight'],
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
const buildPath = './tokens/';

const limitedFilter = (token) =>
  ['colors', 'screens', 'spacing', 'fontFamily'].includes(
    token.attributes.category,
  );

const javascriptObjectFilter = (token) =>
  ['colors', 'screens'].includes(token.attributes.category);

const fullFilter = (token) =>
  [
    'animation',
    'borderRadius',
    'borderWidth',
    'boxShadow',
    'colors',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'maxWidth',
    'opacity',
    'borderRadius',
    'scale',
    'screens',
    'spacing',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'zIndex',
  ].includes(token.attributes.category);

const StyleDictionary = require('style-dictionary')
  .registerFormat({
    name: 'javascript/minimalObject',
    formatter: function (dictionary, file) {
      const { allProperties } = dictionary;
      const props = {};

      allProperties.map((prop) => {
        _.setWith(props, [prop.path[0], prop.path[1]], prop.value, Object);
      });

      return (
        fileHeader({ file }) +
        'var ' +
        (file.name || '_styleDictionary') +
        ' = ' +
        JSON.stringify(props, null, 2) +
        ';'
      );
    },
  })
  .extend({
    tokens,
    platforms: {
      scss: {
        transformGroup: 'scss',
        prefix: tokenPrefix,
        buildPath,
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
        buildPath,
        files: [
          {
            format: 'css/variables',
            destination: 'tokens.css',
            filter: limitedFilter,
          },
        ],
      },
      jsModule: {
        transformGroup: 'js',
        prefix: tokenPrefix,
        buildPath,
        files: [
          {
            format: 'javascript/module',
            destination: 'tokens-module.js',
            filter: fullFilter,
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      jsObject: {
        transformGroup: 'js',
        prefix: tokenPrefix,
        buildPath,
        name: '_designTokens',
        files: [
          {
            format: 'javascript/minimalObject',
            destination: 'tokens-object.js',
            filter: javascriptObjectFilter,
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  });

StyleDictionary.buildAllPlatforms();
