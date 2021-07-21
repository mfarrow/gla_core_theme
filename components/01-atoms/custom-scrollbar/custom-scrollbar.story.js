import dedent from 'ts-dedent';

export default {
  title: 'Atoms/Custom Scrollbar',
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/3C11ABUSUADV#/454587111_WYSIWYG_Large_Tablet',
    },
    docs: {
      description: {
        component: dedent(`
          Parts of the designs show a custom scrollbar, for example when tables need to scroll horizontally. This is
          doable in modern browsers just with CSS, but should be used sparingly. To prevent having an impact on
          usability, on devices with a mouse the width/height of the scrollbar will be decided by the browser/operating
          system. On touchscreen devices, where users are less likely to use the scrollbar directly (e.g. compared to
          swiping through the content) then we show a narrower scrollbar as shown in the designs.
        `),
      },
    },
  },
};

const Template = () => `
  <div class="custom-scrollbar u-w-80 u-h-80 u-overflow-auto">
    <div class="u-w-screen u-h-screen" style="background: radial-gradient(var(--t-colors-mercury), var(--t-colors-white))"></div>
  </div>
`;

export const CustomScrollbar = Template.bind({});
