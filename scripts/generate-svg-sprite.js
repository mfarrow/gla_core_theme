/* eslint-env node */

const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const _ = require('lodash');
const filteredPaths = require('./icon-paths');

const iconsPath = path.join(process.cwd(), 'src/icons');

const spriteConfig = {
  dest: 'dist/icons',
  shape: {
    id: {
      generator: (name, file) => {
        file = path.relative(iconsPath, file.path);
        const dirName = path.dirname(file);
        const iconName = path.basename(file, path.extname(file));
        const iconId = `${dirName}--${iconName}`;
        return iconId;
      },
    },
  },
  transform: [],
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false,
  },
  mode: {
    symbol: {
      sprite: 'sprite.svg',
      dest: '',
    },
  },
};

const spriter = new SVGSpriter(spriteConfig);

_.each(filteredPaths, (value) => {
  spriter.add(value, null, fs.readFileSync(value, { encoding: 'utf-8' }));
});

// Compile the sprite
spriter.compile((error, result) => {
  // eslint-disable-next-line no-console
  if (error) return console.error(error);

  _.each(result.symbol, (resource) => {
    mkdirp.sync(path.dirname(resource.path));
    fs.writeFileSync(resource.path, resource.contents);
  });
});
