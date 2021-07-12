import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
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

