const template = require('./page-header.twig');

export default {
  title: 'Molecules/Page header',
  args: {
    heading: 'The Mayor of London',
    image:
      '<img class="u-w-full u-h-full u-object-cover" src="https://pbs.twimg.com/profile_images/1417081099608596481/nVO3JCd-_400x400.jpg" alt="Image from drupal">',
  },
  argTypes: {
    heading: {
      type: { name: 'string', required: true },
      description: 'The content of the heading',
      table: {
        type: { summary: 'string' },
      },
    },
    image: {
      type: { name: 'string' },
      description: 'HTML markup to display an image',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
