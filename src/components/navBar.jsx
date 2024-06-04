import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../icons8-sphere-60.png"; // Adjust the path if necessary

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/profiles">
        <img
          src={logo}
          alt="Logo"
          style={{ width: 40, height: 40, marginRight: 10 }}
        />
      </Link>
      <Link className="navbar-brand" to="/">
        Face Sphere
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/profiles">
            Profiles
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
