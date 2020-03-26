import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__inner">
          <li className="navbar__link">
            <NavLink
              className="navbar__link--underline"
              activeClassName="active"
              exact={true}
              to="/spaceX-history"
            >
              History
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink
              className=" navbar__link--underline"
              activeClassName="active"
              exact={true}
              to="/spaceX-launches"
            >
              Launches
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
