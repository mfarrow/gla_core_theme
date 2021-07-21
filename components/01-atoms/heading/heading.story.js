const template = require('./heading.twig');

export default {
  title: 'Atoms/Heading',
  args: {
    heading_content: 'Example heading content',
    heading_level: '1',
    heading_size: 'xl',
  },
  argTypes: {
    heading_level: {
      type: { name: 'string' },
      description: 'A string (1-5) used to decide which HTML element to use',
      table: {
        type: { summary: 'string' },
      },
    },
    heading_size: {
      type: { name: 'string' },
      description:
        'A string (xl or a number 1-5) to decide what visual styles to apply',
      table: {
        type: { summary: 'string' },
      },
    },
    heading_content: {
      type: { name: 'string', required: true },
      description: 'Content for inside heading',
      table: {
        type: { summary: 'string' },
      },
    },
    heading_url: {
      type: { name: 'string' },
      description: 'Anchor href to put inside the heading',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/d/main/#/projects/prototypes/21508157',
    },
    docs: {
      description: {
        component:
          "By default, headings are unstyled, as they could be used for any purpose. To get a recognisable 'heading style', the heading needs to be inside a `rich-text` component, or given a `heading` component class along with a modifier class like `heading--2` or `heading--xl`.",
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  heading_level: '1',
  heading_size: 'xl',
};

export const one = Template.bind({});
one.args = {
  heading_level: '1',
  heading_size: '1',
};

export const two = Template.bind({});
two.args = {
  heading_level: '2',
  heading_size: '2',
};

export const three = Template.bind({});
three.args = {
  heading_level: '3',
  heading_size: '3',
};

export const four = Template.bind({});
four.args = {
  heading_level: '4',
  heading_size: '4',
};

export const five = Template.bind({});
five.args = {
  heading_level: '5',
  heading_size: '5',
};
