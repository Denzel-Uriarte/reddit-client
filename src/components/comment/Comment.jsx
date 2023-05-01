import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SmallVoteBar } from '../smallVoteBar/SmallVoteBar';
import React, {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { SmallComment } from '../smallComment/SmallComment';
// import { selectReplies, setReplies } from './commentSlice';


export const Comment = ({ name, score, body, created_utc, repliesv2}) => {
  const [viewReplies, setViewReplies] = useState('');
  // const replies = useSelector(selectReplies);
  // const dispatch = useDispatch();
  const date = new Date(created_utc*1000)
  const dateFormat = "at "+ date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  
  // function handleClick() {
  //   alert('view smaller comments')
  //   dispatch(setReplies({id: 1, name: 'elvis', body: 'hello i am elvis presley', created_utc: 'made 1 day ago'}))
  // }
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
          <p>{body}</p>
          <button onClick={()=>setViewReplies(!viewReplies)}>
            View Replies
          </button>
        </div>
      </div>
      <div
        className={['col-12', 'flex-column', 'd-flex'].join(' ')}
      >
        {viewReplies && repliesv2.map((reply, index) => 
          <SmallComment 
            key={index}
            name={reply.name}
            body={reply.body}
            created_utc={reply.created_utc}
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
  repliesv2: PropTypes.array,
};

Comment.defaultProps = {
  name: 'wenzel',
  score: 134,
  body: 'wenzelverse',
  created_utc: 1621552410
}