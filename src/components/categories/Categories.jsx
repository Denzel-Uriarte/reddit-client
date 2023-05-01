import React from 'react';
import { Button } from '../button/Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { setTerm } from '../../pages/postspage/postsPageSlice';
import { useDispatch } from 'react-redux';

export const Categories = () => {
  const dispatch = useDispatch()
  return (
    <div className='row w-100 justify-content-evenly bg-secondary p-3'>
      <Button 
        dark={true}
        size='tall'
        label='Best'
        onClick={()=>dispatch(setTerm('best.json'))}
      />
      <Button 
        dark={true}
        size='tall'
        label='Hot'
        onClick={()=>dispatch(setTerm('hot.json'))}

      />
      <Button 
        dark={true}
        size='tall'
        label='New'
        onClick={()=>dispatch(setTerm('new.json'))}

      />
      <Button 
        dark={true}
        size='tall'
        label='Top'
        onClick={()=>dispatch(setTerm('top.json'))}

      />
      <Button 
        dark={true}
        size='tall'
        label='Rising'
        onClick={()=>dispatch(setTerm('rising.json'))}

      />
    </div>
  )
}
 
Categories.propTypes = {
};

Categories.defaultProps = {
};
