import dedent from 'ts-dedent';
import DrupalAttribute from 'drupal-attribute';

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
    docs: {
      description: {
        component: dedent(`
          Rich text styling is provided by the [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)
          plugin that provides opinionated styling intended for WYSIWYG content.

          To override the styling, developers should edit \`theme.extend.typography\` inside \`tailwind.config.js\`. To
          get an idea of the styles available to override, see the [\`styles.js\` file from the plugin](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js).
        `),
      },
    },
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
    <p>This component is unfinished and we need to update the following things to match the designs:</p>
    <ol>
      <li>Font family (waiting to hear about font licencing)</li>
      <li>Font sizes (will need to vary by breakpoint as per designs)</li>
      <li>Line heights (will be linked to the above)</li>
      <li>Blockquote styling (for blockquotes added via CKEditor rather than via the Blockquote component, if we still want to allow this)</li>
      <li>Table styling</li>
      <li>Spacing between paragraphs and headings of various level</li>
    </ol>
    <p>Note that the remaining example content (below the horizontal rule) for this story comes from a <a href="https://github.com/tailwindlabs/tailwindcss-typography/">third-party code repo</a> and wasn't written by CTI or GLA.</p>
    <hr>
    <p>
      Until now, trying to style an article, document, or blog post with Tailwind has been a tedious
      task that required a keen eye for typography and a lot of complex custom CSS.
    </p>
    <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
    <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
    <figure>
      <blockquote>
        <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p>
      </blockquote>
      <figcaption>Our users</figcaption>
    </figure>
    <p>We hear you, but we&#39;re not convinced that simply disabling our base styles is what you really want. You don&#39;t want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
    <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
    <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
    <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
    <hr>
    <h2 id="what-to-expect-from-here-on-out">What to expect from here on out</h2>
    <p>What follows from here is just a bunch of absolute nonsense I&#39;ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
    <p>It&#39;s important to cover all of these use cases for a few reasons:</p>
    <ol>
    <li>We want everything to look good out of the box.</li>
    <li>Really just the first reason, that&#39;s the whole point of the plugin.</li>
    <li>Here&#39;s a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
    </ol>
    <p>Now we&#39;re going to try out another header style.</p>
    <h3 id="typography-should-be-easy">Typography should be easy</h3>
    <p>So that&#39;s a header for you — with any luck if we&#39;ve done our job correctly that will look pretty reasonable.</p>
    <p>Something a wise person once told me about typography is:</p>
    <blockquote>
    <p>Typography is pretty important if you don&#39;t want your stuff to look like trash. Make it good then it won&#39;t be bad.</p>
    </blockquote>
    <p>It&#39;s probably important that images look okay here by default as well:</p>
    <figure>
      <img
        src="https://images.unsplash.com/photo-1603621165604-477d10bdd174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        alt="A man skateboards at the London South Bank"
      />
      <figcaption>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
        classical Latin literature from 45 BC, making it over 2000 years old.
      </figcaption>
    </figure>

    <p>Now I&#39;m going to show you an example of an unordered list to make sure that looks good, too:</p>
    <ul>
    <li>So here is the first item in this list.</li>
    <li>In this example we&#39;re keeping the items short.</li>
    <li>Later, we&#39;ll use longer, more complex list items.</li>
    </ul>
    <p>And that&#39;s the end of this section.</p>
    <h2 id="what-if-we-stack-headings-">What if we stack headings?</h2>
    <h3 id="we-should-make-sure-that-looks-good-too-">We should make sure that looks good, too.</h3>
    <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
    <h3 id="when-a-heading-comes-after-a-paragraph-">When a heading comes after a paragraph …</h3>
    <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let&#39;s see what a more complex list would look like.</p>
    <ul>
    <li><p><strong>I often do this thing where list items have headings.</strong></p>
    <p>For some reason I think this looks cool which is unfortunate because it&#39;s pretty annoying to get the styles right.</p>
    <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn&#39;t write this way.</p>
    </li>
    <li><p><strong>Since this is a list, I need at least two items.</strong></p>
    <p>I explained what I&#39;m doing already in the previous list item, but a list wouldn&#39;t be a list if it only had one item, and we really want this to look realistic. That&#39;s why I&#39;ve added this second list item so I actually have something to look at when writing the styles.</p>
    </li>
    <li><p><strong>It&#39;s not a bad idea to add a third item either.</strong></p>
    <p>I think it probably would&#39;ve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
    </li>
    </ul>
    <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>
    <p>Hopefully that looks good enough to you.</p>
    <h3 id="what-about-nested-lists-">What about nested lists?</h3>
    <p>Nested lists basically always look bad which is why editors like Medium don&#39;t even let you do it, but let's try making it work.</p>
    <ol>
    <li><strong>Nested lists are rarely a good idea.</strong><ul>
    <li>You might feel like you are being really &quot;organized&quot; or something but you are just creating a gross shape on the screen that is hard to read.</li>
    <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
    <li>Nesting tons of folders in your source code is also not helpful.</li>
    </ul>
    </li>
    <li><strong>Since we need to have more items, here&#39;s another one.</strong><ul>
    <li>I&#39;m not sure if we&#39;ll bother styling more than two levels deep.</li>
    <li>Two is already too much, three is guaranteed to be a bad idea.</li>
    <li>If you nest four levels deep you belong in prison.</li>
    </ul>
    </li>
    <li><strong>Two items isn&#39;t really a list, three is good though.</strong><ul>
    <li>Again please don&#39;t nest lists if you want people to actually read your content.</li>
    <li>Nobody wants to look at this.</li>
    <li>I&#39;m upset that we even have to bother styling this.</li>
    </ul>
    </li>
    </ol>
    <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren&#39;t given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>
    <ul>
    <li><p><strong>For example, here&#39;s another nested list.</strong></p>
    <p>But this time with a second paragraph.</p>
    <ul>
    <li>These list items won&#39;t have <code>&lt;p&gt;</code> tags</li>
    <li>Because they are only one line each</li>
    </ul>
    </li>
    <li><p><strong>But in this second top-level list item, they will.</strong></p>
    <p>This is especially annoying because of the spacing on this paragraph.</p>
    <ul>
    <li><p>As you can see here, because I&#39;ve added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p>
    <p>This is the second line I&#39;m talking about by the way.</p>
    </li>
    <li><p>Finally here&#39;s another list item so it&#39;s more like a list.</p>
    </li>
    </ul>
    </li>
    <li><p>A closing list item, but with no nested list, because why not?</p>
    </li>
    </ul>
    <p>And finally a sentence to close off this section.</p>
    <h2 id="there-are-other-elements-we-need-to-style">There are other elements we need to style</h2>
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

    <table>
      <caption>
        This is a caption for the table. Aliquam erat volutpat. Integer mattis mi in orci vulputate, sit amet lacinia turpis posuere. Vestibulum eros nunc, condimentum ut ex id, porttitor tempus tellus.
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
    </table>

    <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
    <h3 id="sometimes-i-even-use-code-in-headings">Sometimes I even use <code>code</code> in headings</h3>
    <p>Even though it&#39;s probably a bad idea, and historically I&#39;ve had a hard time making it look good. This <em>&quot;wrap the code blocks in backticks&quot;</em> trick works pretty well though really.</p>
    <p>Another thing I&#39;ve done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository.</p>
    <h4 id="we-haven-t-used-an-h4-yet">We haven&#39;t used an <code>h4</code> yet</h4>
    <p>But now we have. Please don&#39;t use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason.</p>
    <p>We don&#39;t style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p>
    <h3 id="we-still-need-to-think-about-stacked-headings-though-">We still need to think about stacked headings though.</h3>
    <h4 id="let-s-make-sure-we-don-t-screw-that-up-with-h4-elements-either-">Let&#39;s make sure we don&#39;t screw that up with <code>h4</code> elements, either.</h4>
    <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
    <p>Let&#39;s add a closing paragraph here so things end with a decently sized block of text. I can&#39;t explain why I want things to end that way but I have to assume it&#39;s because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
    <p>What I&#39;ve written here is probably long enough, but adding this final sentence can&#39;t hurt.</p>
  `,
};

export const LeadParagraph = Template.bind({});
LeadParagraph.args = {
  content: `
    <p>The first paragraph in the designs uses a larger 'intro' text size and line height.</p>
    <p>This is currently using <code>p:first-of-type</code> but might need refactoring as we wouldn't want multiple 'lead' paragraphs when we have more than one Rich text component on a page.</p>
    <p>Subsequent paragraphs use the normal base text size and line height.</p>
    <p class="lead">The intro styling can be forced on any paragraph by giving it the \`lead\` class.</p>
    <p>Subsequent paragraphs use the normal base text size and line height.</p>
    <p>To avoid the first paragraph being styled this way</p>
  `,
};

export const NoLeadParagraph = Template.bind({});
NoLeadParagraph.args = {
  attributes: new DrupalAttribute().addClass(
    'rich-text--no-first-of-type-lead',
  ),
  content: `
    <p>The first paragraph this story does not use a larger 'intro' text size and line height.</p>
    <p>To disable the intro/lead styling add the <code>rich-text--no-first-of-type-lead</code> class to the component.</p>
  `,
};

export const HorizontalRule = Template.bind({});
HorizontalRule.args = {
  attributes: new DrupalAttribute().addClass(
    'rich-text--no-first-of-type-lead',
  ),
  content: `
    <p>Paragraph text.</p>
    <hr>
    <p>Paragraph text.</p>
  `,
};
