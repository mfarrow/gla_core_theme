// Load the dist version so hot-reloading in Storybook works.
import '../../../dist/03-organisms/accordion/accordion';

const template = require('./accordion.twig');
const richTextTemplate = require('../../01-atoms/rich-text/rich-text.twig');

export default {
  title: 'Organisms/Accordion',
  args: {
    id: 'ac--0',
    items: [
      {
        heading: 'What is Coronavirus?',
        content: richTextTemplate({
          content: `<p>Integer luctus congue eros in faucibus. Cras efficitur scelerisque ex. Etiam odio enim, tempus sit amet pharetra vel, facilisis a nunc. Vestibulum cursus nunc tristique libero vehicula facilisis. Nulla nec ante libero. Proin nisi est, feugiat a mauris eget, molestie gravida purus. Donec vitae aliquam tortor. Duis eu dignissim justo, in tempor ligula. Curabitur ex ipsum, commodo et tempus quis, aliquet non elit.</p><p>Vivamus condimentum iaculis nisl, non pharetra arcu aliquam ut. Proin tellus justo, molestie a ullamcorper vel, tempor sit amet ante. Ut volutpat ante mattis, efficitur dolor quis, consequat nisl. Nunc quis vulputate lectus. Ut auctor placerat quam ut bibendum. Nunc augue elit, convallis in efficitur a, condimentum vel sem. Vivamus varius porta mi vel gravida. Praesent dapibus risus in est finibus, venenatis ultricies lectus bibendum.</p>
<p>Integer luctus congue eros in faucibus. Cras efficitur scelerisque ex. Etiam odio enim, tempus sit amet pharetra vel, facilisis a nunc. Vestibulum cursus nunc tristique libero vehicula facilisis. Nulla nec ante libero. Proin nisi est, feugiat a mauris eget, molestie gravida purus. Donec vitae aliquam tortor. Duis eu dignissim justo, in tempor ligula. Curabitur ex ipsum, commodo et tempus quis, aliquet non elit.</p><p>Vivamus condimentum iaculis nisl, non pharetra arcu aliquam ut. Proin tellus justo, molestie a ullamcorper vel, tempor sit amet ante. Ut volutpat ante mattis, efficitur dolor quis, consequat nisl. Nunc quis vulputate lectus. Ut auctor placerat quam ut bibendum. Nunc augue elit, convallis in efficitur a, condimentum vel sem. Vivamus varius porta mi vel gravida. Praesent dapibus risus in est finibus, venenatis ultricies lectus bibendum.</p>
<p>Integer luctus congue eros in faucibus. Cras efficitur scelerisque ex. Etiam odio enim, tempus sit amet pharetra vel, facilisis a nunc. Vestibulum cursus nunc tristique libero vehicula facilisis. Nulla nec ante libero. Proin nisi est, feugiat a mauris eget, molestie gravida purus. Donec vitae aliquam tortor. Duis eu dignissim justo, in tempor ligula. Curabitur ex ipsum, commodo et tempus quis, aliquet non elit.</p><p>Vivamus condimentum iaculis nisl, non pharetra arcu aliquam ut. Proin tellus justo, molestie a ullamcorper vel, tempor sit amet ante. Ut volutpat ante mattis, efficitur dolor quis, consequat nisl. Nunc quis vulputate lectus. Ut auctor placerat quam ut bibendum. Nunc augue elit, convallis in efficitur a, condimentum vel sem. Vivamus varius porta mi vel gravida. Praesent dapibus risus in est finibus, venenatis ultricies lectus bibendum.</p>`,
        }),
      },
      {
        heading: 'Who needs to wear a face covering?',
        content: richTextTemplate({
          content: `<p>Integer luctus congue eros in faucibus. Cras efficitur scelerisque ex. Etiam odio enim, tempus sit amet pharetra vel, facilisis a nunc. Vestibulum cursus nunc tristique libero vehicula facilisis. Nulla nec ante libero. Proin nisi est, feugiat a mauris eget, molestie gravida purus. Donec vitae aliquam tortor. Duis eu dignissim justo, in tempor ligula. Curabitur ex ipsum, commodo et tempus quis, aliquet non elit.</p><p>Vivamus condimentum iaculis nisl, non pharetra arcu aliquam ut. Proin tellus justo, molestie a ullamcorper vel, tempor sit amet ante. Ut volutpat ante mattis, efficitur dolor quis, consequat nisl. Nunc quis vulputate lectus. Ut auctor placerat quam ut bibendum. Nunc augue elit, convallis in efficitur a, condimentum vel sem. Vivamus varius porta mi vel gravida. Praesent dapibus risus in est finibus, venenatis ultricies lectus bibendum.</p>`,
        }),
      },
      {
        heading: 'Is wearing a face covering mandatory?',
        content: richTextTemplate({
          content: `<p>Integer luctus congue eros in faucibus. Cras efficitur scelerisque ex. Etiam odio enim, tempus sit amet pharetra vel, facilisis a nunc. Vestibulum cursus nunc tristique libero vehicula facilisis. Nulla nec ante libero. Proin nisi est, feugiat a mauris eget, molestie gravida purus. Donec vitae aliquam tortor. Duis eu dignissim justo, in tempor ligula. Curabitur ex ipsum, commodo et tempus quis, aliquet non elit.</p><p>Vivamus condimentum iaculis nisl, non pharetra arcu aliquam ut. Proin tellus justo, molestie a ullamcorper vel, tempor sit amet ante. Ut volutpat ante mattis, efficitur dolor quis, consequat nisl. Nunc quis vulputate lectus. Ut auctor placerat quam ut bibendum. Nunc augue elit, convallis in efficitur a, condimentum vel sem. Vivamus varius porta mi vel gravida. Praesent dapibus risus in est finibus, venenatis ultricies lectus bibendum.</p>`,
        }),
      },
      {
        heading: 'Can I use public transport?',
        content: richTextTemplate({
          content: `<p>Integer luctus congue eros in faucibus. Cras efficitur scelerisque ex. Etiam odio enim, tempus sit amet pharetra vel, facilisis a nunc. Vestibulum cursus nunc tristique libero vehicula facilisis. Nulla nec ante libero. Proin nisi est, feugiat a mauris eget, molestie gravida purus. Donec vitae aliquam tortor. Duis eu dignissim justo, in tempor ligula. Curabitur ex ipsum, commodo et tempus quis, aliquet non elit.</p><p>Vivamus condimentum iaculis nisl, non pharetra arcu aliquam ut. Proin tellus justo, molestie a ullamcorper vel, tempor sit amet ante. Ut volutpat ante mattis, efficitur dolor quis, consequat nisl. Nunc quis vulputate lectus. Ut auctor placerat quam ut bibendum. Nunc augue elit, convallis in efficitur a, condimentum vel sem. Vivamus varius porta mi vel gravida. Praesent dapibus risus in est finibus, venenatis ultricies lectus bibendum.</p>`,
        }),
      },
      {
        heading: 'What is NHS Test and Trace and how does it work?',
        content: richTextTemplate({
          content: `<p>Integer luctus congue eros in faucibus. Cras efficitur scelerisque ex. Etiam odio enim, tempus sit amet pharetra vel, facilisis a nunc. Vestibulum cursus nunc tristique libero vehicula facilisis. Nulla nec ante libero. Proin nisi est, feugiat a mauris eget, molestie gravida purus. Donec vitae aliquam tortor. Duis eu dignissim justo, in tempor ligula. Curabitur ex ipsum, commodo et tempus quis, aliquet non elit.</p><p>Vivamus condimentum iaculis nisl, non pharetra arcu aliquam ut. Proin tellus justo, molestie a ullamcorper vel, tempor sit amet ante. Ut volutpat ante mattis, efficitur dolor quis, consequat nisl. Nunc quis vulputate lectus. Ut auctor placerat quam ut bibendum. Nunc augue elit, convallis in efficitur a, condimentum vel sem. Vivamus varius porta mi vel gravida. Praesent dapibus risus in est finibus, venenatis ultricies lectus bibendum.</p>`,
        }),
      },
    ],
  },
  argTypes: {
    id: {
      name: 'id',
      type: { name: 'string', required: true },
      description:
        'An ID, e.g. `ac--123` where `123` is the `paragraph.id()` value of the Accordion Paragraph in Drupal',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    items: {
      name: 'items',
      type: { name: 'string', required: true },
      description: 'Field data from Drupal',
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        // Note the link below doesn't work, Storybook gives it target="_top" but it still opens in the preview
        // iframe?
        component:
          'This component is based on [this pattern from Aditus](https://www.aditus.io/patterns/accordion/) and the [GDS accordion pattern](https://design-system.service.gov.uk/components/accordion).',
      },
    },
  },
};

const Template = (args) => template(args);

export const Default = Template.bind({});

export const DifferentHeadingLevel = Template.bind({});
DifferentHeadingLevel.args = {
  heading_level: '4',
};
