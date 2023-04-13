import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const CreationInfo = ({ user, time }) => {
  return (
    <p className='fw-light'>{`Posted by u/${user} ${time}`}</p>
  );
};


/**
 * Primary UI component for user interaction
 */
CreationInfo.propTypes = {
  /**
   * Who posted this?
   */
  user: PropTypes.string.isRequired,
  /**
   * How long ago was this posted?
   */
  time: PropTypes.string.isRequired,
};

CreationInfo.defaultProps = {
};