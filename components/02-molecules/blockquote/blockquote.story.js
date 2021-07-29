import assemblyDecorator from '../../../storybook/assembly-decorator';

import { ExampleUsingContentFromDesigns } from '../../01-atoms/rich-text/rich-text.story';

const template = require('./blockquote.twig');

export default {
  title: 'Molecules/Blockquote',
  args: {
    quote:
      'This is a quote. Hundreds of thousands paroxysm of global death quasar vanquish the impossible decipherment colonies.',
    citation: 'Sadiq Khan, Mayor of London',
    image_content: `<img src="https://pbs.twimg.com/profile_images/1417081099608596481/nVO3JCd-_400x400.jpg" alt="Alt from Drupal" loading="lazy">`,
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
      type: { name: 'string' },
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

export const NoCitation = Template.bind({});
NoCitation.args = {
  citation: null,
};

export const Assembly = Template.bind({});
Assembly.decorators = [assemblyDecorator];
const richTextTemplate = require('../../01-atoms/rich-text/rich-text.twig');

export const InContextWithRichText = () => `
  <div class="u-space-y-10">
    ${richTextTemplate({
      content: `<p><strong>The spacing between the rich text components and the blockquote is subject to change when we build the Page Section component which will be responsible for applying consistent spacing between components. For now I've picked a sensible enough looking value.</strong></p><p>Vangelis finite but <em>unbounded realm</em> of the galaxies from which we spring paroxysm of <strong>global death colonies</strong>? Stirred by starlight vastness is bearable only through love preserve and cherish that pale blue dot with pretty stories for which there's little good evidence of brilliant syntheses the ash of stellar alchemy. Made in the interiors of collapsing stars invent the universe hearts of the stars a very small stage in a vast cosmic arena extraordinary claims require extraordinary evidence citizens of distant epochs?</p>`,
    })}
    ${template({
      quote:
        'This is a quote. Hundreds of thousands paroxysm of global death quasar vanquish the impossible decipherment colonies.',
      citation: 'Sadiq Khan, Mayor of London',
      image_content: `<img src="https://www.london.gov.uk/sites/default/files/styles/gla_large_unconstrained/public/sadiq_khan_1x1_20june21.png?itok=sThvh2OW" alt="Alt from Drupal" loading="lazy">`,
    })}
    ${richTextTemplate({
      content: `<p>Concept of the number one the carbon in our apple pies intelligent beings light years corpus callosum tesseract? Network of wormholes the sky calls to us dispassionate extraterrestrial observer two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer Cambrian explosion. Descended from astronomers from which we spring.</p>`,
    })}
  </div>
`;
