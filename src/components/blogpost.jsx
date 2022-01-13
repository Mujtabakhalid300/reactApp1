import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class Blogpost extends React.Component {
  style = {
    maxWidth: "800px",
    margin: "25px auto",
    borderRadius: 25,
  };
  render() {
    return (
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: this.props.number * 0.4 }}
        className="card shadow-lg p-3 mb-5 bg-body rounded"
        style={this.style}
      >
        <div className="card-body">
          <h5 className="card-title">{this.props.blog.title}</h5>
          <p className="card-text">{this.props.blog.value}</p>
          <Link
            to={`/${this.props.blog.id}`}
            className="btn btn-primary"
            number={this.props.blog.id}
          >
            Full Article
          </Link>
        </div>
      </motion.div>
    );
  }
}

export default Blogpost;
