import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
const colors = require('../../tokens/tokens-module').colors;

const theme = create({
  base: 'light',
  colorPrimary: colors.pink.value,
  colorSecondary: colors['pink-dark'].value,
});

addons.setConfig({
  theme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: 'controls',
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
  },
});
