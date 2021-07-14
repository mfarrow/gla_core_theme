# GLA core theme

This theme is the core theme for GLA web properties and is included with the GLA
core Drupal install profile.

## Building the theme

See `scripts/build-theme.sh` for build instructions.

### Skipping the static build of Storybook

To skip building a static version of Storybook use the `skip-storybook`
argument:

```bash
npm run build-prod --skip-storybook
```

## Local development

Run `npm run watch` to:

- Build the theme
- Launch Storybook (you can close it if you're not using it)
- Watch for changes to files

When changes are made to SCSS and JS files the `watch` command will rebuild the
compiled versions. We import the compiled versions into Storybook, so once the
compiled versions have been updated, Storybook's own Webpack setup will notice
the changes and refresh Storybook.

## Creating a subtheme

@TODO
