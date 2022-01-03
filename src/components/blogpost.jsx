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
        <div className="card-body">
          <h5 className="card-title">{this.props.state.id}</h5>
          <p className="card-text">{this.props.state.value}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Blogpost;
