import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm panel-bg ">
      <div className="container">
        <Link className="Bookstore-CMS" to="/">BookStore CMS</Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item book">
            <Link className="nav-link" to="/">BOOKS</Link>
          </li>
          <li className="nav-item categories">
            <Link className="nav-link" to="/categories">CATEGORIES</Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item user-icon">
            <FaUserCircle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
