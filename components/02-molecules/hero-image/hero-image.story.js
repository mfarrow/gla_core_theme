const template = require('./hero-image.twig');

export default {
  title: 'Molecules/Hero image',
  args: {
    image:
      '<picture><img src="https://pbs.twimg.com/profile_images/1417081099608596481/nVO3JCd-_400x400.jpg" alt="Image from drupal"></picture>',
  },
  argTypes: {
    image: {
      type: { name: 'string' },
      description: 'HTML markup to display an image',
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
