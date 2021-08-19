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

           ## Matching the designs

           The designs have been put together using a grid where the gutters are equivalent to the column widths.

           The designs use a six column grid until the \`lg\` breakpoint, then switch to a twelve column grid.

           Use the \`gla-grid\` class to create a CSS grid container that switches from 6 to 12 columns at the right
           breakpoint and that provides a correct \`gap\` value to match the designs.

           Use the \`gla-grid--auto\` class to remove the explict 6/12 number of columns and have the content
           automatically fill the grid, e.g. two cards would be displayed half and half, three cards would be displayed
           in thirds.

           The \`gla-grid\` and \`gla-grid--auto\` classes are generated via Tailwind so you can use responsive
           modifiers with them, like \`lg:gla-grid\` \`or xxl:gla-grid--auto\`.

           Example usage:

           \`\`\`html
           <div class="container">
            <div class="gla-grid">
              <div class="u-col-span-2 lg:u-col-span-4">1/3rd width column</div>
              <div class="u-col-span-2 lg:u-col-span-4">1/3rd width column</div>
              <div class="u-col-span-2 lg:u-col-span-4">1/3rd width column</div>
            </div>
          </div>
           \`\`\`

           ## Containers

           A responsive \`container\` class exists to set a \`max-width\` and center content. It does not set any
           padding.

           The container approach is based on https://www.joshwcomeau.com/css/full-bleed but using fixed widths
           for each breakpoint, rather than being based on character width. This matches the designs.

           See https://codepen.io/hexagoncircle/pen/gOWjwme for an example of aligning content within the container
           by inheriting the grid columns, but still allowing it to be scrolled horizontally out of the grid.
           I'm not sure the current designs include any examples of this, but I'm including it for future reference.

           ### Breaking out of the container

           There are two ways to break out of the container

           1. Immediate children of \`.continer\` can 'breakout' of the container by using the \`.u-breakout\` class to
                span the full range of columns, not just the middle container column. This requires a specific DOM
                structure but is the nicest breakout option as it relies only on CSS grid.

           2. For not-immediate children of \`.container\`, the u-breakout-child class can be used to break out of the
              container. This is not as good an option as using the original u-breakout class as it requires JavaScript
              to calculate the scrollbar width in order to get perfect alignment with other elements on the page and it
              has a few issues:

              - This can cause a small amount of CLS when the value of \`--reliable-100vw\` updates and the alignment of
                content changes.
              - Note that these classes will only work on content that is centered in the middle of the page. If a
                max-width (e.g. one added for readability on a Rich text component) means the element is off-center then
                it will not be able to break out of the grid properly. If this is the case, try refactoring the DOM
                structure of your component to use the \`u-breakout\` class.


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

           ([Open the example in fullscreen](iframe.html?id=atoms-grid--grid&viewMode=story) to see it at full width with no scrolling)
        `),
      },
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => template({ ...args });

export const Grid = Template.bind({});
