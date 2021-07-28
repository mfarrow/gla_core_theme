#!/bin/bash

# The if statement allows us to use a Composer post-install hook to run the theme build script (GLA's preference)
# on remote environments, but to not run anything locally (it'd be silly to build the whole theme locally each time
# we used a Composer install command).
# Inside Lando DRUPAL_ENVIRONMENT will always be docker (this is already set in our Lando config file).
# The SKIP_COMPOSER_SCRIPT_THEME_BUILDING variable is one I provided in case we ever need to run Composer commands
# outside of Lando, but we still want to avoid building the theme each time.
if [ "$DRUPAL_ENVIRONMENT" != 'docker' ] && [ "$SKIP_COMPOSER_SCRIPT_THEME_BUILDING" != '1' ]; then
  echo ""
  echo "Starting to build theme…";
  echo "To avoid building the theme when Composer runs (e.g. locally) you can execute:"
  echo "export SKIP_COMPOSER_SCRIPT_THEME_BUILDING=1"
  echo "This will skip theme compilation on Composer for your current shell session."
  echo "To make the change permanent add the variable to your .bashrc file or equivalent."
  echo ""

  current_node_version=$(node -v || node --version)
  target_node_version=$(cat .nvmrc)

  echo "Current Node version on environment: ${current_node_version}"
  echo "Target Node version from theme's .nvmrc file: ${target_node_version}"
  echo ""

  if [ "$current_node_version" != "$target_node_version" ]; then
    echo "The current version of Node does not match the version in .nvmrc"
    exit 1
  fi

  # Normally we'd run `nvm use` here to read from the theme's nvm file but the
  # web servers where the theme is built should already have a suitable version
  # of Node, managed by the GLA.

  # Run Composer inside the theme, mainly to pull in frontend dependencies via
  # https://asset-packagist.org to the `libraries` directory within the theme.
  composer install

  # Install Node dependencies so we can build the theme.
  npm install --production

  # Build the theme and static version of Storybook.
  # There is an optional argument to skip building the static version of
  # Storybook: `npm run build-prod --skip-storybook`.
  npm run build-prod

  # Once the theme has built itself (compiled JS, CSS, built Storybook etc)
  # then there's no need to actually deploy the vendor or node_modules
  # directories, and we can delete them. This way, we cut down on the amount
  # of third-party code that is deployed onto the web servers which may have
  # a security benefit.
  rm -rf node_modules
  rm -rf vendor
else
    echo "Production theme build skipped due to DRUPAL_ENVIRONMENT being 'docker' or SKIP_COMPOSER_SCRIPT_THEME_BUILDING being '1'"
fi
