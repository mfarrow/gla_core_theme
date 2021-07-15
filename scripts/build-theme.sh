# Set the correct Node and npm version:
. ~/.nvm/nvm.sh
nvm use

# We use Composer to bring in third-party libraries. This step may have already
# been run by the main `composer install` command for the project but it is
# included in this script for testing
composer install

# Install Node dependencies so we can build the theme
npm install

# Build the theme and static version of Storybook
# There is an optional argument to skip building the static version of
# Storybook: `npm run build-prod --skip-storybook`
npm run build-prod

# On non-local environments only:
# Once the theme has built itself (compiled JS, CSS, built Storybook etc)
# then there's no need to actually deploy the vendor or node_modules
# directories, and we can delete them. This way, we cut down on the amount
# of third-party code that is deployed onto the web servers.
rm -rf node_modules
rm -rf vendor
