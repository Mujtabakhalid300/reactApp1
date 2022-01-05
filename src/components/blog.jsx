import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Blog(props) {
  const { id } = useParams();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.props[id - 1].id}</h5>
        <p className="card-text">{props.props[id - 1].value}</p>
        <Link to="/" className="btn btn-primary">
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default Blog;
