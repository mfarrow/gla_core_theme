import '../../../dist/02-molecules/hero-image/hero-image';

const template = require('./hero-image.twig');

export default {
  title: 'Molecules/Hero image',
  args: {
    image:
      '<picture><img class="u-h-full u-object-cover u-w-full" src="https://pbs.twimg.com/profile_images/1417081099608596481/nVO3JCd-_400x400.jpg" alt="Image from drupal"></picture>',
  },
  argTypes: {
    image: {
      type: { name: 'string' },
      description: 'HTML markup to display an image',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/X611422B95Q8#/screens/453047027',
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});

const richTextTemplate = require('../../01-atoms/rich-text/rich-text.twig');

export const InContextWithRichText = () => `
  <div class="u-space-y-10">
    ${template({
      image:
        '<picture><img class="u-h-full u-object-cover u-w-full" src="https://pbs.twimg.com/profile_images/1417081099608596481/nVO3JCd-_400x400.jpg" alt="Image from drupal"></picture>',
    })}
    ${richTextTemplate({
      content: `<p><strong>Scroll down to see parallax effect in image</strong></p><p>Concept of the number one the carbon in our apple pies intelligent beings light years corpus callosum tesseract? Network of wormholes the sky calls to us dispassionate extraterrestrial observer two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer Cambrian explosion. Descended from astronomers from which we spring. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>`,
    })}
  </div>
`;
