import dedent from 'ts-dedent';

import './media-control';

const template = require('./media-control.twig');

export default {
  title: 'Atoms/Media control',
  args: {
    pause_label: 'Pause',
    play_label: 'Play',
    is_playing: false,
  },
  argTypes: {
    pause_label: {
      type: { name: 'string', required: false },
      description:
        'Default accessible text/label for the button in its pause state',
      table: {
        type: { summary: 'string', defaultValue: { summary: 'Pause' } },
      },
    },
    play_label: {
      type: { name: 'string', required: false },
      description:
        'Default accessible text/label for the button in its play state',
      table: {
        type: { summary: 'string', defaultValue: { summary: 'Play' } },
      },
    },
    is_playing: {
      type: { name: 'boolean', required: false },
      description:
        'Set to false to show a media control for media that is already playing',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    actions: {
      handles: ['media-control--play', 'media-control--pause'],
    },
    docs: {
      description: {
        component: dedent(
          `This component emits a \`media-control--play\` and \`media-control--pause\` event when it is toggled.

          Don't attach click event listeners to the component directly. Instead, listen for the \`media-control--play\`
          and \`media-control--pause\` events on a parent component using Alpine with something like
          \`@media-control--play="doSomething()"\``,
        ),
      },
    },
  },
};

const Template = (args) => template(args);

export const Default = Template.bind({});

export const IsPlaying = Template.bind({});
IsPlaying.args = { is_playing: true };
