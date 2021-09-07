import '../../../dist/03-organisms/hero-header/hero-header';

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
      type: { name: 'select', required: true },
      description:
        'Select list to choose the height of the image. Full or Half.',
      table: {
        type: { summary: 'select' },
      },
    },
    theme: {
      type: { name: 'select', required: true },
      description:
        'Select list to choose the gradient overlay and text colour. Dark or Light.',
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

export const lightTheme = Template.bind({});
lightTheme.args = {
  theme: 'light',
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

export const WithNoMedia = Template.bind({});
WithNoMedia.args = {
  media: null,
};

export const withVideo = Template.bind({});
withVideo.args = {
  has_video: true,
  media:
    '<video loop="loop" muted="true" width="1920" height="700" x-ref="hero-header--video" preload="metadata" playsinline="true" class="u-object-cover u-h-full u-w-full">\n' +
    '      <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" type="video/mp4">\n' +
    '  </video>',
};

export const Assembly = Template.bind({});
Assembly.decorators = [assemblyDecorator];
