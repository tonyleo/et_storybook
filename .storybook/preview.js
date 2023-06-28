import { Title, Subtitle, Description, Primary, Controls, Stories, Source} from '@storybook/blocks';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Navigation', 'Components', '*']
      }
    }
  },
};

export default preview;
