import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Post } from '../../components/post/Post'


export default {
  title: 'Composed/Post',
  component: Post,
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
