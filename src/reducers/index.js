import ADD_BLOG_POST from "../actions";
import REMOVE_BLOG_POST from "../actions";

const initialState = {
  blogs: []
};

const blogPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      let { blogs } = state;
      blogs = blogs.concat(payload);
      return { ...initialState, blogs };

    case REMOVE_BLOG_POST:
      const { id } = payload;
      let { blogs } = state;
      blogs = blogs.filter(blogPost => blogPost.id !== id);
      return { ...initialState, blogs };

    default:
      return state;
  }
};
