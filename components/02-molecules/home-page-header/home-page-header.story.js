import assemblyDecorator from '../../../storybook/assembly-decorator';

const template = require('./home-page-header.twig');
const buttonTemplate = require('../../01-atoms/button/button.twig');

export default {
  title: 'Molecules/Home page header',
  args: {
    heading: 'We are london<span class="u-text-primary">.</span>',
    text:
      '<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>',
    cta: buttonTemplate({
      button_content: `View our about page`,
    }),
  },
  argTypes: {
    heading: {
      type: { name: 'string', required: true },
      description: 'The content of the heading',
      table: {
        type: { summary: 'string' },
      },
    },
    text: {
      type: { name: 'string' },
      description: 'Text that describes information about the page.',
      table: {
        type: { summary: 'string' },
      },
    },
    cta: {
      name: `cta`,
      description: 'Button markup from Drupal',
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

export const WithNoText = Template.bind({});
WithNoText.args = {
  text: null,
};

export const WithNoFullStop = Template.bind({});
WithNoFullStop.args = {
  styled_fullstop: false,
  heading: 'We are london',
};

export const Assembly = Template.bind({});
Assembly.decorators = [assemblyDecorator];
