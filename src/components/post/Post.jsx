import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { VoteBar } from '../voteBar/VoteBar';
import { Comment } from '../comment/Comment';
import { Link, useNavigate } from 'react-router-dom';

export const Post = ({ author, permalink, title, large, subreddit, media, score, created_at_utc, numComments, isVideo, selftext, commentsinfo, fullpost, url, ...props }) => {
  const selftext_to_display = new DOMParser().parseFromString(`<!doctype html><body>${selftext}`, 'text/html').body.textContent;
  const navigate = useNavigate()
  const date = new Date(created_at_utc*1000)
  const dateFormat = "at "+ date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  const setSubreddit = () => {
    navigate(`/r/${subreddit}`)
  }
  
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
            <div onClick={setSubreddit}>
              <p className='fw-light m-0'>{`r/${subreddit} - Posted by u/${author} ${dateFormat}`}</p>
            </div>
            {permalink.permalink ? <h2><Link to={`../post/${Object.values(permalink.permalink)[0]}`}>{title}</Link></h2> : <h2><Link to={`../post${permalink}`}>{title}</Link></h2>}
          </div>
          {selftext_to_display !== "null" ? <div dangerouslySetInnerHTML={{__html: selftext_to_display}}/> : null}
          {url.includes('i.redd.it') ? 
          <div className='d-flex justify-content-center text-center'> 
            {fullpost ? 
              <img src={`${url}`} alt="post" width="100%" height="100%"/> 
              : 
              <img src={`${url}`} alt="post" width="400" height="300"/>
            }
          </div> : null
          }
          {url.includes('v.redd.it') ? 
          <div className='d-flex justify-content-center text-center'> 
            <video controls height="50%" width="50%">
              <source src={media}/>
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div> : null
          }
          {<p><b>media url fetched: {url}</b></p>}
        </div>
      </div>
      <div 
        className={['mt-3'].join(' ')}
      >
        {fullpost && commentsinfo.map((comment, index)=> 
          <Comment 
            key={index}
            name={comment.data.author}
            body={comment.data.body}
            score={comment.data.score}
            created_utc={comment.data.created_utc}
            replies={comment.data.replies}
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