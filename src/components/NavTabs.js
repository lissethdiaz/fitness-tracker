import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar ">
        <div className="container">
          <NavLink className="navbar" to="/">
            Fitness Tracker
          </NavLink>
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Track
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/history">
                  History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/goals">
                  Goals
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;