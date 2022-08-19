import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">BookStore CMS</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categoris</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
