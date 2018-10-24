import React, { Component } from "react";

import BlogPost from "./BlogPost";

class BlogPostsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-post-list">
        {this.props.blogPosts.map(blogPost => (
          <BlogPost data={blogPost} removeBlogPost={removeBlogPost} />
        ))}
      </div>
    );
  }
}

export default BlogPostsList;
