import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

export const SmallVoteBar = ({ score, ...props}) => {
  const [voted, setVoted] = useState('');
  // function upvote () {
  //   setVoted('up')
  // }
  // function downvote() {
  //   setVoted('down')
  // }
  return (
    <div 
      className={['col-1', 'text-white', 'flex-column', 'd-flex', 'text-center'].join(' ')}

      {...props}
    >
      <div
      className={['score', 'bg-dark'].join(' ')}
      >
        {!voted ? 
        <>
          <img src='upvote-off.png' alt='upvote' onClick={(e)=>setVoted('up')}/>
          <p style={{margin:4+'px'}}>{score}</p>
          <img src='downvote-off.png' alt='downvote' onClick={(e)=>setVoted('down')}/>
        </>
        : voted==='up' ? 
        <>
          <img src='upvote-on.png' alt='upvoted'/>
          <p style={{margin:4+'px'}}>{score}</p>
          <img src='downvote-off.png' alt='downvote' onClick={(e)=>setVoted('down')}/>
        </> 
        : 
        <>
          <img src='upvote-off.png' alt='upvote' onClick={(e)=>setVoted('up')}/>
          <p style={{margin:4+'px'}}>{score}</p>
          <img src='downvote-on.png' alt='downvoted'/>
        </> 
        } 
      </div>
    </div>
  );
};



/**
 * Primary UI component for user interaction
 */
SmallVoteBar.propTypes = {
  /** 
   * Score to be displayed in votes
   */
  score: PropTypes.number,
  /**
   * Wether the user has voted
   */
  voted: PropTypes.oneOf(['up', 'down', 'neutral'])
};

SmallVoteBar.defaultProps = {
  score: 248,
  voted: 'neutral',
};