import containerDecorator from '../../../storybook/container-decorator';

const template = require('./media-item.twig');

export default {
  title: 'Molecules/Media item',
  args: {
    full_width: false,
    media: `<div class="u-aspect-w-16 u-aspect-h-9 u-bg-grey u-text-white">
      <div class="u-flex u-items-center u-justify-center">
        Media placeholder
      </div>
    </div>`,
    caption:
      '<p>No matter what comes next, we will face it – <a href="https://www.youtube.com/hashtag/londontogether">#LondonTogether</a></p>',
    caption_as_plain_text_string:
      'No matter what comes next, we will face it – #LondonTogether',
  },
  argTypes: {
    media: {
      name: 'media',
      type: { name: 'string', required: true },
      description: 'Rendered field data from Drupal',
    },
    caption: {
      name: 'caption',
      type: { name: 'string', required: true },
      description: 'Caption HTML from Drupal',
    },
    caption_as_plain_text_string: {
      name: 'caption',
      type: { name: 'string', required: true },
      description: 'Caption as plain text and rendered to a string from Drupal',
    },
    full_width: {
      type: { name: 'boolean', required: false },
      description: "Set to true to remove the component's max-width",
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/d/main/#/console/21436255/452846964/comments',
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
Default.decorators = [containerDecorator];

export const NoCaption = Template.bind({});
NoCaption.decorators = [containerDecorator];
NoCaption.args = {
  caption: null,
};

export const FullWidth = Template.bind({});
FullWidth.decorators = [containerDecorator];
FullWidth.args = {
  full_width: true,
};
FullWidth.parameters = {
  docs: {
    description: {
      story:
        'The component has its max-width limited to match the max-width of a Rich text component by default, but has a `full_width` option to remove the max-width class.',
    },
  },
};
