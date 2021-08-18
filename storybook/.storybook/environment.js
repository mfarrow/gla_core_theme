const path = require('path');
const {
  TwingEnvironment,
  TwingFunction,
  TwingLoaderFilesystem,
} = require('twing');

const DrupalAttribute = require('drupal-attribute');

const createAttribute = new TwingFunction('create_attribute', function () {
  return new DrupalAttribute();
});

const attachLibrary = new TwingFunction(
  'attach_library',
  function (libraryName) {
    const message = `Don't forget to import any non-global ${libraryName} dependencies in your *.story.js file too, otherwise Storybook won't know to load them.`;
    return `<!-- ${message} -->`;
  },
);

const rocketGetCachebuster = new TwingFunction(
  'gla_core_profile_get_cachebuster',
  function () {
    return Date.now();
  },
);

const twigPath = path.resolve(__dirname, '../../components');
const loader = new TwingLoaderFilesystem([twigPath]);

if (typeof loader.addPath === 'function') {
  loader.addPath(path.resolve(__dirname, '../../components/00-base'), 'base');
  loader.addPath(path.resolve(__dirname, '../../components/01-atoms'), 'atoms');
  loader.addPath(
    path.resolve(__dirname, '../../components/02-molecules'),
    'molecules',
  );
  loader.addPath(
    path.resolve(__dirname, '../../components/03-organisms'),
    'organisms',
  );
  loader.addPath(
    path.resolve(__dirname, '../../components/04-templates'),
    'templates',
  );
  loader.addPath(path.resolve(__dirname, '../../components/05-pages'), 'pages');
}

const environment = new TwingEnvironment(loader, { autoescape: false });
environment.addFunction(createAttribute);
environment.addFunction(attachLibrary);
environment.addFunction(rocketGetCachebuster);

// Use a different path for icons in Storybook compared to Drupal.
environment.addGlobal('icon_url', 'dist/icons/sprite.svg');

module.exports = environment;
