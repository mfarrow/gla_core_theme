const path = require('path');

const stories = [
  '../../components/**/*.story.@(js|jsx|ts|tsx|mdx)',
  '../../tokens/*.story.@(js|jsx|ts|tsx|mdx)',
];

const addons = [
  '@storybook/addon-essentials',
  '@whitespace/storybook-addon-html',
  '@storybook/addon-a11y',
  'storybook-addon-designs',
];

const webpackFinal = (config) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(`${__dirname}/environment.js`),
    },
  });
  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === 'ProgressPlugin') {
      config.plugins.splice(i, 1);
    }
  });

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        '@dist': path.resolve(__dirname, '../../dist'),
        '@src': path.resolve(__dirname, '../../src'),
      },
    },
  };
};

module.exports = {
  stories,
  addons,
  webpackFinal,
  features: {
    postcss: false,
  },
};
