import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const CreationInfo = ({ user, time, subreddit }) => {
  const date = new Date(time*1000)
  const dateFormat = "at "+ date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  return (
    <div>
      {subreddit ? 
        <p className='fw-light m-0'>{`r/${subreddit} - Posted by u/${user} ${dateFormat}`}</p>
      :
        <p className='fw-light m-0'>{`Posted by u/${user} ${dateFormat}`}</p>
      }
    </div>
    
    
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
  time: PropTypes.number.isRequired,
};

CreationInfo.defaultProps = {
};