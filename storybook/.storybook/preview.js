import { addParameters, addDecorator } from '@storybook/html';
const drupalAttribute = require('drupal-attribute');
import { create } from '@storybook/theming';
const colors = require('../../tokens/tokens-module').colors;

// Include global CSS.
import '../../dist/global.css';
import '../../dist/utilities.css';

// Include global JS.
import '../../libraries/what-input/dist/what-input.min';
import '../../libraries/wicg-inert/dist/inert.min.js';

// If the theme is being used in the context of a Drupal site then we can load
// the Drupal object to allow us to run behaviours etc.
// import '../../../../../core/misc/drupal';

const theme = create({
  base: 'light',
  colorPrimary: colors.pink.value,
  colorSecondary: colors['dark-pink'].value,
});

addParameters({
  viewMode: 'docs',
  a11y: {
    element: '#root',
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
    manual: false,
  },
  controls: { expanded: true },
  layout: 'fullscreen',
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'White',
        value: colors.white.value,
      },
      {
        name: 'Dark',
        value: colors['dark-grey'].value,
      },
    ],
    grid: {
      cellSize: 8,
      opacity: 0.5,
      cellAmount: 1,
      offsetX: 16,
      offsetY: 16,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Tokens',
        'Atoms',
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
      ],
      locales: 'en-GB',
    },
  }
});

export const globalTypes = {
  greyscale: {
    name: 'Greyscale mode',
    description: 'Switches components to use muted greyscale colours',
    defaultValue: false,
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 0, title: 'Greyscale off' },
        { value: 1, title: 'Greyscale on' },
      ],
      showName: false,
    },
  },
};

const greyscaleDecorator = (story, context) => {
  const attribute = new drupalAttribute();
  if (context.globals.greyscale) {
    attribute.addClass('u-filter u-grayscale');
  }

  return context.globals.greyscale ? `<div data-storybook-greyscale-wrapper-not-part-of-component ${attribute}>${story}</div>`: story ;
};

addDecorator((story, context) => {
  return greyscaleDecorator(story(), context);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'padded',
  docs: {
    theme
  },
};
