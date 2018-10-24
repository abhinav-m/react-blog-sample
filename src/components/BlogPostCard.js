import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = props => (
  <div className="blog-post-card">
    {props.data.title}
    <Link to={`/blog/${props.data.id}`}>Read more...</Link>
    <span onClick={props.removeBlogPost}>X</span>
  </div>
);

export default BlogPostCard;
