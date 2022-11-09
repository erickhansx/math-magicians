import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.scss';

function NavBar() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: red;
  `;

  return (
    <div className="navbar">
      <div className="navbar__headers">
        <h1>Math Magicians</h1>
      </div>
      <div className="navbar__menu">
        <StyledLink to="Home">Home</StyledLink>
        <Link to="Calculator">Calculator</Link>
        <Link to="Quote">Quote</Link>
      </div>
    </div>
  );
}

export default NavBar;
