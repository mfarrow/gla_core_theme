import dedent from 'ts-dedent';
const scrollableTableWrapper = require('./scrollable-table.twig');
const richTextComponent = require('../rich-text/rich-text.twig');

const tableMarkupWithMultipleLinesInSomeCells = `<table>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Column header two</th>
      <th>Column header three</th>
      <th>Column header four</th>
      <th>Column header five</th>
      <th>Column header six</th>
      <th>Column header seven</th>
      <th>Column header eight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row header two</th>
      <td>Cras tristique pharetra libero vel elementum. Proin vitae egestas justo.</td>
      <td>Row two, column three</td>
      <td>Row two, column four</td>
      <td>Row two, column five</td>
      <td>Row two, column six</td>
      <td>Row two, column seven</td>
      <td>Row two, column eight</td>
    </tr>
    <tr>
      <th>Row header three</th>
      <td>Row three, column two</td>
      <td>Nulla dolor metus, tristique suscipit erat a, finibus pretium nunc. Curabitur commodo felis a arcu lobortis pharetra. Etiam lobortis, magna.</td>
      <td>Row three, column four</td>
      <td>Row three, column five</td>
      <td>Row three, column six</td>
      <td>Row three, column seven</td>
      <td>Row three, column eight</td>
    </tr>
  </tbody>
</table>`;

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
        `)
      },
    },
  },
};

const tableMarkupWithVarietyOfHeadingConfigurations = `<table>
  <thead>
    <tr>
      <th>Column header one</th>
      <th>Column header two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row one, column one</td>
      <td>Row one, column two</td>
    </tr>
    <tr>
      <td>Row two, column one</td>
      <td>Row two, column one</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <th>Row header one</th>
      <td>Row one, column two</td>
      <td>Row one, column three</td>
    </tr>
    <tr>
      <th>Row header two</th>
      <td>Row one, column two</td>
      <td>Row one, column three</td>
    </tr>
    <tr>
      <th>Row header three</th>
      <td>Row one, column two</td>
      <td>Row one, column three</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Column one</th>
      <th>Column two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row one</th>
      <td>Column xxx</td>
      <td>Column xxx</td>
    </tr>
    <tr>
      <th>Row two</th>
      <td>Column xxx</td>
      <td>Column xxx</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>
    The <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H39">caption</a> should be a short description of the table's purpose, e.g. 'Schedule for the week of 6 March'. In a screenreader it can act like a heading, although we don't style it as one.
  </caption>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Column header two</th>
      <th>Column header three</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row header two</th>
      <td>Row two, column two</td>
      <td>Row two, column three</td>
    </tr>
    <tr>
      <th>Row header three</th>
      <td>Row three, column two</td>
      <td>Row three, column three</td>
    </tr>
  </tbody>
</table>`;

const Template = () => tableMarkupWithVarietyOfHeadingConfigurations;

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

export const StyledTable = () => tableMarkupWithVarietyOfHeadingConfigurations.replace(/<table>/g, '<table class="styled-table">').replace(/<caption>/g, '<caption class="styled-links">');
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

export const ScrollableInsideRichText = () => tableMarkupWithMultipleLinesInSomeCells;
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

export const ScrollableStyledTable = () => tableMarkupWithMultipleLinesInSomeCells.replace(/<table>/g, '<table class="styled-table">');
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

