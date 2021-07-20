import { addParameters, addDecorator } from '@storybook/html';
const drupalAttribute = require('drupal-attribute');
import { create } from '@storybook/theming';
const colors = require('../../tokens/tokens-module').colors;
const screens = require('../../tokens/tokens-module').screens;

// Include global CSS.
import '../../dist/global.css';
import '../../dist/utilities.css';

// Include global JS.
import '../../libraries/what-input/dist/what-input.min';
import '../../libraries/wicg-inert/dist/inert.min.js';

// Rough-and-ready approach to using Drupal behaviours in Storybook iframes.
import '../drupal';
document.addEventListener('DOMContentLoaded', (event) => {
  Drupal.attachBehaviors(document);
});

// Use viewports from the design tokens to keep things DRY.
const viewports = Object.keys(screens).reduce(function (
  accumulator,
  currentValue,
) {
  // Filter out non-string values.
  if (screens[currentValue].value.includes('px')) {
    accumulator[currentValue] = {
      name: currentValue,
      styles: {
        width: screens[currentValue].value,
        height: '100%',
      },
    };
  }
  return accumulator;
},
{});

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
  },
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  viewport: {
    viewports: viewports,
  },
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

  return context.globals.greyscale
    ? `<div data-storybook-greyscale-wrapper-not-part-of-component ${attribute}>${story}</div>`
    : story;
};

addDecorator((story, context) => {
  return greyscaleDecorator(story(), context);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'padded',
  docs: {
    theme,
  },
};
