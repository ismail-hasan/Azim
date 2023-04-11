import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='main-menu'>
          <h1>logo</h1>
          <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>

          </div>
          <button>button</button>
        </div>
    );
};

export default Header;