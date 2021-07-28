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

Using [nvm](https://github.com/nvm-sh/nvm), set your local version of Node and
then install the theme's dependencies.

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

## Linting

ESLint, Stylelint, and Prettier are used to format code consistently. These
tools use configuration based on Drupal Core's Stylelint and ESLint rules.

- `npm run lint` will report on any issues it finds and will fix the issues that
  are automatically fixable.
- `npm run format` will format files automatically.

After running either command, you will need to add changed files to Git and
commit them. To update your previous commit with the changed files, you can
`git add` the changed files then run `git commit --amend` to amend your previous
commit.

### Linting on commit

GrumPHP is used to run ESLint and Stylelint via Git hooks. To avoid irritation
when trying to commit, it's best to configure your IDE to show you ESLint and
Stylelint warnings as you work.

In PHPStorm, the ESLint plugin can be set to automatically fix files on save.
There is also a [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
plugin that can automatically format files on save. For Stylelint, you could
create a File Watcher and use a Scope to limit it to certain directories.

A more manual workflow would be to run `npm run format && npm run lint` then
`git add` the changed files before you commit.

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
