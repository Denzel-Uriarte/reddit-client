import React from 'react';
import { Button } from '../button/Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Recommended = () => {
  return (
    <div className='justify-content-evenly bg-dark p-3 d-none d-md-flex'>
      <h3 className='text-white'>Recommended</h3>
      <Button 
        dark={false}
        size='wide'
        label='r/reddit'
        extra='mb-1'
        redirect='r/reddit'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/funny'
        extra='my-1'
        redirect='r/funny'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/AskReddit'
        extra='my-1'
        redirect='r/askreddit'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/gaming'
        extra='my-1'
        redirect='r/gaming'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/aww'
        extra='my-1'
        redirect='r/aww'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/Music'
        extra='my-1'
        redirect='r/music'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/pics'
        extra='my-1'
        redirect='r/pics'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/science'
        extra='my-1'
        redirect='r/science'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/worldnews'
        extra='mt-1'
        redirect='r/worldnews'
      />
    </div>
  )
}
 
Recommended.propTypes = {
};

Recommended.defaultProps = {
};
