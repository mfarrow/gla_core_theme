module.exports = ctx => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-custom-properties': {},
    // Swap is the safest value to use here, but if font preloading is set up
    // correctly then 'display: optional' might be even better for CLS scores.
    // @see https://web.dev/preload-optional-fonts/
    'postcss-font-display': { display: 'swap', replace: false },
    // No longer necessary as of iOS 13, but let's keep it in for a while for
    // users on older devices or who haven't/can't upgrade:
    'postcss-momentum-scrolling': ['scroll'],
    'postcss-cachebuster':
      ctx.env === 'production'
        ? {
          type: ['checksum'],
        }
        : false,
    // Convert px to rem so that a user's OS font-size settings are respected
    // but we can still stick to working with pixels.
    'postcss-pxtorem': {
      // We transform all props to minimise the number of unique values in the
      // CSS (good for gzip?) If this causes issues then we can be more specific
      // about what properties we target.
      propList: ['*', '!border*'],
      mediaQuery: false,
    },
    // Safari has issues with _r_ems in media queries, so we use a different
    // postcss plugin to convert px to ems in media queries.
    'postcss-em-media-query': {},
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
  },
});
