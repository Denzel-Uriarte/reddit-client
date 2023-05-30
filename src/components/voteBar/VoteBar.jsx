import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

export const VoteBar = ({ score, numComments, ...props}) => {
  const [voted, setVoted] = useState('');
  return (
    <div 
      className={['bg-dark', 'h-25', 'col-md-1', 'col-2', 'text-white', 'flex-column', 'd-flex', 'justify-content-top', 'text-center', 'mx-0', 'me-3', ].join(' ')}

      {...props}
    >
      <div
      className={['score', 'pt-3'].join(' ')}
      >
        {!voted ? 
        <>
          <img src={require('./upvote-off.png')} alt='upvote' onClick={()=>setVoted('up')}/>
          <p style={{margin:8+'px'}}>{score}</p>
          <img src={require('./downvote-off.png')} alt='downvote' onClick={()=>setVoted('down')}/>
        </>
        : voted==='up' ? 
        <>
          <img src={require('./upvote-on.png')} alt='upvoted'/>
          <p style={{margin:8+'px'}}>{score}</p>
          <img src={require('./downvote-off.png')} alt='downvote' onClick={()=>setVoted('down')}/>
        </> 
        : 
        <>
          <img src={require('./upvote-off.png')} alt='upvote' onClick={()=>setVoted('up')}/>
          <p style={{margin:8+'px'}}>{score}</p>
          <img src={require('./downvote-on.png')} alt='downvoted'/>
        </> 
        } 
      </div>
      <div
      className={['comment', 'mt-5'].join(' ')}
      >
        <img src={require('./comment.png')} alt='comments' onClick={()=>{}}/>
        <p>{numComments}</p>
      </div>
    </div>
  );
};



/**
 * Primary UI component for user interaction
 */
VoteBar.propTypes = {
  /** 
   * Score to be displayed in votes
   */
  score: PropTypes.number,
  /**
   * Number of comments to be displayed
   */
  numComments: PropTypes.number,
};

VoteBar.defaultProps = {
  score: 248,
  numComments: 26
};