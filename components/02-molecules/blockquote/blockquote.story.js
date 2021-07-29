import assemblyDecorator from '../../../storybook/assembly-decorator';

const template = require('./blockquote.twig');

export default {
  title: 'Molecules/Blockquote',
  args: {
    quote:
      'This is a quote. Hundreds of thousands paroxysm of global death quasar vanquish the impossible decipherment colonies.',
    citation: 'Sadiq Khan, Mayor of London',
    image_content: `<img src="https://www.london.gov.uk/sites/default/files/styles/gla_large_unconstrained/public/sadiq_khan_1x1_20june21.png?itok=sThvh2OW" alt="Alt from Drupal" loading="lazy">`,
  },
  argTypes: {
    quote: {
      type: { name: 'string', required: true },
      description: 'The content of the quote',
      table: {
        type: { summary: 'string' },
      },
    },
    citation: {
      type: { name: 'string', required: true },
      description:
        'Who to attribute the quote to. The string will be split at a comma and the first half including the comma made bold.',
      table: {
        type: { summary: 'string' },
      },
    },
    image_content: {
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

export const AttributionNoComma = Template.bind({});
AttributionNoComma.args = {
  citation: 'Joe Blogs',
};

export const AttributionMultipleCommas = Template.bind({});
AttributionMultipleCommas.args = {
  citation: 'Joe Blogs, commonly cited person, true identity unknown',
};

export const NoImage = Template.bind({});
NoImage.args = {
  image_content: null,
};

export const Assembly = Template.bind({});
Assembly.decorators = [assemblyDecorator];
