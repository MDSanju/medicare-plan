import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

// navbar as a header
const Header = () => {
  // call the context API hook
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand text-warning fw-bold mx-5 fs-4">
          Medicare Plan
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navbar-custom">
            <NavLink
              to="/home"
              className="nav-link active mx-4"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link mx-4">
              About Us
            </NavLink>
            <NavLink className="nav-link mx-4" to="/tips">
              Health Tips
            </NavLink>
            {user?.displayName && (
              <span className="navbar-text text-info">
                {user.displayName}{" "}
                <span style={{ color: "white" }}>you want to?</span>
              </span>
            )}
            {user?.email ? (
              <button onClick={logout} className="btn btn-warning mx-4">
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="nav-link mx-4">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
