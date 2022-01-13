import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./loader";
import { motion } from "framer-motion";

function Blog(props) {
  const { id } = useParams();
  const [state, setState] = useState([
    "this is the title",
    "this is the description",
  ]);

  useEffect(() => {
    setState(props);
  }, [props]);

  if (state.props === undefined) {
    return <Loader></Loader>;
  } else if (state.props.length) {
    return (
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="card"
        style={{ margin: "20px" }}
      >
        {console.log(state.props)}
        <div className="card-body">
          <h5 className="card-title">{state.props[id - 1].title}</h5>
          <p className="card-text">{state.props[id - 1].value}</p>
          <Link to="/" className="btn btn-primary">
            Go To Homepage
          </Link>
        </div>
      </motion.div>
    );
  } else {
    return <Loader></Loader>;
  }

  // return (
  //   <div className="card">
  //      {console.log(state.props)}
  //      <div className="card-body">
  //        <h5 className="card-title">hello</h5>
  //        <p className="card-text">hello</p>
  //        <Link to="/" className="btn btn-primary">
  //          Go To Homepage
  //        </Link>
  //      </div>
  //    </div>
  //  );
}

export default Blog;
