import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
    </header>
  );
};

export default Header;
