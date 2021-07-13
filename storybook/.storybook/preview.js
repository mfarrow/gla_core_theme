import { addParameters, addDecorator } from '@storybook/html';
const drupalAttribute = require('drupal-attribute');
import { create } from '@storybook/theming';
const colors = require('../../tokens/tokens-module').colors;

import '../../dist/global.css';
import '../../dist/utilities.css';
// import '../../../../../core/misc/drupal';

const theme = create({
  base: 'light',
  colorPrimary: colors.pink.value,
  colorSecondary: colors['dark-pink'].value,
});

addParameters({
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
    grid: {
      cellSize: 8,
      opacity: 0.5,
      cellAmount: 1,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
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
    attribute.setAttribute('style', 'filter: grayscale(1)');
    attribute.addClass('greyscale');
  }

  return `<div ${attribute}>${story}</div>`;
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
