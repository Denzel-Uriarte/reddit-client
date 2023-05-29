import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SmallVoteBar } from '../smallVoteBar/SmallVoteBar';
import React, {useState} from 'react';
import { SmallComment } from '../smallComment/SmallComment';


export const Comment = ({ name, score, body, created_utc, replies}) => {
  // const extractUrls = require("extract-urls"); // addwip
  const [viewReplies, setViewReplies] = useState('');
  const date = new Date(created_utc*1000)
  const dateFormat = "at "+ date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  const selftext = new DOMParser().parseFromString(`<!doctype html><body>${body}`, 'text/html').body.textContent;

  return (
    <div
      className={['col-12', 'flex-column', 'd-flex'].join(' ')}
    >
      <div
      className={['col-12', 'flex-row', 'd-flex', 'mb-2'].join(' ')}
      >
        <SmallVoteBar 
          score={score}
        />
        <div
          className={['col-10', 'h-100', 'mx-3', 'bg-dark', 'text-light', 'px-3', 'pb-1'].join(' ')}
        >
          <p className={["my-0", 'text-secondary'].join(' ')}>{`${name} - ${dateFormat}`}</p>
          <div dangerouslySetInnerHTML={{__html: selftext}}/>
          {replies ? 
          <div className={'py-1'}>
            <button onClick={()=>setViewReplies(!viewReplies)}>
              View Replies
            </button> 
          </div>
            
          : 
            <div className={'py-4'}> 
            </div>}
        </div>
      </div>
      <div
        className={['col-12', 'flex-column', 'd-flex'].join(' ')}
      >
        {viewReplies && replies && replies.data.children.map((reply, index) => 
          <SmallComment 
            key={index}
            name={reply.data.author}
            body={reply.data.body_html}
            created_utc={reply.data.created_utc}
          />
        )}
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
  created_utc: PropTypes.number,
  /**
   * Replies to comment
   */
  replies: PropTypes.array,
};

Comment.defaultProps = {
  name: 'wenzel',
  score: 134,
  body: 'wenzelverse',
  created_utc: 1621552410
}