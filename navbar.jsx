import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1>Home</h1>
      <ul> 

        <li>
          <Link to="/categories">categories</Link>
        </li>
        <li>
          <Link to="/">details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


