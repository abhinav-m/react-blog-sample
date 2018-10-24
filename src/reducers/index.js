import { ADD_BLOG_POST, REMOVE_BLOG_POST } from "../actions/actions";

const initialState = {
  blogs: [
    {
      id: 0,
      title: "First blog post",
      content: "Content of first blog post."
    },
    {
      id: 1,
      title: "Second blog post",
      content: "Content of second blog post."
    },
    {
      id: 2,
      title: "Third blog post",
      content: "Content of third blog post."
    }
  ]
};

const blogPostReducer = (state = initialState, action) => {
  let blogs;
  switch (action.type) {
    case ADD_BLOG_POST:
      blogs = state.blogs;
      blogs = blogs.concat(payload);
      return { ...state, blogs };

    case REMOVE_BLOG_POST:
      const { id } = payload;
      blogs = state.blogs;
      blogs = blogs.filter(blogPost => blogPost.id !== id);
      return { ...state, blogs };

    default:
      return state;
  }
};

export default blogPostReducer;
