const path = require('path');
const { TwingEnvironment, TwingFunction } = require('twing');

const drupalAttribute = require('drupal-attribute');
const { TwingLoaderFilesystem } = require('twing');

const createAttribute = new TwingFunction('create_attribute', function() {
  return new drupalAttribute();
});

const attachLibrary = new TwingFunction('attach_library', function(
  libraryName,
) {
  const message = `Don't forget to import the ${libraryName} dependencies in your *.story.js file too, otherwise Storybook won't know to load them.`;
  return `<script>console.info("${message}")</script>`;
});

const rocketGetCachebuster = new TwingFunction(
  'rocket_get_cachebuster',
  function() {
    return Date.now();
  },
);

const oeAbsPath = path.resolve(__dirname, '../../components');
const loader = new TwingLoaderFilesystem([oeAbsPath]);

if (typeof loader.addPath === 'function') {
  // Add namespace ecl-twig.
  loader.addPath(
    path.resolve(__dirname, '../../components/00-base'),
    'base',
  );
  loader.addPath(
    path.resolve(__dirname, '../../components/01-atoms'),
    'atoms',
  );
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
  loader.addPath(
    path.resolve(__dirname, '../../components/05-pages'),
    'pages',
  );
}

const environment = new TwingEnvironment(loader, { autoescape: false });
environment.addFunction(createAttribute);
environment.addFunction(attachLibrary);
environment.addFunction(rocketGetCachebuster);

module.exports = environment;
