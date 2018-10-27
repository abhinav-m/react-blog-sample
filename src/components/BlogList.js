import React, { Component } from "react";

import BlogPostCard from "./BlogPostCard";

class BlogPostsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-post-list">
        {this.props.blogsData.map(blogPost => (
          <BlogPostCard
            data={blogPost}
            removeBlogPost={this.props.removeBlogPost}
          />
        ))}
      </div>
    );
  }
}

export default BlogPostsList;
