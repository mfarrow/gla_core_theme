# Normally we'd run `nvm use` here to read from the theme's nvm file but the
# web servers where the theme is built should already have a suitable version
# of Node, managed by the GLA.

# We use Composer to bring in third-party libraries. This step may have already
# been run by the main `composer install` command for the project but it is
# included in this script for testing theme builds outside of a project, e.g.
# when developing inside the theme repository rather than a project repository.
composer install

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
