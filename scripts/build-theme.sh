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
  exit;
fi

if [ "$DRUPAL_ENVIRONMENT" != 'docker' ] && [ "$SKIP_COMPOSER_SCRIPT_THEME_BUILDING" != '1' ]; then
  # Normally we'd run `nvm use` here to read from the theme's nvm file but the
  # web servers where the theme is built should already have a suitable version
  # of Node, managed by the GLA.

  # Install Node dependencies so we can build the theme
  npm install

  # Build the theme and static version of Storybook
  # There is an optional argument to skip building the static version of
  # Storybook: `npm run build-prod --skip-storybook`
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
