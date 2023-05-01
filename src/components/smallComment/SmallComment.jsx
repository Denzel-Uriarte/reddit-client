import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const SmallComment = ({ name, body, created_utc}) => {
  const date = new Date(created_utc*1000)
  const converted_utc = "at "+ date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  return (
    <div
      className={['col-12', 'flex-row', 'd-flex'].join(' ')}
    >
      <div
        className={['col-10', 'h-100', 'mx-0', 'bg-dark', 'text-light', 'px-3', 'pb-1', 'mb-2'].join(' ')}
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
  created_utc: PropTypes.number,
};

SmallComment.defaultProps = {
  name: 'wenzel',
  body: 'wenzelverse',
  created_utc: 235664444
};