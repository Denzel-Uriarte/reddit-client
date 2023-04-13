import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CreationInfo } from '../../components/creationInfo/CreationInfo.jsx'


export default {
  title: 'Simple/CreationInfo',
  component: CreationInfo,
  tags: ['autodocs'],
  argTypes: {
  },
};

export const Default = {
  args: {
    user: 'wenzel',
    time: '1 day ago'
  },
};
