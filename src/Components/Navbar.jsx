import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success overflow-hidden  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link to="/">ALL</Link>
              </li>
              <li className="nav-item">
                <Link to="/fullstack">FULL STACK DEVELOPMENT</Link>
              </li>
              <li className="nav-item">
                <Link to="/datascience">DATA SCIENCE</Link>
              </li>
              <li className="nav-item">
                <Link to="/cybersecurity">CYBER SCECURITY</Link>
              </li>
              <li className="nav-item">
                <Link to="/career">CAREER</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
