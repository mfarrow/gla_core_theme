const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = (theme) => ({
  // This function is used to style the rich-text component.
  // Take a look at https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
  // to get an idea of how to customise the output.
  DEFAULT: {
    css: {
      color: theme('colors.text-grey'),
      maxWidth: '74ch',
      fontSize: null,
      lineHeight: null,
      // Remove the anchor styling as that comes from our own SCSS.
      a: null,
      'ol > li::before': {
        color: theme('colors.dark-pink'),
      },
      'ul > li::before': {
        backgroundColor: theme('colors.dark-pink'),
      },
      'code::before': {
        content: '""',
      },
      'code::after': {
        content: '""',
      },
      // We will provide our own table styles.
      table: null,
      thead: null,
      'thead th': null,
      'tbody tr': null,
      th: null,
      'tbody tr:last-child': null,
      'thead th:first-child': null,
      'thead th:last-child': null,
      'tbody td:first-child': null,
      'tbody td:last-child': null,
      'tbody td': null,
      // We will provide our own intro/lead styles.
      '[class~="lead"]': null,
      hr: {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.8'),
        borderColor: theme('colors.mercury'),
      },
    },
  },
});
