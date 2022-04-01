import React from 'react';
import { FaUser } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => (
  <header className="header">
    <h1 className="bookstore-title">Bookstore CMS</h1>
    <Navbar />
    <div className="user-container flex-center-center clickable">
      <FaUser className="user-icon" />
    </div>
  </header>
);

export default Header;
