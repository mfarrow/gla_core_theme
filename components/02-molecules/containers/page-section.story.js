import assemblyDecorator from '../../../storybook/assembly-decorator';

const template = require('./page-section.twig');

export default {
  title: 'Molecules/Page Section',
  args: {
    heading: 'Example section heading',
    content:
      '<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>',
  },
  argTypes: {
    heading: {
      type: { name: 'string', required: true },
      description: 'The content of the heading',
      table: {
        type: { summary: 'string' },
      },
    },
    content: {
      type: { name: 'string', required: true },
      description: 'HTML Markup of various components from drupal.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/d/main/#/console/21508157/454587112/preview',
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});

export const WithAHiddenHeading = Template.bind({});
WithAHiddenHeading.args = {
  visually_hide_title: true,
};
