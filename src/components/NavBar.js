import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.scss';

function NavBar() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    background-color: rgb(76, 76, 76);
    padding: 10px;
    border-radius: 5px;
  `;

  return (
    <div className="navbar">
      <div className="navbar__headers">
        <h1>Math Magicians</h1>
      </div>
      <div className="navbar__menu">
        <StyledLink to="Home">Home</StyledLink>
        <StyledLink to="Calculator">Calculator</StyledLink>
        <StyledLink to="Quote">Quote</StyledLink>
      </div>
    </div>
  );
}

export default NavBar;
