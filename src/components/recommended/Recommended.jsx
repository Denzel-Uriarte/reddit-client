import React from 'react';
import { Button } from '../button/Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { setTerm } from '../../pages/postspage/postsPageSlice';
import { useDispatch } from 'react-redux';


export const Recommended = () => {
  const dispatch = useDispatch()
  return (
    <div className='justify-content-evenly bg-dark p-3'>
      <h3 className='text-white'>Recommended</h3>
      <Button 
        dark={false}
        size='wide'
        label='r/reddit'
        extra='mb-1'
        redirect='r/reddit'
        onClick={()=>dispatch(setTerm('r/reddit.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/funny'
        extra='my-1'
        redirect='r/funny'
        onClick={()=>dispatch(setTerm('r/funny.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/AskReddit'
        extra='my-1'
        redirect='r/askreddit'
        onClick={()=>dispatch(setTerm('r/AskReddit.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/gaming'
        extra='my-1'
        redirect='r/gaming'
        onClick={()=>dispatch(setTerm('r/gaming.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/aww'
        extra='my-1'
        redirect='r/aww'
        onClick={()=>dispatch(setTerm('r/aww.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/Music'
        extra='my-1'
        redirect='r/music'
        onClick={()=>dispatch(setTerm('r/Music.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/pics'
        extra='my-1'
        redirect='r/pics'
        onClick={()=>dispatch(setTerm('r/pics.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/science'
        extra='my-1'
        redirect='r/science'
        onClick={()=>dispatch(setTerm('r/science.json'))}
      />
      <Button 
        dark={false}
        size='wide'
        label='r/worldnews'
        extra='mt-1'
        redirect='r/worldnews'
        onClick={()=>dispatch(setTerm('r/worldnews.json'))}
      />
    </div>
  )
}
 
Recommended.propTypes = {
};

Recommended.defaultProps = {
};
