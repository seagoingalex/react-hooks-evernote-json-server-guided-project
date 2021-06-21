import React from "react";

// react-router-dom Imports
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
      <div className="nav-bar">
        <ul>
          <li className="nav-item">
            <h2>Clevernote</h2>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default Header;
