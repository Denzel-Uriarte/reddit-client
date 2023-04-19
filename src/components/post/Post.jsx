import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CreationInfo } from '../creationInfo/CreationInfo';
import { VoteBar } from '../voteBar/VoteBar';


export const Post = ({ author, title, large, subreddit, score, created_at_utc, numComments, isVideo, content, ...props }) => {
  const size = large ? 'FULLPOST' : 'BROWSEPOST';
  const video = isVideo ? 'EMBED VIDEO' : null;
  return (
    <div
      className={['row', 'text-light'].join(' ')}
    >
        <VoteBar 
          score={score}
          numComments={numComments}
        />
      <div
        className={['col-9', 'bg-dark', 'text-light', 'flex-row'].join(' ')}
      >
        <div
          className={['col-12', 'bg-dark', 'text-light', 'flex-row'].join(' ')}
        >
          <CreationInfo 
            subreddit={subreddit}
            user={author}
            time={created_at_utc}
          />
          <h2>{title}</h2>
        </div>
        <p>{`${content}`}</p>
      </div>
      
    </div>
  );
};


/**
 * Primary UI component for user interaction
 */
Post.propTypes = {
  /**
   * What is this post called?
   */
  title: PropTypes.string,
  /**
   * Who made this post?
   */
  author: PropTypes.string,
  /**
   * Full post or home post?
   */
  large: PropTypes.bool.isRequired,
  /**
   * Subreddit in which it was posted
   */
  subreddit: PropTypes.string.isRequired,
  /**
  * Voting score to display
  */
  score: PropTypes.number.isRequired,
  /**
   * How long ago it was created
   */
  created_at_utc: PropTypes.number.isRequired,
  /**
   * Number of comments
   */
  numComments: PropTypes.number,
  /**
   * Is this a video?
   */
  isVideo: PropTypes.bool.isRequired,
  /**
   * Post content
   */
  content: PropTypes.string.isRequired
};

Post.defaultProps = {
  title: 'the creation of time',
  author: 'diego',
  large: true,
  subreddit: 'themultiverse',
  score: 6487,
  created_at_utc: 1621552410,
  numComments: 104,
  isVideo: false,
  content: `multiverse algun dia tomara control sobre el mundo 
  hello everyone my name is markiplier
  diego rivera
  test test 123`,
};