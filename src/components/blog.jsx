import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { state } from "..";

function Blog() {
  const { id } = useParams();
  console.log(state.blogs[2]);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{state.blogs[id - 1].id}</h5>
        <p className="card-text">{state.blogs[id - 1].value}</p>
        <Link to="/" className="btn btn-primary">
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default Blog;
