
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from '../../components/button/Button'


export default {
  title: 'Simple/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
};

export const category = {
  args: {
    dark: true,
    label: 'Category',
    size: 'tall'
  },
};

export const recommendation = {
  args: {
    dark: false,
    label: 'Recommendation',
    size: 'wide'
  },
};
