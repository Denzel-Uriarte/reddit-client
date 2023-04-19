import { Provider } from 'react-redux';
import { store } from '../src/app/store';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    
  }
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
]


export default preview;
