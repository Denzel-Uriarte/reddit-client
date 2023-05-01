import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CreationInfo } from '../creationInfo/CreationInfo';
import { VoteBar } from '../voteBar/VoteBar';
import { Comment } from '../comment/Comment';
// import { selectComments, setComments } from './postSlice';
// import { useSelector, useDispatch } from 'react-redux';


export const Post = ({ author, title, large, subreddit, score, created_at_utc, numComments, isVideo, selftext, commentsinfo, fullpost, ...props }) => {
  // const dispatch = useDispatch();
  // const commentsdata = useSelector(selectComments);
  return (
    <div>
      <div
        className={['row', 'text-light', 'mx-0'].join(' ')}
      >
          <VoteBar 
            score={score}
            numComments={numComments}
          />
        <div
          className={['col-10', 'bg-dark', 'text-light', 'flex-row'].join(' ')}
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
          <p>{`${selftext}`}</p>
        </div>
        
      </div>
      <div 
        className={['mt-3'].join(' ')}
      >
        {fullpost && commentsinfo.map((comment, index)=> 
          <Comment 
            key={index}
            name={comment.name}
            body={comment.body}
            score={comment.score}
            created_utc={comment.created_at_utc}
            repliesv2={comment.repliesv2}
          />
        )}
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
  content: PropTypes.string.isRequired,
  /**
   * Comment data
   */
  commentsinfo: PropTypes.array
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
  commentsinfo: [
    {
      name:'wenzel',
      body:'i come from the fturue',
      score:115,
      created_at_utc:1621552410,
      repliesv2: [{
        id: 1,
        name: 'denzel',
        created_utc: 5674564665464,
        body: 'hello everyone'
      },
      {
        id: 2,
        name: 'diego',
        created_utc: 3567457756545,
        body: 'meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow'
      }
    ]
    }
  ],
  fullpost: true
};