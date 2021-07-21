module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      // Add a banner to help prevent devs editing dist files.
      '@comandeer/babel-plugin-banner',
      {
        banner: `/*
 * Do not edit files in the 'dist' directory, edit the source version in the 
 * 'components' directory instead.
 */`,
      },
    ],
  ],
  env: {
    production: {
      presets: [
        [
          'minify',
          {
            builtIns: false,
          },
        ],
      ],
      // Remove the banner to save some file weight.
      plugins: [['@comandeer/babel-plugin-banner', false]],
    },
  },
  ignore: [(filename) => filename.match(/\.story\.js?$/)],
};
