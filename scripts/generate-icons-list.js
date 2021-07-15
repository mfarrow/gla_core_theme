/* eslint-env node */

const path = require('path');
const jsonfile = require('jsonfile');
const _ = require('lodash');
const globby = require('globby');
const filteredPaths = require('./icon-paths.js');

const iconsPath = path.join(process.cwd(), 'src/icons');
const jsonOutputPath = path.join(process.cwd(), 'tokens/icons.json');
const icons = [];

_.each(filteredPaths, value => {
  const file = path.relative(iconsPath, value);
  const dirName = path.dirname(file);
  const iconName = path.basename(file, path.extname(file));
  const iconId = `${dirName}--${iconName}`;

  icons.push({
    id: iconId,
    family: dirName,
    name: iconName,
  });
});

const jsonExport = {};
jsonExport.icons = icons;
jsonfile.writeFileSync(jsonOutputPath, jsonExport, { spaces: 2 });
