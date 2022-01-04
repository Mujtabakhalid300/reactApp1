import React from "react";
import { Link } from "react-router-dom";

class Blogpost extends React.Component {
  style = {
    maxWidth: "800px",
    margin: "25px auto",
    borderRadius: 25,
  };
  render() {
    return (
      <div className="card" style={this.style}>
        <div className="card-body">
          <h5 className="card-title">{this.props.blog.id}</h5>
          <p className="card-text">{this.props.blog.value}</p>
          <Link
            to={`/${this.props.blog.id}`}
            className="btn btn-primary"
            number={this.props.blog.id}
          >
            Full Article
          </Link>
        </div>
      </div>
    );
  }
}

export default Blogpost;
