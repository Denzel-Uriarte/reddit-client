import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">WenzelVerse</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
  
};

NavBar.propTypes = {
};

NavBar.defaultProps = {
};
