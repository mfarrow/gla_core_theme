import dedent from 'ts-dedent';
import drupalAttribute from 'drupal-attribute';

const template = require('./icon.twig');

export default {
  title: 'Atoms/Icon',
  args: {
    icon_name: 'gla--forward',
  },
  argTypes: {
    icon_name: {
      type: { name: 'string', required: true },
      description: 'Icon name, e.g. `gla--forward`',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        // Note the link below doesn't work, Storybook gives it target="_top" but it still opens in the preview
        // iframe?
        component: 'To see the available icons, check the [Icon tokens page](?path=/docs/atoms-icon--icon).'
      }
    }
  }
};

const Template = (args) =>
  template({
    ...args,
    icon_url: 'dist/icons/sprite.svg',
  });

export const Icon = Template.bind({});

export const WithStyling = Template.bind({});
WithStyling.args = {
  // eslint-disable-next-line new-cap
  attributes: new drupalAttribute().addClass([
    'u-text-green',
    'hover:u-text-black',
    'u-transition-colors u-duration-300',
    'u-text-xxl',
  ]),
};
WithStyling.parameters = {
  docs: {
    description: {
      story: dedent(`
        As long as the SVG sources use \`currentColor\` as a \`fill\` or \`stroke\` value then icons can be recoloured 
        by using a text colour utility class like \`u-text-primary\` on the component. The icon component has a width 
        and height of \`1em\` so it can be increased or decreased in size using text size utility classes.
      `),
    },
  },
};

export const WithInheritedStyling = Template.bind({});
WithInheritedStyling.decorators = [
  (story) => {
    return `<div class="u-inline-flex u-items-center u-gap-2 u-text-white u-p-4 u-bg-black u-text-sm"><p>Any text or icon in this element is small and white</p>${story()}</div>`;
  },
];
WithInheritedStyling.parameters = {
  docs: {
    description: {
      story: dedent(`
        As long as the SVG sources use \`currentColor\` as a \`fill\` or \`stroke\` value then icons will inherit a text colour and font size from their parents. To override this, use a utility class to set a colour or size directly on the component.
      `),
    },
  },
};
