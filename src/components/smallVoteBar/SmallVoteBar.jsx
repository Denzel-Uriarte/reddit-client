import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

export const SmallVoteBar = ({ score, ...props}) => {
  const [voted, setVoted] = useState('');
  function upvote () {
    setVoted('up')
  }
  function downvote() {
    setVoted('down')
  }
  return (
    <div 
      className={['bg-dark', 'col-1', 'text-white', 'flex-column', 'd-flex', 'justify-content-center', 'text-center'].join(' ')}

      {...props}
    >
      <div
      className={['score'].join(' ')}
      >
        {!voted ? 
        <>
          <img src='upvote-off.png' alt='upvote' onClick={upvote}/>
          <p style={{margin:4+'px'}}>{score}</p>
          <img src='downvote-off.png' alt='downvote' onClick={downvote}/>
        </>
        : voted==='up' ? 
        <>
          <img src='upvote-on.png' alt='upvoted'/>
          <p style={{margin:4+'px'}}>{score}</p>
          <img src='downvote-off.png' alt='downvote' onClick={downvote}/>
        </> 
        : 
        <>
          <img src='upvote-off.png' alt='upvote' onClick={upvote}/>
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
  voted: PropTypes.oneOf(['up', 'down', false])
};

SmallVoteBar.defaultProps = {
  score: 248,
  voted: false,
};