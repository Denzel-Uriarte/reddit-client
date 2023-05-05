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
        redirect='best'
      />
      <Button 
        dark={true}
        size='tall'
        label='Hot'
        redirect='hot'

      />
      <Button 
        dark={true}
        size='tall'
        label='New'
        redirect='new'

      />
      <Button 
        dark={true}
        size='tall'
        label='Top'
        redirect='top'

      />
      <Button 
        dark={true}
        size='tall'
        label='Rising'
        redirect='rising'

      />
    </div>
  )
}
 
Categories.propTypes = {
};

Categories.defaultProps = {
};
