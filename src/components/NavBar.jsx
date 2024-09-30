import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Currículum</Link>
      <Link to="/portfolio">Portafolio</Link>
    </nav>
  );
};

export default NavBar;
