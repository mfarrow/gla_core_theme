# GLA core theme

This theme is the core theme for GLA web properties and is included with the GLA
core Drupal install profile.

## Building the theme

```bash
# Set the correct Node and npm version:
nvm use
# We use Composer to bring in third-party libraries
composer install
# Install Node dependencies so we can build the theme
npm install
# Build the theme
npm run build-prod
```

### Skipping the static build of Storybook

To skip building a static version of Storybook use the `skip-storybook`
argument:

```bash
npm run build-prod --skip-storybook
```

## Local development

Run `npm run storybook:start` to launch Storybook.

## Creating a subtheme

@TODO
