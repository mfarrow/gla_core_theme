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
  theme: create({
    base: 'light',
    brandTitle: `Rutherford`,
    brandUrl:
      'https://stash.ctidigital.com/projects/D/repos/cti-drupal-project',
    brandImage: undefined,
  }),
  selectedPanel: 'controls',
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
  },
});

// registerAddonCode({
//   tabs: [
//     { label: 'Twig', lang: 'html.twig' },
//     { label: 'Data', lang: 'js' },
//   ],
// });
