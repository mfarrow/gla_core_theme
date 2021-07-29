import dedent from 'ts-dedent';

import assemblyDecorator from '../../../storybook/assembly-decorator';

const template = require('./cta.twig');

export default {
  title: 'Molecules/CTAs (call to actions)',
  args: {
    heading: 'Find out more about how to book NYE firework tickets',
    button_content: 'Sign up for updates',
    button_url: 'https://example.com',
    heading_level: null,
    cta_type: 'simple',
    id: 1,
  },
  argTypes: {
    cta_type: {
      type: { name: 'string' },
      description:
        'Sets the CTA type. Image CTAs are handled separately as their markup is less similar to a simple or Talk London CTA.',
      table: {
        type: { summary: 'string' },
      },
      options: ['simple', 'talk_london'],
      control: {
        type: 'radio',
        labels: {
          simple: 'Simple',
          talk_london: 'Talk London',
        },
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
        'https://projects.invisionapp.com/share/621138JQ5SHY#/screens/452846999',
    },
    docs: {
      description: {
        component: dedent(`
          CTA components often use vague link text like '_Find out more_' or '_Register your interest_'. This puts us at
          risk of violating WCAG [2.4.4 Link Purpose (In Context)](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs)
          and/or [2.4.9 Link Purpose (Link Only)](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-link), especially if
          multiple CTAs are used on a page. Vague link text is an issue as screenreader users can browse in a 'links mode'
          where all the links on a page will be read out in a list, but no other text will be read out. This can lead to
          frustrating situations where a user will be trying to find the right link to complete a task, but all the
          links sound the same:

          - Read more [more of what?!]
          - Read more
          - Find out more [about what?!]
          - Register your interest [in what?!]
          - Next steps


          To get around this, we use [\`aria-describedby\`](https://www.w3.org/TR/wai-aria/#aria-describedby) to link
          the CTA's heading to the link, to give the link additional context. Screen readers will announce both the link
          text and the heading text, even if the user is only browsing in links mode. The heading text should explain
          what the CTA link relates to in order to give the link text extra context. Ideally, the heading text should
          not duplicate the button text as this would result in repetition in the link's announcement and also means less
          of a chance to give useful context.

          As an example, a heading that reads 'Find out more about how to book NYE firework tickets' with button
          text of 'Sign up for updates' would be announced as something like _Sign up for updates, link, Find out more about how to book NYE firework tickets_.
        `),
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Simple = Template.bind({});

export const TalkLondon = Template.bind({});
TalkLondon.args = {
  cta_type: 'talk_london',
  heading: 'Head over to Talk London to share your views on this issue',
  button_content: 'Visit Talk London',
  button_url: 'https://example.com',
};
TalkLondon.parameters = {
  docs: {
    description: {
      story:
        'The Talk London CTA markup is very similar to the Simple CTA, except different colours are used, the box has rounded edges, and a speech bubble `SVG` element is added.',
    },
  },
  design: {
    type: 'iframe',
    url:
      'https://invis.io/621138JQ5SHY#/453960207_57_04_Talk_London_CTA_Large_Tablet',
  },
};

export const TooMuchButtonText = Template.bind({});
TooMuchButtonText.args = {
  button_content:
    "CMS users should be sensible with the amount of content they add to a component, and we should trust them to do good work, but it's also good to give components some resilience",
};
TooMuchButtonText.parameters = {
  docs: {
    description: {
      story:
        'We ask the browser to try and prevent the button from wrapping onto two lines when a _reasonable_ amount of text is used, but we also set a max-width limit to prevent the button from blowing out the component layout.',
    },
  },
};

export const TooMuchHeadingText = Template.bind({});
TooMuchHeadingText.args = {
  content:
    "CMS users should be sensible with the amount of content they add to a component, and we should trust them to do good work, but it's also good to give components some resilience and make sure they are at least readable when too much content is put inside them, even if they may not always be as attractive as they could be",
};

export const Assembly = Template.bind({});
Assembly.decorators = [assemblyDecorator];
