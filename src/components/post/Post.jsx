import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Post = ({ author, title, large, subreddit, score, created, numComments, isVideo, content, ...props }) => {
  const size = large ? 'FULLPOST' : 'BROWSEPOST';
  const video = isVideo ? 'EMBED VIDEO' : null;
  return (
    <div>
      <div
        className={['col-9', 'bg-dark',].join(' ')}
        {...props}
      >
        <h2>{title}</h2>
        
      </div>
      
    </div>
  );
};


/**
 * Primary UI component for user interaction
 */
Post.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  dark: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['tall', 'wide']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional additional classes
   */
  extra: PropTypes.string,
};

Post.defaultProps = {
  onClick: undefined,
};