import drupalAttribute from 'drupal-attribute';

import '@dist/01-atoms/button/button.css';

const template = require('./button.twig');

export default {
  title: 'Atoms/Button',
  args: {
    button_content: 'Example button',
  },
  argTypes: {
    button_content: {
      type: { name: 'string', required: false },
      description: 'Label of the button',
      table: {
        type: { summary: 'string' },
      },
    },
    button_url: {
      type: { name: 'string' },
      description:
        'Anchor href. Without an href a `<button>` element will be output instead of an `<a>`',
      table: {
        type: { summary: 'string' },
      },
    },
    button_type: {
      type: { name: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Type of the button',
      control: {
        type: 'radio',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
  parameters: {
    design: {
      type: 'iframe',
      url:
        'https://projects.invisionapp.com/share/3C11ABUSUADV#/screens/454587029',
    },
  },
};

const Template = (args) => template({ ...args });

export const Primary = Template.bind({});
Primary.args = {
  button_type: 'primary',
  button_url: 'https://example.com',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  button_type: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  button_type: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  button_type: 'danger',
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  button_size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  button_size: 'large',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Primary.args,
  button_icon: 'cti--arrow-button-right',
  // Storybook needs a special URL. Ideally this would be handled by a global
  // like in Pattern Lab so it doesn't show up in Controls.
  icon_url: '/img/sprite/',
};

export const WithNoUrl = Template.bind({});
WithNoUrl.args = {
  // eslint-disable-next-line new-cap
  attributes: new drupalAttribute().setAttribute(
    'onclick',
    "alert('Thanks for clicking this button that isn\\'t a link'); blur(this)",
  ),
};
