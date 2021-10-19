import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <Link className={["navbar__link logo"]} to="/">
          nike
        </Link>
        <ul className="navbar">
          <li className="navbar__item">
            <Link className="navbar__link" to="/cart">
              Cart
            </Link> 
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/favorite">
              Favorite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
