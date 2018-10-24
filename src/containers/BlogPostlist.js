import { connect } from "react-redux";
import { addBlogPost, removeBlogPost } from "../actions/actions";
import BlogPostsList from "../components/BlogList";

const mapStateToProps = state => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  addBlogPost: () => dispatch(addBlogPost(input.payload)),
  removeBlogPost: () => dispatch(removeBlogPost(input.payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostsList);
