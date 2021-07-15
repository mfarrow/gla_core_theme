import drupalAttribute from 'drupal-attribute';

const template = require('./link.twig');

export default {
  title: 'Atoms/Link',
  args: {
    link_content: 'Example link content',
    link_url: 'https://example.com',
  },
  argTypes: {
    link_content: {
      type: { name: 'string', required: true },
      description: 'Content for inside the link',
      table: {
        type: { summary: 'string' },
      },
    },
    link_url: {
      type: { name: 'string' },
      description: 'Anchor href',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/3C11ABUSUADV#/screens/454587029',
    },
    docs: {
      description: {
        component:
          "By default, HTML anchor elements (links) are unstyled, as they could be used for any purpose. To get a recongisable 'link style', the link needs to be inside a `rich-text` component, given a `u-styled-link` utility class, or have a parent with the `u-styled-links` utility class.",
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
Default.args = {
  link_content:
    'This is an unstyled link (so we can wrap all sorts of things inside links without having to override any default styling).',
};
Default.parameters = {
  docs: { description: { story: 'This is a story description' } },
};

const richTextComponent = require('../rich-text/rich-text.twig');
export const InsideRichText = Template.bind({});
InsideRichText.decorators = [
  (story) => {
    const richTextContent = `Donec non est ut velit congue blandit. ${story()}. Sed a tellus consectetur, vehicula magna ac, interdum nibh. Aliquam congue pharetra turpis id viverra. Morbi tincidunt, quam eget vestibulum tristique, enim arcu placerat purus, sit amet suscipit mauris velit non orci. ${story()}. Nunc mollis efficitur elementum. Suspendisse accumsan, metus sed egestas dignissim, tortor tortor aliquet magna, a laoreet orci eros nec ante. Vestibulum pulvinar tortor in dui maximus tristique. Fusce placerat tristique tincidunt. ${story()}. Integer venenatis venenatis nibh, vel euismod orci eleifend consectetur.`;
    return richTextComponent({ content: richTextContent });
  },
];
InsideRichText.parameters = {
  docs: {
    description: {
      story:
        'This anchor has link styling as it is inside our `rich-text` component.',
    },
  },
};

export const InsideParentWithStyledLinksUtilityClass = Template.bind({});
InsideParentWithStyledLinksUtilityClass.decorators = [
  (story) => {
    const richTextContent = `Nullam consequat, dui non placerat commodo, dui risus bibendum mauris, at condimentum lacus purus at dolor. ${story()}. Maecenas nec consequat est. Nullam venenatis nisi eget justo sagittis, eu molestie libero varius. In odio turpis, faucibus vel gravida vel, mattis vel dolor. ${story()}. Aenean id consectetur nunc. Phasellus non urna eu massa euismod pharetra nec a mi. Nullam nec commodo tortor. Curabitur consequat, nisl vel scelerisque laoreet, lectus odio porttitor neque, non commodo magna erat eu felis. Nullam id justo eleifend diam bibendum dictum non ut urna. ${story()}.`;
    return `<div class="u-styled-links">${richTextContent}</div>`;
  },
];
InsideParentWithStyledLinksUtilityClass.parameters = {
  docs: {
    description: {
      story:
        'This anchor has link styling as it is inside a parent with the `u-styled-links` utility class. This utility class can be used to apply just the link styling without the `max-width`, `line-height` rules that are set by the `rich-text` component.',
    },
  },
};

export const WithStyledLinkUtilityClass = Template.bind({});
WithStyledLinkUtilityClass.args = {
  // eslint-disable-next-line new-cap
  attributes: new drupalAttribute().addClass('u-styled-link'),
};
WithStyledLinkUtilityClass.parameters = {
  docs: {
    description: {
      story:
        'To add link styling to an individual link you can use the `.u-styled-link` utility class. Make sure that the parent of the link has enough of a `line-height` value to leave room for the space taken up by the `text-underline-offset` and `text-decoration-thickness` values of the styled link.',
    },
  },
};

// Demonstrate different states.
const stateDemoDocs = {
  description: {
    story:
      'View this story in the Canvas (not Docs) mode to see a preview of the state.',
  },
};
const stateDemoArgs = {
  // eslint-disable-next-line new-cap
  attributes: new drupalAttribute().addClass('u-styled-link'),
};

export const StateDemoHover = Template.bind({});
StateDemoHover.args = stateDemoArgs;
StateDemoHover.parameters = {
  pseudo: { hover: true },
  docs: stateDemoDocs,
};

export const StateDemoFocus = Template.bind({});
StateDemoFocus.args = stateDemoArgs;
StateDemoFocus.parameters = {
  pseudo: { focus: true },
  docs: stateDemoDocs,
};

export const StateDemoActiveAndHoverEGOnClick = Template.bind({});
StateDemoActiveAndHoverEGOnClick.args = stateDemoArgs;
StateDemoActiveAndHoverEGOnClick.parameters = {
  pseudo: { active: true, hover: true },
  docs: stateDemoDocs,
};
