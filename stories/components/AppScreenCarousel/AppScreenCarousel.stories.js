import { AppScreenCarousel } from './AppScreenCarousel';

export default {
  title: 'Components/App Screen Carousel',
  component: AppScreenCarousel,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '500px'}}>
        <Story />
      </div>
    )
  ]
};

export const Default = {
  args: {

  },
};
