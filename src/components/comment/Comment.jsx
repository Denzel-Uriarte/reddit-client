import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SmallVoteBar } from '../smallVoteBar/SmallVoteBar';


export const Comment = ({ name, score, body, created_utc}) => {
  const converted_utc = created_utc //for testing now
  return (
    <div
      className={['col-12', 'flex-row'].join(' ')}
      
    >
      <SmallVoteBar 
        score={score}
      />
      <div
        className={['col-11', ''].join(' ')}
      >
        <p>{`${name} - ${converted_utc}`}</p>
        <p>{body}</p>
      </div>
    </div>
    
  );
};


/**
 * Primary UI component for user interaction
 */
Comment.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  name: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['tall', 'wide']),
  /**
   * Button contents
   */
  content: PropTypes.string.isRequired,
  /**
   * Optional additional classes
   */
  score: PropTypes.number,
};

Comment.defaultProps = {
  name: 'wenzel',
  score: '134',
  body: 'wenzelverse',
  created_utc: '1 hour ago'
};