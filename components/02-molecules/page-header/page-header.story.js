import assemblyDecorator from '../../../storybook/assembly-decorator';

const template = require('./page-header.twig');

export default {
  title: 'Molecules/Page header',
  args: {
    heading: 'The Mayor of London',
    image_src:
      'https://pbs.twimg.com/profile_images/1417081099608596481/nVO3JCd-_400x400.jpg',
    image_alt: 'Alt from drupal',
  },
  argTypes: {
    heading: {
      type: { name: 'string', required: true },
      description: 'The content of the heading',
      table: {
        type: { summary: 'string' },
      },
    },
    image_src: {
      type: { name: 'string' },
      description: 'The url to the image',
      table: {
        type: { summary: 'string' },
      },
    },
    image_alt: {
      type: { name: 'string' },
      description: 'The alt description of the image',
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

export const Assembly = Template.bind({});
Assembly.decorators = [assemblyDecorator];
