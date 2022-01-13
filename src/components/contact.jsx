import React, { Component } from "react";
import { motion } from "framer-motion";

class Contact extends React.Component {
  style = {
    maxWidth: "800px",
    margin: "50px auto",
  };
  render() {
    return (
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="card"
        style={this.style}
      >
        <div className="card-body">
          <h5 className="card-title">We are available 24/7</h5>
          <p className="card-text">
            Muzaffarabad homes, Prime Minister House, near PSC office, opposite
            to New, Domail Muzaffarabad
          </p>
          <a
            href="https://goo.gl/maps/NXnUFVhGWSvF34YR8"
            className="btn btn-primary"
          >
            Open in Maps
          </a>
        </div>
      </motion.div>
    );
  }
}

export default Contact;
