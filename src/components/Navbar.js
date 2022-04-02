import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="books-list links">
      <li className="nav-item1">
        <NavLink to="/" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
          BOOKS
        </NavLink>
      </li>
      <li className="nav-item1">
        <NavLink to="/categories" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
          CATEGORIES
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
