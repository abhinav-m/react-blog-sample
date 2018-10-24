import React, { Component } from "react";
import { Link } from "react-router-dom";
import BlogPostlist from "../containers/BlogPostlist";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="display">
        <div>
          <Link to="/new">Add blog</Link>
        </div>
        <BlogPostlist />
      </div>
    );
  }
}

export default Home;
