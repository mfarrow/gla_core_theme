/* eslint-env node */

const path = require('path');
const globby = require('globby');

const iconsPath = path.join(process.cwd(), 'src/icons');

const iconsToInclude = [
  'gla/*.svg',
  'social/*.svg'
];

const iconsToExclude = [];

module.exports = globby.sync([
  ...iconsToInclude.map(icon => path.join(iconsPath, icon)),
  ...iconsToExclude.map(icon => `!${path.join(iconsPath, icon)}`),
]);
