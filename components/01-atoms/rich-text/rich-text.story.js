import * as ExampleTableMarkup from '../table/example-markup';

const template = require('./rich-text.twig');

export default {
  title: 'Atoms/Rich text',
  args: {
    content: 'Example text content',
  },
  argTypes: {
    content: {
      type: { name: 'string', required: true },
      description:
        'Content for the rich text, perhaps from a Drupal field template',
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
Default.args = {
  content: `
    <p class="lead">This is an example of the 'lead' styling to make the first paragraph use larger text. At the moment this needs to be manually added to the first paragraph of the first <em>Rich text</em> component on each page using the 'Styles' dropdown in CKEditor (the WYSIWYG editor).</p>

    <p>Once we have completed DERP-250 (the <em>Page section</em> component) then the ability to add page components will be moved into a <em>Page section</em> component that manages the H2 tags. When we have this setup, we can write some code that loops through all the Page section components, finds the first <em>Rich text</em> component in use on the page, then automatically makes the first paragraph use the 'lead' styling.</p>

    <p>Note that the remaining example content (below the horizontal rule) for this story comes from a <a href="https://github.com/tailwindlabs/tailwindcss-typography/">third-party code repo</a> and wasn't written by CTI or GLA.</p>

    <hr />
    <p>Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>

    <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>

    <p>We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>

    <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>

    <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>

    <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>

    <hr />
    <h3>What to expect from here on out</h3>

    <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>

    <p>It's important to cover all of these use cases for a few reasons:</p>

    <ol>
      <li>We want everything to look good out of the box.</li>
      <li>Really just the first reason, that's the whole point of the plugin.</li>
      <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
    </ol>

    <p>Now we're going to try out another header style.</p>

    <h4>Typography should be easy</h4>

    <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>

    <p>Something a wise person once told me about typography is:</p>

    <blockquote>
    <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
    </blockquote>

    <p>It's probably important that images look okay here by default as well:</p>

    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

    <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>

    <ul>
      <li>So here is the first item in this list.</li>
      <li>In this example we're keeping the items short.</li>
      <li>Later, we'll use longer, more complex list items.</li>
    </ul>

    <p>And that's the end of this section.</p>

    <h3>What if we stack headings?</h3>

    <h4>We should make sure that looks good, too.</h4>

    <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>

    <h3>When a heading comes after a paragraph…</h3>

    <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>

    <ul>
      <li>
      <p><strong>I often do this thing where list items have headings.</strong></p>

      <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>

      <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p>
      </li>
      <li>
      <p><strong>Since this is a list, I need at least two items.</strong></p>

      <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p>
      </li>
      <li>
      <p><strong>It's not a bad idea to add a third item either.</strong></p>

      <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
      </li>
    </ul>

    <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>

    <p>Hopefully, that looks good enough to you.</p>

    <h3>What about nested lists?</h3>

    <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but let's try making it work.</p>

    <ol>
      <li><strong>Here is the first ordered list item with an unordered list 'inside' it</strong>

      <ul>
        <li>Here's the first ordered list item</li>
        <li>And a second ordered list item</li>
        <li>And a third ordered list item</li>
      </ul>
      </li>
      <li><strong>Since we need to have more items, here's another one.</strong>
      <ul>
        <li>I'm not sure if we'll bother styling more than two levels deep.</li>
        <li>Two is already too much, three is guaranteed to be a bad idea.</li>
        <li>If you nest four levels deep you belong in prison.</li>
      </ul>
      </li>
      <li><strong>Two items isn't really a list, three is good though.</strong>
      <ul>
        <li>Again please don't nest lists if you want people to actually read your content.</li>
        <li>Nobody wants to look at this.</li>
        <li>I'm upset that we even have to bother styling this.</li>
      </ul>
      </li>
    </ol>

    <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>

    <ul>
      <li>
      <p><strong>For example, here's another nested list.</strong></p>

      <p>But this time with a second paragraph.</p>

      <ul>
        <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
        <li>Because they are only one line each</li>
      </ul>
      </li>
      <li>
      <p><strong>But in this second top-level list item, they will.</strong></p>

      <p>This is especially annoying because of the spacing on this paragraph.</p>

      <ul>
        <li>
        <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p>

        <p>This is the second line I'm talking about by the way.</p>
        </li>
        <li>
        <p>Finally here's another list item so it's more like a list.</p>
        </li>
      </ul>
      </li>
      <li>
      <p>A closing list item, but with no nested list, because why not?</p>
      </li>
    </ul>

    <p>And finally, a sentence to close off this section.</p>

    <h3>There are other elements we need to style</h3>

    <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>.</p>

    <p>We even included table styles, check it out:</p>

    <table>
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
      <caption>The <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H39">caption</a> should be a short description of the table's purpose, e.g. 'Schedule for the week of 6 March'. In a screenreader it can act like a heading. We don't style it as a heading as we don't know at what point in the heading levels a table with a caption might be used.</caption>
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
    </table>

    <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>

    <h3>Sometimes I even use <code>code</code> in headings</h3>

    <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p>

    <p>Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository.</p>

    <h4>We haven't used an <code>h4</code> yet</h4>

    <p>But now we have.</p>

    <h5>We haven't used an <code>h5</code>&nbsp;yet</h5>

    <p>But now we have</p>

    <h6>We haven't used an <code>h6</code> yet</h6>

    <p>But now we have</p>

    <h3>We still need to think about stacked headings though.</h3>

    <h4>Let's make sure we don't mess that up with <code>h4</code> elements, either.</h4>

    <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>

    <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>

    <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
  `,
};

export const LeadParagraph = Template.bind({});
LeadParagraph.args = {
  content: `
    <p class="lead">The first paragraph in the designs uses a larger 'intro' text size and line height.</p>
    <p>Subsequent paragraphs use the normal base text size and line height.</p>
    <p class="lead">The intro styling can be forced on any paragraph by giving it the \`lead\` class.</p>
    <p>Subsequent paragraphs use the normal base text size and line height.</p>
    <p>To avoid the first paragraph being styled this way</p>
  `,
};

export const HorizontalRule = Template.bind({});
HorizontalRule.args = {
  content: `
    <p>Paragraph text.</p>
    <hr>
    <p>Paragraph text.</p>
  `,
};

export const ExampleUsingContentFromDesigns = Template.bind({});
ExampleUsingContentFromDesigns.args = {
  content: `
    <p>Concept of the number one the carbon in our apple pies intelligent beings light years corpus callosum tesseract? Network of wormholes the sky calls to us dispassionate extraterrestrial observer two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer Cambrian explosion. Descended from astronomers from which we spring.</p>
    <p>Vangelis finite but unbounded realm of the galaxies from which we spring paroxysm of global death colonies? Stirred by starlight vastness is bearable only through love preserve and cherish that pale blue dot with pretty stories for which there's little good evidence of brilliant syntheses the ash of stellar alchemy. Made in the interiors of collapsing stars invent the universe hearts of the stars a very small stage in a vast cosmic arena extraordinary claims require extraordinary evidence citizens of distant epochs?</p>
    <h3>Example of a H3, not shown in designs but <a href="https://london.atlassian.net/wiki/spaces/DERP/pages/2967568421/Rich+text+component">will be available in Drupal</a></h3>
    <p>Muse about descended from astronomers quasar Orion's sword made in the interiors of collapsing stars courage of our questions. Take root and flourish worldlets gathered by gravity preserve and cherish that pale blue dot prime number a mote of dust suspended in a sunbeam? Cosmic fugue network of wormholes vastness is bearable only through love realm of the galaxies vanquish the impossible hundreds of thousands. A mote of dust suspended in a sunbeam kindling the energy hidden in matter courage of our questions a still more glorious dawn awaits finite but unbounded a still more glorious dawn awaits.</p>
    <h4>Subheader title goes here (H4)</h4>
    <p>Great turbulent clouds the sky calls to us a mote of dust suspended in a sunbeam explorations take root and flourish Tunguska event? Are creatures of the cosmos finite but unbounded gathered by gravity with pretty stories for which there's little good evidence across the centuries extraordinary claims require extraordinary evidence. Vanquish the impossible invent the universe a very small stage in a vast cosmic arena network of wormholes star stuff harvesting star light encyclopaedia galactica.</p>
    <h5>Smaller subheader title goes here (H5)</h5>
    <ul>
      <li>Brain is the seed of intelligence concept of the number one culture</li>
      <li>Inconspicuous motes of rock and gas Sea of Tranquility </li>
      <li>The ash of stellar alchemy stirred by starlight from which we spring</li>
      <li>Kindling the energy hidden in matter venture the sky calls to us as a patch of light the only home we've ever known</li>
    </ul>
    <h6>Example of a H6, not shown in designs but <a href="https://london.atlassian.net/wiki/spaces/DERP/pages/2967568421/Rich+text+component">will be available in Drupal</a></h6>
    <ul>
      <li>Brain is the seed of intelligence concept of the number one culture</li>
      <li>Inconspicuous motes of rock and gas Sea of Tranquility </li>
      <li>The ash of stellar alchemy stirred by starlight from which we spring</li>
      <li>Kindling the energy hidden in matter venture the sky calls to us as a patch of light the only home we've ever known</li>
    </ul>
    <hr>
    <h3>Table title goes here</h3>
    <p>Intelligent beings encyclopaedia galactica prime number Euclid quasar rings of Uranus.<br>Descended from astronomers Apollonius of Perga Apollonius of Perga globular star cluster Hypatia the ash of stellar alchemy.</p>
    <p>We're showing more types of tables than in the designs, as the Rich text component supports a variety of table header configurations.</p>
    ${ExampleTableMarkup.tableMarkupWithVarietyOfHeadingConfigurations}
    <hr>
    <p>We're ignoring the quotes as they come from their own component. This means they will need to have more spacing above and below them than shown in the designs.</p>
    <p>We're ignoring the forms as they come from their own component. This means they will need to have more spacing above and below them than shown in the designs.</p>
  `,
};
