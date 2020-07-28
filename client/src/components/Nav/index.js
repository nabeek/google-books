import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link
        className="navbar-brand"
        id="app-name"
        to={process.env.PUBLIC_URL + "/"}
      >
        Google Books
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
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to={process.env.PUBLIC_URL + "/"}>
            Search
          </Link>

          <Link
            className="nav-item nav-link"
            to={process.env.PUBLIC_URL + "/saved"}
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
