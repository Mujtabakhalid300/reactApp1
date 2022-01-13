import { motion } from "framer-motion";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand mx-4" to="/">
            BLOGX
          </Link>

          <ul className="nav nav-pills  mr-auto text-white">
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </motion.li>

            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="nav-item"
            >
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </motion.li>
          </ul>
        </nav>
      </motion.div>
    );
  }
}

export default Navbar;
