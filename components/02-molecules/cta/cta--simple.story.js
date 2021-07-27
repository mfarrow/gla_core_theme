const template = require('./cta--simple.twig');

export default {
  title: 'Molecules/CTA (simple)',
  args: {
    content: 'Register your interest today for more details and next steps',
    button_content: 'Register your interest',
    button_url: 'https://example.com',
    heading_element: null,
  },
  argTypes: {
    button_content: {
      type: { name: 'string', required: true },
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
    content: {
      type: { name: 'string', required: true },
      description: 'The main text to show in the call to action',
      table: {
        type: { summary: 'string' },
      },
    },
    heading_element: {
      type: { name: 'string', required: false },
      description: 'The HTML element to use for the heading. H3 by default.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/621138JQ5SHY#/screens/452846999',
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
