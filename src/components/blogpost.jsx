import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blogpost extends React.Component {
  style = {
    maxWidth: "800px",
    margin: "50px auto",
  };
  render() {
    return (
      <div className="card" style={this.style}>
        {/* {console.log(this.props)} */}
        <div className="card-body">
          <h5 className="card-title">{this.props.blog.id}</h5>
          <p className="card-text">{this.props.blog.value}</p>
          <Link to={`/${this.props.blog.id}`} className="btn btn-primary">
            Full Article
          </Link>
        </div>
      </div>
    );
  }
}

export default Blogpost;
