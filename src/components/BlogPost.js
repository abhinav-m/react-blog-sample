import React from "react";
import { Link } from "react-router-dom";

const BlogPost = props => (
  <div className="blog-post-card">
    {props.data.title}
    <Link to={`/blog/${props.data.id}`}>Read more...</Link>
  </div>
);

export default Blogpost;
