import React, { Component } from "react";
import Blogpost from "./blogpost";
import { Outlet } from "react-router-dom";

class Blogs extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.blogs.map((blog) => (
          <Blogpost key={blog.id} blog={blog}></Blogpost>
        ))}
        <Outlet> </Outlet>
      </React.Fragment>
    );
  }
}

export default Blogs;
