import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SmallVoteBar } from '../smallVoteBar/SmallVoteBar';


export const Comment = ({ name, score, body, created_utc}) => {
  const converted_utc = created_utc //for testing now
  function handleClick() {
    alert('view smaller comments')
  }
  return (
    <div
      className={['col-12', 'flex-row', 'd-flex'].join(' ')}
    >
      <SmallVoteBar 
        score={score}
      />
      <div
        className={['col-10', 'h-100', 'mx-3', 'bg-dark', 'text-light', 'px-3', 'pb-1'].join(' ')}
      >
        <p className={["my-0", 'text-secondary'].join(' ')}>{`${name} - ${converted_utc}`}</p>
        <p>{body}</p>
        <button onClick={handleClick}>
          view replies
        </button>
      </div>
    </div>
    
  );
};


/**
 * Primary UI component for user interaction
 */
Comment.propTypes = {
  /**
   * Name of creator
   */
  name: PropTypes.string,
  /**
   * Content of comment
   */
  body: PropTypes.string.isRequired,
  /**
   * User score
   */
  score: PropTypes.number,
  /**
   * Time created
   */
  created_utc: PropTypes,
};

Comment.defaultProps = {
  name: 'wenzel',
  score: '134',
  body: 'wenzelverse',
  created_utc: '1 hour ago'
};