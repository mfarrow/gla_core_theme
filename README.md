[![Drupal Code Quality](https://github.com/GreaterLondonAuthority/accelerator-core-theme/actions/workflows/drupal-code-quality.yml/badge.svg)](https://github.com/GreaterLondonAuthority/accelerator-core-theme/actions/workflows/drupal-code-quality.yml)

# GLA core theme

This theme is the core theme for GLA web properties and is included with the GLA
core Drupal install profile.

## Building the theme for production

See `scripts/build-theme.sh` for build instructions.

### Skipping the static build of Storybook

To skip building a static version of Storybook use the `skip-storybook`
argument:

```bash
npm run build-prod --skip-storybook
```

## Local development

Using [nvm](https://github.com/nvm-sh/nvm), set your local version of Node and then install the theme's dependencies.

```bash
nvm use
npm install
composer install
```

Run `npm run build` to build a copy of the theme suitable for local development.

Run `npm run watch` to:

- Build the theme
- Launch Storybook (you can close it if you're not using it)
- Watch for changes to files

When changes are made to SCSS and JS files the `watch` command will rebuild the
compiled versions. We import the compiled versions into Storybook, so once the
compiled versions have been updated, Storybook's own Webpack setup will notice
the changes and refresh Storybook.

## Creating a subtheme

1. A basic script (`scripts/create-subtheme.sh`) is included to copy the theme
   into a new directory to make site-specific versions of it.

2. Manually replace any references to `gla_core_theme` with the name of your new
   theme

3. Update your project's `composer.json` file to instead `cd` into the directory
   of your new theme instead of `web/themes/estate/gla_core_theme`:

```json
"build-drupal-theme": [
    "Composer\\Config::disableProcessTimeout",
    "(cd web/themes/estate/gla_core_theme && bash scripts/build-theme.sh)"
]
```
