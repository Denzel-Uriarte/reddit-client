import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


// export const CreationInfo = ({ user, time, subreddit }) => {
//   const date = new Date(time*1000)
//   const dateFormat = "at "+ date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
//   const term = useSelector(selectTerm)
//   const dispatch = useDispatch()
//   const setSubreddit = () => {
//     dispatch(setTerm(`r/${subreddit}.json`))
//   }
//   return (
//     <div>
//       {subreddit ? 
//       <div onClick={setSubreddit}>
//         <p className='fw-light m-0'>{`r/${subreddit} - Posted by u/${user} ${dateFormat}`}</p>
//       </div>
//       :
//         <p className='fw-light m-0'>{`Posted by u/${user} ${dateFormat}`}</p>
//       }
//     </div>
    
    
//   );
// };


// /**
//  * Primary UI component for user interaction
//  */
// CreationInfo.propTypes = {
//   /**
//    * Who posted this?
//    */
//   user: PropTypes.string.isRequired,
//   /**
//    * How long ago was this posted?
//    */
//   time: PropTypes.number.isRequired,
// };

// CreationInfo.defaultProps = {
// };