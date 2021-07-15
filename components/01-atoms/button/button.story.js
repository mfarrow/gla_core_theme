import drupalAttribute from 'drupal-attribute';
import dedent from 'ts-dedent';

const template = require('./button.twig');
// Import example JavaScript file to demonstrate Drupal behaviours in Storybook:
import './button';

export default {
  title: 'Atoms/Button',
  args: {
    button_content: 'Example button',
    button_url: 'https://example.com',
  },
  argTypes: {
    button_content: {
      type: { name: 'string', required: false },
      description: 'Label of the button',
      table: {
        type: { summary: 'string' },
      },
    },
    button_url: {
      type: { name: 'string' },
      description:
        'Anchor href. Without an href a `<button>` element will be output instead of an `<a>`',
      table: {
        type: { summary: 'string' },
      },
    },
    button_type: {
      type: { name: 'string' },
      description: 'Type of the button',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/3C11ABUSUADV#/screens/454587029',
    },
  },
};

const Template = (args) => template({ ...args });

export const Standard = Template.bind({});

export const White = Template.bind({});
White.args = {
  button_type: 'white',
};
White.parameters = {
  backgrounds: { default: 'Dark' },
};

export const Solid = Template.bind({});
Solid.args = {
  button_type: 'solid',
};
Solid.parameters = {
  docs: {
    description: {
      story:
        'The solid button has an underline on hover/focus, which is different to the other buttons. This can be seen in the designs.',
    },
  },
};

export const WithNoUrl = Template.bind({});
WithNoUrl.args = {
  button_url: null,
  button_content: `Click me, I'm not a link`,
  // eslint-disable-next-line new-cap
  attributes: new drupalAttribute().setAttribute(
    'onclick',
    "alert('👋 Thanks for clicking!')",
  ),
};
WithNoUrl.parameters = {
  docs: {
    description: {
      story: dedent(`
        If no \`button_url\` value is passed to the component then a HTML \`button\` element will be used instead of an \`a\` element.
        
        This is useful for when a button needs to fire a JavaScript event rather than take the user to a new page.
      `),
    },
  },
};
