import dedent from 'ts-dedent';

const template = require('./grid.twig');

export default {
  title: 'Atoms/Grid',
  parameters: {
    docs: {
      description: {
        component: dedent(`
          Tailwind provides a [variety of CSS grid related utility classes](https://tailwindcss.com/docs/grid-template-columns),
           and for complex layouts that would be too hard or verbose to express using utility classes we can write our
           own (S)CSS.
           
           ## Mimicking the Bootstrap 4 grid
           
           The designs have been put together using a Boostrap style grid so some helper classes are included to help
           meet these designs:
           
           A responsive \`container\` class exists to set a \`max-width\` and center content. It does not set any 
           padding.
           
           To mimic how the Boostrap grid works, \`15px\` of padding on either side of a \`container\` element can 
           be set using the \`u-px-bs-grid\` utility class. To compensate for the padding on a 'row' wrapping element, 
           use a negative margin utility to remove the spacing: \`u--mx-bs-grid\`. An example of this technique can be 
           seen in this story.
           
           ## Limitations of using utility classes for CSS grid layout
           
           CSS grid's full power is not always possible to realise using only utilities. In this case, feel free to
           write custom (S)CSS unique to the component you are working on. 
           
           A useful technique is to use an approach like the one below ([source](https://moderncss.dev/3-css-grid-techniques-to-make-you-a-grid-convert/#3-intrinsically-responsive-grid-columns))
           to place grid items into equally sized columns - as long as they are wider than 250px. Here, 250px would be
           a unique value that makes sense in the context of your component but is too unique to warrant creating a
           utility for.
           
           \`\`\`
           --grid-col-breakpoint: 250px;
           grid-template-columns: repeat(auto-fit, minmax(var(--grid-col-breakpoint), 1fr));
           \`\`\`
           
           https://smolcss.dev and https://moderncss.dev are good sources for CSS grid tips.
           
           ## Examples
        `),
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Grid = Template.bind({});
