import React from 'react';
import { Button } from '../button/Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { NavLink } from 'react-router-dom';

export const Categories = () => {
  return (
    <div className='row w-100 justify-content-evenly bg-secondary p-3 d-none d-md-flex'>
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
    // <div class="dropdown">
    //   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    //     Dropdown button
    //   </button>
    //   <ul class="dropdown-menu">
    //     <li><NavLink class="dropdown-item" to="/best">Best</NavLink></li>
    //     <li><NavLink class="dropdown-item" to="/hot">Hot</NavLink></li>
    //     <li><NavLink class="dropdown-item" to="/new">New</NavLink></li>
    //     <li><NavLink class="dropdown-item" to="/top">Top</NavLink></li>
    //     <li><NavLink class="dropdown-item" to="/rising">Rising</NavLink></li><tes
    //   </ul>
    // </div>
  )
}
 
Categories.propTypes = {
};

Categories.defaultProps = {
};
