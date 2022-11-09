import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__headers">
        <h1>Math Magicians</h1>
      </div>
      <div className="navbar__menu">
        <NavLink>Home</NavLink>
        <Link to="/Calculator">Calculator</Link>
        <NavLink>Quote</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
