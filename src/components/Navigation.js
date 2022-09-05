import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlusSquare, FiArchive } from "react-icons/fi";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <FiHome title="Home" />
          </Link>
        </li>
        <li>
          <Link to="/notes/add">
            <FiPlusSquare title="Add note" />
          </Link>
        </li>
        <li>
          <Link to="/notes/archive">
            <FiArchive title="Archive" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
