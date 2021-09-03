import dedent from 'ts-dedent';
import containerDecorator from '../../../storybook/container-decorator';

const template = require('./cta--image.twig');

export default {
  title: 'Molecules/CTAs, Image (call to actions)',
  args: {
    heading_level: null,
    id: 1,
    cta_type: 'image',
    heading: 'Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nibh non magna scelerisque, eu interdum mauris feugiat. Curabitur malesuada, lorem aliquet lobortis pretium, sapien odio pellentesque purus, vitae eleifend nibh ipsum eu nunc.',
    button_content: 'Button title goes here',
    button_url: 'https://example.com',
    image_content: `
      <!-- keep the widths and heights in sync with the Drupal responsive image style for the CTA component -->
      <picture>
        <source srcset="https://images.unsplash.com/photo-1603621165604-477d10bdd174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=600&q=60" media="(min-width: 1920px)" width="720" height="600">
        <source srcset="https://images.unsplash.com/photo-1603621165604-477d10bdd174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=570&h=500&q=60" media="(min-width: 1200px)" width="570" height="500">
        <source srcset="https://images.unsplash.com/photo-1603621165604-477d10bdd174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&h=450&q=60" media="(min-width: 992px)" width="480" height="450">
        <source srcset="https://images.unsplash.com/photo-1603621165604-477d10bdd174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&h=466&q=60" media="(min-width: 769px)" width="959" height="466">
        <source srcset="https://images.unsplash.com/photo-1603621165604-477d10bdd174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=721&h=468&q=60" media="(min-width: 576px)" width="721" height="468">
        <img class="u-object-cover u-h-full" src="https://images.unsplash.com/photo-1603621165604-477d10bdd174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=575&h=450&q=60" alt="A man skateboards at the London South Bank" width="575" height="450" loading="lazy" />
      </picture>
    `,
  },
  argTypes: {
    image_content: {
      type: { name: 'string', required: true },
      description:
        'Image/picture element markup generated by Drupal and passed to the component as a string',
      table: {
        type: { summary: 'string' },
      },
    },
    button_content: {
      type: { name: 'string', required: true },
      description: 'Label of the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    button_url: {
      type: { name: 'string', required: true },
      description: 'Anchor href.',
      table: {
        type: { summary: 'string' },
      },
    },
    heading: {
      type: { name: 'string', required: true },
      description: 'The main text to show in the call to action',
      table: {
        type: { summary: 'string' },
      },
    },
    heading_level: {
      type: { name: 'number', required: false },
      description: 'The heading level to use. 3 by default.',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      type: { name: 'number', required: true },
      description:
        'A unique ID, e.g. the Drupal Paragraph entity ID, used to generate unique HTML ID and ARIA attribute values',
      table: {
        type: { summary: 'number' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/621138JQ5SHY#/screens/452847156',
    },
    docs: {
      description: {
        component: dedent(`
          The Images CTA uses its own template as its markup is substantially different to the Simple and Talk London CTA component.
       `),
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
Default.decorators = [containerDecorator];

export const ReverseLayout = Template.bind({});
ReverseLayout.args = {
  reverse_layout: true,
};
ReverseLayout.decorators = [containerDecorator];