const path = require('path');

const stories = ['../../components/**/*.story.@(js|jsx|ts|tsx|mdx)'];

const addons = [
  'storybook-addon-designs',
  '@storybook/addon-a11y',
  '@whitespace/storybook-addon-html',
  '@storybook/addon-essentials',
];

const webpackFinal = config => {
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

  return config;
};

module.exports = {
  stories,
  addons,
  webpackFinal,
  features: {
    postcss: false,
  },
};
