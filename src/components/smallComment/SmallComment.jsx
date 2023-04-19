import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const SmallComment = ({ name, body, created_utc}) => {
  const converted_utc = created_utc //for testing now
  return (
    <div
      className={['col-12', 'flex-row', 'd-flex'].join(' ')}
    >
      <div
        className={['col-10', 'h-100', 'mx-0', 'bg-dark', 'text-light', 'px-3', 'pb-1'].join(' ')}
      >
        <p className={["my-0", 'text-secondary'].join(' ')}>{`${name} - ${converted_utc}`}</p>
        <p>{body}</p>
      </div>
    </div>
    
  );
};


/**
 * Primary UI component for user interaction
 */
SmallComment.propTypes = {
  /**
   * Name of creator
   */
  name: PropTypes.string,
  /**
   * Content of comment
   */
  body: PropTypes.string.isRequired,
  /**
   * Time created
   */
  created_utc: PropTypes.string,
};

SmallComment.defaultProps = {
  name: 'wenzel',
  body: 'wenzelverse',
  created_utc: '1 hour ago'
};