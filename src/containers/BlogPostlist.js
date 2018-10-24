import { connect } from "react-redux";
import BlogPostsList from "../components/BlogList";

const mapStateToProps = state => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  addBlogPost: () => dispatch(addBlogPost()),
  removeBlogPost: () => dispatch(removeBlogPost())
});

connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostsList);
