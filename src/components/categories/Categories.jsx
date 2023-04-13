import React from 'react';
import { Button } from '../button/Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Categories = () => {
  return (
    <div className='row w-100 justify-content-evenly bg-secondary p-3'>
      <Button 
        dark={true}
        size='tall'
        label='Best'
      />
      <Button 
        dark={true}
        size='tall'
        label='Hot'
      />
      <Button 
        dark={true}
        size='tall'
        label='New'
      />
      <Button 
        dark={true}
        size='tall'
        label='Top'
      />
      <Button 
        dark={true}
        size='tall'
        label='Rising'
      />
    </div>
  )
}
 
Categories.propTypes = {
};

Categories.defaultProps = {
};
