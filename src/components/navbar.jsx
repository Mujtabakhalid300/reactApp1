import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand mx-4" to="/">
            BLOGX
          </Link>

          <ul className="nav nav-pills  mr-auto text-white">
            <li className="nav-item ">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
