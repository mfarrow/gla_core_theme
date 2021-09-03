const template = require('./media-control.twig');

export default {
  title: 'Atoms/Media control',
};

const Template = (args) => template(args);

export const Default = Template.bind({});
