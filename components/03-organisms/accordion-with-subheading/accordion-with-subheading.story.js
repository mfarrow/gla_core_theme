// Load the dist version so hot-reloading in Storybook works.
import '../../../dist/03-organisms/accordion/accordion';

const template = require('./accordion-with-subheading.twig');
const richTextTemplate = require('../../01-atoms/rich-text/rich-text.twig');
const accordionTemplate = require('../accordion/accordion.twig');

export default {
  title: 'Organisms/Accordion (with subheading)',
  args: {
    heading: 'Coronavirus: What you need to know to stay safe',
    content: accordionTemplate({
      id: 'ac--0',
      heading_level: 4,
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
    }),
  },
  argTypes: {
    heading: {
      name: 'heading',
      type: { name: 'string', required: true },
      description: 'The heading to use',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    content: {
      name: 'content',
      description: 'Accordion markup from Drupal',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component provides a H3, so in Drupal we use a preprocess to turn the accordion H3 elements into H4 elements.',
      },
    },
  },
};

const Template = (args) => template(args);

export const Default = Template.bind({});
