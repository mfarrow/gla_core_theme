import assemblyDecorator from '../../../storybook/assembly-decorator';

const template = require('./hero-header.twig');
const richTextTemplate = require('../../01-atoms/rich-text/rich-text.twig');
const buttonTemplate = require('../../01-atoms/button/button.twig');

export default {
  title: 'Molecules/Hero header',
  args: {
    heading: 'Mattis Vulputate Parturient Tortor Elit',
    media: `<img class="u-w-full" src="https://pbs.twimg.com/profile_images/1417081099608596481/nVO3JCd-_400x400.jpg" alt="Alt from Drupal" loading="lazy">`,
    content:
      '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
    height: 'full',
    theme: 'dark',
  },
  argTypes: {
    heading: {
      type: { name: 'string', required: true },
      description: 'The content of the heading',
      table: {
        type: { summary: 'string' },
      },
    },
    media: {
      name: 'media',
      description: 'Image or Video markup from Drupal',
    },
    content: {
      name: 'content',
      description: 'Rich text and button markup from Drupal',
    },
    height: {
      type: { name: 'select' },
      description:
        'Select list to choose the height of the image. Full or Half.',
      table: {
        type: { summary: 'select' },
      },
    },
    theme: {
      type: { name: 'select' },
      description: 'Select list to choose the gradient overlay. Dark or Light.',
      table: {
        type: { summary: 'select' },
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

export const halfHeight = Template.bind({});
halfHeight.args = {
  height: 'half',
};

export const darkTheme = Template.bind({});
darkTheme.args = {
  theme: 'dark',
};

export const WithNoRichText = Template.bind({});
WithNoRichText.args = {
  content: buttonTemplate({
    button_content: `View our about page`,
  }),
};

export const WithNoButton = Template.bind({});
WithNoButton.args = {
  content: richTextTemplate({
    content: `<p>Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.</p>`,
  }),
};

export const WithNoContent = Template.bind({});
WithNoContent.args = {
  content: null,
};

export const Assembly = Template.bind({});
Assembly.decorators = [assemblyDecorator];
