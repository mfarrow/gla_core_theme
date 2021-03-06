import assemblyDecorator from '../../../storybook/assembly-decorator';

const template = require('./home-page-header.twig');

export default {
  title: 'Molecules/Home page header',
  args: {
    heading: 'We are london<span class="u-text-primary">.</span>',
    text:
      '<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>',
    cta_text: 'View our about page',
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
    cta_text: {
      type: { name: 'string', required: true },
      description: 'CTA text that comes from drupal.',
      table: {
        type: { summary: 'string' },
      },
    },
    cta_url: {
      type: { name: 'string', required: true },
      description: 'CTA url that comes from drupal.',
      table: {
        type: { summary: 'string' },
      },
    },
    cta_type: {
      type: { name: 'string', required: true },
      description:
        'CTA type that determines the type of button. Solid or Outline.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/X611422B95Q8#/screens/453047026',
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
