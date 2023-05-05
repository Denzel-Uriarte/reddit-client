import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchInput}`)
    setSearchInput(""); 
  };
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/best">WenzelVerse</NavLink>
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
