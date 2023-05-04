import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useRouteMatch
 } from 'react-router-dom';

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
      <Router>
        <Story />        
      </Router>
    </Provider>
  )
]


export default preview;
