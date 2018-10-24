import React, { Component } from "react";

class BlogPostsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="blog-post-list">
        {this.props.blogPosts.map(blogPost => (
          <BlogPost data={blogPost} />
        ))}
      </div>
    );
  }
}
