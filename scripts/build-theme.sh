. ~/.nvm/nvm.sh
nvm use
npm install
composer install
npm run build-prod

# Once the theme has built itself (compiled JS, CSS, built Storybook etc)
# then there's no need to actually deploy the vendor or node_modules
# directories, and we can delete them. This way, we cut down on the amount
# of third-party code that leaves the build agents and makes it onto the web
# servers.
rm -rf node_modules
rm -rf vendor
