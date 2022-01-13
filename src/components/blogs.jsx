import React from "react";
import Blogpost from "./blogpost";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Blogs(props) {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ margin: "20px" }}
    >
      {props.blogs.map((blog, i) => (
        <Blogpost number={i} key={blog.id} blog={blog}></Blogpost>
      ))}
      <Outlet> </Outlet>
    </motion.div>
  );
}

export default Blogs;
