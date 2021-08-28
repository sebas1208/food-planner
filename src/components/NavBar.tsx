import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <h1 className="is-size-2">
            <b>FoodPlanner!</b>
          </h1>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" id="navbarBasicExample">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/search">
            Search
          </Link>
          <Link className="navbar-item" to="/search">
            My Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
