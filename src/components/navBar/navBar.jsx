import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTerm } from '../../pages/postspage/postsPageSlice';

export const NavBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTerm(searchInput));
    setSearchInput("");
  };
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">WenzelVerse</a>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchInput} onChange={handleInputChange}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
} 

NavBar.propTypes = {
};

NavBar.defaultProps = {
};
