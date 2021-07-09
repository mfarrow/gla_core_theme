module.exports = ctx => ({
  plugins: {
    autoprefixer: {},
    'postcss-custom-properties': {},
    cssnano:
      ctx.env === 'production'
        ? {
            preset: [
              'default',
              {
                zindex: false,
                svgo: false,
                // We can re-enable calc optimisations when https://github.com/postcss/postcss-calc/issues/115
                // is resolved.
                calc: false,
                mergeRules: false,
                normalizeUrl: {
                  stripWWW: false,
                },
              },
            ],
          }
        : false,
    'postcss-font-display': { display: 'swap', replace: false },
    'postcss-momentum-scrolling': ['scroll'],
    'postcss-cachebuster': {
      additionalProps: ['mask-image', '-webkit-mask-image'],
    },
  },
});
