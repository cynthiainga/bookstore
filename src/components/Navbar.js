import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="book-list">
      <li className="item">
        <NavLink to="/" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
          Categories
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
