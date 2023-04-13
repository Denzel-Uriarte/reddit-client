import React from 'react';
import { Button } from '../button/Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Recommended = () => {
  return (
    <div className='col-3 justify-content-evenly bg-dark p-3'>
      <h3 className='text-white'>Recommended</h3>
      <Button 
        dark={false}
        size='wide'
        label='r/announcements'
        extra='mb-1'
      />
      <Button 
        dark={false}
        size='wide'
        label='r/funny'
        extra='my-1'

      />
      <Button 
        dark={false}
        size='wide'
        label='r/AskReddit'
        extra='my-1'

      />
      <Button 
        dark={false}
        size='wide'
        label='r/gaming'
        extra='my-1'

      />
      <Button 
        dark={false}
        size='wide'
        label='r/aww'
        extra='my-1'

      />
      <Button 
        dark={false}
        size='wide'
        label='r/Music'
        extra='my-1'

      />
      <Button 
        dark={false}
        size='wide'
        label='r/pics'
        extra='my-1'

      />
      <Button 
        dark={false}
        size='wide'
        label='r/science'
        extra='my-1'

      />
      <Button 
        dark={false}
        size='wide'
        label='r/worldnews'
        extra='mt-1'

      />
    </div>
  )
}
 
Recommended.propTypes = {
};

Recommended.defaultProps = {
};
