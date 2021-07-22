import dedent from 'ts-dedent';
import * as ExampleMarkup from './example-markup';

const scrollableTableWrapper = require('./scrollable-table.twig');
const richTextComponent = require('../rich-text/rich-text.twig');

export default {
  title: 'Atoms/Table',
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/3C11ABUSUADV#/454587111_WYSIWYG_Large_Tablet',
    },
    docs: {
      description: {
        component: dedent(`
          Tables are unstyled by default. To get a recognisable 'table style', the table needs to be inside a
          \`rich-text\` component or have the \`styled-table\` class.
        `),
      },
    },
  },
};

const Template = () =>
  ExampleMarkup.tableMarkupWithVarietyOfHeadingConfigurations;

export const InsideRichText = Template.bind({});
InsideRichText.decorators = [
  (story) => {
    return richTextComponent({ content: story() });
  },
];
InsideRichText.parameters = {
  docs: {
    description: {
      story:
        'This table has styling as it is inside our `rich-text` component.',
    },
  },
};

export const StyledTable = () =>
  ExampleMarkup.tableMarkupWithVarietyOfHeadingConfigurations
    .replace(/<table>/g, '<table class="styled-table">')
    .replace(/<caption>/g, '<caption class="styled-links">');
StyledTable.parameters = {
  docs: {
    description: {
      story: dedent(`
        Here the table styling is being provided by a \`styled-table\` class on the \`table\` element instead of being
        applied because the table is inside a Rich text component. This allows us to have styled tables outside of Rich
        text components. You'll notice the tables have no max-width now that they are not within the Rich text component,
        but you can always use a utility class to add a max-width value.
      `),
    },
  },
};

export const ScrollableInsideRichText = () =>
  ExampleMarkup.tableMarkupWithMultipleLinesInSomeCells;
ScrollableInsideRichText.decorators = [
  (story) => {
    return richTextComponent({
      content: scrollableTableWrapper({ content: story() }),
    });
  },
];
ScrollableInsideRichText.parameters = {
  docs: {
    description: {
      story: dedent(`
        This table is scrollable. Users on a device _with_ a mouse will see a stylised scrollbar at a width defined by
        their operating system or browser. Users on a device _without_ a mouse (e.g. mobile users who are used to
        swiping rather than using scrollbars) will see a narrower scrollbar that matches the mobile designs.
      `),
    },
  },
};

export const ScrollableStyledTable = () =>
  ExampleMarkup.tableMarkupWithMultipleLinesInSomeCells.replace(
    /<table>/g,
    '<table class="styled-table">',
  );
ScrollableStyledTable.decorators = [
  (story) => {
    return richTextComponent({
      content: scrollableTableWrapper({ content: story() }),
    });
  },
];
ScrollableStyledTable.parameters = {
  docs: {
    description: {
      story: dedent(`
        This is a dupplicate of the _Scrollable inside Rich text_ story - except the table styling is being provided by
        a \`styled-table\` class on the \`table\` element instead of being applied because the table is inside a Rich
        text component. This allows us to have styled tables outside of Rich text components. You'll notice the table
        has no max-width now that it is not within the Rich text component, but you can always use a utility class
        to add a max-width value.
      `),
    },
  },
};
